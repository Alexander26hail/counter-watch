import type { CounterRecommendation } from "../types";
import { alt, rec } from "./util";

/** Recomendaciones contra héroes enemigos de rol Tanque. */
export const VS_TANKS: CounterRecommendation[] = [
  // ── D.Va ──────────────────────────────────────────────────────────
  rec("dva", "tank", "zarya", "strong", "high",
    "La Matriz defensiva de D.Va no puede absorber tus rayos y cada ataque suyo carga tus barreras.",
    [
      "El rayo de partículas atraviesa la Matriz defensiva: D.Va pierde su principal herramienta contra ti.",
      "Si D.Va dispara a tus barreras, te regala carga de energía y tu daño sube.",
    ],
    [
      "Guarda una barrera para el aliado al que D.Va salte encima.",
      "Pégate a corta distancia para que el rayo haga daño constante que ella no puede negar.",
      "Cuando lance la autodestrucción, cubre a un aliado expuesto con la barrera proyectada.",
    ],
    ["Si desperdicias las dos barreras antes de su salto, D.Va gana el intercambio con misiles y propulsores."],
    [
      alt("winston", "safe", "Igualas su movilidad y peleas el mismo espacio sin depender de proyectiles."),
      alt("ramattra", "situational", "El bloqueo reduce sus misiles y los puños en forma Némesis no se pueden absorber."),
    ]),
  rec("dva", "damage", "symmetra", "strong", "medium",
    "Tu rayo ignora la Matriz defensiva y se carga golpeando su enorme armadura.",
    [
      "El proyector de fotones es un rayo: la Matriz defensiva no puede borrarlo.",
      "El meca de D.Va es un objetivo grande y lento: el rayo se mantiene cargado con facilidad.",
    ],
    [
      "Carga el rayo en el meca y mantén la distancia corta-media donde ella no puede castigarte.",
      "Coloca torretas en los flancos que D.Va usa para saltar a tu línea trasera.",
      "Usa el teletransportador para reposicionarte cuando active los propulsores hacia ti.",
    ],
    ["Fuera del alcance del rayo no le haces nada; no la persigas a campo abierto."],
    [
      alt("mei", "situational", "Tu aliento gélido tampoco se puede absorber y la ralentización corta su retirada."),
      alt("sombra", "situational", "El hackeo apaga propulsores y Matriz durante la ventana clave."),
    ]),
  rec("dva", "support", "zenyatta", "situational", "medium",
    "El Orbe de discordia convierte su meca gigante en un objetivo que se funde rápido.",
    [
      "La discordia amplifica todo el daño del equipo sobre un blanco enorme y fácil de golpear.",
      "Tus orbes cargados castigan al meca antes de que llegue a tu posición.",
    ],
    [
      "Marca a D.Va con discordia en cuanto asome y comunica el foco.",
      "Juega cerca de tu equipo: su plan es aislarte, no pelear en grupo.",
      "Guarda la Trascendencia para la autodestrucción o para su salto sobre tu línea trasera.",
    ],
    ["Si tu equipo no aprovecha la discordia, D.Va te saltará encima y Zenyatta no tiene escape."],
    [
      alt("brigitte", "safe", "El golpe de látigo y la inspiración te dan supervivencia cuando salte sobre ti."),
      alt("ana", "situational", "La granada biótica corta la sustentación de su equipo mientras el meca tanquea."),
    ]),

  // ── Doomfist ──────────────────────────────────────────────────────
  rec("doomfist", "tank", "orisa", "strong", "high",
    "Fortificar anula sus empujones y la jabalina interrumpe el Puño cohete y el Bloqueo de poder.",
    [
      "Con Fortificar activo, Doomfist no puede desplazarte ni aturdirte contra la pared.",
      "La Jabalina de energía interrumpe el Puño cohete en plena carga y cancela su Bloqueo de poder.",
    ],
    [
      "Reserva Fortificar para el momento exacto en que inicie el Puño cohete.",
      "Lanza la jabalina cuando empiece a cargar el puño o el bloqueo, no antes.",
      "Gira la jabalina para frenar su retirada y que tu equipo lo remate sin recursos.",
    ],
    ["Si gastas Fortificar y jabalina de forma anticipada, Doomfist entrará gratis a tu línea trasera."],
    [
      alt("zarya", "situational", "La burbuja sobre el aliado golpeado le niega el remate y te carga energía."),
      alt("ramattra", "situational", "El vórtice lo baja al suelo y el bloqueo aguanta su combo."),
    ]),
  rec("doomfist", "damage", "sombra", "strong", "high",
    "El hackeo cancela el Bloqueo de poder y lo deja sin movilidad dentro de tu equipo.",
    [
      "Un hackeo durante el Bloqueo de poder lo interrumpe y bloquea sus habilidades de escape.",
      "Doomfist depende por completo de sus cooldowns: sin ellos es un tanque de corto alcance atrapado.",
    ],
    [
      "Espera en sigilo cerca de tu línea trasera y hackea justo cuando entre.",
      "Tras el hackeo, enfócalo con tu equipo antes de que recupere habilidades.",
      "Usa el localizador para escapar si te salta encima con recursos disponibles.",
    ],
    ["Si hackeas antes de que comprometa sus cooldowns, se retirará y habrás gastado tu ventana."],
    [
      alt("cassidy", "situational", "La granada magnética con impedimenta corta su combo de movilidad."),
      alt("mei", "situational", "El muro lo aísla dentro de tu equipo y la ralentización le impide salir."),
    ]),
  rec("doomfist", "support", "ana", "strong", "medium",
    "El dardo somnífero castiga su entrada y la granada biótica le corta la vida temporal que gana al golpear.",
    [
      "Dormirlo en medio de su combo lo deja indefenso dentro de tu equipo.",
      "Doomfist genera salud temporal al impactar habilidades; la granada biótica anula esa sustentación.",
    ],
    [
      "Guarda el dardo exclusivamente para su entrada; no lo gastes en poke.",
      "Lanza la granada sobre él y sobre el aliado al que intenta rematar.",
      "Juega junto a un compañero: aislada eres su objetivo favorito.",
    ],
    ["El dardo es un proyectil lento: si fallas contra su movilidad, no tienes plan B hasta que vuelva el cooldown."],
    [
      alt("brigitte", "situational", "El golpe de látigo interrumpe su avance y la inspiración sostiene a los golpeados."),
      alt("lucio", "safe", "La velocidad ayuda a tu equipo a dispersarse y tu empujón corta su combo contra la pared."),
    ]),

  // ── Hazard ────────────────────────────────────────────────────────
  rec("hazard", "tank", "orisa", "situational", "low",
    "Fortificar aguanta su combo de salto y la jabalina lo interrumpe cuando entra.",
    [
      "Su plan es un combo de entrada con burst cuerpo a cuerpo; Fortificar reduce ese daño y evita desplazamientos.",
      "La jabalina lo frena en el aire o dentro de tu equipo y lo separa de su objetivo.",
    ],
    [
      "Reserva Fortificar para su salto, no para el poke a distancia.",
      "Usa la jabalina cuando esté comprometido, para que no pueda retirarse con recursos.",
      "Castiga el muro de púas rodeándolo en vez de atravesarlo de frente.",
    ],
    ["Recomendación editorial con datos limitados del parche actual; su bloqueo frontal puede negar tu daño si disparas de frente."],
    [
      alt("zarya", "situational", "Burbuja al aliado que reciba su combo y carga energía con su presión."),
      alt("sigma", "safe", "Lo castigas a distancia donde su kit corto no llega."),
    ]),
  rec("hazard", "damage", "ashe", "situational", "low",
    "Lo castigas a media-larga distancia, donde su kit de brawl no puede responder.",
    [
      "Su amenaza está en corto alcance; el rifle de Ashe lo daña desde fuera de ese radio.",
      "La dinamita fuerza su gestión de vida antes de que pueda saltar sobre tu equipo.",
    ],
    [
      "Mantén una posición elevada con ruta de escape y castígalo mientras se acerca.",
      "Usa la escopeta de retroceso para separarte si te salta encima.",
      "Lanza dinamita sobre su posición cuando bloquee de frente.",
    ],
    ["Recomendación editorial con datos limitados del parche actual; si te alcanza con el combo completo, pierdes el duelo."],
    [
      alt("sojourn", "situational", "El deslizamiento te saca de su salto y el raíl lo castiga de lejos."),
      alt("echo", "situational", "El vuelo te mantiene fuera de su alcance efectivo."),
    ]),
  rec("hazard", "support", "ana", "situational", "low",
    "El dardo somnífero corta su combo de entrada y la granada sostiene al aliado que recibe el salto.",
    [
      "Dormirlo cuando aterriza lo deja expuesto en medio de tu equipo.",
      "La granada biótica asegura la curación del objetivo de su dive y reduce su propia sustentación.",
    ],
    [
      "Posiciónate con cobertura y guarda el dardo para su entrada.",
      "Comunica quién es su objetivo y pre-lanza la granada en esa zona.",
      "Reposiciónate después de cada uso de habilidades: eres su siguiente objetivo.",
    ],
    ["Recomendación editorial con datos limitados del parche actual."],
    [
      alt("brigitte", "situational", "Peel directo con golpe de látigo e inspiración para el brawl."),
      alt("kiriko", "safe", "El Suzu limpia el burst de su combo y el teletransporte te saca del peligro."),
    ]),

  // ── Junker Queen ──────────────────────────────────────────────────
  rec("junker-queen", "tank", "orisa", "strong", "high",
    "Fortificar niega su Grito imperioso ofensivo y la jabalina la mantiene fuera del alcance del hacha.",
    [
      "Todo el daño de Junker Queen es de corto alcance; la jabalina y el retroceso del giro la mantienen lejos.",
      "Fortificar te hace inmune al tirón del cuchillo y reduce el daño de Carnicería.",
    ],
    [
      "Mantén la pelea a media distancia y castígala mientras se acerca.",
      "Usa el giro de jabalina para bloquear el cuchillo Serrucho cuando lo lance.",
      "Reserva Fortificar para su ultimate o para el momento en que salte con el grito.",
    ],
    ["Sus heridas hacen daño continuo que ignora armadura: si le regalas cuerpo a cuerpo constante, su autocuración la sostiene."],
    [
      alt("sigma", "safe", "La superas a distancia y tu agarre absorbe el cuchillo."),
      alt("mauga", "situational", "Ganas el brawl directo si tu equipo corta sus curaciones."),
    ]),
  rec("junker-queen", "damage", "pharah", "strong", "medium",
    "Junker Queen no tiene ninguna herramienta para alcanzarte en el aire.",
    [
      "Su cuchillo, hacha y escopeta exigen blancos cercanos; desde el aire la castigas sin riesgo.",
      "Tu daño en área golpea a su equipo brawl agrupado alrededor de ella.",
    ],
    [
      "Mantente en el aire sobre ángulos que su escopeta no alcance con daño real.",
      "Castiga los momentos en que use el grito para entrar: su equipo queda expuesto detrás.",
      "Reposiciónate con el impulso si un hitscan enemigo intenta cubrirla.",
    ],
    ["Si su equipo incluye buenos hitscans, tu ventaja desaparece; evalúa el conjunto enemigo, no solo a ella."],
    [
      alt("mei", "situational", "El muro la separa de su equipo y la ralentización anula su brawl."),
      alt("echo", "situational", "Misma ventaja aérea con mejor burst contra su vida media."),
    ]),
  rec("junker-queen", "support", "kiriko", "strong", "high",
    "El Suzu limpia las heridas del cuchillo, del hacha y la anticuración de Carnicería.",
    [
      "El Suzu de protección elimina el daño continuo de heridas, que es la base de su presión y su autocuración.",
      "Limpiar Carnicería anula por completo el valor de su ultimate.",
    ],
    [
      "Guarda el Suzu prioritariamente para Carnicería o para un aliado con heridas críticas.",
      "Usa el teletransporte para escapar si te selecciona como objetivo del brawl.",
      "Lanza talismanes de curación constantes al tanque que intercambia golpes con ella.",
    ],
    ["Si gastas el Suzu en daño ordinario, su siguiente Carnicería no tendrá respuesta."],
    [
      alt("ana", "situational", "La granada biótica corta la autocuración que obtiene de las heridas."),
      alt("lucio", "safe", "La velocidad permite a tu equipo entrar y salir del rango de su brawl."),
    ]),

  // ── Mauga ─────────────────────────────────────────────────────────
  rec("mauga", "tank", "ramattra", "strong", "medium",
    "El bloqueo de la forma Némesis reduce drásticamente sus ametralladoras y el vórtice lo fija en el suelo.",
    [
      "El bloqueo reduce el daño frontal: sus ametralladoras dejan de generarle vida por críticos con la misma eficacia.",
      "El Vórtice voraz lo ralentiza y lo mantiene dentro del alcance de tus puños perforantes.",
    ],
    [
      "Alterna bloqueo y golpes: bloquea sus ráfagas largas y castiga cuando recargue o se sobrecaliente.",
      "Lanza el vórtice bajo sus pies antes de entrar en forma Némesis.",
      "Coordina con tu Ana o Zenyatta el momento de foco cuando su Sobremarcha cardiaca esté en cooldown.",
    ],
    ["Sin apoyo antisanación, Mauga puede sostener el intercambio con su robo de vida más tiempo que tu barra de Némesis."],
    [
      alt("orisa", "situational", "Fortificar niega la embestida y reduce su daño crítico sostenido."),
      alt("dva", "situational", "Los propulsores te permiten elegir cuándo pelear y cuándo salir de sus ráfagas."),
    ]),
  rec("mauga", "damage", "sombra", "strong", "medium",
    "El hackeo interrumpe la Sobremarcha cardiaca y le corta la sustentación de la que depende.",
    [
      "Sin Sobremarcha cardiaca, Mauga no roba vida y se funde ante el foco de tu equipo.",
      "El hackeo también corta su embestida, dejándolo anclado lejos de sus curanderos.",
    ],
    [
      "Hackéalo justo cuando active la sobremarcha para desperdiciar su cooldown clave.",
      "Marca su posición para tu equipo y enfoca con ellos la ventana posterior al hackeo.",
      "Evita el duelo directo: su daño en corto te elimina en segundos.",
    ],
    ["Mauga puede simplemente girarse y eliminarte si hackeas desde una posición expuesta."],
    [
      alt("ashe", "situational", "Lo quemas desde fuera del alcance efectivo de sus ametralladoras."),
      alt("mei", "situational", "El muro lo separa de sus curanderos y congela su avance."),
    ]),
  rec("mauga", "support", "ana", "strong", "high",
    "La granada biótica apaga su robo de vida: sin sustentación, su enorme cuerpo es solo un blanco.",
    [
      "Todo el plan de Mauga es sostenerse con críticos e ignición mientras recibe curación; la anticuración lo desmonta por completo.",
      "El dardo somnífero cancela la embestida y la Sobremarcha cardiaca en el momento crítico.",
    ],
    [
      "Lanza la granada biótica sobre Mauga al inicio de cada pelea de tanques.",
      "Coordina con tu tanque: la ventana de anticuración es el momento de foco del equipo.",
      "Mantén línea de visión lateral para curar a tu tanque sin exponerte a sus ráfagas.",
    ],
    ["Una Kiriko enemiga puede limpiar tu granada con el Suzu: fuerza ese cooldown antes de la jugada importante."],
    [
      alt("zenyatta", "situational", "La discordia multiplica el daño sobre su enorme hitbox."),
      alt("kiriko", "safe", "El Suzu protege a tu tanque en sus ráfagas de foco."),
    ]),

  // ── Orisa ─────────────────────────────────────────────────────────
  rec("orisa", "tank", "sigma", "strong", "medium",
    "La superas en el poke: tu agarre absorbe la jabalina y tu roca la castiga cuando Fortificar termina.",
    [
      "El Agarre cinético absorbe la Jabalina de energía y las ráfagas de su fusión, anulando su presión media.",
      "Tus esferas hipergravitatorias golpean por encima del giro de jabalina y castigan su falta de movilidad.",
    ],
    [
      "Mantén la pelea a media distancia, donde tus esferas ganan al alcance de su arma.",
      "Guarda la Roca acrecentada para el segundo en que termine Fortificar.",
      "Usa la barrera experimental para cortar su línea de tiro cuando tu equipo avance.",
    ],
    ["Si malgastas el agarre, su combo de jabalina y giro te empuja fuera de posición en peleas cerradas."],
    [
      alt("ramattra", "situational", "El vórtice y los puños perforantes castigan su juego estático."),
      alt("zarya", "situational", "Las burbujas anulan su poke y conviertes su presión en energía."),
    ]),
  rec("orisa", "damage", "bastion", "situational", "medium",
    "Tu daño sostenido en forma de asalto atraviesa la rotación completa de sus defensas.",
    [
      "Orisa depende de ventanas de Fortificar y giro; tu DPS de asalto supera lo que puede mitigar.",
      "Su tamaño y poca movilidad hacen que casi ningún disparo tuyo se pierda.",
    ],
    [
      "Activa la forma de asalto cuando Fortificar esté en cooldown, no contra su ventana defensiva.",
      "Dispara desde un ángulo lateral acompañado de tu equipo, nunca en solitario frente a ella.",
      "Usa la granada de rebote para castigarla detrás de esquinas.",
    ],
    ["El giro de jabalina bloquea tus proyectiles de frente y su equipo castigará tu forma estática si te aíslas."],
    [
      alt("reaper", "situational", "El robo de vida sostiene el duelo cercano contra su daño medio."),
      alt("sombra", "situational", "El hackeo le corta Fortificar y la deja expuesta al foco."),
    ]),
  rec("orisa", "support", "ana", "strong", "medium",
    "La granada biótica la deja sin curaciones durante sus ventanas vulnerables y tu equipo la funde.",
    [
      "Orisa sobrevive alternando cooldowns defensivos con curación aliada; la anticuración rompe ese ciclo.",
      "Tu rifle la castiga a una distancia donde su arma pierde daño por dispersión.",
    ],
    [
      "Lanza la granada cuando Fortificar termine, no durante su ventana dorada.",
      "Comunica la anticuración para que tu equipo enfoque en ese momento.",
      "Mantén el dardo para el flanqueador que intente aprovechar tu posición estática.",
    ],
    ["Fortificar bloquea el dardo somnífero y reduce el daño: sincroniza tus recursos con sus cooldowns, no antes."],
    [
      alt("zenyatta", "situational", "La discordia acelera el foco sobre su gran hitbox."),
      alt("baptiste", "safe", "Ráfagas constantes y la lámpara sostienen a tu tanque en el poke largo."),
    ]),

  // ── Ramattra ──────────────────────────────────────────────────────
  rec("ramattra", "tank", "sigma", "situational", "medium",
    "Lo castigas a distancia en forma Omnic y niegas su valor cuando gasta la forma Némesis para alcanzarte.",
    [
      "Tu poke de esferas y agarre gana el intercambio contra su bastón antes de que se transforme.",
      "Cuando entre en forma Némesis, retroceder con tu equipo agota su temporizador sin regalarle valor.",
    ],
    [
      "Mantén la distancia y castiga su barrera de pantalla con las esferas por encima.",
      "Guarda la roca para interrumpir su avance en forma Némesis.",
      "Usa el agarre contra el Vórtice voraz para proteger tu posición.",
    ],
    ["En espacios cerrados donde no puedas kitear, su forma Némesis te gana el cuerpo a cuerpo."],
    [
      alt("dva", "situational", "Los propulsores te sacan del vórtice y de su alcance Némesis."),
      alt("orisa", "safe", "Fortificar y jabalina responden a su presión frontal."),
    ]),
  rec("ramattra", "damage", "pharah", "strong", "medium",
    "Ninguna de sus dos formas tiene una respuesta real contra un objetivo aéreo.",
    [
      "Su bloqueo solo cubre el frente y sus puños Némesis no alcanzan el aire.",
      "El Vórtice voraz es su única herramienta antiaérea y tiene un área pequeña y evitable.",
    ],
    [
      "Vuela fuera del eje de su bastón y castiga su avance con cohetes.",
      "Identifica el vórtice en el suelo y mantente lejos de su vertical.",
      "Enfoca a sus apoyos cuando gaste la forma Némesis persiguiendo a tu equipo.",
    ],
    ["Durante Aniquilación su enjambre te alcanza si vuelas bajo; gana altura o corta la línea de visión."],
    [
      alt("echo", "situational", "Ventaja aérea equivalente con burst para castigar su barrera."),
      alt("sojourn", "situational", "El raíl carga rápido contra su barrera y su forma Némesis."),
    ]),
  rec("ramattra", "support", "lifeweaver", "situational", "medium",
    "El agarre salvavidas saca a tu tanque de Aniquilación y del vórtice, sus dos herramientas de cierre.",
    [
      "Aniquilación se alimenta de aliados atrapados en el enjambre; el agarre rompe exactamente eso.",
      "La plataforma de pétalos eleva a un aliado fuera del Vórtice voraz y del alcance Némesis.",
    ],
    [
      "Reserva el agarre para el aliado que quede dentro de Aniquilación.",
      "Coloca la plataforma para sacar a tu equipo del vórtice en peleas de punto.",
      "Cura en arco constante al tanque que absorbe sus puños.",
    ],
    ["Un agarre anticipado o usado en pánico deja a tu equipo sin respuesta ante la ultimate real."],
    [
      alt("kiriko", "situational", "El teletransporte te reposiciona y el Suzu alivia el burst del combo con vórtice."),
      alt("zenyatta", "situational", "La discordia castiga su avance lento en ambas formas."),
    ]),

  // ── Reinhardt ─────────────────────────────────────────────────────
  rec("reinhardt", "tank", "orisa", "strong", "high",
    "La jabalina cancela su carga, Fortificar aguanta el martillo y lo castigas mientras camina hacia ti.",
    [
      "La Jabalina de energía interrumpe la Carga en seco y lo deja expuesto lejos de su equipo.",
      "Fortificar te hace inmune al empuje de la carga y reduce el daño de martillo y Tierra trémula.",
    ],
    [
      "Rompe su barrera a media distancia antes de que pueda acercarse con ella.",
      "Guarda la jabalina para el momento en que inicie la carga.",
      "Activa Fortificar cuando salte con Tierra trémula para seguir de pie y contraatacar.",
    ],
    ["Si permites que su equipo brawl te rodee en espacio cerrado, ni Fortificar te sostiene."],
    [
      alt("sigma", "safe", "Le rompes la barrera desde una distancia que su martillo nunca alcanza."),
      alt("ramattra", "situational", "Los puños Némesis atraviesan su barrera e ignoran su plan defensivo."),
    ]),
  rec("reinhardt", "damage", "pharah", "strong", "high",
    "Vuelas por encima de su barrera y de su martillo: Reinhardt no puede responderte.",
    [
      "Su única herramienta a distancia es la Descarga de fuego, un proyectil lento y fácil de esquivar en el aire.",
      "Tus cohetes golpean detrás de la barrera por ángulo elevado, presionando a su equipo protegido.",
    ],
    [
      "Toma ángulos altos laterales para disparar detrás de su escudo.",
      "Castiga cada carga fallida enfocándolo antes de que regrese con su equipo.",
      "Cuidado con los hitscans que lo acompañan: tu counter es contra él, no contra todo su equipo.",
    ],
    ["Un buen dúo de hitscan enemigo convierte tu ventaja contra Reinhardt en una desventaja global."],
    [
      alt("junkrat", "situational", "Tu spam indirecto cae detrás de la barrera y castiga el espacio cerrado que él busca."),
      alt("sombra", "situational", "El hackeo le corta la carga y castiga su falta de rango."),
    ]),
  rec("reinhardt", "support", "ana", "strong", "medium",
    "El dardo detiene su carga en seco y la granada corta la curación que sostiene su avance frontal.",
    [
      "Dormir a un Reinhardt que carga o que activa Martillo demoledor cambia la pelea entera.",
      "Su estilo depende de curación constante mientras aguanta con la barrera; la anticuración rompe ese motor.",
    ],
    [
      "Mantén máxima distancia: su plan contra ti es simplemente caminar y martillarte.",
      "Guarda el dardo para la carga o para su ultimate.",
      "Lanza la granada sobre su cabeza cuando baje la barrera para pelear.",
    ],
    ["La barrera bloquea tanto tu dardo como tu granada: espera a que la baje o busca un ángulo lateral."],
    [
      alt("lucio", "situational", "La velocidad permite a tu equipo entrar y salir del rango de su martillo."),
      alt("zenyatta", "situational", "La discordia lo funde en cuanto baja la barrera para atacar."),
    ]),

  // ── Roadhog ───────────────────────────────────────────────────────
  rec("roadhog", "tank", "orisa", "strong", "high",
    "Fortificar te hace inmune al gancho y lo castigas mientras Tomar un respiro está en cooldown.",
    [
      "Con Fortificar activo el gancho no te desplaza: su jugada principal queda anulada.",
      "La jabalina lo interrumpe y lo empuja fuera de posición cuando intenta respirar.",
    ],
    [
      "Activa Fortificar de forma reactiva cuando anticipe el gancho, no de forma preventiva.",
      "Lanza la jabalina justo cuando active Tomar un respiro para cancelar la curación.",
      "Pide a tu equipo antisanación y enfócalo en esa ventana.",
    ],
    ["Sin apoyo de tu equipo, Roadhog simplemente respira y repite: tú lo neutralizas, no lo eliminas sola."],
    [
      alt("zarya", "situational", "La burbuja sobre el aliado enganchado anula el combo y te da energía."),
      alt("dva", "safe", "La Matriz come el gancho y su escopeta pierde valor contra tu movilidad."),
    ]),
  rec("roadhog", "damage", "sombra", "strong", "medium",
    "El hackeo interrumpe Tomar un respiro y convierte su enorme vida en alimento para tu equipo.",
    [
      "Hackearlo mientras respira cancela la curación y bloquea el gancho durante la ventana de foco.",
      "Roadhog sin cooldowns es el tanque más fácil de enfocar del juego: grande, lento y sin escudo.",
    ],
    [
      "Guarda el hackeo para el momento en que intente respirar bajo presión.",
      "Comunica la ventana a tu equipo: hackeo, foco y eliminación.",
      "Mantén distancia del gancho: 20 metros es su zona letal.",
    ],
    ["Si te acercas demasiado para hackear, un gancho reactivo te elimina al instante."],
    [
      alt("ashe", "situational", "La dinamita y el rifle lo queman desde fuera del alcance del gancho."),
      alt("reaper", "situational", "Le devuelves el daño en corto y tu forma alma castiga su combo."),
    ]),
  rec("roadhog", "support", "ana", "strong", "high",
    "La granada biótica anula Tomar un respiro: es el counter más directo del juego contra su sustentación.",
    [
      "Roadhog vive de su autocuración masiva; con anticuración encima pierde 600 de vida sin recuperar nada.",
      "El dardo somnífero cancela Cerdopresora y su combo de gancho.",
    ],
    [
      "Lanza la granada cuando esté presionado y a punto de respirar, no al azar.",
      "Mantente fuera del rango del gancho o pegada a tu equipo para el peel.",
      "Encadena granada y foco de equipo: comunica la ventana.",
    ],
    ["Una Kiriko enemiga con Suzu puede limpiar tu granada; fuérzala antes de la jugada decisiva."],
    [
      alt("zenyatta", "situational", "La discordia convierte su vida gigante en carga de ultimate para tu equipo."),
      alt("kiriko", "safe", "El Suzu salva al aliado enganchado del combo letal."),
    ]),

  // ── Sigma ─────────────────────────────────────────────────────────
  rec("sigma", "tank", "dva", "strong", "medium",
    "Tu movilidad ignora su plan de poke: la Matriz come sus esferas y los propulsores lo alcanzan detrás de la barrera.",
    [
      "La Matriz defensiva absorbe las esferas hipergravitatorias y la Roca acrecentada, sus dos fuentes de presión.",
      "Los propulsores te colocan detrás de su barrera experimental, donde su equipo queda expuesto.",
    ],
    [
      "Acorta la distancia con propulsores en cuanto gaste el agarre o la roca.",
      "Reserva la Matriz para la roca cuando esté en tu ventana de dive.",
      "Enfoca a sus apoyos detrás de la barrera para forzarlo a girarse.",
    ],
    ["El Agarre cinético absorbe tus disparos y su roca te castiga si entras con la Matriz ya gastada."],
    [
      alt("winston", "situational", "El salto ignora la barrera y tu burbuja corta su línea de poke."),
      alt("doomfist", "situational", "Entradas rápidas por ángulos que su barrera no cubre."),
    ]),
  rec("sigma", "damage", "tracer", "strong", "medium",
    "Peleas donde su kit no funciona: pegada a él o a su línea trasera, sus esferas y su barrera no te tocan.",
    [
      "Todo el kit de Sigma mira hacia el frente a media distancia; a bocajarro sus esferas explotan detrás de ti.",
      "Su equipo depende de la pelea de poke: tu presión en la línea trasera lo obliga a girarse y perder valor.",
    ],
    [
      "Flanquea y ataca a sus apoyos, no a Sigma directamente.",
      "Usa los parpadeos para esquivar la roca, su única herramienta contra ti.",
      "Regresa con la regresión temporal antes de que el agarre te atrape.",
    ],
    ["El Flujo gravitatorio te elimina si lo recibes cerca del suelo con la regresión gastada."],
    [
      alt("sombra", "situational", "El hackeo corta agarre y roca justo antes del foco de tu equipo."),
      alt("genji", "situational", "El deflect devuelve sus esferas y tu dash castiga detrás de la barrera."),
    ]),
  rec("sigma", "support", "baptiste", "situational", "medium",
    "Igualas su juego de poke con ráfagas de largo alcance y la lámpara anula su combo de roca.",
    [
      "Tu rifle daña a su equipo al mismo alcance en el que Sigma quiere pelear.",
      "El Campo de inmortalidad neutraliza el pico de daño de roca más esferas.",
    ],
    [
      "Posiciónate en alto con tu equipo y gana el intercambio de poke largo.",
      "Guarda la lámpara para el combo de roca o para el Flujo gravitatorio.",
      "Usa el impulso de exoesqueleto para escapar del agarre.",
    ],
    ["El Flujo gravitatorio puede alzarte fuera del alcance de tu propia lámpara: sepárate de tu equipo al oírlo."],
    [
      alt("zenyatta", "situational", "Ganas el poke con discordia, pero sin escape ante su combo."),
      alt("kiriko", "safe", "El Suzu responde a la roca y el teletransporte al flujo."),
    ]),

  // ── Winston ───────────────────────────────────────────────────────
  rec("winston", "tank", "dva", "strong", "medium",
    "Lo persigues a todas partes: tu movilidad iguala su salto y tu daño en corto gana el intercambio.",
    [
      "Los propulsores te permiten seguir cada salto y castigarlo junto al objetivo que intenta asesinar.",
      "Tu daño cercano de cañones más misiles supera al de su Tesla mientras dure el intercambio.",
    ],
    [
      "Reacciona a su salto: llega al mismo tiempo que él sobre tu apoyo y pelea con ventaja numérica.",
      "Usa la Matriz sobre tu aliado enfocado para negar el daño de sus disparos aliados de seguimiento.",
      "Castiga su retirada con propulsores cuando quede a poca vida buscando su burbuja.",
    ],
    ["Si lo persigues hasta dentro de su equipo, mueres tú; solo síguelo cuando el intercambio sea favorable."],
    [
      alt("zarya", "situational", "Burbujas para el objetivo de su dive y energía gratis de su Tesla."),
      alt("roadhog", "situational", "El gancho lo saca de tu línea trasera y tu escopeta lo castiga."),
    ]),
  rec("winston", "damage", "reaper", "strong", "high",
    "Tus escopetas funden su enorme hitbox más rápido de lo que su Tesla te mata a ti.",
    [
      "A quemarropa, tus escopetas hacen el triple de daño que su cañón Tesla en el mismo tiempo.",
      "El robo de vida de tus disparos sostiene el duelo que él mismo inicia al saltarte encima.",
    ],
    [
      "Espera su salto cerca de tu línea trasera y recíbelo disparando a la cabeza.",
      "Usa la forma alma solo para reposicionarte, no en pánico dentro de su burbuja.",
      "Entra en su burbuja para dispararle: fuera de ella la burbuja bloquea tu daño.",
    ],
    ["Winston puede simplemente ignorarte y saltar a tus apoyos; tu counter funciona cuando peleas donde él aterriza."],
    [
      alt("bastion", "situational", "Tu forma de asalto lo derrite antes de que su Tesla te preocupe."),
      alt("symmetra", "situational", "El rayo cargado castiga su hitbox y su burbuja te alimenta."),
    ]),
  rec("winston", "support", "brigitte", "strong", "high",
    "Tu presencia convierte su salto sobre tus aliados en una mala inversión: peel directo, armadura e inspiración.",
    [
      "El golpe de látigo lo empuja lejos del aliado que intenta eliminar y activa Inspiración para sostener a todos.",
      "Los paquetes de reparación con armadura reducen el daño por segundo del cañón Tesla.",
    ],
    [
      "Posiciónate junto al apoyo o DPS que Winston querrá saltar.",
      "Recíbelo con golpe de látigo en cuanto aterrice y mantén Inspiración activa.",
      "Guarda el Estandarte para su ultimate o para un dive coordinado.",
    ],
    ["Contra un dive coordinado de dos o más, tu peel no basta: necesitas que tu equipo colapse contigo."],
    [
      alt("ana", "situational", "Dardo y granada castigan su salto, si aciertas antes de que te alcance."),
      alt("kiriko", "safe", "Suzu para el aliado enfocado y teletransporte para escapar tú."),
    ]),

  // ── Wrecking Ball ─────────────────────────────────────────────────
  rec("wrecking-ball", "tank", "roadhog", "situational", "medium",
    "El gancho lo saca del rodillo y lo sujeta para que tu equipo lo castigue sin su movilidad.",
    [
      "El Gancho de cadena detiene su bola en seco: es la interrupción más directa contra su ciclo de entrada y salida.",
      "Tu escopeta castiga su enorme hitbox mientras esté sujeto o anclado.",
    ],
    [
      "Espera su entrada y engánchalo cuando pase cerca de tu equipo.",
      "Coordina el foco: la ventana tras el gancho es corta antes de que active Escudos adaptativos.",
      "No lo persigas a su spawn; tu valor está en castigar sus entradas, no en cazarlo.",
    ],
    ["Si fallas el gancho, Ball desordena tu línea trasera gratis durante todo el cooldown."],
    [
      alt("orisa", "situational", "La jabalina lo frena y Fortificar aguanta el empujón de su bola."),
      alt("junker-queen", "situational", "El cuchillo y el grito castigan sus entradas sobre tu equipo."),
    ]),
  rec("wrecking-ball", "damage", "sombra", "strong", "high",
    "El hackeo lo saca de la forma de bola y lo deja sin garra ni escudos: es su counter clásico.",
    [
      "Un hackeo lo expulsa del rodillo y bloquea la garra, dejándolo lento, enorme y lejos de ayuda.",
      "Su estilo depende por completo de ciclos de habilidades; tu presencia constante rompe cada ciclo.",
    ],
    [
      "Acecha en sigilo los flancos por los que entra y hackéalo dentro de tu equipo.",
      "Tras el hackeo, marca el foco: sin escudos adaptativos cae rápido.",
      "Hackea también los paquetes de vida que usa para resetear.",
    ],
    ["Si hackeas en mal momento, su equipo aprovechará que estás revelada cerca de la pelea."],
    [
      alt("cassidy", "situational", "La granada magnética impide su rodillo y castiga su hitbox."),
      alt("mei", "situational", "Muro y ralentización cortan sus rutas de péndulo."),
    ]),
  rec("wrecking-ball", "support", "brigitte", "situational", "medium",
    "Tu peel constante hace que sus entradas no consigan eliminaciones: inspiración, armadura y empujones.",
    [
      "Inspiración sostiene a todo el equipo durante el daño de área de sus entradas y su Campo minado.",
      "El golpe de látigo separa a Ball del aliado que intenta aplastar contra la pared.",
    ],
    [
      "Agrupa a tu equipo y mantén Inspiración activa durante sus entradas.",
      "Golpéalo para interrumpir su presión sobre tu otro apoyo.",
      "Marca su vida: cuando entre sin Escudos adaptativos, pide el foco.",
    ],
    ["Brigitte no puede matarlo: tu valor es negar valor, y eso exige paciencia de todo el equipo."],
    [
      alt("ana", "situational", "El dardo lo detiene si lo aciertas fuera del rodillo; la granada niega sus resets."),
      alt("lucio", "safe", "La velocidad reposiciona a tu equipo tras cada empujón y le disputas el entorno."),
    ]),

  // ── Zarya ─────────────────────────────────────────────────────────
  rec("zarya", "tank", "sigma", "situational", "medium",
    "Peleas desde fuera del alcance de su rayo y tus escudos no le regalan energía si disparas con disciplina.",
    [
      "Su rayo alcanza unos 15 metros; tus esferas y tu agarre trabajan desde más lejos sin darle nada a cambio.",
      "Puedes dejar de disparar cuando levante una burbuja, negándole la energía que define su partida.",
    ],
    [
      "Mantén la pelea a media-larga distancia y castiga con esferas cuando avance.",
      "Deja de disparar a las burbujas: comunica a tu equipo que hagan lo mismo.",
      "Guarda la roca para cuando su energía esté baja y quiera retirarse.",
    ],
    ["Con energía alta, Zarya te gana el intercambio incluso a media distancia: la disciplina de burbujas es de todo el equipo."],
    [
      alt("orisa", "situational", "La jabalina la mantiene lejos y Fortificar aguanta su rayo sin regalarle burbujas."),
      alt("ramattra", "situational", "El vórtice la frena y tus puños golpean a través de su burbuja."),
    ]),
  rec("zarya", "damage", "pharah", "strong", "medium",
    "Su rayo no llega al aire y sus burbujas no la protegen de tu presión constante a distancia.",
    [
      "El alcance efectivo de Zarya es corto; desde el aire la castigas sin alimentar sus burbujas con daño evitable.",
      "Puedes redirigir tus cohetes a su equipo cuando levante burbuja, negándole energía.",
    ],
    [
      "Mantén el aire y deja de disparar a cualquier objetivo con burbuja.",
      "Castiga su avance: sin cobertura, es un blanco lento y grande.",
      "Cuidado con su lanzamiento de energía en arco: mantén movimiento lateral.",
    ],
    ["Su disparo secundario en arco sí te alcanza en el aire: una Zarya precisa con energía alta te borra en dos impactos."],
    [
      alt("ashe", "situational", "La quemas desde lejos y la dinamita fuerza sus burbujas antes de tiempo."),
      alt("sojourn", "situational", "El raíl la castiga a distancia y el deslizamiento te aleja de su rayo."),
    ]),
  rec("zarya", "support", "zenyatta", "situational", "medium",
    "La discordia castiga su vida sin burbujas y tu alcance supera con mucho el de su rayo.",
    [
      "La discordia amplifica el foco justo cuando sus burbujas están en cooldown, su única ventana vulnerable.",
      "Tus orbes trabajan desde una distancia donde ella no genera energía contigo.",
    ],
    [
      "Marca con discordia a Zarya solo cuando gaste ambas burbujas; antes, marca a otro objetivo.",
      "Comunica el estado de sus burbujas a tu equipo.",
      "Mantén la distancia máxima: si te alcanza con el rayo, no tienes escape.",
    ],
    ["La discordia anticipada le regala energía si tu equipo dispara a la burbuja que ella levanta en respuesta."],
    [
      alt("ana", "situational", "La granada niega la curación que recibe mientras tanquea con energía alta."),
      alt("baptiste", "safe", "Poke a distancia y lámpara contra su ventana de Rayo gravitatorio."),
    ]),
];
