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
    return RUTINA_BASE.find((p) => p.id === ref) ||
      Store.leer('piezas-propias', []).find((p) => p.id === ref) || null;
  }

  // Rutina vigente: las piezas base que no fueron desactivadas + las creadas por Galo.
  function plantillasActivas() {
    const desactivadas = Store.leer('rutina-config', {});
    return RUTINA_BASE.filter((p) => desactivadas[p.id] !== false)
      .concat(Store.leer('piezas-propias', []));
  }

  // Devuelve el día de hoy; si no existe todavía, lo genera desde la rutina
  // más lo que ayer quedó marcado "pasa a mañana".
  function obtenerDia(fecha = new Date()) {
    const iso = fechaISO(fecha);
    const dias = Store.leer('dias', {});
    if (dias[iso]) return dias[iso];

    const dow = fecha.getDay();
    const piezas = plantillasActivas()
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

  // Tras editar la rutina, rearma el día de hoy respetando lo ya marcado.
  function regenerarHoy() {
    const iso = fechaISO();
    const dias = Store.leer('dias', {});
    const viejo = dias[iso];
    const dow = new Date().getDay();

    const piezas = plantillasActivas()
      .filter((p) => p.dias.includes(dow))
      .map((p) => {
        const previa = viejo && viejo.piezas.find((x) => x.ref === p.id);
        return previa || { uid: Store.nuevoId(), ref: p.id, estado: 'pendiente', deAyer: false };
      });

    // Conserva las arrastradas de ayer que siguen teniendo plantilla.
    if (viejo) {
      viejo.piezas.forEach((x) => {
        if (x.deAyer && plantilla(x.ref) && !piezas.some((y) => y.ref === x.ref)) piezas.push(x);
      });
    }

    dias[iso] = {
      fecha: iso, piezas,
      cerrado: viejo ? viejo.cerrado : false,
      animo: viejo ? viejo.animo : null
    };
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

  return { fechaISO, plantilla, plantillasActivas, obtenerDia, guardarDia, regenerarHoy, bloqueActual, paraAhora, piezasDeBloque, pendientes };
})();
