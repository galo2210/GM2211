// NORTE · contenido MOVILIDAD + CARA + CASA — rutinas con player guiado (SISTEMA.md §4.4-4.6).
// Cada paso: instrucción corta + qué sentir + segundos. Las de reps llevan el conteo en la instrucción.
// Su problema real: tensión, dolores de cabeza y cuello por 7-8 hs sentado.

const RUTINAS_MOV = [

  // ==================== MAÑANA ====================
  {
    id: 'activar-3', nombre: 'Activar en 3 min', categoria: 'Mañana', dur: '3 min',
    problemas: ['cuello duro', 'estrés'],
    pasos: [
      { nombre: 'Círculos de cuello', seg: 40, instruccion: 'De pie. Círculos lentos con la cabeza, 3 para cada lado. Sin forzar.', sentir: 'El cuello que se despega de la almohada.' },
      { nombre: 'Gato-vaca de pie', seg: 45, instruccion: 'Manos en los muslos. Redondeá la espalda mirando el ombligo, después arqueá mirando arriba. Lento.', sentir: 'La columna que se mueve vértebra por vértebra.' },
      { nombre: 'Rotaciones de hombros y brazos', seg: 45, instruccion: 'Círculos grandes con los dos brazos, 5 adelante y 5 atrás.', sentir: 'Los hombros que bajan de las orejas.' },
      { nombre: 'Bisagra + alcance al cielo', seg: 50, instruccion: 'Bajá con espalda recta hacia el piso, subí y estirate entero hacia el techo. 5 veces.', sentir: 'Todo el cuerpo prendido. Listo para el día.' }
    ]
  },
  {
    id: 'despertar-7', nombre: 'Despertar completo', categoria: 'Mañana', dur: '7 min',
    problemas: ['cuello duro', 'espalda baja'],
    pasos: [
      { nombre: 'Cuello completo', seg: 60, instruccion: 'Círculos, sí-sí, no-no. Todo lento, respirando.', sentir: 'El rango que aparece con cada vuelta.' },
      { nombre: 'Gato-vaca en el piso', seg: 90, instruccion: 'En cuatro patas. Alterná redondear y arquear al ritmo de la respiración.', sentir: 'La espalda baja que afloja.' },
      { nombre: 'Cobra → perro boca abajo', seg: 90, instruccion: 'Desde el piso subí el pecho (cobra), después cadera arriba (perro). Alterná 5 veces.', sentir: 'El frente del cuerpo y las piernas estirándose.' },
      { nombre: 'Sentadilla profunda sostenida', seg: 60, instruccion: 'Bajá hasta el fondo, talones en el piso, codos empujando rodillas.', sentir: 'La cadera que se abre. Es normal que tire.' },
      { nombre: 'Pecho en el marco de la puerta', seg: 60, instruccion: 'Antebrazo en el marco, girá el cuerpo hacia afuera. 30 seg por lado.', sentir: 'El pecho abierto. Lo contrario de la compu.' },
      { nombre: 'Respiración de pie', seg: 60, instruccion: 'Parado, ojos suaves. Inhalá 4, exhalá 6.', sentir: 'Arranque con el cuerpo despierto y la cabeza tranquila.' }
    ]
  },
  {
    id: 'piso-10', nombre: 'Piso 10', categoria: 'Mañana', dur: '10 min',
    problemas: ['espalda baja', 'cadera'],
    pasos: [
      { nombre: 'Gato-vaca', seg: 90, instruccion: 'En cuatro patas, al ritmo de la respiración.', sentir: 'La columna lubricándose.' },
      { nombre: 'Thread the needle', seg: 120, instruccion: 'Desde cuatro patas, pasá un brazo por debajo del cuerpo apoyando el hombro. 60 seg por lado.', sentir: 'Entre los omóplatos: la zona que la silla castiga.' },
      { nombre: 'Cobra → niño', seg: 120, instruccion: 'Alterná cobra suave y posición del niño, 5 respiraciones en cada una.', sentir: 'La espalda baja que se estira y se comprime suave.' },
      { nombre: 'Paloma suave', seg: 150, instruccion: 'Pierna doblada adelante, la otra estirada atrás. 75 seg por lado, sin dolor.', sentir: 'El glúteo profundo. Ahí vive la tensión de estar sentado.' },
      { nombre: 'Giro acostado', seg: 120, instruccion: 'Boca arriba, rodillas a un lado, brazos en cruz. 60 seg por lado.', sentir: 'La columna girando sin esfuerzo. Cierre redondo.' }
    ]
  },
  {
    id: 'activacion-fuerte-12', nombre: 'Activación fuerte', categoria: 'Mañana', dur: '12 min',
    problemas: ['estrés'],
    pasos: [
      { nombre: 'Jumping jacks suaves', seg: 60, instruccion: 'Ritmo cómodo, sin saltar de más.', sentir: 'El pulso que sube.' },
      { nombre: 'Sentadillas al aire', seg: 90, instruccion: '15-20 reps controladas, brazos al frente.', sentir: 'Las piernas prendidas.' },
      { nombre: 'Flexiones fáciles', seg: 90, instruccion: '8-12, de rodillas si hace falta. Técnica antes que cantidad.', sentir: 'Pecho y brazos despiertos.' },
      { nombre: 'Estocadas alternadas', seg: 120, instruccion: '10 por pierna, torso derecho.', sentir: 'Equilibrio y piernas trabajando juntas.' },
      { nombre: 'Plancha', seg: 60, instruccion: 'Cuerpo en línea, glúteos apretados. Aguantá lo que dé con buena forma.', sentir: 'El centro firme.' },
      { nombre: 'Gato-vaca', seg: 90, instruccion: 'Bajá el ritmo. Respiración y columna.', sentir: 'La transición de activado a controlado.' },
      { nombre: 'Movilidad de hombros con toalla', seg: 120, instruccion: 'Toalla tomada ancha, pasala por arriba de la cabeza hacia atrás y volvé. 10 pasadas.', sentir: 'Los hombros con espacio.' },
      { nombre: 'Respiración final', seg: 90, instruccion: 'Sentado o de pie. Inhalá 4, exhalá 6.', sentir: 'Energía con calma. Así se arranca.' }
    ]
  },

  // ==================== PAUSAS OFICINA (discretas, en silla) ====================
  {
    id: 'cuello-ojos-2', nombre: 'Cuello y ojos', categoria: 'Pausas oficina', dur: '2 min',
    problemas: ['cuello duro', 'dolor de cabeza'],
    pasos: [
      { nombre: 'Inclinación asistida', seg: 40, instruccion: 'Oreja al hombro, la mano apenas ayuda. 20 seg por lado. Nadie lo nota.', sentir: 'El costado del cuello cediendo.' },
      { nombre: 'Retracción cervical', seg: 40, instruccion: 'Doble mentón suave, como alejándote de la pantalla. 10 veces, 2 seg cada una.', sentir: 'La nuca que se alarga.' },
      { nombre: 'Ojos: lejos y círculos', seg: 40, instruccion: 'Mirá algo a 6+ metros 20 seg. Después 2 círculos lentos con los ojos.', sentir: 'Los ojos desenfocando la pantalla. Descanso real.' }
    ]
  },
  {
    id: 'espalda-alta-2', nombre: 'Espalda alta', categoria: 'Pausas oficina', dur: '2 min',
    problemas: ['cuello duro', 'hombros'],
    pasos: [
      { nombre: 'Encoger y soltar', seg: 30, instruccion: 'Hombros a las orejas 3 seg, soltá de golpe. 5 veces.', sentir: 'La tensión que se va al soltar.' },
      { nombre: 'Abrazo y apertura', seg: 45, instruccion: 'Abrazate fuerte 5 seg, después abrí brazos y pecho 5 seg. 4 veces.', sentir: 'Los omóplatos que se separan y se juntan.' },
      { nombre: 'Extensión en la silla', seg: 45, instruccion: 'Manos detrás de la nuca, arqueate sobre el respaldo mirando al techo. 3 veces, 10 seg.', sentir: 'La espalda alta que se abre contra el respaldo.' }
    ]
  },
  {
    id: 'cadera-sentada-2', nombre: 'Cadera sentada', categoria: 'Pausas oficina', dur: '2 min',
    problemas: ['cadera', 'espalda baja'],
    pasos: [
      { nombre: 'Figura 4 en la silla', seg: 60, instruccion: 'Tobillo sobre la rodilla contraria, inclinate apenas adelante. 30 seg por lado.', sentir: 'El glúteo profundo estirando. Disimulado total.' },
      { nombre: 'Báscula pélvica sentado', seg: 30, instruccion: 'Arqueá y redondeá la zona lumbar sin mover el torso. 8 veces.', sentir: 'La espalda baja que se despierta.' },
      { nombre: 'Flexor de cadera de pie', seg: 30, instruccion: 'Parate, un pie atrás, apretá el glúteo de esa pierna. 15 seg por lado, como quien se estira al pasar.', sentir: 'El frente de la cadera que estuvo doblado toda la mañana.' }
    ]
  },
  {
    id: 'munecas-2', nombre: 'Muñecas', categoria: 'Pausas oficina', dur: '2 min',
    problemas: [],
    pasos: [
      { nombre: 'Círculos de muñeca', seg: 30, instruccion: 'Manos entrelazadas, círculos fluidos para los dos lados.', sentir: 'Las muñecas sueltas después del mouse.' },
      { nombre: 'Estiramiento de flexores', seg: 45, instruccion: 'Brazo estirado, palma arriba, tirá los dedos hacia abajo con la otra mano. 20 seg por lado.', sentir: 'El antebrazo por dentro.' },
      { nombre: 'Estiramiento de extensores', seg: 45, instruccion: 'Palma abajo, empujá el dorso de la mano hacia vos. 20 seg por lado.', sentir: 'El antebrazo por fuera. Adiós tensión de teclado.' }
    ]
  },
  {
    id: 'respiracion-reset-90', nombre: 'Respiración reset', categoria: 'Pausas oficina', dur: '90 seg',
    problemas: ['estrés', 'dolor de cabeza'],
    pasos: [
      { nombre: 'Respiración 4-6', seg: 90, instruccion: 'Sentado normal, nadie nota nada. Inhalá por la nariz 4 seg, exhalá 6 seg. Repetí hasta que suene el timer.', sentir: 'Las pulsaciones que bajan. Reset de mitad de jornada.' }
    ]
  },
  {
    id: 'full-oficina-5', nombre: 'Full oficina', categoria: 'Pausas oficina', dur: '5 min',
    problemas: ['cuello duro', 'hombros', 'cadera'],
    pasos: [
      { nombre: 'Cuello', seg: 60, instruccion: 'Inclinaciones asistidas + doble mentón. Lento.', sentir: 'El cuello con espacio.' },
      { nombre: 'Hombros', seg: 60, instruccion: 'Encoger-soltar y círculos hacia atrás.', sentir: 'Hombros lejos de las orejas.' },
      { nombre: 'Espalda alta', seg: 60, instruccion: 'Abrazo-apertura y extensión sobre el respaldo.', sentir: 'La zona media despierta.' },
      { nombre: 'Cadera figura 4', seg: 60, instruccion: '30 seg por lado en la silla.', sentir: 'El glúteo profundo cediendo.' },
      { nombre: 'Respiración', seg: 60, instruccion: 'Inhalá 4, exhalá 6, hasta el final.', sentir: 'Vuelta al trabajo con otro cuerpo.' }
    ]
  },

  // ==================== PRE-GYM ====================
  {
    id: 'pre-empuje-4', nombre: 'Pre-empuje', categoria: 'Pre-gym', dur: '4 min',
    problemas: ['hombros'],
    pasos: [
      { nombre: 'Círculos y rotaciones de hombro', seg: 60, instruccion: 'Círculos grandes, después rotación externa con el codo pegado (con banda si hay).', sentir: 'El hombro lubricado antes de empujar.' },
      { nombre: 'Apertura de pecho dinámica', seg: 60, instruccion: 'Brazos que se abren y se cruzan al frente, cada vez más rango. 15 veces.', sentir: 'El pecho que se estira activo.' },
      { nombre: 'Rotación externa en pared', seg: 60, instruccion: 'Codo a 90° apoyado, rotá el antebrazo hacia arriba contra resistencia suave. 10 por lado.', sentir: 'El manguito rotador prendido: seguro de hombro.' },
      { nombre: 'Flexiones lentas de activación', seg: 60, instruccion: '8 flexiones a ritmo lento, pecho al piso.', sentir: 'Los músculos del día avisados. A la primera serie con todo.' }
    ]
  },
  {
    id: 'pre-tiron-4', nombre: 'Pre-tirón', categoria: 'Pre-gym', dur: '4 min',
    problemas: ['hombros', 'cuello duro'],
    pasos: [
      { nombre: 'Colgarse de la barra', seg: 60, instruccion: 'Agarre ancho, colgate dejando que la espalda se estire. 2 tandas de 20-25 seg.', sentir: 'Los dorsales alargándose y la columna descomprimida.' },
      { nombre: 'Retracción escapular activa', seg: 60, instruccion: 'Colgado o en jalón liviano: bajá los omóplatos sin doblar codos. 10 veces.', sentir: 'El movimiento que inicia todo tirón.' },
      { nombre: 'Rotaciones torácicas', seg: 60, instruccion: 'En cuatro patas, mano a la nuca, girá abriendo el pecho al techo. 8 por lado.', sentir: 'La espalda media que gira.' },
      { nombre: 'Face pull liviano', seg: 60, instruccion: 'Una serie de 15 con poco peso, técnica perfecta.', sentir: 'La parte trasera del hombro lista.' }
    ]
  },
  {
    id: 'pre-pierna-5', nombre: 'Pre-pierna', categoria: 'Pre-gym', dur: '5 min',
    problemas: ['cadera'],
    pasos: [
      { nombre: 'Sentadilla profunda sostenida', seg: 60, instruccion: 'Al fondo, talones apoyados, codos separando rodillas.', sentir: 'Tobillos y cadera haciendo lugar.' },
      { nombre: 'Estocada con rotación', seg: 90, instruccion: 'Estocada larga, girá el torso hacia la pierna de adelante. 5 por lado.', sentir: 'Cadera y columna trabajando juntas.' },
      { nombre: 'Balanceos de pierna', seg: 60, instruccion: 'Agarrado de algo: 10 balanceos adelante-atrás y 10 laterales por pierna.', sentir: 'La cadera suelta, rango completo.' },
      { nombre: 'Puente de glúteo', seg: 90, instruccion: '15 reps con pausa de 1 seg arriba.', sentir: 'Los glúteos encendidos ANTES de la prensa.' }
    ]
  },
  {
    id: 'pre-general-6', nombre: 'Pre-gym general', categoria: 'Pre-gym', dur: '6 min',
    problemas: [],
    pasos: [
      { nombre: 'Trote suave o soga imaginaria', seg: 90, instruccion: 'En el lugar, ritmo cómodo.', sentir: 'La temperatura que sube.' },
      { nombre: 'Círculos completos de brazos', seg: 60, instruccion: 'Grandes, 10 adelante y 10 atrás.', sentir: 'Hombros despiertos.' },
      { nombre: 'Gato-vaca de pie', seg: 60, instruccion: 'Manos en muslos, columna que ondula.', sentir: 'La espalda lista.' },
      { nombre: 'Sentadillas al aire', seg: 90, instruccion: '15 controladas, profundas.', sentir: 'Piernas y cadera activas.' },
      { nombre: 'Rotaciones de cadera', seg: 60, instruccion: 'Círculos amplios con la cadera, manos en la cintura.', sentir: 'Todo el eje central listo para cargar.' }
    ]
  },

  // ==================== NOCHE ====================
  {
    id: 'descarga-rapida-4', nombre: 'Descarga rápida', categoria: 'Noche', dur: '4 min',
    problemas: ['cuello duro', 'estrés'],
    pasos: [
      { nombre: 'Cuello suave', seg: 60, instruccion: 'Inclinaciones y giros lentos, ojos cerrados si querés.', sentir: 'El día que empieza a soltarse.' },
      { nombre: 'Pecho en la puerta', seg: 60, instruccion: '30 seg por lado, respiración larga.', sentir: 'El pecho abierto después de la compu.' },
      { nombre: 'Colgado hacia adelante', seg: 60, instruccion: 'De pie, dejate caer hacia los pies con rodillas blandas. Colgá los brazos.', sentir: 'La espalda entera descomprimiendo.' },
      { nombre: 'Respiración', seg: 60, instruccion: 'Inhalá 4, exhalá 6. Último paso del día físico.', sentir: 'Modo noche activado.' }
    ]
  },
  {
    id: 'descarga-completa-8', nombre: 'Descarga completa', categoria: 'Noche', dur: '8 min',
    problemas: ['espalda baja', 'cuello duro', 'estrés'],
    pasos: [
      { nombre: 'Cuello completo', seg: 90, instruccion: 'Todos los movimientos, muy lento.', sentir: 'La tensión del día ubicada y soltada.' },
      { nombre: 'Pecho en la puerta', seg: 60, instruccion: '30 seg por lado.', sentir: 'Apertura.' },
      { nombre: 'Posición del niño', seg: 90, instruccion: 'Rodillas anchas, brazos largos, frente al piso.', sentir: 'Refugio. La espalda baja larga.' },
      { nombre: 'Giro acostado', seg: 120, instruccion: '60 seg por lado, hombros en el piso.', sentir: 'La columna escurriéndose como un trapo.' },
      { nombre: 'Piernas en la pared', seg: 120, instruccion: 'Acostado, piernas apoyadas verticales en la pared. No hay que hacer nada.', sentir: 'Las piernas drenando, el sistema bajando.' }
    ]
  },
  {
    id: 'anti-dolor-cabeza-5', nombre: 'Anti dolor de cabeza', categoria: 'Noche', dur: '5 min',
    problemas: ['dolor de cabeza', 'cuello duro'],
    pasos: [
      { nombre: 'Retracción cervical suave', seg: 60, instruccion: 'Doble mentón, 2 seg, soltar. 10 veces muy suaves.', sentir: 'La nuca que se alarga sin forzar.' },
      { nombre: 'Inclinación asistida', seg: 90, instruccion: 'Oreja al hombro con ayuda mínima de la mano, 45 seg por lado.', sentir: 'El trapecio superior cediendo: ahí nace tu dolor de cabeza.' },
      { nombre: 'Masaje suboccipital', seg: 60, instruccion: 'Pulgares en la base del cráneo, círculos con presión media.', sentir: 'El borde del cráneo aflojando. Suele aliviar al instante.' },
      { nombre: 'Masaje de masetero', seg: 30, instruccion: 'Círculos con los dedos en el músculo de la mandíbula, boca floja.', sentir: 'La mandíbula que no sabías que estaba apretada.' },
      { nombre: 'Respiración 4-6', seg: 60, instruccion: 'Ojos cerrados.', sentir: 'La presión de la cabeza bajando un cambio.' }
    ]
  },
  {
    id: 'post-gym-6', nombre: 'Post-gym', categoria: 'Noche', dur: '6 min',
    problemas: [],
    pasos: [
      { nombre: 'Cuádriceps de pie', seg: 60, instruccion: 'Talón al glúteo, rodillas juntas. 30 seg por lado.', sentir: 'El frente del muslo estirando.' },
      { nombre: 'Isquios sentado', seg: 60, instruccion: 'Pierna estirada, inclinate desde la cadera con espalda recta. 30 seg por lado.', sentir: 'Atrás del muslo, sin rebotar.' },
      { nombre: 'Dorsal en mesa o barra', seg: 60, instruccion: 'Manos apoyadas, dejá caer el pecho entre los brazos.', sentir: 'Los dorsales que trabajaron alargándose.' },
      { nombre: 'Pecho en la puerta', seg: 60, instruccion: '30 seg por lado.', sentir: 'El pecho suelto.' },
      { nombre: 'Respiración', seg: 120, instruccion: 'Acostado o sentado. Inhalá 4, exhalá 6.', sentir: 'El cuerpo pasando de entrenar a recuperar. Ahí crece.' }
    ]
  },
  {
    id: 'reset-dia-10', nombre: 'Reset del día', categoria: 'Noche', dur: '10 min',
    problemas: ['estrés', 'espalda baja'],
    pasos: [
      { nombre: 'Gato-vaca', seg: 90, instruccion: 'Con la respiración, sin apuro.', sentir: 'La columna soltando el día.' },
      { nombre: 'Posición del niño', seg: 90, instruccion: 'Respiración al abdomen.', sentir: 'Pausa de verdad.' },
      { nombre: 'Paloma suave', seg: 150, instruccion: '75 seg por lado.', sentir: 'La cadera que junta tensión emocional, soltando.' },
      { nombre: 'Giro acostado', seg: 120, instruccion: '60 seg por lado.', sentir: 'La espalda plana contra el piso.' },
      { nombre: 'Piernas en la pared', seg: 120, instruccion: 'Quedate. Nada que hacer.', sentir: 'El sistema nervioso en modo descanso.' },
      { nombre: 'Escaneo corto', seg: 60, instruccion: 'Ojos cerrados: recorré pies → piernas → panza → pecho → cara, soltando cada zona.', sentir: 'El cuerpo entero un punto más pesado. Listo para la cama.' }
    ]
  },

  {
    id: 'bajada-dormir', nombre: 'Bajada a dormir', categoria: 'Noche', dur: '20 min',
    problemas: ['estrés'],
    pasos: [
      { nombre: 'Pantallas a modo cálido', seg: 60, instruccion: 'Poné el teléfono en modo cálido/nocturno y bajá las luces del depto. Lo que quedó pendiente, quedó: mañana existe.', sentir: 'La señal de que el día terminó.' },
      { nombre: 'Descarga corporal', seg: 300, instruccion: 'Cuello suave, pecho en la puerta, colgado adelante, giro acostado. Sin apuro: 5 minutos para soltar el cuerpo.', sentir: 'La tensión del día saliendo por partes.' },
      { nombre: 'Magnesio B6', seg: 30, instruccion: 'Tomalo ahora, con un vaso de agua.', sentir: 'Un hábito que trabaja mientras dormís.' },
      { nombre: 'Placa dental', seg: 30, instruccion: 'Placa puesta. Los ejercicios de mandíbula fueron de día; ahora ella protege.', sentir: 'Listo para bruxar sin romper nada.' },
      { nombre: '4-7-8 en la cama', seg: 240, instruccion: 'Acostado, luces apagadas. Inhalá 4, retené 7, exhalá 8. Repetí hasta que el timer termine — o hasta que el sueño gane antes.', sentir: 'Cada exhalación un escalón más abajo. En cama, tope 00:30.' }
    ]
  },

  // ==================== CARA (§4.5 — solo lo comprobado) ====================
  {
    id: 'mandibula', nombre: 'Mandíbula y masetero', categoria: 'Cara', dur: '3 min',
    problemas: ['dolor de cabeza'],
    pasos: [
      { nombre: 'Masaje del masetero', seg: 60, instruccion: 'SIN placa. Dedos en el músculo de la mordida (se marca al apretar los dientes). Círculos con presión media, boca floja.', sentir: 'Un músculo que está siempre duro y no lo sabías. Bruxismo real.' },
      { nombre: 'Apertura controlada', seg: 45, instruccion: 'Abrí la boca lento hasta el máximo cómodo, 2 seg, cerrá lento. 10 veces derecho, sin desviar el mentón.', sentir: 'La articulación moviéndose pareja.' },
      { nombre: 'Estiramiento de mandíbula', seg: 45, instruccion: 'Mandíbula relajada, empujá suave el mentón hacia abajo con dos dedos, 15 seg. 2 veces.', sentir: 'La cara descansada. La placa esta noche trabaja menos.' }
    ]
  },
  {
    id: 'cervical-cara', nombre: 'Postura cervical', categoria: 'Cara', dur: '3 min',
    problemas: ['cuello duro'],
    pasos: [
      { nombre: 'Retracción cervical', seg: 60, instruccion: 'Doble mentón llevando la cabeza atrás en línea recta. 15 veces, 2 seg cada una.', sentir: 'El cuello alineándose. El anti nerd-neck.' },
      { nombre: 'Extensión con lengua al paladar', seg: 45, instruccion: 'Lengua pegada al paladar, mirá lento hacia el techo y volvé. 10 veces.', sentir: 'El frente del cuello trabajando: firmeza abajo del mentón.' },
      { nombre: 'Rotación con resistencia', seg: 60, instruccion: 'Mano en la sien, intentá girar la cabeza contra la mano SIN moverla, 5 seg. 5 por lado.', sentir: 'Los músculos profundos del cuello activos.' }
    ]
  },
  {
    id: 'drenaje-90', nombre: 'Drenaje matutino', categoria: 'Cara', dur: '90 seg',
    problemas: [],
    pasos: [
      { nombre: 'Cuello descendente', seg: 30, instruccion: 'Con dedos suaves, barré desde atrás de las orejas hacia las clavículas. 10 pasadas.', sentir: 'Presión mínima: es piel, no músculo.' },
      { nombre: 'Mandíbula a oreja', seg: 30, instruccion: 'Desde el centro del mentón por el borde de la mandíbula hacia las orejas. 8 pasadas.', sentir: 'La línea de la mandíbula despejándose.' },
      { nombre: 'Pómulos y ojos', seg: 30, instruccion: 'Desde la nariz hacia las sienes, y suave bajo los ojos hacia afuera. 8 pasadas.', sentir: 'La cara desinflamándose después de dormir.' }
    ]
  },
  {
    id: 'drenaje-3', nombre: 'Drenaje completo', categoria: 'Cara', dur: '3 min',
    problemas: [],
    pasos: [
      { nombre: 'Preparación', seg: 20, instruccion: 'Piel mojada o con crema (ideal en la ducha o al salir). Manos limpias.', sentir: 'Sin arrastre en seco: la piel lo agradece.' },
      { nombre: 'Cuello', seg: 50, instruccion: 'Barridos de atrás de las orejas a las clavículas, 15 pasadas. Es la salida del drenaje: se abre primero.', sentir: 'El camino abierto.' },
      { nombre: 'Mandíbula y mentón', seg: 50, instruccion: 'Del centro del mentón hacia las orejas, después bajá todo hacia el cuello.', sentir: 'Menos retención en la zona baja de la cara. Útil post-fumar.' },
      { nombre: 'Pómulos, ojos y frente', seg: 60, instruccion: 'Nariz→sienes, bajo los ojos hacia afuera, frente del centro hacia las sienes. Terminá bajando todo al cuello.', sentir: 'Cara más definida al espejo. Es agua, no magia — y suma.' }
    ]
  },
  {
    id: 'expresion', nombre: 'Expresión', categoria: 'Cara', dur: '3 min',
    problemas: [],
    pasos: [
      { nombre: 'Cigomáticos', seg: 60, instruccion: 'Sonrisa amplia sin arrugar los ojos, sostené 10 seg. 3 veces.', sentir: 'Las mejillas trabajando como un músculo más.' },
      { nombre: 'Periorbitales', seg: 45, instruccion: 'Entrecerrá los párpados inferiores como mirando al sol, sin fruncir. 10 veces, 3 seg.', sentir: 'Control fino alrededor de los ojos.' },
      { nombre: 'Frontales', seg: 45, instruccion: 'Cejas arriba sosteniendo 5 seg con los dedos frenando la frente. 8 veces.', sentir: 'La frente activa sin arrugar.' },
      { nombre: 'Buccinadores', seg: 45, instruccion: 'Inflá los cachetes y pasá el aire de un lado al otro, 30 seg. Después chupá los cachetes 2×10 seg.', sentir: 'La estructura interna de la cara despierta.' }
    ]
  },

  // ==================== CASA (§4.6 — cuello y trapecios, días sin gym) ====================
  {
    id: 'casa-10', nombre: 'Cuello, trapecios y cara', categoria: 'Casa', dur: '10 min',
    problemas: ['cuello duro', 'dolor de cabeza'],
    pasos: [
      { nombre: 'Isométrico: flexión', seg: 60, instruccion: 'Palma en la frente, empujá la cabeza contra la mano SIN que se mueva, 10 seg. 3 veces. SUAVE, nunca dolor.', sentir: 'El frente del cuello firme sin movimiento.' },
      { nombre: 'Isométrico: extensión', seg: 60, instruccion: 'Manos en la nuca, empujá la cabeza hacia atrás contra las manos, 10 seg. 3 veces.', sentir: 'La parte de atrás del cuello activa.' },
      { nombre: 'Isométrico: lateral', seg: 90, instruccion: 'Palma en la sien, empujá contra la mano 10 seg. 3 por lado.', sentir: 'Los costados parejos. Cuello más grueso se construye así, de a poco.' },
      { nombre: 'Encogimientos con mochila', seg: 100, instruccion: 'Mochila cargada en las manos, subí los hombros con pausa de 1 seg arriba. 3 tandas de 15.', sentir: 'Los trapecios trabajando: cuello con presencia.' },
      { nombre: 'Retracción en W', seg: 100, instruccion: 'Boca abajo en el piso, brazos en W, despegá pecho y brazos juntando omóplatos. 3 tandas de 12.', sentir: 'Toda la espalda alta: el antídoto de la silla.' },
      { nombre: 'Cierre: masaje masetero', seg: 60, instruccion: 'Círculos en el músculo de la mordida, boca floja. Integrado acá para no olvidarlo.', sentir: 'Sesión de casa completa. 10 minutos que pagan.' }
    ]
  }
];

// Qué rutina abre cada pieza del día.
const PIEZA_A_RUTINA = {
  'movilidad-activar': 'activar-3',
  'drenaje': 'drenaje-90',
  'casa-cuello': 'casa-10'
};
