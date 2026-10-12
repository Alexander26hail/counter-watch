import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal y atribuciones",
};

export default function LegalPage() {
  return (
    <section className="py-8 leading-relaxed">
      <h1 className="text-3xl font-bold tracking-tight">Aviso legal y atribuciones</h1>

      <h2 className="mt-8 text-xl font-bold">Proyecto no oficial</h2>
      <p className="mt-2 text-muted">
        CounterPick OW es un proyecto de la comunidad sin ánimo comercial. No
        está afiliado a Blizzard Entertainment, no cuenta con su respaldo y no
        representa sus opiniones. Overwatch, los nombres de sus héroes y de sus
        habilidades son marcas y propiedad intelectual de Blizzard
        Entertainment, y se mencionan aquí únicamente para identificar el juego
        del que trata la herramienta.
      </p>

      <h2 className="mt-8 text-xl font-bold">Imágenes</h2>
      <p className="mt-2 text-muted">
        Los retratos de héroes son iconos cuyo copyright pertenece a Blizzard
        Entertainment, obtenidos a través de la Overwatch Wiki (Fandom). Se
        usan únicamente para identificar a cada héroe en esta herramienta de
        comunidad sin ánimo comercial, y no implican afiliación ni respaldo.
        No existe un permiso expreso documentado: si el titular de los derechos
        solicita su retirada, se sustituirán por los marcadores de posición
        originales del sitio (inicial, icono de rol y colores propios).
      </p>

      <h2 className="mt-8 text-xl font-bold">Origen del contenido</h2>
      <p className="mt-2 text-muted">
        Las recomendaciones y explicaciones son redacción editorial propia. Se
        consultaron páginas oficiales de Blizzard como referencia del roster y
        del parche (ver metodología). No se han copiado textos, bases de datos
        ni diseños de otros sitios de estadísticas.
      </p>

      <h2 className="mt-8 text-xl font-bold">Sin garantías</h2>
      <p className="mt-2 text-muted">
        El contenido se ofrece tal cual, como orientación. Un counter mejora un
        enfrentamiento, pero no garantiza resultados: el estado del parche, el
        mapa, la composición y la ejecución individual influyen de forma
        decisiva.
      </p>
    </section>
  );
}
