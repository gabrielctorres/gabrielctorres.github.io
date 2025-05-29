// data.js
const projectsData = [
    {
        id: "playground-rumble",
        title: "Playground Rumble",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
        developmentStory: `
        <h2>Lorem Ipsum Dolor Sit Amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
        
        <h3>Inspiração e Conceito</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis, sapien non feugiat sodales, nisl erat facilisis enim, a convallis metus nulla a nulla.</p>

        <h3>Desafios de Desenvolvimento</h3>
        <ul>
            <li><strong>Lorem ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li><strong>Lorem ipsum:</strong> Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</li>
            <li><strong>Lorem ipsum:</strong> Sed nisi. Nulla quis sem at nibh elementum imperdiet.</li>
            <li><strong>Lorem ipsum:</strong> Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</li>
        </ul>

        <h3>O Futuro</h3>
        <p>Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.</p>
        
        <p><strong>Não se esqueça de adicionar à sua lista de desejos na Steam para acompanhar as novidades!</strong></p>
        
        <div class="steam-widget-container-detail-page" style="margin-top: 25px; margin-bottom: 15px; max-width: 646px; margin-left: auto; margin-right: auto;">
            <iframe src="https://store.steampowered.com/widget/2939950/" frameborder="0" width="100%" height="190"></iframe>
        </div>        
    `,
        imageStatic: "img/projects/rumbleStatic.png",
        imageGif: "img/projects/rumblegif.gif",
        date: "2024-10-28",
        tags: ["Em Desenvolvimento", "PC", "RogueLike", "Unity"],
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
    },
    {
        id: "spell-book",
        title: "SpellBook - Unity Tools (WIP)",
        shortDescription: "Uma coleção mágica de ferramentas reutilizáveis para projetos Unity. Crie sistemas escaláveis e evite reinventar a roda a cada projeto novo.",
        longDescription: "Atualmente em desenvolvimento, o SpellBook é um repositório pessoal onde estou compilando e refinando sistemas modulares para Unity, com foco em ScriptableObjects. Comecei essa iniciativa para evitar reinventar a roda em cada novo projeto e para aprofundar meu entendimento sobre arquitetura de jogos.",
        imageStatic: "img/projects/placeholder.png", // Idealmente, crie uma imagem para este card
        imageGif: "img/projects/placeholder.png",   // Idealmente, crie um gif para este card
        date: "2024-09-23",
        tags: ["Em Desenvolvimento", "Unity"],
        githubLink: "https://github.com/gabrielctorres/SpellBook-Unity-Tools",
        developmentStory: `
        <h2>Como Tudo Começou</h2>
        <p>O <strong>SpellBook</strong> foi iniciado em <strong>23 de setembro de 2024</strong> como um projeto paralelo ao desenvolver outros jogos. Percebi que:</p>
        <ul>
            <li>⏳ Gastava tempo demais recriando sistemas básicos</li>
            <li>🔄 Meus códigos não eram fáceis de reaproveitar entre projetos</li>
            <li>📚 Precisava de um lugar organizado para consolidar meu aprendizado</li>
        </ul>

        <h2>O Que Contém Atualmente</h2>
        <p>Na versão inicial (ainda em construção):</p>
        <ul>
            <li>✨ Sistema básico de eventos com ScriptableObjects</li>
            <li>📁 Estrutura padrão de pastas que costumo usar</li>
            <li>🧩 Alguns componentes genéricos para controle de cenas</li>
            <li>🚧 <em>Aviso:</em> Ainda não é um pacote completo ou documentado</em></li>
        </ul>

        <h2>Por Que Compartilhar?</h2>
        <p>Decidi tornar público porque:</p>
        <ul>
            <li>🔍 Me motiva a manter o código mais organizado</li>
            <li>📝 Eventualmente quero adicionar documentação para outros devs</li>
            <li>🛠️ Pode ser útil como referência para iniciantes em ScriptableObjects</li>
        </ul>

        <h2>Planos Futuros</h2>
        <p>Conforme meu conhecimento avança, pretendo:</p>
        <ul>
            <li>🧪 Adicionar mais exemplos práticos de uso</li>
            <li>📦 Transformar em um pacote Unity propriamente dito</li>
            <li>⚙️ Implementar sistemas de save e configurações</li>
        </ul>

        <p>Este projeto reflete minha jornada de aprendizado - cada nova "página" do SpellBook representa um conceito que estou dominando.</p>
    `
    }
];
