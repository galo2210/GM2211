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

  // Un tile del hub.
  function tile(pilar, icono, titulo, sub, destino, ancho) {
    return '<button class="tile pc-' + pilar + (ancho ? ' ancho' : '') + '" data-ir="' + destino + '">' +
      '<span class="ic">' + Iconos.get(icono, 22) + '</span>' +
      '<span class="tile-txt"><span class="t-titulo">' + esc(titulo) + '</span>' +
      '<span class="t-sub">' + esc(sub) + '</span></span>' +
      '</button>';
  }

  function grupo(pilar, icono, nombre, sub, tilesHtml) {
    return '<section class="pilar-grupo pc-' + pilar + '">' +
      '<div class="pilar-cabecera"><span class="ic">' + Iconos.get(icono, 20) + '</span>' +
      '<div><h3>' + nombre + '</h3><p class="sub">' + sub + '</p></div></div>' +
      '<div class="tiles">' + tilesHtml + '</div></section>';
  }

  function render() {
    const cont = document.getElementById('biblioteca-contenido');
    const totalGym = Object.keys(GYM_SESIONES).length;
    let html = '';

    // Buscador único
    html += '<input class="campo-busqueda" type="search" id="biblio-buscar" placeholder="Buscar en todo: ejercicio, receta, rutina...">' +
      '<div id="biblio-resultados" style="display:flex; flex-direction:column; gap:6px;"></div>';

    // CUERPO
    html += grupo('cuerpo', 'cuerpo', 'Cuerpo', 'Entrenar, comer, moverse',
      tile('cuerpo', 'gym', 'Gym', totalGym + ' sesiones con técnica', 'gym') +
      tile('cuerpo', 'comida', 'Comida', 'Recetas con cantidades', 'comida') +
      tile('cuerpo', 'movilidad', 'Movilidad', RUTINAS_MOV.length + ' rutinas guiadas', 'movilidad') +
      tile('cuerpo', 'compras', 'Compras', 'Listas y presupuesto', 'compras'));

    // Suplementos como tarjeta de referencia dentro de Cuerpo
    html += '<div class="tarjeta pc-cuerpo" style="margin-top:10px;"><h2>Suplementos</h2>';
    SUPLEMENTOS.forEach((s) => {
      html += '<div class="fila-dato"><span style="max-width:56%;"><strong>' + esc(s.nombre) + '</strong><br>' +
        '<span style="font-size:12.5px; color:var(--texto-3);">' + esc(s.porque) + '</span></span>' +
        '<span class="valor" style="max-width:42%; color:var(--cuerpo);">' + esc(s.timing) + '</span></div>';
    });
    html += '</div>';

    // CABEZA
    html += grupo('cabeza', 'cabeza', 'Cabeza', 'Foco, calma, aprender',
      tile('cabeza', 'respirar', 'Respirar', RESPIRACIONES.length + ' técnicas + ' + MEDITACIONES.length + ' meditaciones', 'respirar') +
      tile('cabeza', 'aprender', 'Aprender', APRENDER_PIEZAS.length + ' piezas · 1 por día', 'aprender') +
      tile('cabeza', 'foco', 'Foco', 'Bloque de una sola cosa', 'foco'));

    // PLATA
    html += grupo('plata', 'plata', 'Plata', 'Fondo Brasil y gastos',
      tile('plata', 'plata', 'Plata', 'Fondo Brasil · gastos · fijos · ingresos', 'plata', true));

    // SISTEMA
    html += grupo('sistema', 'sistema', 'Sistema', 'Tu rutina y tus datos',
      tile('sistema', 'rutina', 'Mi rutina', 'Prender, apagar, crear', 'rutina') +
      tile('sistema', 'ajustes', 'Ajustes', 'Datos, backup, versión', 'ajustes'));

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

  return { render };
})();
