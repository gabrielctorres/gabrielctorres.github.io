import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Um jogo = uma pasta em src/content/jogos/<id>/ com jogo.md e a capa.
// Pastas que começam com "_" (como o _modelo) ficam fora do site.
const jogos = defineCollection({
  loader: glob({
    pattern: '[!_]*/jogo.md',
    base: './src/content/jogos',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      // Data de lançamento (AAAA-MM-DD). Sem data = vai para o fim da grade.
      data: z.coerce.date().nullable().default(null),
      emDesenvolvimento: z.boolean().default(false),
      status: z.string().nullable().default(null),
      tipo: z.string(),
      engine: z.string(),
      plataforma: z.string().nullable().default(null),
      selo: z.string(),
      contexto: z.string().nullable().default(null),
      equipe: z.string().nullable().default(null),
      duracao: z.string().nullable().default(null),
      papel: z.string().nullable().default(null),
      creditos: z.string().nullable().default(null),
      resumo: z.string(),
      descricao: z.string(),
      programei: z.array(z.string()).nullable().default(null),
      links: z
        .object({
          jogar: z.url().optional(),
          steam: z.url().optional(),
          site: z.url().optional(),
          github: z.url().optional(),
        })
        .default({}),
      capa: image(),
      capaAlt: z.string(),
      tela2: image().optional(),
      tela2Alt: z.string().optional(),
    }),
});

export const collections = { jogos };
