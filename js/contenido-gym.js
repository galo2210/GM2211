// NORTE · contenido GYM — rutina completa con técnica en 3 niveles (SISTEMA.md §4.1).
// Estándar de escritura §4.1.1: preparación → ejecución → errores → sentir → progresar.
// Nada acá toca el store ni el DOM.

const GYM_SESIONES = {

  'gym-empuje': {
    nombre: 'Empuje',
    dia: 'Lunes',
    cinta: 'Cinta 15 min · pendiente 8-10 · velocidad 5-5,5',
    cintaMinima: 'Cinta 10 min',
    ejercicios: [
      {
        id: 'press-inclinado-mancuernas',
        nombre: 'Press inclinado con mancuernas',
        series: '4×8-10', descanso: 120,
        nivel1: 'Bajar hondo · estirar el pecho abajo',
        nivel2: {
          prep: 'Banco a 30°. Mancuernas al muslo y subilas con un envión de rodillas. Omóplatos atrás y abajo, pies firmes en el piso.',
          ejec: 'Bajá 2-3 seg con los codos a 45° del cuerpo. Llegá HONDO: el pecho bien estirado abajo. Pausa corta. Subí fuerte sin trabar los codos ni chocar las mancuernas.',
          errores: 'Rango corto abajo · rebotar · arquear la baja espalda · codos pegados al cuerpo.',
          sentir: 'Estiramiento claro en el pecho abajo. Al día siguiente: pectorales, no hombros.',
          progresar: '4×10 limpias con bajada controlada → +2 kg por mancuerna.'
        },
        nivel3: 'Prioriza el pectoral superior, tu zona floja visible. La posición estirada bajo carga es el estímulo #1 de hipertrofia según la evidencia actual: por eso la bajada honda vale más que el peso.',
        variantes: ['Press inclinado en Smith', 'Press en máquina convergente']
      },
      {
        id: 'press-militar-sentado',
        nombre: 'Press militar sentado con mancuernas',
        series: '3×8-10', descanso: 120,
        nivel1: 'Codos apenas adelante · subir sin trabar',
        nivel2: {
          prep: 'Respaldo casi vertical. Mancuernas a la altura de las orejas, muñecas neutras, codos apenas por delante del cuerpo.',
          ejec: 'Subí en línea recta hasta casi estirar los brazos. Bajá 2-3 seg hasta las orejas, o un toque más si el hombro va cómodo.',
          errores: 'Arquear la espalda para empujar · chocar las mancuernas arriba · bajar con dolor.',
          sentir: 'Deltoides del frente y del medio; el tríceps ayuda al final.',
          progresar: '3×10 limpias → +2 kg por mancuerna.'
        },
        nivel3: 'Hombros más grandes = silueta más ancha. Sentado aísla mejor el hombro y le saca presión a tu baja espalda.',
        variantes: ['Press en máquina de hombros', 'Press militar en Smith']
      },
      {
        id: 'vuelos-laterales-polea',
        nombre: 'Vuelos laterales en polea',
        series: '4×12-15', descanso: 75,
        nivel1: 'Tensión abajo · subir hasta la horizontal',
        nivel2: {
          prep: 'Polea bien abajo, del lado contrario al brazo que trabaja. Tomá la manija por detrás del cuerpo y inclinate apenas hacia afuera.',
          ejec: 'Subí el brazo casi recto hasta la horizontal. 1 seg arriba. Bajá 2-3 seg resistiendo: la polea mantiene tensión donde la mancuerna no — abajo.',
          errores: 'Impulso con el torso · subir por encima del hombro · encoger el trapecio.',
          sentir: 'El costado del hombro quemando desde el arranque del recorrido.',
          progresar: '4×15 limpias → siguiente ladrillo.'
        },
        nivel3: 'El deltoides lateral es EL músculo del ancho de hombros. En polea la tensión es pareja en todo el recorrido, sobre todo en la parte estirada.',
        variantes: ['Vuelos laterales con mancuernas', 'Máquina de vuelos laterales']
      },
      {
        id: 'extension-soga-cabeza',
        nombre: 'Extensión sobre la cabeza con soga',
        series: '3×10-12', descanso: 75,
        nivel1: 'Cabeza larga estirada · codos quietos',
        nivel2: {
          prep: 'De espaldas a la polea alta. Soga tomada, codos arriba al lado de las orejas, un paso adelante, torso apenas inclinado.',
          ejec: 'Estirá los brazos hacia adelante-arriba separando la soga al final. Volvé 2-3 seg dejando que el tríceps se estire bien atrás de la cabeza.',
          errores: 'Codos que se abren o viajan · rango corto atrás · hombros encogidos.',
          sentir: 'Estiramiento profundo atrás del brazo; el tríceps lleno al terminar.',
          progresar: '3×12 limpias → siguiente placa.'
        },
        nivel3: 'La cabeza larga es la parte más grande del tríceps y solo se estira con el brazo arriba. Brazos más llenos vistos de costado.',
        variantes: ['Pushdown en polea con barra recta', 'Press francés con mancuerna']
      },
      {
        id: 'curl-katana',
        nombre: 'Curl katana',
        series: '2×12 c/b', descanso: 60,
        nivel1: 'Brazo atrás del cuerpo · bíceps estirado',
        nivel2: {
          prep: 'Polea baja detrás tuyo. Tomá la manija con el brazo extendido por detrás del cuerpo, como desenvainando.',
          ejec: 'Curl llevando la mano al hombro sin que el codo viaje adelante. Bajá 2-3 seg hasta estirar del todo atrás.',
          errores: 'Codo que se va adelante · balanceo · cortar el estiramiento final.',
          sentir: 'El bíceps estirado abajo: ahí está el estímulo. Pump rápido.',
          progresar: '2×12 limpias por brazo → +ladrillo.'
        },
        nivel3: 'El curl con el bíceps en posición estirada genera más crecimiento que el curl clásico. Cierra el día sin robarle energía a lo pesado.',
        variantes: ['Curl inclinado con mancuernas', 'Curl bayesian en polea']
      },
      {
        id: 'abdominales-colgado',
        nombre: 'Abdominales colgado (o crunch en polea)',
        series: '3×12-15', descanso: 60,
        nivel1: 'Redondear la espalda · sin balanceo',
        nivel2: {
          prep: 'Colgado: agarre firme, hombros activos. En polea: soga al cuello, de rodillas.',
          ejec: 'Subí las rodillas (o bajá los codos) REDONDEANDO la baja espalda, no solo levantando las piernas. Bajá 2 seg controlado.',
          errores: 'Balancearse · mover solo la cadera sin curvar la columna · tirar con los brazos en polea.',
          sentir: 'El abdominal apretado como un puño. Nada en la baja espalda.',
          progresar: '3×15 estrictas → agregá peso (tobillera o placa).'
        },
        nivel3: 'El abdominal es un músculo más: crece con carga y rango, no con cientos de repeticiones. Se construye ahora aunque la grasa lo tape todavía.',
        variantes: ['Crunch en polea de rodillas', 'Elevaciones de rodillas en banco']
      }
    ],
    bonus: {
      id: 'cruces-polea',
      nombre: 'Cruces en polea media',
      series: '2×12',
      nivel1: 'Bonus opcional · pecho estirado atrás, cruzar al frente'
    }
  },

  'gym-tiron': {
    nombre: 'Tirón',
    dia: 'Martes',
    cinta: 'Cinta 15 min · pendiente 8-10 · velocidad 5-5,5',
    cintaMinima: 'Cinta 10 min',
    ejercicios: [
      {
        id: 'jalon-ancho',
        nombre: 'Jalón al pecho agarre ancho',
        series: '4×8-10', descanso: 120,
        nivel1: 'Estirada completa arriba · barra al pecho alto',
        nivel2: {
          prep: 'Apoyo de rodillas ajustado. Agarre ancho prono. Brazos estirados, pecho alto, inclinación 10-15° fija.',
          ejec: 'Iniciá bajando los hombros ("omóplatos a los bolsillos"), después los codos hacia el piso. Barra a la parte ALTA del pecho. Subí resistiendo 2-3 seg hasta estirar entero y dejá que la barra te estire la espalda arriba.',
          errores: 'Hamacarse · iniciar con los brazos · rango corto arriba · barra al abdomen.',
          sentir: 'Dorsales cerrando abajo; los bíceps ayudan, no llevan. Al día siguiente: espalda, no brazos.',
          progresar: '4×10 limpias → +2-3 kg.'
        },
        nivel3: 'El jalón ancho construye el ANCHO de la espalda. La estirada completa arriba es la parte que más paga: no la regales.',
        variantes: ['Jalón agarre estrecho supino', 'Dominadas asistidas']
      },
      {
        id: 'remo-maquina',
        nombre: 'Remo en máquina pecho apoyado',
        series: '4×10', descanso: 120,
        nivel1: 'Codos atrás pegados · apretar omóplatos',
        nivel2: {
          prep: 'Pecho firme contra el apoyo. Agarre neutro o prono. Brazos estirados del todo al arrancar.',
          ejec: 'Llevá los codos atrás pegados al cuerpo, apretá 1 seg juntando los omóplatos, volvé 2-3 seg hasta estirar y dejá que el peso te alargue la espalda.',
          errores: 'Despegar el pecho del apoyo · encoger los hombros · medio rango adelante.',
          sentir: 'Espalda media, entre los omóplatos. Que el agarre se canse es normal.',
          progresar: '4×10 limpias → siguiente placa.'
        },
        nivel3: 'El remo da el GROSOR de la espalda y sostiene tu postura de oficina. El apoyo al pecho saca a la baja espalda de la ecuación.',
        variantes: ['Remo sentado en polea baja', 'Remo en máquina agarre ancho']
      },
      {
        id: 'face-pulls',
        nombre: 'Face pulls con soga',
        series: '3×15', descanso: 60,
        nivel1: 'Soga a la cara · codos altos',
        nivel2: {
          prep: 'Polea a la altura de la cara, soga. Un paso atrás, brazos estirados.',
          ejec: 'Tirá la soga hacia la cara separando las puntas, codos altos. Terminá con las manos al costado de las orejas, como sacando pecho. Volvé lento.',
          errores: 'Demasiado peso · tirar a la garganta con codos bajos · irse con el torso hacia atrás.',
          sentir: 'Parte trasera del hombro y entre los omóplatos.',
          progresar: 'Cuando 3×15 salgan fáciles → +medio ladrillo. Acá manda la técnica, no el peso.'
        },
        nivel3: 'El antídoto directo de tus 8 horas de compu: deltoides posterior y rotadores. Hombros que van atrás = mejor postura y menos dolores de cabeza.',
        variantes: ['Peck deck invertida', 'Vuelos posteriores con mancuernas']
      },
      {
        id: 'peck-deck-invertida',
        nombre: 'Peck deck invertida',
        series: '3×15', descanso: 60,
        nivel1: 'Abrir hacia atrás · brazos casi rectos',
        nivel2: {
          prep: 'Sentado de frente al respaldo. Manijas hacia atrás, brazos casi rectos a la altura de los hombros.',
          ejec: 'Abrí hacia atrás como abrazando al revés. Apretá 1 seg atrás. Volvé 2-3 seg sin que las placas se apoyen.',
          errores: 'Doblar los codos y convertirlo en remo · impulso · rango corto atrás.',
          sentir: 'Deltoides posterior quemando; la espalda alta despierta.',
          progresar: '3×15 limpias → siguiente placa.'
        },
        nivel3: 'El deltoides posterior es el músculo más olvidado del gym y el que más necesitás: equilibra el hombro y lo empuja hacia atrás.',
        variantes: ['Face pulls', 'Vuelos posteriores inclinado']
      },
      {
        id: 'curl-polea-barra',
        nombre: 'Curl en polea con barra (paso atrás)',
        series: '3×10-12', descanso: 75,
        nivel1: 'Un paso atrás · tensión hasta abajo',
        nivel2: {
          prep: 'Barra recta o W en la polea baja. Un paso atrás: los brazos quedan apenas detrás del torso, con tensión desde el arranque.',
          ejec: 'Curl completo sin mover los codos. Bajá 2-3 seg hasta estirar del todo.',
          errores: 'Codos que suben · hamacarse · soltar la bajada.',
          sentir: 'Tensión constante en todo el recorrido; pump inmediato.',
          progresar: '3×12 limpias → +ladrillo.'
        },
        nivel3: 'La polea no tiene puntos muertos como la barra libre: el bíceps trabaja hasta abajo. El paso atrás suma estiramiento.',
        variantes: ['Curl con barra W libre', 'Curl bayesian en polea']
      },
      {
        id: 'curl-martillo',
        nombre: 'Curl martillo',
        series: '2×12', descanso: 60,
        nivel1: 'Pulgares arriba · codos quietos',
        nivel2: {
          prep: 'Mancuernas con agarre neutro, o soga en polea baja: son equivalentes, usá la que esté libre.',
          ejec: 'Curl con los pulgares arriba, codos quietos. Bajada lenta y completa.',
          errores: 'Balanceo · medio rango.',
          sentir: 'El costado del brazo (braquial) y el antebrazo.',
          progresar: '2×12 limpias → +2 kg.'
        },
        nivel3: 'El braquial empuja al bíceps desde abajo y ensancha el brazo visto de frente. El agarre neutro también carga antebrazos.',
        variantes: ['Curl martillo con soga en polea', 'Curl inverso con barra']
      }
    ],
    bonus: {
      id: 'encogimientos',
      nombre: 'Encogimientos con mancuernas',
      series: '3×12',
      nivel1: 'Bonus opcional · pausa de 1 seg arriba'
    }
  },

  'gym-mixto': {
    nombre: 'Hombros y brazos',
    dia: 'Jueves',
    cinta: 'Cinta 15 min · pendiente 8-10 · velocidad 5-5,5',
    cintaMinima: 'Cinta 10 min',
    ejercicios: [
      {
        id: 'press-militar-barra',
        nombre: 'Press militar con barra de pie',
        series: '4×6-8', descanso: 120,
        nivel1: 'El pesado de la semana · cuerpo rígido',
        nivel2: {
          prep: 'Barra a la altura de las clavículas en el rack. Agarre apenas más ancho que los hombros, codos abajo y adelante. Glúteos y abdomen APRETADOS: sos una columna.',
          ejec: 'Empujá la barra en línea recta, metiendo la cabeza adelante al final. Bajá 2-3 seg hasta las clavículas.',
          errores: 'Arquear la baja espalda · empujar la barra hacia adelante · medio rango arriba.',
          sentir: 'Hombros al límite; el abdomen trabaja de estabilizador gratis.',
          progresar: '4×8 limpias → +2,5 kg. Es tu levantamiento de fuerza: que suba de a poco todo el año.'
        },
        nivel3: 'El press de pie es el constructor de hombros más completo que existe y tu medidor de progreso general. Por eso va primero y descansado.',
        variantes: ['Press militar sentado con barra', 'Press de pie con mancuernas']
      },
      {
        id: 'jalon-supino',
        nombre: 'Jalón agarre estrecho supino',
        series: '4×8-10', descanso: 120,
        nivel1: 'Omóplatos a los bolsillos · barra al pecho alto',
        nivel2: {
          prep: 'Apoyo de rodillas ajustado. Agarre supino al ancho de hombros. Brazos estirados, pecho alto, inclinación 10-15° fija.',
          ejec: 'Iniciá bajando los hombros ("omóplatos a los bolsillos"), después los codos pegados apuntando al piso. Barra al pecho ALTO, 1-2 seg. Pausa de medio segundo apretando la espalda. Subí resistiendo 2-3 seg, estirá los brazos completos y dejá que la barra estire la espalda al final.',
          errores: 'Hamacarse · iniciar con los brazos (arden solo los bíceps) · rango corto arriba · barra al abdomen.',
          sentir: 'Dorsales cerrando abajo; los bíceps ayudan, no llevan. Al día siguiente: dorsales, no brazos.',
          progresar: '4×10 limpias → +2-3 kg.'
        },
        nivel3: 'El agarre supino mete más bíceps y deja trabajar el dorsal en su recorrido más fuerte. Espalda + brazos en un solo movimiento: perfecto para el día mixto.',
        variantes: ['Jalón al pecho agarre ancho', 'Dominadas supinas asistidas']
      },
      {
        id: 'press-inclinado-smith',
        nombre: 'Press inclinado en Smith',
        series: '3×10', descanso: 90,
        nivel1: 'Trayectoria fija · bajada honda',
        nivel2: {
          prep: 'Banco a 30° centrado bajo la barra. Agarre parejo, omóplatos atrás y abajo.',
          ejec: 'Bajá 2-3 seg al pecho alto, bien hondo. Pausa corta. Subí sin trabar los codos.',
          errores: 'Rebotar en el pecho · rango corto · banco descentrado.',
          sentir: 'Pecho superior, con menos esfuerzo de equilibrio que con mancuernas.',
          progresar: '3×10 limpias → +2,5 kg.'
        },
        nivel3: 'El Smith fija la trayectoria: menos estabilización y más estímulo directo justo cuando ya venís cansado del press pesado.',
        variantes: ['Press inclinado con mancuernas', 'Press en máquina convergente']
      },
      {
        id: 'vuelos-laterales-mancuernas',
        nombre: 'Vuelos laterales con mancuernas',
        series: '3×12-15', descanso: 60,
        nivel1: 'Hasta la horizontal · sin encoger trapecios',
        nivel2: {
          prep: 'De pie, leve inclinación adelante, mancuernas a los costados con codos apenas doblados.',
          ejec: 'Subí hasta la horizontal como sirviendo agua de dos jarras. Bajá 2-3 seg resistiendo.',
          errores: 'Encoger los trapecios · impulso con las piernas · subir por encima del hombro.',
          sentir: 'El costado del hombro. Si lo sentís en el cuello, bajá el peso.',
          progresar: '3×15 limpias → +2 kg.'
        },
        nivel3: 'Segunda dosis semanal de deltoides lateral, la clave del ancho. Con mancuernas cuesta más abajo y en polea arriba: por eso van las dos en la semana.',
        variantes: ['Vuelos laterales en polea', 'Máquina de vuelos laterales']
      },
      {
        id: 'curl-eleccion',
        nombre: 'Curl a elección (rota: concentrado / spider / alternado)',
        series: '3×12', descanso: 60,
        nivel1: 'El que toque hoy · codo quieto siempre',
        nivel2: {
          prep: 'Elegí el de la rotación: concentrado (codo en el muslo), spider (pecho en banco inclinado) o alternado de pie.',
          ejec: 'Vale para los tres: codo quieto, subida controlada, bajada 2-3 seg hasta estirar del todo.',
          errores: 'Hamacarse · codo que viaja · cortar la bajada.',
          sentir: 'El bíceps aislado, sin ayuda del cuerpo.',
          progresar: '3×12 limpias en la variante del día → +2 kg.'
        },
        nivel3: 'Rotar variantes reparte el estímulo en distintos largos del músculo y no aburre. La app te sugiere cuál toca.',
        variantes: ['Curl concentrado', 'Curl spider', 'Curl alternado de pie']
      },
      {
        id: 'squeeze-press',
        nombre: 'Press cerrado con mancuernas (squeeze press)',
        series: '3×10', descanso: 60,
        nivel1: 'Apretar las mancuernas entre sí TODO el tiempo',
        nivel2: {
          prep: 'Acostado en banco plano. Mancuernas juntas sobre el pecho, apretadas una contra otra.',
          ejec: 'Bajá al pecho sin dejar de apretarlas entre sí, subí igual. La presión constante es el ejercicio.',
          errores: 'Dejar de apretar · rebotar · abrir los codos.',
          sentir: 'El medio del pecho y los tríceps, con un pump raro y bueno.',
          progresar: '3×10 limpias → +2 kg. Si no te convence, reemplazo directo: pushdown en polea con barra recta.'
        },
        nivel3: 'La presión constante junta pecho interno y tríceps en un solo cierre. Está a prueba: vos decidís si queda.',
        variantes: ['Pushdown en polea con barra recta', 'Fondos en banco']
      }
    ],
    bonus: {
      id: 'plancha',
      nombre: 'Plancha',
      series: '3×40 seg',
      nivel1: 'Bonus opcional · cuerpo en línea, glúteos apretados'
    }
  },

  'gym-pierna': {
    nombre: 'Pierna express',
    dia: 'Sábado (opcional)',
    cinta: 'Cinta 20 min · pendiente 6-8',
    cintaMinima: 'Cinta 10 min',
    ejercicios: [
      {
        id: 'prensa-45',
        nombre: 'Prensa 45°',
        series: '4×10-12', descanso: 120,
        nivel1: 'Baja espalda pegada · empujar con talones',
        nivel2: {
          prep: 'Pies al ancho de hombros, a media altura de la plataforma. Baja espalda PEGADA al respaldo, manos en las agarraderas.',
          ejec: 'Bajá 2-3 seg hasta donde la cadera no se despegue. Empujá con los talones sin trabar las rodillas arriba.',
          errores: 'Despegar la cadera del respaldo · medio rango · trabar las rodillas.',
          sentir: 'Cuádriceps y glúteos. Nada en la baja espalda.',
          progresar: '4×12 limpias → +10 kg.'
        },
        nivel3: 'Todo el tren inferior sin cargar la columna. Las piernas acompañan al torso: en Brasil se nota el conjunto.',
        variantes: ['Hack squat', 'Sentadilla en Smith']
      },
      {
        id: 'curl-femoral',
        nombre: 'Curl femoral sentado',
        series: '3×12', descanso: 90,
        nivel1: 'Sentado mejor que acostado · estirar arriba',
        nivel2: {
          prep: 'Espalda firme al respaldo, rodillas alineadas con el eje de la máquina, almohadilla sobre los tobillos.',
          ejec: 'Flexioná hacia abajo, apretá 1 seg, volvé 2-3 seg hasta estirar las piernas del todo.',
          errores: 'Levantar la cadera del asiento · rango corto arriba.',
          sentir: 'La parte trasera del muslo, sobre todo al volver estirando.',
          progresar: '3×12 limpias → siguiente placa.'
        },
        nivel3: 'Sentado, el isquio trabaja más estirado que acostado — y estirado crece más. Además protege tus rodillas. Si está ocupada, acostado va bien.',
        variantes: ['Curl femoral acostado', 'Curl femoral de pie unilateral']
      },
      {
        id: 'hiperextension-45',
        nombre: 'Hiperextensión 45°',
        series: '3×12', descanso: 90,
        nivel1: 'Subir con glúteos · no hiperextender',
        nivel2: {
          prep: 'Almohadilla en la cadera (no en el abdomen). Brazos cruzados al pecho.',
          ejec: 'Bajá controlado redondeando apenas. Subí hasta la línea del cuerpo APRETANDO los glúteos. Ni un grado más.',
          errores: 'Subir de más arqueando · impulso · sentirlo solo en la baja espalda.',
          sentir: 'Glúteos e isquios haciendo el trabajo; la baja espalda solo acompaña.',
          progresar: '3×12 limpias → disco abrazado al pecho.'
        },
        nivel3: 'Glúteo fuerte = base de la postura y de toda la cadena que tu silla apaga 8 horas por día.',
        variantes: ['Pull-through en polea', 'Puente de glúteo con mancuerna']
      },
      {
        id: 'gemelos-pie',
        nombre: 'Gemelos de pie',
        series: '3×15', descanso: 60,
        nivel1: 'Pausa de 1 seg ABAJO · estirar todo',
        nivel2: {
          prep: 'Punta del pie en el borde del escalón o la máquina, talón colgando libre.',
          ejec: 'Bajá 2 seg hasta el estiramiento completo y PAUSÁ 1 seg abajo. Subí a la punta con pausa arriba.',
          errores: 'Rebotar abajo · rango corto · apurar las reps.',
          sentir: 'Estiramiento profundo en la pantorrilla abajo; quemazón al final.',
          progresar: '3×15 con las dos pausas → +placa.'
        },
        nivel3: 'El gemelo responde al estiramiento con pausa; el rebote no construye nada. Es corto pero tiene que ser estricto.',
        variantes: ['Gemelos sentado', 'Gemelos en prensa']
      },
      {
        id: 'hip-thrust',
        nombre: 'Hip thrust en máquina',
        series: '3×12', descanso: 90, opcional: true,
        nivel1: 'OPCIONAL · cadera alta, mentón al pecho',
        nivel2: {
          prep: 'Banco bajo los omóplatos, almohadilla en la cadera, pies al ancho de hombros.',
          ejec: 'Empujá con los talones hasta que la cadera quede en línea con el torso. Mentón al pecho, apretá los glúteos 1 seg arriba.',
          errores: 'Hiperextender la espalda arriba · rango corto · empujar con la punta de los pies.',
          sentir: 'Glúteos puros. Si lo sentís en la lumbar, bajá el rango.',
          progresar: '3×12 limpias → +5 kg.'
        },
        nivel3: 'Está a prueba: probalo un par de sábados y decidís si queda. Si no convence, el puente de glúteo con mancuerna hace el mismo trabajo.',
        variantes: ['Puente de glúteo con mancuerna']
      }
    ],
    bonus: null
  }
};

// Versión mínima de cualquier día: primeros 3 ejercicios + cinta 10 min (SISTEMA.md §4.1).
const GYM_MINIMA_CANTIDAD = 3;
