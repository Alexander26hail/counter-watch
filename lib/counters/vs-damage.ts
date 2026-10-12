import type { CounterRecommendation } from "../types";
import { alt, rec } from "./util";

/** Recomendaciones contra héroes enemigos de rol Daño. */
export const VS_DAMAGE: CounterRecommendation[] = [
  // ── Ashe ──────────────────────────────────────────────────────────
  rec("ashe", "tank", "dva", "strong", "high",
    "Le saltas encima, la Matriz come su dinamita y su rifle pierde valor contra tu presión constante.",
    [
      "Los propulsores cierran la distancia que Ashe necesita para ser efectiva.",
      "La Matriz defensiva absorbe la dinamita, su principal fuente de daño en área.",
    ],
    [
      "Salta sobre su posición cada vez que tus propulsores estén disponibles.",
      "Reserva un instante de Matriz para la dinamita cuando la lance a tu equipo.",
      "No te quedes a rematarla dentro de su equipo: presiónala y sal.",
    ],
    ["La escopeta de retroceso te aparta en el momento clave; anticipa ese empujón antes de comprometerte."],
    [
      alt("winston", "strong", "El salto y la burbuja cortan sus líneas de tiro constantemente."),
      alt("wrecking-ball", "situational", "Tus entradas la desplazan y desordenan su posición de tiro."),
    ]),
  rec("ashe", "damage", "tracer", "strong", "medium",
    "Tu velocidad anula su puntería a media distancia y su escopeta es su única respuesta en corto.",
    [
      "Los parpadeos hacen casi imposible que su rifle con mira te siga en corto.",
      "Obligarla a pelear contigo la saca de su rol: dejar de disparar a tu equipo ya es una victoria.",
    ],
    [
      "Flanquea y entra cuando haya gastado la escopeta de retroceso o esté recargando.",
      "Baila alrededor de ella con parpadeos cortos e impredecibles.",
      "Regresa con la regresión temporal si la dinamita te prende fuego.",
    ],
    ["Una Ashe que guarda la escopeta y juega junto a su equipo puede castigarte al entrar; confirma que está aislada."],
    [
      alt("genji", "situational", "El deflect devuelve dinamita y disparos en tu entrada."),
      alt("sombra", "situational", "Apareces a su lado sin que pueda usar su rango."),
    ]),
  rec("ashe", "support", "kiriko", "safe", "medium",
    "El Suzu limpia el incendio de la dinamita y el teletransporte te saca de sus líneas de tiro.",
    [
      "La quemadura de la dinamita es gran parte de su presión sobre tu equipo; el Suzu la elimina de golpe.",
      "El teletransporte te reposiciona detrás de cobertura cuando te tenga en la mira.",
    ],
    [
      "Juega detrás de cobertura y asoma solo para curar y lanzar kunais.",
      "Guarda el Suzu para limpiar la dinamita sobre tu equipo agrupado.",
      "Marca su posición para tus flanqueadores.",
    ],
    ["Ningún apoyo countera de verdad a una buena Ashe: tu trabajo es mitigarla mientras tu equipo la presiona."],
    [
      alt("lucio", "safe", "La velocidad acorta el tiempo de tu equipo en sus líneas de tiro."),
      alt("moira", "safe", "El desvanecimiento te hace difícil de fijar como objetivo."),
    ]),

  // ── Bastion ───────────────────────────────────────────────────────
  rec("bastion", "tank", "sigma", "strong", "high",
    "El Agarre cinético absorbe su forma de asalto completa y tus esferas lo castigan a distancia.",
    [
      "El agarre come varios segundos de su daño de asalto y te da escudos a cambio.",
      "Tu barrera experimental corta su línea de tiro mientras tu equipo reposiciona.",
    ],
    [
      "Guarda el agarre para el momento exacto en que active la forma de asalto.",
      "Coloca la barrera para negar su ángulo y castígalo con esferas cuando salga de la transformación.",
      "Lanza la roca cuando esté anclado disparando.",
    ],
    ["Si gastas el agarre antes de su transformación, su asalto derrite tu barrera y a tu equipo detrás."],
    [
      alt("ramattra", "situational", "El bloqueo Némesis reduce su ráfaga y el vórtice lo castiga."),
      alt("zarya", "situational", "Burbujas para el aliado enfocado y energía a cambio de su daño."),
    ]),
  rec("bastion", "damage", "widowmaker", "strong", "medium",
    "Lo eliminas desde fuera del alcance efectivo de su forma de asalto.",
    [
      "Bastion es un blanco estático o lento; un tiro cargado a la cabeza lo obliga a retirarse o morir.",
      "Tu alcance infinito supera la dispersión de su ametralladora a larga distancia.",
    ],
    [
      "Busca líneas de tiro largas hacia las posiciones donde se ancla.",
      "Dispara justo cuando se transforme: es predecible y estático al iniciar el asalto.",
      "Reposiciónate con el gancho tras cada tiro para que no te fije.",
    ],
    ["En mapas cerrados sin líneas largas, tu ventaja desaparece y su granada te alcanza."],
    [
      alt("sombra", "situational", "El hackeo lo saca de la forma de asalto y anula su ventana de daño."),
      alt("hanzo", "situational", "Un tiro a la cabeza desde ángulos que su torreta no cubre."),
    ]),
  rec("bastion", "support", "baptiste", "situational", "medium",
    "El Campo de inmortalidad anula su ráfaga de asalto y tu equipo sobrevive su ventana de daño.",
    [
      "Su plan es borrar a alguien durante los segundos de asalto; la lámpara convierte esa ventana en nada.",
      "Tu rifle lo castiga a media distancia mientras cuidas la vida de tu equipo.",
    ],
    [
      "Guarda la lámpara para su transformación o su ultimate.",
      "Coloca a tu equipo con cobertura cercana antes de que empiece su ráfaga.",
      "Usa el campo regenerador después del asalto para recuperar al equipo.",
    ],
    ["Bastion puede disparar la lámpara y destruirla; colócala tarde y protegida, no anticipada."],
    [
      alt("zenyatta", "situational", "La discordia acelera su eliminación en cuanto se transforma."),
      alt("lifeweaver", "situational", "El agarre saca al aliado enfocado de su ráfaga."),
    ]),

  // ── Cassidy ───────────────────────────────────────────────────────
  rec("cassidy", "tank", "sigma", "safe", "medium",
    "Tu agarre y tu barrera anulan sus picos de daño y lo superas en el intercambio a media distancia.",
    [
      "El agarre absorbe su ráfaga de abanico y su granada magnética.",
      "Tu barrera móvil niega sus líneas de tiro sin comprometer tu posición.",
    ],
    [
      "Corta sus ángulos con la barrera y castígalo con esferas.",
      "Guarda el agarre para su ventana de daño cuando ruede hacia ti.",
      "Lanza la roca cuando quede expuesto tras rodar.",
    ],
    ["Cassidy rara vez pierde contra un tanque directamente: tu objetivo es negarle valor, no eliminarlo."],
    [
      alt("orisa", "safe", "Fortificar aguanta su abanico y la jabalina lo castiga en corto."),
      alt("dva", "situational", "Presión constante, aunque su granada castiga tus propulsores."),
    ]),
  rec("cassidy", "damage", "widowmaker", "strong", "medium",
    "Su revólver pierde daño con la distancia; tu rifle no: ganas el duelo antes de que pueda acercarse.",
    [
      "El daño de Cassidy cae en picado más allá de los 25 metros; el tuyo es letal a cualquier distancia.",
      "Su granada magnética y su rodada no le sirven de nada contra alguien que nunca está cerca.",
    ],
    [
      "Mantén líneas de tiro largas y cambia de ángulo tras cada disparo.",
      "Usa el gancho para reposicionarte en cuanto intente cerrar la distancia.",
      "Marca su posición: si desaparece de tu vista, asume que viene a por ti.",
    ],
    ["Si te alcanza en media distancia, pierdes el duelo: la disciplina de posición es tu counter, no tu puntería."],
    [
      alt("pharah", "situational", "Castigas desde el aire fuera de su alcance efectivo, atenta a su buena puntería antiaérea."),
      alt("echo", "situational", "Movilidad aérea y burst para no darle duelos limpios."),
    ]),
  rec("cassidy", "support", "kiriko", "safe", "medium",
    "El teletransporte te saca de su granada magnética y el Suzu limpia la ralentización sobre tu equipo.",
    [
      "La granada magnética con impedimenta es su herramienta contra apoyos; el Suzu elimina su efecto.",
      "El teletransporte a un aliado rompe el duelo que él quiere forzar contigo.",
    ],
    [
      "Nunca pelees el duelo que Cassidy te proponga: teletranspórtate con tu equipo.",
      "Guarda el Suzu para el aliado ralentizado que él intente rematar.",
      "Lanza kunais desde ángulos laterales solo cuando esté distraído.",
    ],
    ["Ningún apoyo gana un duelo limpio contra Cassidy: tu counter es negarle esos duelos."],
    [
      alt("moira", "safe", "El desvanecimiento te saca de su abanico y su granada."),
      alt("lucio", "safe", "Velocidad y muros te hacen un blanco frustrante para su revólver."),
    ]),

  // ── Echo ──────────────────────────────────────────────────────────
  rec("echo", "tank", "dva", "strong", "high",
    "La igualas en el aire: la Matriz come sus bombas adhesivas y tus propulsores la persiguen en vuelo.",
    [
      "La Matriz defensiva absorbe sus bombas adhesivas y sus proyectiles, sus dos fuentes principales de burst.",
      "Eres el único tanque que puede seguirla al aire y castigarla allí.",
    ],
    [
      "Reserva la Matriz para su combo de bombas más disparos.",
      "Persíguela con propulsores cuando use el vuelo para entrar sobre tu equipo.",
      "Si te copia con su ultimate, recuerda que la copia genera su propio meca: enfoca a la Echo real.",
    ],
    ["Su rayo concentrador atraviesa la Matriz: si estás bajo de vida, no le des la ventana del rayo."],
    [
      alt("winston", "situational", "El salto la alcanza en vuelos bajos y tu burbuja protege del burst."),
      alt("zarya", "situational", "Burbuja al aliado marcado por bombas y castigo con el rayo si vuela cerca."),
    ]),
  rec("echo", "damage", "soldier-76", "strong", "medium",
    "Tu hitscan sostenido la castiga en el aire, donde ella cree estar segura.",
    [
      "Su vuelo es lento y predecible para un rifle de pulsos con buen tracking.",
      "Tu autocuración te permite ganar el intercambio si te lanza el combo de bombas.",
    ],
    [
      "Castígala en cuanto se eleve: en el aire no tiene cobertura.",
      "Guarda el sprint para romper la distancia cuando el rayo concentrador te busque bajo de vida.",
      "Coloca el campo biótico antes del duelo, no después de recibir el combo.",
    ],
    ["En manos precisas, su combo de bombas más disparos te borra antes de que tu DPS sostenido cuente: no le des duelos con vida baja."],
    [
      alt("ashe", "situational", "Burst preciso a media distancia contra su vuelo."),
      alt("cassidy", "situational", "Daño hitscan sólido, aunque su vuelo te supera en ángulos abiertos."),
    ]),
  rec("echo", "support", "illari", "situational", "medium",
    "Tu disparo preciso de larga distancia la castiga en vuelo y el pilón sostiene a su objetivo.",
    [
      "Tu rayo solar cargado es de las pocas herramientas de apoyo que amenazan a un blanco aéreo.",
      "El pilón curativo mantiene con vida al aliado que ella marca con bombas mientras tú la presionas.",
    ],
    [
      "Coloca el pilón protegido de sus bombas y mantén tu disparo cargado cuando sobrevuele.",
      "Castígala en la trayectoria descendente de su vuelo, que es predecible.",
      "Usa tu impulso lateral para esquivar el combo si te selecciona.",
    ],
    ["Echo puede destruir tu pilón desde el aire con facilidad; escóndelo bien o pierdes tu sustentación."],
    [
      alt("baptiste", "situational", "Ráfagas hitscan y lámpara contra su ventana de burst."),
      alt("ana", "situational", "Tu rifle la alcanza en vuelo y el dardo castiga su descenso."),
    ]),

  // ── Freja ─────────────────────────────────────────────────────────
  rec("freja", "tank", "dva", "strong", "low",
    "La Matriz absorbe sus virotes explosivos y tu movilidad la alcanza tras cada impulso.",
    [
      "Su daño es de proyectiles en ráfaga: la Matriz defensiva lo borra en la ventana clave.",
      "Tus propulsores acortan la distancia que su movilidad intenta mantener.",
    ],
    [
      "Presiónala en cuanto gaste su impulso de retirada.",
      "Reserva la Matriz para su virote explosivo cargado.",
      "Interponte entre ella y tus apoyos durante sus ráfagas.",
    ],
    ["Recomendación editorial con datos limitados del parche actual; su movilidad frecuente puede agotar tus propulsores antes que sus escapes."],
    [
      alt("winston", "situational", "Presión de salto constante sobre una heroína dependiente de ritmo."),
      alt("sigma", "safe", "El agarre come sus ráfagas y no le regalas duelos de movilidad."),
    ]),
  rec("freja", "damage", "cassidy", "situational", "low",
    "Tu hitscan castiga sus trayectorias aéreas y la granada magnética anula su ventaja de movilidad.",
    [
      "Sus impulsos siguen arcos legibles que un buen tracking hitscan castiga.",
      "La granada magnética con impedimenta la fija al suelo, donde pierde su ventaja.",
    ],
    [
      "Guarda la granada para cuando gaste el impulso y quede en trayectoria predecible.",
      "Pelea cerca de cobertura para partir sus ráfagas cargadas.",
      "Rueda para recargar y esquivar su virote explosivo.",
    ],
    ["Recomendación editorial con datos limitados del parche actual; a larga distancia su ráfaga cargada te supera."],
    [
      alt("soldier-76", "situational", "DPS sostenido contra sus trayectorias aéreas."),
      alt("sombra", "situational", "La emboscas en los flancos desde los que ella trabaja."),
    ]),
  rec("freja", "support", "kiriko", "safe", "low",
    "El Suzu limpia el burst de sus ráfagas explosivas y el teletransporte niega el pick que busca.",
    [
      "Su plan es acumular daño explosivo rápido sobre un objetivo; el Suzu corta esa acumulación.",
      "El teletransporte te reposiciona cuando te seleccione desde un ángulo.",
    ],
    [
      "Juega con cobertura cercana y asoma en ventanas cortas.",
      "Guarda el Suzu para el aliado que reciba su ráfaga cargada.",
      "Acompaña los flancos de tu equipo con teletransporte cuando la presionen.",
    ],
    ["Recomendación editorial con datos limitados del parche actual."],
    [
      alt("ana", "situational", "El dardo castiga sus trayectorias si tu puntería es fiable."),
      alt("lucio", "safe", "Velocidad para que tu equipo no ofrezca blancos estáticos."),
    ]),

  // ── Genji ─────────────────────────────────────────────────────────
  rec("genji", "tank", "winston", "strong", "high",
    "El cañón Tesla no se puede deflectar: tu daño automático ignora su mejor herramienta.",
    [
      "El deflect no funciona contra tu rayo eléctrico: Genji pierde su defensa principal contra ti.",
      "Tu salto y tu burbuja te colocan junto a tus apoyos cuando él intente entrar.",
    ],
    [
      "Peela a tus apoyos saltando sobre el punto donde Genji entre.",
      "Mantén el rayo sobre él aunque active el deflect.",
      "Guarda la burbuja para cortar el daño de su equipo mientras lo persigues.",
    ],
    ["Durante la Espada de dragón, no puedes matarlo tú solo a tiempo: burbujea a tus aliados y gana tiempo."],
    [
      alt("zarya", "strong", "Tu rayo tampoco se deflecta y la burbuja salva a su objetivo."),
      alt("dva", "situational", "La Matriz niega sus shuriken y tu movilidad lo persigue."),
    ]),
  rec("genji", "damage", "mei", "strong", "high",
    "Tu rociada de escarcha no se puede deflectar y la ralentización apaga su movilidad.",
    [
      "El aliento gélido ignora el deflect y su ralentización anula el juego de dash y doble salto.",
      "El bloque de hielo te hace inmune a la Espada de dragón mientras tu equipo responde.",
    ],
    [
      "Recíbelo con la rociada en cuanto entre en tu rango: su velocidad cae y tu equipo lo remata.",
      "Guarda el muro para aislarlo de su equipo cuando entre con recursos gastados.",
      "Usa el bloque de hielo contra la Espada de dragón o su foco.",
    ],
    ["A media distancia sus shuriken te ganan el poke: tu counter existe solo en corto alcance."],
    [
      alt("symmetra", "situational", "El rayo no se deflecta y castiga sus entradas."),
      alt("sombra", "situational", "El hackeo le quita dash y deflect en plena entrada."),
    ]),
  rec("genji", "support", "brigitte", "strong", "high",
    "Tus golpes de mangual no se pueden deflectar y tu paquete de armadura degrada sus shuriken.",
    [
      "El mangual y el golpe de látigo ignoran el deflect: puedes pelearlo de frente.",
      "La armadura de tus paquetes reduce el daño por impacto de los shuriken.",
    ],
    [
      "Recíbelo con golpe de látigo cuando entre a por ti o tu otro apoyo.",
      "Mantén Inspiración activa golpeándolo mientras tu equipo lo enfoca.",
      "Durante su Espada de dragón, empújalo lejos del aliado con menos vida.",
    ],
    ["Si Genji te ignora y entra por el otro lado, tu valor depende de reposicionarte rápido junto al objetivo real."],
    [
      alt("moira", "situational", "Tu rociada de lock-on no se deflecta y el desvanecimiento escapa de su burst."),
      alt("lucio", "safe", "El empujón corta su dash y la velocidad ayuda a tu equipo a dispersarse en su ultimate."),
    ]),

  // ── Hanzo ─────────────────────────────────────────────────────────
  rec("hanzo", "tank", "dva", "strong", "medium",
    "La Matriz come sus flechas y tus propulsores lo castigan antes de que su arco te apunte en corto.",
    [
      "Las flechas son proyectiles lentos: la Matriz defensiva las borra en tu entrada.",
      "En corto alcance su arco pierde fiabilidad y tus cañones más misiles lo funden.",
    ],
    [
      "Entra con Matriz activa para negar la flecha que te espera.",
      "Castígalo tras su flecha sónica: acaba de revelar su posición.",
      "Sal con propulsores antes de que su equipo colapse sobre ti.",
    ],
    ["Una flecha de dispersión a quemarropa castiga tu meca si entras sin Matriz disponible."],
    [
      alt("winston", "strong", "El salto lo presiona sin darle blancos lentos para sus flechas."),
      alt("wrecking-ball", "situational", "Tus entradas lo desordenan y su arco odia los blancos rápidos."),
    ]),
  rec("hanzo", "damage", "tracer", "strong", "medium",
    "Eres el blanco más difícil del juego para un arco de proyectiles: los parpadeos rompen su predicción.",
    [
      "Sus flechas exigen predecir el movimiento; tus parpadeos hacen esa predicción casi imposible.",
      "Su golpe de salto es su único escape: sin él, tu ráfaga lo remata en corto.",
    ],
    [
      "Flanquea y entra en corto, donde su arco es más lento que tus pistolas.",
      "Parpadea lateralmente de forma irregular: nunca en línea recta hacia él.",
      "Retírate con regresión si conecta una flecha: no le regales el remate.",
    ],
    ["Una flecha afortunada te elimina de un golpe: el riesgo nunca es cero contra Hanzo."],
    [
      alt("sombra", "situational", "Apareces en su flanco sin darle tiempo de apuntar."),
      alt("widowmaker", "situational", "Lo superas a máxima distancia, donde sus flechas caen."),
    ]),
  rec("hanzo", "support", "lucio", "safe", "medium",
    "El wallride y la velocidad te hacen casi imposible de fijar para sus flechas.",
    [
      "Tu movimiento errático por paredes rompe la predicción que su arco necesita.",
      "La velocidad reduce el tiempo que tu equipo pasa expuesto a sus líneas de tiro.",
    ],
    [
      "Mantente en movimiento constante por paredes y ángulos laterales.",
      "Acelera los cruces de tu equipo por zonas abiertas.",
      "Usa la barrera de sonido si su equipo sigue a una Flecha de dragón.",
    ],
    ["Ningún apoyo elimina a Hanzo: tu counter es sobrevivirlo y reducir sus blancos fáciles."],
    [
      alt("moira", "safe", "El desvanecimiento anula la flecha que te espera en cada esquina."),
      alt("kiriko", "safe", "Teletransporte para no cruzar sus líneas de tiro a pie."),
    ]),

  // ── Junkrat ───────────────────────────────────────────────────────
  rec("junkrat", "tank", "sigma", "strong", "medium",
    "El Agarre cinético devora sus granadas y tu poke lo castiga desde fuera de su alcance efectivo.",
    [
      "Sus granadas rebotan lento y en arco: el agarre y tu barrera las anulan con facilidad.",
      "Su daño cae a cero a media-larga distancia, donde tus esferas trabajan cómodas.",
    ],
    [
      "Mantén la pelea a distancia y niega los pasillos con tu barrera.",
      "Guarda el agarre para sus ráfagas de spam en espacios cerrados.",
      "Castiga su Neumático RIP con tu roca o disparándolo antes de que llegue.",
    ],
    ["En pasillos estrechos su spam encuentra a tu equipo aunque tú lo mitigues: pide a tu equipo evitar esos espacios."],
    [
      alt("dva", "situational", "La Matriz borra sus granadas y el neumático si reaccionas a tiempo."),
      alt("orisa", "situational", "Fortificar aguanta su spam y la jabalina lo castiga."),
    ]),
  rec("junkrat", "damage", "pharah", "strong", "high",
    "Sus granadas en arco no pueden alcanzarte en el aire: lo castigas sin exponerte a su spam.",
    [
      "Todo su daño es de arco corto y rebote: contra un blanco aéreo simplemente no llega.",
      "Desde el aire ves y castigas la trampa y la mina que definen su zona de control.",
    ],
    [
      "Mantén altura constante sobre las zonas que él intenta controlar.",
      "Destruye su trampa de acero a distancia para abrir el paso a tu equipo.",
      "Dispara al Neumático RIP en cuanto suene: desde el aire tienes el mejor ángulo.",
    ],
    ["Su mina de conmoción puede alcanzarte en vuelos bajos: mantén altura real, no un salto flotado."],
    [
      alt("echo", "strong", "Misma inmunidad al arco de sus granadas con burst directo."),
      alt("widowmaker", "situational", "Lo eliminas desde fuera del alcance de todo su kit."),
    ]),
  rec("junkrat", "support", "kiriko", "situational", "medium",
    "El Suzu responde al Neumático RIP y a las ráfagas de spam que definen su presión.",
    [
      "El Suzu con invulnerabilidad breve puede anular la explosión del neumático sobre tu equipo.",
      "El teletransporte te saca de las zonas de spam donde su daño se acumula.",
    ],
    [
      "Mantén el Suzu disponible cuando su ultimate esté cargada.",
      "Evita pasillos y esquinas donde rebota su spam; pide a tu equipo espacios abiertos.",
      "Cura desde ángulos laterales, no detrás del tanque donde caen sus granadas.",
    ],
    ["El tiempo del Suzu contra el neumático es exigente: si fallas la ventana, la explosión borra igual a tu equipo."],
    [
      alt("baptiste", "situational", "La lámpara es una segunda respuesta al neumático y su regeneración aguanta el spam."),
      alt("lucio", "safe", "La barrera de sonido anula su ultimate y la velocidad esquiva su zona."),
    ]),

  // ── Mei ───────────────────────────────────────────────────────────
  rec("mei", "tank", "roadhog", "situational", "medium",
    "Tu gancho la saca de su juego de muros y tu respiro sostiene su daño de congelación.",
    [
      "El gancho la castiga antes de que levante el bloque de hielo, su único escape.",
      "Tomar un respiro te sostiene a través de su ralentización mientras tu escopeta la funde en corto.",
    ],
    [
      "Engánchala cuando gaste el bloque de hielo o lo tenga en cooldown.",
      "No pelees dentro de sus muros: retrocede y fuerza que venga a ti.",
      "Guarda el respiro para después de su ralentización, no antes.",
    ],
    ["Un muro bien puesto puede separarte de tus apoyos y su equipo te enfocará: cuida tu posición respecto al muro."],
    [
      alt("winston", "situational", "El salto ignora sus muros, aunque su spray te castiga en el duelo largo."),
      alt("sigma", "safe", "La castigas a distancia donde su rociada no llega."),
    ]),
  rec("mei", "damage", "pharah", "strong", "medium",
    "Su rociada alcanza 10 metros y tú vives en el aire: Mei no tiene plan contra ti.",
    [
      "Su herramienta principal exige corto alcance a nivel de suelo; desde el aire es inofensiva.",
      "Sus muros no bloquean a un héroe que vuela por encima de ellos.",
    ],
    [
      "Castígala desde ángulos elevados mientras intenta acercarse a tu equipo.",
      "Vuela por encima de sus muros para mantener la presión cuando corte la pelea.",
      "Cuidado con sus carámbanos: su clic derecho sí te alcanza, mantén movimiento.",
    ],
    ["Una Mei con buena puntería de carámbano sigue siendo amenaza aérea: no flotes estática frente a ella."],
    [
      alt("widowmaker", "situational", "La eliminas desde fuera del alcance de todo su kit."),
      alt("echo", "situational", "Misma ventaja aérea con mejor burst para su bloque de hielo."),
    ]),
  rec("mei", "support", "lucio", "safe", "medium",
    "Tu velocidad compensa su ralentización y el wallride te mantiene fuera de su alcance.",
    [
      "El aura de velocidad ayuda a tu equipo a salir de su rociada y de sus muros divisorios.",
      "El wallride te hace un blanco difícil para sus carámbanos.",
    ],
    [
      "Cambia a velocidad cuando Mei inicie el brawl para que tu equipo reposicione.",
      "Empújala lejos del aliado que esté ralentizando.",
      "Guarda la barrera de sonido para su Ventisca combinada con el brawl enemigo.",
    ],
    ["Si su muro te aísla del equipo, tu aura no salva a nadie: juega siempre del lado de tus aliados."],
    [
      alt("zenyatta", "situational", "La discordia castiga su bloque de hielo al terminar."),
      alt("moira", "safe", "El desvanecimiento escapa de la ralentización y su rociada."),
    ]),

  // ── Pharah ────────────────────────────────────────────────────────
  rec("pharah", "tank", "dva", "strong", "high",
    "Subes a su altura, la Matriz come sus cohetes y tus cañones la castigan donde nadie más llega.",
    [
      "Eres el único tanque con vuelo real: puedes disputarle el aire directamente.",
      "La Matriz defensiva absorbe sus cohetes, incluida gran parte de su Descarga de cohetes.",
    ],
    [
      "Persíguela con propulsores en cuanto se eleve y oblígala a aterrizar.",
      "Reserva la Matriz para su ráfaga o su ultimate.",
      "Coordina con tu hitscan: tú la presionas, ellos la rematan.",
    ],
    ["Perseguir a Pharah puede alejarte de tu equipo: hazlo en ráfagas cortas, no en cacerías largas."],
    [
      alt("sigma", "situational", "El agarre come sus cohetes y tus esferas la castigan en el aire."),
      alt("winston", "situational", "El salto la alcanza en vuelos bajos sobre tu equipo."),
    ]),
  rec("pharah", "damage", "soldier-76", "strong", "high",
    "Tu rifle de pulsos la castiga en el aire de forma sostenida: es el counter hitscan clásico.",
    [
      "Su vuelo es visible y relativamente lento: un tracking constante la obliga a esconderse o morir.",
      "Tu autocuración te permite mantener la presión antiaérea sin depender de tus apoyos.",
    ],
    [
      "Mantén un ángulo con cielo abierto y castígala en cuanto asome.",
      "Dispara en ráfagas controladas para mantener la precisión a distancia.",
      "Usa el sprint para reposicionarte si sus cohetes te enfocan.",
    ],
    ["Si su equipo te presiona mientras miras al cielo, mueres a nivel de suelo: alterna objetivos con criterio."],
    [
      alt("cassidy", "strong", "Burst hitscan que la borra en dos aciertos."),
      alt("ashe", "strong", "Rifle preciso de media-larga distancia contra su vuelo."),
    ]),
  rec("pharah", "support", "illari", "situational", "medium",
    "Tu rayo solar de carga es una de las pocas armas de apoyo que la amenaza de verdad en el aire.",
    [
      "Tu disparo cargado hace daño pleno a cualquier distancia: castigas su vuelo sin depender del equipo.",
      "El pilón sostiene al aliado que ella intente enfocar con cohetes.",
    ],
    [
      "Mantén el disparo cargado cuando sepas que va a asomar.",
      "Coloca el pilón bajo techo, protegido de sus cohetes en área.",
      "Comunica su posición a tus hitscan cuando cambie de ángulo.",
    ],
    ["Su Descarga de cohetes puede borrarte al instante si te encuentra sin cobertura: nunca pelees en campo abierto contra su ultimate."],
    [
      alt("baptiste", "situational", "Ráfagas hitscan al aire y lámpara contra su ultimate."),
      alt("ana", "situational", "Tu rifle la alcanza y tu granada sostiene al equipo bajo sus cohetes."),
    ]),

  // ── Reaper ────────────────────────────────────────────────────────
  rec("reaper", "tank", "orisa", "situational", "medium",
    "La jabalina lo aparta de tu cuerpo y Fortificar reduce sus escopetas en el rango donde vive.",
    [
      "Reaper necesita pegarse a los tanques para robar vida; la jabalina y el retroceso del giro se lo niegan.",
      "Fortificar reduce su daño justo en la ventana en que intenta fundirte.",
    ],
    [
      "Empújalo con la jabalina en cuanto entre en rango de escopetas.",
      "Activa Fortificar si te alcanza con Forma espectral gastada.",
      "Marca su flanqueo: suele llegar por teletransporte a tu espalda.",
    ],
    ["Si gastas la jabalina en poke, Reaper entra gratis y tu Fortificar solo retrasa lo inevitable."],
    [
      alt("sigma", "safe", "Peleas a la distancia donde sus escopetas no existen."),
      alt("ramattra", "situational", "El vórtice lo frena y tu bloqueo aguanta su ráfaga."),
    ]),
  rec("reaper", "damage", "pharah", "strong", "high",
    "Reaper no tiene absolutamente ninguna herramienta para tocarte en el aire.",
    [
      "Sus escopetas alcanzan 20 metros con daño real solo en la mitad de esa distancia: el aire es tu santuario.",
      "Su teletransporte es ruidoso y visible: desde arriba ves cada flanqueo antes de que ocurra.",
    ],
    [
      "Mantén altura y castígalo cuando camine entre coberturas.",
      "Avisa a tu equipo de sus teletransportes: los ves mejor que nadie.",
      "Cuando use Flor de la muerte, castígala desde el aire fuera de su radio.",
    ],
    ["Contra el resto de su equipo tu ventaja depende de sus hitscans: countereas a Reaper, no a su composición."],
    [
      alt("echo", "strong", "Misma inmunidad aérea con burst superior."),
      alt("ashe", "situational", "Lo quemas a media distancia antes de que llegue a ti."),
    ]),
  rec("reaper", "support", "ana", "strong", "medium",
    "La granada biótica corta el robo de vida que lo sostiene y el dardo cancela su Flor de la muerte.",
    [
      "Reaper vive del robo de vida de sus escopetas; con anticuración encima, cada intercambio lo desgasta.",
      "El dardo somnífero interrumpe la Flor de la muerte al instante.",
    ],
    [
      "Lanza la granada sobre él cuando esté pegado a tu tanque.",
      "Guarda el dardo para su ultimate o para cuando salte sobre ti.",
      "Mantén distancia: su plan contra ti es aparecer por la espalda.",
    ],
    ["La Forma espectral le permite escapar de tu anticuración y volver curado: castiga su regreso, no su huida."],
    [
      alt("brigitte", "situational", "El empujón lo saca del rango de escopetas y tu armadura reduce sus perdigones."),
      alt("lucio", "safe", "El empujón lo aparta y tu velocidad reposiciona al equipo lejos de su ultimate."),
    ]),

  // ── Sojourn ───────────────────────────────────────────────────────
  rec("sojourn", "tank", "dva", "situational", "medium",
    "Tu presión constante con propulsores le impide cargar el raíl cómodamente sobre tu equipo.",
    [
      "La Matriz absorbe sus proyectiles primarios, la fuente con la que carga su raíl.",
      "Tus propulsores castigan su posición cada vez que su deslizamiento esté en cooldown.",
    ],
    [
      "Salta sobre ella cuando gaste el deslizamiento de potencia.",
      "Usa la Matriz sobre su ráfaga primaria para negarle carga de raíl.",
      "No absorbas su disparo de raíl con tu cuerpo a media vida: cede el ángulo y reengancha.",
    ],
    ["El disparo de raíl cargado atraviesa tu Matriz: tu counter es la presión, no el bloqueo."],
    [
      alt("winston", "situational", "Presión de salto constante, con cuidado de su raíl sobre tu vida de mono."),
      alt("wrecking-ball", "situational", "Tus entradas la desplazan y rompen su ritmo de carga."),
    ]),
  rec("sojourn", "damage", "sombra", "situational", "medium",
    "El hackeo le corta el deslizamiento y castigas su dependencia de posiciones angulares.",
    [
      "Sin deslizamiento de potencia, Sojourn es una hitscan lenta en una posición estática.",
      "Tu sigilo te coloca en los ángulos desde los que ella trabaja, donde no espera amenazas.",
    ],
    [
      "Hackéala al inicio del duelo para negarle el escape.",
      "Ataca justo después de que dispare el raíl: su ventana sin burst es tu ventana.",
      "Sal con el localizador antes de que su equipo responda.",
    ],
    ["Si entras con su raíl cargado, un disparo te elimina: aprende a leer su indicador de carga."],
    [
      alt("tracer", "situational", "Tu velocidad rompe su puntería en corto."),
      alt("widowmaker", "situational", "La superas a máxima distancia si tu precisión es mejor."),
    ]),
  rec("sojourn", "support", "kiriko", "safe", "medium",
    "El Suzu responde a su disparo de raíl sobre tu equipo y el teletransporte te saca de sus ángulos.",
    [
      "Su plan es borrar objetivos con el raíl cargado; el Suzu puede negar el remate posterior.",
      "El teletransporte rompe la línea de tiro cuando te marque como objetivo.",
    ],
    [
      "Identifica cuándo tiene el raíl cargado y juega tras cobertura en esas ventanas.",
      "Guarda el Suzu para el aliado que quede a poca vida tras su raíl.",
      "Reposiciónate con teletransporte en cuanto te enfoque.",
    ],
    ["Ningún apoyo la countera de verdad: reduces su valor mientras tu equipo la presiona."],
    [
      alt("moira", "safe", "El desvanecimiento esquiva el raíl que te espera."),
      alt("lucio", "safe", "Velocidad y wallride contra sus líneas de tiro."),
    ]),

  // ── Soldier: 76 ───────────────────────────────────────────────────
  rec("soldier-76", "tank", "winston", "strong", "medium",
    "Tu burbuja anula su rifle y tu salto lo alcanza en cualquier posición que tome.",
    [
      "La burbuja bloquea su hitscan y sus cohetes, obligándolo a reposicionarse constantemente.",
      "El salto propulsado convierte su sprint en un retraso, no en un escape.",
    ],
    [
      "Salta sobre su posición y suelta la burbuja para partir su línea de tiro.",
      "Persíguelo a través de su sprint: pocos rincones lo salvan de tu movilidad.",
      "Pisa su campo biótico durante el duelo para negarle la ventaja de sustentación.",
    ],
    ["Su Visor táctico te derrite si lo enfrentas sin burbuja disponible: cuenta sus recursos antes de saltar."],
    [
      alt("dva", "situational", "La Matriz come sus cohetes y tu movilidad iguala su sprint."),
      alt("wrecking-ball", "situational", "Tus entradas lo desplazan de sus posiciones cómodas."),
    ]),
  rec("soldier-76", "damage", "tracer", "situational", "medium",
    "En corto alcance tu velocidad rompe su tracking y su kit defensivo es mínimo.",
    [
      "Sus únicas defensas son correr y curarse en el suelo: ambas cosas las castigas pegada a él.",
      "Tu ráfaga en corto supera su DPS si los parpadeos rompen su puntería.",
    ],
    [
      "Entra por un flanco cuando esté enfocado en tu equipo.",
      "Parpadea en diagonal durante el duelo: su rifle castiga el movimiento predecible.",
      "Destruye su campo biótico o sepáralo de él antes de comprometer el duelo.",
    ],
    ["Un Soldier con buen tracking gana el duelo limpio: entra con ventaja de sorpresa, no de frente."],
    [
      alt("genji", "situational", "El deflect le devuelve rifle y cohetes en tu entrada."),
      alt("widowmaker", "situational", "Lo superas fuera del alcance efectivo de su rifle."),
    ]),
  rec("soldier-76", "support", "lucio", "safe", "medium",
    "Velocidad y wallride te hacen difícil de fijar y reducen el valor de su DPS sostenido.",
    [
      "Su daño depende de mantener el tracking: tu movimiento por paredes lo rompe.",
      "Tu velocidad reduce la exposición de tu equipo a sus líneas de tiro y su visor.",
    ],
    [
      "Mantén movimiento constante y cruza sus ángulos por rutas elevadas.",
      "Acelera a tu equipo fuera de las zonas donde ancla su campo biótico.",
      "Guarda la barrera de sonido para su Visor táctico.",
    ],
    ["Ningún apoyo lo elimina: tu counter es sobrevivir su presión y anular su ultimate con la tuya."],
    [
      alt("moira", "safe", "El desvanecimiento te saca de su visor y su ráfaga."),
      alt("kiriko", "safe", "Suzu contra el foco de su visor sobre tu equipo."),
    ]),

  // ── Sombra ────────────────────────────────────────────────────────
  rec("sombra", "tank", "zarya", "safe", "medium",
    "El hackeo apenas te afecta: tu rayo no depende de habilidades y tus burbujas protegen a sus víctimas.",
    [
      "Hackeada, sigues disparando tu rayo con normalidad: Sombra gana muy poco al invertir en ti.",
      "La burbuja proyectada salva al apoyo hackeado y te da energía del daño de Sombra.",
    ],
    [
      "Reserva la burbuja proyectada para el aliado que Sombra hackee.",
      "Permanece cerca de tu línea trasera cuando Sombra desaparezca del frente.",
      "Castígala con el rayo cuando aparezca: su vida no aguanta energía alta.",
    ],
    ["Sombra puede simplemente evitarte e igualmente presionar a tus apoyos: tu counter es de protección, no de eliminación."],
    [
      alt("reinhardt", "safe", "El hackeo apenas resta a tu plan de barrera y martillo."),
      alt("orisa", "safe", "Aunque te hackee, tu arma sigue disparando y tu cuerpo sigue tanqueando."),
    ]),
  rec("sombra", "damage", "cassidy", "situational", "medium",
    "Tu burst en corto la elimina en el segundo en que se revela para hackear.",
    [
      "Sombra debe acercarse y revelarse para obtener valor: tu abanico la borra en esa ventana.",
      "La granada magnética la castiga incluso mientras traslada con su localizador.",
    ],
    [
      "Juega cerca de los apoyos que ella quiere hackear.",
      "Reacciona a su sonido de aparición con el abanico completo.",
      "Lanza la granada cuando reaparezca en su localizador: la trayectoria es predecible.",
    ],
    ["Si Sombra te hackea primero desde el sigilo, pierdes la rodada y el duelo se iguala: mantén la espalda cubierta."],
    [
      alt("tracer", "situational", "La duelas con velocidad superior cuando se revele."),
      alt("torbjorn", "situational", "Tu torreta cubre a los apoyos y la castiga al aparecer."),
    ]),
  rec("sombra", "support", "brigitte", "strong", "medium",
    "Tu paquete de armadura y tu peel convierten sus emboscadas a los apoyos en malas inversiones.",
    [
      "Su ráfaga tarda demasiado en atravesar armadura e Inspiración: el asesinato rápido que busca no ocurre.",
      "El golpe de látigo la interrumpe y la aparta cuando aparezca sobre tu otro apoyo.",
    ],
    [
      "Permanece junto al apoyo que Sombra probablemente ataque.",
      "Golpéala en el instante en que se revele: tu mangual no necesita puntería fina.",
      "Lanza el paquete de armadura al aliado hackeado de inmediato.",
    ],
    ["El hackeo bloquea también tus habilidades: si te embosca a ti primero y aislada, puede ganarte el duelo."],
    [
      alt("baptiste", "situational", "Tu regeneración y ráfaga castigan su ráfaga lenta."),
      alt("moira", "situational", "Tu rociada la encuentra al revelarse, aunque el hackeo bloquea tu desvanecimiento."),
    ]),

  // ── Symmetra ──────────────────────────────────────────────────────
  rec("symmetra", "tank", "roadhog", "situational", "medium",
    "Tu gancho la saca de su rango de rayo y tu escopeta la elimina antes de que cargue el arma contigo.",
    [
      "Su rayo alcanza 12 metros; tu gancho la atrapa desde 20: la eliminas antes de que su arma escale.",
      "Tu respiro te sostiene mientras limpias sus torretas sin regalarle carga de rayo.",
    ],
    [
      "Engánchala en cuanto asome: no le des tiempo de cargar el rayo en tu cuerpo.",
      "Destruye las torretas a distancia con tu escopeta antes de avanzar.",
      "No pelees dentro de su nido de torretas: fuerza la pelea fuera.",
    ],
    ["Si dejas que su rayo alcance carga máxima sobre ti, pierde el duelo cualquier tanque: tu counter es la anticipación."],
    [
      alt("orisa", "situational", "La jabalina la mantiene fuera del rango del rayo."),
      alt("sigma", "safe", "Poke a distancia sin alimentar su rayo ni sus torretas."),
    ]),
  rec("symmetra", "damage", "pharah", "strong", "medium",
    "Su rayo y sus torretas viven a ras de suelo: desde el aire desmontas su zona sin tocarla.",
    [
      "Su rayo de 12 metros y sus torretas de corto alcance no tienen respuesta contra un blanco aéreo.",
      "Tus cohetes destruyen sus torretas y castigan su teletransportador desde ángulos seguros.",
    ],
    [
      "Limpia sus torretas a distancia antes de que tu equipo avance.",
      "Castígala en cuanto asome: sus orbes lentos son fáciles de esquivar en el aire.",
      "Vigila su teletransportador: anuncia el flanqueo enemigo antes de que ocurra.",
    ],
    ["Sus orbes cargados sí alcanzan el aire: esquiva con movimiento lateral constante."],
    [
      alt("widowmaker", "situational", "La eliminas desde fuera del alcance de todo su kit."),
      alt("junkrat", "situational", "Tu spam limpia nidos de torretas sin exponerte."),
    ]),
  rec("symmetra", "support", "zenyatta", "situational", "medium",
    "Tu discordia y tus orbes la castigan desde una distancia donde su kit no existe.",
    [
      "La discordia la funde antes de que su rayo se cargue en un objetivo.",
      "Tus orbes destruyen torretas y presionan su posición desde lejos.",
    ],
    [
      "Marca con discordia a Symmetra en cuanto asome del flanco.",
      "Destruye las torretas visibles antes de que tu equipo cruce.",
      "Mantén máxima distancia: si su rayo te alcanza, no tienes escape.",
    ],
    ["Su teletransportador puede plantar el nido a tu espalda: reposiciónate en cuanto lo escuches."],
    [
      alt("ana", "situational", "La castigas a distancia y tu granada niega su sustentación en el brawl."),
      alt("lucio", "safe", "La velocidad cruza a tu equipo a través de su zona de torretas."),
    ]),

  // ── Torbjörn ──────────────────────────────────────────────────────
  rec("torbjorn", "tank", "dva", "situational", "medium",
    "La Matriz absorbe los disparos de la torreta mientras la destruyes sin coste.",
    [
      "Los proyectiles de la torreta desaparecen en tu Matriz defensiva: puedes desmontarla gratis.",
      "Tus propulsores castigan a Torbjörn antes de que su Sobrecarga lo salve.",
    ],
    [
      "Destruye la torreta con Matriz activa al iniciar cada pelea.",
      "Salta sobre Torbjörn cuando su Sobrecarga esté en cooldown.",
      "Esquiva el Núcleo fundido con propulsores en vez de atravesarlo.",
    ],
    ["Su arma secundaria hace mucho daño en corto: no te quedes flotando frente a él con la Matriz vacía."],
    [
      alt("sigma", "safe", "El agarre come los disparos de torreta y tu poke la destruye a distancia."),
      alt("orisa", "safe", "Fortificar aguanta el foco de torreta mientras la eliminas."),
    ]),
  rec("torbjorn", "damage", "widowmaker", "strong", "medium",
    "Destruyes la torreta desde fuera de su alcance y a Torbjörn con ella.",
    [
      "La torreta tiene un alcance limitado: tu rifle la elimina desde una distancia donde no responde.",
      "Torbjörn es lento y de hitbox generosa: un blanco cómodo para tu carga completa.",
    ],
    [
      "Localiza la torreta y elimínala a distancia al inicio de cada avance.",
      "Castiga a Torbjörn cuando salga a reconstruirla: es su momento más predecible.",
      "Cambia de ángulo si activa Sobrecarga y busca dueles en corto.",
    ],
    ["En mapas cerrados la torreta puede cubrir ángulos sin línea larga: apóyate en tu equipo para abrirla."],
    [
      alt("junkrat", "situational", "Tu spam indirecto destruye la torreta sin exponerte."),
      alt("hanzo", "situational", "Flechas a distancia contra torreta y dueño."),
    ]),
  rec("torbjorn", "support", "baptiste", "safe", "medium",
    "Tu rifle destruye la torreta a media distancia y la lámpara anula el Núcleo fundido.",
    [
      "Tus ráfagas eliminan la torreta desde fuera de su alcance efectivo.",
      "El Campo de inmortalidad permite a tu equipo sobrevivir el área del Núcleo fundido.",
    ],
    [
      "Dispara a la torreta en los tiempos muertos entre curaciones.",
      "Guarda la lámpara para el Núcleo fundido o el foco de la torreta en el punto.",
      "Mantén el exoimpulso para escapar si Torbjörn te busca con Sobrecarga.",
    ],
    ["Ningún apoyo countera de verdad a Torbjörn: tu valor está en limpiar la torreta y anular su ultimate."],
    [
      alt("zenyatta", "situational", "Discordia y orbes destruyen la torreta a distancia."),
      alt("kiriko", "safe", "El Suzu limpia la quemadura del núcleo sobre tu equipo."),
    ]),

  // ── Tracer ────────────────────────────────────────────────────────
  rec("tracer", "tank", "winston", "situational", "medium",
    "Tu cañón Tesla no necesita puntería: es el arma perfecta contra el blanco más escurridizo del juego.",
    [
      "El rayo eléctrico golpea automáticamente en área: sus parpadeos no lo esquivan.",
      "Tu burbuja y tu salto protegen a los apoyos que ella acosa.",
    ],
    [
      "Salta hacia tu línea trasera cuando Tracer entre y actívale el rayo.",
      "Colócale la burbuja a tus apoyos para cortar sus líneas de tiro.",
      "No la persigas lejos: tu valor es expulsarla, no cazarla.",
    ],
    ["La bomba de pulsos adherida a tu enorme hitbox es su plan contra ti: sepárate de tu equipo si te la pega."],
    [
      alt("zarya", "situational", "Burbujas para sus víctimas y tu rayo la castiga si se acerca."),
      alt("dva", "situational", "La Matriz niega sus ráfagas y tu movilidad la persigue."),
    ]),
  rec("tracer", "damage", "cassidy", "strong", "high",
    "La granada magnética la busca sola y tu abanico la borra: es su counter clásico.",
    [
      "La granada magnética se adhiere e impide sus parpadeos: castiga exactamente su fortaleza.",
      "Tu daño de burst la elimina en una ventana que su regresión no siempre alcanza.",
    ],
    [
      "Guarda la granada para cuando gaste la regresión temporal o esté en rango seguro de adhesión.",
      "Juega cerca de tus apoyos: eres su seguro de vida contra ella.",
      "Usa el abanico solo a quemarropa; a media distancia, disparos primarios precisos.",
    ],
    ["Una Tracer paciente esperará tu granada antes de comprometerse: no la lances a ciegas."],
    [
      alt("sombra", "situational", "El hackeo le quita parpadeos y regresión en el momento clave."),
      alt("mei", "situational", "Tu rociada la ralentiza y anula su velocidad en corto."),
    ]),
  rec("tracer", "support", "brigitte", "strong", "high",
    "Armadura, inspiración y un mangual sin puntería fina: Tracer no encuentra víctimas donde tú estás.",
    [
      "Tu armadura reduce sus balas de bajo daño por impacto: su tiempo para matar contra ti se dispara.",
      "El mangual y el golpe de látigo la castigan sin exigir puntería contra sus parpadeos.",
    ],
    [
      "Permanece junto al aliado que Tracer quiera acosar.",
      "Golpéala en cuanto entre en rango del mangual: cada toque activa Inspiración.",
      "Lanza paquetes de armadura a sus víctimas para arruinar su ventana de eliminación.",
    ],
    ["Tracer puede simplemente jugar contra el resto de tu equipo: tu counter protege tu zona, no todo el mapa."],
    [
      alt("moira", "situational", "Tu rociada la sigue mejor que cualquier puntería y el desvanecimiento escapa su bomba."),
      alt("lucio", "safe", "Tu velocidad y empujón la frustran, aunque no la elimines."),
    ]),

  // ── Venture ───────────────────────────────────────────────────────
  rec("venture", "tank", "orisa", "situational", "medium",
    "Fortificar aguanta su combo de perforación y la jabalina lo castiga al emerger.",
    [
      "Su plan es el combo de excavación, emersión y ráfagas en corto; Fortificar reduce ese pico.",
      "La jabalina lo interrumpe justo cuando emerge, su momento más predecible.",
    ],
    [
      "Guarda la jabalina para el instante en que emerja del suelo.",
      "Activa Fortificar cuando inicie el combo sobre ti o un aliado cercano.",
      "Castígalo cuando sus impulsos estén en cooldown: sin ellos es lento.",
    ],
    ["Venture puede excavar para escapar de tu castigo: tu counter niega valor más que consigue eliminaciones."],
    [
      alt("zarya", "situational", "Burbuja al aliado combeado y energía de su daño de área."),
      alt("dva", "situational", "La Matriz no borra su excavación, pero tu movilidad lo persigue al emerger."),
    ]),
  rec("venture", "damage", "pharah", "strong", "medium",
    "Venture vive bajo tierra y tú en el aire: su kit completo no puede alcanzarte.",
    [
      "Sus ráfagas sísmicas y su perforación son herramientas de suelo con alcance corto.",
      "Desde el aire castigas su emersión, el momento más predecible de su patrón.",
    ],
    [
      "Mantén altura sobre las zonas donde excave.",
      "Dispara al punto de emersión: el temblor delata dónde saldrá.",
      "Protege a tus apoyos marcando desde arriba sus rutas subterráneas.",
    ],
    ["Sus ráfagas cargadas alcanzan cierta altura: no flotes bajo sobre su posición."],
    [
      alt("echo", "situational", "Misma ventaja aérea con burst para castigar su emersión."),
      alt("ashe", "situational", "Lo castigas a media distancia entre sus excavaciones."),
    ]),
  rec("venture", "support", "kiriko", "safe", "medium",
    "El Suzu limpia el burst de su combo y el teletransporte niega el pick que busca en tu línea trasera.",
    [
      "Su combo de emersión más ráfagas busca eliminar de golpe: el Suzu rompe esa acumulación.",
      "El teletransporte te saca de su alcance cuando emerja a tu lado.",
    ],
    [
      "Escucha el temblor de su excavación: anticipa dónde emergerá.",
      "Guarda el Suzu para el aliado que reciba el combo completo.",
      "Teletranspórtate con tu equipo en cuanto te seleccione como objetivo.",
    ],
    ["Si gastas el Suzu en daño ordinario, su siguiente combo borra a un apoyo sin respuesta."],
    [
      alt("brigitte", "situational", "El empujón lo aparta al emerger y tu armadura aguanta sus ráfagas."),
      alt("lifeweaver", "situational", "El agarre saca al aliado del combo en el último instante."),
    ]),

  // ── Widowmaker ────────────────────────────────────────────────────
  rec("widowmaker", "tank", "winston", "strong", "high",
    "Tu salto la alcanza en cualquier percha: es el counter de manual contra francotiradoras.",
    [
      "El salto propulsado cruza en un instante la distancia que la protege.",
      "Tu burbuja corta sus líneas de tiro y protege a tu equipo mientras cruza.",
    ],
    [
      "Salta directamente sobre ella al inicio de la pelea: su rifle en corto es débil.",
      "No la remates a toda costa: expulsarla de su percha ya gana la pelea de tu equipo.",
      "Usa la burbuja sobre su línea de tiro cuando tu salto esté en cooldown.",
    ],
    ["Su gancho la saca de tu primera presión: persigue con el segundo salto solo si el intercambio sigue siendo favorable."],
    [
      alt("dva", "strong", "Tu Matriz niega su tiro mientras vuelas hacia ella."),
      alt("wrecking-ball", "situational", "Tus entradas la desplazan de cada percha que ocupe."),
    ]),
  rec("widowmaker", "damage", "sombra", "strong", "medium",
    "Apareces a su lado sin cruzar su línea de tiro: la única aproximación que su rifle no castiga.",
    [
      "El sigilo anula la ventaja de rango que define a Widowmaker.",
      "El hackeo le corta el gancho, su única herramienta de escape.",
    ],
    [
      "Flanquea en sigilo hasta su percha y hackéala antes de disparar.",
      "Elimínala o fuérzala a reposicionarse: ambas cosas ganan espacio a tu equipo.",
      "Deja el localizador en una ruta segura antes de comprometerte.",
    ],
    ["Su cuerpo a cuerpo y su rifle en automático pueden ganarte si llegas con poca vida: entra al duelo con ventaja completa."],
    [
      alt("tracer", "situational", "Los parpadeos cruzan sus líneas de tiro y la duelas en corto."),
      alt("genji", "situational", "El deflect te cubre la aproximación y tu dash la remata."),
    ]),
  rec("widowmaker", "support", "lucio", "safe", "medium",
    "La velocidad reduce el tiempo de tu equipo en sus miras y el wallride te hace imposible de fijar.",
    [
      "Tu aura acorta los cruces por sus líneas de tiro, el momento donde Widowmaker gana las partidas.",
      "Tu movimiento por paredes es el blanco más difícil del juego para un rifle de precisión.",
    ],
    [
      "Acelera cada cruce de zona abierta de tu equipo.",
      "Muévete por paredes y ángulos laterales, nunca en línea recta hacia ella.",
      "Marca su posición y pide a tus flanqueadores que la presionen.",
    ],
    ["Ningún apoyo countera a una gran Widowmaker: tu counter reduce sus oportunidades mientras tu equipo la caza."],
    [
      alt("moira", "safe", "El desvanecimiento niega el tiro que te espera en cada esquina."),
      alt("kiriko", "safe", "Cruzas con teletransporte en lugar de atravesar sus miras."),
    ]),
];
