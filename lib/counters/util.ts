import type {
  AlternativePick,
  Confidence,
  CounterLevel,
  CounterRecommendation,
  Role,
} from "../types";

/** Fecha de la última revisión editorial de la matriz. */
export const REVIEWED_AT = "2026-08-12";

export function alt(
  heroSlug: string,
  level: CounterLevel,
  note: string,
): AlternativePick {
  return { heroSlug, level, note };
}

export function rec(
  enemySlug: string,
  userRole: Role,
  pickSlug: string,
  level: CounterLevel,
  confidence: Confidence,
  summary: string,
  reasons: string[],
  steps: string[],
  risks: string[],
  alternatives: AlternativePick[],
): CounterRecommendation {
  return {
    enemySlug,
    userRole,
    pickSlug,
    level,
    confidence,
    summary,
    reasons,
    steps,
    risks,
    alternatives,
    reviewedAt: REVIEWED_AT,
  };
}
