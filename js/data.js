// data.js
const projectsData = [
    {
        id: "playground-rumble",
        title: "Playground Rumble",
        shortDescription: "Um roguelike de ação onde dois irmãos embarcam em uma aventura para recuperar seus brinquedos perdidos.",
        longDescription: "Junte-se a Miguel e Manuela em uma jornada cheia de ação para recuperar seus brinquedos perdidos, enfrentando hordas de brinquedos descontrolados.",
        developmentStory: `
<h2>Sobre o Projeto</h2>
<p><strong>Playground Rumble</strong> é um jogo roguelike onde você acompanha dois irmãos que perderam seus brinquedos e agora precisam enfrentar diversos desafios para recuperá-los.</p>

<h3>Inspiração e Conceito</h3>
<p>Após finalizar meu último projeto da faculdade, eu sabia que queria começar algo menor, que realmente pudesse ser lançado. Tinha várias ideias na cabeça, mas todas pareciam grandes demais para produzir sozinho.</p>
<p>Foi então que, em uma conversa com meu sobrinho, que sempre soube que eu desenvolvia jogos, ele me pediu para colocá-lo em algum jogo. Isso acendeu uma ideia: criar algo simples, inicialmente como uma brincadeira para que ele se visse em um jogo. Mas percebi que poderia transformar isso em um projeto real, juntando o útil ao agradável.</p>
<p>Assim nasceram os personagens, que são versões personificadas dos meus sobrinhos.</p>

<p>As principais referências para o jogo foram <strong>Enter the Gungeon</strong>, <strong>Risk of Rain</strong> e o modo multiplayer dos jogos <strong>LEGO</strong>. A ideia inicial era permitir que um segundo jogador pudesse entrar na mesma partida a qualquer momento, mas infelizmente essa funcionalidade precisou ser descartada ao longo do desenvolvimento.</p>

<h3>Desafios de Desenvolvimento</h3>
<p>Mesmo acreditando que esse projeto seria menor do que minhas outras ideias, desenvolver um jogo sozinho foi muito mais desafiador do que imaginei. Isso acabou gerando uma demora no desenvolvimento, especialmente em etapas como programação, arte e balanceamento.</p>

<h3>O Futuro</h3>
<p>Minha meta para 2025 é lançar uma campanha de financiamento coletivo. O objetivo é arrecadar recursos para finalizar o jogo, incluindo trilha sonora, efeitos sonoros e outros custos de produção, que serão detalhados na página da campanha.</p>
<p>Para aumentar as chances de sucesso, pretendo disponibilizar uma <strong>demo jogável</strong> para que todos possam experimentar o jogo antes mesmo do financiamento.</p>
<p>Se, por algum motivo, a campanha não alcançar sua meta, o jogo ainda será lançado na Steam, mas com alguns cortes de conteúdo, servindo também como parte do meu portfólio. (Tomara que não precise chegar a esse ponto, né?)</p>

<p><strong>Adicione Playground Rumble à sua lista de desejos na Steam e acompanhe as novidades!</strong></p>

<div class="steam-widget-container-detail-page" style="margin-top: 25px; margin-bottom: 15px; max-width: 646px; margin-left: auto; margin-right: auto;">
    <iframe src="https://store.steampowered.com/widget/2939950/" frameborder="0" width="100%" height="190"></iframe>
</div>        
`,
        imageStatic: "img/projects/rumbleStatic.png",
        imageGif: "img/projects/rumblegif.gif",
        date: "2022-01-15",
        tags: ["Em Desenvolvimento", "PC", "Roguelike", "Unity"],
        playLink: "https://store.steampowered.com/app/2939950/Playground_Rumble/",
        githubLink: null
    },
    {
        id: "arrai-defensivo",
        title: "Arrai Defensivo",
        shortDescription: "Proteja a fogueira do seu arraiá dos invasores que tentam apagá-la. Use comidas típicas da festa para se defender!",
        longDescription: "Feito em 24 horas para a Game Jam da PUC Campinas 2024, 'Arrai Defensivo' é um tower defense onde você deve proteger a fogueira do seu arraiá usando torres baseadas em comidas típicas de festa junina. Mas cuidado: as torres não são permanentes, exigindo que você se adapte constantemente para não deixar o fogo apagar.",
        imageStatic: "img/projects/arrai_defensivostatic.png",
        imageGif: "img/projects/arrai_defensivogif.gif",
        date: "2024-06-09",
        tags: ["Game Jam", "WEBGL", "Tower Defense", "Unity"],
        githubLink: "https://github.com/gabrielctorres/ArraiDefensivo",
        playLink: "https://gabenws.itch.io/arrai-defensivo",
        developmentStory: `
            <h2>Sobre o Projeto</h2>
            <p><strong>Arrai Defensivo</strong> foi desenvolvido em 24 horas para a <strong>Game Jam da PUC Campinas de 2024</strong>, realizada entre <strong>8 de junho de 2024 às 17h</strong> e <strong>9 de junho de 2024 às 17h</strong>. O tema da jam era <strong>Festa Junina</strong>.</p>
            <p>Nos reunimos em um time de três pessoas — dois colegas que ainda cursavam a faculdade e eu, como ex-aluno — e, após um brainstorm, decidimos criar um <strong>Tower Defense</strong> com uma mecânica diferenciada: as torres não são permanentes. Isso exige que o jogador esteja sempre atento, reposicionando e reconstruindo suas defesas para proteger a fogueira dos invasores que tentam apagá-la.</p>
            <p>As torres são representadas por comidas típicas da festa junina, cada uma com atributos únicos e habilidades especiais. O jogador precisa escolher bem onde investir suas fichas, seja comprando novas torres ou realizando melhorias — estas ficam disponíveis quando uma seta roxa aparece sobre a torre.</p>
            <p><strong>O objetivo é simples:</strong> não deixe o fogo apagar!</p>            
        `
    },
    {
        id: "guerra-dos-feriados",
        title: "Guerra dos Feriados",
        shortDescription: "Um tower defense ao contrário! Controle a wave de inimigos e destrua a fábrica do Papai Noel com ajuda do Coelho da Páscoa, Cupido e Saci.",
        longDescription: "'Guerra dos Feriados' foi desenvolvido em 6 dias para a Livre Noel Jam. É um tower defense invertido onde, em vez de defender, você controla as ondas de inimigos. O objetivo é destruir a fábrica do Papai Noel, com a ajuda de personagens como o Coelho da Páscoa, Cupido e Saci. Todo o desenvolvimento foi feito ao vivo na Twitch, com participação ativa do chat, que pôde sugerir mecânicas, personagens e nomes para o jogo.",
        imageStatic: "img/projects/guerra_feriadostatic.png",
        imageGif: "img/projects/guerra_feriadosgif.gif",
        date: "2020-12-22",
        tags: ["Game Jam", "WEBGL", "Tower Defense", "Unity"],
        githubLink: "https://github.com/gabrielctorres/GuerradosFeriados",
        playLink: "https://gabrieltorres.itch.io/guerradosferiados",
        developmentStory: `
            <h2>Sobre o Projeto</h2>
            <p><strong>Guerra dos Feriados</strong> foi desenvolvido para a <strong>Livre Noel Jam</strong>, organizada pela <strong>Gamux</strong>. A jam aconteceu entre <strong>16 de dezembro de 2020 às 20h</strong> e <strong>22 de dezembro de 2020 às 22h</strong>, com o tema <strong>"Um Clássico Diferente"</strong>.</p>
            <p>Seguindo o tema, criamos um <strong>tower defense ao contrário</strong>, onde o jogador não defende, mas sim <strong>controla a wave de inimigos</strong> para destruir a fábrica do Papai Noel. Você conta com a ajuda de figuras inusitadas como o <strong>Coelho da Páscoa, Cupido e Saci</strong> nessa missão caótica.</p>
            <p>Todo o desenvolvimento foi feito <strong>ao vivo na Twitch</strong>, com participação direta do chat. Os espectadores podiam usar pontos da Twitch para desbloquear recompensas que permitiam sugerir mecânicas, adicionar personagens (como ovelhas!), escolher nomes e até votar nas direções criativas do jogo.</p>
            <p>Foi uma experiência muito divertida e desafiadora, pois <strong>todo o desenvolvimento — programação, arte e design — foi feito sozinho</strong>. Este também foi meu <strong>primeiro projeto usando pixel art em isométrico</strong>, o que trouxe um aprendizado enorme.</p>
            <p>Infelizmente, os vídeos das lives não estão mais disponíveis, pois foram removidos pela Twitch após o período de expiração.</p>            
        `
    },
    {
        id: "alexandre-reliquia",
        title: "Alexandre: Em Busca da Relíquia Perdida",
        shortDescription: "Um platformer 2D onde você embarca em uma aventura para recuperar uma relíquia perdida, enfrentando desafios, inimigos e chefes.",
        longDescription: "'Alexandre: Em Busca da Relíquia Perdida' foi o projeto final de faculdade. Um platformer 2D desenvolvido ao longo de um ano, onde aplicamos tudo o que aprendemos no curso para criar um jogo mais robusto e completo. Encare desafios, supere inimigos e derrote chefes enquanto explora ambientes repletos de mistérios.",
        imageStatic: "img/projects/alexandre_reliquiastatic.png",
        imageGif: "img/projects/alexandre_reliquiagif.webp",
        date: "2021-04-18",
        tags: ["Faculdade", "PC", "Platformer", "Unity"],
        githubLink: "https://github.com/gabrielctorres/ProjetoAlexandre",
        playLink: "https://gabrieltorres.itch.io/alexandre",
        siteLink: "https://gabrielctorres.github.io/SiteAlexandre/",
        developmentStory: `
            <h2>Sobre o Projeto</h2>
            <p><strong>Alexandre: Em Busca da Relíquia Perdida</strong> foi o <strong>último projeto desenvolvido na faculdade</strong>. Diferente dos projetos anteriores, tivemos <strong>um ano inteiro</strong> para desenvolver e aperfeiçoar o jogo, sem limitações de tema. Escolhemos criar um <strong>jogo 2D no estilo platformer</strong>, simples, porém robusto, com o objetivo de aplicar todo o conhecimento adquirido nos últimos semestres.</p>
            <p>Esse foi o projeto em que mais <strong>dividimos funções de forma bem específica</strong>. Eu atuei como <strong>programador principal</strong>, focando nas <strong>mecânicas dos bosses e do personagem</strong>. Também foi nesse projeto que comecei a estudar e aplicar <strong>iluminação 2D</strong> e <strong>shaders na Unity</strong>, o que trouxe muito mais vida e profundidade visual ao jogo.</p>
            <p>Além do jogo, também desenvolvemos um <strong>site oficial</strong> sobre o projeto, que pode ser acessado <a href="https://gabrielctorres.github.io/SiteAlexandre/" target="_blank">clicando aqui</a>.</p>
            <p>O projeto foi lançado em <strong>18 de abril de 2021</strong> e recebeu seu <strong>update final em 13 de dezembro de 2021</strong>.</p>
            <p>Foi uma experiência extremamente valiosa, tanto em desenvolvimento técnico quanto em trabalho em equipe, resultando em um jogo que temos muito orgulho de ter produzido.</p>
        `
    }
];
