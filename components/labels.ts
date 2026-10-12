import type { Confidence, CounterLevel, Role } from "@/lib/types";

export const LEVEL_LABEL: Record<CounterLevel, string> = {
  strong: "Counter fuerte",
  situational: "Counter situacional",
  safe: "Alternativa segura",
};

export const CONFIDENCE_LABEL: Record<Confidence, string> = {
  high: "Confianza alta",
  medium: "Confianza media",
  low: "Confianza baja",
  insufficient: "Información insuficiente",
};

export const ROLE_TEXT_CLASS: Record<Role, string> = {
  tank: "text-tank",
  damage: "text-damage",
  support: "text-support",
};

export const ROLE_BORDER_CLASS: Record<Role, string> = {
  tank: "border-tank",
  damage: "border-damage",
  support: "border-support",
};
