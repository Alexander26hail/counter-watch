"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { HeroPortrait } from "./HeroPortrait";
import { RoleIcon } from "./RoleIcon";
import { ROLE_TEXT_CLASS } from "./labels";
import { HEROES, ROLE_INFO } from "@/lib/heroes";
import { matchesQuery } from "@/lib/search";
import { ROLES, type Role } from "@/lib/types";

export function EnemyPicker({
  userRole,
  pendingSlugs,
}: {
  userRole: Role;
  pendingSlugs: string[];
}) {
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<Role | "all">("all");
  const pending = useMemo(() => new Set(pendingSlugs), [pendingSlugs]);

  const results = useMemo(
    () =>
      HEROES.filter(
        (h) =>
          h.active &&
          (roleFilter === "all" || h.role === roleFilter) &&
          matchesQuery(h.name, query),
      ),
    [query, roleFilter],
  );

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="flex-1">
          <span className="sr-only">Buscar héroe enemigo</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca por nombre (ej. lucio, dva, soldado)…"
            autoComplete="off"
            className="w-full rounded-xl border border-edge bg-surface px-4 py-3 text-base placeholder:text-muted focus:border-accent"
          />
        </label>
        <div role="group" aria-label="Filtrar por rol" className="flex gap-2">
          <button
            type="button"
            onClick={() => setRoleFilter("all")}
            aria-pressed={roleFilter === "all"}
            className={`rounded-lg border px-3 py-2 text-sm ${
              roleFilter === "all"
                ? "border-accent text-accent"
                : "border-edge text-muted hover:text-foreground"
            }`}
          >
            Todos
          </button>
          {ROLES.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setRoleFilter(role)}
              aria-pressed={roleFilter === role}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm ${
                roleFilter === role
                  ? `border-current ${ROLE_TEXT_CLASS[role]}`
                  : "border-edge text-muted hover:text-foreground"
              }`}
            >
              <RoleIcon role={role} className="h-3.5 w-3.5" />
              {ROLE_INFO[role].label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted" role="status">
        {results.length === 0
          ? "Ningún héroe coincide con tu búsqueda. Prueba con otro nombre o quita el filtro de rol."
          : `${results.length} héroe${results.length === 1 ? "" : "s"} disponible${results.length === 1 ? "" : "s"}`}
      </p>

      <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {results.map((enemy) => (
          <li key={enemy.slug}>
            <Link
              href={`/resultado?rol=${userRole}&enemigo=${enemy.slug}`}
              className="flex min-h-24 items-center gap-3 rounded-xl border border-edge bg-surface p-3 transition-colors hover:border-accent hover:bg-raised"
            >
              <HeroPortrait hero={enemy} size="sm" />
              <span>
                <span className="block font-semibold leading-tight">
                  {enemy.name}
                  {pending.has(enemy.slug) && (
                    <span className="ml-1.5 rounded-full border border-edge px-1.5 py-0.5 align-middle text-[10px] font-normal text-muted">
                      Datos pendientes
                    </span>
                  )}
                </span>
                <span
                  className={`mt-0.5 inline-flex items-center gap-1 text-xs ${ROLE_TEXT_CLASS[enemy.role]}`}
                >
                  <RoleIcon role={enemy.role} className="h-3 w-3" />
                  {ROLE_INFO[enemy.role].label}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
