// Lê o currículo em PDF no build. Trocou o PDF em public/, o site muda junto:
// Experiências (Sobre) e Conquistas (Formação + Cursos) saem daqui.
import { readFile } from 'node:fs/promises';
import { getDocumentProxy } from 'unpdf';

export const ARQUIVO = 'public/curriculo-gabriel-torres.pdf';

export type Experiencia = { cargo: string; empresa: string | null; detalhe: string | null; periodo: string; itens: string[] };
export type Curso = { nome: string; instituicao: string; periodo: string; meses: number | null };
export type Formacao = { curso: string; instituicao: string; periodo: string };
export type Curriculo = { formacao: Formacao[]; cursos: Curso[]; experiencias: Experiencia[] };

const SECOES = {
  'RESUMO': null,
  'HABILIDADES': null,
  'EXPERIÊNCIA': 'experiencias',
  'PROJETOS': null,
  'FORMAÇÃO ACADÊMICA': 'formacao',
  'CURSOS': 'cursos',
} as const;

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

// Datas do PDF em "MM/AAAA" ou só "AAAA", como número (ano * 12 + mês).
// Só o ano conta como janeiro no início do período e dezembro no fim.
function datas(periodo: string): { inicio: number; fim: number }[] {
  return [...periodo.matchAll(/(?:(\d{2})\/)?(\d{4})/g)].map(([, mes, ano]) => ({
    inicio: Number(ano) * 12 + (mes ? Number(mes) - 1 : 0),
    fim: Number(ano) * 12 + (mes ? Number(mes) - 1 : 11),
  }));
}

// "2014 - 2018" → 60 meses (contando as pontas). Um ano sozinho não diz a duração.
function meses(periodo: string): number | null {
  const d = datas(periodo);
  return d.length === 2 ? d[1].fim - d[0].inicio + 1 : null;
}

// Fim do período para ordenar da mais recente para a mais antiga.
export function fimDoPeriodo(periodo: string): number {
  return datas(periodo).at(-1)?.fim ?? 0;
}

// Tira os travessões do PDF: "01/2024 - 11/2024" vira "01/2024 a 11/2024".
const semTravessao = (t: string) => t.replace(/\s*[–—]\s*|\s+-\s+/g, ' a ');
const temData = (t: string) => /\d{4}/.test(t);
const partes = (linha: string) => linha.split('|').map((p) => p.trim()).filter(Boolean);

let cache: Promise<Curriculo> | null = null;

export function curriculo() {
  cache ??= ler();
  return cache;
}

// Lê só as seções que o site mostra, na ordem em que estão no PDF.
async function ler(): Promise<Curriculo> {
  const r: Curriculo = { formacao: [], cursos: [], experiencias: [] };
  let secao: (typeof SECOES)[keyof typeof SECOES] = null;

  for (const linha of await linhas()) {
    if (linha in SECOES) {
      secao = SECOES[linha as keyof typeof SECOES];
      continue;
    }
    const cabecalho = linha.includes('|');

    if (secao === 'formacao' && cabecalho) {
      const [curso, instituicao, periodo = ''] = partes(linha);
      r.formacao.push({ curso, instituicao, periodo: semTravessao(periodo) });
    } else if (secao === 'cursos' && cabecalho) {
      const [nome, instituicao, periodo = ''] = partes(linha);
      r.cursos.push({ nome, instituicao, periodo: semTravessao(periodo), meses: meses(periodo) });
    } else if (secao === 'experiencias') {
      const exp = r.experiencias.at(-1);
      if (cabecalho && exp && !exp.periodo) {
        // Linha abaixo de "Cargo | Empresa": "Programa | 1ª edição: 06/2025 | 2ª edição: ...".
        const p = partes(linha);
        if (!temData(p[0])) exp.detalhe = p.shift()!;
        exp.periodo = semTravessao(p.join(' · '));
      } else if (cabecalho) {
        // "Cargo | Empresa | período" (o período pode vir na linha de baixo).
        const p = partes(linha);
        const periodo = temData(p.at(-1)!) ? p.pop()! : '';
        r.experiencias.push({ cargo: p[0], empresa: p[1] ?? null, detalhe: null, periodo: semTravessao(periodo), itens: [] });
      } else if (exp) {
        const marcador = /^[●•▪-]\s*/;
        // Linha sem marcador continua o item anterior (texto que quebrou de linha no PDF).
        if (marcador.test(linha) || !exp.itens.length) exp.itens.push(linha.replace(marcador, ''));
        else exp.itens[exp.itens.length - 1] += ` ${linha}`;
      }
    }
  }
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
