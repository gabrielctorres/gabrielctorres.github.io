# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Recrutadora (RH / talent):** chega pelo LinkedIn, quase sempre no celular, com menos de 1 minuto. Quer currículo e contato.
- **Lead técnico de estúdio:** quer saber o que o Gabriel programou e como. Abre 1 ou 2 projetos, clica no código e talvez jogue.
- **Jogador / comunidade:** chega pela Steam ou pelo itch. Quer o Playground Rumble e a wishlist.

## Product Purpose

Portfólio do Gabriel Torres, programador de jogos (Unity/C#), para conseguir vaga de programação de jogos. Sucesso: quem chega acha currículo e e-mail em até 10 s e diz qual é o projeto principal em até 30 s. Um lead técnico sai sabendo quais sistemas ele escreveu.

## Positioning

Um programador que mostra engenharia, não só jogos prontos: cada projeto diz o que ele programou (sistemas), o papel, a equipe e a duração. O projeto principal é o Playground Rumble, jogo autoral em desenvolvimento com wishlist aberta na Steam.

## Operating Context

- Visitante chega por link do LinkedIn, Steam ou itch, muitas vezes no celular.
- Lead técnico avalia pelo código no GitHub e pelos builds jogáveis no itch.io.
- O Gabriel mantém o site sozinho, com pouco tempo (o Rumble tem prioridade): adicionar projeto = editar `src/data/projetos.json` + mídia em `public/media/`.

## Capabilities and Constraints

- Astro com saída estática e JS vanilla, sem framework de UI e sem engine. GitHub Pages em `gabrielctorres.github.io`, deploy por GitHub Actions. Sem backend, cookies ou analytics de terceiros.
- Rotas: `/` (Sobre, página inicial), `/jogos/` (seleção de jogos), `/projetos/<id>/`, `/conquistas/` e `/contato/`.
- Currículo (PDF), e-mail e GitHub acessíveis em qualquer ponto do site.
- Grade única de projetos, do mais recente para o mais antigo. Sem abas, tags ou filtros.
- Navegação completa por teclado (setas nos cards), foco sempre visível.
- Mídia: nenhum arquivo > 2 MB; sem GIF (MP4 + WebM); imagens WebP/AVIF com `srcset` e lazy. Vídeo só no hover/foco/visível, `muted loop playsinline preload="none"`.
- Primeira carga ≤ 300 KB sem vídeo. Lighthouse mobile: Performance ≥ 90, Acessibilidade e Boas práticas = 100.
- Responsivo a partir de 360 px.
- V1 só em português; estrutura pronta para EN na V1.1.
- Proibido: intro ou loading falso, som automático, barras de nível de skill, clichê "gamer" decorativo sem função.
- Easter egg (V2): jogo incremental em Canvas 2D carregado só por `import()` dinâmico; tema em aberto.
- Em aberto: textos "O que eu programei" de Playground Rumble, Order UP!, Birl.com e Arrai Defensivo (o layout deve funcionar com o bloco ausente); data e link do Random Commander; ofuscação do e-mail.

## Brand Commitments

- Nome: Gabriel Torres. Título: "Programador de jogos".
- Voz: português do Brasil, primeira pessoa, tom simples e direto, sem slogans nem autopromoção inflada.
- Logo "G" em pixel art na cor de destaque (`src/components/Icone.astro`, nome `logo`); o favicon é o mesmo desenho, em lima sobre fundo transparente).
- Status do Rumble sempre "Em desenvolvimento, wishlist aberta na Steam", sem datas.
- Em 25/10/2026 o Gabriel escolheu o conceito 17 do canvas "Portfólio Game Dev — Conceitos": o site como console portátil (layout do 15A) em todas as páginas, com as cores do conceito 02. Páginas: Jogos (seleção de cartuchos), página do jogo, Sobre, Conquistas (formação e cursos do currículo) e Contato (formulário que abre o app de e-mail). Fontes: pixel nos títulos, Rubik no texto corrido. Ainda em 25/10/2026 ele fixou a paleta "Grafite e lima" (neutros do conceito 02 com destaque verde-lima #9BE15D no lugar do âmbar) e trocou as fontes para Space Mono nos rótulos e Nunito Sans no texto corrido.

## Evidence on Hand

- 8 projetos, um por pasta em `src/content/jogos/`: Clube do Jogo, Partitura de Conflito, Order UP!, Arrai Defensivo, Playground Rumble, Alexandre: Em Busca da Relíquia Perdida, Guerra dos Feriados, Random Commander.
- Capa de cada jogo na pasta dele em `src/content/jogos/`; foto do Gabriel em `src/assets/gabriel.jpg` (avatar do GitHub); vídeos MP4 + WebM do Rumble, Arrai, Alexandre e Guerra; currículo em `public/curriculo-gabriel-torres.pdf`.
- Não existem depoimentos, números de vendas, prêmios ou métricas. Não inventar.

## Product Principles

1. O recrutador resolve tudo em 10 s; o lead técnico encontra profundidade em 1 clique.
2. Mostrar sistemas programados, não só jogos feitos.
3. A interface de jogo só entra quando tem função (seleção, foco, stats, HUD).
4. Nunca inventar fatos: dado ausente fica vazio.
5. Manutenção de um homem só: um projeto novo entra só pelo JSON.

## Accessibility & Inclusion

Teclado completo com foco visível, `prefers-reduced-motion` respeitado (sem vídeo automático nem animação não essencial), contraste AA, Lighthouse Acessibilidade = 100.
