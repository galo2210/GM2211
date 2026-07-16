// NORTE · pantalla COMIDA — receta con macros en chips, ingredientes tildables
// (para cocinar sin perderse) y pasos numerados.

const Comida = (() => {

  let refAbierta = 'cena';
  let recetaIdx = 0;
  let tildados = {};   // ingredientes marcados en esta sesión de cocina

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function abrir(ref) {
    refAbierta = COMIDAS[ref] ? ref : 'cena';
    recetaIdx = 0;
    tildados = {};
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

    // Cabecera de la receta con macros en chips
    html += '<div class="tarjeta pc-cuerpo" style="position:relative; overflow:hidden;">' +
      '<div style="position:absolute; top:0; left:0; right:0; height:4px; background:var(--cuerpo);"></div>' +
      '<div style="display:flex; align-items:center; gap:12px; margin-bottom:4px;">' +
      '<span style="flex:none; width:44px; height:44px; border-radius:13px; display:grid; place-items:center; color:var(--cuerpo); background:var(--cuerpo-tenue);">' + Iconos.get('comida', 22) + '</span>' +
      '<h2 style="margin:0;">' + esc(receta.nombre) + '</h2></div>' +
      '<div class="receta-macros">' +
      receta.detalle.split('·').map((d) => '<span class="macro-chip">' + esc(d.trim()) + '</span>').join('') +
      '</div>' +

      // Ingredientes tildables
      '<p style="font-family:var(--mono); font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--texto-3); margin:6px 0 2px;">Ingredientes · tocá al ir usando</p>' +
      receta.ingredientes.map((ing, i) =>
        '<div class="ing-fila' + (tildados[recetaIdx + '-' + i] ? ' tengo' : '') + '" data-ing="' + i + '">' +
        '<span class="ing-check">' + Iconos.get('check', 13, 2.6) + '</span>' +
        '<span>' + esc(ing) + '</span></div>').join('') +
      '</div>';

    // Pasos numerados
    html += '<div class="tarjeta">' +
      '<p style="font-family:var(--mono); font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--texto-3); margin:0 0 14px;">Cómo se hace</p>' +
      receta.pasos.map((p, i) =>
        '<div class="paso-fila"><span class="paso-num">' + (i + 1) + '</span><p>' + esc(p) + '</p></div>').join('') +
      '</div>';

    // Por qué
    html += '<div class="tec-seccion suave" style="padding:0 4px;">' +
      '<span class="tec-ic">' + Iconos.get('aprender', 15) + '</span>' +
      '<div class="tec-txt"><h4>Por qué está en tu plan</h4><p>' + esc(receta.porque) + '</p></div></div>';

    cont.innerHTML = html;

    cont.querySelectorAll('[data-receta]').forEach((b) => {
      b.addEventListener('click', () => { recetaIdx = Number(b.dataset.receta); tildados = {}; render(); });
    });
    cont.querySelectorAll('[data-ing]').forEach((fila) => {
      fila.addEventListener('click', () => {
        const clave = recetaIdx + '-' + fila.dataset.ing;
        tildados[clave] = !tildados[clave];
        fila.classList.toggle('tengo', tildados[clave]);
      });
    });

    document.getElementById('comida-titulo').textContent = comida.titulo;
  }

  return { abrir, render };
})();
