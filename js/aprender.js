// NORTE · APRENDER — la pieza del día (rotación lineal por fecha) + archivo completo.
// 15 min diarios: esta lectura corta (2-4 min) + el resto libre.

const Aprender = (() => {

  const EPOCA = new Date(2026, 6, 12); // arranque de la rotación (12 jul 2026, local)

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function indiceDeHoy() {
    const dias = Math.floor((Date.now() - EPOCA.getTime()) / 86400000);
    return ((dias % APRENDER_PIEZAS.length) + APRENDER_PIEZAS.length) % APRENDER_PIEZAS.length;
  }

  let piezaAbierta = null; // null = la de hoy

  function abrir(id) { piezaAbierta = id; }

  function pilarClase(pilar) {
    const m = { 'Cuerpo': 'cuerpo', 'Cabeza': 'cabeza', 'Plata': 'plata', 'Sistema': 'sistema' };
    return m[pilar] || 'sistema';
  }

  function render() {
    const cont = document.getElementById('aprender-contenido');
    const deHoy = APRENDER_PIEZAS[indiceDeHoy()];
    const pieza = piezaAbierta
      ? APRENDER_PIEZAS.find((p) => p.id === piezaAbierta) || deHoy
      : deHoy;
    const esLaDeHoy = pieza.id === deHoy.id;

    const pc = 'pc-' + pilarClase(pieza.pilar);
    const extra = typeof APRENDER_EXTRA !== 'undefined' ? APRENDER_EXTRA[pieza.id] : null;
    let html = '<div class="tarjeta lectura ' + pc + '">' +
      '<span class="kicker">' + Iconos.get('aprender', 14) + (esLaDeHoy ? 'La de hoy' : 'Del archivo') + ' · ' + esc(pieza.pilar) + ' · ' + pieza.min + ' min</span>' +
      '<h2>' + esc(pieza.titulo) + '</h2>' +
      pieza.cuerpo.map((p) => '<p>' + esc(p) + '</p>').join('') +
      '</div>';

    // La idea + Hoy probá: leer no es aprender; esto sí.
    if (extra) {
      html += '<div class="ap-clave ' + pc + '">' +
        '<span class="ic">' + Iconos.get('foco', 18) + '</span>' +
        '<div><h4>La idea</h4><p>' + esc(extra.clave) + '</p></div></div>';
      html += '<div class="ap-accion ' + pc + '">' +
        '<span class="ic">' + Iconos.get('energia', 18) + '</span>' +
        '<div><h4>Hoy probá</h4><p>' + esc(extra.accion) + '</p></div></div>';
    }

    if (esLaDeHoy) {
      html += '<button class="btn btn-primario" id="btn-aprender-listo" style="width:100%;">Leída — arranca tu cuarto de hora</button>' +
        '<div class="tarjeta vacio"><p>Los ~12 minutos que quedan son libres: libro, curso o negocio. La app solo pregunta si se hizo.</p></div>';
    } else {
      html += '<button class="btn btn-secundario" id="btn-aprender-hoy" style="width:100%;">Ver la de hoy</button>';
    }

    // Archivo agrupado por pilar
    const ICONO_PILAR = { 'Cuerpo': 'cuerpo', 'Cabeza': 'cabeza', 'Plata': 'plata', 'Sistema': 'sistema' };
    ['Cuerpo', 'Cabeza', 'Plata', 'Sistema'].forEach((pilar) => {
      const delPilar = APRENDER_PIEZAS.filter((p) => p.pilar === pilar);
      if (delPilar.length === 0) return;
      html += '<div class="pilar-cabecera pc-' + pilarClase(pilar) + '" style="margin-top:22px;">' +
        '<span class="ic">' + Iconos.get(ICONO_PILAR[pilar], 18) + '</span>' +
        '<div><h3>' + pilar + '</h3><p class="sub">' + delPilar.length + ' piezas</p></div></div>';
      delPilar.forEach((p) => {
        const extra2 = typeof APRENDER_EXTRA !== 'undefined' ? APRENDER_EXTRA[p.id] : null;
        html += '<button class="rutina-card pc-' + pilarClase(p.pilar) + '" data-pieza="' + p.id + '" style="margin-bottom:8px;">' +
          '<span class="ic">' + Iconos.get('aprender', 20) + '</span>' +
          '<span class="cuerpo"><span class="titulo" style="display:block; font-size:14.5px;">' + esc(p.titulo) + '</span>' +
          '<span class="meta" style="display:block; white-space:normal;">' + (extra2 ? esc(extra2.clave) : p.min + ' min') + '</span></span>' +
          (p.id === deHoy.id ? '<span class="dur">HOY</span>' : '') +
          '</button>';
      });
    });

    cont.innerHTML = html;

    const btnListo = document.getElementById('btn-aprender-listo');
    if (btnListo) {
      btnListo.addEventListener('click', () => {
        const dia = Motor.obtenerDia();
        const pz = dia.piezas.find((x) => x.ref === 'aprender' && x.estado === 'pendiente');
        if (pz) { pz.estado = 'hecha'; Motor.guardarDia(dia); }
        location.hash = '#/hoy';
      });
    }
    const btnHoy = document.getElementById('btn-aprender-hoy');
    if (btnHoy) {
      btnHoy.addEventListener('click', () => { piezaAbierta = null; render(); });
    }
    cont.querySelectorAll('[data-pieza]').forEach((b) => {
      b.addEventListener('click', () => { piezaAbierta = b.dataset.pieza; render(); window.scrollTo(0, 0); });
    });
  }

  return { render, abrir, indiceDeHoy };
})();
