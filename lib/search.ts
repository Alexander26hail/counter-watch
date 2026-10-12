/** Normaliza un texto para búsqueda: minúsculas, sin acentos ni signos. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[.:'\-\s]/g, "");
}

/** Coincidencia tolerante a mayúsculas, acentos y signos (D.Va, Lúcio, Soldier: 76…). */
export function matchesQuery(name: string, query: string): boolean {
  const q = normalize(query);
  if (q.length === 0) return true;
  return normalize(name).includes(q);
}
