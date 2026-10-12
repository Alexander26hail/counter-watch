/**
 * Modelo de datos central de CounterPick OW.
 * El contenido visible está separado de la lógica; los slugs son estables
 * aunque cambie la traducción.
 */

export type Role = "tank" | "damage" | "support";

export const ROLES: Role[] = ["tank", "damage", "support"];

export interface RoleInfo {
  id: Role;
  /** Nombre visible en español. */
  label: string;
  /** Descripción corta para la tarjeta de selección. */
  description: string;
}

export interface Hero {
  /** Identificador estable, igual al slug. */
  id: string;
  slug: string;
  /** Nombre oficial (coincide con el nombre en español para todos los héroes actuales). */
  name: string;
  role: Role;
  /** Estado en el modo analizado (5v5 competitivo/rápido). */
  active: boolean;
  /** URL oficial de referencia del héroe. */
  officialUrl: string;
  /** Texto alternativo del retrato/placeholder. */
  portraitAlt: string;
}

export type CounterLevel = "strong" | "situational" | "safe";

export type Confidence = "high" | "medium" | "low" | "insufficient";

export type EvidenceKind = "data" | "editorial" | "inference";

export interface Evidence {
  kind: EvidenceKind;
  /** Afirmación respaldada. */
  claim: string;
  /** Fuente que respalda la afirmación. */
  sourceId: string;
}

export interface AlternativePick {
  heroSlug: string;
  /** Explicación breve de cuándo elegir esta alternativa. */
  note: string;
  level: CounterLevel;
}

export interface CounterRecommendation {
  /** Héroe enemigo objetivo. */
  enemySlug: string;
  /** Rol que juega el usuario; el counter SIEMPRE pertenece a este rol. */
  userRole: Role;
  /** Héroe recomendado (del rol del usuario). */
  pickSlug: string;
  level: CounterLevel;
  confidence: Confidence;
  /** Frase corta: por qué es la mejor opción. */
  summary: string;
  /** 2–3 interacciones concretas (habilidades, alcance, movilidad, ritmo). */
  reasons: string[];
  /** 3 pasos accionables: cómo jugarlo. */
  steps: string[];
  /** 1–2 condiciones que pueden hacer fallar el counter. */
  risks: string[];
  /** 2–3 alternativas del mismo rol. */
  alternatives: AlternativePick[];
  /** Fecha de última revisión editorial (ISO). */
  reviewedAt: string;
}

export interface SourceRef {
  id: string;
  title: string;
  url: string;
  publisher: string;
  /** Fecha de consulta (ISO). */
  accessedAt: string;
}

export interface PatchMetadata {
  /** Temporada/parche al que se refiere el contenido. */
  seasonLabel: string;
  /** Modo de juego analizado. */
  mode: string;
  /** Rango: null = todas las categorías, sin distinción. */
  rank: string | null;
  /** Fecha de la última revisión editorial del conjunto (ISO). */
  reviewedAt: string;
  /** Estado de vigencia declarado. */
  status: "vigente" | "requiere-verificacion" | "desactualizado";
  /** Nota honesta sobre el origen y los límites del dato. */
  note: string;
}

export interface AssetAttribution {
  file: string;
  owner: string;
  origin: string;
  license: string;
  accessedAt: string;
  attribution: string;
}
