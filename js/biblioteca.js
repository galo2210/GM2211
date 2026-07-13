// NORTE · BIBLIOTECA — hub de conocimiento y herramientas.
// Se va llenando fase a fase; el buscador único llega cuando haya volumen (F5).

const Biblioteca = (() => {

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function render() {
    const cont = document.getElementById('biblioteca-contenido');
    let html = '';

    // Herramientas
    html += '<div class="bloque-cabecera"><h3>Herramientas</h3></div>' +
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

    html += '<div class="tarjeta vacio" style="margin-top:16px;"><p>El buscador único llega en la última fase, con todo el contenido adentro.</p></div>';

    cont.innerHTML = html;

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
