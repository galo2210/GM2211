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
      indice.push({ titulo: 'Gym · ' + s.nombre, meta: s.dia, tipo: 'gym', ir: () => { Gym.abrir(ref); location.hash = '#/gym'; } });
      s.ejercicios.forEach((ej) => {
        indice.push({ titulo: ej.nombre, meta: s.nombre + ' · ' + ej.series + ' · ' + ej.nivel1, tipo: 'gym', ir: () => { Gym.abrir(ref); location.hash = '#/gym'; } });
      });
    });
    RUTINAS_MOV.forEach((r) => {
      indice.push({ titulo: r.nombre, meta: r.categoria + ' · ' + r.dur + (r.problemas.length ? ' · ' + r.problemas.join(', ') : ''), tipo: 'rutina', ir: () => { Movilidad.abrirPlayer(r.id); location.hash = '#/player'; } });
    });
    RESPIRACIONES.forEach((r) => {
      indice.push({ titulo: r.nombre, meta: r.dur + ' · ' + r.cuando, tipo: 'respirar', ir: () => { location.hash = '#/respirar'; } });
    });
    MEDITACIONES.forEach((m) => {
      indice.push({ titulo: m.nombre, meta: 'Meditación · ' + m.dur, tipo: 'respirar', ir: () => { Movilidad.abrirPlayer(m.id); location.hash = '#/player'; } });
    });
    Object.keys(COMIDAS).forEach((ref) => {
      COMIDAS[ref].recetas.forEach((rec) => {
        indice.push({ titulo: rec.nombre, meta: COMIDAS[ref].titulo + ' · ' + rec.detalle, tipo: 'receta', ir: () => { Comida.abrir(ref); location.hash = '#/comida'; } });
      });
    });
    ALIMENTOS.forEach((a) => {
      indice.push({ titulo: a.nombre, meta: a.porcion + ' · ' + a.kcal + ' kcal · ' + a.prot + 'g prot', tipo: 'alimento', ir: null });
    });
    APRENDER_PIEZAS.forEach((p) => {
      indice.push({ titulo: p.titulo, meta: 'Aprender · ' + p.pilar + ' · ' + p.min + ' min', tipo: 'aprender', ir: () => { Aprender.abrir(p.id); location.hash = '#/aprender'; } });
    });
    SUPLEMENTOS.forEach((s) => {
      indice.push({ titulo: s.nombre, meta: s.timing, tipo: 'suplemento', ir: null });
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

  function render() {
    const cont = document.getElementById('biblioteca-contenido');
    let html = '';

    // Buscador único
    html += '<input class="campo-busqueda" type="search" id="biblio-buscar" placeholder="Buscar en todo: técnica, receta, rutina, pieza...">' +
      '<div id="biblio-resultados" style="display:flex; flex-direction:column; gap:6px;"></div>';

    // Herramientas
    html += '<div class="bloque-cabecera"><h3>Herramientas</h3></div>' +
      '<button class="pieza" data-ir="plata" style="width:100%; text-align:left; font-family:inherit;">' +
      '<div class="cuerpo"><p class="titulo">Plata</p>' +
      '<p class="meta">Fondo Brasil · gastos del mes · fijos · ingresos</p></div>' +
      '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
      '</button>' +
      '<button class="pieza" data-ir="compras" style="width:100%; text-align:left; font-family:inherit;">' +
      '<div class="cuerpo"><p class="titulo">Compras</p>' +
      '<p class="meta">Listas del súper · presupuesto · precios</p></div>' +
      '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
      '</button>';

    // Movilidad, cara y casa
    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Movilidad · Cara · Casa</h3></div>' +
      '<button class="pieza" data-ir="movilidad" style="width:100%; text-align:left; font-family:inherit;">' +
      '<div class="cuerpo"><p class="titulo">Rutinas guiadas</p>' +
      '<p class="meta">' + RUTINAS_MOV.length + ' rutinas con player · buscables por problema</p></div>' +
      '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
      '</button>';

    // Respiración y meditación
    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Respiración · Meditación</h3></div>' +
      '<button class="pieza" data-ir="respirar" style="width:100%; text-align:left; font-family:inherit;">' +
      '<div class="cuerpo"><p class="titulo">Respirar</p>' +
      '<p class="meta">' + RESPIRACIONES.length + ' técnicas con timer + ' + MEDITACIONES.length + ' meditaciones guiadas</p></div>' +
      '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
      '</button>';

    // Aprender
    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Aprender</h3></div>' +
      '<button class="pieza" data-ir="aprender" style="width:100%; text-align:left; font-family:inherit;">' +
      '<div class="cuerpo"><p class="titulo">Piezas de Aprender</p>' +
      '<p class="meta">' + APRENDER_PIEZAS.length + ' piezas · una por día · el archivo siempre consultable</p></div>' +
      '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
      '</button>';

    // Gym
    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Gym · técnica</h3></div>';
    Object.keys(GYM_SESIONES).forEach((ref) => {
      const s = GYM_SESIONES[ref];
      html += '<button class="pieza" data-ir="gym" style="width:100%; text-align:left; font-family:inherit;">' +
        '<div class="cuerpo"><p class="titulo">' + esc(s.nombre) + '</p>' +
        '<p class="meta">' + esc(s.dia) + ' · ' + s.ejercicios.length + ' ejercicios con técnica completa</p></div>' +
        '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
        '</button>';
    });

    // Recetas
    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Recetas y comidas</h3></div>';
    Object.keys(COMIDAS).forEach((ref) => {
      if (ref === 'tarrito-avena') return; // duplica al desayuno
      const c = COMIDAS[ref];
      html += '<button class="pieza" data-comida="' + ref + '" style="width:100%; text-align:left; font-family:inherit;">' +
        '<div class="cuerpo"><p class="titulo">' + esc(c.titulo) + '</p>' +
        '<p class="meta">' + c.recetas.length + (c.recetas.length === 1 ? ' receta' : ' recetas') + ' con cantidades</p></div>' +
        '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
        '</button>';
    });

    // Suplementos (§4.3)
    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Suplementos</h3></div><div class="tarjeta">';
    SUPLEMENTOS.forEach((s) => {
      html += '<div class="fila-dato"><span><strong>' + esc(s.nombre) + '</strong><br><span style="font-size:13px; color:var(--texto-2);">' + esc(s.porque) + '</span></span>' +
        '<span class="valor" style="text-align:right; max-width:40%;">' + esc(s.timing) + '</span></div>';
    });
    html += '</div>';

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
        '<div class="cuerpo"><p class="titulo" style="font-size:14.5px;">' + esc(e.titulo) + '</p>' +
        '<p class="meta">' + esc(e.meta) + '</p></div>' +
        (e.ir ? '<svg class="flecha" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' : '') +
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
    cont.querySelectorAll('[data-comida]').forEach((b) => {
      b.addEventListener('click', () => {
        Comida.abrir(b.dataset.comida);
        location.hash = '#/comida';
      });
    });
  }

  return { render };
})();
