// NORTE · pantalla HOY, Cierre del día, registro rápido y lista de Progreso.
// Todo el render sale del día que genera Motor; los datos viven en Store.

const Hoy = (() => {

  const salteadas = []; // "Otra cosa" saltea la sugerencia solo en esta sesión.

  const NOMBRE_BLOQUE = { manana: 'Mañana', dia: 'Día', noche: 'Noche' };

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  // ---------- HOY ----------
  function renderHoy() {
    const dia = Motor.obtenerDia();
    const cont = document.getElementById('hoy-contenido');
    let html = '';

    html += tarjetaParaAhora(dia);
    html += htmlTareasDeHoy();
    ['manana', 'dia', 'noche'].forEach((bloque) => {
      html += htmlBloque(dia, bloque);
    });
    cont.innerHTML = html;

    // Toques: el círculo marca hecha/pendiente; el cuerpo de una pieza de gym abre la sesión.
    cont.querySelectorAll('[data-uid]').forEach((el) => {
      el.addEventListener('click', (e) => {
        const pieza = dia.piezas.find((x) => x.uid === el.dataset.uid);
        if (!pieza) return;
        const esGym = typeof GYM_SESIONES !== 'undefined' && GYM_SESIONES[pieza.ref];
        if (esGym && !e.target.closest('.estado')) {
          location.hash = '#/gym';
          return;
        }
        pieza.estado = pieza.estado === 'hecha' ? 'pendiente' : 'hecha';
        Motor.guardarDia(dia);
        renderHoy();
      });
    });

    cont.querySelectorAll('[data-tarea-hoy]').forEach((el) => {
      el.addEventListener('click', () => {
        const tareas = Store.leer('tareas', []);
        const t = tareas.find((x) => x.id === el.dataset.tareaHoy);
        if (t) { t.hecha = true; Store.guardar('tareas', tareas); renderHoy(); }
      });
    });

    const btnHecha = document.getElementById('btn-sugerencia-hecha');
    if (btnHecha) {
      btnHecha.addEventListener('click', () => {
        const pieza = dia.piezas.find((x) => x.uid === btnHecha.dataset.uid);
        if (pieza) {
          pieza.estado = 'hecha';
          Motor.guardarDia(dia);
          renderHoy();
        }
      });
    }
    const btnOtra = document.getElementById('btn-sugerencia-otra');
    if (btnOtra) {
      btnOtra.addEventListener('click', () => {
        salteadas.push(btnOtra.dataset.uid);
        renderHoy();
      });
    }
    const btnCierre = document.getElementById('btn-ir-cierre');
    if (btnCierre) {
      btnCierre.addEventListener('click', () => { location.hash = '#/cierre'; });
    }
  }

  function tarjetaParaAhora(dia) {
    if (dia.cerrado) {
      return '<div class="para-ahora"><p class="etiqueta">Día cerrado</p>' +
        '<h2>Listo por hoy.</h2>' +
        '<p class="porque">Lo que quedó, quedó bien. Descansá.</p></div>';
    }
    const pieza = Motor.paraAhora(dia, salteadas);
    if (!pieza) {
      return '<div class="para-ahora"><p class="etiqueta">Para ahora</p>' +
        '<h2>No queda nada pendiente.</h2>' +
        '<p class="porque">Día completo. A la noche te espera el cierre.</p></div>';
    }
    const p = Motor.plantilla(pieza.ref);
    const porque = p.porque || 'Es lo que sigue en tu día.';
    return '<div class="para-ahora">' +
      '<p class="etiqueta">Para ahora</p>' +
      '<h2>' + esc(p.titulo) + '</h2>' +
      '<p class="detalle">' + esc(p.meta) + (p.opcional ? ' · opcional' : '') + '</p>' +
      '<p class="porque">' + esc(porque) + '</p>' +
      '<div class="acciones">' +
      '<button class="btn btn-primario" id="btn-sugerencia-hecha" data-uid="' + pieza.uid + '">Hecha</button>' +
      '<button class="btn btn-secundario" id="btn-sugerencia-otra" data-uid="' + pieza.uid + '">Otra cosa</button>' +
      '</div></div>';
  }

  function htmlTareasDeHoy() {
    const tareas = Tuyo.tareasDeHoy();
    if (tareas.length === 0) return '';
    let html = '<section class="bloque"><div class="bloque-cabecera"><h3>Tuyo hoy</h3>' +
      '<span class="conteo">' + tareas.length + '</span></div>';
    tareas.forEach((t) => {
      html += '<div class="pieza" data-tarea-hoy="' + t.id + '">' +
        '<span class="estado"></span>' +
        '<div class="cuerpo"><p class="titulo">' + esc(t.texto) + '</p>' +
        '<p class="meta">Tarea tuya · tocá para marcarla</p></div></div>';
    });
    return html + '</section>';
  }

  function htmlBloque(dia, bloque) {
    const piezas = Motor.piezasDeBloque(dia, bloque);
    if (piezas.length === 0) return '';
    const hechas = piezas.filter((x) => x.estado === 'hecha').length;

    let html = '<section class="bloque"><div class="bloque-cabecera">' +
      '<h3>' + NOMBRE_BLOQUE[bloque] + '</h3>' +
      '<span class="conteo">' + hechas + '/' + piezas.length + '</span></div>';

    piezas.forEach((x) => {
      const p = Motor.plantilla(x.ref);
      const hecha = x.estado === 'hecha';
      const soltada = x.estado === 'soltada';
      html += '<div class="pieza' + (hecha ? ' hecha' : '') + (soltada ? ' soltada' : '') + '" data-uid="' + x.uid + '">' +
        '<span class="estado">' + (hecha ? iconoTilde() : '') + '</span>' +
        '<div class="cuerpo"><p class="titulo">' + esc(p.titulo) + '</p>' +
        '<p class="meta">' + esc(p.meta) + '</p></div>' +
        (p.opcional ? '<span class="tag">Opcional</span>' : '') +
        (x.deAyer ? '<span class="tag">De ayer</span>' : '') +
        '</div>';
    });

    if (bloque === 'noche') {
      if (dia.cerrado) {
        html += '<div class="cierre-card"><div class="cuerpo"><p class="titulo">Día cerrado</p>' +
          '<p class="meta">Hasta mañana.</p></div></div>';
      } else if (new Date().getHours() >= 19) {
        html += '<button class="cierre-card activo" id="btn-ir-cierre"><div class="cuerpo">' +
          '<p class="titulo">Cierre del día</p>' +
          '<p class="meta">Repaso + ánimo · 1 minuto</p></div>' + iconoFlecha() + '</button>';
      } else {
        html += '<div class="cierre-card"><div class="cuerpo"><p class="titulo">Cierre del día</p>' +
          '<p class="meta">Se abre a la noche</p></div></div>';
      }
    }
    return html + '</section>';
  }

  function iconoTilde() {
    return '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  function iconoFlecha() {
    return '<svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  }

  // ---------- CIERRE ----------
  function renderCierre() {
    const dia = Motor.obtenerDia();
    const cont = document.getElementById('cierre-contenido');

    if (dia.cerrado) {
      cont.innerHTML = '<div class="tarjeta"><h2>Día cerrado.</h2>' +
        '<p>Lo de hoy ya quedó guardado. Hasta mañana.</p></div>';
      return;
    }

    const pend = Motor.pendientes(dia);
    let html = '';

    if (pend.length === 0) {
      html += '<div class="tarjeta"><p>No quedó nada pendiente. Día completo.</p></div>';
    } else {
      html += '<div class="tarjeta vacio"><p>Quedaron ' + pend.length + ' cosas. Nada vence: decidí qué pasa con cada una.</p></div>';
      pend.forEach((x) => {
        const p = Motor.plantilla(x.ref);
        html += '<div class="pieza-cierre" data-uid="' + x.uid + '">' +
          '<p class="titulo">' + esc(p.titulo) + '</p>' +
          '<div class="acciones-cierre">' +
          '<button class="btn btn-secundario" data-accion="hecha">La hice</button>' +
          '<button class="btn btn-secundario" data-accion="manana">Mañana</button>' +
          '<button class="btn btn-secundario" data-accion="soltar">La suelto</button>' +
          '</div></div>';
      });
    }

    html += '<div class="tarjeta"><h2>¿Cómo estuvo el día?</h2>' +
      '<div class="animo-fila">' +
      [1, 2, 3, 4, 5].map((n) => '<button class="btn-animo" data-animo="' + n + '">' + n + '</button>').join('') +
      '</div></div>';

    html += '<button class="btn btn-primario" id="btn-cerrar-dia" style="width:100%;">Cerrar el día</button>';
    cont.innerHTML = html;

    cont.querySelectorAll('.pieza-cierre').forEach((fila) => {
      fila.querySelectorAll('[data-accion]').forEach((b) => {
        b.addEventListener('click', () => {
          const pieza = dia.piezas.find((x) => x.uid === fila.dataset.uid);
          if (!pieza) return;
          if (b.dataset.accion === 'hecha') pieza.estado = 'hecha';
          if (b.dataset.accion === 'soltar') pieza.estado = 'soltada';
          if (b.dataset.accion === 'manana') {
            pieza.estado = 'soltada';
            const arr = Store.leer('arrastres', []);
            if (!arr.includes(pieza.ref)) arr.push(pieza.ref);
            Store.guardar('arrastres', arr);
          }
          Motor.guardarDia(dia);
          fila.classList.add('resuelta');
          fila.querySelectorAll('button').forEach((x) => { x.disabled = true; });
        });
      });
    });

    let animoElegido = null;
    cont.querySelectorAll('.btn-animo').forEach((b) => {
      b.addEventListener('click', () => {
        animoElegido = Number(b.dataset.animo);
        cont.querySelectorAll('.btn-animo').forEach((x) => x.classList.remove('activo'));
        b.classList.add('activo');
      });
    });

    document.getElementById('btn-cerrar-dia').addEventListener('click', () => {
      dia.cerrado = true;
      dia.animo = animoElegido;
      Motor.guardarDia(dia);
      if (animoElegido !== null) {
        guardarRegistro('animo', animoElegido);
      }
      location.hash = '#/hoy';
    });
  }

  // ---------- Registro (lo usa el cierre para el ánimo) ----------
  function guardarRegistro(tipo, valor) {
    Registro.guardarRegistro(tipo, valor);
  }

  // ---------- Progreso ----------
  const ETIQUETA_TIPO = {
    peso: 'Peso', pasos: 'Pasos', animo: 'Ánimo',
    sueno: 'Sueño', marihuana: 'Marihuana', gasto: 'Gasto'
  };
  const MARIHUANA_TEXTO = { 0: 'Nada', 0.5: 'Medio', 1: 'Entero' };

  function renderProgreso() {
    const cont = document.getElementById('progreso-lista');
    const registros = Store.leer('registros', []).slice(-15).reverse();
    if (registros.length === 0) {
      cont.innerHTML = '<div class="tarjeta vacio"><p>Todavía no registraste nada. Con el (+) cargás peso, pasos, ánimo, sueño y más en un toque.</p></div>';
      return;
    }
    let html = '<div class="tarjeta">';
    registros.forEach((r) => {
      const f = new Date(r.fecha);
      const fecha = String(f.getDate()).padStart(2, '0') + '/' + String(f.getMonth() + 1).padStart(2, '0');
      let valor = String(r.valor);
      if (r.tipo === 'peso') valor += ' kg';
      if (r.tipo === 'animo') valor += ' / 5';
      if (r.tipo === 'sueno') valor += ' hs';
      if (r.tipo === 'marihuana') valor = MARIHUANA_TEXTO[r.valor] !== undefined ? MARIHUANA_TEXTO[r.valor] : valor;
      if (r.tipo === 'gasto' && r.valor && typeof r.valor === 'object') {
        valor = '$' + Number(r.valor.monto).toLocaleString('es-AR') + ' · ' + r.valor.categoria;
      }
      html += '<div class="fila-dato"><span>' + fecha + ' · ' + (ETIQUETA_TIPO[r.tipo] || r.tipo) + '</span>' +
        '<span class="valor">' + esc(valor) + '</span></div>';
    });
    html += '</div><div class="tarjeta vacio"><p>Los gráficos llegan más adelante. Por ahora, que los datos se acumulen.</p></div>';
    cont.innerHTML = html;
  }

  return { renderHoy, renderCierre, renderProgreso };
})();
