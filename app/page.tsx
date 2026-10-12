import Link from "next/link";
import { ResumeBanner } from "@/components/ResumeBanner";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center py-16 text-center">
      <p className="rounded-full border border-edge bg-surface px-3 py-1 text-xs text-muted">
        Proyecto no oficial de la comunidad
      </p>
      <h1 className="mt-6 max-w-xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
        ¿Un héroe enemigo te está ganando la partida?
      </h1>
      <p className="mt-4 max-w-md text-pretty text-lg text-muted">
        Dinos tu rol y el enemigo que te complica. Te decimos a quién elegir,
        por qué funciona y cómo jugarlo.
      </p>
      <Link
        href="/rol"
        className="mt-8 rounded-xl bg-accent-strong px-8 py-4 text-lg font-semibold text-background transition-colors hover:bg-accent"
      >
        Buscar mi counter
      </Link>
      <ResumeBanner />
    </section>
  );
}
