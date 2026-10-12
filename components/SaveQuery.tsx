"use client";

import { useEffect } from "react";
import { saveLastQuery } from "./ResumeBanner";
import type { Role } from "@/lib/types";

/** Guarda la consulta actual como "última consulta" para el banner de inicio. */
export function SaveQuery({ role, enemy }: { role: Role; enemy: string }) {
  useEffect(() => {
    saveLastQuery({ role, enemy });
  }, [role, enemy]);
  return null;
}
