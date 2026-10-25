# Portfólio de Gabriel Torres

Site estático em [Astro](https://astro.build), publicado no GitHub Pages pelo GitHub Actions.

## Rodar localmente

```sh
npm install
npm run dev
```

`npm run build` gera o site em `dist/`.

## Adicionar um jogo

1. Copie a pasta `src/content/jogos/_modelo/` e renomeie para o id do jogo (ex.: `meu-jogo`).
   O id vira o endereço `/projetos/meu-jogo/`.
2. Troque a `capa.webp` pela imagem do jogo (png, jpg ou webp, qualquer tamanho). O Astro gera os tamanhos sozinho.
3. Preencha o `jogo.md`: os campos de cima viram o cartucho e a ficha; o texto de baixo vira "Como foi fazer".
4. Gameplay (opcional): `python scripts/midia.py <gif-ou-webp-animado> <id-do-jogo> --video`.
   O vídeo aparece sozinho quando existe `public/media/<id>.mp4`.

A ordem da grade é automática, do mais recente para o mais antigo pela `data`. Jogo em desenvolvimento usa a data de início e não mostra o ano.

## Currículo

O PDF fica em `public/curriculo-gabriel-torres.pdf`. No build o site lê dele:

- **Experiências** (página Sobre), da seção "Experiência".
- **Conquistas**, das seções "Formação Superior" e "Cursos Complementares".

Experiências que não cabem no PDF ficam em `src/data/experiencias-extras.json` e aparecem junto, em ordem de data.

Para atualizar, troque o PDF mantendo esses títulos de seção e o formato `Nome | período` nas linhas de cabeçalho.
A raridade das conquistas vem da duração: formação superior é lendária, curso com 24 meses ou mais é épico, com 6 ou mais é raro, e o resto é comum.

## Menu de teste de cores (temporário)

O botão "Cores" no canto da tela troca a paleta do site para testes e guarda a escolha no navegador.
Para remover: apague `src/components/TestePaletas.astro` e as duas linhas marcadas com "temporário" em `src/layouts/Base.astro`.

## Documentos

- [PRODUCT.md](PRODUCT.md) e [DESIGN.md](DESIGN.md): o que o site faz e como ele é.
- [CLAUDE.md](CLAUDE.md): regras do projeto.
