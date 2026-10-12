import type { CounterRecommendation, Role } from "../types";
import { VS_DAMAGE } from "./vs-damage";
import { VS_SUPPORTS } from "./vs-supports";
import { VS_TANKS } from "./vs-tanks";

export const COUNTERS: CounterRecommendation[] = [
  ...VS_TANKS,
  ...VS_DAMAGE,
  ...VS_SUPPORTS,
];

/**
 * Héroes recientes sin recomendaciones verificadas todavía.
 * Aparecen como seleccionables y el resultado declara el hueco con honestidad
 * en lugar de inventar contenido (regla de los prompts del proyecto).
 */
export const PENDING_COUNTERS: ReadonlySet<string> = new Set([
  "domina",
  "anran",
  "emre",
  "shion",
  "sierra",
  "vendetta",
  "jetpack-cat",
  "mizuki",
]);

const index = new Map<string, CounterRecommendation>();
for (const c of COUNTERS) {
  index.set(`${c.enemySlug}:${c.userRole}`, c);
}

export function getRecommendation(
  enemySlug: string,
  userRole: Role,
): CounterRecommendation | undefined {
  return index.get(`${enemySlug}:${userRole}`);
}
