// NORTE · pantalla GYM — sesión con tracker de series por toque (el descanso arranca solo),
// técnica en secciones estructuradas, último peso, versión mínima y variantes.

const Gym = (() => {

  let sesionElegida = null;   // ref de GYM_SESIONES que se está viendo
  let modoMinimo = false;
  let timerActivo = null;     // { intervalo, ejercicioId, total, restante }

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

  // Series completadas hoy por ejercicio: { iso: { ejId: n } }
  function seriesDeHoy() {
    const todas = Store.leer('gym-series', {});
    return todas[Motor.fechaISO()] || {};
  }

  function guardarSeries(ejId, n) {
    const todas = Store.leer('gym-series', {});
    const iso = Motor.fechaISO();
    todas[iso] = todas[iso] || {};
    todas[iso][ejId] = n;
    Store.guardar('gym-series', todas);
  }

  function totalSeries(ej) {
    const n = parseInt(ej.series, 10);
    return n >= 1 && n <= 8 ? n : 3;
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

  // Descanso automático como barra que se vacía.
  function arrancarDescanso(card, segundos) {
    pararTimer();
    const zona = card.querySelector('[data-timer-zona]');
    zona.hidden = false;
    zona.innerHTML = '<div class="timer-barra"><div style="width:100%;"></div></div>' +
      '<div class="timer-texto"><span>Descanso</span><span data-t>' + fmt(segundos) + '</span></div>';
    const barra = zona.querySelector('.timer-barra div');
    const texto = zona.querySelector('[data-t]');
    let restante = segundos;
    requestAnimationFrame(() => { barra.style.width = ((restante - 1) / segundos * 100) + '%'; });
    timerActivo = {
      ejercicioId: card.dataset.ej,
      intervalo: setInterval(() => {
        restante -= 1;
        if (restante <= 0) {
          pararTimer();
          zona.innerHTML = '<div class="timer-texto"><span style="color:var(--verde); font-weight:700;">Listo. Siguiente serie.</span></div>';
          return;
        }
        texto.textContent = fmt(restante);
        barra.style.width = ((restante - 1) / segundos * 100) + '%';
      }, 1000)
    };
  }

  function fmt(s) {
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  function render() {
    pararTimer();
    const cont = document.getElementById('gym-contenido');
    const hoyRef = sesionDeHoy();
    if (!sesionElegida) sesionElegida = hoyRef || 'gym-empuje';
    const sesion = GYM_SESIONES[sesionElegida];
    const hechos = hechosDeHoy();
    const series = seriesDeHoy();
    const esLaDeHoy = sesionElegida === hoyRef;
    const lista = modoMinimo ? sesion.ejercicios.slice(0, GYM_MINIMA_CANTIDAD) : sesion.ejercicios;
    const nHechos = lista.filter((ej) => hechos[ej.id]).length;

    let html = '';

    // Selector de sesión
    html += '<div class="chips">';
    Object.keys(GYM_SESIONES).forEach((ref) => {
      html += '<button class="chip' + (ref === sesionElegida ? ' activo' : '') + '" data-sesion="' + ref + '">' +
        esc(GYM_SESIONES[ref].nombre) + '</button>';
    });
    html += '</div>';

    // Cabecera de sesión con progreso
    html += '<div class="sesion-head">' +
      '<div class="sh-top"><span class="badge">' + Iconos.get('gym', 24) + '</span>' +
      '<div><h2>' + esc(sesion.nombre) + '</h2>' +
      '<p class="sh-sub">' + esc(sesion.dia) + ' · ' + lista.length + ' ejercicios · ' + esc(modoMinimo ? sesion.cintaMinima : sesion.cinta) + '</p></div></div>' +
      '<div class="barra"><div style="width:' + Math.round(nHechos / lista.length * 100) + '%;"></div></div>' +
      '<span class="sh-prog">' + nHechos + ' de ' + lista.length + ' completados' + (esLaDeHoy ? '' : ' · modo consulta, hoy no toca esta') + '</span>' +
      '</div>';

    // Versión mínima
    html += '<button class="cierre-card' + (modoMinimo ? ' activo' : '') + '" id="btn-minima"><div class="cuerpo">' +
      '<p class="titulo">' + (modoMinimo ? 'Versión mínima puesta' : 'Poca energía hoy') + '</p>' +
      '<p class="meta">' + (modoMinimo ? 'Primeros 3 + cinta 10 min. Hacer poco > no hacer.' : 'Tocá para la versión mínima: 3 ejercicios + cinta 10 min') + '</p>' +
      '</div></button>';

    // Ejercicios
    lista.forEach((ej, i) => {
      const m = marca(ej.id);
      const hecho = !!hechos[ej.id];
      const nSets = totalSeries(ej);
      const setsHechos = Math.min(series[ej.id] || 0, nSets);

      html += '<div class="ejercicio' + (hecho ? ' hecho' : '') + '" data-ej="' + ej.id + '">' +
        '<div class="ej-cabecera" data-accion="hecho">' +
        '<span class="estado">' + (hecho ? Iconos.get('check', 15, 2.4) : (i + 1)) + '</span>' +
        '<div class="cuerpo"><p class="titulo">' + esc(ej.nombre) + (ej.opcional ? ' <span class="tag pc-cuerpo">Opcional</span>' : '') + '</p>' +
        '<p class="meta">' + esc(ej.series) + ' · ' + esc(ej.nivel1) +
        (m ? ' · <strong>Últ: ' + esc(String(m.peso)) + 'kg×' + esc(String(m.reps)) + '</strong>' : '') + '</p></div>' +
        '</div>';

      // Tracker de series: un toque por serie hecha, el descanso arranca solo
      html += '<div class="series-fila"><span class="series-label">Series</span><div class="serie-dots">';
      for (let s = 0; s < nSets; s++) {
        html += '<button class="serie-dot' + (s < setsHechos ? ' llena' : '') + '" data-serie="' + s + '" aria-label="Serie ' + (s + 1) + '">' +
          (s < setsHechos ? Iconos.get('check', 13, 2.6) : (s + 1)) + '</button>';
      }
      html += '</div></div>';
      html += '<div class="timer-zona" data-timer-zona hidden></div>';

      html += '<div class="ej-acciones">' +
        '<button class="btn-mini" data-accion="tecnica">Técnica</button>' +
        '<button class="btn-mini" data-accion="registrar">Anotar peso</button>' +
        '</div>';

      // Técnica completa: montaje → ejecución numerada → claves → errores+fix → sentir → progresar → dudas → porqué
      html += '<div class="ej-panel" data-panel="tecnica" hidden>' +
        '<h4 class="tec-titulo">' + Iconos.get('rutina', 13) + 'Montaje</h4>' +
        ej.setup.map((s) => '<div class="setup-fila"><span class="setup-check">' + Iconos.get('check', 11, 2.6) + '</span><p>' + esc(s) + '</p></div>').join('') +

        '<h4 class="tec-titulo">' + Iconos.get('energia', 13) + 'Ejecución</h4>' +
        ej.pasos.map((p, pi) =>
          '<div class="paso-fila"><span class="paso-num" style="background:var(--cuerpo);">' + (pi + 1) + '</span>' +
          '<div style="flex:1;"><p style="margin:0;"><strong>' + esc(p.t) + '.</strong> ' + esc(p.d) + '</p>' +
          (p.resp && p.resp !== '—' ? '<span class="resp-tag">' + esc(p.resp) + '</span>' : '') +
          '</div></div>').join('') +

        '<h4 class="tec-titulo">' + Iconos.get('foco', 13) + 'Las 3 claves</h4>' +
        ej.claves.map((c) => '<div class="clave-fila"><p>' + esc(c) + '</p></div>').join('') +

        '<h4 class="tec-titulo">' + Iconos.get('cerrar', 13) + 'Errores y cómo corregirlos</h4>' +
        ej.errores.map((er) =>
          '<div class="err-fila"><p class="err-mal">' + esc(er.e) + '</p>' +
          '<p class="err-fix">' + esc(er.fix) + '</p></div>').join('') +

        tecSeccion('cuerpo', 'Qué sentir', ej.sentir) +
        tecSeccion('progreso', 'Cómo progresar', ej.progresar) +

        '<h4 class="tec-titulo">' + Iconos.get('cabeza', 13) + 'Dudas del banco</h4>' +
        ej.dudas.map((d) =>
          '<div class="duda"><p class="duda-q">' + esc(d.q) + '</p><p class="duda-a">' + esc(d.a) + '</p></div>').join('') +

        tecSeccion('aprender', 'Por qué está en tu plan', ej.porque, true) +
        tecSeccion('flecha', 'Si está ocupada', ej.variantes.join(' · '), true) +
        '</div>';

      html += '<div class="ej-panel" data-panel="registrar" hidden>' +
        '<div class="registro-fila">' +
        '<input type="text" inputmode="decimal" data-campo="peso" placeholder="kg" aria-label="Peso">' +
        '<input type="text" inputmode="numeric" data-campo="reps" placeholder="reps" aria-label="Repeticiones">' +
        '<button class="btn btn-secundario" data-accion="guardar-marca">Guardar</button>' +
        '</div></div>';

      html += '</div>';
    });

    // Bonus y cinta
    if (!modoMinimo && sesion.bonus) {
      html += '<div class="tarjeta vacio"><p><strong>' + esc(sesion.bonus.nombre) + '</strong> · ' +
        esc(sesion.bonus.series) + '<br><span class="mono">' + esc(sesion.bonus.nivel1) + '</span></p></div>';
    }

    if (esLaDeHoy) {
      html += '<button class="btn btn-primario" id="btn-terminar-gym" style="width:100%;">Terminar sesión</button>';
    }

    cont.innerHTML = html;
    conectar(cont, sesion, esLaDeHoy, lista);
  }

  function tecSeccion(icono, titulo, texto, suave) {
    return '<div class="tec-seccion' + (suave ? ' suave' : '') + '">' +
      '<span class="tec-ic">' + Iconos.get(icono, 15) + '</span>' +
      '<div class="tec-txt"><h4>' + titulo + '</h4><p>' + (function(){ const d = document.createElement('div'); d.textContent = texto; return d.innerHTML; })() + '</p></div></div>';
  }

  function conectar(cont, sesion, esLaDeHoy, lista) {
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
      const nSets = totalSeries(ej);

      card.querySelector('[data-accion="hecho"]').addEventListener('click', () => {
        marcarHecho(ejId, !hechosDeHoy()[ejId]);
        render();
      });

      // Toque en una serie: la marca (y las anteriores) y arranca el descanso.
      card.querySelectorAll('[data-serie]').forEach((dot) => {
        dot.addEventListener('click', () => {
          const idx = Number(dot.dataset.serie);
          const actuales = Math.min(seriesDeHoy()[ejId] || 0, nSets);
          const nuevas = idx + 1 === actuales ? idx : idx + 1; // tocar la última llena la desmarca
          guardarSeries(ejId, nuevas);
          // Refresco visual sin re-render completo (para no matar el timer)
          card.querySelectorAll('[data-serie]').forEach((d, i) => {
            const llena = i < nuevas;
            d.classList.toggle('llena', llena);
            d.innerHTML = llena ? Iconos.get('check', 13, 2.6) : String(i + 1);
          });
          if (nuevas > actuales) {
            if (nuevas >= nSets) {
              marcarHecho(ejId, true);
              render();
            } else {
              arrancarDescanso(card, ej.descanso);
            }
          }
        });
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
