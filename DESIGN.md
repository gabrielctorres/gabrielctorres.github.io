---
name: Gabriel Torres, programador de jogos
description: Portfólio como um console portátil escuro. Cada página é uma tela do console, com menu de cursor, cartuchos e HUD.
colors:
  fundo: "#101217"
  painel: "#181B22"
  painel-alto: "#222733"
  linha: "#2A2F3A"
  borda: "#3A4150"
  borda-forte: "#6B7385"
  texto: "#C9CDD6"
  texto-forte: "#EEF0F4"
  texto-suave: "#8A91A1"
  destaque: "#9BE15D"
  destaque-claro: "#B8EE86"
  sobre-destaque: "#101217"
  foco: "#EEF0F4"
  erro: "#FF9B8A"
  comum: "#8A91A1"
  rara: "#EEF0F4"
  epica: "#B8EE86"
  lendaria: "#9BE15D"
typography:
  titulo-pagina:
    fontFamily: "Press Start 2P"
    fontSize: "clamp(20px, 2vw + 10px, 30px)"
    lineHeight: 1.4
  titulo-painel:
    fontFamily: "Press Start 2P"
    fontSize: "clamp(16px, 1.2vw + 8px, 22px)"
    lineHeight: 1.45
  menu:
    fontFamily: "Press Start 2P"
    fontSize: "16px"
  titulo-secao:
    fontFamily: "Press Start 2P"
    fontSize: "14px"
    lineHeight: 1.6
  botao:
    fontFamily: "Press Start 2P"
    fontSize: "12px"
  rotulo:
    fontFamily: "Space Mono"
    fontSize: "14px"
    textTransform: "uppercase"
  rotulo-pequeno:
    fontFamily: "Space Mono"
    fontSize: "13px"
  selo:
    fontFamily: "Space Mono"
    fontSize: "12px"
  texto:
    fontFamily: "Nunito Sans Variable"
    fontSize: "16px"
    lineHeight: 1.65
  texto-caixa:
    fontFamily: "Nunito Sans Variable"
    fontSize: "15px"
    lineHeight: 1.6
rounded:
  none: "0"
spacing:
  pixel: "4px"
  margem: "clamp(16px, 3vw, 40px)"
  hud-h: "64px"
  coluna-lateral: "300px"
  gap-console: "48px"
  gap-tela: "24px"
  gap-grade: "14px"
components:
  hud:
    backgroundColor: "{colors.painel}"
    height: "{spacing.hud-h}"
    borderBottom: "4px solid {colors.linha}"
  cartao-titulo:
    backgroundColor: "{colors.painel}"
    border: "4px solid {colors.borda}"
    shadow: "6px 6px 0 {colors.destaque}"
    padding: "22px"
  caixa:
    backgroundColor: "{colors.painel}"
    border: "4px solid {colors.borda}"
    padding: "18px 20px"
  botao-primario:
    backgroundColor: "{colors.destaque}"
    textColor: "{colors.sobre-destaque}"
    shadow: "4px 4px 0 {colors.borda}"
    minHeight: "48px"
  botao:
    backgroundColor: "transparent"
    border: "4px solid {colors.borda}"
    textColor: "{colors.texto}"
    minHeight: "48px"
  cartucho:
    backgroundColor: "{colors.painel}"
    border: "4px solid {colors.borda}"
  cartucho-selecionado:
    border: "4px solid {colors.destaque}"
    labelBackground: "{colors.destaque}"
  visor:
    backgroundColor: "{colors.painel-alto}"
    border: "4px solid {colors.borda}"
    aspectRatio: "16 / 9"
  campo:
    backgroundColor: "{colors.fundo}"
    border: "4px solid {colors.borda-forte}"
    focusBorder: "{colors.destaque}"
  kbd:
    backgroundColor: "{colors.painel-alto}"
    border: "2px solid {colors.borda}, 4px embaixo"
---

# Design System: Gabriel Torres, programador de jogos

## Overview

**Norte criativo: "O portátil"**

O site é um console de bolso. Toda página tem as mesmas peças fixas: o HUD em cima (o "G", e-mail e currículo), a coluna lateral com o cartão de título e o menu de cursor, a tela no meio e a legenda de teclas embaixo (só no desktop). Mudar de página é mudar de tela no console: o item atual do menu fica aceso em lima.

A ideia memorável é a seleção de jogos da página inicial: os projetos são cartuchos, escolher um troca o visor com uma varredura em degraus e mostra a ficha ao lado. Setas do teclado trocam o cartucho, Enter abre. É interface de jogo com função, não enfeite.

Origem: conceito 17 ("Portátil (15A) em todas as páginas · cores da 02") do canvas "Portfólio Game Dev — Conceitos", escolhido pelo Gabriel em 25/10/2026. No mesmo dia ele fixou a paleta "Grafite e lima": os neutros da 02 com o verde-lima no lugar do âmbar.

**Características:**
- Fundo quase preto com a grade de 6 px da matriz de pixels do LCD (única textura do site).
- Uma cor só de destaque, lima, para seleção, ação e status.
- Bordas de 4 px (um "pixel" do console), cantos retos, sem raio.
- Sombras duras deslocadas só em duas peças: o cartão de título e a caixa de diálogo do contato (6 px lima), e o botão primário (4 px cinza), que afunda ao ser apertado.
- Três vozes de tipo: Press Start 2P para títulos e botões, Space Mono para rótulos, Nunito Sans para ler.

## Colors

Escuro frio e neutro, com um verde-lima reservado.

- **Fundo #101217** e **painel #181B22**: os dois planos. Tudo o que é objeto (HUD, caixas, cartuchos, rodapé) sobe para o painel.
- **Painel alto #222733**: fundo do visor e das teclas.
- **Linha #2A2F3A**: borda do HUD e do rodapé. **Borda #3A4150**: contorno de caixas e cartuchos. **Borda forte #6B7385**: hover e campos de formulário (contraste 3:1 sobre o fundo).
- **Texto #C9CDD6**, **texto forte #EEF0F4** (títulos), **texto suave #8A91A1** (rótulos; 5,9:1 no fundo, 5,4:1 no painel).
- **Lima #9BE15D**: cartucho selecionado, item atual do menu, botão primário, currículo, status piscante, títulos de seção. **Lima claro #B8EE86**: hover.
- **Foco #EEF0F4**: contorno de 3 px com afastamento de 3 px. Fica claro ao lado do lima da seleção.

- **Raridade** (só nas Conquistas): escala do grafite ao lima: comum #8A91A1, rara #EEF0F4, épica #B8EE86 (lima claro), lendária lima. Sempre com o nome da raridade escrito ao lado, nunca só a cor.

Proibido: segunda cor de destaque (nem nas raridades), gradientes decorativos, rosa.

## Typography

- **Press Start 2P**: títulos, nome, menu, botões, títulos de seção. A fonte não tem maiúsculas acentuadas: nunca usar `text-transform: uppercase` nela. Escreva em caixa normal.
- **Space Mono**: rótulos, metadados, HUD, selos, legenda de teclas. Em maiúsculas.
- **Nunito Sans Variable**: todo texto corrido (descrições, histórias, bio). Largura máxima de 68ch.

Todas servidas pelo próprio site (pacotes `@fontsource`), só o subconjunto latino é baixado.

## Elevation

Não há sombra suave. Profundidade = plano (fundo → painel → painel alto) + borda de 4 px. A sombra dura deslocada é exclusiva das peças listadas acima.

## Components

- **HUD**: fixo no topo. Só o "G" em pixel art (link para o início, com nome acessível), o e-mail e o botão lima de currículo. No celular o e-mail vira só o ícone.
- **Coluna lateral**: cartão de título (nome, função e, só na página inicial, a intro; a foto aparece só na página Sobre) e menu (Sobre, Jogos, Conquistas, Contato) em três estados: normal (texto #C9CDD6, sem fundo), select/cursor em cima (fundo #222733, borda #6B7385, texto #EEF0F4, cursor lima claro) e selecionado/tela atual (fundo lima, texto #101217). No celular o menu vira uma faixa fixa sob o HUD com os mesmos estados, e o cartão só aparece no início.
- **Visor**: moldura 16:9 com a imagem do projeto; o vídeo entra por cima quando carrega. Selo lima no canto (loja ou posição na galeria).
- **Cartucho**: botão com miniatura e "01 Nome". Fora de seleção: imagem esmaecida e dessaturada. Selecionado: borda e rótulo lima.
- **Botões**: primário lima com sombra de 4 px que some ao apertar (`translate(4px, 4px)`); secundário só com borda. Ícone de link externo quando sai do site.
- **Caixa**: painel + borda 4 px, para textos e fichas.
- **Conquista**: formação e cursos do currículo. Raridade pinta borda, ícone e rótulo: comum #8A91A1 (borda neutra), rara #EEF0F4, épica #B8EE86 (+ sombra 4 px lima claro), lendária lima (+ sombra 6 px lima, ícone preenchido). A bloqueada tem borda tracejada e leva ao contato.
- **Wishlist**: cartão do Playground Rumble embaixo do menu lateral (capa, status, nome, uma frase e o botão lima "Wishlist na Steam"). No celular aparece só no início, compacto, com a capa ao lado.
- **Experiência**: caixa com cargo, empresa · período e o texto do currículo; a mais recente tem borda lima.
- **Ícones**: só pixel art desenhada em grade (`src/components/Icone.astro`). Nada de emoji nem glifo Unicode como ícone.
- **Teclas**: `<kbd>` com borda inferior de 4 px, na legenda do rodapé.

## Motion

- Troca de cartucho/mídia: varredura de cima para baixo em 6 degraus, 220 ms (`clip-path`, `steps(6)`).
- Cursor do menu entra em 2 degraus. Status pisca a 1,2 s. Botão afunda ao apertar.
- `prefers-reduced-motion`: tudo desligado, vídeo não toca sozinho (ganha controles na página do projeto).

## Do's and Don'ts

- Faça: um projeto novo entra só pelo `src/data/projetos.json` + mídia gerada por `scripts/midia.py`.
- Faça: bloco "O que eu programei" só quando o dado existe; a página funciona sem ele.
- Não faça: maiúsculas forçadas na Press Start 2P, cantos arredondados, sombras suaves, segunda cor de destaque, hex solto fora de `:root`.
- Não faça: barras de nível, intro/loading falso, som, decoração de jogo sem função.
