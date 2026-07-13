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
