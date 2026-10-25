import { existsSync } from 'node:fs';
import { getCollection, type CollectionEntry } from 'astro:content';

export type Jogo = CollectionEntry<'jogos'>;

// Ordem da grade: do mais recente para o mais antigo pela data; sem data no fim.
export async function jogos(): Promise<Jogo[]> {
  const todos = await getCollection('jogos');
  return todos.sort((a, b) => (b.data.data?.getTime() ?? -Infinity) - (a.data.data?.getTime() ?? -Infinity));
}

// Jogo em desenvolvimento não mostra ano: a data dele é só o início, para ordenar.
export const ano = (j: Jogo) =>
  j.data.data && !j.data.emDesenvolvimento ? String(j.data.data.getUTCFullYear()) : null;

export const meta = (j: Jogo) => [j.data.tipo, ano(j), j.data.engine].filter(Boolean).join(' · ');

// O vídeo existe se o scripts/midia.py gerou public/media/<id>.mp4.
export function video(j: Jogo) {
  if (!existsSync(`public/media/${j.id}.mp4`)) return null;
  return {
    mp4: `/media/${j.id}.mp4`,
    webm: existsSync(`public/media/${j.id}.webm`) ? `/media/${j.id}.webm` : null,
    poster: existsSync(`public/media/${j.id}-poster.webp`) ? `/media/${j.id}-poster.webp` : null,
    alt: `Gameplay do ${j.data.titulo}`,
  };
}

// Ação principal fora do site: wishlist, jogar ou abrir o site.
export function acaoExterna(j: Jogo) {
  const { links } = j.data;
  if (links.steam) return { href: links.steam, texto: 'Wishlist na Steam' };
  if (links.jogar) return { href: links.jogar, texto: 'Jogar no itch.io' };
  if (links.site) return { href: links.site, texto: 'Abrir o site' };
  return null;
}
