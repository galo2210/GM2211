// NORTE · editor de rutina — activar/desactivar piezas, crear y borrar piezas propias.
// Los cambios regeneran el día de hoy respetando lo ya marcado.

const RutinaEditor = (() => {

  const DIAS_LETRA = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
  const NOMBRE_BLOQUE = { manana: 'Mañana', dia: 'Día', noche: 'Noche' };

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function diasTexto(dias) {
    if (dias.length === 7) return 'Todos los días';
    return [1, 2, 3, 4, 5, 6, 0].filter((d) => dias.includes(d)).map((d) => DIAS_LETRA[d]).join(' · ');
  }

  function render() {
    const cont = document.getElementById('rutina-contenido');
    const desactivadas = Store.leer('rutina-config', {});
    const propias = Store.leer('piezas-propias', []);
    let html = '<div class="tarjeta vacio"><p>Apagá lo que no va más, prendé lo que vuelve. Los cambios arrancan hoy mismo y nada borra tu historial.</p></div>';

    ['manana', 'dia', 'noche'].forEach((bloque) => {
      html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>' + NOMBRE_BLOQUE[bloque] + '</h3></div>';

      RUTINA_BASE.filter((p) => p.bloque === bloque).forEach((p) => {
        const activa = desactivadas[p.id] !== false;
        html += '<div class="pieza editor' + (activa ? '' : ' apagada') + '">' +
          '<button class="interruptor' + (activa ? ' prendido' : '') + '" data-toggle="' + p.id + '" role="switch" aria-checked="' + activa + '" aria-label="Activar ' + esc(p.titulo) + '"><span></span></button>' +
          '<div class="cuerpo"><p class="titulo">' + esc(p.titulo) + '</p>' +
          '<p class="meta">' + diasTexto(p.dias) + '</p></div>' +
          '</div>';
      });

      propias.filter((p) => p.bloque === bloque).forEach((p) => {
        html += '<div class="pieza editor">' +
          '<span class="tag">Tuya</span>' +
          '<div class="cuerpo"><p class="titulo">' + esc(p.titulo) + '</p>' +
          '<p class="meta">' + diasTexto(p.dias) + '</p></div>' +
          '<button class="btn-borrar" data-borrar="' + p.id + '" aria-label="Borrar pieza">&#215;</button>' +
          '</div>';
      });
    });

    // Crear pieza propia
    html += '<div class="tarjeta" style="margin-top:20px;"><h2>Agregar pieza tuya</h2>' +
      '<div class="registro-fila"><input type="text" id="nueva-titulo" placeholder="Qué (ej: Leer 10 páginas)"></div>' +
      '<div class="registro-fila"><input type="text" id="nueva-meta" placeholder="Detalle corto (opcional)"></div>' +
      '<div class="registro-fila"><select id="nueva-bloque" class="campo-busqueda">' +
      '<option value="manana">Mañana</option><option value="dia" selected>Día</option><option value="noche">Noche</option>' +
      '</select></div>' +
      '<div class="dias-chips">' +
      [1, 2, 3, 4, 5, 6, 0].map((d) =>
        '<button class="chip dia-chip activo" data-dia="' + d + '">' + DIAS_LETRA[d] + '</button>').join('') +
      '</div>' +
      '<button class="btn btn-primario" id="btn-crear-pieza" style="width:100%; margin-top:12px;">Agregar a mi rutina</button>' +
      '</div>';

    cont.innerHTML = html;

    cont.querySelectorAll('[data-toggle]').forEach((b) => {
      b.addEventListener('click', () => {
        const config = Store.leer('rutina-config', {});
        const activa = config[b.dataset.toggle] !== false;
        if (activa) config[b.dataset.toggle] = false; else delete config[b.dataset.toggle];
        Store.guardar('rutina-config', config);
        Motor.regenerarHoy();
        render();
      });
    });

    cont.querySelectorAll('[data-borrar]').forEach((b) => {
      b.addEventListener('click', () => {
        Store.guardar('piezas-propias',
          Store.leer('piezas-propias', []).filter((x) => x.id !== b.dataset.borrar));
        Motor.regenerarHoy();
        render();
      });
    });

    cont.querySelectorAll('.dia-chip').forEach((b) => {
      b.addEventListener('click', () => b.classList.toggle('activo'));
    });

    document.getElementById('btn-crear-pieza').addEventListener('click', () => {
      const titulo = String(document.getElementById('nueva-titulo').value).trim();
      if (!titulo) { alert('Poné el nombre de la pieza.'); return; }
      const dias = Array.from(cont.querySelectorAll('.dia-chip.activo')).map((b) => Number(b.dataset.dia));
      if (dias.length === 0) { alert('Elegí al menos un día.'); return; }
      const propias2 = Store.leer('piezas-propias', []);
      propias2.push({
        id: Store.nuevoId(),
        titulo,
        meta: String(document.getElementById('nueva-meta').value).trim() || 'Pieza tuya',
        bloque: document.getElementById('nueva-bloque').value,
        dias
      });
      Store.guardar('piezas-propias', propias2);
      Motor.regenerarHoy();
      render();
    });
  }

  return { render };
})();
