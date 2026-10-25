// Lê o currículo em PDF no build. Trocou o PDF em public/, o site muda junto:
// Experiências (Sobre) e Conquistas (Formação + Cursos) saem daqui.
import { readFile } from 'node:fs/promises';
import { getDocumentProxy } from 'unpdf';
import extras from '../data/experiencias-extras.json';

export const ARQUIVO = 'public/curriculo-gabriel-torres.pdf';

export type Experiencia = { cargo: string; empresa: string | null; periodo: string; texto: string };
export type Curso = { nome: string; periodo: string; itens: string[]; meses: number | null };
export type Formacao = { curso: string; instituicao: string; periodo: string };
export type Curriculo = { formacao: Formacao[]; cursos: Curso[]; experiencias: Experiencia[] };

const SECOES = { 'Resumo': 'resumo', 'Formação Superior': 'formacao', 'Cursos Complementares': 'cursos', 'Experiência': 'experiencias' } as const;
const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

async function linhas(): Promise<string[]> {
  const pdf = await getDocumentProxy(new Uint8Array(await readFile(ARQUIVO)));
  const todas: string[] = [];
  for (let n = 1; n <= pdf.numPages; n++) {
    const { items } = await (await pdf.getPage(n)).getTextContent();
    // Junta os pedaços de texto que estão na mesma altura da página.
    const porAltura = new Map<number, string>();
    for (const item of items) {
      if (!('str' in item)) continue;
      const y = Math.round(item.transform[5]);
      porAltura.set(y, (porAltura.get(y) ?? '') + item.str);
    }
    todas.push(...[...porAltura].sort((a, b) => b[0] - a[0]).map(([, l]) => l.replace(/\s+/g, ' ').trim()));
  }
  return todas.filter(Boolean);
}

// "mar. de 2025 – mai. de 2025" → 3 meses (contando os dois meses das pontas).
function meses(periodo: string): number | null {
  const datas = [...periodo.toLowerCase().matchAll(/([a-zç]{3})\.?\s*(?:de\s*)?(\d{4})/g)]
    .map(([, mes, ano]) => ({ mes: MESES.indexOf(mes), ano: Number(ano) }))
    .filter((d) => d.mes >= 0);
  if (datas.length === 2) return (datas[1].ano - datas[0].ano) * 12 + datas[1].mes - datas[0].mes + 1;
  const anos = periodo.match(/\d{4}/g);
  return anos?.length === 2 ? (Number(anos[1]) - Number(anos[0]) + 1) * 12 : null;
}

// Tira os travessões do PDF: "mar. de 2025 – mai. de 2025" vira "mar. de 2025 a mai. de 2025".
const semTravessao = (t: string) => t.replace(/\s*[–—]\s*|\s+-\s+/g, ' a ');
const nomeLimpo = (t: string) => t.replace(/\s*[–—]\s*/g, ', ');
// Fim do período como número (ano * 12 + mês) para ordenar. Só o ano conta como dezembro.
export function fimDoPeriodo(periodo: string): number {
  const datas = [...periodo.toLowerCase().matchAll(/([a-zç]{3})\.?\s*(?:de\s*)?(\d{4})/g)]
    .filter(([, mes]) => MESES.includes(mes))
    .map(([, mes, ano]) => Number(ano) * 12 + MESES.indexOf(mes));
  if (datas.length) return datas.at(-1)!;
  const ano = periodo.match(/\d{4}/g)?.at(-1);
  return ano ? Number(ano) * 12 + 11 : 0;
}

const partes = (linha: string) => linha.split('|').map((p) => p.trim()).filter(Boolean);

let cache: Promise<Curriculo> | null = null;

export function curriculo() {
  cache ??= ler();
  return cache;
}

async function ler(): Promise<Curriculo> {
  const r: Curriculo = { formacao: [], cursos: [], experiencias: [] };
  let secao: (typeof SECOES)[keyof typeof SECOES] | null = null;

  for (const linha of await linhas()) {
    if (linha in SECOES) {
      secao = SECOES[linha as keyof typeof SECOES];
      continue;
    }
    const cabecalho = linha.includes('|');

    if (secao === 'formacao' && cabecalho) {
      const [titulo, periodo] = partes(linha);
      const [curso, ...resto] = titulo.split(' - ');
      r.formacao.push({ curso: curso.trim(), instituicao: resto.join(' - ').replace(/\s+,/g, ',').trim(), periodo: semTravessao(periodo) });
    } else if (secao === 'cursos') {
      if (cabecalho) {
        const [nome, periodo] = partes(linha);
        r.cursos.push({ nome: nomeLimpo(nome), periodo: semTravessao(periodo), itens: [], meses: meses(periodo) });
      } else {
        const curso = r.cursos.at(-1);
        if (!curso) continue;
        const marcador = /^[●•▪-]\s*/;
        // Linha sem marcador continua o item anterior.
        if (marcador.test(linha) || !curso.itens.length) curso.itens.push(linha.replace(marcador, ''));
        else curso.itens[curso.itens.length - 1] += ` ${linha}`;
      }
    } else if (secao === 'experiencias') {
      if (cabecalho) {
        const p = partes(linha);
        const periodo = p.pop()!;
        const [cargo, empresa] = p.length > 1 ? [p[1], p[0]] : [p[0], null];
        r.experiencias.push({ cargo, empresa, periodo: semTravessao(periodo), texto: '' });
      } else {
        const exp = r.experiencias.at(-1);
        if (exp) exp.texto = `${exp.texto} ${linha}`.trim();
      }
    }
  }
  // Experiências que não cabem no PDF (src/data/experiencias-extras.json) entram junto,
  // e tudo fica do mais recente para o mais antigo pelo último ano do período.
  const ultimoAno = (e: Experiencia) => Number(e.periodo.match(/\d{4}/g)?.at(-1) ?? 0);
  const doPdf = new Set(r.experiencias.map((e) => `${e.cargo}|${e.periodo}`));
  r.experiencias.push(
    ...(extras as Experiencia[])
      .map((e) => ({ ...e, periodo: semTravessao(e.periodo) }))
      .filter((e) => !doPdf.has(`${e.cargo}|${e.periodo}`)),
  );
  r.experiencias.sort((a, b) => ultimoAno(b) - ultimoAno(a));
  return r;
}

export type Raridade = 'comum' | 'rara' | 'epica' | 'lendaria';

// Formação superior é sempre lendária; cursos sobem de raridade com a duração.
export function raridade(meses: number | null, formacao = false): Raridade {
  if (formacao) return 'lendaria';
  if (meses === null) return 'comum';
  if (meses >= 24) return 'epica';
  if (meses >= 6) return 'rara';
  return 'comum';
}

export const NOMES_RARIDADE: Record<Raridade, string> = { comum: 'Comum', rara: 'Rara', epica: 'Épica', lendaria: 'Lendária' };
