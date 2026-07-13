// NORTE · contenido RESPIRACIÓN Y MEDITACIÓN (SISTEMA.md §5.4).
// RESPIRACIONES: ciclos de fases con timer en vivo. MEDITACIONES: guiadas por pasos (usan el player).
// Piso diario: 5 min a la noche, antes del cierre.

const RESPIRACIONES = [
  {
    id: 'resp-478', nombre: '4-7-8', dur: '~4 min',
    cuando: 'Para dormir. En la cama, placa puesta, luces apagadas.',
    fases: [
      { nombre: 'Inhalá por la nariz', seg: 4 },
      { nombre: 'Retené', seg: 7 },
      { nombre: 'Exhalá por la boca', seg: 8 }
    ],
    ciclos: 6,
    nota: 'La exhalación larga le avisa al sistema nervioso que no hay peligro. Si al principio marea, hacé menos ciclos.'
  },
  {
    id: 'resp-box', nombre: 'Box breathing', dur: '~4 min',
    cuando: 'Antes de algo importante, o cuando la cabeza acelera.',
    fases: [
      { nombre: 'Inhalá', seg: 4 },
      { nombre: 'Retené', seg: 4 },
      { nombre: 'Exhalá', seg: 4 },
      { nombre: 'Retené vacío', seg: 4 }
    ],
    ciclos: 12,
    nota: 'La que usan militares y deportistas para estar tranquilos Y enfocados a la vez. Cuatro lados iguales, como una caja.'
  },
  {
    id: 'resp-diafragma', nombre: 'Respiración diafragmática', dur: '~4 min',
    cuando: 'La base de todo. Practicala hasta que salga sola.',
    fases: [
      { nombre: 'Inhalá inflando la panza', seg: 4 },
      { nombre: 'Exhalá dejando caer', seg: 6 }
    ],
    ciclos: 20,
    nota: 'Mano en la panza: tiene que subir ella, no el pecho. Respirar bajo = tensión baja. Respirar alto = modo alerta.'
  },
  {
    id: 'resp-coherencia', nombre: 'Coherencia cardíaca', dur: '~5 min',
    cuando: 'Estrés sostenido: un mal día, antes de una charla difícil.',
    fases: [
      { nombre: 'Inhalá', seg: 5 },
      { nombre: 'Exhalá', seg: 5 }
    ],
    ciclos: 27,
    nota: '6 respiraciones por minuto: la frecuencia donde el corazón y la respiración se sincronizan. Efecto medible en 5 minutos.'
  },
  {
    id: 'resp-suspiro', nombre: 'Suspiro cíclico', dur: '~5 min',
    cuando: 'El mejor efecto por minuto que se midió: ánimo arriba, ansiedad abajo.',
    fases: [
      { nombre: 'Inhalá hondo por la nariz', seg: 2 },
      { nombre: 'Inhalá un poco MÁS', seg: 1 },
      { nombre: 'Exhalá laaargo por la boca', seg: 6 }
    ],
    ciclos: 33,
    nota: 'En el estudio de Stanford (2023) le ganó al mindfulness y al box breathing en mejora de ánimo. La doble inhalación reinfla los pulmones; la exhalación larga frena el sistema de alerta. Fisiología pura.'
  }
];

const MEDITACIONES = [
  {
    id: 'med-atencion', nombre: 'Atención a la respiración', categoria: 'Meditación', dur: '5 min',
    problemas: ['estrés'],
    pasos: [
      { nombre: 'Acomodarse', seg: 30, instruccion: 'Sentado o acostado, ojos cerrados. Sin buscar ninguna postura especial: cómodo y quieto alcanza.', sentir: 'El cuerpo apoyado. Nada que lograr.' },
      { nombre: 'Encontrar la respiración', seg: 60, instruccion: 'No la cambies. Solo notá dónde la sentís más clara: nariz, pecho o panza.', sentir: 'El aire entrando y saliendo solo.' },
      { nombre: 'Contar respiraciones', seg: 150, instruccion: 'Contá cada exhalación: 1, 2, 3... hasta 10 y volvé a empezar. Cuando la cabeza se vaya (se va a ir), volvé al 1 sin drama.', sentir: 'Irse y volver ES la práctica. Cada vuelta es una repetición del músculo mental.' },
      { nombre: 'Cierre', seg: 60, instruccion: 'Soltá la cuenta. Tres respiraciones profundas y abrí los ojos despacio.', sentir: 'La cabeza un punto más ordenada que hace 5 minutos.' }
    ]
  },
  {
    id: 'med-bodyscan', nombre: 'Body scan', categoria: 'Meditación', dur: '8 min',
    problemas: ['estrés', 'cuello duro'],
    pasos: [
      { nombre: 'Acostarse', seg: 45, instruccion: 'Boca arriba, brazos a los costados, ojos cerrados. Tres respiraciones profundas.', sentir: 'El peso del cuerpo entregado al piso o la cama.' },
      { nombre: 'Pies y piernas', seg: 90, instruccion: 'Llevá la atención a los pies. Notá lo que haya: hormigueo, temperatura, nada. Subí lento por pantorrillas y muslos.', sentir: 'Zonas que se aflojan solas cuando les prestás atención.' },
      { nombre: 'Panza, pecho y espalda', seg: 90, instruccion: 'Notá el movimiento de la respiración en la panza. Recorré el pecho y la espalda contra el apoyo.', sentir: 'El centro del cuerpo respirando solo.' },
      { nombre: 'Hombros, cuello y mandíbula', seg: 120, instruccion: 'Tu zona. Recorré hombros, cuello, mandíbula. En cada punto de tensión, imaginá que exhalás desde ahí.', sentir: 'La mandíbula que se descuelga, los hombros que caen. Acá vive tu tensión: soltala.' },
      { nombre: 'Cara y cabeza', seg: 60, instruccion: 'Frente, ojos, boca. Aflojá todo hasta que la cara quede lisa.', sentir: 'La cara sin gesto: descanso real.' },
      { nombre: 'Cuerpo entero', seg: 75, instruccion: 'Sentí el cuerpo completo de una vez, respirando. Quedate ahí hasta el final.', sentir: 'Pesadez buena. Si es de noche, así se entra al sueño.' }
    ]
  },
  {
    id: 'med-nsdr', nombre: 'NSDR · Descanso profundo', categoria: 'Meditación', dur: '10 min',
    problemas: ['estrés'],
    pasos: [
      { nombre: 'Preparación', seg: 45, instruccion: 'Acostado, brazos a los costados, ojos cerrados. Esto no es dormir ni meditar: es descanso profundo despierto. No hay forma de hacerlo mal.', sentir: 'Permiso para no hacer absolutamente nada.' },
      { nombre: 'Respiración descendente', seg: 90, instruccion: 'Tres suspiros largos: inhalá hondo, otro poquito más, y exhalá el doble de largo por la boca. Después dejá que la respiración siga sola.', sentir: 'Cada exhalación te hunde un centímetro más en el colchón.' },
      { nombre: 'Escaneo veloz', seg: 150, instruccion: 'Pasá la atención como una luz por el cuerpo: pies, piernas, cadera, panza, pecho, manos, brazos, cuello, cara. Más rápido que un body scan, sin detenerte a arreglar nada.', sentir: 'El cuerpo apareciendo por zonas y apagándose detrás de la luz.' },
      { nombre: 'Pesadez y calor', seg: 150, instruccion: 'Repetite mentalmente, lento: "las manos pesadas y calientes... las piernas pesadas... todo el cuerpo pesado". No lo fuerces: sugerilo y esperá.', sentir: 'La pesadez real que aparece sola. El cuerpo obedece a la palabra: eso ES control del cuerpo.' },
      { nombre: 'Espacio mental', seg: 120, instruccion: 'Llevá la atención al espacio oscuro detrás de los ojos. Los pensamientos que pasen, dejalos pasar como autos: los ves, no te subís.', sentir: 'Un estado raro entre despierto y dormido. Ahí es donde el sistema se recarga.' },
      { nombre: 'Retorno', seg: 45, instruccion: 'Mové los dedos de las manos y los pies. Una respiración honda. Abrí los ojos despacio.', sentir: 'Como 90 minutos de siesta en 10. La ciencia lo respalda: restaura energía y dopamina.' }
    ]
  },
  {
    id: 'med-noting', nombre: 'Etiquetar pensamientos', categoria: 'Meditación', dur: '6 min',
    problemas: ['estrés'],
    pasos: [
      { nombre: 'Base en la respiración', seg: 60, instruccion: 'Sentado, ojos cerrados. Dos minutos de respiración normal, atención en la panza subiendo y bajando.', sentir: 'El punto de anclaje al que siempre se vuelve.' },
      { nombre: 'Etiquetar pensamientos', seg: 180, instruccion: 'Cuando un pensamiento te saque de la respiración (va a pasar todo el tiempo), nombralo bajito con UNA palabra: "planeando", "recordando", "juzgando", "preocupándome". Y volvé a la panza.', sentir: 'El truco más poderoso que existe: el pensamiento deja de ser VOS y pasa a ser algo que VES. Ahí empieza el control real de la mente.' },
      { nombre: 'Etiquetar emociones', seg: 60, instruccion: 'Ahora lo mismo con lo que sentís: "ansiedad", "aburrimiento", "fiaca". Una palabra, sin pelearte con ninguna, y volvés.', sentir: 'Nombrar una emoción le baja el volumen. Está medido en neuroimagen: se llama "affect labeling".' },
      { nombre: 'Cierre', seg: 60, instruccion: 'Soltá las etiquetas. Un minuto de respiración simple y abrís los ojos.', sentir: 'La distancia nueva entre vos y tu ruido mental. Con semanas de práctica, esa distancia aparece sola en el día.' }
    ]
  },
  {
    id: 'med-pmr', nombre: 'Relajación muscular progresiva', categoria: 'Meditación', dur: '8 min',
    problemas: ['estrés', 'cuello duro', 'dolor de cabeza'],
    pasos: [
      { nombre: 'Preparación', seg: 30, instruccion: 'Acostado o sentado cómodo. La técnica: tensar fuerte una zona 5 segundos, soltar de golpe, y sentir la diferencia 15 segundos.', sentir: 'Vas a aprender el idioma de tu tensión.' },
      { nombre: 'Manos y brazos', seg: 90, instruccion: 'Puños apretados FUERTE 5 seg... y soltá de golpe. Sentí 15 seg. Repetí. Después brazos enteros: tensá 5, soltá.', sentir: 'El calor y el hormigueo cuando soltás: eso es un músculo aflojando de verdad.' },
      { nombre: 'Cara y mandíbula', seg: 90, instruccion: 'Apretá los dientes SUAVE y cerrá fuerte los ojos 5 seg... soltá todo: mandíbula colgando, frente lisa. Repetí.', sentir: 'TU zona. Reconocer la mandíbula apretada de día es media batalla del bruxismo ganada.' },
      { nombre: 'Hombros y cuello', seg: 90, instruccion: 'Hombros a las orejas 5 seg... y caen de golpe. Repetí 2 veces más: acá vive tu tensión.', sentir: 'Cuánto más abajo quedan los hombros después de soltar. Esa es su posición real.' },
      { nombre: 'Panza y espalda', seg: 60, instruccion: 'Apretá el abdomen 5 seg, soltá. Arqueá apenas la espalda, soltá.', sentir: 'El centro del cuerpo sin guardia.' },
      { nombre: 'Piernas y pies', seg: 90, instruccion: 'Muslos apretados 5 seg, soltá. Puntas de pie hacia vos, soltá. Dedos en garra, soltá.', sentir: 'Las piernas pesadas, entregadas.' },
      { nombre: 'Todo junto', seg: 60, instruccion: 'Tensá TODO el cuerpo a la vez 5 segundos... y soltá todo de golpe. Quedate en la soltura total hasta el final.', sentir: 'La diferencia entre tenso y suelto, aprendida de memoria. Técnica de Jacobson: casi 100 años de evidencia en ansiedad, sueño y tensión.' }
    ]
  },
  {
    id: 'med-metta', nombre: 'Bondad dirigida', categoria: 'Meditación', dur: '6 min',
    problemas: ['estrés'],
    pasos: [
      { nombre: 'Acomodarse', seg: 30, instruccion: 'Sentado, ojos cerrados, dos respiraciones hondas. Esto no es autoayuda blanda: es entrenamiento de emoción dirigida, con evidencia dura en ánimo y autocrítica.', sentir: 'Escepticismo permitido. Funciona igual.' },
      { nombre: 'Vos primero', seg: 120, instruccion: 'Repetite mentalmente, lento, con tus palabras: "que tenga energía... que esté tranquilo... que llegue a enero como quiero llegar". Como si se lo desearas a un amigo que sos vos.', sentir: 'Raro al principio. La voz interna que te critica todo el día aprendiendo otro tono.' },
      { nombre: 'Alguien que querés', seg: 90, instruccion: 'Traé a un amigo o alguien de tu familia. Las mismas frases para esa persona: "que esté bien... que la pase bien...".', sentir: 'Esto sale más fácil. El músculo es el mismo.' },
      { nombre: 'Alguien neutro', seg: 60, instruccion: 'Ahora alguien que apenas conocés: el de la verdulería, uno de la oficina. Mismas frases.', sentir: 'El truco avanzado: generar el estado sin que la persona "lo merezca". Eso es control emocional de verdad.' },
      { nombre: 'Cierre', seg: 60, instruccion: 'Volvé a vos. Una frase final y tres respiraciones.', sentir: 'En estudios, semanas de esta práctica mueven el ánimo base más que casi cualquier otra técnica. Para un momento de pozo, es de lo mejor que hay.' }
    ]
  },
  {
    id: 'med-visualizacion', nombre: 'Visualización de objetivos', categoria: 'Meditación', dur: '5 min',
    problemas: [],
    pasos: [
      { nombre: 'Acomodarse', seg: 30, instruccion: 'Sentado, ojos cerrados, tres respiraciones profundas.', sentir: 'El cuerpo quieto, la cabeza lista para proyectar.' },
      { nombre: 'Enero 2027, Brasil', seg: 120, instruccion: 'Armá la escena: llegás a la playa con tus amigos. Cómo te ves, cómo te sentís, cómo te queda la ropa. Detalles: el calor, la risa, la confianza.', sentir: 'Que el objetivo tenga imagen y no solo número. El cerebro trabaja para lo que puede ver.' },
      { nombre: 'El camino', seg: 90, instruccion: 'Ahora vete un día cualquiera de la semana que viene haciendo lo que te lleva ahí: el gym, la comida, el foco. Vete haciéndolo fácil.', sentir: 'La conexión entre el día de mañana y la playa de enero.' },
      { nombre: 'Cierre', seg: 60, instruccion: 'Elegí UNA acción de mañana que te acerca. Nombrala. Tres respiraciones y abrí los ojos.', sentir: 'Dirección. El norte, digamos.' }
    ]
  }
];
