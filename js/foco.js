// NORTE · FOCO — un bloque por día: una sola cosa, celular lejos, 25-50 min.

const Foco = (() => {

  let duracion = 25 * 60;
  let restante = 0;
  let corriendo = false;
  let intervalo = null;

  function pararTimer() {
    if (intervalo) { clearInterval(intervalo); intervalo = null; }
    corriendo = false;
  }

  function marcarPieza() {
    const dia = Motor.obtenerDia();
    const pz = dia.piezas.find((x) => x.ref === 'foco' && x.estado === 'pendiente');
    if (pz) { pz.estado = 'hecha'; Motor.guardarDia(dia); }
  }

  function render(terminado = false) {
    const cont = document.getElementById('foco-contenido');

    if (terminado) {
      marcarPieza();
      cont.innerHTML = '<div class="para-ahora"><p class="etiqueta">Bloque de foco</p>' +
        '<h2>Hecho.</h2>' +
        '<p class="porque">Un bloque de verdad vale más que una tarde dispersa. Registrado.</p>' +
        '<div class="acciones"><button class="btn btn-primario" id="btn-foco-volver">Volver</button></div></div>';
      document.getElementById('btn-foco-volver').addEventListener('click', () => { location.hash = '#/hoy'; });
      return;
    }

    const enCurso = restante > 0;
    const m = Math.floor((enCurso ? restante : duracion) / 60);
    const s = String((enCurso ? restante : duracion) % 60).padStart(2, '0');

    let html = '<div class="tarjeta player-card">' +
      '<p class="player-rutina">Bloque de foco · una sola cosa</p>' +
      '<p class="player-tiempo">' + m + ':' + s + '</p>' +
      '<p class="player-instruccion">Elegí UNA cosa antes de arrancar. Celular en otra habitación — no en silencio: en otra habitación.</p>' +
      '</div>';

    if (!enCurso) {
      html += '<div class="animo-fila">' +
        [25, 35, 50].map((min) =>
          '<button class="btn-animo' + (duracion === min * 60 ? ' activo' : '') + '" data-min="' + min + '">' + min + "'" + '</button>').join('') +
        '</div>';
    }

    html += '<div class="ej-acciones" style="margin-top:12px;">' +
      (enCurso ? '<button class="btn-mini" id="btn-foco-terminar">Terminar antes</button>' : '') +
      '<button class="btn btn-primario" id="btn-foco-play" style="flex:2;">' + (corriendo ? 'Pausa' : (enCurso ? 'Seguir' : 'Arrancar')) + '</button>' +
      '</div>';

    cont.innerHTML = html;

    cont.querySelectorAll('[data-min]').forEach((b) => {
      b.addEventListener('click', () => { duracion = Number(b.dataset.min) * 60; render(); });
    });

    document.getElementById('btn-foco-play').addEventListener('click', () => {
      if (corriendo) { pararTimer(); render(); return; }
      if (restante <= 0) restante = duracion;
      corriendo = true;
      intervalo = setInterval(() => {
        restante -= 1;
        const el = document.getElementById('foco-contenido').querySelector('.player-tiempo');
        if (el) {
          el.textContent = Math.floor(restante / 60) + ':' + String(restante % 60).padStart(2, '0');
        }
        if (restante <= 0) { pararTimer(); render(true); }
      }, 1000);
      render();
    });

    const btnTerminar = document.getElementById('btn-foco-terminar');
    if (btnTerminar) {
      btnTerminar.addEventListener('click', () => {
        pararTimer();
        restante = 0;
        render(true);
      });
    }
  }

  return { render, pararTimer };
})();
