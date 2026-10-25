"""Gera a mídia do site a partir de um arquivo de origem (normalmente do _acervo/).

Capas de jogo não precisam deste script: o Astro processa a imagem da pasta do jogo.
Use --video para o gameplay, com o <nome> igual ao id do jogo.

Uso:
    python scripts/midia.py <origem> <nome> [--larguras 480,960,1440] [--plano]
    python scripts/midia.py <origem.gif|webp-animado> <nome> --video

Imagens viram WebP em public/media/<nome>-<largura>.webp (nunca maiores que a origem).
--plano usa reamostragem "nearest" (pixel art e interface ficam nítidas).
--video converte GIF ou WebP animado em MP4 (H.264) + WebM (VP9), sem áudio,
e grava um pôster WebP. Nenhum arquivo passa de 2 MB.
O _acervo/ só é lido, nunca alterado.
"""

import argparse
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageSequence

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "public" / "media"
LIMITE = 2 * 1024 * 1024


def ffmpeg():
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        return "ffmpeg"


def imagens(origem, nome, larguras, plano):
    img = Image.open(origem).convert("RGB")
    geradas = []
    for largura in sorted(set(min(l, img.width) for l in larguras)):
        altura = round(img.height * largura / img.width)
        filtro = Image.NEAREST if plano else Image.LANCZOS
        copia = img.resize((largura, altura), filtro) if largura != img.width else img
        destino = SAIDA / f"{nome}-{largura}.webp"
        copia.save(destino, "WEBP", quality=80, method=6)
        geradas.append(largura)
        conferir(destino)
    print(f"{nome}: larguras {geradas}, proporção {img.width}x{img.height}")


def video(origem, nome, largura):
    exe = ffmpeg()
    entrada = origem
    tmp = None
    if origem.suffix.lower() == ".webp":
        # O ffmpeg não lê WebP animado: passa por um GIF temporário.
        tmp = Path(tempfile.mkdtemp()) / "anim.gif"
        quadros = ImageSequence.Iterator(Image.open(origem))
        quadros = [q.convert("RGBA") for q in quadros]
        quadros[0].save(tmp, save_all=True, append_images=quadros[1:], loop=0,
                        duration=Image.open(origem).info.get("duration", 80))
        entrada = tmp

    escala = f"scale='min({largura},iw)':-2:flags=lanczos,fps=30"
    for crf in (26, 30, 34, 38):
        mp4 = SAIDA / f"{nome}.mp4"
        webm = SAIDA / f"{nome}.webm"
        subprocess.run([exe, "-y", "-loglevel", "error", "-i", str(entrada), "-vf", escala,
                        "-an", "-c:v", "libx264", "-preset", "slow", "-crf", str(crf),
                        "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(mp4)], check=True)
        subprocess.run([exe, "-y", "-loglevel", "error", "-i", str(entrada), "-vf", escala,
                        "-an", "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", str(crf + 8),
                        "-row-mt", "1", str(webm)], check=True)
        if mp4.stat().st_size <= LIMITE and webm.stat().st_size <= LIMITE:
            break
    conferir(mp4)
    conferir(webm)

    poster = Image.open(entrada)
    poster.seek(0)
    poster = poster.convert("RGB")
    if poster.width > largura:
        poster = poster.resize((largura, round(poster.height * largura / poster.width)), Image.LANCZOS)
    destino = SAIDA / f"{nome}-poster.webp"
    poster.save(destino, "WEBP", quality=78, method=6)
    conferir(destino)
    print(f"{nome}: vídeo {mp4.stat().st_size // 1024} KB (mp4), {webm.stat().st_size // 1024} KB (webm)")


def conferir(arquivo):
    if arquivo.stat().st_size > LIMITE:
        sys.exit(f"ERRO: {arquivo.name} passou de 2 MB")


def main():
    p = argparse.ArgumentParser()
    p.add_argument("origem", type=Path)
    p.add_argument("nome")
    p.add_argument("--larguras", default="480,960,1440")
    p.add_argument("--plano", action="store_true")
    p.add_argument("--video", action="store_true")
    p.add_argument("--largura-video", type=int, default=960)
    a = p.parse_args()
    SAIDA.mkdir(parents=True, exist_ok=True)
    if a.video:
        video(a.origem, a.nome, a.largura_video)
    else:
        imagens(a.origem, a.nome, [int(x) for x in a.larguras.split(",")], a.plano)


if __name__ == "__main__":
    main()
