// Textos fixos da interface. A V1.1 ganha um en.ts com as mesmas chaves.
export const pt = {
  lang: 'pt-BR',
  nome: 'Gabriel Torres',
  funcao: 'Programador de jogos',
  email: 'gabrielctorres38@gmail.com',
  curriculo: '/curriculo-gabriel-torres.pdf',
  pular: 'Pular para o conteúdo',
  menu: {
    jogos: 'Jogos',
    sobre: 'Sobre',
    conquistas: 'Conquistas',
    contato: 'Contato',
  },
  hud: {
    email: 'E-mail',
    curriculo: 'Currículo',
  },
  links: {
    github: 'https://github.com/gabrielctorres',
    linkedin: 'https://www.linkedin.com/in/gabrielctorres/',
    itch: 'https://gabrieltorres.itch.io/',
    steam: 'https://store.steampowered.com/app/2939950/Playground_Rumble/',
  },
  botoes: {
    abrir: 'Abrir',
    jogar: 'Jogar no itch.io',
    wishlist: 'Wishlist na Steam',
    site: 'Abrir o site',
    codigo: 'Código no GitHub',
    voltar: 'Voltar',
  },
  teclas: {
    escolher: 'Escolher',
    abrir: 'Abrir',
    voltar: 'Voltar',
    navegar: 'Navegar',
  },
} as const;

export type Textos = typeof pt;
