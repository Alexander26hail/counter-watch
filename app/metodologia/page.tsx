import type { Metadata } from "next";
import { PATCH_META, SOURCES } from "@/lib/meta";
import { HEROES } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Metodología y fuentes",
};

export default function MethodologyPage() {
  const tanks = HEROES.filter((h) => h.role === "tank").length;
  const damage = HEROES.filter((h) => h.role === "damage").length;
  const supports = HEROES.filter((h) => h.role === "support").length;

  return (
    <section className="prose-sm py-8 leading-relaxed">
      <h1 className="text-3xl font-bold tracking-tight">Metodología y fuentes</h1>

      <h2 className="mt-8 text-xl font-bold">Qué es una recomendación aquí</h2>
      <p className="mt-2 text-muted">
        Cada recomendación es una <strong className="text-foreground">evaluación editorial</strong>{" "}
        basada en interacciones de habilidades verificables: alcance, movilidad,
        bloqueos, anticuraciones, limpiezas y ritmo de juego. No procede de
        estadísticas de partidas ni replica la fórmula de ningún otro sitio. Por
        eso no mostramos porcentajes de victoria: mostrar cifras sin datos
        reales sería fingir precisión.
      </p>

      <h2 className="mt-8 text-xl font-bold">Niveles y confianza</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
        <li>
          <strong className="text-foreground">Counter fuerte</strong>: la interacción anula una
          herramienta central del enemigo.
        </li>
        <li>
          <strong className="text-foreground">Counter situacional</strong>: funciona bajo
          condiciones concretas de mapa, composición o ejecución.
        </li>
        <li>
          <strong className="text-foreground">Alternativa segura</strong>: no gana el
          enfrentamiento por sí sola, pero reduce el problema sin exponerte.
        </li>
        <li>
          <strong className="text-foreground">Confianza alta/media/baja</strong>: cuánto respaldo
          tiene la interacción descrita. Los héroes recientes con menos
          información verificada se marcan con confianza baja de forma
          explícita, en lugar de inventar detalles.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-bold">Estado del contenido</h2>
      <p className="mt-2 text-muted">
        {PATCH_META.seasonLabel}. Modo analizado: {PATCH_META.mode}. Rango:{" "}
        {PATCH_META.rank ?? "sin distinción de rango"}. Última revisión
        editorial: {PATCH_META.reviewedAt}. Estado:{" "}
        <strong className="text-foreground">{PATCH_META.status}</strong>.
      </p>
      <p className="mt-2 text-muted">{PATCH_META.note}</p>
      <p className="mt-2 text-muted">
        Roster incluido: {HEROES.length} héroes ({tanks} tanques, {damage} de
        daño y {supports} de apoyo). Este total debe cotejarse con la página
        oficial de héroes tras cada parche; si un héroe nuevo no aparece aquí,
        el contenido está pendiente de actualización.
      </p>

      <h2 className="mt-8 text-xl font-bold">Proceso de revisión por parche</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted">
        <li>Cotejar el roster con la página oficial de héroes.</li>
        <li>Leer las notas del parche vivo y marcar héroes cambiados.</li>
        <li>Revisar las recomendaciones que involucren a esos héroes.</li>
        <li>Actualizar la fecha de revisión y el estado de vigencia.</li>
      </ol>

      <h2 className="mt-8 text-xl font-bold">Fuentes de referencia</h2>
      <ul className="mt-2 space-y-2 text-muted">
        {SOURCES.map((s) => (
          <li key={s.id}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              {s.title}
            </a>{" "}
            — {s.publisher}. Consultada por última vez: {s.accessedAt}.
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-bold">Sobre las imágenes</h2>
      <p className="mt-2 text-muted">
        Los retratos son iconos de héroe © Blizzard Entertainment, obtenidos a
        través de la Overwatch Wiki (Fandom) y almacenados localmente en{" "}
        <code>public/heroes/&lt;slug&gt;.webp</code>. Su origen, titular y
        condiciones se documentan en el aviso legal. Los héroes más recientes
        aparecen con la etiqueta «Datos pendientes» hasta que sus
        recomendaciones estén verificadas.
      </p>
    </section>
  );
}
