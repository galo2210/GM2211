// NORTE · contenido MOVILIDAD v2 — instrucciones reescritas de raíz (16/07/2026).
// Regla de oro de cada paso: POSICIÓN inicial + MOVIMIENTO con dirección + CANTIDAD.
// Autocontenido: se puede hacer sin haber visto nunca el ejercicio. Nada acá toca el store.

const RUTINAS_MOV = [

  // ==================== MAÑANA ====================
  {
    id: 'activar-3', nombre: 'Activar en 3 min', categoria: 'Mañana', dur: '3 min',
    problemas: ['cuello duro', 'estrés'],
    pasos: [
      { nombre: 'Círculos de cuello', seg: 40, instruccion: 'De pie, brazos sueltos. Dejá caer el mentón al pecho y rodá la cabeza despacio hacia un hombro, atrás, el otro hombro y de vuelta al pecho: un círculo completo en 5 segundos. 3 círculos para un lado, 3 para el otro.', sentir: 'El cuello despegándose de la almohada, sin ningún punto de dolor.' },
      { nombre: 'Gato-vaca de pie', seg: 45, instruccion: 'Pies al ancho de hombros, rodillas apenas dobladas, manos apoyadas en los muslos. Redondeá toda la espalda mirándote el ombligo (como un gato asustado), después arqueala sacando pecho y mirando al frente-arriba. Alterná lento: 3 segundos cada posición, 6-7 veces.', sentir: 'La columna moviéndose vértebra por vértebra, de arriba a abajo.' },
      { nombre: 'Círculos de brazos', seg: 45, instruccion: 'De pie, brazos estirados a los costados. Dibujá círculos GRANDES con los dos brazos a la vez, como nadando: 5 hacia adelante y 5 hacia atrás, lentos y con el rango completo (los brazos pasan cerca de las orejas).', sentir: 'Los hombros que bajan de las orejas y se aflojan.' },
      { nombre: 'Bisagra + alcance al cielo', seg: 50, instruccion: 'Pies al ancho de hombros. Bajá el torso hacia adelante con la espalda RECTA y las rodillas apenas dobladas, deslizando las manos por las piernas hasta donde lleguen sin dolor. Subí, y al llegar arriba estirá los dos brazos al techo poniéndote en puntas de pie. 5 veces, lento.', sentir: 'Todo el cuerpo prendido de una pasada. Listo para el día.' }
    ]
  },
  {
    id: 'despertar-7', nombre: 'Despertar completo', categoria: 'Mañana', dur: '7 min',
    problemas: ['cuello duro', 'espalda baja'],
    pasos: [
      { nombre: 'Cuello completo', seg: 60, instruccion: 'Sentado o de pie. Primero "sí": mentón al pecho y cabeza atrás, 5 veces lento. Después "no": girá la cabeza mirando por encima de cada hombro, 5 por lado. Cerrá con oreja al hombro (sin levantar el hombro), 3 por lado.', sentir: 'Cada dirección un poco más suelta que la anterior.' },
      { nombre: 'Gato-vaca en el piso', seg: 90, instruccion: 'En el piso en cuatro patas: manos bajo los hombros, rodillas bajo la cadera. Al exhalar, redondeá la espalda al techo metiendo el mentón. Al inhalar, hundí la panza arqueando y mirá al frente. 10-12 ciclos siguiendo tu respiración.', sentir: 'La espalda baja que afloja con cada arco.' },
      { nombre: 'Cobra → perro boca abajo', seg: 90, instruccion: 'Boca abajo, manos junto al pecho. Empujá el piso y subí el pecho con la cadera apoyada, mirando al frente (cobra). Después meté la panza, subí la cola al techo y empujá con brazos rectos hasta quedar como una V invertida, talones buscando el piso (perro). Alterná: 4 segundos en cada una, 5-6 veces.', sentir: 'El frente del cuerpo estirándose en cobra; piernas y espalda en el perro.' },
      { nombre: 'Sentadilla profunda sostenida', seg: 60, instruccion: 'Pies apenas más anchos que los hombros, puntas un poco hacia afuera. Bajá la cola HASTA ABAJO de todo, como sentándote entre los talones, con los talones apoyados. Juntá las palmas frente al pecho y empujá las rodillas hacia afuera con los codos. Quedate ahí respirando; si perdés equilibrio, agarrate de algo firme.', sentir: 'La cadera abriéndose. Que tire es normal; que duela agudo, no.' },
      { nombre: 'Pecho en el marco de la puerta', seg: 60, instruccion: 'Parate en una puerta. Apoyá el antebrazo derecho contra el marco, con el codo a la altura del hombro doblado a 90°. Dá un paso corto adelante con el pie derecho y girá el torso hacia la IZQUIERDA hasta sentir el estiramiento en el pecho. 30 segundos y cambiá de lado.', sentir: 'El pecho abierto: exactamente lo contrario de estar en la compu.' },
      { nombre: 'Respiración de pie', seg: 60, instruccion: 'De pie, brazos sueltos, ojos entrecerrados. Inhalá por la nariz contando 4, exhalá por la boca contando 6. Repetí hasta que termine el timer.', sentir: 'Cuerpo despierto, cabeza tranquila. Así se arranca.' }
    ]
  },
  {
    id: 'piso-10', nombre: 'Piso 10', categoria: 'Mañana', dur: '10 min',
    problemas: ['espalda baja', 'cadera'],
    pasos: [
      { nombre: 'Gato-vaca', seg: 90, instruccion: 'En cuatro patas, manos bajo hombros y rodillas bajo cadera. Exhalá redondeando la espalda al techo con el mentón al pecho; inhalá arqueando con la panza al piso y la mirada al frente. 12 ciclos lentos al ritmo de tu respiración.', sentir: 'La columna lubricándose de punta a punta.' },
      { nombre: 'Enhebrar la aguja', seg: 120, instruccion: 'Desde cuatro patas: levantá la mano derecha del piso y pasala por DEBAJO de tu pecho hacia la izquierda, deslizándola por el piso hasta que el hombro y la oreja derechos queden apoyados. El brazo izquierdo puede estirarse adelante. Quedate 60 segundos respirando y cambiá de lado.', sentir: 'Un estiramiento profundo entre los omóplatos — la zona que la silla castiga.' },
      { nombre: 'Cobra → posición del niño', seg: 120, instruccion: 'Boca abajo, subí el pecho empujando con las manos (cadera en el piso): cobra, 5 respiraciones. Después empujate hacia atrás hasta sentarte sobre los talones con el pecho sobre las rodillas, brazos largos adelante y la frente al piso: niño, 5 respiraciones. Alterná 3 veces.', sentir: 'La espalda baja que se comprime suave y se alarga, como un acordeón.' },
      { nombre: 'Paloma suave', seg: 150, instruccion: 'Desde cuatro patas, traé la rodilla derecha adelante y apoyala detrás de tu muñeca derecha, con la pantorrilla cruzada bajo el cuerpo. Estirá la pierna izquierda larga hacia atrás. Bajá el torso sobre la pierna delantera hasta donde sea cómodo, apoyando antebrazos o frente. 75 segundos respirando y cambiá de lado.', sentir: 'El glúteo profundo de la pierna delantera cediendo. Ahí vive la tensión de estar sentado.' },
      { nombre: 'Giro acostado', seg: 120, instruccion: 'Boca arriba, brazos en cruz. Llevá las dos rodillas dobladas al pecho y dejalas caer juntas hacia la derecha hasta el piso, girando la cabeza hacia la IZQUIERDA. Los dos hombros quedan apoyados. 60 segundos por lado.', sentir: 'La columna girando sin esfuerzo. Cierre redondo.' }
    ]
  },
  {
    id: 'activacion-fuerte-12', nombre: 'Activación fuerte', categoria: 'Mañana', dur: '12 min',
    problemas: ['estrés'],
    pasos: [
      { nombre: 'Jumping jacks suaves', seg: 60, instruccion: 'De pie. Saltá abriendo piernas y subiendo los brazos por los costados hasta arriba; otro salto y volvés a cerrar. Ritmo cómodo y parejo, sin volar: el objetivo es despertar, no agotar.', sentir: 'El pulso que sube y el cuerpo que entra en temperatura.' },
      { nombre: 'Sentadillas al aire', seg: 90, instruccion: 'Pies al ancho de hombros, puntas apenas afuera. Bajá la cola atrás y abajo como sentándote en una silla invisible, hasta que los muslos queden paralelos al piso, con los brazos estirados al frente de contrapeso. Subí empujando con los talones. 15-20, a 2 segundos por rep.', sentir: 'Piernas y glúteos prendidos, rodillas siguiendo la línea de los pies.' },
      { nombre: 'Flexiones fáciles', seg: 90, instruccion: 'Manos al piso apenas más anchas que los hombros, cuerpo en tabla recta (o rodillas apoyadas para aliviar). Bajá el pecho hasta casi tocar el piso con los codos saliendo a 45°, y empujá para subir. 8-12 con técnica limpia; si se rompe la forma, pasá a rodillas.', sentir: 'Pecho y brazos despiertos, abdomen sosteniendo la tabla.' },
      { nombre: 'Estocadas alternadas', seg: 120, instruccion: 'De pie. Dá un paso LARGO adelante con la pierna derecha y bajá la rodilla izquierda hacia el piso hasta que las dos rodillas queden a 90°, torso derecho. Empujá con el talón delantero para volver a pararte y alterná de pierna. 10 por lado.', sentir: 'Equilibrio y piernas trabajando juntas; el paso largo protege la rodilla.' },
      { nombre: 'Plancha', seg: 60, instruccion: 'Antebrazos al piso con los codos bajo los hombros, cuerpo en línea recta de cabeza a talones. Apretá glúteos y abdomen; no dejes que la cadera se hunda ni suba. Aguantá lo que dé con buena forma; si la cadera cae, cortá y retomá.', sentir: 'El centro del cuerpo firme como una tabla.' },
      { nombre: 'Gato-vaca', seg: 90, instruccion: 'En cuatro patas: exhalá redondeando la espalda al techo, inhalá arqueando con la mirada al frente. 10 ciclos lentos para bajar las revoluciones.', sentir: 'La transición de activado a controlado.' },
      { nombre: 'Hombros con toalla', seg: 120, instruccion: 'Agarrá una toalla con las dos manos, bien separadas, brazos estirados frente a los muslos. Con los brazos RECTOS, llevala por encima de la cabeza y seguí hasta atrás todo lo que dé sin doblar codos; volvé por el mismo camino. 10 pasadas lentas. Si no llega atrás, agarrá más separado.', sentir: 'Los hombros ganando espacio en cada pasada.' },
      { nombre: 'Respiración final', seg: 90, instruccion: 'Sentado o de pie, ojos cerrados. Inhalá por la nariz contando 4, exhalá por la boca contando 6, hasta que suene el timer.', sentir: 'Energía con calma: la mejor combinación para arrancar.' }
    ]
  },

  // ==================== PAUSAS OFICINA (discretas, en silla) ====================
  {
    id: 'cuello-ojos-2', nombre: 'Cuello y ojos', categoria: 'Pausas oficina', dur: '2 min',
    problemas: ['cuello duro', 'dolor de cabeza'],
    pasos: [
      { nombre: 'Inclinación asistida', seg: 40, instruccion: 'Sentado derecho. Dejá caer la oreja derecha hacia el hombro derecho, y con la mano derecha por encima de la cabeza hacé una presión MUY suave hacia abajo (el peso de la mano, nada más). La mano izquierda cuelga. 20 segundos y cambiá de lado. Nadie nota nada.', sentir: 'El costado del cuello cediendo milímetro a milímetro.' },
      { nombre: 'Retracción cervical', seg: 40, instruccion: 'Sentado derecho mirando la pantalla. Sin inclinar la cabeza, llevala HACIA ATRÁS en línea recta, como haciendo papada a propósito, alejando la cara de la pantalla. Sostené 2 segundos y soltá. 10 veces.', sentir: 'La nuca que se alarga y la cabeza que vuelve a su lugar.' },
      { nombre: 'Ojos: lejos y círculos', seg: 40, instruccion: 'Elegí el punto MÁS LEJANO que veas (por la ventana, el fondo de la oficina) y miralo fijo 20 segundos sin enfocar la pantalla. Después, sin mover la cabeza, dibujá 2 círculos lentos con los ojos: arriba, costado, abajo, costado.', sentir: 'Los ojos desenfocando por fin. Descanso real de pantalla.' }
    ]
  },
  {
    id: 'espalda-alta-2', nombre: 'Espalda alta', categoria: 'Pausas oficina', dur: '2 min',
    problemas: ['cuello duro', 'hombros'],
    pasos: [
      { nombre: 'Encoger y soltar', seg: 30, instruccion: 'Sentado. Subí los DOS hombros hacia las orejas todo lo que den, apretá fuerte 3 segundos… y soltalos de golpe dejándolos caer. 5 veces.', sentir: 'La tensión acumulada que se va justo en el momento de soltar.' },
      { nombre: 'Abrazo y apertura', seg: 45, instruccion: 'Abrazate a vos mismo cruzando los brazos, agarrando cada hombro con la mano contraria, y empujá 5 segundos separando los omóplatos. Después abrí los brazos hacia atrás con las palmas al frente, juntando los omóplatos y sacando pecho, 5 segundos. Alterná 4 veces.', sentir: 'Los omóplatos que se separan y se juntan: la espalda alta respirando.' },
      { nombre: 'Extensión en la silla', seg: 45, instruccion: 'Entrelazá las manos detrás de la nuca, codos abiertos. Arqueate hacia ATRÁS por encima del respaldo de la silla, llevando los codos al techo y la mirada arriba. 10 segundos, volvé, repetí 3 veces.', sentir: 'La espalda alta abriéndose contra el borde del respaldo.' }
    ]
  },
  {
    id: 'cadera-sentada-2', nombre: 'Cadera sentada', categoria: 'Pausas oficina', dur: '2 min',
    problemas: ['cadera', 'espalda baja'],
    pasos: [
      { nombre: 'Figura 4 en la silla', seg: 60, instruccion: 'Sentado, apoyá el tobillo derecho sobre la rodilla izquierda (las piernas forman un 4). Con la espalda recta, inclinate apenas hacia adelante desde la cadera hasta sentir el estiramiento en el glúteo derecho. 30 segundos y cambiá de pierna. Parece que estás leyendo algo: discreto total.', sentir: 'El glúteo profundo estirando — el músculo más apretado de tu jornada.' },
      { nombre: 'Báscula pélvica sentado', seg: 30, instruccion: 'Sentado con los pies apoyados. Sin mover el torso, rotá la pelvis: arqueá la zona lumbar sacando la cola hacia atrás, después redondeala metiendo la cola abajo. Alterná lento, 8 veces.', sentir: 'La espalda baja despertando sin que nadie vea nada.' },
      { nombre: 'Flexor de cadera de pie', seg: 30, instruccion: 'Parate (como quien va a buscar algo). Dá medio paso atrás con el pie derecho, apretá el glúteo derecho y empujá la cadera apenas hacia adelante, sin arquear la espalda. 15 segundos y cambiá. Parece un simple desperezo.', sentir: 'El frente de la cadera que estuvo doblado toda la mañana, estirándose.' }
    ]
  },
  {
    id: 'munecas-2', nombre: 'Muñecas', categoria: 'Pausas oficina', dur: '2 min',
    problemas: [],
    pasos: [
      { nombre: 'Círculos de muñeca', seg: 30, instruccion: 'Entrelazá los dedos de las dos manos frente al pecho y dibujá ochos fluidos con las muñecas, 15 segundos para cada dirección.', sentir: 'Las muñecas sueltas después de horas de mouse y teclado.' },
      { nombre: 'Estiramiento de flexores', seg: 45, instruccion: 'Estirá el brazo derecho al frente con la PALMA HACIA ARRIBA. Con la mano izquierda, agarrá los dedos derechos y tiralos suavemente hacia abajo y hacia vos, hasta sentir el estiramiento en la cara interna del antebrazo. 20 segundos por brazo.', sentir: 'El antebrazo por dentro, desde la muñeca hasta el codo.' },
      { nombre: 'Estiramiento de extensores', seg: 45, instruccion: 'Ahora brazo derecho al frente con la palma HACIA ABAJO y la mano caída. Con la izquierda, empujá el dorso de la mano derecha hacia vos. 20 segundos por brazo.', sentir: 'La cara externa del antebrazo. Adiós tensión de teclado.' }
    ]
  },
  {
    id: 'respiracion-reset-90', nombre: 'Respiración reset', categoria: 'Pausas oficina', dur: '90 seg',
    problemas: ['estrés', 'dolor de cabeza'],
    pasos: [
      { nombre: 'Respiración 4-6', seg: 90, instruccion: 'Sentado normal en tu silla, ojos en la pantalla o entrecerrados: nadie nota nada. Inhalá por la nariz contando mentalmente hasta 4, exhalá lento por la nariz contando hasta 6. Repetí sin pausa hasta que suene el timer (unas 9 respiraciones).', sentir: 'Las pulsaciones bajando una a una. Reset de mitad de jornada.' }
    ]
  },
  {
    id: 'full-oficina-5', nombre: 'Full oficina', categoria: 'Pausas oficina', dur: '5 min',
    problemas: ['cuello duro', 'hombros', 'cadera'],
    pasos: [
      { nombre: 'Cuello', seg: 60, instruccion: 'Sentado derecho: oreja al hombro con la mano apoyada suave encima, 15 segundos por lado. Después la retracción: cabeza hacia atrás en línea recta (papada a propósito), 2 segundos, 8 veces.', sentir: 'El cuello con espacio de nuevo.' },
      { nombre: 'Hombros', seg: 60, instruccion: 'Subí los dos hombros a las orejas, apretá 3 segundos y soltá de golpe: 5 veces. Después 5 círculos grandes con los hombros hacia atrás.', sentir: 'Los hombros lejos de las orejas, donde deben vivir.' },
      { nombre: 'Espalda alta', seg: 60, instruccion: 'Abrazate apretando 5 segundos, abrí los brazos atrás sacando pecho 5 segundos: 3 veces. Cerrá con un arco hacia atrás sobre el respaldo, codos al techo, 10 segundos.', sentir: 'La zona media despierta.' },
      { nombre: 'Cadera figura 4', seg: 60, instruccion: 'Tobillo derecho sobre rodilla izquierda, espalda recta, inclinate apenas adelante: 30 segundos. Cambiá de pierna.', sentir: 'El glúteo profundo cediendo.' },
      { nombre: 'Respiración', seg: 60, instruccion: 'Inhalá 4, exhalá 6, por la nariz, hasta el final del timer.', sentir: 'Vuelta al trabajo con otro cuerpo.' }
    ]
  },

  // ==================== PRE-GYM ====================
  {
    id: 'pre-empuje-4', nombre: 'Pre-empuje', categoria: 'Pre-gym', dur: '4 min',
    problemas: ['hombros'],
    pasos: [
      { nombre: 'Círculos de brazos', seg: 60, instruccion: 'De pie, brazos estirados a los costados. Círculos GRANDES con los dos brazos a la vez, rozando las orejas al pasar: 10 hacia adelante, 10 hacia atrás, cada vez más amplios.', sentir: 'El hombro entrando en calor con el rango completo.' },
      { nombre: 'Rotación externa contra el marco', seg: 60, instruccion: 'Pegá el codo derecho al costado del cuerpo, doblado a 90°, con la palma hacia arriba y el dorso de la mano contra un marco o máquina. SIN despegar el codo del cuerpo, empujá la mano hacia afuera contra la resistencia 5 segundos, soltá. 6 veces por brazo. (Con banda elástica si hay: mismo gesto, girando contra la banda.)', sentir: 'Un músculo chiquito detrás del hombro que se enciende: tu seguro para los presses.' },
      { nombre: 'Apertura dinámica de pecho', seg: 60, instruccion: 'De pie, brazos estirados al frente a la altura de los hombros, palmas juntas. Abrilos hacia atrás todo lo que den, sacando pecho, y volvé a cruzarlos adelante alternando cuál queda arriba. 15 repeticiones, ganando rango en cada una.', sentir: 'El pecho estirándose activo, listo para trabajar.' },
      { nombre: 'Flexiones lentas', seg: 60, instruccion: 'Manos al piso apenas más anchas que los hombros, cuerpo en tabla (o rodillas apoyadas). Bajá el pecho al piso en 3 segundos, subí en 1. 8 repeticiones perfectas.', sentir: 'Los músculos del día avisados. A la primera serie con todo.' }
    ]
  },
  {
    id: 'pre-tiron-4', nombre: 'Pre-tirón', categoria: 'Pre-gym', dur: '4 min',
    problemas: ['hombros', 'cuello duro'],
    pasos: [
      { nombre: 'Colgarse de la barra', seg: 60, instruccion: 'Agarrate de la barra de dominadas con agarre ancho y colgate con los pies en el aire (o apoyados atrás si pesa mucho), dejando que los hombros suban hacia las orejas y la espalda se estire. 2 tandas de 20-25 segundos con una pausa entre medio.', sentir: 'Los dorsales alargándose y la columna descomprimiéndose después del día sentado.' },
      { nombre: 'Retracción escapular colgado', seg: 60, instruccion: 'Colgado de la barra (o en el jalón con peso liviano, brazos estirados): SIN doblar los codos, empujá los hombros hacia abajo y atrás — el cuerpo sube 5 cm solo. Sostené 2 segundos, soltá despacio. 10 veces.', sentir: 'El gesto exacto que inicia todos tus tirones, aislado y aprendido.' },
      { nombre: 'Rotaciones torácicas', seg: 60, instruccion: 'En cuatro patas, mano derecha en la nuca. Llevá el codo derecho hacia la muñeca izquierda girando el torso, y después abrilo hacia el techo girando al otro lado y siguiéndolo con la mirada. 8 por lado, lento.', sentir: 'La espalda media girando: rango que tus remos van a usar.' },
      { nombre: 'Face pull liviano', seg: 60, instruccion: 'Polea a la altura de la cara con soga, peso MUY liviano. Tirá la soga hacia la frente separando las puntas, codos altos y abiertos, y terminá con las manos a los costados de las orejas. 15 repeticiones de calentamiento.', sentir: 'La parte trasera del hombro lista para el día de espalda.' }
    ]
  },
  {
    id: 'pre-pierna-5', nombre: 'Pre-pierna', categoria: 'Pre-gym', dur: '5 min',
    problemas: ['cadera'],
    pasos: [
      { nombre: 'Sentadilla profunda sostenida', seg: 60, instruccion: 'Pies apenas más anchos que los hombros, puntas algo afuera. Bajá HASTA ABAJO con los talones apoyados, palmas juntas al pecho y codos empujando las rodillas hacia afuera. Quedate respirando ahí abajo; salí y volvé a entrar 2-3 veces si lo sostenido cuesta.', sentir: 'Tobillos y cadera haciendo lugar para la prensa.' },
      { nombre: 'Estocada con rotación', seg: 90, instruccion: 'Paso LARGO adelante con la pierna derecha, bajando la rodilla izquierda cerca del piso. Desde ahí, girá el torso hacia la DERECHA (el lado de la pierna adelantada) con los brazos al frente, volvé al centro y levantate. 5 por lado, alternando.', sentir: 'Cadera y columna trabajando juntas, como en la vida real.' },
      { nombre: 'Balanceos de pierna', seg: 60, instruccion: 'Agarrate de una máquina con la mano izquierda. Balanceá la pierna derecha RECTA como un péndulo: 10 veces adelante-atrás bien amplio, y 10 veces cruzando frente al cuerpo de lado a lado. Cambiá de pierna.', sentir: 'La cadera suelta en las dos direcciones que la prensa necesita.' },
      { nombre: 'Puente de glúteo', seg: 90, instruccion: 'Boca arriba, rodillas dobladas, pies apoyados cerca de la cola al ancho de cadera, brazos al piso. Empujá con los TALONES subiendo la cadera hasta que el cuerpo quede en línea recta de rodillas a hombros; apretá los glúteos 1 segundo arriba y bajá. 15 repeticiones.', sentir: 'Los glúteos encendidos ANTES de tocar la prensa: eso los hace trabajar en serio.' }
    ]
  },
  {
    id: 'pre-general-6', nombre: 'Pre-gym general', categoria: 'Pre-gym', dur: '6 min',
    problemas: [],
    pasos: [
      { nombre: 'Trote en el lugar', seg: 90, instruccion: 'Trotá en el lugar a ritmo cómodo, aterrizando suave en la punta del pie, brazos acompañando relajados. Si preferís: saltos de soga imaginaria, muñecas girando.', sentir: 'La temperatura subiendo, la respiración apenas agitada.' },
      { nombre: 'Círculos completos de brazos', seg: 60, instruccion: 'Brazos estirados: 10 círculos grandes hacia adelante y 10 hacia atrás, rozando las orejas al pasar por arriba.', sentir: 'Hombros despiertos y con rango.' },
      { nombre: 'Gato-vaca de pie', seg: 60, instruccion: 'Manos apoyadas en los muslos, rodillas blandas. Redondeá toda la espalda mirando el ombligo, después arqueala sacando pecho y mirando arriba. 8 ciclos lentos.', sentir: 'La columna lista para cargar.' },
      { nombre: 'Sentadillas al aire', seg: 90, instruccion: 'Pies al ancho de hombros. Bajá la cola atrás y abajo hasta muslos paralelos al piso, brazos al frente, y subí con los talones. 15 controladas y profundas.', sentir: 'Piernas y cadera activas.' },
      { nombre: 'Rotaciones de cadera', seg: 60, instruccion: 'Manos en la cintura, pies fijos al ancho de hombros. Dibujá círculos AMPLIOS con la cadera como con un hula hoop: 8 para un lado, 8 para el otro.', sentir: 'Todo el eje central listo para el trabajo pesado.' }
    ]
  },

  // ==================== NOCHE ====================
  {
    id: 'descarga-rapida-4', nombre: 'Descarga rápida', categoria: 'Noche', dur: '4 min',
    problemas: ['cuello duro', 'estrés'],
    pasos: [
      { nombre: 'Cuello suave', seg: 60, instruccion: 'Sentado en la cama o el sillón, ojos cerrados si querés. Oreja al hombro 15 segundos por lado con la mano suave encima. Después 2 círculos completos de cabeza, lentísimos, para cada lado.', sentir: 'El día que empieza a soltarse por el cuello.' },
      { nombre: 'Pecho en la puerta', seg: 60, instruccion: 'Antebrazo contra el marco de la puerta con el codo a la altura del hombro, paso corto adelante, girá el torso hacia el lado contrario. 30 segundos por brazo, respirando largo.', sentir: 'El pecho abierto después de las horas de compu.' },
      { nombre: 'Colgado hacia adelante', seg: 60, instruccion: 'De pie, pies al ancho de cadera, rodillas BLANDAS. Dejá caer el torso hacia adelante como un trapo, brazos y cabeza colgando pesados, sin intentar tocarte los pies. Balanceate apenas de lado a lado. Para subir: despacio, redondeando la espalda vértebra a vértebra.', sentir: 'La espalda entera descomprimiendo con la gravedad a favor.' },
      { nombre: 'Respiración', seg: 60, instruccion: 'Sentado o acostado: inhalá por la nariz contando 4, exhalá por la boca contando 6, hasta el final.', sentir: 'Modo noche activado.' }
    ]
  },
  {
    id: 'descarga-completa-8', nombre: 'Descarga completa', categoria: 'Noche', dur: '8 min',
    problemas: ['espalda baja', 'cuello duro', 'estrés'],
    pasos: [
      { nombre: 'Cuello completo', seg: 90, instruccion: 'Sentado: "sí" lento (mentón al pecho, cabeza atrás) 5 veces; "no" mirando sobre cada hombro, 5 por lado; oreja al hombro con mano suave, 15 segundos por lado. Todo al 50% de velocidad.', sentir: 'La tensión del día ubicada y soltada, zona por zona.' },
      { nombre: 'Pecho en la puerta', seg: 60, instruccion: 'Antebrazo en el marco, codo a la altura del hombro, paso adelante y giro suave del torso al lado contrario. 30 segundos por lado.', sentir: 'Apertura y respiración más ancha.' },
      { nombre: 'Posición del niño', seg: 90, instruccion: 'De rodillas en el piso o la cama, rodillas separadas al ancho de la colchoneta, sentate sobre los talones y llevá el pecho al piso con los brazos largos adelante y la frente apoyada. Respirá hacia la panza contra los muslos.', sentir: 'Refugio: la espalda baja larga y el sistema bajando.' },
      { nombre: 'Giro acostado', seg: 120, instruccion: 'Boca arriba, brazos en cruz. Rodillas al pecho y dejalas caer juntas a la derecha, cabeza girada a la izquierda, hombros apoyados. 60 segundos por lado, soltando el peso.', sentir: 'La columna escurriéndose como un trapo mojado.' },
      { nombre: 'Piernas en la pared', seg: 120, instruccion: 'Acostate de espaldas con la cola CERCA de la pared y subí las piernas apoyadas verticales contra ella, brazos sueltos a los costados. No hay que hacer NADA más: solo respirar ahí.', sentir: 'Las piernas drenando, el pulso bajando: la posición de descanso más subestimada que existe.' }
    ]
  },
  {
    id: 'anti-dolor-cabeza-5', nombre: 'Anti dolor de cabeza', categoria: 'Noche', dur: '5 min',
    problemas: ['dolor de cabeza', 'cuello duro'],
    pasos: [
      { nombre: 'Retracción cervical suave', seg: 60, instruccion: 'Sentado derecho. Llevá la cabeza hacia atrás en línea recta (papada a propósito) MUY suave, sostené 2 segundos, soltá. 10 veces lentas. Con dolor de cabeza activo, esta versión gentil alcanza.', sentir: 'La nuca alargándose sin forzar nada.' },
      { nombre: 'Inclinación asistida', seg: 90, instruccion: 'Oreja derecha al hombro derecho; mano derecha apoyada arriba de la cabeza haciendo SOLO su propio peso. El hombro izquierdo empuja suave hacia el piso. 45 segundos y cambiá de lado.', sentir: 'El trapecio superior cediendo: ahí nace la mayoría de tus dolores de cabeza.' },
      { nombre: 'Masaje suboccipital', seg: 60, instruccion: 'Llevá los pulgares a la BASE del cráneo, justo donde termina el hueso y empieza el cuello, a los costados de la columna. Presión media con círculos chicos, 30 segundos. Después inclinó la cabeza apenas atrás sobre los pulgares y sostené la presión quieta 30 segundos.', sentir: 'El borde del cráneo aflojando — suele aliviar en el momento.' },
      { nombre: 'Masaje de masetero', seg: 30, instruccion: 'Apretá suave los dientes para encontrar el músculo que se marca en el ángulo de la mandíbula; aflojá la boca y masajealo con las yemas en círculos, presión media. Boca entreabierta todo el tiempo.', sentir: 'La mandíbula que no sabías que estaba apretada.' },
      { nombre: 'Respiración 4-6', seg: 60, instruccion: 'Ojos cerrados: inhalá por la nariz contando 4, exhalá contando 6, hasta el final.', sentir: 'La presión de la cabeza bajando un cambio.' }
    ]
  },
  {
    id: 'post-gym-6', nombre: 'Post-gym', categoria: 'Noche', dur: '6 min',
    problemas: [],
    pasos: [
      { nombre: 'Cuádriceps de pie', seg: 60, instruccion: 'De pie junto a una pared (mano apoyada de equilibrio). Agarrá tu empeine derecho con la mano derecha y llevá el talón al glúteo, con las RODILLAS JUNTAS y la cadera empujando apenas adelante. 30 segundos por pierna.', sentir: 'El frente del muslo estirando desde la rodilla a la cadera.' },
      { nombre: 'Isquios sentado', seg: 60, instruccion: 'Sentado en el piso con la pierna derecha estirada y la izquierda doblada con la planta contra el muslo. Con la espalda RECTA, inclinate hacia adelante desde la cadera hacia el pie derecho, hasta sentir tirantez atrás del muslo. Sin rebotar. 30 segundos por pierna.', sentir: 'Atrás del muslo alargándose; la espalda no se redondea.' },
      { nombre: 'Dorsal en mesa o barra', seg: 60, instruccion: 'Apoyá las dos manos en una mesa, banco o barra a la altura de tu cadera, y caminá hacia atrás hasta que los brazos queden largos y el torso paralelo al piso. Dejá caer el pecho hacia el piso entre los brazos, cabeza entre los codos. 60 segundos respirando.', sentir: 'Los dorsales que trabajaron, alargándose de punta a punta.' },
      { nombre: 'Pecho en la puerta', seg: 60, instruccion: 'Antebrazo en el marco con el codo a la altura del hombro, paso adelante, giro suave del torso al lado contrario. 30 segundos por lado.', sentir: 'El pecho suelto después de los presses.' },
      { nombre: 'Respiración', seg: 120, instruccion: 'Acostado boca arriba, una mano en la panza: inhalá por la nariz inflando la panza contando 4, exhalá por la boca contando 6. Hasta el final del timer.', sentir: 'El cuerpo pasando de entrenar a recuperar. Ahí es donde crece.' }
    ]
  },
  {
    id: 'reset-dia-10', nombre: 'Reset del día', categoria: 'Noche', dur: '10 min',
    problemas: ['estrés', 'espalda baja'],
    pasos: [
      { nombre: 'Gato-vaca', seg: 90, instruccion: 'En cuatro patas: exhalá redondeando la espalda al techo con el mentón al pecho, inhalá arqueando con la mirada al frente. 12 ciclos al ritmo de tu respiración, sin apuro.', sentir: 'La columna soltando el día ciclo a ciclo.' },
      { nombre: 'Posición del niño', seg: 90, instruccion: 'Rodillas separadas, sentate sobre los talones, pecho al piso, brazos largos adelante, frente apoyada. Respirá dirigiendo el aire a la panza.', sentir: 'Pausa de verdad. Nada que hacer, nada que lograr.' },
      { nombre: 'Paloma suave', seg: 150, instruccion: 'Desde cuatro patas: rodilla derecha adelante apoyada detrás de la muñeca derecha, pierna izquierda larga atrás. Bajá el torso sobre la pierna delantera hasta apoyar antebrazos (o la frente si llega). 75 segundos por lado, hundiéndote con cada exhalación.', sentir: 'La cadera — donde se guarda la tensión emocional — soltando de a poco.' },
      { nombre: 'Giro acostado', seg: 120, instruccion: 'Boca arriba, brazos en cruz: rodillas juntas caen a un lado, cabeza gira al otro, hombros apoyados. 60 segundos por lado.', sentir: 'La espalda plana y ancha contra el piso.' },
      { nombre: 'Piernas en la pared', seg: 120, instruccion: 'Cola cerca de la pared, piernas verticales apoyadas en ella, brazos sueltos. Quedate respirando: el ejercicio es no hacer nada.', sentir: 'El sistema nervioso en modo descanso profundo.' },
      { nombre: 'Escaneo corto', seg: 60, instruccion: 'Ahí mismo, ojos cerrados: recorré mentalmente pies → piernas → panza → pecho → cara, soltando cada zona al nombrarla.', sentir: 'El cuerpo un punto más pesado. Listo para la cama.' }
    ]
  },
  {
    id: 'bajada-dormir', nombre: 'Bajada a dormir', categoria: 'Noche', dur: '20 min',
    problemas: ['estrés'],
    pasos: [
      { nombre: 'Pantallas a modo cálido', seg: 60, instruccion: 'Poné el teléfono en modo nocturno/cálido, bajá las luces del depto a las mínimas que uses. Si quedó algo pendiente dando vueltas: anotalo en una nota del (+) y listo — mañana existe.', sentir: 'La señal de que el día terminó, para vos y para tu cerebro.' },
      { nombre: 'Descarga corporal', seg: 300, instruccion: 'La secuencia corta, toda en el piso o la cama: oreja al hombro 20 seg por lado → pecho en la puerta 30 seg por lado → colgado adelante con rodillas blandas 45 seg → giro acostado 45 seg por lado. Todo lentísimo.', sentir: 'La tensión física del día saliendo por partes.' },
      { nombre: 'Magnesio B6', seg: 30, instruccion: 'Tomá tu magnesio con un vaso de agua, ahora.', sentir: 'Un hábito que trabaja por vos mientras dormís.' },
      { nombre: 'Placa dental', seg: 30, instruccion: 'Placa puesta. Los ejercicios de mandíbula fueron de día, sin placa; ahora ella hace su trabajo.', sentir: 'Los dientes protegidos, la mandíbula ya masajeada.' },
      { nombre: '4-7-8 en la cama', seg: 240, instruccion: 'Acostado, luces apagadas. Inhalá por la nariz contando 4, retené el aire contando 7, exhalá por la boca con un soplido suave contando 8. Repetí hasta que el timer termine — o hasta que el sueño te gane antes, que es la idea.', sentir: 'Cada exhalación, un escalón más abajo. En cama, tope 00:30.' }
    ]
  },

  // ==================== CARA (§4.5 — solo lo comprobado) ====================
  {
    id: 'mandibula', nombre: 'Mandíbula y masetero', categoria: 'Cara', dur: '3 min',
    problemas: ['dolor de cabeza'],
    pasos: [
      { nombre: 'Masaje del masetero', seg: 60, instruccion: 'SIN placa. Apretá suave los dientes: el músculo que se abulta en el ángulo de la mandíbula es el masetero. Aflojá la boca (labios juntos, dientes separados) y masajealo con las yemas de dos dedos en círculos lentos con presión media, 30 segundos por lado. Si encontrás un punto que duele rico, quedate ahí.', sentir: 'Un músculo que está siempre duro y nunca habías tocado. Bruxismo real.' },
      { nombre: 'Apertura controlada', seg: 45, instruccion: 'Frente al espejo si podés. Abrí la boca LENTO hasta el máximo cómodo cuidando que el mentón baje derecho (sin desviarse a un costado), sostené 2 segundos, cerrá lento. 10 veces. Si hace clic fuerte o duele, achicá el rango.', sentir: 'La articulación moviéndose pareja y sin ruiditos.' },
      { nombre: 'Estiramiento de mandíbula', seg: 45, instruccion: 'Mandíbula floja, boca entreabierta. Apoyá dos dedos sobre los dientes de abajo y empujá el mentón hacia abajo MUY suave hasta el estiramiento, 15 segundos. Repetí 2 veces.', sentir: 'La cara descansada. La placa esta noche trabaja menos.' }
    ]
  },
  {
    id: 'cervical-cara', nombre: 'Postura cervical', categoria: 'Cara', dur: '3 min',
    problemas: ['cuello duro'],
    pasos: [
      { nombre: 'Retracción cervical', seg: 60, instruccion: 'Sentado o de pie, mirando al frente. Llevá la cabeza HACIA ATRÁS en línea recta — haciendo papada a propósito, sin inclinar el mentón — sostené 2 segundos y volvé. 15 veces. Es el ejercicio anti "cabeza adelantada" número uno.', sentir: 'El cuello alineándose sobre los hombros, donde corresponde.' },
      { nombre: 'Extensión con lengua al paladar', seg: 45, instruccion: 'Pegá TODA la lengua contra el paladar (el techo de la boca) y mantenela ahí. Con la lengua pegada, mirá lento hacia el techo llevando la cabeza atrás, y volvé. 10 veces. La lengua protege el frente del cuello.', sentir: 'El frente del cuello firme: la zona de abajo del mentón trabajando.' },
      { nombre: 'Rotación con resistencia', seg: 60, instruccion: 'Palma de la mano derecha apoyada en la sien derecha. Intentá girar la cabeza hacia la derecha mientras la mano lo IMPIDE — la cabeza no se mueve, solo hay fuerza — 5 segundos. Aflojá. 5 veces por lado.', sentir: 'Los músculos profundos del cuello activándose sin ningún movimiento.' }
    ]
  },
  {
    id: 'drenaje-90', nombre: 'Drenaje matutino', categoria: 'Cara', dur: '90 seg',
    problemas: [],
    pasos: [
      { nombre: 'Cuello descendente', seg: 30, instruccion: 'Con las yemas de los dedos y presión MUY suave (es piel, no músculo): barré desde atrás de las orejas, bajando por los costados del cuello, hasta las clavículas. 10 pasadas lentas. Esto "abre el desagüe" para lo que sigue.', sentir: 'Casi cosquillas: si estás apretando, es demasiado.' },
      { nombre: 'Mandíbula a oreja', seg: 30, instruccion: 'Con dos dedos de cada mano, barré desde el CENTRO del mentón siguiendo el borde de la mandíbula hasta debajo de las orejas. 8 pasadas suaves, las dos manos a la vez.', sentir: 'La línea de la mandíbula despejándose.' },
      { nombre: 'Pómulos y ojos', seg: 30, instruccion: 'Desde los costados de la nariz, barré por encima de los pómulos hacia las sienes: 5 pasadas. Después, con el dedo anular y presión mínima, desde el lagrimal por DEBAJO del ojo hacia afuera: 3 pasadas. Terminá bajando todo por el cuello.', sentir: 'La cara desinflamándose después de la almohada.' }
    ]
  },
  {
    id: 'drenaje-3', nombre: 'Drenaje completo', categoria: 'Cara', dur: '3 min',
    problemas: [],
    pasos: [
      { nombre: 'Preparación', seg: 20, instruccion: 'Piel MOJADA o con crema/aceite — ideal en la ducha o recién salido. Manos limpias. La regla de todo el drenaje: presión de acariciar, no de masajear.', sentir: 'Los dedos deslizando sin arrastrar la piel.' },
      { nombre: 'Cuello (abrir el desagüe)', seg: 50, instruccion: 'Barridos con las yemas desde atrás de las orejas hasta las clavículas, por los costados del cuello: 15 pasadas lentas. El cuello SIEMPRE va primero: es la salida del líquido.', sentir: 'El camino abierto.' },
      { nombre: 'Mandíbula y mentón', seg: 50, instruccion: 'Del centro del mentón por el borde de la mandíbula hasta las orejas, 8 pasadas. Después bajá todo desde la oreja por el cuello a la clavícula, 4 pasadas más. Útil especialmente en la retención post-fumar.', sentir: 'Menos pesadez en la zona baja de la cara.' },
      { nombre: 'Pómulos, ojos y frente', seg: 60, instruccion: 'Nariz → sienes por encima de los pómulos (6 pasadas). Bajo el ojo, del lagrimal hacia afuera con el anular (3 suaves). Frente: del centro hacia las sienes (6 pasadas). Cierre: todo lo que juntaste en las sienes, bajalo por delante de la oreja y el cuello hasta la clavícula.', sentir: 'Cara más definida al espejo. Es agua, no magia — y suma igual.' }
    ]
  },
  {
    id: 'expresion', nombre: 'Expresión', categoria: 'Cara', dur: '3 min',
    problemas: [],
    pasos: [
      { nombre: 'Cigomáticos', seg: 60, instruccion: 'Sonreí AMPLIO con los labios juntos (sin mostrar dientes), llevando las comisuras hacia las orejas, SIN arrugar los ojos. Sostené 10 segundos, aflojá 5. 3 veces. Si los ojos se arrugan, bajá un 20% la intensidad de la sonrisa.', sentir: 'Las mejillas trabajando como el músculo que son.' },
      { nombre: 'Periorbitales', seg: 45, instruccion: 'Entrecerrá SOLO los párpados de abajo, como cuando mirás el sol de frente, sin fruncir el ceño ni mover las cejas. Sostené 3 segundos, aflojá. 10 veces. (Frente al espejo las primeras veces: es más fino de lo que parece.)', sentir: 'Control de una zona que nunca movés a propósito.' },
      { nombre: 'Frontales', seg: 45, instruccion: 'Apoyá las palmas sobre la frente y las cejas, frenándolas. Intentá LEVANTAR las cejas contra tus manos —la frente empuja pero las manos no la dejan arrugarse— 5 segundos. Aflojá. 8 veces.', sentir: 'La frente activa sin marcar líneas: fuerza sin arrugas.' },
      { nombre: 'Buccinadores', seg: 45, instruccion: 'Inflá los dos cachetes con aire y pasá el aire de un cachete al otro, lento, 30 segundos. Después chupá los cachetes hacia adentro (cara de pez) y sostené 10 segundos, 2 veces.', sentir: 'La estructura interna de la cara despierta y con tono.' }
    ]
  },

  // ==================== CASA (§4.6 — cuello y trapecios, días sin gym) ====================
  {
    id: 'casa-10', nombre: 'Cuello, trapecios y cara', categoria: 'Casa', dur: '10 min',
    problemas: ['cuello duro', 'dolor de cabeza'],
    pasos: [
      { nombre: 'Isométrico: flexión', seg: 60, instruccion: 'Sentado derecho. Apoyá la palma en la FRENTE. Empujá la cabeza contra la mano como queriendo mirar abajo, mientras la mano lo impide: la cabeza NO se mueve, solo hay fuerza pareja. 10 segundos al 60% de tu fuerza, descansá 10. 3 veces. SUAVE siempre: acá nunca hay dolor.', sentir: 'El frente del cuello trabajando duro sin moverse un milímetro.' },
      { nombre: 'Isométrico: extensión', seg: 60, instruccion: 'Entrelazá las manos detrás de la CABEZA (no del cuello). Empujá la cabeza hacia atrás contra las manos, que la frenan sin dejarla moverse. 10 segundos al 60%, descanso 10. 3 veces.', sentir: 'La parte de atrás del cuello activa y firme.' },
      { nombre: 'Isométrico: lateral', seg: 90, instruccion: 'Palma derecha contra la SIEN derecha. Empujá la cabeza hacia la derecha contra la mano — sin movimiento, solo fuerza — 10 segundos al 60%. 3 veces por lado, alternando.', sentir: 'Los costados del cuello parejos. Un cuello con presencia se construye así, sin peso.' },
      { nombre: 'Encogimientos con mochila', seg: 100, instruccion: 'Cargá tu mochila con libros/botellas (5-8 kg) y agarrala con la mano derecha, colgando al costado; la izquierda libre o con otra carga pareja. De pie, subí los HOMBROS hacia las orejas todo lo que den, pausa de 1 segundo arriba, bajá lento. 3 tandas de 15 (cambiá la mochila de mano por tanda si usás una sola).', sentir: 'Los trapecios quemando: el músculo que enmarca el cuello.' },
      { nombre: 'Retracción en W', seg: 100, instruccion: 'Boca abajo en el piso, frente apoyada. Doblá los codos pegados al cuerpo con las manos a la altura de las orejas: los brazos forman una W. Despegá pecho, brazos y manos del piso juntando los omóplatos atrás, sostené 2 segundos, bajá. 3 tandas de 12.', sentir: 'Toda la espalda alta encendida: el antídoto exacto de la silla.' },
      { nombre: 'Cierre: masaje masetero', seg: 60, instruccion: 'Encontrá el masetero apretando suave los dientes (se abulta en el ángulo de la mandíbula), aflojá la boca y masajealo en círculos con presión media, 30 segundos por lado. Integrado acá para que nunca se saltee.', sentir: 'Sesión de casa completa: 10 minutos que se van a notar en el espejo y en los dolores de cabeza.' }
    ]
  }
];

// Qué rutina abre cada pieza del día.
const PIEZA_A_RUTINA = {
  'movilidad-activar': 'activar-3',
  'drenaje': 'drenaje-90',
  'casa-cuello': 'casa-10'
};
