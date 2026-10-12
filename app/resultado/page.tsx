import type { Metadata } from "next";
import Link from "next/link";
import { HeroPortrait } from "@/components/HeroPortrait";
import { RoleIcon } from "@/components/RoleIcon";
import { SaveQuery } from "@/components/SaveQuery";
import { ShareButton } from "@/components/ShareButton";
import {
  CONFIDENCE_LABEL,
  LEVEL_LABEL,
  ROLE_TEXT_CLASS,
} from "@/components/labels";
import { getRecommendation } from "@/lib/counters";
import { getHero, ROLE_INFO } from "@/lib/heroes";
import { PATCH_META, SOURCES } from "@/lib/meta";
import { ROLES, type Role } from "@/lib/types";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function parseParams(params: Record<string, string | string[] | undefined>): {
  role: Role | null;
  enemySlug: string | null;
} {
  const role =
    typeof params.rol === "string" && (ROLES as string[]).includes(params.rol)
      ? (params.rol as Role)
      : null;
  const enemySlug = typeof params.enemigo === "string" ? params.enemigo : null;
  return { role, enemySlug };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { role, enemySlug } = parseParams(await searchParams);
  const enemy = enemySlug ? getHero(enemySlug) : undefined;
  if (!role || !enemy) return { title: "Resultado" };
  const recommendation = getRecommendation(enemy.slug, role);
  const pick = recommendation ? getHero(recommendation.pickSlug) : undefined;
  return {
    title: pick
      ? `${pick.name} contra ${enemy.name} (${ROLE_INFO[role].label})`
      : `Contra ${enemy.name}`,
    description: recommendation?.summary,
  };
}

function ErrorState({ message }: { message: string }) {
  return (
    <section className="flex flex-col items-center py-16 text-center">
      <h1 className="text-2xl font-bold">No pudimos completar la consulta</h1>
      <p className="mt-3 max-w-md text-muted">{message}</p>
      <Link
        href="/rol"
        className="mt-6 rounded-xl bg-accent-strong px-6 py-3 font-semibold text-background hover:bg-accent"
      >
        Empezar de nuevo
      </Link>
    </section>
  );
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { role, enemySlug } = parseParams(await searchParams);

  if (!role) {
    return <ErrorState message="Falta el rol o no es válido. Elige tu rol para continuar." />;
  }
  const enemy = enemySlug ? getHero(enemySlug) : undefined;
  if (!enemy) {
    return (
      <ErrorState message="No reconocemos ese héroe enemigo. Puede que el enlace esté incompleto o que el héroe haya cambiado de nombre." />
    );
  }

  const recommendation = getRecommendation(enemy.slug, role);
  if (!recommendation) {
    return (
      <ErrorState
        message={`Todavía no tenemos una recomendación verificada de ${ROLE_INFO[role].label} contra ${enemy.name}. Preferimos no inventarla.`}
      />
    );
  }

  const pick = getHero(recommendation.pickSlug);
  if (!pick) {
    return <ErrorState message="La recomendación apunta a un héroe que ya no está en el roster. Estamos revisándola." />;
  }

  const alternatives = recommendation.alternatives
    .map((a) => ({ ...a, hero: getHero(a.heroSlug) }))
    .filter((a) => a.hero !== undefined);

  return (
    <section className="py-6">
      <SaveQuery role={role} enemy={enemy.slug} />

      {/* Cabecera: enemigo → counter */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <HeroPortrait hero={enemy} size="sm" />
          Contra <span className="font-semibold text-foreground">{enemy.name}</span>
        </span>
        <span aria-hidden>·</span>
        <span>
          Juegas{" "}
          <span className={`font-semibold ${ROLE_TEXT_CLASS[role]}`}>
            {ROLE_INFO[role].label}
          </span>
        </span>
      </div>

      {/* Tarjeta principal */}
      <article className="mt-4 rounded-2xl border border-edge bg-surface p-5 sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {LEVEL_LABEL[recommendation.level]} · {CONFIDENCE_LABEL[recommendation.confidence]}
        </p>
        <div className="mt-3 flex items-center gap-4">
          <HeroPortrait hero={pick} size="lg" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {pick.name}
            </h1>
            <p className={`mt-1 inline-flex items-center gap-1.5 text-sm ${ROLE_TEXT_CLASS[pick.role]}`}>
              <RoleIcon role={pick.role} className="h-4 w-4" />
              {ROLE_INFO[pick.role].label}
            </p>
          </div>
        </div>
        <p className="mt-4 text-pretty text-lg">{recommendation.summary}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section aria-labelledby="por-que">
            <h2 id="por-que" className="text-sm font-bold uppercase tracking-wide text-muted">
              Por qué funciona
            </h2>
            <ul className="mt-2 space-y-2">
              {recommendation.reasons.map((reason) => (
                <li key={reason} className="flex gap-2 text-sm leading-relaxed">
                  <span aria-hidden className="mt-0.5 text-accent">✓</span>
                  {reason}
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="como-jugarlo">
            <h2 id="como-jugarlo" className="text-sm font-bold uppercase tracking-wide text-muted">
              Cómo jugarlo
            </h2>
            <ol className="mt-2 space-y-2">
              {recommendation.steps.map((step, i) => (
                <li key={step} className="flex gap-2 text-sm leading-relaxed">
                  <span aria-hidden className="font-mono text-accent">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section aria-labelledby="cuidado" className="mt-6 rounded-xl border border-[#4a3b22] bg-[#241d12] p-4">
          <h2 id="cuidado" className="text-sm font-bold uppercase tracking-wide text-tank">
            Cuidado con
          </h2>
          <ul className="mt-2 space-y-2">
            {recommendation.risks.map((risk) => (
              <li key={risk} className="text-sm leading-relaxed">{risk}</li>
            ))}
          </ul>
        </section>
      </article>

      {/* Alternativas */}
      <section aria-labelledby="alternativas" className="mt-6">
        <h2 id="alternativas" className="text-lg font-bold">
          Alternativas de {ROLE_INFO[role].label}
        </h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {alternatives.map((a) => (
            <li
              key={a.heroSlug}
              className="flex items-start gap-3 rounded-xl border border-edge bg-surface p-4"
            >
              <HeroPortrait hero={a.hero!} size="sm" />
              <div>
                <p className="font-semibold">
                  {a.hero!.name}{" "}
                  <span className="ml-1 rounded-full border border-edge px-2 py-0.5 text-xs text-muted">
                    {LEVEL_LABEL[a.level]}
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted">{a.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Acciones */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={`/enemigo?rol=${role}`}
          className="rounded-lg bg-accent-strong px-4 py-2 text-sm font-semibold text-background hover:bg-accent"
        >
          Cambiar enemigo
        </Link>
        <Link
          href="/rol"
          className="rounded-lg border border-edge px-4 py-2 text-sm text-muted hover:text-foreground"
        >
          Cambiar rol
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-edge px-4 py-2 text-sm text-muted hover:text-foreground"
        >
          Nueva consulta
        </Link>
        <ShareButton />
      </div>

      {/* Contexto del dato */}
      <aside className="mt-8 rounded-xl border border-edge bg-surface p-4 text-xs text-muted">
        <p>
          <span className="font-semibold text-foreground">Contexto:</span>{" "}
          {PATCH_META.seasonLabel} · {PATCH_META.mode} ·{" "}
          {PATCH_META.rank ?? "todos los rangos, sin distinción"} · Revisado el{" "}
          {recommendation.reviewedAt}.
        </p>
        <p className="mt-1">{PATCH_META.note}</p>
        <p className="mt-1">
          Fuentes de referencia:{" "}
          {SOURCES.map((s, i) => (
            <span key={s.id}>
              {i > 0 && " · "}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {s.title}
              </a>
            </span>
          ))}
          . Más detalles en la{" "}
          <Link href="/metodologia" className="underline hover:text-foreground">
            metodología
          </Link>
          .
        </p>
        <p className="mt-1">
          Un counter mejora el enfrentamiento, pero no garantiza ganar: mapa,
          composición, habilidad y coordinación también influyen.
        </p>
      </aside>
    </section>
  );
}
