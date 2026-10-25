# Acervo do portfólio — Gabriel Torres

Backup do conteúdo do site antigo (out/2026), feito antes de recriar tudo do zero.
Esta pasta é a fonte para montar o site novo. **Não apagar `_acervo/` junto com o site.**

Conteúdo da pasta:

- `ACERVO.md` — este arquivo: identidade, textos, projetos e assets organizados.
- `projetos.json` — os 7 projetos em formato estruturado (pronto para virar o novo `data.json`), com a lista de assets de cada um.
- `assets/` — cópia de `img/` do site antigo, com os mesmos nomes de arquivo.
- `data.original.json` — cópia literal do `js/data.json` que estava publicado.
- `conteudo_site.original.md` — cópia literal do rascunho de textos (algumas histórias aqui são mais completas que as do site).

Regras de texto que valiam no site antigo: tudo em pt-BR, primeira pessoa, na voz do Gabriel, tom simples (sem slogans).

---

## 1. Identidade

| Campo | Valor |
|---|---|
| Nome | Gabriel Torres (nome completo: Gabriel de Castro Torres) |
| Função | Programador de jogos (Game Developer) |
| Site | https://gabrielctorres.github.io/ |
| E-mail | gabrielctorres38@gmail.com |
| GitHub | https://github.com/gabrielctorres (usuário `gabrielctorres`) |
| LinkedIn | https://www.linkedin.com/in/gabrielctorres/ |
| itch.io | https://gabrieltorres.itch.io/ (o Arrai Defensivo está em outra conta: https://gabenws.itch.io/) |
| Steam (jogo principal) | https://store.steampowered.com/app/2939950/Playground_Rumble/ — widget: `https://store.steampowered.com/widget/2939950/` |
| Foto de perfil | `https://github.com/gabrielctorres.png` (avatar do GitHub, não há arquivo local) |
| Currículo | `assets/Curriculo Gabriel Torres 01.pdf` |
| Ferramentas | Unity, C#, Git, Aseprite |

Títulos usados: "Gabriel Torres, programador de jogos" (versão mais recente) e "Gabriel Torres | Game Developer" (versão antiga).
Meta description: "Gabriel Torres, programador de jogos. Projetos em Unity, game jams e alguns experimentos para a web."

---

## 2. Textos gerais

### Apresentação (hero) — versão mais recente

> **Oi, eu sou o Gabriel. Programo jogos.**
>
> Trabalho com Unity e C#. Hoje estou desenvolvendo o Playground Rumble, um roguelike que começou porque meu sobrinho pediu para aparecer em um jogo. No meio do caminho faço game jams e, de vez em quando, alguma coisa para a web.

### Sobre mim — versão mais recente (reescrita)

> Comecei aos 13 anos, montando servidores de Minecraft e tentando programar plugins em Java. Não deu muito certo. Depois descobri a Unity e foi ali que a programação fez sentido para mim.
>
> Hoje procuro oportunidades para crescer na área enquanto desenvolvo meu próprio jogo. Tenho mais ideias do que tempo (meu Drive está cheio de documentos de jogos esperando a vez) e gosto mesmo é de escrever código e testar mecânicas até elas ficarem divertidas.
>
> Uso no dia a dia: Unity, C#, Git e Aseprite.

### Sobre mim — versão original (do rascunho / site antigo)

> **Prazer em conhecê-lo!**
>
> Sou um programador de jogos buscando oportunidades pra crescer na área enquanto desenvolvo meu próprio jogo.
>
> Sou super criativo e estou sempre tendo novas ideias (sério, tenho muitos documentos de jogos no meu Drive) e adoro escrever código e criar jogos.
>
> Essa área me cativou desde que eu tinha 13 anos criando meus servidores de Minecraft e tentando programar plugins em Java (não deu muito certo), até que descobri a Unity e me encontrar de vez na programação e na área de games.
>
> Se quiser ver meus projetos, dá uma olhada abaixo e, se curtir, ajuda lá adicionando Playground Rumble na sua wishlist da Steam!
>
> Principais ferramentas e tecnologias: Unity, C#, Git, Aseprite.

### Contato

> Se quiser falar sobre uma vaga, um projeto ou só sobre jogos, me manda um e-mail.

### Destaque "Em desenvolvimento" (Playground Rumble)

> Miguel e Manuela perderam os brinquedos e agora precisam enfrentar hordas de brinquedos descontrolados para recuperá-los. Os dois são versões dos meus sobrinhos. As referências principais foram Enter the Gungeon, Risk of Rain e o cooperativo dos jogos LEGO.

Meta: "Unity · Roguelike · PC". Links: "Como está sendo o desenvolvimento" (página do projeto) e "Wishlist na Steam ↗".

---

## 3. Assets globais (não ligados a um projeto)

| Arquivo em `assets/` | Tipo / tamanho | Uso no site antigo |
|---|---|---|
| `Curriculo Gabriel Torres 01.pdf` | PDF, 85 KB | Link "Currículo" no menu |
| `icons/logo.png` | PNG 180×220, 1 KB | Favicon |
| `icons/github.svg` | SVG | Ícone de link (versão antiga) |
| `icons/linkedin.svg` | SVG | Ícone de link (versão antiga) |
| `icons/itchio.svg` | SVG | Ícone de link (versão antiga) |
| `background.png` | PNG 1920×1080, 13 KB | Fundo da versão antiga (não usado na última) |
| `projects/placeholder.png` | PNG 1920×1080, 20 KB | Imagem de carregamento na página de projeto |
| `projects/rumbleStatic.png` | — | Também usada como imagem Open Graph (`og:image`) do site |

---

## 4. Projetos

Ordem: do mais recente para o mais antigo. "Curta" = texto do card; "Longa" = lead da página do projeto.
Nos assets, "estática" é a imagem do card; "animada/hover" é trocada no hover (alguns GIFs têm 15–20 MB: nunca carregar de forma antecipada).

### 4.1 Order UP!

| Campo | Valor |
|---|---|
| id | `order-up` |
| Categoria | Jogo |
| Data | 2026-06-19 |
| Tags | Game Jam, WebGL, Unity |
| Jogar | https://gabrieltorres.itch.io/orderup |
| GitHub | https://github.com/gabrielctorres/ProjetoComfy |
| Contexto | Comfy Jam Summer 2026, tema "The Instructions are a Lie" — em equipe |

**Assets**

| Papel | Arquivo | Formato | Tamanho |
|---|---|---|---|
| Estática | `assets/projects/orderUP1.png` | PNG 1235×681 | 54 KB |
| Hover (2ª imagem, não animada) | `assets/projects/orderUP2.png` | PNG 1257×702 | 54 KB |

**Curta:** Order Up! é um jogo de gerenciamento e dedução criado para a Comfy Jam Summer 2026 com base no tema 'The Instructions are a Lie'.

**Longa:** No comando de um quiosque de praia, o jogador precisa gerenciar os pedidos e identificar as falhas causadas por um garçom impostor antes de realizar os minigames de preparo.

**História do desenvolvimento:**

Apesar de enfrentarmos imprevistos pessoais que reduziram nosso tempo de desenvolvimento em dois dias, realizamos um brainstorming focado e decidimos criar um jogo de gerenciamento em uma barraca de praia. A mecânica principal envolve identificar os pedidos adulterados por um garçom impostor que tenta provocar sua demissão e, em seguida, executar o minigame de preparo. Devido à quantidade de mecânicas planejadas, não conseguimos entregar um jogo bem polido, então ele possui alguns erros mas conseguimos ter o loop de gameplay completo.

*Créditos:* Ana, Gabriel, Killuado, Toph e Victor.

---

### 4.2 Birl.com

| Campo | Valor |
|---|---|
| id | `birl-com` |
| Categoria | Web |
| Data | 2026-05-25 |
| Tags | Web, Estudo, IA |
| Site | https://birlcom.vercel.app/ |
| GitHub | https://github.com/gabrielctorres/birl.com |

**Assets**

| Papel | Arquivo | Formato | Tamanho |
|---|---|---|---|
| Estática | `assets/projects/birlcom01.png` | PNG 1270×929 | 22 KB |
| Hover (2ª imagem, não animada) | `assets/projects/birlcom02.png` | PNG 1530×923 | 45 KB |

**Curta:** O Birl.com nasceu da necessidade de registrar meus treinos e monitorar de forma eficiente a progressão de carga na academia.

**Longa:** Birl.com é uma plataforma dedicada ao registro de treinos e acompanhamento da progressão de carga na academia. O projeto serviu como um campo de testes para integrar funcionalidades web modernas com o suporte de Inteligência Artificial.

**História do desenvolvimento:** (no site era igual à descrição longa; não há texto mais completo)

---

### 4.3 Arrai Defensivo

| Campo | Valor |
|---|---|
| id | `arrai-defensivo` |
| Categoria | Jogo |
| Data | 2024-06-09 |
| Tags | Game Jam, WebGL, Tower Defense, Unity |
| Jogar | https://gabenws.itch.io/arrai-defensivo |
| GitHub | https://github.com/gabrielctorres/ArraiDefensivo |
| Contexto | Game Jam da PUC Campinas 2024, 24 horas, tema Festa Junina — time de 3 |

**Assets**

| Papel | Arquivo | Formato | Tamanho |
|---|---|---|---|
| Estática | `assets/projects/arrai_defensivostatic.png` | PNG 1919×1079 | 1,2 MB |
| Animada (hover) | `assets/projects/arrai_defensivogif.gif` | GIF 600×338 | 6,3 MB |

**Curta:** Proteja a fogueira do seu arraiá dos invasores que tentam apagá-la. Use comidas típicas da festa para se defender!

**Longa:** Feito em 24 horas para a Game Jam da PUC Campinas 2024, 'Arrai Defensivo' é um tower defense onde você deve proteger a fogueira do seu arraiá usando torres baseadas em comidas típicas de festa junina. Mas cuidado: as torres não são permanentes, exigindo que você se adapte constantemente para não deixar o fogo apagar.

**História do desenvolvimento** (versão completa do rascunho):

Arrai Defensivo foi desenvolvido em 24 horas para a Game Jam da PUC Campinas de 2024. O tema da jam era Festa Junina.

Nos reunimos em um time de três pessoas, dois colegas que ainda cursavam a faculdade e eu, como ex-aluno, e, após um brainstorm, decidimos criar um Tower Defense com uma mecânica diferenciada: as torres não são permanentes. Isso exige que o jogador esteja sempre atento, reposicionando e reconstruindo suas defesas para proteger a fogueira dos invasores que tentam apagá-la.

As torres são representadas por comidas típicas da festa junina, cada uma com atributos únicos e habilidades especiais. O jogador precisa escolher bem onde investir suas fichas, seja comprando novas torres ou realizando melhorias, estas ficam disponíveis quando uma seta roxa aparece sobre a torre.

O objetivo é simples: não deixe o fogo apagar!

---

### 4.4 Playground Rumble (projeto principal, em desenvolvimento)

| Campo | Valor |
|---|---|
| id | `playground-rumble` |
| Categoria | Jogo |
| Data | 2022-01-15 (início) |
| Tags | Em Desenvolvimento, PC, Roguelike, Unity |
| Steam | https://store.steampowered.com/app/2939950/Playground_Rumble/ |
| GitHub | — (sem link público) |
| Contexto | Projeto solo; personagens Miguel e Manuela (baseados nos sobrinhos) |

**Assets**

| Papel | Arquivo | Formato | Tamanho |
|---|---|---|---|
| Estática (também `og:image`) | `assets/projects/rumbleStatic.png` | PNG 616×353 | 224 KB |
| Animada (hover) | `assets/projects/rumblegif.gif` | GIF 800×450 | 15 MB ⚠ |

**Curta:** Um roguelike de ação onde dois irmãos embarcam em uma aventura para recuperar seus brinquedos perdidos.

**Longa:** Junte-se a Miguel e Manuela em uma jornada cheia de ação para recuperar seus brinquedos perdidos, enfrentando hordas de brinquedos descontrolados.

**História do desenvolvimento:**

*Playground Rumble* é um jogo roguelike onde você acompanha dois irmãos que perderam seus brinquedos e agora precisam enfrentar diversos desafios para recuperá-los.

**Inspiração e Conceito**

Após finalizar meu último projeto da faculdade, eu sabia que queria começar algo menor, que realmente pudesse ser lançado. Tinha várias ideias na cabeça, mas todas pareciam grandes demais para produzir sozinho.

Foi então que, em uma conversa com meu sobrinho, que sempre soube que eu desenvolvia jogos, ele me pediu para colocá-lo em algum jogo. Isso acendeu uma ideia: criar algo simples, inicialmente como uma brincadeira para que ele se visse em um jogo. Mas percebi que poderia transformar isso em um projeto real, juntando o útil ao agradável.

Assim nasceram os personagens, que são versões personificadas dos meus sobrinhos.

As principais referências para o jogo foram Enter the Gungeon, Risk of Rain e o modo multiplayer dos jogos LEGO. A ideia inicial era permitir que um segundo jogador pudesse entrar na mesma partida a qualquer momento, mas infelizmente essa funcionalidade precisou ser descartada ao longo do desenvolvimento.

**Desafios de Desenvolvimento**

Mesmo acreditando que esse projeto seria menor do que minhas outras ideias, desenvolver um jogo sozinho foi muito mais desafiador do que imaginei. Isso acabou gerando uma demora no desenvolvimento, especialmente em etapas como programação, arte e balanceamento.

**O Futuro**

Minha meta para 2025 é lançar uma campanha de financiamento coletivo. O objetivo é arrecadar recursos para finalizar o jogo, incluindo trilha sonora, efeitos sonoros e outros custos de produção, que serão detalhados na página da campanha.

Para aumentar as chances de sucesso, pretendo disponibilizar uma demo jogável para que todos possam experimentar o jogo antes mesmo do financiamento.

Se, por algum motivo, a campanha não alcançar sua meta, o jogo ainda será lançado na Steam, mas com alguns cortes de conteúdo, servindo também como parte do meu portfólio. (Tomara que não precise chegar a esse ponto, né?)

**Adicione Playground Rumble à sua lista de desejos na Steam e acompanhe as novidades!**

> ⚠ A seção "O Futuro" fala em "meta para 2025" — já está desatualizada (hoje é out/2026). Confirmar com o Gabriel antes de reaproveitar.

---

### 4.5 Alexandre: Em Busca da Relíquia Perdida

| Campo | Valor |
|---|---|
| id | `alexandre-reliquia` |
| Categoria | Jogo |
| Data | 2021-04-18 |
| Tags | Faculdade, PC, Platformer, Unity |
| Jogar | https://gabrieltorres.itch.io/alexandre |
| GitHub | https://github.com/gabrielctorres/ProjetoAlexandre |
| Site oficial do jogo | https://gabrielctorres.github.io/SiteAlexandre/ |
| Contexto | Projeto final da faculdade, 1 ano, em equipe; Gabriel foi programador principal |

**Assets**

| Papel | Arquivo | Formato | Tamanho |
|---|---|---|---|
| Estática | `assets/projects/alexandre_reliquiastatic.png` | PNG 1919×1079 | 740 KB |
| Animada (hover) | `assets/projects/alexandre_reliquiagif.webp` | WebP animado 800×450 | 267 KB |

**Curta:** Um platformer 2D onde você embarca em uma aventura para recuperar uma relíquia perdida, enfrentando desafios, inimigos e chefes.

**Longa** (versão completa do rascunho): 'Alexandre: Em Busca da Relíquia Perdida' foi o projeto final de faculdade. Um platformer 2D desenvolvido ao longo de um ano, onde aplicamos tudo o que aprendemos no curso para criar um jogo mais robusto e completo. Encare desafios, supere inimigos e derrote chefes enquanto explora ambientes repletos de mistérios.

**História do desenvolvimento** (versão completa do rascunho):

Alexandre: Em Busca da Relíquia Perdida foi o último projeto desenvolvido na faculdade. Diferente dos projetos anteriores, tivemos um ano inteiro para desenvolver e aperfeiçoar o jogo, sem limitações de tema. Escolhemos criar um jogo 2D no estilo platformer, simples, porém robusto, com o objetivo de aplicar todo o conhecimento adquirido nos últimos semestres.

Esse foi o projeto em que mais dividimos funções de forma bem específica. Eu atuei como programador principal, focando nas mecânicas dos bosses e do personagem. Também foi nesse projeto que comecei a estudar e aplicar iluminação 2D e shaders na Unity, o que trouxe muito mais vida e profundidade visual ao jogo.

Além do jogo, também desenvolvemos um site oficial sobre o projeto (https://gabrielctorres.github.io/SiteAlexandre/).

Foi uma experiência extremamente valiosa, tanto em desenvolvimento técnico quanto em trabalho em equipe, resultando em um jogo que temos muito orgulho de ter produzido.

---

### 4.6 Guerra dos Feriados

| Campo | Valor |
|---|---|
| id | `guerra-dos-feriados` |
| Categoria | Jogo |
| Data | 2020-12-22 |
| Tags | Game Jam, WebGL, Tower Defense, Unity |
| Jogar | https://gabrieltorres.itch.io/guerradosferiados |
| GitHub | https://github.com/gabrielctorres/GuerradosFeriados |
| Contexto | Livre Noel Jam (Gamux), 16–22/12/2020, tema "Um Clássico Diferente" — solo, feito ao vivo na Twitch |

**Assets**

| Papel | Arquivo | Formato | Tamanho |
|---|---|---|---|
| Estática | `assets/projects/guerra_feriadostatic.png` | PNG 1919×1079 | 59 KB |
| Animada (hover) | `assets/projects/guerra_feriadosgif.gif` | GIF 1614×892 | 18 MB ⚠ |

**Curta:** Um tower defense ao contrário! Controle a wave de inimigos e destrua a fábrica do Papai Noel com ajuda do Coelho da Páscoa, Cupido e Saci.

**Longa** (versão completa do rascunho): 'Guerra dos Feriados' foi desenvolvido em 6 dias para a Livre Noel Jam. É um tower defense invertido onde, em vez de defender, você controla as ondas de inimigos. O objetivo é destruir a fábrica do Papai Noel, com a ajuda de personagens como o Coelho da Páscoa, Cupido e Saci. Todo o desenvolvimento foi feito ao vivo na Twitch, com participação ativa do chat, que pôde sugerir mecânicas, personagens e nomes para o jogo.

**História do desenvolvimento** (versão completa do rascunho):

Guerra dos Feriados foi desenvolvido para a Livre Noel Jam, organizada pela Gamux. A jam aconteceu entre 16 de dezembro de 2020 e 22 de dezembro de 2020, com o tema "Um Clássico Diferente".

Seguindo o tema, criamos um tower defense ao contrário, onde o jogador não defende, mas sim controla a wave de inimigos para destruir a fábrica do Papai Noel. Você conta com a ajuda de figuras inusitadas como o Coelho da Páscoa, Cupido e Saci nessa missão caótica.

Todo o desenvolvimento foi feito ao vivo na Twitch, com participação direta do chat. Os espectadores podiam usar pontos da Twitch para desbloquear recompensas que permitiam sugerir mecânicas, adicionar personagens (como ovelhas!), escolher nomes e até votar nas direções criativas do jogo.

Foi uma experiência muito divertida e desafiadora, pois todo o desenvolvimento, programação, arte e design, foi feito sozinho. Este também foi meu primeiro projeto usando pixel art em isométrico, o que trouxe um aprendizado enorme.

---

### 4.7 Random Commander (não estava publicado)

Existia só no rascunho e tem imagem em `img/projects/`, mas **não estava no `data.json`** — o site nunca mostrou. Faltam data, links e categoria confirmados.

| Campo | Valor |
|---|---|
| id sugerido | `random-commander` |
| Categoria | Provavelmente "game"/ferramenta (feito na Unity) — confirmar |
| Data | desconhecida (imagem adicionada ao repo em set/2025) |
| Tags sugeridas | Estudo, API, Unity |
| Links | nenhum registrado — confirmar GitHub/itch |

**Assets**

| Papel | Arquivo | Formato | Tamanho |
|---|---|---|---|
| Estática | `assets/projects/Random Commander.png` | PNG 1576×884 | 567 KB |
| Animada | — | — | — |

**Curta:** Um gerador aleatório de comandantes para Magic: The Gathering, utilizando a API do ScryFall.

**Longa:** Projeto de estudo focado em consumo de APIs. O Random Commander sorteia um comandante aleatório para Magic: The Gathering integrando-se à API do ScryFall, permitindo que jogadores encontrem novos desafios de forma rápida e dinâmica.

**História do desenvolvimento:**

Random Commander é um projeto de estudo focado em explorar o consumo de APIs externas dentro da Unity. A ideia foi integrar a robusta base de dados do ScryFall para criar uma ferramenta útil para jogadores de Magic: The Gathering.

O objetivo principal foi entender o fluxo de requisições HTTP (REST), tratamento de JSON e a implementação de uma interface funcional dentro do motor Unity para exibir as informações coletadas em tempo real.

---

## 5. Pendências para o site novo

- Random Commander: definir data, categoria e links (ou deixar de fora).
- Playground Rumble: atualizar a seção "O Futuro" (meta de 2025 já passou).
- Birl.com: não tem história de desenvolvimento própria; vale escrever uma.
- GIFs pesados (`rumblegif.gif` 15 MB, `guerra_feriadosgif.gif` 18 MB, `arrai_defensivogif.gif` 6 MB): considerar converter para WebP/MP4 no site novo.
- Order UP! e Birl.com não têm animação, só uma segunda imagem.
