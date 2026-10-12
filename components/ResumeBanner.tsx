"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getHero, ROLE_INFO } from "@/lib/heroes";
import { ROLES, type Role } from "@/lib/types";

const STORAGE_KEY = "counterpick:last-query";

interface LastQuery {
  role: Role;
  enemy: string;
}

export function readLastQuery(): LastQuery | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "role" in parsed &&
      "enemy" in parsed &&
      ROLES.includes((parsed as LastQuery).role) &&
      typeof (parsed as LastQuery).enemy === "string" &&
      getHero((parsed as LastQuery).enemy) !== undefined
    ) {
      return parsed as LastQuery;
    }
  } catch {
    // Datos corruptos: se ignoran.
  }
  return null;
}

export function saveLastQuery(query: LastQuery): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(query));
  } catch {
    // Almacenamiento no disponible: la función es opcional.
  }
}

/** Banner opcional para retomar la última consulta guardada en este navegador. */
export function ResumeBanner() {
  const [last, setLast] = useState<LastQuery | null>(null);

  useEffect(() => {
    setLast(readLastQuery());
  }, []);

  if (!last) return null;
  const enemy = getHero(last.enemy);
  if (!enemy) return null;

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-xl border border-edge bg-surface px-4 py-3 text-sm">
      <span className="text-muted">Última consulta:</span>
      <Link
        href={`/resultado?rol=${last.role}&enemigo=${last.enemy}`}
        className="font-semibold text-accent hover:underline"
      >
        {ROLE_INFO[last.role].label} contra {enemy.name}
      </Link>
      <button
        type="button"
        onClick={() => {
          window.localStorage.removeItem(STORAGE_KEY);
          setLast(null);
        }}
        className="rounded border border-edge px-2 py-1 text-xs text-muted hover:text-foreground"
      >
        Borrar
      </button>
    </div>
  );
}
