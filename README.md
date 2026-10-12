# CounterPick OW

Web no oficial para consultar counters de Overwatch 2: eliges tu rol, eliges al
héroe enemigo que te complica y recibes una recomendación de tu mismo rol con
razones concretas, pasos de juego, riesgos y alternativas.

Construida según los prompts de `../prompts-counterwatch/`.

## Stack

- Next.js 15 (App Router) · TypeScript estricto · Tailwind CSS 4
- Datos locales versionados en `lib/` (sin base de datos ni servicios externos)
- Pruebas con Vitest

## Comandos

```bash
npm run dev        # desarrollo
npm test           # pruebas (validan roster, matriz y búsqueda)
npm run typecheck  # tipos
npm run lint       # lint
npm run build      # build de producción
```

## Estructura

- `lib/types.ts` — modelo de datos (Hero, CounterRecommendation, PatchMetadata…)
- `lib/heroes.ts` — roster (44 héroes: 13 tanques, 19 daño, 12 apoyo)
- `lib/counters/` — matriz editorial completa: 132 recomendaciones (44 × 3 roles)
- `lib/search.ts` — búsqueda tolerante a mayúsculas, acentos y signos
- `app/` — flujo guiado: `/` → `/rol` → `/enemigo` → `/resultado` (+ `/metodologia`, `/legal`)

## Limitaciones declaradas

- El contenido es **evaluación editorial** basada en interacciones de
  habilidades, no estadística de partidas. No se muestran porcentajes.
- El roster corresponde a la fecha de revisión indicada en `lib/meta.ts` y está
  marcado `requiere-verificacion`: debe cotejarse con la página oficial tras
  cada parche.
- Las entradas de héroes con poca información pública verificada (p. ej.
  Wuyang, Hazard, Freja) están marcadas con **confianza baja** de forma
  explícita.
- Los retratos son placeholders originales (inicial + icono de rol + color):
  no hay permiso documentado para usar arte oficial.
