// NORTE · RESPIRACIÓN — técnicas con patrón visual y player de círculo que respira:
// crece al inhalar, se encoge al exhalar, queda quieto al retener. Las meditaciones usan el player de pasos.

const Respiracion = (() => {

  let tecnica = null;
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
      // Patrón visual: un segmento por fase, ancho proporcional a los segundos
      const patron = r.fases.map((f) =>
        '<span class="fase-seg" style="flex:' + f.seg + ';">' + f.seg + '</span>').join('');
      html += '<button class="tarjeta pc-cabeza" data-respiracion="' + r.id + '" style="width:100%; text-align:left; font-family:inherit; cursor:pointer;">' +
        '<div style="display:flex; justify-content:space-between; align-items:baseline; gap:10px;">' +
        '<p style="font-size:15.5px; font-weight:600; color:var(--texto-1); margin:0;">' + esc(r.nombre) + '</p>' +
        '<span class="dur" style="font-family:var(--mono); font-size:11.5px; font-weight:700; color:var(--cabeza); background:var(--cabeza-tenue); border-radius:999px; padding:5px 10px; white-space:nowrap;">' + esc(r.dur) + '</span></div>' +
        '<p style="font-size:13.5px; color:var(--texto-2); margin:5px 0 0; line-height:1.4;">' + esc(r.cuando) + '</p>' +
        '<div class="fase-patron">' + patron + '</div>' +
        '</button>';
    });

    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Meditaciones guiadas</h3></div>';
    MEDITACIONES.forEach((m) => {
      html += '<button class="rutina-card pc-cabeza" data-meditacion="' + m.id + '">' +
        '<span class="ic">' + Iconos.get('cabeza', 20) + '</span>' +
        '<span class="cuerpo"><span class="titulo" style="display:block;">' + esc(m.nombre) + '</span>' +
        '<span class="meta" style="display:block;">' + m.pasos.length + ' pasos guiados</span></span>' +
        '<span class="dur">' + esc(m.dur) + '</span>' +
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
    montarPlayer();
  }

  function pararTimer() {
    if (intervalo) { clearInterval(intervalo); intervalo = null; }
    corriendo = false;
  }

  // El círculo: inhalar = crecer, exhalar = encogerse, retener = quedarse.
  function aplicarFase() {
    const circulo = document.getElementById('resp-circulo');
    if (!circulo) return;
    const fase = tecnica.fases[faseIdx];
    circulo.style.transitionDuration = corriendo ? fase.seg + 's' : '0.4s';
    const n = fase.nombre.toLowerCase();
    if (n.indexOf('inhal') > -1) circulo.classList.add('grande');
    else if (n.indexOf('exhal') > -1) circulo.classList.remove('grande');
    // retener: no se toca — se queda donde está
    document.getElementById('resp-fase').textContent = fase.nombre;
    document.getElementById('resp-num').textContent = restante;
    document.getElementById('resp-ciclos').textContent = 'CICLO ' + cicloActual + ' DE ' + tecnica.ciclos;
  }

  function montarPlayer(terminada = false) {
    const cont = document.getElementById('respirar-contenido');

    if (terminada) {
      marcarPiezaRespiracion();
      cont.innerHTML = '<div class="para-ahora pc-cabeza">' +
        '<div class="ahora-top"><span class="badge">' + Iconos.get('check', 24) + '</span>' +
        '<div><p class="etiqueta">' + esc(tecnica.nombre) + '</p><h2>Hecha.</h2></div></div>' +
        '<p class="porque">' + tecnica.ciclos + ' ciclos completos. El sistema nervioso ya lo notó.</p>' +
        '<div class="acciones"><button class="btn btn-primario" id="btn-resp-volver">Volver</button></div></div>';
      document.getElementById('btn-resp-volver').addEventListener('click', renderLista);
      return;
    }

    cont.innerHTML =
      '<div class="tarjeta pc-cabeza" style="padding-bottom:22px;">' +
      '<p class="player-rutina" style="text-align:center;">' + esc(tecnica.nombre) + '</p>' +
      '<div class="resp-escena"><div class="resp-circulo" id="resp-circulo">' +
      '<div><p class="rc-fase" id="resp-fase"></p><p class="rc-num" id="resp-num"></p></div>' +
      '</div></div>' +
      '<p class="resp-ciclos" id="resp-ciclos"></p>' +
      '<p class="player-sentir" style="margin-top:16px;">' + esc(tecnica.nota) + '</p>' +
      '</div>' +
      '<div class="ej-acciones">' +
      '<button class="btn-mini" id="btn-resp-salir">Salir</button>' +
      '<button class="btn btn-primario" id="btn-resp-play" style="flex:2;">Arrancar</button>' +
      '</div>';

    aplicarFase();

    document.getElementById('btn-resp-play').addEventListener('click', () => {
      if (corriendo) {
        pararTimer();
        document.getElementById('btn-resp-play').textContent = 'Seguir';
        const c = document.getElementById('resp-circulo');
        c.style.transitionDuration = '0.4s';
      } else {
        arrancar();
        document.getElementById('btn-resp-play').textContent = 'Pausa';
      }
    });
    document.getElementById('btn-resp-salir').addEventListener('click', renderLista);
  }

  function arrancar() {
    pararTimer();
    corriendo = true;
    aplicarFase();
    intervalo = setInterval(() => {
      restante -= 1;
      if (restante <= 0) {
        faseIdx += 1;
        if (faseIdx >= tecnica.fases.length) {
          faseIdx = 0;
          cicloActual += 1;
          if (cicloActual > tecnica.ciclos) {
            pararTimer();
            montarPlayer(true);
            return;
          }
        }
        restante = tecnica.fases[faseIdx].seg;
        aplicarFase();
        return;
      }
      const num = document.getElementById('resp-num');
      if (num) num.textContent = restante;
    }, 1000);
  }

  function marcarPiezaRespiracion() {
    const dia = Motor.obtenerDia();
    const pieza = dia.piezas.find((x) => x.ref === 'respiracion' && x.estado === 'pendiente');
    if (pieza) { pieza.estado = 'hecha'; Motor.guardarDia(dia); }
  }

  return { renderLista, pararTimer, abrirTecnica };
})();
