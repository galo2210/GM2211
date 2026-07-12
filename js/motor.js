// NORTE · motor — genera el día, decide la sugerencia "para ahora" y maneja arrastres.
// Solo lógica: no toca el DOM. Persiste únicamente a través de Store.

const Motor = (() => {

  function fechaISO(fecha = new Date()) {
    const y = fecha.getFullYear();
    const m = String(fecha.getMonth() + 1).padStart(2, '0');
    const d = String(fecha.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + d;
  }

  function plantilla(ref) {
    return RUTINA_BASE.find((p) => p.id === ref) || null;
  }

  // Devuelve el día de hoy; si no existe todavía, lo genera desde la rutina
  // más lo que ayer quedó marcado "pasa a mañana".
  function obtenerDia(fecha = new Date()) {
    const iso = fechaISO(fecha);
    const dias = Store.leer('dias', {});
    if (dias[iso]) return dias[iso];

    const dow = fecha.getDay();
    const piezas = RUTINA_BASE
      .filter((p) => p.dias.includes(dow))
      .map((p) => ({ uid: Store.nuevoId(), ref: p.id, estado: 'pendiente', deAyer: false }));

    const arrastres = Store.leer('arrastres', []);
    arrastres.forEach((ref) => {
      if (plantilla(ref) && !piezas.some((x) => x.ref === ref)) {
        piezas.push({ uid: Store.nuevoId(), ref, estado: 'pendiente', deAyer: true });
      }
    });
    Store.guardar('arrastres', []);

    const dia = { fecha: iso, piezas, cerrado: false, animo: null };
    dias[iso] = dia;
    Store.guardar('dias', dias);
    return dia;
  }

  function guardarDia(dia) {
    const dias = Store.leer('dias', {});
    dias[dia.fecha] = dia;
    Store.guardar('dias', dias);
  }

  function bloqueActual(hora = new Date().getHours()) {
    if (hora < 12) return 'manana';
    if (hora < 19) return 'dia';
    return 'noche';
  }

  // La sugerencia principal: primera pieza pendiente del bloque actual;
  // si el bloque está completo, sigue con el próximo. Ignora las salteadas de esta sesión.
  function paraAhora(dia, salteadas = []) {
    if (dia.cerrado) return null;
    const orden = ['manana', 'dia', 'noche'];
    const desde = orden.indexOf(bloqueActual());
    const recorrido = orden.slice(desde).concat(orden.slice(0, desde));
    for (const bloque of recorrido) {
      const pieza = dia.piezas.find((x) => {
        const p = plantilla(x.ref);
        return p && p.bloque === bloque && x.estado === 'pendiente' && !salteadas.includes(x.uid);
      });
      if (pieza) return pieza;
    }
    return null;
  }

  function piezasDeBloque(dia, bloque) {
    return dia.piezas.filter((x) => {
      const p = plantilla(x.ref);
      return p && p.bloque === bloque;
    });
  }

  function pendientes(dia) {
    return dia.piezas.filter((x) => x.estado === 'pendiente');
  }

  return { fechaISO, plantilla, obtenerDia, guardarDia, bloqueActual, paraAhora, piezasDeBloque, pendientes };
})();
