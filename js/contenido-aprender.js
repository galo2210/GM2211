// NORTE · contenido APRENDER — tanda 1 (20 piezas de las 60-80 totales, SISTEMA.md §5.5).
// Rotación lineal por fecha: una por día, sin repetir hasta cerrar el ciclo.
// Formato: 2-4 min de lectura, lo accionable primero, voseo, cero jerga sin explicar.

const APRENDER_PIEZAS = [
  {
    id: 'ap-posicion-estirada', titulo: 'Por qué la posición estirada construye más músculo', pilar: 'Cuerpo', min: 3,
    cuerpo: [
      'Si tuvieras que quedarte con UNA idea de hipertrofia moderna, es esta: el músculo crece más cuando trabaja estirado bajo carga. La parte de abajo del press inclinado. La estirada completa arriba del jalón. El fondo del curl katana.',
      'La evidencia de los últimos años es consistente: series con énfasis en el rango estirado generan más crecimiento que las mismas series cortando ese rango. Por eso tu rutina insiste tanto con "bajá hondo", "estirá del todo", "dejá que la barra te estire".',
      'La aplicación práctica: cuando estés cansado y tentado de acortar el movimiento, acortá la parte de ARRIBA (la contraída), nunca la de abajo. Una serie con menos peso y estiramiento completo vale más que una pesada a medio rango.',
      'Bonus: el estiramiento con tensión también mejora la flexibilidad. Tu gym es también tu movilidad.'
    ]
  },
  {
    id: 'ap-proteina', titulo: 'Proteína: el único número que tenés que saber', pilar: 'Cuerpo', min: 3,
    cuerpo: [
      'De toda la nutrición deportiva, hay un solo número no negociable: ~1,6-2,2 gramos de proteína por kilo por día. Para vos: 140g+. Todo lo demás (timing, ventana anabólica, cuántas comidas) importa muchísimo menos.',
      'Por qué: el músculo se construye con aminoácidos. Sin materia prima no hay obra, por más que entrenes perfecto. Y en recomposición (tu caso: bajar grasa y subir músculo a la vez), la proteína alta además protege el músculo que ya tenés.',
      'El truco que usa tu plan: la proteína está repartida para que nunca dependa de tu fuerza de voluntad. 30g en el desayuno automático, 40 en el almuerzo, 35 post-gym, 50 en la cena. Llegás a 140-155 sin pensar.',
      'Señal de que venís bien: el número de Progreso. Señal de que no: días seguidos abajo de 100g. Un día flojo no es nada; una semana floja sí.'
    ]
  },
  {
    id: 'ap-rpe', titulo: 'RPE 8-9: qué significa entrenar "cerca del fallo"', pilar: 'Cuerpo', min: 3,
    cuerpo: [
      'RPE es una escala de esfuerzo del 1 al 10. RPE 8 = te quedaban 2 repeticiones en el tanque. RPE 9 = te quedaba 1. Tu rutina entera está programada a RPE 8-9.',
      'Por qué no al fallo total (RPE 10): las últimas reps antes del fallo generan casi el mismo crecimiento, con mucha menos fatiga y menos riesgo técnico. Llegar al fallo en cada serie te deja fundido para la siguiente y para el jueves.',
      'Cómo saber si estás en 8-9: la velocidad de la barra baja notablemente en las últimas reps, pero la técnica no se rompe. Si terminás la serie y podrías hacer 5 más, era RPE 6: sumá peso.',
      'El error de novato no es entrenar demasiado duro: es entrenar demasiado lejos del esfuerzo real creyendo que "hacer la serie" alcanza. Contá las reps que te quedan, no las que hiciste.'
    ]
  },
  {
    id: 'ap-8020', titulo: 'La regla 80/20 de la comida', pilar: 'Cuerpo', min: 2,
    cuerpo: [
      'El 80% de lo que comés sigue el plan. El 20% es vida: el franui, las gomitas, la milanesa. Y ese 20% no es una falla del sistema: ES parte del sistema.',
      'Las dietas perfectas fallan siempre igual: semana 1 impecable, semana 2 con grietas, semana 3 abandono total con culpa. La restricción absoluta genera el atracón que dice evitar.',
      'Por eso tus permitidos están PROGRAMADOS: medidos, a la tarde-noche, nunca en el desayuno ni post-gym. El permitido planificado evita el descontrol espontáneo.',
      'La matemática te cubre: con 2.000 kcal diarias bien armadas, 200 de chocolate no mueven la aguja. Un sábado entero descontrolado, tampoco — si el lunes seguís. La consistencia le gana a la perfección por goleada. Siempre.'
    ]
  },
  {
    id: 'ap-cafeina', titulo: 'Cafeína: por qué el corte es a las 15:00', pilar: 'Cabeza', min: 2,
    cuerpo: [
      'La cafeína tiene una vida media de 5-6 horas. Un café a las 17 significa media dosis dando vueltas a las 23, cuando estás intentando bajar.',
      'Lo traicionero: capaz te dormís igual. Pero la cafeína residual reduce el sueño profundo aunque no te des cuenta. Dormís las mismas horas y descansás menos — y al día siguiente necesitás más café. Ese círculo.',
      'Tu regla: los 2 cafés de la mañana son sagrados e intocables. Después de las 15:00, nada. Si necesitás un empujón a la tarde: la pausa de oficina, agua fría, o caminar 5 minutos. Suena a consejo de abuela; funciona mejor que el tercer café.'
    ]
  },
  {
    id: 'ap-single-tasking', titulo: 'Single-tasking: hacer una sola cosa es un superpoder', pilar: 'Cabeza', min: 3,
    cuerpo: [
      'El multitasking no existe. Lo que hace el cerebro es cambiar de tarea rápido, y cada cambio tiene un costo: quedan residuos de la tarea anterior ocupando la cabeza. Se llama "residuo atencional" y es la razón por la que un día de saltar entre cosas termina sin nada hecho.',
      'Tu bloque de foco entrena lo contrario: UNA cosa, 25-50 minutos, celular en otra habitación (no en silencio: en OTRA HABITACIÓN — la sola presencia visible del teléfono reduce la capacidad cognitiva, está medido).',
      'La primera semana va a ser incómoda: la mano va a buscar el teléfono sola. Eso no es falta de voluntad, es el hábito anterior descargándose. A la segunda semana el bloque empieza a rendir el doble que una tarde entera dispersa.',
      'Y esto compone: el que puede enfocarse 1 hora de verdad es raro, y lo raro se paga. Tu negocio futuro se construye en estos bloques.'
    ]
  },
  {
    id: 'ap-interes-compuesto', titulo: 'Interés compuesto: la matemática de tu fondo Brasil', pilar: 'Plata', min: 3,
    cuerpo: [
      'El interés compuesto es interés que gana interés. Suena chico; es la fuerza más poderosa de las finanzas personales. Y funciona igual con la plata, el músculo y los hábitos.',
      'Tu fondo Brasil es la versión simple: USD 415 por mes durante 6 meses. Ningún mes es impresionante. La suma sí. La regla es aportar TODOS los meses aunque el monto varíe — la constancia es la que compone, no el monto.',
      'La versión que pocos ven: funciona igual al revés. Gastos chicos repetidos (el delivery de $12.000 dos veces por semana) componen en tu contra: $100.000+ al mes que no viste pasar.',
      'El hábito que se construye acá no es "ahorrar para Brasil". Es ser una persona que aparta plata primero y gasta después. Brasil es el entrenamiento; el negocio y todo lo que venga usan el mismo músculo.'
    ]
  },
  {
    id: 'ap-pesos-ociosos', titulo: 'Pesos ociosos: por qué conviene pasarlos a dólares', pilar: 'Plata', min: 2,
    cuerpo: [
      'Peso que duerme en una cuenta en pesos, pierde. La inflación argentina se lo come en silencio: no ves el número bajar, ves que compra menos.',
      'La regla simple: en pesos, solo lo que vas a gastar en las próximas semanas (comida, fijos, gustos del mes). Todo lo que sea ahorro de más de un mes, a dólares, gradualmente — sin intentar adivinar el mejor momento del dólar, porque nadie puede.',
      'Gradual significa: un poco cada sueldo, siempre. Comprar todo junto un día es apostar; comprar de a poco todos los meses es promediar, y promediar le gana a adivinar en el largo plazo.',
      'Tu fondo Brasil ya funciona así: está en dólares porque el viaje se paga en dólares. Mismo principio para el resto.'
    ]
  },
  {
    id: 'ap-escape-disfrute', titulo: 'Porro de disfrute vs porro de escape', pilar: 'Cabeza', min: 3,
    cuerpo: [
      'Tu regla es 1 por día máximo, y el sistema la respeta sin juicio. Pero hay una distinción que vale oro y solo la podés hacer vos: ¿este porro es de disfrute o de escape?',
      'El de disfrute: elegiste fumarlo. Cierra un buen día, acompaña música o amigos, lo saboreás. Suma algo.',
      'El de escape: lo fumaste para no sentir otra cosa — ansiedad, aburrimiento, un pozo del día. No suma: pospone. Y lo pospuesto vuelve, con intereses.',
      'El cierre del día te lo pregunta suave cuando fumaste. No para retarte — para que el patrón se vuelva visible. Si notás semanas donde el escape gana, eso no es un problema de marihuana: es información de que algo del día necesita atención. La marihuana es el mensajero, no el mensaje.'
    ]
  },
  {
    id: 'ap-ancla-sueno', titulo: 'El ancla de las 8:00: por qué se fija la hora de despertar', pilar: 'Cabeza', min: 3,
    cuerpo: [
      'De todo el sueño, lo único fijo en tu sistema es despertarte 8:00 — también los fines de semana (con margen razonable). Lo que flota es la hora de acostarse. Esto tiene una razón de ingeniería.',
      'Tu reloj interno se calibra con la hora de despertar y la luz de la mañana. Si el despertar salta 3 horas el finde, el lunes tenés jet lag sin haber viajado — eso explica los domingos a la noche sin sueño y los lunes muertos.',
      'La hora de acostarse no se puede forzar: no te podés obligar a tener sueño. Pero despertar fijo + luz + el día activo hacen que el sueño llegue solo a la noche. Atacás la causa, no el síntoma.',
      'Tope 00:30 las noches normales, 2 noches de juego hasta la 1:00. Sin castigo si un día se rompe: el ancla de las 8:00 lo reacomoda todo en un día o dos.'
    ]
  },
  {
    id: 'ap-creatina', titulo: 'Creatina: el suplemento que sí funciona', pilar: 'Cuerpo', min: 2,
    cuerpo: [
      'De los cientos de suplementos del mercado, la creatina monohidrato es EL que tiene evidencia sólida: más fuerza, más volumen de entrenamiento, mejor recuperación, y beneficios cognitivos en estudio.',
      'Cómo funciona: recarga el sistema de energía rápida del músculo (fosfocreatina). Resultado práctico: una o dos reps más por serie. Eso, compuesto durante meses, es músculo visible.',
      'Lo único que importa: 5g TODOS los días. No importa la hora, no importa si entrenaste. Constancia > timing, porque funciona por saturación, no por efecto inmediato. Por eso está en tu bloque MAÑANA: para que sea automática con el café.',
      'Mitos rápidos: no daña riñones sanos (muy estudiado), no es "químico" (está en la carne), la retención de agua es DENTRO del músculo (te ves más lleno, no hinchado).'
    ]
  },
  {
    id: 'ap-neat', titulo: 'Pasos: el quemador silencioso', pilar: 'Cuerpo', min: 2,
    cuerpo: [
      'El gym quema menos de lo que parece: una sesión son ~300-400 kcal. Lo que de verdad mueve tu gasto diario es todo lo demás: caminar, moverse, no estar 14 horas sentado. Se llama NEAT y puede variar 500+ kcal entre un día quieto y uno activo.',
      'Por eso tus pasos importan tanto como la rutina: 10.000 los días de gym (la caminata ida y vuelta ya suma la mitad), 6.000 los demás. No es cardio, es no ser sedentario.',
      'El hack de oficina: cada llamada caminando, el baño del otro piso, bajarse una parada antes. Suena ridículo; son 2-3.000 pasos diarios gratis.',
      'Y para tu cabeza: la caminata es el antidepresivo con mejor evidencia que no requiere receta. Un día de pozo con 8.000 pasos termina distinto que el mismo día en el sillón.'
    ]
  },
  {
    id: 'ap-densidad', titulo: 'Densidad calórica: tu problema es al revés', pilar: 'Cuerpo', min: 2,
    cuerpo: [
      'El 90% de los consejos de nutrición son para gente que come de más. Vos comés de menos. Por eso tu plan hace lo contrario de una dieta: busca meter MÁS calorías en el mismo volumen de comida.',
      'Las armas: crema, manteca, oliva, palta, miel, maní. Grasas ricas que suman 100-200 kcal a un plato sin agrandarlo. El puré CON manteca no es trampa — es la receta.',
      'La trampa clásica del flaco: llenarse de volumen sin calorías (ensaladas, sopas, agua antes de comer) y después no llegar ni a 1.800. Si el hambre es poco, cada bocado tiene que rendir.',
      'Señal de alarma: si en Progreso ves varios días abajo de 1.800 kcal, el problema de la semana no fue el entrenamiento. Fue el tenedor.'
    ]
  },
  {
    id: 'ap-bruxismo', titulo: 'Bruxismo: qué le pasa a tu mandíbula de noche', pilar: 'Cuerpo', min: 2,
    cuerpo: [
      'Bruxar es apretar o rechinar los dientes dormido. Presión de decenas de kilos, horas, todas las noches. De ahí tu placa — y probablemente parte de tus dolores de cabeza: el masetero y el temporal tensos tiran de toda la cabeza.',
      'La placa protege los dientes, pero no relaja el músculo: por eso existen tus ejercicios de mandíbula (masaje del masetero, apertura controlada, estiramiento). SIN placa, de día. La placa es el casco; los ejercicios son el tratamiento.',
      'El disparador número uno es el estrés acumulado del día. La rutina de bajada nocturna (respiración, descarga, magnesio) no es solo para dormir mejor: es para llegar a la cama con menos tensión que descargar en los dientes.',
      'Señal para el dentista: si notás los dientes sensibles a la mañana o la placa muy marcada, mencionalo en el próximo control.'
    ]
  },
  {
    id: 'ap-nerd-neck', titulo: 'Nerd neck: la postura que te cambia la cara', pilar: 'Cuerpo', min: 2,
    cuerpo: [
      'Cabeza adelantada: la postura de mirar pantallas 8 horas. Por cada centímetro que la cabeza avanza, el cuello carga kilos extra. Resultado: cuello duro, dolores de cabeza, y un perfil con papada que no es grasa — es postura.',
      'La prueba: sacate una foto de perfil relajado. Si la oreja está bien adelante del hombro, ahí está tu papada postural. Corregila y la línea de la mandíbula aparece sin perder un gramo.',
      'El ejercicio estrella es la retracción cervical (el "doble mentón"): lleva la cabeza atrás a su lugar. Está en tus pausas de oficina y en la rutina de Cara. Frecuencia > intensidad: 10 retracciones 3 veces al día le ganan a 100 el domingo.',
      'El gym también corrige: face pulls, peck deck invertida y remo empujan los hombros atrás. La postura no se "recuerda" — se entrena hasta que el cuerpo la adopta solo.'
    ]
  },
  {
    id: 'ap-friccion', titulo: 'Fricción: el diseño le gana a la voluntad', pilar: 'Sistema', min: 3,
    cuerpo: [
      'La regla de oro del comportamiento: lo fácil se hace, lo difícil se pospone. La motivación fluctúa; la fricción es constante. Entonces no se trata de tener más voluntad — se trata de diseñar el camino fácil.',
      'Ya lo estás usando sin saberlo: el tarrito de avena armado la noche anterior elimina la fricción del desayuno a las 8:10. La cena de olla para 3 días elimina la de cocinar cansado. El bolso del gym preparado elimina la excusa de las 17:45.',
      'La versión inversa funciona igual: sumale fricción a lo que querés evitar. El celular en otra habitación durante el foco. Los permitidos que no compraste no se comen.',
      'El ejercicio: cuando algo del plan se te caiga varias veces, no te preguntes "¿por qué no tengo disciplina?". Preguntate "¿dónde está la fricción?" y sacala. Es un problema de diseño, no de carácter.'
    ]
  },
  {
    id: 'ap-version-minima', titulo: 'La versión mínima: por qué hacer poco funciona', pilar: 'Sistema', min: 2,
    cuerpo: [
      'Tu app ofrece versión corta de todo: gym de 3 ejercicios, movilidad de 2 minutos. No es un premio consuelo — es la pieza más importante del sistema.',
      'La matemática del hábito: lo que lo mata no es hacer poco, es el CERO. El cero rompe la identidad ("soy alguien que entrena") y un cero llama al siguiente. El día de 3 ejercicios mantiene la cadena viva con el 20% del esfuerzo.',
      'Además, el 80% de las veces que arrancás la versión mínima, terminás haciendo más: empezar era la única barrera real. Y si no — 3 ejercicios igual suman.',
      'La trampa mental a evitar: "si no puedo hacerlo completo, no vale la pena". Eso es perfeccionismo disfrazado de exigencia, y es la causa #1 de abandono. Hacer poco > no hacer. Siempre. Está grabado en el sistema por algo.'
    ]
  },
  {
    id: 'ap-entorno', titulo: 'Diseño del entorno: tu casa decide por vos', pilar: 'Sistema', min: 2,
    cuerpo: [
      'Cada decisión que tomás gasta energía mental. Las personas consistentes no deciden mejor: deciden MENOS, porque su entorno ya decidió por ellas.',
      'En tu departamento: la creatina al lado de la cafetera (se toma sola). El bolso del gym junto a la puerta. La whey visible, los permitidos en el estante alto de atrás. El cargador del celular LEJOS de la cama.',
      'Ese último es el más rendidor: si el teléfono duerme en la cocina, el scroll de la 1 AM no existe y el tope de las 00:30 se cumple solo. Una decisión de diseño reemplaza 365 batallas de voluntad.',
      'El principio: hacé visible lo que querés hacer, invisible lo que querés evitar. Recorré tu depto una vez con ese lente y acomodá 5 cosas. Rinde más que un mes de motivación.'
    ]
  },
  {
    id: 'ap-journaling', titulo: 'Una línea por día: journaling sin vueltas', pilar: 'Cabeza', min: 2,
    cuerpo: [
      'El cierre te hace una pregunta por noche y espera UNA línea. No es un diario íntimo ni una práctica de escritura: es un extractor de información que de otra forma se pierde.',
      '"¿Qué te sacó energía?" repetida 30 noches dibuja un mapa: capaz 12 veces la respuesta menciona lo mismo. Eso es un dato de ingeniería personal que ninguna reflexión de domingo a la noche te da.',
      'La regla es una línea porque una línea no da fiaca. El journaling de 3 páginas se abandona en una semana; el de una línea sobrevive meses — y 100 líneas valen más que 3 páginas sueltas.',
      'No lo pienses. Lo primero que aparezca es la respuesta correcta: la reflexión honesta vive en el primer impulso, no en la versión editada.'
    ]
  },
  {
    id: 'ap-suspiro', titulo: 'El suspiro fisiológico: el botón de calma más rápido', pilar: 'Cabeza', min: 2,
    cuerpo: [
      'Existe un patrón de respiración que baja el estrés más rápido que cualquier otro, y tu cuerpo ya lo hace solo cuando llora o antes de dormirse: dos inhalaciones por la nariz (una grande + una cortita arriba) y una exhalación larga por la boca.',
      'Por qué funciona: la doble inhalación reinfla los alvéolos colapsados y permite descargar más CO2 en la exhalación larga. Resultado medible: pulsaciones abajo en segundos. Es fisiología, no relajación new age.',
      'Cuándo: el momento agudo. El mail que te hierve la sangre, el pico de ansiedad, la frustración en el gym. 1 a 3 suspiros y el cuerpo baja un cambio — no necesitás los 5 minutos de una sesión.',
      'Es la herramienta de emergencia. Las sesiones de respiración de la noche son el entrenamiento de base; esto es el botón de pánico. Gratis, invisible, siempre encima.'
    ]
  },
  {
    id: 'ap-progresion', titulo: 'Sobrecarga progresiva: el único secreto del gym', pilar: 'Cuerpo', min: 2,
    cuerpo: [
      'El músculo crece por una sola razón: le pedís un poco más que la vez anterior. Más peso, una rep más, mejor técnica. Sin progresión no hay crecimiento, aunque vayas todos los días.',
      'Tu regla concreta: cuando llegás al tope de reps con técnica limpia (las 10 de "4×8-10"), subís 2-2,5 kg la próxima. Vuelve a costar, volvés a construir hasta el tope, repetís. Ese ciclo ES el progreso — todo lo demás es decoración.',
      'Por eso anotás los pesos en la app: la memoria miente y el "más o menos lo mismo que la vez pasada" estanca. El dato escrito te obliga a la honestidad.',
      'Cuidado con la progresión trucha: subir peso rompiendo la técnica (medio rango, hamacarse). Eso no es más fuerte — es hacer trampa en un juego donde el único que pierde sos vos.'
    ]
  },
  {
    id: 'ap-identidad', titulo: 'Hábitos de identidad: sé el tipo que va', pilar: 'Sistema', min: 2,
    cuerpo: [
      'Hay dos formas de pensar un objetivo: "quiero llegar a Brasil marcado" (resultado) o "soy el tipo que entrena lunes, martes y jueves" (identidad). La segunda gana siempre.',
      'Por qué: los resultados llegan tarde. Semanas de gym sin cambios visibles en el espejo — si tu motor es el resultado, ahí abandonás. Si tu motor es la identidad, cada sesión ES la victoria: fuiste, sos el que va, caso cerrado.',
      'Cada pieza que marcás en HOY es un voto por esa identidad. No importa que sea la versión mínima: el voto cuenta igual. 30 votos después, "el que entrena" ya no es una aspiración — es una descripción.',
      'Y la identidad compone hacia todos lados: el que entrena constante empieza a comer como alguien que entrena, a dormir como alguien que entrena. Un hábito de identidad arrastra a los demás.'
    ]
  }
];

// Preguntas rotativas del journaling del cierre (§5.5).
const PREGUNTAS_CIERRE = [
  '¿Qué aprendiste hoy?',
  '¿Qué harías distinto?',
  '¿Qué te sacó energía?'
];
