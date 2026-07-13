// NORTE · RESPIRACIÓN — lista de técnicas con "cuándo usarla" y player de ciclos:
// fase grande + countdown + contador de ciclos. Las meditaciones usan el player de pasos.

const Respiracion = (() => {

  let tecnica = null;      // objeto de RESPIRACIONES en curso
  let faseIdx = 0;
  let cicloActual = 1;
  let restante = 0;
  let corriendo = false;
  let intervalo = null;

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function renderLista() {
    pararTimer();
    tecnica = null;
    const cont = document.getElementById('respirar-contenido');
    let html = '<div class="tarjeta vacio"><p>Tu piso diario: 5 minutos a la noche, antes del cierre. El resto, cuando las necesites.</p></div>';

    html += '<div class="bloque-cabecera" style="margin-top:8px;"><h3>Respiración · timer en vivo</h3></div>';
    RESPIRACIONES.forEach((r) => {
      html += '<button class="pieza" data-respiracion="' + r.id + '" style="width:100%; text-align:left; font-family:inherit;">' +
        '<div class="cuerpo"><p class="titulo">' + esc(r.nombre) + '</p>' +
        '<p class="meta">' + esc(r.dur) + ' · ' + esc(r.cuando) + '</p></div>' +
        '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
        '</button>';
    });

    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Meditaciones guiadas</h3></div>';
    MEDITACIONES.forEach((m) => {
      html += '<button class="pieza" data-meditacion="' + m.id + '" style="width:100%; text-align:left; font-family:inherit;">' +
        '<div class="cuerpo"><p class="titulo">' + esc(m.nombre) + '</p>' +
        '<p class="meta">' + esc(m.dur) + ' · ' + m.pasos.length + ' pasos guiados</p></div>' +
        '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
        '</button>';
    });

    cont.innerHTML = html;

    cont.querySelectorAll('[data-respiracion]').forEach((b) => {
      b.addEventListener('click', () => abrirTecnica(b.dataset.respiracion));
    });
    cont.querySelectorAll('[data-meditacion]').forEach((b) => {
      b.addEventListener('click', () => {
        Movilidad.abrirPlayer(b.dataset.meditacion);
        location.hash = '#/player';
      });
    });
  }

  function abrirTecnica(id) {
    tecnica = RESPIRACIONES.find((r) => r.id === id);
    faseIdx = 0;
    cicloActual = 1;
    restante = tecnica.fases[0].seg;
    corriendo = false;
    renderPlayer();
  }

  function pararTimer() {
    if (intervalo) { clearInterval(intervalo); intervalo = null; }
    corriendo = false;
  }

  function arrancar() {
    pararTimer();
    corriendo = true;
    intervalo = setInterval(() => {
      restante -= 1;
      if (restante <= 0) {
        faseIdx += 1;
        if (faseIdx >= tecnica.fases.length) {
          faseIdx = 0;
          cicloActual += 1;
          if (cicloActual > tecnica.ciclos) {
            pararTimer();
            renderPlayer(true);
            return;
          }
        }
        restante = tecnica.fases[faseIdx].seg;
      }
      renderPlayer();
    }, 1000);
    renderPlayer();
  }

  function marcarPiezaRespiracion() {
    const dia = Motor.obtenerDia();
    const pieza = dia.piezas.find((x) => x.ref === 'respiracion' && x.estado === 'pendiente');
    if (pieza) { pieza.estado = 'hecha'; Motor.guardarDia(dia); }
  }

  function renderPlayer(terminada = false) {
    const cont = document.getElementById('respirar-contenido');
    if (!tecnica) return;

    if (terminada) {
      marcarPiezaRespiracion();
      cont.innerHTML = '<div class="para-ahora"><p class="etiqueta">' + esc(tecnica.nombre) + '</p>' +
        '<h2>Hecha.</h2>' +
        '<p class="porque">' + tecnica.ciclos + ' ciclos completos. El sistema nervioso ya lo notó.</p>' +
        '<div class="acciones"><button class="btn btn-primario" id="btn-resp-volver">Volver</button></div></div>';
      document.getElementById('btn-resp-volver').addEventListener('click', renderLista);
      return;
    }

    const fase = tecnica.fases[faseIdx];
    let html = '<div class="tarjeta player-card">' +
      '<p class="player-rutina">' + esc(tecnica.nombre) + ' · ciclo ' + cicloActual + '/' + tecnica.ciclos + '</p>' +
      '<h2>' + esc(fase.nombre) + '</h2>' +
      '<p class="player-tiempo">' + restante + '</p>' +
      '<p class="player-sentir">' + esc(tecnica.nota) + '</p>' +
      '</div>';

    html += '<div class="ej-acciones">' +
      '<button class="btn-mini" id="btn-resp-salir">Salir</button>' +
      '<button class="btn btn-primario" id="btn-resp-play" style="flex:2;">' + (corriendo ? 'Pausa' : 'Arrancar') + '</button>' +
      '</div>';

    cont.innerHTML = html;
    document.getElementById('btn-resp-play').addEventListener('click', () => {
      if (corriendo) { pararTimer(); renderPlayer(); } else { arrancar(); }
    });
    document.getElementById('btn-resp-salir').addEventListener('click', renderLista);
  }

  return { renderLista, pararTimer, abrirTecnica };
})();
