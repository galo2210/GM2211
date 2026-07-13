// NORTE · pantalla COMIDA — receta con ingredientes, pasos y porqué.
// Se abre tocando una pieza de comida en HOY.

const Comida = (() => {

  let refAbierta = 'cena';
  let recetaIdx = 0;

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function abrir(ref) {
    refAbierta = COMIDAS[ref] ? ref : 'cena';
    recetaIdx = 0;
  }

  function render() {
    const cont = document.getElementById('comida-contenido');
    const comida = COMIDAS[refAbierta];
    if (recetaIdx >= comida.recetas.length) recetaIdx = 0;
    const receta = comida.recetas[recetaIdx];
    let html = '';

    if (comida.recetas.length > 1) {
      html += '<div class="chips">';
      comida.recetas.forEach((r, i) => {
        html += '<button class="chip' + (i === recetaIdx ? ' activo' : '') + '" data-receta="' + i + '">' +
          esc(r.nombre.split(' ').slice(0, 2).join(' ')) + '</button>';
      });
      html += '</div>';
      if (comida.nota) html += '<div class="tarjeta vacio"><p>' + esc(comida.nota) + '</p></div>';
    }

    html += '<div class="tarjeta">' +
      '<h2>' + esc(receta.nombre) + '</h2>' +
      '<p class="mono" style="margin-bottom:12px;">' + esc(receta.detalle) + '</p>' +
      '<p style="margin-bottom:6px;"><strong>Ingredientes</strong></p>' +
      '<ul class="lista-receta">' + receta.ingredientes.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul>' +
      '<p style="margin:12px 0 6px;"><strong>Cómo</strong></p>' +
      '<ol class="lista-receta">' + receta.pasos.map((p) => '<li>' + esc(p) + '</li>').join('') + '</ol>' +
      '</div>' +
      '<div class="tarjeta vacio"><p><strong>Por qué está en tu plan.</strong> ' + esc(receta.porque) + '</p></div>';

    cont.innerHTML = html;
    cont.querySelectorAll('[data-receta]').forEach((b) => {
      b.addEventListener('click', () => { recetaIdx = Number(b.dataset.receta); render(); });
    });

    document.getElementById('comida-titulo').textContent = comida.titulo;
  }

  return { abrir, render };
})();
