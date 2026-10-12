import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { COUNTERS, getRecommendation, PENDING_COUNTERS } from "../counters";
import { getHero, HEROES, heroesByRole } from "../heroes";
import { matchesQuery } from "../search";
import { ROLES } from "../types";

describe("roster de héroes", () => {
  it("no contiene slugs duplicados", () => {
    const slugs = HEROES.map((h) => h.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("cada héroe tiene su retrato en public/heroes/<slug>.webp", () => {
    const dir = join(__dirname, "..", "..", "public", "heroes");
    for (const hero of HEROES) {
      expect(
        existsSync(join(dir, `${hero.slug}.webp`)),
        `imagen faltante: ${hero.slug}.webp`,
      ).toBe(true);
    }
  });

  it("cada héroe tiene rol válido, nombre y alt de retrato", () => {
    for (const hero of HEROES) {
      expect(ROLES).toContain(hero.role);
      expect(hero.name.length).toBeGreaterThan(0);
      expect(hero.portraitAlt).toContain(hero.name);
      expect(hero.officialUrl).toMatch(/^https:\/\//);
    }
  });
});

describe("matriz de counters", () => {
  it("cubre cada combinación héroe activo × rol, salvo los declarados pendientes", () => {
    const seen = new Set<string>();
    for (const c of COUNTERS) {
      const key = `${c.enemySlug}:${c.userRole}`;
      expect(seen.has(key), `duplicado: ${key}`).toBe(false);
      seen.add(key);
    }
    for (const hero of HEROES.filter((h) => h.active)) {
      for (const role of ROLES) {
        const covered = seen.has(`${hero.slug}:${role}`);
        if (PENDING_COUNTERS.has(hero.slug)) {
          expect(covered, `${hero.slug} está en pendientes pero tiene datos`).toBe(false);
        } else {
          expect(covered, `falta ${hero.slug} × ${role}`).toBe(true);
        }
      }
    }
  });

  it("cada slug pendiente corresponde a un héroe real del roster", () => {
    for (const slug of PENDING_COUNTERS) {
      expect(getHero(slug), `pendiente huérfano: ${slug}`).toBeDefined();
    }
  });

  it("la recomendación y todas las alternativas pertenecen al rol del usuario", () => {
    for (const c of COUNTERS) {
      const pick = getHero(c.pickSlug);
      expect(pick, `héroe inexistente: ${c.pickSlug}`).toBeDefined();
      expect(pick?.role, `${c.pickSlug} vs ${c.enemySlug}`).toBe(c.userRole);
      for (const a of c.alternatives) {
        const altHero = getHero(a.heroSlug);
        expect(altHero, `alternativa inexistente: ${a.heroSlug}`).toBeDefined();
        expect(altHero?.role, `${a.heroSlug} vs ${c.enemySlug}`).toBe(c.userRole);
      }
    }
  });

  it("no recomienda al mismo héroe enemigo como su propio counter", () => {
    for (const c of COUNTERS) {
      expect(c.pickSlug).not.toBe(c.enemySlug);
    }
  });

  it("cada recomendación tiene resumen, razones, pasos, riesgos, alternativas y fecha", () => {
    for (const c of COUNTERS) {
      expect(c.summary.length).toBeGreaterThan(10);
      expect(c.reasons.length).toBeGreaterThanOrEqual(2);
      expect(c.steps.length).toBe(3);
      expect(c.risks.length).toBeGreaterThanOrEqual(1);
      expect(c.alternatives.length).toBeGreaterThanOrEqual(2);
      expect(c.reviewedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("las alternativas no repiten al pick principal ni entre sí", () => {
    for (const c of COUNTERS) {
      const slugs = c.alternatives.map((a) => a.heroSlug);
      expect(new Set(slugs).size).toBe(slugs.length);
      expect(slugs).not.toContain(c.pickSlug);
    }
  });

  it("getRecommendation devuelve la fila correcta y undefined ante entradas inválidas", () => {
    const result = getRecommendation("roadhog", "support");
    expect(result?.pickSlug).toBe("ana");
    expect(getRecommendation("heroe-inexistente", "tank")).toBeUndefined();
  });
});

describe("búsqueda de héroes", () => {
  it("ignora mayúsculas, acentos y signos", () => {
    expect(matchesQuery("Lúcio", "lucio")).toBe(true);
    expect(matchesQuery("D.Va", "dva")).toBe(true);
    expect(matchesQuery("Soldier: 76", "soldier76")).toBe(true);
    expect(matchesQuery("Torbjörn", "torbjorn")).toBe(true);
    expect(matchesQuery("Junker Queen", "junker queen")).toBe(true);
  });

  it("la cadena vacía coincide con todo y una consulta absurda con nada", () => {
    expect(matchesQuery("Ana", "")).toBe(true);
    expect(matchesQuery("Ana", "zzz")).toBe(false);
  });

  it("cada héroe del roster se encuentra buscando su nombre sin acentos", () => {
    for (const hero of heroesByRole("tank")
      .concat(heroesByRole("damage"))
      .concat(heroesByRole("support"))) {
      const plain = hero.name
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase();
      expect(matchesQuery(hero.name, plain), hero.name).toBe(true);
    }
  });
});
