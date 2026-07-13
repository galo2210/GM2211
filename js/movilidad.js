// NORTE · MOVILIDAD — lista de rutinas (filtrable por problema) y player guiado:
// countdown por paso, instrucción y "qué sentís". Al terminar marca la pieza del día si corresponde.

const Movilidad = (() => {

  const PROBLEMAS = ['cuello duro', 'espalda baja', 'cadera', 'hombros', 'dolor de cabeza', 'estrés'];
  const CATEGORIAS = ['Mañana', 'Pausas oficina', 'Pre-gym', 'Noche', 'Cara', 'Casa'];

  let filtroProblema = null;
  let rutinaActual = null;   // objeto de RUTINAS_MOV
  let pasoIdx = 0;
  let restante = 0;
  let corriendo = false;
  let intervalo = null;

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  // ---------- Lista ----------
  function renderLista() {
    const cont = document.getElementById('movilidad-contenido');
    let html = '';

    html += '<div class="chips">';
    PROBLEMAS.forEach((p) => {
      html += '<button class="chip' + (filtroProblema === p ? ' activo' : '') + '" data-problema="' + p + '">' + esc(p) + '</button>';
    });
    html += '</div>';

    const visibles = filtroProblema
      ? RUTINAS_MOV.filter((r) => r.problemas.includes(filtroProblema))
      : RUTINAS_MOV;

    CATEGORIAS.forEach((cat) => {
      const rutinas = visibles.filter((r) => r.categoria === cat);
      if (rutinas.length === 0) return;
      html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>' + cat + '</h3></div>';
      rutinas.forEach((r) => {
        html += '<button class="pieza" data-rutina="' + r.id + '" style="width:100%; text-align:left; font-family:inherit;">' +
          '<div class="cuerpo"><p class="titulo">' + esc(r.nombre) + '</p>' +
          '<p class="meta">' + esc(r.dur) + ' · ' + r.pasos.length + ' pasos guiados</p></div>' +
          '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
          '</button>';
      });
    });

    cont.innerHTML = html;

    cont.querySelectorAll('[data-problema]').forEach((b) => {
      b.addEventListener('click', () => {
        filtroProblema = filtroProblema === b.dataset.problema ? null : b.dataset.problema;
        renderLista();
      });
    });
    cont.querySelectorAll('[data-rutina]').forEach((b) => {
      b.addEventListener('click', () => {
        abrirPlayer(b.dataset.rutina);
        location.hash = '#/player';
      });
    });
  }

  // ---------- Player (también reproduce las meditaciones de §5.4) ----------
  function abrirPlayer(rutinaId) {
    pararTimer();
    const meditaciones = typeof MEDITACIONES !== 'undefined' ? MEDITACIONES : [];
    rutinaActual = RUTINAS_MOV.find((r) => r.id === rutinaId) ||
      meditaciones.find((r) => r.id === rutinaId) || RUTINAS_MOV[0];
    pasoIdx = 0;
    restante = rutinaActual.pasos[0].seg;
    corriendo = false;
  }

  function pararTimer() {
    if (intervalo) { clearInterval(intervalo); intervalo = null; }
    corriendo = false;
  }

  function arrancarTimer() {
    pararTimer();
    corriendo = true;
    intervalo = setInterval(() => {
      restante -= 1;
      if (restante <= 0) {
        if (pasoIdx < rutinaActual.pasos.length - 1) {
          pasoIdx += 1;
          restante = rutinaActual.pasos[pasoIdx].seg;
        } else {
          pararTimer();
          renderPlayer(true);
          return;
        }
      }
      pintarTiempo();
    }, 1000);
    renderPlayer();
  }

  function pintarTiempo() {
    const el = document.getElementById('player-tiempo');
    if (!el) return;
    const m = Math.floor(restante / 60);
    const s = String(restante % 60).padStart(2, '0');
    el.textContent = m + ':' + s;
    const paso = document.getElementById('player-paso-nombre');
    const p = rutinaActual.pasos[pasoIdx];
    if (paso && paso.dataset.idx !== String(pasoIdx)) renderPlayer();
  }

  function renderPlayer(terminada = false) {
    const cont = document.getElementById('player-contenido');
    if (!rutinaActual) { abrirPlayer(RUTINAS_MOV[0].id); }
    const r = rutinaActual;

    if (terminada) {
      marcarPiezaDelDia(r.id);
      cont.innerHTML = '<div class="para-ahora"><p class="etiqueta">' + esc(r.nombre) + '</p>' +
        '<h2>Hecha.</h2>' +
        '<p class="porque">' + r.pasos.length + ' pasos, ' + esc(r.dur) + '. El cuerpo lo registra aunque no se note hoy.</p>' +
        '<div class="acciones"><button class="btn btn-primario" id="btn-player-volver">Volver</button></div></div>';
      document.getElementById('btn-player-volver').addEventListener('click', () => { location.hash = '#/hoy'; });
      return;
    }

    const paso = r.pasos[pasoIdx];
    const m = Math.floor(restante / 60);
    const s = String(restante % 60).padStart(2, '0');

    let html = '<div class="tarjeta player-card">' +
      '<p class="player-rutina">' + esc(r.nombre) + ' · paso ' + (pasoIdx + 1) + '/' + r.pasos.length + '</p>' +
      '<h2 id="player-paso-nombre" data-idx="' + pasoIdx + '">' + esc(paso.nombre) + '</h2>' +
      '<p class="player-tiempo" id="player-tiempo">' + m + ':' + s + '</p>' +
      '<p class="player-instruccion">' + esc(paso.instruccion) + '</p>' +
      '<p class="player-sentir"><strong>Qué sentís:</strong> ' + esc(paso.sentir) + '</p>' +
      '</div>';

    html += '<div class="ej-acciones">' +
      '<button class="btn-mini" id="btn-player-antes"' + (pasoIdx === 0 ? ' disabled' : '') + '>&#8249; Anterior</button>' +
      '<button class="btn btn-primario" id="btn-player-play" style="flex:2;">' + (corriendo ? 'Pausa' : (pasoIdx === 0 && restante === paso.seg ? 'Arrancar' : 'Seguir')) + '</button>' +
      '<button class="btn-mini" id="btn-player-siguiente">Saltar &#8250;</button>' +
      '</div>';

    cont.innerHTML = html;

    document.getElementById('btn-player-play').addEventListener('click', () => {
      if (corriendo) { pararTimer(); renderPlayer(); } else { arrancarTimer(); }
    });
    document.getElementById('btn-player-antes').addEventListener('click', () => {
      if (pasoIdx > 0) { pasoIdx -= 1; restante = r.pasos[pasoIdx].seg; renderPlayer(); if (corriendo) arrancarTimer(); }
    });
    document.getElementById('btn-player-siguiente').addEventListener('click', () => {
      if (pasoIdx < r.pasos.length - 1) {
        pasoIdx += 1; restante = r.pasos[pasoIdx].seg; renderPlayer(); if (corriendo) arrancarTimer();
      } else {
        pararTimer(); renderPlayer(true);
      }
    });
  }

  // Si la rutina corresponde a una pieza de hoy, la marca hecha.
  function marcarPiezaDelDia(rutinaId) {
    let ref = Object.keys(PIEZA_A_RUTINA).find((k) => PIEZA_A_RUTINA[k] === rutinaId);
    // Una meditación completa cuenta como la pieza de respiración nocturna.
    if (!ref && typeof MEDITACIONES !== 'undefined' && MEDITACIONES.some((m) => m.id === rutinaId)) {
      ref = 'respiracion';
    }
    if (!ref) return;
    const dia = Motor.obtenerDia();
    const pieza = dia.piezas.find((x) => x.ref === ref && x.estado === 'pendiente');
    if (pieza) { pieza.estado = 'hecha'; Motor.guardarDia(dia); }
  }

  return { renderLista, renderPlayer, abrirPlayer, pararTimer };
})();
