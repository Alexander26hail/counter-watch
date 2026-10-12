import type { CounterRecommendation } from "../types";
import { alt, rec } from "./util";

/** Recomendaciones contra héroes enemigos de rol Apoyo. */
export const VS_SUPPORTS: CounterRecommendation[] = [
  // ── Ana ───────────────────────────────────────────────────────────
  rec("ana", "tank", "dva", "strong", "high",
    "La Matriz defensiva absorbe su dardo somnífero y su granada biótica: la desarmas por completo.",
    [
      "Sus dos habilidades defensivas son proyectiles que tu Matriz borra en el aire.",
      "Sin dardo ni granada, Ana no tiene ninguna respuesta contra tu dive.",
    ],
    [
      "Entra con propulsores y activa la Matriz mirando hacia ella para comer el dardo.",
      "Mantén la Matriz hasta que gaste la granada o el dardo, luego castígala.",
      "Sal antes de que su equipo colapse: tu objetivo es forzar sus cooldowns o eliminarla.",
    ],
    ["Si entras con la Matriz ya gastada, un dardo bien puesto convierte tu dive en un regalo para el enemigo."],
    [
      alt("wrecking-ball", "situational", "Tu velocidad en bola hace casi imposible que acierte el dardo."),
      alt("winston", "situational", "Presión de salto constante, aunque comes su dardo si entras predecible."),
    ]),
  rec("ana", "damage", "tracer", "strong", "high",
    "Eres demasiado rápida para su dardo y su rifle: Ana es tu objetivo favorito en la línea trasera.",
    [
      "Su rifle exige aciertos directos y su dardo es lento: tus parpadeos rompen ambas cosas.",
      "Sin movilidad ninguna, Ana no puede escapar una vez que la encuentras.",
    ],
    [
      "Flanquea hasta su posición y ataca con parpadeos laterales constantes.",
      "Provoca el dardo con un parpadeo de entrada y castiga cuando lo falle.",
      "Usa la regresión si te alcanza la granada: la anticuración también te afecta a ti.",
    ],
    ["Una Ana con gran puntería puede dormirte a quemarropa: no ataques en línea recta ni desde ángulos repetidos."],
    [
      alt("sombra", "strong", "Apareces del sigilo detrás de ella y el hackeo bloquea sus cooldowns."),
      alt("genji", "situational", "El deflect le devuelve el dardo y la granada."),
    ]),
  rec("ana", "support", "kiriko", "strong", "high",
    "El Suzu de protección limpia la granada biótica: anulas la jugada que define a Ana.",
    [
      "La anticuración de Ana es su mayor aporte; el Suzu la elimina al instante de tus aliados.",
      "El Suzu también despierta a los aliados dormidos por su dardo.",
    ],
    [
      "Guarda el Suzu prioritariamente para la granada enemiga sobre tu tanque.",
      "Reacciona rápido: limpiar la anticuración en el primer segundo cambia la pelea.",
      "Usa el teletransporte para escapar si sus flanqueadores te presionan a ti.",
    ],
    ["Si Ana te fuerza el Suzu con una granada de presión, la siguiente granada real no tendrá respuesta: administra el cooldown."],
    [
      alt("lifeweaver", "situational", "El agarre saca al aliado dormido o marcado con anticuración del foco enemigo."),
      alt("moira", "situational", "El desvanecimiento esquiva dardo y granada, y tu presión de flanco la castiga."),
    ]),

  // ── Baptiste ──────────────────────────────────────────────────────
  rec("baptiste", "tank", "dva", "situational", "medium",
    "Tu Matriz absorbe la lámpara en el aire y tus propulsores lo castigan detrás de su equipo.",
    [
      "El Campo de inmortalidad es un proyectil lanzado: la Matriz puede borrarlo antes de que aterrice.",
      "Tu movilidad lo alcanza en las posiciones elevadas que su exoimpulso le da.",
    ],
    [
      "Salta sobre él cuando gaste el exoimpulso.",
      "Usa la Matriz mirando la lámpara cuando la lance en la pelea clave.",
      "Si la lámpara ya está en el suelo, destrúyela: tiene poca vida.",
    ],
    ["Su ráfaga y su bota inmortal lo hacen sorprendentemente duro en el duelo directo: entra con recursos completos."],
    [
      alt("winston", "situational", "El salto lo presiona y tu Tesla destruye la lámpara automáticamente en área."),
      alt("doomfist", "situational", "Tu combo lo castiga en el aire de su exoimpulso."),
    ]),
  rec("baptiste", "damage", "tracer", "strong", "medium",
    "Lo presionas en corto, donde su rifle de ráfagas pierde contra tu velocidad.",
    [
      "Su rifle exige ráfagas precisas a media distancia: tus parpadeos en corto las rompen.",
      "Forzar su lámpara o su salto sin pelea de equipo es ya una victoria para los tuyos.",
    ],
    [
      "Entra cuando haya gastado el exoimpulso: sin él es un blanco lento.",
      "Destruye la lámpara al instante si la lanza para salvarse.",
      "Sal con regresión cuando su equipo se gire: tu presión ya hizo su trabajo.",
    ],
    ["Baptiste gana duelos limpios contra flanqueadores descuidados: su ráfaga te borra si le das un blanco predecible."],
    [
      alt("sombra", "situational", "El hackeo le quita exoimpulso y lámpara antes del foco de tu equipo."),
      alt("genji", "situational", "El deflect le devuelve la ráfaga y tu dash lo remata sin lámpara."),
    ]),
  rec("baptiste", "support", "zenyatta", "situational", "medium",
    "Ganas el intercambio de poke a distancia y la discordia castiga su posición estática.",
    [
      "Tus orbes superan a su rifle en el poke largo y la discordia acelera cada foco.",
      "La discordia sobre su tanque fuerza sus cooldowns defensivos antes de la pelea real.",
    ],
    [
      "Pelea el intercambio de poke desde máxima distancia con discordia activa.",
      "Marca la lámpara para tu equipo en cuanto la lance: destruirla gana la pelea.",
      "Guarda la Trascendencia para el foco que sigue a su Matriz amplificadora.",
    ],
    ["Su exoimpulso y su ráfaga lo hacen mejor duelista que tú: no conviertas el poke en un duelo cercano."],
    [
      alt("ana", "situational", "Tu granada anula su autocuración y castiga su sustain de equipo."),
      alt("kiriko", "safe", "Suzu y teletransporte responden a su presión sin regalarle duelos."),
    ]),

  // ── Brigitte ──────────────────────────────────────────────────────
  rec("brigitte", "tank", "reinhardt", "situational", "medium",
    "Tu martillo la aplasta a través de su pequeño escudo y tu alcance de brawl supera el suyo.",
    [
      "Su escudo tiene poca vida: dos martillazos lo rompen y el tercero la golpea a ella.",
      "Tu alcance de martillo supera el de su mangual: ganas el intercambio de brawl directo.",
    ],
    [
      "Golpéala directamente cuando levante el escudo: se rompe rápido.",
      "Castiga su golpe de látigo avanzando en lugar de retroceder.",
      "Usa la embestida de fuego para forzar su retroceso antes del brawl.",
    ],
    ["Brigitte no busca ganarte: busca retrasarte mientras su equipo dispara; no la persigas fuera de la pelea."],
    [
      alt("junker-queen", "situational", "Tu brawl y tus heridas superan su sustain de corto alcance."),
      alt("ramattra", "situational", "Tus puños Némesis atraviesan su escudo."),
    ]),
  rec("brigitte", "damage", "pharah", "strong", "medium",
    "Su mangual alcanza 6 metros y su látigo 20: desde el aire está completamente indefensa.",
    [
      "Todo su kit es de corto alcance y reactivo: contra un blanco aéreo no participa en la pelea.",
      "Tus cohetes castigan al equipo que ella intenta proteger con Inspiración.",
    ],
    [
      "Mantén el aire y presiona a los aliados que ella cubre.",
      "Castígala directamente cuando gaste el escudo: su vida sin él es modesta.",
      "Ignora su presencia en el peel: tu pelea está donde ella no llega.",
    ],
    ["Countereas su rol de peel, no a su equipo entero: los hitscans enemigos siguen siendo tu verdadero problema."],
    [
      alt("junkrat", "situational", "Tu spam supera el alcance de su kit y castiga su brawl agrupado."),
      alt("ashe", "situational", "La quemas a media distancia donde su látigo no llega."),
    ]),
  rec("brigitte", "support", "zenyatta", "situational", "medium",
    "La castigas desde una distancia que su kit jamás alcanza y la discordia anula su sustain.",
    [
      "Su presión termina a 20 metros; tus orbes y tu discordia trabajan mucho más lejos.",
      "La discordia sobre ella o su protegido supera la curación pasiva de Inspiración.",
    ],
    [
      "Mantén máxima distancia y castiga con orbes cargados a su equipo.",
      "Marca con discordia al aliado que ella intente proteger.",
      "Si se acerca con el escudo, retrocede con tu equipo: no le des el brawl que busca.",
    ],
    ["Si su equipo colapsa sobre ti, Brigitte te remata sin esfuerzo: tu counter vive de la distancia y muere sin ella."],
    [
      alt("ana", "situational", "Tu granada corta la curación de Inspiración en el brawl."),
      alt("baptiste", "safe", "Igualas el sustain de su equipo desde fuera de su alcance."),
    ]),

  // ── Illari ────────────────────────────────────────────────────────
  rec("illari", "tank", "winston", "strong", "medium",
    "Tu salto la presiona y tu Tesla destruye el pilón sin apuntar: desmontas su sustain completo.",
    [
      "El cañón Tesla golpea en área: elimina el Pilón curativo aunque esté escondido en ángulos altos.",
      "Tu presión de salto constante le impide cargar su rayo solar con comodidad.",
    ],
    [
      "Destruye el pilón con el Tesla en cada entrada: sin él, su curación se desploma.",
      "Salta sobre ella cuando su impulso lateral esté en cooldown.",
      "Usa la burbuja para bloquear su rayo mientras tu equipo entra.",
    ],
    ["Su disparo cargado castiga tu enorme cabeza: no le des líneas de tiro largas mientras esperas cooldowns."],
    [
      alt("dva", "situational", "Tu movilidad caza el pilón y tu presión la incomoda."),
      alt("doomfist", "situational", "Tu combo la castiga y tu bloqueo aguanta su rayo."),
    ]),
  rec("illari", "damage", "tracer", "strong", "medium",
    "Destruyes su pilón en segundos y tu velocidad rompe la puntería que su rayo exige.",
    [
      "El pilón tiene poca vida: tus pistolas lo eliminan en una pasada de flanco.",
      "Su rayo solar necesita aciertos sostenidos que tus parpadeos hacen imposibles.",
    ],
    [
      "Busca y destruye el pilón al inicio de cada pelea.",
      "Ataca a Illari después, cuando su sustain propio haya caído.",
      "Esquiva su empujón de impulso: te aparta en el momento del remate.",
    ],
    ["Su Sol radiante puede revertir una pelea que creías ganada: no ignores la carga de su ultimate."],
    [
      alt("sombra", "situational", "Eliminas el pilón desde sigilo y el hackeo la deja sin escape."),
      alt("genji", "situational", "El deflect devuelve su rayo y tu dash castiga su pilón."),
    ]),
  rec("illari", "support", "ana", "situational", "medium",
    "Tu granada anula la curación de su pilón y tu rifle la iguala en el poke de largo alcance.",
    [
      "La anticuración corta tanto su rayo curativo como el pilón sobre el objetivo marcado.",
      "Tu rifle te permite pelear el intercambio a la distancia donde ella quiere trabajar.",
    ],
    [
      "Lanza la granada sobre el aliado enemigo que dependa del pilón.",
      "Pide a tu equipo destruir el pilón: tu granada lo neutraliza, no lo elimina.",
      "Usa el dardo si te presiona con el impulso hacia tu posición.",
    ],
    ["En el duelo directo su rayo te gana: mantén la pelea en el intercambio largo, no en el duelo."],
    [
      alt("zenyatta", "situational", "Ganas el poke con discordia si te cubres de su rayo."),
      alt("kiriko", "safe", "Suzu y teletransporte niegan sus ventanas de presión."),
    ]),

  // ── Juno ──────────────────────────────────────────────────────────
  rec("juno", "tank", "dva", "situational", "medium",
    "Tu vuelo iguala su movilidad aérea: la presionas donde otros tanques no llegan.",
    [
      "Sus deslizamientos y su doble salto viven en el aire: tus propulsores la siguen ahí.",
      "La Matriz absorbe sus Torpedos pulsantes dirigidos a tu equipo.",
    ],
    [
      "Persíguela en sus trayectorias aéreas cuando gaste el deslizamiento.",
      "Reserva un instante de Matriz para sus torpedos en las peleas cerradas.",
      "Castiga su Anillo hipervelocidad ocupando la ruta que acelera a su equipo.",
    ],
    ["Su movilidad frecuente puede agotar tus propulsores: presiónala en ventanas, no en persecución continua."],
    [
      alt("winston", "situational", "El salto y el Tesla en área castigan su vuelo bajo."),
      alt("wrecking-ball", "situational", "Tu velocidad disputa el ritmo que ella imprime a su equipo."),
    ]),
  rec("juno", "damage", "tracer", "situational", "medium",
    "Tu presión constante en su línea trasera la obliga a volar para sobrevivir en lugar de curar.",
    [
      "Perseguirla fuerza sus deslizamientos defensivos: cada segundo que huye es curación que su equipo no recibe.",
      "Tus parpadeos igualan la agilidad que la protege de otros DPS.",
    ],
    [
      "Presiónala en cuanto gaste el deslizamiento: su trayectoria se vuelve legible.",
      "Alterna el foco entre ella y el otro apoyo para dividir su atención.",
      "Esquiva sus torpedos rompiendo línea de visión al oír el bloqueo.",
    ],
    ["Su arma hace más daño del que aparenta: no le regales duelos frontales con vida baja."],
    [
      alt("sombra", "situational", "El hackeo le corta la movilidad, su única defensa."),
      alt("cassidy", "situational", "Tu hitscan castiga sus trayectorias aéreas predecibles."),
    ]),
  rec("juno", "support", "ana", "situational", "medium",
    "Tu granada corta la curación en área de su anillo y sus torpedos: ganas la guerra de sustain.",
    [
      "La anticuración anula el valor de sus torpedos curativos y su presión de área.",
      "Tu rifle la alcanza en sus trayectorias aéreas si mantienes la calma en el tracking.",
    ],
    [
      "Lanza la granada sobre el grupo enemigo cuando su Órbita vespertina esté activa.",
      "Castígala con el rifle en las trayectorias descendentes de sus saltos.",
      "Guarda el dardo para el flanqueador que aproveche tu duelo con ella.",
    ],
    ["Su movilidad hace difícil confirmar tus aciertos: tu ventaja está en el sustain de equipo, no en eliminarla."],
    [
      alt("zenyatta", "situational", "La discordia castiga a su equipo acelerado antes de que llegue."),
      alt("brigitte", "safe", "Tu peel niega el valor de su presión sobre tus apoyos."),
    ]),

  // ── Kiriko ────────────────────────────────────────────────────────
  rec("kiriko", "tank", "winston", "situational", "medium",
    "Tu presión constante fuerza su Suzu y su teletransporte antes de las peleas importantes.",
    [
      "Cada salto tuyo sobre ella quema un teletransporte o un Suzu: recursos que su equipo no tendrá después.",
      "Tu Tesla en área la castiga incluso cuando tus aliados no pueden apuntar a su perfil pequeño.",
    ],
    [
      "Salta sobre ella al inicio de la pelea para forzar el teletransporte temprano.",
      "Coordina el foco real cuando su Suzu esté en cooldown.",
      "No la perseguís tras el teletransporte: vuelve con tu equipo y repite.",
    ],
    ["Kiriko con recursos disponibles anula tu dive con un solo Suzu: la paciencia de forzar cooldowns es el counter."],
    [
      alt("dva", "situational", "Misma presión con Matriz para sus kunais de respuesta."),
      alt("doomfist", "situational", "Tu combo la obliga a gastar el teletransporte en cada pelea."),
    ]),
  rec("kiriko", "damage", "sombra", "strong", "medium",
    "El hackeo le bloquea el teletransporte y el Suzu: la atrapas sin su seguro de vida.",
    [
      "Su supervivencia depende por completo del teletransporte; hackeada, es un blanco lento.",
      "El hackeo en el momento clave también impide el Suzu que salvaría a su tanque.",
    ],
    [
      "Acércate en sigilo y hackea antes de disparar.",
      "Coordina el hackeo con el foco de tu equipo sobre su tanque.",
      "Cuidado con sus kunais: los críticos de cabeza duelen más de lo que esperas.",
    ],
    ["Si la hackeas sin seguimiento de daño, solo le habrás enseñado a jugar más atrás."],
    [
      alt("tracer", "situational", "Tu velocidad la presiona y fuerza el teletransporte una y otra vez."),
      alt("genji", "situational", "El deflect devuelve kunais y tu dash la castiga sin Suzu."),
    ]),
  rec("kiriko", "support", "ana", "situational", "medium",
    "Tu granada fuerza su Suzu constantemente: cuando no lo tenga, tu equipo decide la pelea.",
    [
      "El duelo de tu granada contra su Suzu define la pelea de sustain: tú decides cuándo se juega.",
      "Tu rifle y tu dardo castigan su perfil si se expone para lanzar kunais.",
    ],
    [
      "Usa una granada de presión para forzar el Suzu y comunica la ventana a tu equipo.",
      "Guarda el dardo para su intento de duelo o su escape.",
      "Cura con disciplina: su equipo intentará forzarte la granada con presión falsa.",
    ],
    ["Si ella guarda el Suzu mejor que tú la granada, la ventaja se invierte: es un duelo de disciplina de cooldowns."],
    [
      alt("zenyatta", "situational", "La discordia acelera el foco que su Suzu no llega a limpiar."),
      alt("moira", "safe", "Tu presión de flanco la incomoda sin regalarle eliminaciones."),
    ]),

  // ── Lifeweaver ────────────────────────────────────────────────────
  rec("lifeweaver", "tank", "dva", "situational", "medium",
    "Tu presión constante fuerza sus pétalos y agarres defensivos hasta dejarlo sin respuestas.",
    [
      "Cada dive tuyo le quema el agarre o la plataforma: recursos que no salvarán a su equipo después.",
      "Tu Matriz absorbe sus espinas, su única herramienta de daño.",
    ],
    [
      "Salta sobre él al inicio de cada pelea para forzar sus cooldowns defensivos.",
      "Pide a tu equipo el foco real cuando el agarre esté gastado.",
      "Destruye la plataforma de pétalos si eleva a un aliado clave.",
    ],
    ["Su Árbol de la vida puede anular tu mejor pelea: fuerza que lo use pronto o juega alrededor."],
    [
      alt("winston", "situational", "Presión equivalente y tu Tesla castiga su hitbox generosa."),
      alt("doomfist", "situational", "Tu combo lo obliga a autoprotegerse en vez de salvar aliados."),
    ]),
  rec("lifeweaver", "damage", "sombra", "strong", "medium",
    "El hackeo le bloquea el agarre salvavidas: los picks de tu equipo por fin se quedan muertos.",
    [
      "Su agarre deshace las eliminaciones que tu equipo trabaja; hackearlo en la ventana de foco lo impide.",
      "Hackeado pierde también su desplazamiento floral: es un blanco grande y lento.",
    ],
    [
      "Sincroniza el hackeo con la jugada de foco de tu equipo, no con tu conveniencia.",
      "Castígalo directamente cuando esté hackeado: su daño de espinas es débil.",
      "Destruye la plataforma de pétalos que use para escapar.",
    ],
    ["Un hackeo desincronizado no vale nada: este counter funciona con comunicación o no funciona."],
    [
      alt("tracer", "situational", "Tu presión constante lo obliga a curarse a sí mismo."),
      alt("genji", "situational", "Tu dash castiga su perfil cuando gasta el desplazamiento."),
    ]),
  rec("lifeweaver", "support", "ana", "strong", "medium",
    "Su curación es de un solo objetivo y lenta: tu granada la anula por completo.",
    [
      "La anticuración convierte sus flores curativas en cero: no tiene curación en área que lo compense.",
      "Tu granada sobre el objetivo de su Árbol de la vida neutraliza también la ultimate.",
    ],
    [
      "Lanza la granada al objetivo que él esté curando en el foco de tu equipo.",
      "Repite sobre el Árbol de la vida: los pulsos no curan a aliados con anticuración.",
      "Cuida tu posición: su agarre no puede salvarte a ti, pero sus espinas sí te molestan.",
    ],
    ["Su agarre puede sacar al objetivo de tu granada antes del remate: pide a tu equipo confirmar rápido."],
    [
      alt("zenyatta", "situational", "La discordia supera el ritmo de su curación monoobjetivo."),
      alt("baptiste", "safe", "Tu sustain de área supera el suyo en cada intercambio."),
    ]),

  // ── Lúcio ─────────────────────────────────────────────────────────
  rec("lucio", "tank", "winston", "situational", "medium",
    "Tu cañón Tesla golpea en área automáticamente: el wallride no lo salva de ti.",
    [
      "El rayo eléctrico no exige puntería: castiga su movimiento errático como ninguna otra arma.",
      "Tu salto lo alcanza en las paredes y rincones donde vive.",
    ],
    [
      "Actívale el Tesla en cuanto pase cerca: cada toque suma y lo obliga a jugar lejos.",
      "Salta sobre él cuando se separe de su equipo para hacer spam de empujones.",
      "No lo persigas en exceso: expulsarlo del área ya reduce sus auras.",
    ],
    ["Su empujón puede lanzarte fuera del mapa mientras saltas hacia él: cuidado con los bordes."],
    [
      alt("wrecking-ball", "situational", "Disputas su velocidad y castigas su tendencia a jugar en los bordes."),
      alt("zarya", "situational", "Tu rayo lo castiga si su wallride pasa cerca y tus burbujas anulan sus empujones."),
    ]),
  rec("lucio", "damage", "sombra", "strong", "medium",
    "El hackeo corta su música: sin auras ni wallride, Lúcio deja de existir en la pelea.",
    [
      "El hackeo silencia el crossfade: su equipo pierde velocidad y curación en el momento que elijas.",
      "Sin wallride, su supervivencia se desploma ante cualquier foco.",
    ],
    [
      "Hackéalo justo antes de la pelea de equipo para amputar sus auras.",
      "Castígalo con tu equipo mientras esté hackeado y a pie.",
      "Guarda el EMP como respuesta a su Barrera de sonido.",
    ],
    ["Lúcio bien acompañado es difícil de rematar incluso hackeado: no conviertas el counter en una cacería personal."],
    [
      alt("tracer", "situational", "Tu velocidad iguala la suya y lo presionas sin descanso."),
      alt("mei", "situational", "La ralentización de tu rociada apaga su wallride en corto."),
    ]),
  rec("lucio", "support", "brigitte", "situational", "medium",
    "Le disputas el brawl que su equipo quiere jugar: tu peel e Inspiración superan su aura de curación.",
    [
      "Tu curación pasiva en área iguala la suya y tu armadura gana el desgaste del brawl.",
      "Tu golpe de látigo lo castiga cuando se acerque a empujar a tus aliados.",
    ],
    [
      "Mantén Inspiración activa en el brawl que su velocidad acelera.",
      "Golpéalo cuando entre a por un empujón ambiental.",
      "Guarda el Estandarte para responder a su Barrera de sonido.",
    ],
    ["No puedes matarlo ni perseguirlo: tu counter iguala su aporte, la diferencia la hace tu equipo."],
    [
      alt("moira", "situational", "Tu rociada lo sigue mejor que cualquier hitscan de tu equipo."),
      alt("kiriko", "safe", "Igualas su ritmo con teletransporte y castigas con kunais su vida baja."),
    ]),

  // ── Mercy ─────────────────────────────────────────────────────────
  rec("mercy", "tank", "winston", "strong", "medium",
    "Tu salto la alcanza en cualquier ángel guardián y tu Tesla la golpea sin exigir puntería.",
    [
      "Su supervivencia depende de volar entre aliados: tu salto y tu Tesla en área rompen ese patrón.",
      "Presionarla a ella desactiva el pocket que potencia al DPS enemigo.",
    ],
    [
      "Salta directamente sobre Mercy al abrir la pelea: obligarla a autodefenderse apaga su beam.",
      "Persíguela un salto más de lo que espera: su vuelo tiene cooldown.",
      "Alterna el foco a su DPS potenciado cuando ella se esconda.",
    ],
    ["Perseguir a Mercy en exceso te saca de la pelea: dos saltos y de vuelta con tu equipo."],
    [
      alt("dva", "strong", "Tu movilidad la caza en el aire y tu Matriz niega a su DPS potenciado."),
      alt("doomfist", "situational", "Tu combo la castiga en cada aterrizaje de su vuelo."),
    ]),
  rec("mercy", "damage", "sombra", "situational", "medium",
    "El hackeo corta el ángel guardián en pleno vuelo: Mercy queda a pie y sin escape.",
    [
      "Toda su supervivencia es el vuelo entre aliados; el hackeo lo apaga en el momento que elijas.",
      "Su pistola es su única respuesta: el duelo contra ti lo pierde casi siempre.",
    ],
    [
      "Hackéala cuando esté lejos de sus aliados y castígala de inmediato.",
      "Prioriza el momento de su Resurrección: hackearla la cancela.",
      "Si reaparece con Valquiria, guarda el EMP para bajarla del cielo.",
    ],
    ["Matar a Mercy no basta si su DPS potenciado te mata antes: elige la ventana con su pocket distraído."],
    [
      alt("tracer", "situational", "Tu velocidad la persigue entre cada vuelo."),
      alt("widowmaker", "situational", "Un acierto la borra durante la Valquiria o el vuelo predecible."),
    ]),
  rec("mercy", "support", "ana", "strong", "medium",
    "Tu granada sobre su objetivo potenciado anula el beam de Mercy y gana el intercambio de valor.",
    [
      "La anticuración convierte su rayo curativo en cero sobre el objetivo clave.",
      "Tu rifle la castiga en las trayectorias predecibles de su ángel guardián.",
    ],
    [
      "Lanza la granada sobre el tanque o DPS que ella esté potenciando en el foco.",
      "Castiga con el dardo su Resurrección: es el momento más estático de Mercy.",
      "Comunica cuándo su Valquiria termina para el foco de tu equipo.",
    ],
    ["Mercy pocket a un hitscan lejano queda fuera del alcance de tu granada: tu counter funciona sobre las peleas, no sobre el poke."],
    [
      alt("zenyatta", "situational", "La discordia sobre su protegido supera el valor de su beam."),
      alt("kiriko", "safe", "Igualas su sustain y castigas su vuelo con kunais."),
    ]),

  // ── Moira ─────────────────────────────────────────────────────────
  rec("moira", "tank", "winston", "situational", "medium",
    "Tu presión constante fuerza su desvanecimiento una y otra vez hasta dejarla sin escapatoria.",
    [
      "Tu Tesla la sigue sin exigir puntería y cada salto tuyo le quema el desvanecimiento.",
      "Sin desvanecimiento disponible, Moira es de los apoyos más fáciles de confirmar.",
    ],
    [
      "Salta sobre ella y mantén el Tesla activo: obligala a desvanecerse pronto.",
      "Coordina el foco de tu equipo durante el cooldown del desvanecimiento.",
      "No gastes recursos cuando lo tenga disponible: presión sí, compromiso no.",
    ],
    ["Su rociada te drena mientras la persigues: este counter niega valor, casi nunca la mata en solitario."],
    [
      alt("zarya", "situational", "Tu rayo la castiga en corto y las burbujas anulan su orbe de daño."),
      alt("dva", "situational", "Misma presión de movilidad con Matriz para el resto de su equipo."),
    ]),
  rec("moira", "damage", "sombra", "strong", "medium",
    "El hackeo bloquea el desvanecimiento: la única Moira que muere es la que no puede desaparecer.",
    [
      "Su supervivencia entera es el desvanecimiento; hackeada, cualquier foco la confirma.",
      "Tu sigilo te permite elegir el momento exacto en que no tenga escape.",
    ],
    [
      "Hackéala cuando haya gastado el desvanecimiento o esté aislada.",
      "Remátala con tu equipo: tu ráfaga sola puede no bastar contra su autocuración.",
      "Esquiva su orbe de daño rompiendo línea de visión.",
    ],
    ["En el duelo limpio su rociada de lock-on te gana: tu counter es el hackeo, no el uno contra uno."],
    [
      alt("cassidy", "situational", "Tu burst la castiga en la ventana sin desvanecimiento."),
      alt("sojourn", "situational", "El raíl la confirma antes de que su autocuración responda."),
    ]),
  rec("moira", "support", "brigitte", "safe", "medium",
    "Tu armadura resiste su rociada de bajo impacto y tu peel protege a quien ella intente drenar.",
    [
      "Su rociada hace daño por segundo bajo: la armadura y la Inspiración lo neutralizan casi por completo.",
      "Tu golpe de látigo la aparta cuando se acerque a drenar a tus aliados.",
    ],
    [
      "Interponte entre Moira y el aliado que esté drenando.",
      "Golpéala para activar Inspiración y compensar su desgaste.",
      "No intentes matarla: se desvanecerá; tu valor es hacerla irrelevante.",
    ],
    ["Moira puede simplemente cambiar de ángulo: tu counter protege tu zona, no el mapa entero."],
    [
      alt("ana", "situational", "Tu granada durante su cooldown de desvanecimiento la deja sin sustain."),
      alt("zenyatta", "situational", "La discordia castiga sus apariciones en cada pelea."),
    ]),

  // ── Wuyang ────────────────────────────────────────────────────────
  rec("wuyang", "tank", "winston", "safe", "low",
    "Presión de dive clásica contra un apoyo de línea trasera: fuerza sus recursos defensivos y castiga sus cooldowns.",
    [
      "Como apoyo de línea trasera, su valor depende de canalizar curación con calma: tu presión constante lo impide.",
      "Tu Tesla en área castiga su perfil aunque use movilidad defensiva.",
    ],
    [
      "Salta sobre él al inicio de las peleas para forzar sus habilidades defensivas.",
      "Coordina el foco de tu equipo cuando sus cooldowns estén gastados.",
      "Vuelve con tu equipo tras cada presión: no conviertas el dive en cacería.",
    ],
    ["Recomendación general contra apoyos de línea trasera: faltan datos específicos y verificados de este héroe en el parche actual."],
    [
      alt("dva", "safe", "Presión de movilidad equivalente con Matriz para sus proyectiles."),
      alt("doomfist", "situational", "Combos de entrada que fuerzan sus recursos defensivos."),
    ]),
  rec("wuyang", "damage", "tracer", "safe", "low",
    "Presión de flanqueo clásica: divides su atención y castigas sus ventanas sin cooldowns defensivos.",
    [
      "Los apoyos de canalización sufren contra presión constante que interrumpe su ritmo de curación.",
      "Tu velocidad te permite entrar y salir sin comprometerte contra sus respuestas.",
    ],
    [
      "Presiónalo desde flancos alternos para que nunca cure cómodo.",
      "Retírate cuando use sus herramientas defensivas y vuelve cuando estén en cooldown.",
      "Coordina con tu equipo el foco cuando lo hayas desgastado.",
    ],
    ["Recomendación general contra apoyos de línea trasera: faltan datos específicos y verificados de este héroe en el parche actual."],
    [
      alt("sombra", "safe", "El hackeo interrumpe sus habilidades en la ventana de foco."),
      alt("genji", "situational", "Presión de flanqueo con escape fiable."),
    ]),
  rec("wuyang", "support", "ana", "safe", "low",
    "Tu granada disputa la guerra de sustain y tu rifle lo castiga a distancia: el plan estándar contra apoyos de curación.",
    [
      "La anticuración presiona a cualquier apoyo centrado en curación sostenida.",
      "Tu dardo castiga sus intentos de duelo o de escape.",
    ],
    [
      "Usa la granada sobre los objetivos que él intente sostener en el foco.",
      "Mantén distancia y cambia de ángulo con regularidad.",
      "Guarda el dardo para el flanqueador enemigo que aproveche el duelo.",
    ],
    ["Recomendación general contra apoyos de línea trasera: faltan datos específicos y verificados de este héroe en el parche actual."],
    [
      alt("zenyatta", "safe", "Presión de discordia y poke a larga distancia."),
      alt("kiriko", "safe", "Suzu y teletransporte responden a su presión sin riesgo."),
    ]),

  // ── Zenyatta ──────────────────────────────────────────────────────
  rec("zenyatta", "tank", "winston", "strong", "high",
    "Zenyatta no tiene movilidad y tú eres pura movilidad: el dive de manual del juego.",
    [
      "Sin ningún escape, Zenyatta depende de su equipo: tu salto lo alcanza en cualquier posición.",
      "Tu burbuja bloquea sus orbes, su única defensa real a distancia.",
    ],
    [
      "Salta sobre él en cada apertura de pelea: o muere o gasta la Trascendencia.",
      "Suelta la burbuja entre él y tu vida cuando te enfoque con orbes.",
      "Sal en cuanto llegue el peel: repetirás el dive en diez segundos.",
    ],
    ["Sus orbes cargados a tu cabeza duelen de verdad: entra con burbuja disponible, no en línea recta descubierta."],
    [
      alt("dva", "strong", "Misma presión con Matriz para comerte sus orbes en la entrada."),
      alt("wrecking-ball", "situational", "Tus entradas lo desplazan y castigan su inmovilidad."),
    ]),
  rec("zenyatta", "damage", "tracer", "strong", "high",
    "Sin movilidad ni autocuración, Zenyatta es el objetivo soñado de cualquier flanqueadora.",
    [
      "No tiene escape: si lo encuentras aislado, la eliminación es cuestión de tu paciencia.",
      "Tus parpadeos rompen la puntería que sus orbes lentos exigen.",
    ],
    [
      "Flanquea hasta su posición y ataca desde ángulos que su equipo no cubre.",
      "Parpadea lateralmente: sus orbes castigan el movimiento recto.",
      "Fuerza la Trascendencia antes de la pelea decisiva de tu equipo aunque no lo mates.",
    ],
    ["Un Zenyatta preciso te borra en dos orbes con discordia: el respeto por su puntería es parte del counter."],
    [
      alt("sombra", "strong", "Apareces del sigilo directamente sobre él sin cruzar sus orbes."),
      alt("genji", "situational", "El deflect le devuelve la descarga de orbes en tu entrada."),
    ]),
  rec("zenyatta", "support", "lucio", "situational", "medium",
    "Tu velocidad lleva a tu equipo hasta él y tu empujón lo saca de posición: castiga su inmovilidad total.",
    [
      "Zenyatta sin peel muere ante cualquier presión: tu velocidad convierte a todo tu equipo en esa presión.",
      "Tu empujón lo desplaza de sus ángulos e incluso fuera del mapa en posiciones arriesgadas.",
    ],
    [
      "Acelera las entradas de tu equipo sobre su posición.",
      "Empújalo hacia tu equipo o fuera de su cobertura cuando pases cerca.",
      "Guarda la Barrera de sonido para el foco con discordia sobre tus aliados.",
    ],
    ["En el poke a distancia él gana el intercambio contigo de sobra: tu counter es el ritmo, nunca el duelo."],
    [
      alt("moira", "situational", "Tu presión de flanco lo obliga a girarse y tu desvanecimiento esquiva sus orbes."),
      alt("kiriko", "safe", "El Suzu limpia la discordia del objetivo enfocado."),
    ]),
];
