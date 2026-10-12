import type { AssetAttribution, PatchMetadata, SourceRef } from "./types";

export const PATCH_META: PatchMetadata = {
  seasonLabel: "Overwatch 2 — parche vivo (agosto de 2026)",
  mode: "5v5 (rápida y competitiva)",
  rank: null,
  reviewedAt: "2026-08-12",
  status: "requiere-verificacion",
  note:
    "Contenido de evaluación editorial basado en interacciones de habilidades verificables. " +
    "No procede de estadísticas de partidas. El roster y las interacciones deben revisarse " +
    "contra las notas oficiales tras cada parche.",
};

/** Atribución de los retratos servidos desde `public/heroes/`. */
export const PORTRAIT_ATTRIBUTION: AssetAttribution = {
  file: "public/heroes/<slug>.webp (52 archivos)",
  owner: "Blizzard Entertainment, Inc.",
  origin:
    "Iconos de héroe alojados en Overwatch Wiki (overwatch.fandom.com), listados por el propietario del proyecto en prompts-counterwatch/imagenes-personajes/README.md",
  license:
    "Material con copyright de Blizzard usado solo para identificar a los héroes en un proyecto de comunidad sin ánimo comercial; sin permiso expreso documentado — retirar ante cualquier requerimiento del titular",
  accessedAt: "2026-08-12",
  attribution:
    "Retratos de héroes © Blizzard Entertainment, vía Overwatch Wiki (Fandom)",
};

export const SOURCES: SourceRef[] = [
  {
    id: "ow-heroes",
    title: "Héroes de Overwatch 2 (página oficial)",
    url: "https://overwatch.blizzard.com/es-es/heroes/",
    publisher: "Blizzard Entertainment",
    accessedAt: "2026-08-12",
  },
  {
    id: "ow-patch-notes",
    title: "Notas del parche vivo de Overwatch 2",
    url: "https://overwatch.blizzard.com/es-es/news/patch-notes/live/",
    publisher: "Blizzard Entertainment",
    accessedAt: "2026-08-12",
  },
];
