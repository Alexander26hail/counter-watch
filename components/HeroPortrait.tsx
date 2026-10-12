import Image from "next/image";
import type { Hero } from "@/lib/types";

const ROLE_RING: Record<Hero["role"], string> = {
  tank: "border-tank",
  damage: "border-damage",
  support: "border-support",
};

const SIZES = {
  sm: { class: "h-10 w-10", px: 40 },
  md: { class: "h-14 w-14", px: 56 },
  lg: { class: "h-20 w-20", px: 80 },
} as const;

/**
 * Retrato del héroe servido desde `public/heroes/<slug>.webp`.
 * Origen y atribución de los iconos: ver /legal.
 * El borde usa el color del rol, siempre acompañado de texto o icono fuera
 * de este componente.
 */
export function HeroPortrait({
  hero,
  size = "md",
}: {
  hero: Hero;
  size?: keyof typeof SIZES;
}) {
  const s = SIZES[size];
  return (
    <Image
      src={`/heroes/${hero.slug}.webp`}
      alt={hero.portraitAlt}
      width={s.px}
      height={s.px}
      className={`shrink-0 rounded-xl border-2 bg-raised object-cover ${ROLE_RING[hero.role]} ${s.class}`}
    />
  );
}
