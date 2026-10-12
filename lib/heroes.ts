import type { Hero, Role, RoleInfo } from "./types";

export const ROLE_INFO: Record<Role, RoleInfo> = {
  tank: {
    id: "tank",
    label: "Tanque",
    description: "Creas espacio y absorbes presión al frente del equipo.",
  },
  damage: {
    id: "damage",
    label: "Daño",
    description: "Eliminas amenazas y decides los duelos clave.",
  },
  support: {
    id: "support",
    label: "Apoyo",
    description: "Mantienes vivo al equipo y habilitas las jugadas.",
  },
};

const OFFICIAL_BASE = "https://overwatch.blizzard.com/es-es/heroes";

function hero(slug: string, name: string, role: Role): Hero {
  return {
    id: slug,
    slug,
    name,
    role,
    active: true,
    officialUrl: `${OFFICIAL_BASE}/${slug}/`,
    portraitAlt: `Retrato de ${name}`,
  };
}

/**
 * Roster según el conocimiento editorial en la fecha de revisión declarada en
 * `lib/meta.ts`. Debe verificarse contra la página oficial de héroes tras cada
 * parche; ver la página de metodología.
 */
export const HEROES: Hero[] = [
  // Tanques
  hero("dva", "D.Va", "tank"),
  hero("domina", "Domina", "tank"),
  hero("doomfist", "Doomfist", "tank"),
  hero("hazard", "Hazard", "tank"),
  hero("junker-queen", "Junker Queen", "tank"),
  hero("mauga", "Mauga", "tank"),
  hero("orisa", "Orisa", "tank"),
  hero("ramattra", "Ramattra", "tank"),
  hero("reinhardt", "Reinhardt", "tank"),
  hero("roadhog", "Roadhog", "tank"),
  hero("sigma", "Sigma", "tank"),
  hero("winston", "Winston", "tank"),
  hero("wrecking-ball", "Wrecking Ball", "tank"),
  hero("zarya", "Zarya", "tank"),
  // Daño
  hero("anran", "Anran", "damage"),
  hero("ashe", "Ashe", "damage"),
  hero("bastion", "Bastion", "damage"),
  hero("cassidy", "Cassidy", "damage"),
  hero("echo", "Echo", "damage"),
  hero("emre", "Emre", "damage"),
  hero("freja", "Freja", "damage"),
  hero("genji", "Genji", "damage"),
  hero("hanzo", "Hanzo", "damage"),
  hero("junkrat", "Junkrat", "damage"),
  hero("mei", "Mei", "damage"),
  hero("pharah", "Pharah", "damage"),
  hero("reaper", "Reaper", "damage"),
  hero("shion", "Shion", "damage"),
  hero("sierra", "Sierra", "damage"),
  hero("sojourn", "Sojourn", "damage"),
  hero("soldier-76", "Soldier: 76", "damage"),
  hero("sombra", "Sombra", "damage"),
  hero("symmetra", "Symmetra", "damage"),
  hero("torbjorn", "Torbjörn", "damage"),
  hero("tracer", "Tracer", "damage"),
  hero("vendetta", "Vendetta", "damage"),
  hero("venture", "Venture", "damage"),
  hero("widowmaker", "Widowmaker", "damage"),
  // Apoyo
  hero("ana", "Ana", "support"),
  hero("baptiste", "Baptiste", "support"),
  hero("brigitte", "Brigitte", "support"),
  hero("illari", "Illari", "support"),
  hero("jetpack-cat", "Jetpack Cat", "support"),
  hero("juno", "Juno", "support"),
  hero("kiriko", "Kiriko", "support"),
  hero("lifeweaver", "Lifeweaver", "support"),
  hero("lucio", "Lúcio", "support"),
  hero("mercy", "Mercy", "support"),
  hero("mizuki", "Mizuki", "support"),
  hero("moira", "Moira", "support"),
  hero("wuyang", "Wuyang", "support"),
  hero("zenyatta", "Zenyatta", "support"),
];

const bySlug = new Map(HEROES.map((h) => [h.slug, h]));

export function getHero(slug: string): Hero | undefined {
  return bySlug.get(slug);
}

export function heroesByRole(role: Role): Hero[] {
  return HEROES.filter((h) => h.role === role && h.active);
}
