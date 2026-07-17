// NORTE · contenido GYM v2 — técnica profesional reescrita de raíz (16/07/2026).
// Esquema por ejercicio: setup (montaje exacto) · pasos (ejecución numerada con respiración) ·
// claves (los 3 recordatorios de oro) · errores (con su corrección) · dudas (las del banco, respondidas) ·
// sentir · progresar · porque · variantes. Nada acá toca el store ni el DOM.

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
        setup: [
          'Banco a 30° (un pliegue arriba del plano; más de 45° ya es hombro)',
          'Mancuernas apoyadas verticales sobre los muslos, sentate con ellas',
          'Impulso: rodilla + acostarte en un solo movimiento, una mancuerna por vez',
          'Omóplatos: juntalos y bajalos ANTES de la primera rep — quedan fijos toda la serie',
          'Pies firmes en el piso, leve arco natural en la zona lumbar'
        ],
        pasos: [
          { t: 'Posición inicial', d: 'Mancuernas arriba del pecho (no de la cara), brazos estirados sin trabar los codos, muñecas rectas alineadas con el antebrazo.', resp: '—' },
          { t: 'Bajada', d: 'Bajá en 2-3 segundos abriendo los codos a 45° del torso — ni pegados ni en cruz. Las mancuernas viajan hacia los costados del pecho, a la altura de las tetillas.', resp: 'Inhalá' },
          { t: 'El fondo', d: 'Llegá HONDO: las mancuernas a la altura del pecho o apenas más abajo, hasta sentir el estiramiento en el pectoral. Pausa de medio segundo, sin rebotar.', resp: 'Retené' },
          { t: 'Subida', d: 'Empujá fuerte en leve arco hacia arriba y apenas adentro. Frená antes de que las mancuernas se toquen y sin trabar los codos: la tensión no se suelta arriba.', resp: 'Exhalá' }
        ],
        claves: [
          'El estiramiento de abajo ES el ejercicio: si no lo sentís, no contó',
          'Codos a 45° — la posición que protege el hombro y carga el pecho',
          'Omóplatos clavados al banco de la primera a la última rep'
        ],
        errores: [
          { e: 'Cortar la bajada a mitad de camino', fix: 'Bajá 2 kg y llegá al fondo. Media rep con más peso construye menos que la rep completa.' },
          { e: 'Rebotar en el pecho para ayudarte a subir', fix: 'Pausa de medio segundo abajo. Si sin rebote no sale, el peso está de más.' },
          { e: 'Codos abiertos en cruz (90°)', fix: 'Pensá "codos hacia los bolsillos traseros". El hombro te lo agradece a los 40.' }
        ],
        sentir: 'Estiramiento claro en el pecho en cada bajada, y el pecho superior lleno al terminar. Al día siguiente: pectorales. Si te duelen los hombros adelante, revisá el ángulo de codos.',
        progresar: 'Cuando las 4 series salgan de 10 con la pausa abajo → +2 kg por mancuerna la próxima sesión. Volvés a 8 reps y reconstruís hasta 10.',
        dudas: [
          { q: '¿Hasta dónde bajo si me tira el hombro?', a: 'Hasta donde el estiramiento sea de MÚSCULO (pecho) y no de articulación. Si pincha adelante del hombro, subí el fondo 3-4 cm y revisá que los omóplatos sigan atrás.' },
          { q: '¿Las muñecas dobladas hacia atrás está mal?', a: 'Sí: la mancuerna debe quedar sobre el hueso del antebrazo, muñeca neutra. Si se te dobla, es señal de peso excesivo.' },
          { q: '¿Cómo suelto las mancuernas al terminar?', a: 'Rodillas arriba, mancuernas al pecho y usá el envión para sentarte. Nunca las tires desde arriba con los brazos estirados.' }
        ],
        porque: 'Prioriza el pectoral superior — tu zona floja visible — y la posición estirada bajo carga es el estímulo #1 de hipertrofia según la evidencia actual. Por eso este ejercicio abre tu semana.',
        variantes: ['Press inclinado en Smith', 'Press en máquina convergente']
      },
      {
        id: 'press-militar-sentado',
        nombre: 'Press militar sentado con mancuernas',
        series: '3×8-10', descanso: 120,
        nivel1: 'Codos apenas adelante · subir sin trabar',
        setup: [
          'Respaldo casi vertical (80-85°), espalda entera apoyada',
          'Mancuernas a los muslos → rodillazo para subirlas a los hombros, de a una',
          'Posición inicial: mancuernas a la altura de las orejas, palmas al frente',
          'Codos apenas ADELANTE del cuerpo (no en cruz): se ven de reojo',
          'Abdomen firme: la espalda baja no se despega del respaldo'
        ],
        pasos: [
          { t: 'Subida', d: 'Empujá en línea casi recta, apenas convergiendo arriba. Los brazos llegan a casi estirados — el codo nunca traba con un golpe.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Un instante con las mancuernas sobre la cabeza (no chocan entre sí). Los hombros empujan, el cuello queda largo y relajado.', resp: '—' },
          { t: 'Bajada', d: 'Resistí 2-3 segundos hasta la altura de las orejas. Si tu hombro va cómodo, un par de cm más abajo: más rango, más músculo.', resp: 'Inhalá' },
          { t: 'Abajo', d: 'Pausa corta SIN apoyar los codos en nada ni soltar la tensión. Y arrancás la siguiente.', resp: '—' }
        ],
        claves: [
          'La espalda baja pegada al respaldo — si se arquea, el peso lo levanta la lumbar',
          'Codos adelante del cuerpo: es la posición fuerte y segura del hombro',
          'Rango completo abajo: orejas o más, no "medio press"'
        ],
        errores: [
          { e: 'Arquear la espalda despegándola del respaldo', fix: 'Bajá el peso y apretá el abdomen como si te fueran a golpear. El press es de hombros, no de lumbar.' },
          { e: 'Chocar las mancuernas arriba en cada rep', fix: 'Terminá con 10 cm entre ellas. El choque descarga la tensión y castiga las muñecas.' },
          { e: 'Bajar solo hasta la frente', fix: 'A las orejas mínimo. Si no llegás, es peso de ego: bajalo.' }
        ],
        sentir: 'Los deltoides del frente y del medio trabajando desde la primera rep; el tríceps entra al final de la subida. El cuello NO debería cansarse — si pasa, lo estás metiendo.',
        progresar: '3×10 limpias con el rango completo → +2 kg por mancuerna. El press militar progresa lento y eso es normal: cada kilo acá vale el doble.',
        dudas: [
          { q: '¿Palmas al frente o enfrentadas?', a: 'Al frente es el estándar. Si el hombro molesta, girá a 45° (semi-neutro): mismo músculo, articulación más cómoda.' },
          { q: '¿Por qué sentado y no de pie?', a: 'Sentado aísla el hombro y saca a tu lumbar de la ecuación después del press inclinado. El de pie ya lo tenés el jueves con barra.' }
        ],
        porque: 'Hombros más grandes = silueta más ancha de frente y de perfil. Es el segundo básico del día porque todavía tenés fuerza fresca para cargarlo bien.',
        variantes: ['Press en máquina de hombros', 'Press militar en Smith']
      },
      {
        id: 'vuelos-laterales-polea',
        nombre: 'Vuelos laterales en polea',
        series: '4×12-15', descanso: 75,
        nivel1: 'Tensión abajo · subir hasta la horizontal',
        setup: [
          'Polea en la posición MÁS BAJA, manija simple',
          'Parate de costado a la máquina: el cable cruza por delante del cuerpo',
          'Agarrá la manija con la mano de AFUERA, por detrás de tu cadera',
          'Un paso para alejarte: el cable queda tenso ya en el arranque',
          'Mano libre agarrada a la torre, leve inclinación hacia afuera'
        ],
        pasos: [
          { t: 'Subida', d: 'Levantá el brazo hacia el costado con el codo apenas doblado y FIJO, como sirviendo agua de una jarra. El codo sube primero, la mano lo sigue.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Hasta la horizontal — el codo a la altura del hombro, ni un grado más. Un segundo de pausa.', resp: '—' },
          { t: 'Bajada', d: 'Resistí 2-3 segundos el viaje de vuelta. La polea sigue tirando abajo: no dejes que el brazo caiga solo.', resp: 'Inhalá' },
          { t: 'Abajo', d: 'La mano termina detrás de la cadera, el deltoides estirado y TODAVÍA con tensión. De ahí arranca la siguiente.', resp: '—' }
        ],
        claves: [
          'La polea existe por la tensión de ABAJO: no la regales soltando el final',
          'Codo fijo todo el recorrido — si se dobla y estira, es un press disfrazado',
          'Hombro lejos de la oreja: el trapecio no juega este partido'
        ],
        errores: [
          { e: 'Subir por encima de la horizontal', fix: 'Ahí el trapecio le roba el trabajo al deltoides. Horizontal y pausa: más quemazón con menos peso.' },
          { e: 'Dar envión con el torso', fix: 'Pegá la cadera a la torre. Si necesitás hamacarte, sacale un ladrillo.' },
          { e: 'Muñeca más alta que el codo ("servir con la mano")', fix: 'El CODO manda la subida. Pensá: codo alto, mano relajada.' }
        ],
        sentir: 'El costado del hombro quemando desde la mitad de la serie. Es un ejercicio de sensación, no de carga: 12 reps sentidas valen más que 15 con impulso.',
        progresar: 'Cuando 4×15 salgan estrictas → medio ladrillo o un ladrillo. Acá se progresa LENTO y está perfecto así.',
        dudas: [
          { q: '¿Cable por delante o por detrás del cuerpo?', a: 'Por detrás de la cadera estira más el deltoides abajo — esa es tu versión. Si la máquina no da el espacio, por delante también sirve.' },
          { q: '¿Los dos brazos juntos con dos poleas?', a: 'Podés, pero de a uno concentrás mejor y usás la mano libre de apoyo. Uno por vez, alternando sin descanso extra.' }
        ],
        porque: 'El deltoides lateral es EL músculo del ancho de hombros, y en polea la tensión es pareja en todo el recorrido — sobre todo abajo, donde las mancuernas no ofrecen nada.',
        variantes: ['Vuelos laterales con mancuernas', 'Máquina de vuelos laterales']
      },
      {
        id: 'extension-soga-cabeza',
        nombre: 'Extensión sobre la cabeza con soga',
        series: '3×10-12', descanso: 75,
        nivel1: 'Cabeza larga estirada · codos quietos',
        setup: [
          'Polea ALTA con soga',
          'Agarrá la soga y date vuelta: quedás de espaldas a la máquina',
          'Soga por encima del hombro, un paso adelante en posición de estocada corta',
          'Torso inclinado 20-30° adelante, codos apuntando al frente al lado de las orejas',
          'Posición inicial: codos doblados, la soga tira hacia atrás de tu cabeza'
        ],
        pasos: [
          { t: 'Extensión', d: 'Estirá los brazos hacia adelante-arriba SOLO moviendo los antebrazos. Al final del recorrido, separá las puntas de la soga.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Brazos estirados, tríceps contraído un segundo. Los codos no viajaron: siguen al lado de las orejas.', resp: '—' },
          { t: 'Vuelta', d: 'Volvé en 2-3 segundos dejando que la soga viaje bien atrás de la cabeza. Acá el tríceps se estira — es la parte que más construye.', resp: 'Inhalá' },
          { t: 'Atrás', d: 'Sentí el estiramiento profundo detrás del brazo medio segundo. Sin apoyar ni descansar: arrancá la siguiente.', resp: '—' }
        ],
        claves: [
          'Los codos son bisagras clavadas: si viajan, es un press',
          'El estiramiento de atrás es el 70% del ejercicio — no lo apures',
          'Torso inclinado y firme: no se hamaca para ayudar'
        ],
        errores: [
          { e: 'Codos que se abren hacia los costados', fix: 'Bajá un ladrillo y pensá "codos angostos apuntando adelante". Abiertos, el hombro roba el trabajo.' },
          { e: 'Rango corto atrás (miedo a la posición)', fix: 'La soga tiene que perderse detrás de tu cabeza. Empezá liviano hasta que la posición sea cómoda.' },
          { e: 'Empujar con el cuerpo hacia adelante', fix: 'Estocada firme y cadera quieta. El movimiento vive solo del codo para abajo.' }
        ],
        sentir: 'Estiramiento profundo detrás del brazo en cada vuelta y el tríceps lleno al terminar la serie. Mañana: la parte de atrás del brazo, cerca de la axila (cabeza larga).',
        progresar: '3×12 con el estiramiento completo → siguiente placa. Si la placa que sigue es mucha, sumá una rep por sesión hasta 3×14 y recién ahí subí.',
        dudas: [
          { q: '¿Por qué sobre la cabeza y no el pushdown clásico?', a: 'La cabeza larga del tríceps (la más grande) solo se estira con el brazo arriba. El pushdown la trabaja corta; este la trabaja donde crece.' },
          { q: '¿Duelen los codos, qué hago?', a: 'Calentá con una serie al 50% y evitá trabar los brazos con golpe al final. Si sigue, cambiá a pushdown unos días — sin drama.' }
        ],
        porque: 'Brazos más llenos vistos de costado: la cabeza larga es la que da esa densidad. Complementa el trabajo indirecto que ya hicieron los presses.',
        variantes: ['Pushdown en polea con barra recta', 'Press francés con mancuerna a dos manos']
      },
      {
        id: 'curl-katana',
        nombre: 'Curl katana',
        series: '2×12 c/b', descanso: 60,
        nivel1: 'Brazo atrás del cuerpo · bíceps estirado',
        setup: [
          'Polea BAJA, manija simple',
          'Parate de espaldas a la máquina, un paso adelante',
          'Agarrá la manija con el brazo extendido DETRÁS del cuerpo, palma al frente',
          'El cable tira hacia atrás: el bíceps ya arranca estirado',
          'Codo pegado al costado — tu punto fijo de todo el ejercicio'
        ],
        pasos: [
          { t: 'Curl', d: 'Llevá la mano hacia el hombro doblando SOLO el codo, como desenvainando una katana. El codo no viaja adelante.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Apretá el bíceps un segundo. La palma quedó mirando tu hombro.', resp: '—' },
          { t: 'Bajada', d: 'Resistí 2-3 segundos el viaje de vuelta hasta el brazo completamente extendido atrás.', resp: 'Inhalá' },
          { t: 'Atrás', d: 'Medio segundo sintiendo el bíceps estirado con tensión. Esa posición es ORO: no la saltees.', resp: '—' }
        ],
        claves: [
          'El estiramiento de atrás es lo que hace especial a este curl',
          'Codo soldado al costado: si viaja adelante, es otro ejercicio',
          'Liviano y estricto: acá el peso grande no existe'
        ],
        errores: [
          { e: 'Dar el paso muy corto (sin estiramiento atrás)', fix: 'Alejate hasta que el brazo extendido quede claramente detrás del torso con el cable tenso.' },
          { e: 'Girar el torso para ayudar', fix: 'Hombros cuadrados al frente. El cuerpo es una estatua; el antebrazo, lo único vivo.' },
          { e: 'Cortar la extensión final por cansancio', fix: 'Preferí 10 reps con brazo 100% extendido que 12 a medias.' }
        ],
        sentir: 'Tirantez en el bíceps en cada vuelta atrás y un pump inmediato — con este ejercicio 2 series alcanzan. Mañana: el bíceps cerca del codo.',
        progresar: '2×12 estrictas por brazo → +ladrillo (o medio si el salto es grande).',
        dudas: [
          { q: '¿Por qué "katana"?', a: 'Por el gesto: la mano viaja de atrás de la cadera al hombro, como desenvainar. El nombre viral es nuevo; la biomecánica (curl con bíceps estirado) es vieja y buena.' },
          { q: '¿Va antes o después del tríceps?', a: 'Después. El día de empuje el bíceps es el postre: 2 series intensas y listo.' }
        ],
        porque: 'El curl en posición estirada genera más crecimiento que el curl clásico parado. Cierra el día de empuje sin robarle energía a lo importante.',
        variantes: ['Curl inclinado con mancuernas', 'Curl bayesian en polea']
      },
      {
        id: 'abdominales-colgado',
        nombre: 'Abdominales colgado (o crunch en polea)',
        series: '3×12-15', descanso: 60,
        nivel1: 'Redondear la espalda · sin balanceo',
        setup: [
          'Colgado: agarre al ancho de hombros, hombros ACTIVOS (no orejas)',
          'Alternativa igual de buena: crunch en polea alta de rodillas, soga a los costados de la cabeza',
          'En polea: rodillas a un paso de la máquina, cadera arriba y quieta',
          'Elegí UNA versión por día; rotarlas entre sesiones está perfecto'
        ],
        pasos: [
          { t: 'Subida', d: 'Colgado: llevá las rodillas al pecho REDONDEANDO la zona lumbar al final — la pelvis rota hacia arriba. En polea: llevá los codos hacia las rodillas curvando la columna, no bajando el torso recto.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Un segundo con el abdominal completamente contraído, como un puño cerrado.', resp: '—' },
          { t: 'Bajada', d: 'Volvé en 2 segundos controlados hasta la posición larga, sin perder la tensión del todo.', resp: 'Inhalá' },
          { t: 'Abajo', d: 'Cuerpo largo (o torso alto en polea), medio segundo quieto para matar el balanceo, y subís de nuevo.', resp: '—' }
        ],
        claves: [
          'La columna se CURVA — sin curva es un ejercicio de cadera, no de abdominales',
          'Cada rep arranca de cero: el balanceo es trampa gratis',
          'Exhalá fuerte al contraer: el abdominal aprieta más vacío de aire'
        ],
        errores: [
          { e: 'Subir las piernas rectas con la espalda plana', fix: 'Eso es flexor de cadera. Rodillas dobladas y pensá "llevar la pelvis a las costillas".' },
          { e: 'Usar el envión del balanceo colgado', fix: 'Pausa completa abajo entre reps. Menos reps estrictas > más reps de péndulo.' },
          { e: 'En polea: tirar con los brazos', fix: 'Los brazos solo sostienen la soga contra la cabeza. El torso baja curvándose, no empujando.' }
        ],
        sentir: 'El abdominal quemando como un puño que se cierra, especialmente abajo del ombligo colgado. NADA en la zona lumbar — si aparece, revisá la curva.',
        progresar: '3×15 estrictas → colgado: sumá pausa de 2 seg arriba. En polea: siguiente placa. El abdominal progresa con carga, como todo músculo.',
        dudas: [
          { q: '¿Colgado o polea, cuál es mejor?', a: 'El que hagas estricto. Colgado suma agarre y control; polea permite cargar más fino. Alterná y listo.' },
          { q: '¿Esto me marca la panza?', a: 'Construye el músculo de abajo; la grasa de arriba la baja el déficit + los pasos. Los dos trabajos corren en paralelo — este es tu parte del trato.' }
        ],
        porque: 'El recto abdominal crece con carga y rango como cualquier músculo — no con cientos de reps. Un core fuerte además sostiene tus presses y tu postura de oficina.',
        variantes: ['Crunch en polea de rodillas', 'Elevaciones de rodillas en banco romano']
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
        setup: [
          'Rodillera ajustada: los muslos quedan TRABADOS, no flojos',
          'Agarre prono, un palmo más ancho que los hombros de cada lado',
          'Sentate con los brazos ya estirados agarrando la barra',
          'Pecho alto, inclinación del torso 10-15° hacia atrás — y ahí se queda',
          'Mirada al frente-arriba, cuello largo'
        ],
        pasos: [
          { t: 'Inicio escapular', d: 'ANTES de doblar los codos: bajá los hombros ("omóplatos a los bolsillos"). Ese primer gesto de 5 cm activa el dorsal y ordena toda la rep.', resp: '—' },
          { t: 'Tirón', d: 'Llevá los CODOS hacia abajo y apenas atrás. La barra baja sola hacia la parte alta del pecho, a un dedo de tocarlo.', resp: 'Exhalá' },
          { t: 'Abajo', d: 'Medio segundo apretando la espalda: imaginá que querés sostener una lapicera entre los omóplatos.', resp: '—' },
          { t: 'Subida', d: 'Resistí 2-3 segundos. Estirá los brazos COMPLETOS y dejá que la barra te tire de los hombros hacia arriba al final: esa estirada del dorsal es la mitad del ejercicio.', resp: 'Inhalá' }
        ],
        claves: [
          'La rep empieza en los omóplatos, no en las manos',
          'Codos al piso: la barra es solo la consecuencia',
          'Arriba TODO estirado — el rango que casi nadie hace y más paga'
        ],
        errores: [
          { e: 'Hamacarse hacia atrás para bajar la barra', fix: 'Fijá los 10-15° de inclinación antes de arrancar. Si necesitás hamacarte, sobran placas.' },
          { e: 'Iniciar tirando con los brazos (arden solo los bíceps)', fix: 'Primer movimiento: hombros abajo con brazos rectos. Recién después doblás los codos.' },
          { e: 'Soltar la subida y cortarla a medias', fix: 'Contá "mil uno, mil dos" subiendo y terminá colgado del todo. La estirada es donde crece.' }
        ],
        sentir: 'Los dorsales cerrando abajo (como alas que se pliegan) y estirándose arriba. Los bíceps ayudan pero no lideran. Al día siguiente: espalda a los costados, no brazos.',
        progresar: '4×10 con inicio escapular limpio → +2-3 kg. Si el inicio escapular se pierde con el peso nuevo, volvé: técnica primero, siempre.',
        dudas: [
          { q: '¿Al pecho o detrás de la nuca?', a: 'Al pecho, siempre. Detrás de la nuca fuerza el hombro a una rotación que no necesita — mismo músculo, más riesgo, cero ganancia.' },
          { q: '¿Qué hago si no siento la espalda y solo brazos?', a: 'Serie liviana de 15 reps solo con el inicio escapular (brazos casi rectos). Cuando el dorsal "aparezca", volvé a tu peso. Es cuestión de 2-3 sesiones de práctica.' },
          { q: '¿Agarre con pulgar o sin pulgar?', a: 'Sin envolver el pulgar (agarre suicida arriba de la barra) ayuda a tirar con los codos y sentir menos los antebrazos. Probalo.' }
        ],
        porque: 'El jalón ancho construye el ANCHO de la espalda: los dorsales que se ven de frente y hacen la cintura más chica sin tocarla. La estirada completa arriba es tu prioridad de hipertrofia.',
        variantes: ['Jalón agarre estrecho supino', 'Dominadas asistidas']
      },
      {
        id: 'remo-maquina',
        nombre: 'Remo en máquina pecho apoyado',
        series: '4×10', descanso: 120,
        nivel1: 'Codos atrás pegados · apretar omóplatos',
        setup: [
          'Ajustá el asiento: el apoyo del pecho queda a la altura del esternón',
          'Pecho FIRME contra la almohadilla — no se despega en toda la serie',
          'Agarre neutro (palmas enfrentadas) si hay opción; prono también vale',
          'Brazos completamente estirados al arrancar, hombros sueltos hacia adelante',
          'Pies apoyados firmes, sin empujar con las piernas'
        ],
        pasos: [
          { t: 'Inicio escapular', d: 'Primer gesto: retraé los omóplatos (hombros atrás y abajo) con los brazos aún casi rectos.', resp: '—' },
          { t: 'Remo', d: 'Llevá los codos ATRÁS pegados al cuerpo, apuntando a tus bolsillos traseros. Las manos terminan a los costados del torso bajo.', resp: 'Exhalá' },
          { t: 'Atrás', d: 'Un segundo apretando: los omóplatos casi se tocan, el pecho sigue clavado en la almohadilla.', resp: '—' },
          { t: 'Vuelta', d: 'Resistí 2-3 segundos hasta los brazos largos, dejando que el peso te estire la espalda y los hombros viajen adelante al final.', resp: 'Inhalá' }
        ],
        claves: [
          'El pecho en la almohadilla es tu detector de trampa: si se despega, hay envión',
          'Codos pegados al cuerpo = espalda media; codos abiertos = otra cosa',
          'Estirada larga adelante en cada rep — el remo también tiene su "abajo"'
        ],
        errores: [
          { e: 'Despegar el pecho y tirar con la lumbar', fix: 'Bajá una placa. La almohadilla existe justamente para que la espalda baja descanse.' },
          { e: 'Encoger los hombros hacia las orejas al tirar', fix: 'Antes de cada serie: hombros atrás y ABAJO. El trapecio alto no está invitado.' },
          { e: 'Rango corto adelante (nunca estirar del todo)', fix: 'Brazos 100% largos entre reps. Esa estirada es la mitad del estímulo.' }
        ],
        sentir: 'La espalda media entre los omóplatos trabajando y "abriéndose" en cada estirada. El agarre se cansa antes que la espalda: normal, y con las semanas mejora.',
        progresar: '4×10 con pausa atrás → siguiente placa. Si la placa nueva rompe la pausa, quedate una sesión más consolidando.',
        dudas: [
          { q: '¿Agarre ancho o angosto?', a: 'Angosto/neutro con codos pegados: espalda media y dorsal bajo (tu configuración). El ancho con codos abiertos apunta más a espalda alta — ya la cubrís con face pulls y peck deck.' },
          { q: '¿Qué hago si la máquina está ocupada?', a: 'Remo sentado en polea baja con triángulo: misma mecánica, mismo pecho "imaginario" apoyado — solo que el detector de trampa sos vos.' }
        ],
        porque: 'El remo da el GROSOR de la espalda (verte fuerte de perfil) y es el ejercicio que sostiene tu postura de oficina. El apoyo al pecho lo hace seguro incluso cargando fuerte.',
        variantes: ['Remo sentado en polea baja con triángulo', 'Remo en máquina agarre ancho']
      },
      {
        id: 'face-pulls',
        nombre: 'Face pulls con soga',
        series: '3×15', descanso: 60,
        nivel1: 'Soga a la cara · codos altos',
        setup: [
          'Polea a la altura de tu CARA (ni arriba ni abajo), soga doble',
          'Agarre: pulgares hacia VOS, nudillos al frente — permite rotar bien al final',
          'Dos pasos atrás, un pie adelante para estabilidad',
          'Brazos estirados al frente, hombros sueltos',
          'Peso LIVIANO: este ejercicio se hace con placas chicas, siempre'
        ],
        pasos: [
          { t: 'Tirón', d: 'Tirá de la soga hacia tu cara separando las puntas, con los codos ALTOS a la altura de los hombros, abriéndose hacia los costados.', resp: 'Exhalá' },
          { t: 'Final doble', d: 'Las manos terminan a los costados de las orejas y ahí ROTÁS: nudillos apuntando al techo, como sacando una doble bicepteada. Un segundo.', resp: '—' },
          { t: 'Vuelta', d: 'Resistí 2 segundos el viaje de vuelta hasta los brazos largos, sin que la placa toque.', resp: 'Inhalá' }
        ],
        claves: [
          'Codos altos y anchos: si bajan, se convierte en remo',
          'La rotación final (nudillos al techo) es donde vive el ejercicio',
          'Liviano y perfecto — acá el ego no entra ni de visita'
        ],
        errores: [
          { e: 'Tirar hacia el cuello con codos bajos', fix: 'Apuntá la soga a la FRENTE y los codos a las orejas. Cambia todo.' },
          { e: 'Irse con el torso hacia atrás', fix: 'Escalón adelante firme y abdomen duro. Si el cuerpo cede, sacá placas.' },
          { e: 'Saltarse la rotación final', fix: 'Sin la rotación es medio face pull. Frená un segundo arriba en cada rep, aunque cueste.' }
        ],
        sentir: 'La parte de atrás del hombro y la zona entre los omóplatos quemando al final de cada serie. Es incómodo de sentir al principio — señal de músculo dormido despertando.',
        progresar: 'Cuando 3×15 con rotación completa salgan fáciles → +medio ladrillo o sumá una pausa de 2 seg. La técnica manda; el peso acompaña de lejos.',
        dudas: [
          { q: '¿Por qué este ejercicio "liviano" está en mi rutina?', a: 'Porque es el antídoto directo de tus 8 horas de compu: fortalece el deltoides posterior y los rotadores que la silla apaga. Hombros que van solos hacia atrás = postura + menos dolores de cabeza.' },
          { q: '¿Todos los días de tirón?', a: 'Sí, y si un día extra lo hacés liviano en casa con banda, mejor. Es de los pocos ejercicios donde más frecuencia siempre suma.' }
        ],
        porque: 'Tu seguro de hombros y tu corrector de postura en un solo movimiento. Cada press que hacés en la semana se banca mejor gracias a esto.',
        variantes: ['Peck deck invertida', 'Vuelos posteriores con mancuernas sentado']
      },
      {
        id: 'peck-deck-invertida',
        nombre: 'Peck deck invertida',
        series: '3×15', descanso: 60,
        nivel1: 'Abrir hacia atrás · brazos casi rectos',
        setup: [
          'Sentate de FRENTE al respaldo (al revés del uso normal), pecho apoyado',
          'Ajustá las manijas en la posición más ADELANTE posible',
          'Asiento a una altura donde las manos queden a la altura de los hombros',
          'Agarre neutro o palmas abajo, brazos casi rectos con codos apenas doblados',
          'Hombros abajo antes de arrancar'
        ],
        pasos: [
          { t: 'Apertura', d: 'Abrí los brazos hacia atrás en arco amplio, como abrazando al revés. Los codos mantienen su leve flexión FIJA.', resp: 'Exhalá' },
          { t: 'Atrás', d: 'Un segundo con los brazos en línea con el torso (o apenas más atrás), apretando la parte trasera del hombro.', resp: '—' },
          { t: 'Vuelta', d: 'Resistí 2-3 segundos el regreso. Las placas NO se apoyan entre reps: la tensión vive toda la serie.', resp: 'Inhalá' }
        ],
        claves: [
          'Los codos dibujan el arco — las manos solo acompañan',
          'El pecho clavado al respaldo delata cualquier envión',
          'Placas que no tocan = serie que vale doble'
        ],
        errores: [
          { e: 'Doblar los codos y convertirlo en remo', fix: 'Fijate en el espejo: el ángulo del codo no cambia en toda la rep. Si cambia, bajá una placa.' },
          { e: 'Encoger los hombros al abrir', fix: 'Hombros abajo y cuello largo antes de cada serie. El trapecio alto siempre quiere meterse: no lo dejes.' },
          { e: 'Rango corto por exceso de peso', fix: 'Los brazos tienen que llegar a la línea del torso. Si no llegan, el número de la placa es mentira.' }
        ],
        sentir: 'El deltoides posterior (esa zona que casi nunca sentiste en tu vida) quemando puntual, y la espalda alta despierta. Con las semanas notás los hombros "más atrás" naturalmente.',
        progresar: '3×15 sin que las placas toquen → siguiente placa. Alternativa fina: pausa de 2 seg atrás con el mismo peso.',
        dudas: [
          { q: '¿No es lo mismo que el face pull?', a: 'Primos, no gemelos: el face pull suma rotación externa (manguito); este aísla el posterior puro con más carga estable. Juntos cubren todo el hombro trasero.' },
          { q: '¿La palanca me pega en el pecho al volver?', a: 'Ajustá el tope de recorrido de la máquina o arrancá con las manijas más adelante. La vuelta termina donde el músculo sigue tenso, no donde la máquina choca.' }
        ],
        porque: 'El deltoides posterior es el músculo más olvidado del gym y el que más necesitás: equilibra el hombro contra tus horas de escritorio y redondea el brazo visto de atrás.',
        variantes: ['Face pulls', 'Vuelos posteriores inclinado con mancuernas']
      },
      {
        id: 'curl-polea-barra',
        nombre: 'Curl en polea con barra (paso atrás)',
        series: '3×10-12', descanso: 75,
        nivel1: 'Un paso atrás · tensión hasta abajo',
        setup: [
          'Polea BAJA con barra recta o W (la W es más amable con las muñecas)',
          'Agarrá la barra al ancho de hombros, palmas arriba',
          'UN PASO atrás: los brazos quedan apenas por detrás del torso con el cable tenso',
          'Codos pegados a los costados, pecho alto',
          'Rodillas blandas, abdomen firme'
        ],
        pasos: [
          { t: 'Curl', d: 'Subí la barra doblando solo los codos, hasta la altura de los hombros. Los codos NO viajan adelante ni se despegan del cuerpo.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Un segundo de contracción con los bíceps apretados — sin llevar los codos arriba para "apretar más" (eso es trampa de hombro).', resp: '—' },
          { t: 'Bajada', d: 'Resistí 2-3 segundos hasta los brazos completamente extendidos atrás del torso.', resp: 'Inhalá' },
          { t: 'Abajo', d: 'Medio segundo con el bíceps largo y tenso — el paso atrás existe para este momento.', resp: '—' }
        ],
        claves: [
          'El paso atrás convierte un curl común en un curl estirado: no lo pierdas',
          'Codos quietos: son bisagras, no palancas',
          'La bajada lenta es donde está la plata'
        ],
        errores: [
          { e: 'Hamacar el torso para despegar la barra', fix: 'Pegá los omóplatos y pensá "estatua". Si la primera rep necesita envión, sobra un ladrillo.' },
          { e: 'Codos que suben al final del curl', fix: 'Terminá el curl con los codos donde empezaron: al costado del torso. Menos rango arriba, más bíceps real.' },
          { e: 'Pararse encima de la polea (sin paso atrás)', fix: 'Sin el paso atrás perdés la tensión de abajo, que es justo la ventaja de la polea. Un paso, siempre.' }
        ],
        sentir: 'Tensión constante en todo el recorrido — la polea no tiene puntos muertos — y pump inmediato. Al final de la 3ª serie el bíceps tiene que estar lleno.',
        progresar: '3×12 estrictas → +ladrillo. El curl progresa lento: celebrá cada ladrillo como si fueran 10 kg.',
        dudas: [
          { q: '¿Barra recta o W?', a: 'La W si las muñecas se quejan con la recta; la recta supina un poco más el antebrazo. Diferencia real: chica. Comodidad articular: manda.' },
          { q: '¿Por qué polea y no barra libre?', a: 'La barra libre pierde tensión abajo y arriba; la polea tira SIEMPRE. Para un día de tirón donde el bíceps ya trabajó en jalones y remos, la polea exprime lo que queda mejor.' }
        ],
        porque: 'La polea no deja puntos muertos y el paso atrás agrega estiramiento: el combo exacto para un bíceps que ya viene pre-fatigado de los tirones grandes.',
        variantes: ['Curl con barra W libre', 'Curl bayesian en polea (a un brazo)']
      },
      {
        id: 'curl-martillo',
        nombre: 'Curl martillo',
        series: '2×12', descanso: 60,
        nivel1: 'Pulgares arriba · codos quietos',
        setup: [
          'Mancuernas con agarre NEUTRO: palmas enfrentadas, pulgares arriba',
          'Equivalente exacto: soga en polea baja — usá lo que esté libre',
          'De pie, codos pegados a los costados',
          'Pecho alto, hombros atrás, rodillas blandas'
        ],
        pasos: [
          { t: 'Curl', d: 'Subí las dos mancuernas juntas (o alternadas, da igual) manteniendo el pulgar arriba TODO el recorrido, hasta la altura del hombro.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Un segundo de apretón sin girar las muñecas.', resp: '—' },
          { t: 'Bajada', d: 'Resistí 2-3 segundos hasta los brazos completamente largos. Extensión total: el braquial también quiere su estirada.', resp: 'Inhalá' }
        ],
        claves: [
          'Pulgar al techo de punta a punta: si la palma gira, es otro curl',
          'Codos soldados al torso',
          'Bajada al doble de lento que la subida'
        ],
        errores: [
          { e: 'Balancear el cuerpo en las últimas reps', fix: 'Espalda contra una columna o pared si hace falta. Estricto o nada.' },
          { e: 'Rango corto abajo (brazos nunca largos)', fix: 'Extendé del todo entre reps. Medio rango = medio músculo.' },
          { e: 'Muñecas que se quiebran hacia arriba', fix: 'Muñeca en línea recta con el antebrazo, como sosteniendo un martillo de verdad.' }
        ],
        sentir: 'El costado externo del brazo (braquial) y el antebrazo trabajando — distinto al curl común, más "profundo". El agarre se fortalece de regalo.',
        progresar: '2×12 estrictas → +2 kg por mancuerna. Dos series bien hechas alcanzan: es el cierre del día, no el evento principal.',
        dudas: [
          { q: '¿Qué es el braquial y por qué me importa?', a: 'Un músculo que vive DEBAJO del bíceps: cuando crece, empuja el bíceps hacia arriba y ensancha el brazo visto de frente. Brazos más gruesos sin hacer más curl de bíceps.' },
          { q: '¿Mancuernas o soga?', a: 'Idénticos en efecto. La soga mantiene algo más de tensión abajo; las mancuernas son más simples de conseguir. Elegí por disponibilidad.' }
        ],
        porque: 'El agarre neutro carga el braquial y los antebrazos: grosor de brazo y fuerza de agarre para tus tirones. Cierre perfecto del martes.',
        variantes: ['Curl martillo con soga en polea', 'Curl inverso con barra W']
      }
    ],
    bonus: {
      id: 'encogimientos',
      nombre: 'Encogimientos con mancuernas',
      series: '3×12',
      nivel1: 'Bonus opcional · pausa de 1 seg arriba, hombros a las orejas'
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
        setup: [
          'Barra en el rack a la altura de tus clavículas',
          'Agarre apenas más ancho que los hombros, muñecas rectas sobre el antebrazo',
          'Sacá la barra apoyada en clavículas/hombros, dos pasos atrás',
          'Pies al ancho de cadera, glúteos APRETADOS, abdomen como esperando un golpe',
          'Codos abajo y un poco adelante de la barra — no atrás'
        ],
        pasos: [
          { t: 'Preparación', d: 'Inhalá hondo y bloqueá el aire en el abdomen: sos una columna de la cabeza a los talones.', resp: 'Inhalá y bloqueá' },
          { t: 'Subida', d: 'Empujá la barra en línea RECTA hacia arriba. Como la cara está en el camino: mentón atrás un instante, y cuando la barra pasa la frente, metés la cabeza adelante "a través de la ventana".', resp: 'Bloqueado' },
          { t: 'Arriba', d: 'Barra sobre la coronilla (no adelante), brazos estirados, hombros empujando el cielo. Soltá el aire arriba.', resp: 'Exhalá' },
          { t: 'Bajada', d: 'Nueva inhalación y bajá controlado en 2-3 segundos hasta las clavículas. Mentón atrás de nuevo para dejarla pasar.', resp: 'Inhalá' }
        ],
        claves: [
          'Glúteos y abdomen apretados = lumbar protegida; si se aflojan, la espalda se arquea',
          'La barra viaja en línea recta y la cabeza la esquiva — no al revés',
          'Es tu levantamiento de FUERZA: 6-8 reps pesadas y técnica de cirujano'
        ],
        errores: [
          { e: 'Arquear la lumbar echando la cadera adelante', fix: 'Reapretá glúteos antes de CADA rep. Si igual se arquea, hay 2,5 kg de más en la barra.' },
          { e: 'Empujar la barra hacia adelante rodeando la cara', fix: 'Mentón atrás, barra rozando la nariz. El camino recto es el camino fuerte.' },
          { e: 'No meter la cabeza al final', fix: 'Con la barra arriba, tus orejas deben quedar delante de los brazos. Si quedan atrás, el hombro queda a mitad de trabajo.' }
        ],
        sentir: 'Todo el hombro trabajando al límite y el cuerpo entero rígido de tensión — abdomen incluido, gratis. Terminar las 4 series pesadas de esto ES el logro del jueves.',
        progresar: '4×8 con la lumbar quieta → +2,5 kg. Este número es tu medidor de progreso general: apuntá a que suba de a poco TODO el año. Anotalo siempre.',
        dudas: [
          { q: '¿Por qué de pie si sentado es más estable?', a: 'De pie enseña al cuerpo a trabajar como una sola pieza y suma trabajo de core gratis. El lunes ya tenés el sentado: este es el examen semanal de fuerza.' },
          { q: '¿Qué hago si no llego ni a 6 reps con la barra sola +?', a: 'La barra sola (20 kg) ya es un peso digno. Si hace falta menos, arrancá con mancuernas de pie y en 3-4 semanas pasás a la barra. Cero vergüenza: todos empezaron ahí.' },
          { q: '¿Cinturón sí o no?', a: 'A tu nivel y con esta técnica, no hace falta. El abdomen apretado es tu cinturón — y entrena.' }
        ],
        porque: 'El press de pie es el constructor de hombros más completo que existe y tu medidor de fuerza global. Por eso abre el jueves, con descanso completo y toda tu energía.',
        variantes: ['Press militar sentado con barra', 'Press de pie con mancuernas']
      },
      {
        id: 'jalon-supino',
        nombre: 'Jalón agarre estrecho supino',
        series: '4×8-10', descanso: 120,
        nivel1: 'Omóplatos a los bolsillos · barra al pecho alto',
        setup: [
          'Rodillera ajustada, muslos trabados',
          'Agarre SUPINO (palmas hacia vos) al ancho exacto de tus hombros',
          'Brazos estirados, pecho alto, inclinación 10-15° fija',
          'Hombros sueltos arriba antes de la primera rep: dejá que la barra te cuelgue'
        ],
        pasos: [
          { t: 'Inicio escapular', d: 'Bajá los hombros primero — "omóplatos a los bolsillos" — con los brazos todavía rectos.', resp: '—' },
          { t: 'Tirón', d: 'Codos pegados al cuerpo apuntando al PISO, barra hacia el pecho ALTO. El supino deja que el codo viaje más atrás: aprovechalo.', resp: 'Exhalá' },
          { t: 'Abajo', d: 'Barra a un dedo del pecho, medio segundo apretando la espalda entera.', resp: '—' },
          { t: 'Subida', d: 'Resistí 2-3 segundos, estirá los brazos completos y dejá que la barra te estire la espalda al final. El bíceps también termina largo: doble estiramiento.', resp: 'Inhalá' }
        ],
        claves: [
          'Codos PEGADOS: en supino, si se abren, se pierde la ventaja del agarre',
          'Barra al pecho alto — al abdomen es remo mal hecho',
          'La estirada de arriba trabaja dorsal Y bíceps a la vez: no la regales'
        ],
        errores: [
          { e: 'Hamacarse para pasar el punto duro', fix: 'Inclinación fija de 10-15°. El torso es una foto; los brazos, la película.' },
          { e: 'Arden solo los bíceps', fix: 'Volvé al inicio escapular: hombros abajo ANTES de doblar codos, y pensá en llevar los CODOS al piso, no la barra al pecho.' },
          { e: 'Muñecas dobladas hacia atrás con el peso', fix: 'Agarre firme y muñeca recta. Si no aguanta, es señal de bajar 2-3 kg.' }
        ],
        sentir: 'Dorsales cerrando abajo con más ayuda de bíceps que el jalón ancho — por eso está en el día de brazos. Mañana: dorsales bajos y bíceps, mitad y mitad.',
        progresar: '4×10 limpias → +2-3 kg. Alterná el foco: una semana priorizá sentir espalda, otra dejá que los brazos empujen el peso. Ambas construyen.',
        dudas: [
          { q: '¿En qué se diferencia del jalón ancho del martes?', a: 'El ancho apunta al dorsal alto (amplitud); el supino estrecho al dorsal bajo + bíceps (densidad y brazos). Por eso uno vive en Tirón y otro acá.' },
          { q: '¿El agarre supino no lastima los codos?', a: 'Con barra recta a algunos sí. Si molesta: barra W en el jalón o rotá a agarre neutro estrecho. El músculo ni se entera del cambio.' }
        ],
        porque: 'Espalda y bíceps en un solo movimiento pesado: perfecto para el día mixto. El agarre supino pone al dorsal en su recorrido más fuerte y al bíceps en su mejor estiramiento.',
        variantes: ['Jalón agarre neutro estrecho', 'Dominadas supinas asistidas']
      },
      {
        id: 'press-inclinado-smith',
        nombre: 'Press inclinado en Smith',
        series: '3×10', descanso: 90,
        nivel1: 'Trayectoria fija · bajada honda',
        setup: [
          'Banco a 30° centrado bajo la barra del Smith',
          'Acostate y verificá: la barra debe bajar al pecho ALTO — ajustá el banco adelante/atrás ANTES de cargar',
          'Agarre apenas más ancho que hombros, muñecas rectas',
          'Omóplatos atrás y abajo, pies firmes',
          'Destrabá la barra girándola y hacé una rep vacía de prueba'
        ],
        pasos: [
          { t: 'Bajada', d: 'Bajá en 2-3 segundos hasta tocar (suave) el pecho alto. El Smith te deja concentrarte solo en esto: aprovechalo para bajar más hondo que con mancuernas.', resp: 'Inhalá' },
          { t: 'Abajo', d: 'Pausa de medio segundo con la barra rozando el pecho. Cero rebote.', resp: '—' },
          { t: 'Subida', d: 'Empujá fuerte hasta casi estirar los codos, sin trabarlos con golpe.', resp: 'Exhalá' }
        ],
        claves: [
          'El banco bien posicionado es el 80% del ejercicio en Smith — verificalo vacío',
          'Acá vale bajar MÁS hondo: la máquina estabiliza, vos estirás',
          'Tercer ejercicio de empuje del día: buscá el fallo cerca (RPE 9)'
        ],
        errores: [
          { e: 'Banco descentrado (la barra baja al cuello o al abdomen)', fix: 'Regla: barra a la línea de las tetillas con el pecho inflado. Ajustá el banco, no tu técnica.' },
          { e: 'Rebotar la barra en el pecho', fix: 'Tocá como si el pecho fuera de vidrio. La pausa corta hace la serie más dura y más útil.' },
          { e: 'Media subida por cansancio', fix: 'Preferí 8 reps completas a 10 recortadas. El tracker no premia reps truchas.' }
        ],
        sentir: 'El pecho superior fatigándose rápido — venís del press pesado y este remata. Con la trayectoria fija, cada rep debería sentirse IGUAL a la anterior.',
        progresar: '3×10 con pausa → +2,5 kg (o medio disco por lado). En Smith los saltos chicos funcionan de maravilla.',
        dudas: [
          { q: '¿El Smith no era "malo"?', a: 'Mito de gym. Para un tercer ejercicio con fatiga acumulada, la trayectoria guiada es una ventaja: más estímulo directo, menos gasto en estabilizar. Los básicos libres ya los hiciste.' },
          { q: '¿Cuenta el peso de la barra del Smith?', a: 'Cada Smith pesa distinto (suelen ser 7-12 kg con el contrapeso). No te enrosques: anotá "los discos" y sé consistente en la misma máquina.' }
        ],
        porque: 'Segunda dosis semanal de pecho superior, en versión guiada porque llega tercero en el día. Frecuencia 2× semana en el músculo que más querés cambiar.',
        variantes: ['Press inclinado con mancuernas', 'Press en máquina convergente']
      },
      {
        id: 'vuelos-laterales-mancuernas',
        nombre: 'Vuelos laterales con mancuernas',
        series: '3×12-15', descanso: 60,
        nivel1: 'Hasta la horizontal · sin encoger trapecios',
        setup: [
          'Mancuernas LIVIANAS (en serio: menos de lo que pensás)',
          'De pie, pies al ancho de cadera, leve inclinación del torso adelante (5-10°)',
          'Mancuernas colgando a los costados, codos apenas doblados y fijos',
          'Hombros abajo y atrás antes de la primera rep'
        ],
        pasos: [
          { t: 'Subida', d: 'Subí los brazos hacia los costados llevando los CODOS arriba, hasta la horizontal. Meñique apenas más alto que el pulgar al final ("sirviendo agua").', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Medio segundo en la horizontal. El cuello largo, los trapecios dormidos.', resp: '—' },
          { t: 'Bajada', d: 'Resistí 2-3 segundos hasta abajo — la bajada lenta es donde este ejercicio se gana el lugar.', resp: 'Inhalá' }
        ],
        claves: [
          'Codos arriba, no manos arriba',
          'La horizontal es el techo: más arriba trabaja el trapecio',
          'La bajada al doble de lento que la subida, SIEMPRE'
        ],
        errores: [
          { e: 'Encoger los hombros hacia las orejas', fix: 'Antes de cada serie: hombros abajo "metidos en los bolsillos". Si suben con el peso, bajá 2 kg.' },
          { e: 'Impulso con las piernas y la cadera', fix: 'Rodillas quietas. Si necesitás el envión, el vuelo se convirtió en lanzamiento.' },
          { e: 'Dejar caer las mancuernas en la bajada', fix: 'Contá 2 segundos de bajada. La mitad del crecimiento vive ahí.' }
        ],
        sentir: 'El costado del hombro quemando desde la rep 8. Si lo sentís en el cuello o los trapecios: peso de más, garantido.',
        progresar: '3×15 estrictas con bajada lenta → +2 kg. En vuelos, quedarse un mes en el mismo peso haciendo mejores reps ES progresar.',
        dudas: [
          { q: '¿Ya hago vuelos en polea el lunes, para qué otra vez?', a: 'El deltoides lateral banca y agradece frecuencia 2×. La polea te da la tensión de abajo; las mancuernas, la sobrecarga de arriba. El combo semanal es el plan del "ancho".' },
          { q: '¿Sentado o de pie?', a: 'De pie con torso quieto es tu estándar. Si un día el envión te gana, sentate: el banco es un detector de trampas.' }
        ],
        porque: 'Segunda dosis semanal del músculo del ancho de hombros. En un cuerpo natural, los hombros anchos son lo que más cambia una remera.',
        variantes: ['Vuelos laterales en polea', 'Máquina de vuelos laterales']
      },
      {
        id: 'curl-eleccion',
        nombre: 'Curl a elección (rota: concentrado / spider / alternado)',
        series: '3×12', descanso: 60,
        nivel1: 'El que toque hoy · codo quieto siempre',
        setup: [
          'CONCENTRADO: sentado, codo apoyado contra la cara interna del muslo, brazo colgando',
          'SPIDER: pecho apoyado en banco inclinado 45°, brazos colgando verticales del otro lado',
          'ALTERNADO: de pie, mancuernas a los costados, palmas al frente',
          'Regla de rotación: una variante distinta cada jueves, en orden'
        ],
        pasos: [
          { t: 'Curl', d: 'Subí la mancuerna hasta el hombro doblando SOLO el codo. En el concentrado y el spider, el brazo cuelga vertical: no hay dónde esconderse.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Un segundo de apretón fuerte, girando apenas el meñique hacia vos al final (supinación completa).', resp: '—' },
          { t: 'Bajada', d: 'Resistí 2-3 segundos hasta el brazo completamente largo. En el spider, sentí cómo tira abajo: es su magia.', resp: 'Inhalá' }
        ],
        claves: [
          'Las tres variantes comparten UNA ley: el codo no viaja',
          'Extensión total abajo en cada rep — el curl a medias no existe',
          'La supinación final (girar el meñique) exprime el pico del bíceps'
        ],
        errores: [
          { e: 'Balancear el torso (sobre todo en el alternado)', fix: 'Codo al muslo o pecho al banco: por eso rotamos a variantes con apoyo. En el alternado, espalda a la pared si hace falta.' },
          { e: 'Cortar la bajada', fix: 'La mitad del músculo se construye bajando. 2-3 segundos, contados.' },
          { e: 'Apurar la rotación y hacer siempre el mismo', fix: 'La app te sugiere cuál toca. La rotación reparte el estímulo en los tres largos del músculo.' }
        ],
        sentir: 'El bíceps aislado sin ayuda de nada — cada variante lo agarra en un largo distinto: concentrado al medio, spider abajo, alternado parejo. Pump asegurado.',
        progresar: '3×12 estrictas en la variante del día → +2 kg en ESA variante (cada una lleva su propio peso anotado).',
        dudas: [
          { q: '¿Cuál toca hoy?', a: 'Mirá el "Últ:" — si la última vez hiciste concentrado, hoy spider; después alternado; y vuelta a empezar. Si la memoria falla, cualquiera: la rotación es guía, no ley.' },
          { q: '¿Por qué un curl más si ya hice katana y polea?', a: 'Katana el lunes (estirado), polea el martes (tensión continua), este el jueves (pico y contracción). Tres ángulos, tres días: el brazo completo sin sobrecargar ninguno.' }
        ],
        porque: 'Rotar variantes reparte el estímulo en distintos largos del bíceps y mata el aburrimiento. Tercera dosis semanal de brazos, cada vez desde un ángulo nuevo.',
        variantes: ['Curl concentrado', 'Curl spider', 'Curl alternado de pie']
      },
      {
        id: 'squeeze-press',
        nombre: 'Press cerrado con mancuernas (squeeze press)',
        series: '3×10', descanso: 60,
        nivel1: 'Apretar las mancuernas entre sí TODO el tiempo',
        setup: [
          'Banco PLANO, mancuernas medianas-livianas',
          'Acostate con las mancuernas juntas sobre el pecho, palmas enfrentadas',
          'ANTES de la primera rep: apretá una mancuerna contra la otra con fuerza — y no soltás ese apriete nunca',
          'Omóplatos atrás, pies firmes'
        ],
        pasos: [
          { t: 'Bajada', d: 'Bajá las mancuernas JUNTAS y APRETADAS hasta el pecho bajo, codos pegados al cuerpo. 2-3 segundos.', resp: 'Inhalá' },
          { t: 'Abajo', d: 'Toque suave al pecho sin aflojar el apriete lateral ni un gramo.', resp: '—' },
          { t: 'Subida', d: 'Empujá arriba manteniendo la presión entre mancuernas. El apriete ES el ejercicio; el press es la excusa.', resp: 'Exhalá' }
        ],
        claves: [
          'Si el apriete entre mancuernas afloja, la rep no contó',
          'Codos pegados: esto también es tríceps, dejalos trabajar',
          'Liviano a propósito: la presión interna hace el trabajo sucio'
        ],
        errores: [
          { e: 'Convertirlo en press normal (mancuernas separadas)', fix: 'Chequeo simple: las mancuernas deben hacer ruido de contacto TODO el recorrido.' },
          { e: 'Cargar como si fuera press pesado', fix: 'Con el apriete constante, 60% de tu peso de press normal ya es brutal. El ego acá pierde.' },
          { e: 'Rebotar en el pecho', fix: 'Toque de pluma y arriba. Sexto ejercicio del día: la técnica es lo único que queda cuidar.' }
        ],
        sentir: 'El CENTRO del pecho (la línea media) y los tríceps con un pump raro e inmediato. Es el ejercicio que "encuentra" la parte interna del pectoral.',
        progresar: '3×10 sin aflojar el apriete → +2 kg. Si a las 3 sesiones no te convence, el reemplazo oficial es pushdown en polea con barra recta — avisale a la app con el editor.',
        dudas: [
          { q: '¿Esto marca la línea del medio del pecho?', a: 'La "línea" es genética, pero el squeeze carga las fibras internas como pocos ejercicios. Más pectoral interno = pecho que se ve completo, con o sin línea marcada.' },
          { q: '¿Por qué está "a prueba"?', a: 'Porque es un ejercicio de sensación: a algunos les encanta, a otros nada. Si en 3 sesiones no sentiste el centro del pecho, cambiamos sin duelo.' }
        ],
        porque: 'Presión constante = pecho interno y tríceps en un solo cierre eficiente. Sexto ejercicio: corto, intenso y al punto.',
        variantes: ['Pushdown en polea con barra recta', 'Fondos en banco']
      }
    ],
    bonus: {
      id: 'plancha',
      nombre: 'Plancha',
      series: '3×40 seg',
      nivel1: 'Bonus opcional · cuerpo en línea, glúteos apretados, sin hundir cadera'
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
        setup: [
          'Pies al ancho de hombros, a MEDIA altura de la plataforma',
          'Puntas apenas hacia afuera (10-15°), talones siempre apoyados',
          'Baja espalda y cadera PEGADAS al respaldo — tu regla de oro acá',
          'Manos en las agarraderas laterales',
          'Sacá los topes de seguridad recién cuando estés en posición'
        ],
        pasos: [
          { t: 'Bajada', d: 'Bajá la plataforma en 2-3 segundos doblando rodillas hacia el pecho (apenas abiertas, en línea con los pies).', resp: 'Inhalá' },
          { t: 'El límite', d: 'Frená EXACTAMENTE donde la cadera amaga despegarse del respaldo. Ese es TU rango — suele ser rodillas a 90° o algo más.', resp: '—' },
          { t: 'Subida', d: 'Empujá con los TALONES (no con la punta) hasta casi estirar las piernas. Las rodillas nunca traban con golpe.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Piernas casi rectas con una mini-flexión de seguridad, y bajás de nuevo sin pausa larga.', resp: '—' }
        ],
        claves: [
          'La cadera pegada define tu profundidad — no un número, TU cadera',
          'Talones: si la punta del pie empuja, la rodilla paga la cuenta',
          'Rodillas siguiendo la línea de los pies, sin cerrarse adentro'
        ],
        errores: [
          { e: 'Bajar de más y despegar la cadera ("guiño lumbar")', fix: 'Filmate de costado una serie o pedí que te miren: el punto exacto donde la cadera rota es tu tope. Ahí, ni un cm más.' },
          { e: 'Trabar las rodillas con golpe arriba', fix: 'Terminá al 95% de extensión. La tensión sigue en el músculo y la articulación descansa.' },
          { e: 'Rodillas que se juntan al empujar', fix: 'Pensá "abrí el piso con los pies". Si igual se cierran, bajá 20 kg y reconstruí el patrón.' }
        ],
        sentir: 'Cuádriceps y glúteos llenándose serie a serie. NADA en la zona lumbar — si aparece, revisá la profundidad antes que el peso.',
        progresar: '4×12 con el rango completo → +10 kg (la prensa banca saltos grandes). Registrá siempre el total de discos.',
        dudas: [
          { q: '¿Pies altos o bajos en la plataforma?', a: 'Media altura = parejo cuádriceps/glúteo, tu default. Pies más altos cargan más glúteo e isquio; más bajos, más cuádriceps. Jugá recién cuando el patrón esté sólido.' },
          { q: '¿Una pierna a la vez sirve?', a: 'Más adelante, sí, como variante. Hoy el objetivo es cargar el patrón básico parejo y progresar simple.' }
        ],
        porque: 'Todo el tren inferior con la columna protegida — la alternativa exacta a las sentadillas para tu espalda de oficina. Piernas que acompañen al torso: en Brasil se nota el conjunto.',
        variantes: ['Hack squat', 'Sentadilla en Smith']
      },
      {
        id: 'curl-femoral',
        nombre: 'Curl femoral sentado',
        series: '3×12', descanso: 90,
        nivel1: 'Sentado mejor que acostado · estirar arriba',
        setup: [
          'Ajustá el respaldo: la rodilla queda alineada con el eje de giro de la máquina',
          'Almohadilla de las piernas sobre los tobillos (no en la pantorrilla)',
          'Traba de muslos bajada y firme',
          'Espalda pegada al respaldo, manos en las agarraderas'
        ],
        pasos: [
          { t: 'Flexión', d: 'Doblá las rodillas llevando los talones abajo-atrás con fuerza, hasta el rango completo de la máquina.', resp: 'Exhalá' },
          { t: 'Abajo', d: 'Un segundo de apretón con los isquios contraídos al máximo.', resp: '—' },
          { t: 'Vuelta', d: 'Resistí 2-3 segundos el regreso hasta las piernas CASI estiradas. Sentí el estiramiento atrás del muslo al final.', resp: 'Inhalá' }
        ],
        claves: [
          'Sentado el isquio trabaja más estirado que acostado — por eso es tu versión',
          'La cadera no se levanta del asiento ni un milímetro',
          'Extensión casi completa arriba: el estiramiento es la mitad del pago'
        ],
        errores: [
          { e: 'Levantar la cadera para "ayudar" en las últimas reps', fix: 'La traba de muslos firme y una placa menos. La trampa acá anula el ejercicio entero.' },
          { e: 'Rango corto arriba (nunca estirar)', fix: 'Dejá que la máquina te lleve casi a piernas rectas en cada rep. Ahí vive el crecimiento.' },
          { e: 'Patear rápido y soltar', fix: 'Ritmo 1 seg abajo, 1 de pausa, 2-3 de vuelta. El femoral responde al control, no al golpe.' }
        ],
        sentir: 'La parte de atrás del muslo trabajando entera, sobre todo en la vuelta lenta. Los primeros sábados puede acalambrar levemente al apretar: normal, hidratate y seguí.',
        progresar: '3×12 con la pausa → siguiente placa. El femoral fuerte además protege tus rodillas en todo lo demás.',
        dudas: [
          { q: '¿Y si solo hay curl acostado?', a: 'Va perfecto: misma ejecución, cadera pegada al banco (no levantás cola). El sentado estira más el músculo, pero el acostado bien hecho le pisa los talones.' },
          { q: '¿Por qué entreno isquios si "no se ven"?', a: 'Se ven de costado y de atrás (la pierna con "forma"), equilibran el cuádriceps y son el seguro antidesgarro número uno. Pierna completa o pierna de vidriera: elegimos completa.' }
        ],
        porque: 'Los isquios estirados bajo carga (sentado > acostado) crecen más y blindan tus rodillas. La otra mitad de la pierna que la prensa no termina de cubrir.',
        variantes: ['Curl femoral acostado', 'Curl femoral de pie unilateral']
      },
      {
        id: 'hiperextension-45',
        nombre: 'Hiperextensión 45°',
        series: '3×12', descanso: 90,
        nivel1: 'Subir con glúteos · no hiperextender',
        setup: [
          'Almohadilla a la altura de la CADERA (el pliegue del bolsillo delantero), no del abdomen',
          'Talones trabados en los topes, piernas casi rectas',
          'Brazos cruzados al pecho (con disco abrazado cuando progreses)',
          'Puntas de pies apenas hacia afuera activan más glúteo: tu configuración'
        ],
        pasos: [
          { t: 'Bajada', d: 'Bajá el torso controlado redondeando APENAS la espalda alta, hasta sentir tirantez atrás de los muslos.', resp: 'Inhalá' },
          { t: 'Abajo', d: 'Medio segundo de estiramiento en isquios y glúteos. Sin rebotar.', resp: '—' },
          { t: 'Subida', d: 'Subí APRETANDO LOS GLÚTEOS como si empujaras la cadera contra la almohadilla, hasta que el cuerpo quede en una línea recta.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Línea recta y STOP — ni un grado más arriba. Apretón de glúteos de un segundo.', resp: '—' }
        ],
        claves: [
          'El motor es el glúteo, no la lumbar: pensá "empujar la cadera", no "levantar el pecho"',
          'Arriba se frena en la línea del cuerpo: hiperextender es regalarle el ejercicio a la lumbar',
          'Lento siempre: acá el impulso no construye nada'
        ],
        errores: [
          { e: 'Subir de más arqueando la espalda', fix: 'Techo mental: hombros en línea con talones. Si dudás, quedate 5° abajo de lo que creés que es "recto".' },
          { e: 'Sentirlo SOLO en la zona lumbar', fix: 'Almohadilla más abajo (cadera libre para rotar) y reapretá glúteos desde el arranque. La lumbar acompaña; no lidera.' },
          { e: 'Rebotar abajo', fix: 'Pausa de medio segundo en el estiramiento. Convierte un balanceo en un ejercicio.' }
        ],
        sentir: 'Glúteos e isquios haciendo el trabajo, la lumbar solo "presente". Al terminar: la cadena de atrás entera despierta — la misma que tu silla apaga 8 horas por día.',
        progresar: '3×12 estrictas → disco de 5 kg abrazado al pecho. Después 10 kg. Simple y eterno.',
        dudas: [
          { q: '¿Esto no es peligroso para la espalda?', a: 'Al revés: bien hecho (glúteos motor, sin hiperextender) es de lo mejor para BLINDAR la zona. Peligroso es el arqueo con impulso — justo lo que tu técnica evita.' },
          { q: '¿La variante pull-through?', a: 'Pull-through en polea baja: mismo patrón de bisagra con tensión distinta. Úsala si el banco 45° está ocupado — está cargada como tu variante oficial.' }
        ],
        porque: 'Glúteo fuerte = base de la postura, potencia para la prensa y la cadena posterior que tu vida sentada necesita despertar. El tercer pilar del sábado.',
        variantes: ['Pull-through en polea', 'Puente de glúteo con mancuerna']
      },
      {
        id: 'gemelos-pie',
        nombre: 'Gemelos de pie',
        series: '3×15', descanso: 60,
        nivel1: 'Pausa de 1 seg ABAJO · estirar todo',
        setup: [
          'Máquina de gemelos de pie o escalón con mancuerna en la mano',
          'Solo la base de los dedos apoyada; el talón cuelga completamente libre',
          'Piernas rectas (rodilla con micro-flexión fija)',
          'Postura alta: como si un hilo te tirara de la coronilla'
        ],
        pasos: [
          { t: 'Bajada', d: 'Bajá el talón en 2 segundos hasta el estiramiento MÁXIMO de la pantorrilla — más abajo de lo que creés que llega.', resp: 'Inhalá' },
          { t: 'Abajo', d: 'PAUSA COMPLETA de 1 segundo en el estiramiento. Esta pausa es el 50% del ejercicio: mata el rebote del tendón.', resp: '—' },
          { t: 'Subida', d: 'Subí a la punta del pie lo más alto posible, como queriendo mirar por encima de una pared.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Un segundo en puntas, apretando el gemelo al máximo.', resp: '—' }
        ],
        claves: [
          'La pausa de abajo NO es negociable: sin ella, rebota el tendón y el músculo mira',
          'Rango completo en ambas puntas: bien abajo, bien arriba',
          'Reps lentas y dolorosas > reps rápidas e infladas'
        ],
        errores: [
          { e: 'Rebotar abajo usando el tendón de Aquiles', fix: 'Contá "mil uno" quieto abajo en CADA rep. Vas a necesitar menos peso — y por fin va a crecer.' },
          { e: 'Medio rango (ni estira ni llega a puntas)', fix: 'Mejor 10 completas que 20 a media asta. El gemelo es terco: solo el rango completo lo convence.' },
          { e: 'Doblar rodillas para ayudar', fix: 'Rodillas fijas: doblarlas pasa el trabajo al sóleo y al envión. Piernas rectas, gemelo puro.' }
        ],
        sentir: 'Estiramiento profundo abajo (casi molesto) y quemazón arriba al final de la serie. Los gemelos duelen al día siguiente como ningún otro: bienvenido al club.',
        progresar: '3×15 con ambas pausas → +placa o mancuerna más pesada. Si estancás, subí a 3×20 antes de subir peso.',
        dudas: [
          { q: '¿Por qué mis gemelos nunca crecieron?', a: 'Porque el 95% de la gente los rebota. La pausa abajo elimina el rebote elástico del tendón y obliga al MÚSCULO a trabajar. Tres meses de pausas valen más que tres años de rebotes.' },
          { q: '¿De pie o sentado?', a: 'De pie (pierna recta) trabaja el gemelo grande que se ve; sentado, el sóleo de abajo. Tu rutina usa de pie; el sentado queda como variante.' }
        ],
        porque: 'Pantorrillas con presencia equilibran la pierna entera — y en bermudas, en enero, son lo primero que se ve. Cortito, estricto y al pie.',
        variantes: ['Gemelos sentado', 'Gemelos en prensa']
      },
      {
        id: 'hip-thrust',
        nombre: 'Hip thrust en máquina',
        series: '3×12', descanso: 90, opcional: true,
        nivel1: 'OPCIONAL · cadera alta, mentón al pecho',
        setup: [
          'Banco cruzado a la altura de los omóplatos (borde inferior de las escápulas)',
          'Almohadilla sobre la cadera, barra o palanca de la máquina encima',
          'Pies al ancho de hombros, talones a un palmo de los glúteos',
          'Mentón al pecho y mirada al frente-abajo: se mantiene TODA la serie'
        ],
        pasos: [
          { t: 'Empuje', d: 'Empujá con los TALONES llevando la cadera al techo, hasta que muslo y torso queden en una línea horizontal.', resp: 'Exhalá' },
          { t: 'Arriba', d: 'Un segundo con los glúteos apretados al máximo — la posición es una "mesa": rodillas a 90°, cadera alta, mentón al pecho.', resp: '—' },
          { t: 'Bajada', d: 'Bajá controlado en 2 segundos hasta que la cadera casi toque el piso o el tope de la máquina.', resp: 'Inhalá' }
        ],
        claves: [
          'Mentón al pecho: si mirás al techo, la lumbar se arquea y roba el trabajo',
          'Talones empujan, glúteos suben — los cuádriceps son espectadores',
          'Arriba se llega a la horizontal, no más: hiperextender es lumbar, no glúteo'
        ],
        errores: [
          { e: 'Arquear la espalda arriba mirando al techo', fix: 'Mentón abajo, costillas "cerradas". El movimiento es cadera, no columna.' },
          { e: 'Empujar con las puntas de los pies', fix: 'Talones clavados; podés levantar los dedos dentro de la zapatilla como chequeo.' },
          { e: 'Rango corto por peso de más', fix: 'La cadera tiene que llegar a la línea. Si no llega, la mitad de los discos sobran.' }
        ],
        sentir: 'Glúteos puros, con un apretón arriba que no se parece a nada del resto de la rutina. Si lo sentís en la lumbar: mentón y rango, en ese orden.',
        progresar: '3×12 con pausa arriba → +5 kg. Progresa rápido: es normal sumar discos varias semanas seguidas.',
        dudas: [
          { q: '¿Sigue estando "a prueba"?', a: 'Sí: probalo 2-3 sábados. Si te convence, queda fijo; si no, el puente de glúteo con mancuerna hace el mismo trabajo con menos armado. Vos decidís y lo ajustás en Mi rutina.' },
          { q: '¿No es un ejercicio "de mujeres"?', a: 'Es el constructor de glúteos más directo que existe, y glúteos fuertes = prensa más pesada, mejor postura y jeans que quedan bien. El músculo no tiene género.' }
        ],
        porque: 'El glúteo es el músculo más grande del cuerpo y tu sábado lo ataca directo. Opcional porque el día ya cumple sin él — con él, cumple con honores.',
        variantes: ['Puente de glúteo con mancuerna']
      }
    ],
    bonus: null
  }
};

// Versión mínima de cualquier día: primeros 3 ejercicios + cinta 10 min (SISTEMA.md §4.1).
const GYM_MINIMA_CANTIDAD = 3;
