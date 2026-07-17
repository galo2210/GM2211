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

  function diasABrasil() {
    const viaje = new Date(2027, 0, 15);
    return Math.max(0, Math.ceil((viaje - Date.now()) / 86400000));
  }

  // Anillo de progreso del día (SVG, estilo anillos de actividad).
  function anilloDia(dia, size = 74) {
    const total = dia.piezas.length || 1;
    const hechas = dia.piezas.filter((x) => x.estado === 'hecha').length;
    const pct = hechas / total;
    const r = (size - 10) / 2;
    const c = 2 * Math.PI * r;
    return '<div class="anillo-zona" aria-label="' + hechas + ' de ' + total + ' piezas del día">' +
      '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="var(--superficie-2)" stroke-width="7"/>' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="var(--verde)" stroke-width="7" ' +
      'stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - pct)).toFixed(1) + '" ' +
      'transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')" style="transition: stroke-dashoffset 0.5s ease;"/>' +
      '</svg>' +
      '<span class="anillo-num">' + hechas + '/' + total + '<small>DÍA</small></span>' +
      '</div>';
  }

  // ---------- HOY ----------
  function renderHoy() {
    const dia = Motor.obtenerDia();
    const cont = document.getElementById('hoy-contenido');

    // Cuenta regresiva a Brasil en la cabecera
    const chip = document.getElementById('hoy-brasil');
    if (chip) chip.innerHTML = Iconos.get('energia', 13) + 'Brasil en ' + diasABrasil() + ' días';

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
        const esComida = typeof COMIDAS !== 'undefined' && COMIDAS[pieza.ref];
        if (esComida && !e.target.closest('.estado')) {
          Comida.abrir(pieza.ref);
          location.hash = '#/comida';
          return;
        }
        const rutinaMov = typeof PIEZA_A_RUTINA !== 'undefined' && PIEZA_A_RUTINA[pieza.ref];
        if (rutinaMov && !e.target.closest('.estado')) {
          Movilidad.abrirPlayer(rutinaMov);
          location.hash = '#/player';
          return;
        }
        const RUTA_PIEZA = { respiracion: '#/respirar', aprender: '#/aprender', foco: '#/foco' };
        if (RUTA_PIEZA[pieza.ref] && !e.target.closest('.estado')) {
          location.hash = RUTA_PIEZA[pieza.ref];
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
      return '<div class="para-ahora pc-cabeza">' +
        '<div class="ahora-top"><span class="badge">' + Iconos.get('sueno', 24) + '</span>' +
        '<div style="flex:1; min-width:0;"><p class="etiqueta">Día cerrado</p><h2>Listo por hoy.</h2></div>' + anilloDia(dia) + '</div>' +
        '<p class="porque">Lo que quedó, quedó bien. Descansá.</p></div>';
    }
    const pieza = Motor.paraAhora(dia, salteadas);
    if (!pieza) {
      return '<div class="para-ahora pc-sistema">' +
        '<div class="ahora-top"><span class="badge">' + Iconos.get('check', 24) + '</span>' +
        '<div style="flex:1; min-width:0;"><p class="etiqueta">Para ahora</p><h2>Nada pendiente.</h2></div>' + anilloDia(dia) + '</div>' +
        '<p class="porque">Día completo. A la noche te espera el cierre.</p></div>';
    }
    const p = Motor.plantilla(pieza.ref);
    const info = Iconos.dePieza(pieza.ref);
    const porque = p.porque || 'Es lo que sigue en tu día.';
    return '<div class="para-ahora pc-' + info.pilar + '">' +
      '<div class="ahora-top"><span class="badge">' + Iconos.get(info.icono, 24) + '</span>' +
      '<div style="flex:1; min-width:0;"><p class="etiqueta">Para ahora</p>' +
      '<h2>' + esc(p.titulo) + '</h2></div>' + anilloDia(dia) + '</div>' +
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
      html += '<div class="pieza pc-sistema" data-tarea-hoy="' + t.id + '">' +
        '<span class="pieza-icono">' + Iconos.get('tuyo', 20) + '</span>' +
        '<div class="cuerpo"><p class="titulo">' + esc(t.texto) + '</p>' +
        '<p class="meta">Tarea tuya · tocá para marcarla</p></div>' +
        '<span class="estado"></span></div>';
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
      const info = Iconos.dePieza(x.ref);
      html += '<div class="pieza pc-' + info.pilar + (hecha ? ' hecha' : '') + (soltada ? ' soltada' : '') + '" data-uid="' + x.uid + '">' +
        '<span class="pieza-icono">' + Iconos.get(info.icono, 20) + '</span>' +
        '<div class="cuerpo"><p class="titulo">' + esc(p.titulo) + '</p>' +
        '<p class="meta">' + esc(p.meta) + '</p></div>' +
        (p.opcional ? '<span class="tag">Opcional</span>' : '') +
        (x.deAyer ? '<span class="tag">De ayer</span>' : '') +
        '<span class="estado">' + (hecha ? Iconos.get('check', 14, 2.4) : '') + '</span>' +
        '</div>';
    });

    if (bloque === 'noche') {
      if (dia.cerrado) {
        html += '<div class="cierre-card"><div class="cuerpo"><p class="titulo">Día cerrado</p>' +
          '<p class="meta">Hasta mañana.</p></div></div>';
      } else if (new Date().getHours() >= 19) {
        html += '<button class="cierre-card activo" id="btn-ir-cierre">' +
          '<div class="cuerpo"><p class="titulo">Cierre del día</p>' +
          '<p class="meta">Repaso + ánimo · 1 minuto</p></div>' + Iconos.get('flecha', 14) + '</button>';
      } else {
        html += '<div class="cierre-card"><div class="cuerpo"><p class="titulo">Cierre del día</p>' +
          '<p class="meta">Se abre a la noche</p></div></div>';
      }
    }
    return html + '</section>';
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

    // Marihuana: solo el dato, sin juicio (§5.2)
    html += '<div class="tarjeta"><h2>¿Marihuana hoy?</h2>' +
      '<div class="animo-fila">' +
      '<button class="btn-animo" data-mari="0">Nada</button>' +
      '<button class="btn-animo" data-mari="0.5">Medio</button>' +
      '<button class="btn-animo" data-mari="1">Entero</button>' +
      '</div>' +
      '<div id="cierre-mari-como" hidden style="margin-top:10px;">' +
      '<p style="font-size:14px; color:var(--texto-2); margin:0 0 8px;">¿Y fue de disfrute o de escape? Solo para verlo, nada más.</p>' +
      '<div class="animo-fila">' +
      '<button class="btn-animo" data-mari-como="disfrute">Disfrute</button>' +
      '<button class="btn-animo" data-mari-como="escape">Escape</button>' +
      '</div></div></div>';

    html += '<div class="tarjeta"><h2>¿Cómo estuvo el día?</h2>' +
      '<div class="animo-fila">' +
      [1, 2, 3, 4, 5].map((n) => '<button class="btn-animo" data-animo="' + n + '">' + n + '</button>').join('') +
      '</div></div>';

    // Journaling: una pregunta rotativa, una línea (§5.5)
    const pregunta = PREGUNTAS_CIERRE[Aprender.indiceDeHoy() % PREGUNTAS_CIERRE.length];
    html += '<div class="tarjeta"><h2>' + esc(pregunta) + '</h2>' +
      '<p style="font-size:13px; color:var(--texto-3); margin:0 0 10px;">Una línea. Lo primero que aparezca.</p>' +
      '<input type="text" id="cierre-journal" class="campo-busqueda" placeholder="Escribí acá (opcional)">' +
      '</div>';

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
    cont.querySelectorAll('.btn-animo[data-animo]').forEach((b) => {
      b.addEventListener('click', () => {
        animoElegido = Number(b.dataset.animo);
        cont.querySelectorAll('.btn-animo[data-animo]').forEach((x) => x.classList.remove('activo'));
        b.classList.add('activo');
      });
    });

    let mariElegida = null;
    let mariComo = null;
    cont.querySelectorAll('[data-mari]').forEach((b) => {
      b.addEventListener('click', () => {
        mariElegida = Number(b.dataset.mari);
        cont.querySelectorAll('[data-mari]').forEach((x) => x.classList.remove('activo'));
        b.classList.add('activo');
        document.getElementById('cierre-mari-como').hidden = mariElegida === 0;
        if (mariElegida === 0) mariComo = null;
      });
    });
    cont.querySelectorAll('[data-mari-como]').forEach((b) => {
      b.addEventListener('click', () => {
        mariComo = b.dataset.mariComo;
        cont.querySelectorAll('[data-mari-como]').forEach((x) => x.classList.remove('activo'));
        b.classList.add('activo');
      });
    });

    document.getElementById('btn-cerrar-dia').addEventListener('click', () => {
      dia.cerrado = true;
      dia.animo = animoElegido;
      Motor.guardarDia(dia);
      if (animoElegido !== null) guardarRegistro('animo', animoElegido);
      if (mariElegida !== null) guardarRegistro('marihuana', mariComo ? { cantidad: mariElegida, como: mariComo } : mariElegida);
      const respuesta = String(document.getElementById('cierre-journal').value).trim();
      if (respuesta) {
        guardarRegistro('diario', {
          pregunta: PREGUNTAS_CIERRE[Aprender.indiceDeHoy() % PREGUNTAS_CIERRE.length],
          respuesta
        });
      }
      location.hash = '#/hoy';
    });
  }

  // ---------- Registro (lo usa el cierre para el ánimo) ----------
  function guardarRegistro(tipo, valor) {
    Registro.guardarRegistro(tipo, valor);
  }

  return { renderHoy, renderCierre };
})();
