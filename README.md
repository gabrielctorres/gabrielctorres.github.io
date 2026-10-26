# Portfólio de Gabriel Torres

Meu portfólio de programador de jogos. Feito em [Astro](https://astro.build) e publicado em https://gabrielctorres.github.io/.

## Rodar no computador

```sh
npm install
npm run dev
```

## Adicionar um jogo

1. Copie a pasta `src/content/jogos/_modelo/` e dê a ela o nome do jogo (ex.: `meu-jogo`).
2. Troque a imagem `capa.webp` pela capa do jogo.
3. Preencha o arquivo `jogo.md`.

Pronto. O jogo aparece no site em ordem de data.

## Atualizar o currículo

Troque o arquivo `public/curriculo-gabriel-torres.pdf`. As Experiências e as Conquistas do site são lidas dele.

O site lê as seções `EXPERIÊNCIA`, `FORMAÇÃO ACADÊMICA` e `CURSOS`, com cabeçalhos no formato `Nome | Lugar | período` (datas em `MM/AAAA` ou `AAAA`). Na Experiência, o período pode vir numa linha de baixo (`Programa | 1ª edição: 06/2025 | ...`) e cada `•` vira um item da lista.
