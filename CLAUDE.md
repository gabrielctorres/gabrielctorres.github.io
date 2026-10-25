# CLAUDE.md — regras do portfólio de Gabriel Torres

Portfólio de **programador de jogos** (Unity/C#), recriado do zero em out/2026.
Documentos de referência: [docs/PRD.md](docs/PRD.md) (o quê e por quê) e [docs/GRILL-ME.md](docs/GRILL-ME.md) (decisões em aberto).
Quando uma decisão do grill-me for respondida, atualize o PRD **e** esta página no mesmo commit.

## Antes de começar
- **Site criado em 22/10/2026 (Astro), a pedido do Gabriel, antes da V0 completa.** A V0 continua pendente: os textos "O que eu programei" de cada projeto ainda precisam ser rascunhados e revisados por ele. A stack (Astro, Q3) e a paleta (Q14) estão fechadas.
- Estrutura: um jogo por pasta em `src/content/jogos/<id>/` (`jogo.md` + capa; modelo em `_modelo/`), currículo lido do PDF por `src/lib/curriculo.ts` (Experiências e Conquistas), páginas em `src/pages/`, estilos em `src/styles/global.css`, mídia gerada por `scripts/midia.py` em `public/media/`. Textos fixos da interface em `src/i18n/pt.ts`. Ícones e o logo "G" são pixel art desenhada em grade em `src/components/Icone.astro`; nada de emoji nem imagem para eles.
- Leia o PRD inteiro antes de propor arquitetura. Um `TBD (Qn)` no PRD não pode ser decidido por conta própria: pergunte.
- Para UI, carregue a skill `frontend-design`. Para revisar UI, use `web-design-guidelines`.

## Ruptura com o site antigo
- **Código do site anterior não é reaproveitado** (nada de copiar HTML, CSS, JS ou nomes de classe). Desde 22/10/2026 o Gabriel liberou o **layout e o visual antigos como referência**: card como objeto com imagem em cima, fonte Rubik, página escura com planos navy, seções separadas só por espaço.
- O site antigo deixa só **conteúdo**: textos, dados dos projetos e mídia, todos em [`_acervo/`](_acervo/ACERVO.md).
- **Nunca apagar nem editar `_acervo/`.** É fonte somente leitura. Para usar um asset, converta ou copie para a pasta do site novo.

## Conteúdo e texto
- Português do Brasil, primeira pessoa, na voz do Gabriel: tom simples, conversa direta, sem slogans e sem autopromoção inflada.
- Não inventar fatos: datas, papéis, números, links e créditos vêm do acervo ou do Gabriel. Se faltar dado, deixe o campo vazio e pergunte.
- Status do Playground Rumble: "Em desenvolvimento com wishlist aberta na Steam", sem datas. Textos sem travessão, dois-pontos de efeito, ponto e vírgula e vírgulas sobrando (frases curtas; vírgula só em enumeração). A seção "O Futuro" ("meta 2025") do acervo não entra. O Random Commander não tem data nem link.
- Idioma: V1 só em PT, com a estrutura pronta para EN na V1.1.
- Todo projeto mostra **o que o Gabriel programou** (sistemas, não só "fiz um jogo"), mais papel, equipe e duração.
- Projetos em equipe trazem os créditos dos colegas.

## Dados
- Adicionar jogo = copiar `src/content/jogos/_modelo/`, trocar a capa e preencher o `jogo.md`, sem tocar em HTML, CSS ou JS. Experiências e Conquistas mudam trocando o PDF do currículo.
- Sem abas, tags ou filtros: os projetos aparecem numa grade única, do mais recente para o mais antigo.

## Visual
- **Desde 25/10/2026 o visual é o conceito 17 ("Portátil" em todas as páginas, cores do conceito 02)**, escolhido pelo Gabriel. Substitui a paleta navy/pêssego e a regra de separar só por espaço. Detalhes e tokens em [DESIGN.md](DESIGN.md).
- Cores: fundo #101217, painel #181B22, bordas #2A2F3A / #3A4150 / #6B7385, texto #C9CDD6 / #EEF0F4 / #8A91A1, **âmbar #F2B544 como única cor de destaque** (seleção, ação, status), foco #EEF0F4. Nada de rosa. Tokens em `:root` de `src/styles/global.css`; nenhuma cor hex solta em componente.
- Fontes: Press Start 2P (títulos, menu, botões; nunca em maiúsculas forçadas, ela não tem maiúsculas acentuadas), Silkscreen (rótulos), Rubik (texto corrido). Bordas de 4 px, cantos retos.
- A interface de jogo precisa ter função (foco de seleção, stats de fase, HUD). Proibido: clichê "gamer" decorativo, barras de nível de skill, gradientes decorativos, intro ou loading falso, som automático.
- Uma ideia memorável por página. O resto fica quieto.

## Performance e acessibilidade (critérios do PRD)
- Nenhum arquivo de mídia > **2 MB**. GIF não entra no site: converta para MP4 (H.264) + WebM. Imagens em AVIF/WebP com `srcset` e `loading="lazy"` (exceto acima da dobra).
- Vídeo: `muted loop playsinline preload="none"`, carregado só no hover, no foco ou quando aparece na tela.
- Primeira carga ≤ 300 KB, sem contar vídeo. Lighthouse mobile: Performance ≥ 90; Acessibilidade e Boas práticas = 100.
- Tudo funciona por teclado, com foco sempre visível. Respeitar `prefers-reduced-motion` (sem vídeo automático, sem animação não essencial).
- Responsivo a partir de 360 px, sem rolagem horizontal.
- Currículo e e-mail ficam acessíveis em qualquer ponto do site (HUD fixo).

## Easter egg
- Carregado só por `import()` dinâmico quando ativado, com peso zero na carga inicial.
- Jogo incremental (Q4), tema ainda aberto. Canvas 2D e JS vanilla, sem engine. `localStorage` sempre dentro de try/catch.
- Arte: só arte própria do Gabriel, a menos que ele confirme autorização dos colegas.

## Stack e deploy
- Hospedagem: GitHub Pages, site 100 % estático, sem backend, sem cookies, sem analytics de terceiros.
- Sem framework de UI (React/Vue) e sem engine de jogo. Build: **Astro** com JS vanilla (Q3), deploy pelo GitHub Actions.
- Domínio: `gabrielctorres.github.io`. O domínio `smitedev.online` pode ser ligado depois.
- Dependências e scripts de CDN sempre com versão exata.

## Git
- Commits em pt-BR, curtos e no imperativo ("adiciona página de projeto").
- Não commitar mídia original pesada fora de `_acervo/`.
- Commit e push só quando o Gabriel pedir.
