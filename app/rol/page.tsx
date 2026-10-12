import type { Metadata } from "next";
import Link from "next/link";
import { RoleIcon } from "@/components/RoleIcon";
import { ROLE_BORDER_CLASS, ROLE_TEXT_CLASS } from "@/components/labels";
import { ROLE_INFO } from "@/lib/heroes";
import { ROLES } from "@/lib/types";

export const metadata: Metadata = {
  title: "¿Qué rol juegas?",
};

export default function RolePage() {
  return (
    <section className="py-8">
      <p className="text-sm text-muted">Paso 1 de 2</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight">¿Qué rol juegas?</h1>
      <p className="mt-2 text-muted">
        La recomendación siempre será un héroe de tu rol.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {ROLES.map((role) => {
          const info = ROLE_INFO[role];
          return (
            <Link
              key={role}
              href={`/enemigo?rol=${role}`}
              className={`group flex min-h-36 flex-col justify-between rounded-2xl border-2 bg-surface p-5 transition-colors hover:bg-raised ${ROLE_BORDER_CLASS[role]}`}
            >
              <span className={`inline-flex items-center gap-2 text-xl font-bold ${ROLE_TEXT_CLASS[role]}`}>
                <RoleIcon role={role} className="h-6 w-6" />
                {info.label}
              </span>
              <span className="mt-3 text-sm text-muted group-hover:text-foreground">
                {info.description}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
