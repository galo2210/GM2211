// NORTE · contenido — plantillas de la rutina semanal (SISTEMA.md §4-§6).
// dias usa getDay(): 0=domingo, 1=lunes, 2=martes, 3=miércoles, 4=jueves, 5=viernes, 6=sábado.
// El motor filtra por día y arma los bloques. Nada acá toca el store.

const RUTINA_BASE = [

  // ---------- MAÑANA ----------
  {
    id: 'desayuno', bloque: 'manana', dias: [0, 1, 2, 3, 4, 5, 6],
    titulo: 'Desayuno', meta: 'Avena + café con leche · 550 kcal · 30g prot',
    porque: 'Tu problema es comer poco: arrancar comiendo es la mitad del plan.'
  },
  {
    id: 'creatina', bloque: 'manana', dias: [0, 1, 2, 3, 4, 5, 6],
    titulo: 'Creatina 5g', meta: 'Cualquier hora · constancia > timing',
    porque: 'El suplemento más importante. Un toque y listo.'
  },
  {
    id: 'esclerovitan', bloque: 'manana', dias: [0, 1, 2, 3, 4, 5, 6],
    titulo: 'Esclerovitan', meta: '1 con el café'
  },
  {
    id: 'movilidad-activar', bloque: 'manana', dias: [0, 1, 2, 3, 4, 5, 6],
    titulo: 'Activar en 3 min', meta: 'Movilidad · 4 movimientos',
    porque: 'Tres minutos que le avisan al cuerpo que el día empezó.'
  },
  {
    id: 'drenaje', bloque: 'manana', dias: [0, 1, 2, 3, 4, 5, 6],
    titulo: 'Drenaje matutino', meta: 'Cara · 90 seg'
  },

  // ---------- DÍA ----------
  {
    id: 'almuerzo', bloque: 'dia', dias: [1, 2, 3, 4, 5],
    titulo: 'Almuerzo', meta: 'Oficina · ~500 kcal · 40g prot'
  },
  {
    id: 'pausas-oficina', bloque: 'dia', dias: [1, 2, 3, 4, 5],
    titulo: 'Pausas de oficina', meta: '2 pausas de 2 min · ~11h y ~14h',
    porque: 'Siete horas sentado piden dos cortes. Nadie se da cuenta, tu cuello sí.'
  },
  {
    id: 'foco', bloque: 'dia', dias: [1, 2, 3, 4, 5],
    titulo: 'Bloque de foco', meta: '25-50 min · una sola cosa · celular lejos',
    porque: 'Un bloque por día entrena la cabeza como el gym entrena el cuerpo.'
  },
  {
    id: 'gym-empuje', bloque: 'dia', dias: [1],
    titulo: 'Gym · Empuje', meta: '6 ejercicios + cinta 15 min',
    porque: 'Lunes de empuje: pecho, hombros y tríceps. La semana arranca fuerte.'
  },
  {
    id: 'gym-tiron', bloque: 'dia', dias: [2],
    titulo: 'Gym · Tirón', meta: '6 ejercicios + cinta 15 min',
    porque: 'Martes de tirón: espalda y bíceps. La postura se construye acá.'
  },
  {
    id: 'gym-mixto', bloque: 'dia', dias: [4],
    titulo: 'Gym · Hombros y brazos', meta: '6 ejercicios + cinta 15 min',
    porque: 'Jueves mixto: el press pesado de la semana.'
  },
  {
    id: 'gym-pierna', bloque: 'dia', dias: [6], opcional: true,
    titulo: 'Gym · Pierna express', meta: '4 ejercicios + cinta 20 min',
    porque: 'Sábado a la mañana es tu ventana. Si no pinta, no pasa nada.'
  },
  {
    id: 'post-gym', bloque: 'dia', dias: [1, 2, 4, 6],
    titulo: 'Post-gym', meta: 'Licuado whey + banana · 35g prot',
    porque: 'LA comida clave del día. Antes que cualquier otra cosa al volver.'
  },
  {
    id: 'casa-cuello', bloque: 'dia', dias: [0, 3, 5],
    titulo: 'Cuello, trapecios y cara', meta: 'Casa · 10 min',
    porque: 'Día sin gym: diez minutos que sostienen cuello y mandíbula.'
  },
  {
    id: 'pasos-meta-alta', bloque: 'dia', dias: [1, 2, 4, 6],
    titulo: 'Pasos', meta: 'Meta 10.000 · caminar al gym suma'
  },
  {
    id: 'pasos-meta-base', bloque: 'dia', dias: [0, 3, 5],
    titulo: 'Pasos', meta: 'Meta 6.000 · con una vuelta alcanza'
  },
  {
    id: 'aprender', bloque: 'dia', dias: [0, 1, 2, 3, 4, 5, 6],
    titulo: 'Aprender · 15 min', meta: 'Una pieza corta + lo tuyo',
    porque: 'Quince minutos por día es un libro por mes. Sin apuro.'
  },

  // ---------- NOCHE ----------
  {
    id: 'cena', bloque: 'noche', dias: [0, 1, 2, 3, 4, 5, 6],
    titulo: 'Cena de olla', meta: '~650 kcal · 50g prot',
    porque: 'Cocinada para 2-3 días: hoy solo hay que calentarla.'
  },
  {
    id: 'tarrito-avena', bloque: 'noche', dias: [0, 1, 2, 3, 4],
    titulo: 'Tarrito de avena p/ mañana', meta: 'Desayuno de oficina listo en 3 min',
    porque: 'Tres minutos hoy = desayuno resuelto mañana en la oficina.'
  },
  {
    id: 'respiracion', bloque: 'noche', dias: [0, 1, 2, 3, 4, 5, 6],
    titulo: 'Respiración 5 min', meta: '4-7-8 · antes del cierre',
    porque: 'Cinco minutos que bajan las revoluciones del día.'
  },
  {
    id: 'magnesio-placa', bloque: 'noche', dias: [0, 1, 2, 3, 4, 5, 6],
    titulo: 'Magnesio B6 + placa', meta: 'Antes de dormir · en cama tope 00:30'
  }
];
