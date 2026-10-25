---
titulo: Clube do Jogo
data: 2026-10-13
tipo: Aplicação web
engine: React e TypeScript
plataforma: Navegador
selo: Web
contexto: Projeto pessoal para o clube do jogo do meu grupo
resumo: Um app para a votação mensal do nosso clube do jogo. A rodada termina numa roleta que decide o jogo do mês.
descricao: >-
  Todo mês o grupo escolhe um jogo para jogar junto. O app conduz a rodada inteira do sorteio do
  Escolhido até a roleta. A pontuação de cada jogo vira o peso dele na hora de sortear.
programei:
  - O fluxo da rodada em etapas até o placar e a roleta.
  - O sorteio do Escolhido sem repetir ninguém antes de todo mundo ter sido sorteado.
  - A pontuação de acessibilidade e de votos que vira o peso de cada jogo na roleta.
  - Backup em JSON porque os dados ficam salvos só no navegador.
  - Efeitos sonoros gerados com Web Audio sem nenhum arquivo de áudio.
  - Testes com Vitest para a pontuação, o sorteio e o fluxo das etapas.
links:
  site: https://clube-do-jogo-three.vercel.app/
  github: https://github.com/gabrielctorres/ClubeDoJogo
capa: ./capa.webp
capaAlt: Página inicial do Clube do Jogo com os botões Nova rodada e Histórico
tela2: ./tela-2.webp
tela2Alt: Roleta do Clube do Jogo dividida entre quatro jogos com a chance de cada um
---

## A gamificação da votação

Eu e meus amigos queríamos um clube do livro só que de jogos. Para a escolha do mês ser justa eu criei um sistema de indicações, pontos e votos. No fim tudo vai para uma roleta e qualquer jogo pode ganhar.

- Cada pessoa indica um jogo por mês. Se duas pessoas indicam o mesmo ele vira uma opção só.
- Uma pessoa é sorteada como o Escolhido da rodada e o voto dela vale mais. Ela só volta ao sorteio depois que todo mundo tiver sido Escolhido.
- Cada jogo ganha pontos quando é fácil de conseguir. Conta se ele é gratuito, se está acessível para o grupo e se alguém já tem.
- Depois todo mundo vota e os votos se somam aos pontos do jogo.
- A pontuação final vira o peso do jogo na roleta. Mais pontos dão mais chance mas não garantem a vitória.
- Empate se decide no cara ou coroa.

## O app

Comecei juntando referências e fazendo estudos de layout até chegar no visual do app. Desenvolvi com o Claude Code e organizei o trabalho no Maestri.

Com as regras definidas eu transformei cada uma em código. Depois testei os casos mais chatos como o sorteio na virada do ciclo.

## Tecnologias

React 19, TypeScript, Vite, Zustand, Framer Motion e Vitest. O deploy é na Vercel.
