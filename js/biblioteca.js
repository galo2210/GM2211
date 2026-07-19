// NORTE · BIBLIOTECA — hub de conocimiento y herramientas.
// Se va llenando fase a fase; el buscador único llega cuando haya volumen (F5).

const Biblioteca = (() => {

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  // ---------- Buscador único: indexa TODO el contenido ----------
  function armarIndice() {
    const indice = [];
    Object.keys(GYM_SESIONES).forEach((ref) => {
      const s = GYM_SESIONES[ref];
      indice.push({ titulo: 'Gym · ' + s.nombre, meta: s.dia, icono: 'gym', pilar: 'cuerpo', ir: () => { Gym.abrir(ref); location.hash = '#/gym'; } });
      s.ejercicios.forEach((ej) => {
        indice.push({ titulo: ej.nombre, meta: s.nombre + ' · ' + ej.series + ' · ' + ej.nivel1, icono: 'gym', pilar: 'cuerpo', ir: () => { Gym.abrir(ref); location.hash = '#/gym'; } });
      });
    });
    RUTINAS_MOV.forEach((r) => {
      indice.push({ titulo: r.nombre, meta: r.categoria + ' · ' + r.dur + (r.problemas.length ? ' · ' + r.problemas.join(', ') : ''), icono: 'movilidad', pilar: 'cuerpo', ir: () => { Movilidad.abrirPlayer(r.id); location.hash = '#/player'; } });
    });
    RESPIRACIONES.forEach((r) => {
      indice.push({ titulo: r.nombre, meta: r.dur + ' · ' + r.cuando, icono: 'respirar', pilar: 'cabeza', ir: () => { location.hash = '#/respirar'; } });
    });
    MEDITACIONES.forEach((m) => {
      indice.push({ titulo: m.nombre, meta: 'Meditación · ' + m.dur, icono: 'respirar', pilar: 'cabeza', ir: () => { Movilidad.abrirPlayer(m.id); location.hash = '#/player'; } });
    });
    Object.keys(COMIDAS).forEach((ref) => {
      COMIDAS[ref].recetas.forEach((rec) => {
        indice.push({ titulo: rec.nombre, meta: COMIDAS[ref].titulo + ' · ' + rec.detalle, icono: 'comida', pilar: 'cuerpo', ir: () => { Comida.abrir(ref); location.hash = '#/comida'; } });
      });
    });
    ALIMENTOS.forEach((a) => {
      indice.push({ titulo: a.nombre, meta: a.porcion + ' · ' + a.kcal + ' kcal · ' + a.prot + 'g prot', icono: 'comida', pilar: 'cuerpo', ir: null });
    });
    APRENDER_PIEZAS.forEach((p) => {
      indice.push({ titulo: p.titulo, meta: 'Aprender · ' + p.pilar + ' · ' + p.min + ' min', icono: 'aprender', pilar: 'cabeza', ir: () => { Aprender.abrir(p.id); location.hash = '#/aprender'; } });
    });
    SUPLEMENTOS.forEach((s) => {
      indice.push({ titulo: s.nombre, meta: s.timing, icono: 'suplementos', pilar: 'cuerpo', ir: null });
    });
    return indice;
  }

  let indiceCache = null;

  function buscar(texto) {
    if (!indiceCache) indiceCache = armarIndice();
    const t = texto.trim().toLowerCase();
    if (t.length < 2) return [];
    return indiceCache.filter((e) =>
      e.titulo.toLowerCase().includes(t) || e.meta.toLowerCase().includes(t)
    ).slice(0, 12);
  }

  // Un tile del hub: número grande + título + detalle único.
  function tile(pilar, icono, titulo, dato, sub, destino, ancho) {
    return '<button class="tile pc-' + pilar + (ancho ? ' ancho' : '') + '" data-ir="' + destino + '">' +
      '<span class="ic">' + Iconos.get(icono, 22) + '</span>' +
      '<span class="tile-txt">' +
      '<span class="t-titulo">' + esc(titulo) + (dato ? ' <span class="t-dato">' + esc(dato) + '</span>' : '') + '</span>' +
      '<span class="t-sub">' + esc(sub) + '</span></span>' +
      '</button>';
  }

  function zona(num, nombre, sub, tilesHtml) {
    return '<section class="zona">' +
      '<div class="zona-cabecera"><span class="zona-num">' + num + '</span>' +
      '<div><h3>' + nombre + '</h3><p class="sub">' + sub + '</p></div></div>' +
      '<div class="tiles">' + tilesHtml + '</div></section>';
  }

  function render() {
    const cont = document.getElementById('biblioteca-contenido');
    const totalGym = Object.keys(GYM_SESIONES).reduce((s, ref) => s + GYM_SESIONES[ref].ejercicios.length, 0);
    const totalRecetas = Object.keys(COMIDAS).reduce((s, ref) => s + COMIDAS[ref].recetas.length, 0);
    let html = '';

    // Buscador único
    html += '<input class="campo-busqueda" type="search" id="biblio-buscar" placeholder="Buscar en todo: ejercicio, receta, rutina...">' +
      '<div id="biblio-resultados" style="display:flex; flex-direction:column; gap:6px;"></div>';

    // 01 · TU PLAN — el conocimiento, para consultar
    html += zona('01', 'Tu plan', 'El conocimiento de tus 4 pilares, para consultar cuando quieras',
      tile('cuerpo', 'gym', 'Gym', totalGym, 'Ejercicios con técnica completa: montaje, pasos, errores y dudas', 'gym') +
      tile('cuerpo', 'comida', 'Comida', totalRecetas, 'Recetas con tiempos, tips de cocina y sustituciones', 'comida') +
      tile('cuerpo', 'movilidad', 'Movilidad', RUTINAS_MOV.length, 'Rutinas guiadas por momento del día y por problema', 'movilidad') +
      tile('cabeza', 'respirar', 'Respirar', RESPIRACIONES.length + MEDITACIONES.length, 'Técnicas con timer en vivo y meditaciones guiadas', 'respirar') +
      tile('cabeza', 'aprender', 'Aprender', APRENDER_PIEZAS.length, 'Una pieza por día, con su idea y su acción', 'aprender') +
      tile('cuerpo', 'suplementos', 'Suplementos', SUPLEMENTOS.length, 'Los tuyos, con timing exacto y porqué', 'suplementos'));

    // 02 · HERRAMIENTAS — lo que se usa, no se lee
    html += zona('02', 'Herramientas', 'Lo que se opera: plata, compras y foco',
      tile('plata', 'plata', 'Plata', null, 'Fondo Brasil con barra, gastos del mes, fijos e ingresos', 'plata') +
      tile('plata', 'compras', 'Compras', null, 'Listas que se arman desde recetas, con presupuesto', 'compras') +
      tile('cabeza', 'foco', 'Foco', null, 'El timer de una sola cosa: 25, 35 o 50 minutos', 'foco', true));

    // 03 · TU SISTEMA — configuración y datos
    html += zona('03', 'Tu sistema', 'La máquina por dentro: editala a tu medida',
      tile('sistema', 'rutina', 'Mi rutina', null, 'Prender, apagar y crear las piezas de tu día', 'rutina') +
      tile('sistema', 'ajustes', 'Ajustes', null, 'Apariencia, el (+), backup y versión', 'ajustes'));

    cont.innerHTML = html;

    // Buscador
    const inputBuscar = document.getElementById('biblio-buscar');
    const resultados = document.getElementById('biblio-resultados');
    let resultadosActuales = [];
    inputBuscar.addEventListener('input', () => {
      resultadosActuales = buscar(inputBuscar.value);
      if (inputBuscar.value.trim().length >= 2 && resultadosActuales.length === 0) {
        resultados.innerHTML = '<div class="tarjeta vacio"><p>Nada con ese nombre. Probá otra palabra.</p></div>';
        return;
      }
      resultados.innerHTML = resultadosActuales.map((e, i) =>
        '<button class="pieza" data-resultado="' + i + '" style="width:100%; text-align:left; font-family:inherit;' + (e.ir ? '' : ' cursor:default;') + '">' +
        '<span class="pieza-icono pc-' + (e.pilar || 'sistema') + '">' + Iconos.get(e.icono || 'punto', 20) + '</span>' +
        '<span class="cuerpo"><span class="titulo" style="font-size:14.5px; display:block;">' + esc(e.titulo) + '</span>' +
        '<span class="meta" style="display:block;">' + esc(e.meta) + '</span></span>' +
        (e.ir ? '<span class="estado" style="border:none; color:var(--texto-3);">' + Iconos.get('flecha', 13) + '</span>' : '') +
        '</button>').join('');
      resultados.querySelectorAll('[data-resultado]').forEach((b) => {
        b.addEventListener('click', () => {
          const e = resultadosActuales[Number(b.dataset.resultado)];
          if (e && e.ir) e.ir();
        });
      });
    });

    cont.querySelectorAll('[data-ir]').forEach((b) => {
      b.addEventListener('click', () => { location.hash = '#/' + b.dataset.ir; });
    });
  }

  // Pantalla propia de Suplementos: una tarjeta por suplemento.
  function renderSuplementos() {
    const cont = document.getElementById('suplementos-contenido');
    let html = '<div class="tarjeta vacio"><p>Tus 6, con su momento exacto. La creatina y el magnesio ya viven en tu rutina diaria; el resto es referencia.</p></div>';
    SUPLEMENTOS.forEach((s) => {
      html += '<div class="tarjeta pc-cuerpo" style="display:flex; gap:13px; align-items:flex-start;">' +
        '<span style="flex:none; width:40px; height:40px; border-radius:12px; display:grid; place-items:center; color:var(--cuerpo); background:var(--cuerpo-tenue);">' + Iconos.get('suplementos', 20) + '</span>' +
        '<div style="flex:1;"><p style="font-size:15.5px; font-weight:600; margin:0;">' + esc(s.nombre) + '</p>' +
        '<span class="macro-chip" style="display:inline-block; margin:6px 0 8px;">' + esc(s.timing) + '</span>' +
        '<p style="font-size:14px; color:var(--texto-2); line-height:1.5; margin:0;">' + esc(s.porque) + '</p></div>' +
        '</div>';
    });
    cont.innerHTML = html;
  }

  return { render, renderSuplementos };
})();
