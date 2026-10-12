import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { EnemyPicker } from "@/components/EnemyPicker";
import { PENDING_COUNTERS } from "@/lib/counters";
import { ROLE_INFO } from "@/lib/heroes";
import { ROLES, type Role } from "@/lib/types";

export const metadata: Metadata = {
  title: "¿A qué héroe enemigo quieres hacer counter?",
};

function parseRole(value: string | string[] | undefined): Role | null {
  return typeof value === "string" && (ROLES as string[]).includes(value)
    ? (value as Role)
    : null;
}

export default async function EnemyPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const role = parseRole(params.rol);
  if (!role) {
    redirect("/rol");
  }

  return (
    <section className="py-8">
      <p className="text-sm text-muted">
        Paso 2 de 2 · Juegas{" "}
        <span className="font-semibold text-foreground">
          {ROLE_INFO[role].label}
        </span>{" "}
        <Link href="/rol" className="text-accent hover:underline">
          (cambiar)
        </Link>
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight">
        ¿A qué héroe enemigo quieres hacer counter?
      </h1>
      <EnemyPicker userRole={role} pendingSlugs={[...PENDING_COUNTERS]} />
    </section>
  );
}
