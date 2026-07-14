// NORTE · pantalla GYM — sesión del día con técnica en 3 niveles,
// último peso por ejercicio, timer de descanso, variantes y versión mínima.

const Gym = (() => {

  let sesionElegida = null;   // ref de GYM_SESIONES que se está viendo
  let modoMinimo = false;
  let timerActivo = null;     // { intervalo, ejercicioId }

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function sesionDeHoy() {
    const dia = Motor.obtenerDia();
    const pieza = dia.piezas.find((x) => GYM_SESIONES[x.ref]);
    return pieza ? pieza.ref : null;
  }

  function marca(ejercicioId) {
    const marcas = Store.leer('gym-marcas', {});
    return marcas[ejercicioId] || null;
  }

  function guardarMarca(ejercicioId, peso, reps) {
    const marcas = Store.leer('gym-marcas', {});
    marcas[ejercicioId] = { peso, reps, fecha: Motor.fechaISO() };
    Store.guardar('gym-marcas', marcas);
    const historial = Store.leer('gym-historial', []);
    historial.push({ id: Store.nuevoId(), ejercicioId, peso, reps, fecha: new Date().toISOString() });
    Store.guardar('gym-historial', historial);
  }

  function hechosDeHoy() {
    const todos = Store.leer('gym-hechos', {});
    return todos[Motor.fechaISO()] || {};
  }

  function marcarHecho(ejercicioId, valor) {
    const todos = Store.leer('gym-hechos', {});
    const iso = Motor.fechaISO();
    todos[iso] = todos[iso] || {};
    todos[iso][ejercicioId] = valor;
    Store.guardar('gym-hechos', todos);
  }

  function pararTimer() {
    if (timerActivo) {
      clearInterval(timerActivo.intervalo);
      timerActivo = null;
    }
  }

  function render() {
    pararTimer();
    const cont = document.getElementById('gym-contenido');
    const hoyRef = sesionDeHoy();
    if (!sesionElegida) sesionElegida = hoyRef || 'gym-empuje';
    const sesion = GYM_SESIONES[sesionElegida];
    const hechos = hechosDeHoy();
    const esLaDeHoy = sesionElegida === hoyRef;

    let html = '';

    // Selector de sesión
    html += '<div class="chips">';
    Object.keys(GYM_SESIONES).forEach((ref) => {
      const s = GYM_SESIONES[ref];
      html += '<button class="chip' + (ref === sesionElegida ? ' activo' : '') + '" data-sesion="' + ref + '">' +
        esc(s.nombre) + '</button>';
    });
    html += '</div>';

    if (!esLaDeHoy) {
      html += '<div class="tarjeta vacio"><p>' + (hoyRef
        ? 'Hoy toca ' + esc(GYM_SESIONES[hoyRef].nombre) + '. Esta la estás mirando de consulta.'
        : 'Hoy no hay gym en tu rutina. Esto es consulta, o hacela igual si pinta.') + '</p></div>';
    }

    // Versión mínima
    html += '<button class="cierre-card' + (modoMinimo ? ' activo' : '') + '" id="btn-minima"><div class="cuerpo">' +
      '<p class="titulo">' + (modoMinimo ? 'Versión mínima puesta' : 'Poca energía hoy') + '</p>' +
      '<p class="meta">' + (modoMinimo ? 'Primeros 3 + cinta 10 min. Hacer poco > no hacer.' : 'Tocá para la versión mínima: 3 ejercicios + cinta 10 min') + '</p>' +
      '</div></button>';

    // Ejercicios
    const lista = modoMinimo ? sesion.ejercicios.slice(0, GYM_MINIMA_CANTIDAD) : sesion.ejercicios;
    lista.forEach((ej, i) => {
      const m = marca(ej.id);
      const hecho = !!hechos[ej.id];
      html += '<div class="ejercicio' + (hecho ? ' hecho' : '') + '" data-ej="' + ej.id + '">' +
        '<div class="ej-cabecera" data-accion="hecho">' +
        '<span class="estado">' + (hecho ? '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' : (i + 1)) + '</span>' +
        '<div class="cuerpo"><p class="titulo">' + esc(ej.nombre) + (ej.opcional ? ' <span class="tag">Opcional</span>' : '') + '</p>' +
        '<p class="meta">' + esc(ej.series) + ' · ' + esc(ej.nivel1) + (m ? ' · <strong>Últ: ' + esc(String(m.peso)) + 'kg×' + esc(String(m.reps)) + '</strong>' : '') + '</p></div>' +
        '</div>' +
        '<div class="ej-acciones">' +
        '<button class="btn-mini" data-accion="tecnica">Técnica</button>' +
        '<button class="btn-mini" data-accion="registrar">Anotar peso</button>' +
        '<button class="btn-mini" data-accion="descanso">Descanso ' + (ej.descanso >= 120 ? '2:00' : '1:15') + '</button>' +
        '</div>' +
        '<div class="ej-panel" data-panel="tecnica" hidden>' +
        '<p><strong>Preparación.</strong> ' + esc(ej.nivel2.prep) + '</p>' +
        '<p><strong>Ejecución.</strong> ' + esc(ej.nivel2.ejec) + '</p>' +
        '<p><strong>Errores que anulan.</strong> ' + esc(ej.nivel2.errores) + '</p>' +
        '<p><strong>Qué sentir.</strong> ' + esc(ej.nivel2.sentir) + '</p>' +
        '<p><strong>Progresar.</strong> ' + esc(ej.nivel2.progresar) + '</p>' +
        '<p class="porque-ej"><strong>Por qué está en tu plan.</strong> ' + esc(ej.nivel3) + '</p>' +
        '<p class="variantes-ej"><strong>Si está ocupada:</strong> ' + ej.variantes.map(esc).join(' · ') + '</p>' +
        '</div>' +
        '<div class="ej-panel" data-panel="registrar" hidden>' +
        '<div class="registro-fila">' +
        '<input type="text" inputmode="decimal" data-campo="peso" placeholder="kg" aria-label="Peso">' +
        '<input type="text" inputmode="numeric" data-campo="reps" placeholder="reps" aria-label="Repeticiones">' +
        '<button class="btn btn-secundario" data-accion="guardar-marca">Guardar</button>' +
        '</div></div>' +
        '<p class="ej-timer" data-timer hidden></p>' +
        '</div>';
    });

    // Bonus y cinta
    if (!modoMinimo && sesion.bonus) {
      html += '<div class="tarjeta vacio"><p><strong>' + esc(sesion.bonus.nombre) + '</strong> · ' +
        esc(sesion.bonus.series) + '<br><span class="mono">' + esc(sesion.bonus.nivel1) + '</span></p></div>';
    }
    html += '<div class="tarjeta"><p><strong>Para cerrar:</strong> ' +
      esc(modoMinimo ? sesion.cintaMinima : sesion.cinta) + '</p></div>';

    if (esLaDeHoy) {
      html += '<button class="btn btn-primario" id="btn-terminar-gym" style="width:100%;">Terminar sesión</button>';
    }

    cont.innerHTML = html;
    conectar(cont, sesion, esLaDeHoy);
  }

  function conectar(cont, sesion, esLaDeHoy) {
    cont.querySelectorAll('[data-sesion]').forEach((b) => {
      b.addEventListener('click', () => { sesionElegida = b.dataset.sesion; render(); });
    });

    document.getElementById('btn-minima').addEventListener('click', () => {
      modoMinimo = !modoMinimo;
      render();
    });

    cont.querySelectorAll('.ejercicio').forEach((card) => {
      const ejId = card.dataset.ej;
      const ej = sesion.ejercicios.find((x) => x.id === ejId);

      card.querySelector('[data-accion="hecho"]').addEventListener('click', () => {
        marcarHecho(ejId, !hechosDeHoy()[ejId]);
        render();
      });

      ['tecnica', 'registrar'].forEach((panel) => {
        card.querySelector('[data-accion="' + panel + '"]').addEventListener('click', () => {
          const el = card.querySelector('[data-panel="' + panel + '"]');
          el.hidden = !el.hidden;
        });
      });

      card.querySelector('[data-accion="guardar-marca"]').addEventListener('click', () => {
        const peso = parseFloat(String(card.querySelector('[data-campo="peso"]').value).trim().replace(',', '.'));
        const reps = parseInt(String(card.querySelector('[data-campo="reps"]').value).replace(/[^\d]/g, ''), 10);
        if (!peso || peso <= 0 || peso > 500 || !reps || reps < 1 || reps > 100) {
          alert('Cargá peso en kg y repeticiones.');
          return;
        }
        guardarMarca(ejId, peso, reps);
        render();
      });

      card.querySelector('[data-accion="descanso"]').addEventListener('click', () => {
        pararTimer();
        const display = card.querySelector('[data-timer]');
        let restante = ej.descanso;
        display.hidden = false;
        const pintar = () => {
          const m = Math.floor(restante / 60);
          const s = String(restante % 60).padStart(2, '0');
          display.textContent = restante > 0 ? 'Descanso: ' + m + ':' + s : 'Listo. Siguiente serie.';
        };
        pintar();
        timerActivo = {
          ejercicioId: ejId,
          intervalo: setInterval(() => {
            restante -= 1;
            pintar();
            if (restante <= 0) pararTimer();
          }, 1000)
        };
      });
    });

    if (esLaDeHoy) {
      document.getElementById('btn-terminar-gym').addEventListener('click', () => {
        const dia = Motor.obtenerDia();
        const pieza = dia.piezas.find((x) => GYM_SESIONES[x.ref]);
        if (pieza) {
          pieza.estado = 'hecha';
          Motor.guardarDia(dia);
        }
        pararTimer();
        location.hash = '#/hoy';
      });
    }
  }

  // Para el buscador de Biblioteca: abre una sesión puntual.
  function abrir(ref) {
    if (GYM_SESIONES[ref]) sesionElegida = ref;
  }

  return { render, pararTimer, abrir };
})();
