// NORTE · pantalla TUYO — tareas (con/sin fecha) y notas libres.

const Tuyo = (() => {

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function fechaCorta(iso) {
    const [y, m, d] = iso.split('T')[0].split('-');
    return d + '/' + m + (y !== String(new Date().getFullYear()) ? '/' + y.slice(2) : '');
  }

  function render() {
    const cont = document.getElementById('tuyo-contenido');
    const tareas = Store.leer('tareas', []);
    const notas = Store.leer('notas', []);
    let html = '';

    // Tareas
    html += '<div class="bloque-cabecera"><h3>Tareas</h3><span class="conteo">' +
      tareas.filter((t) => !t.hecha).length + ' pendientes</span></div>';
    if (tareas.length === 0) {
      html += '<div class="tarjeta vacio"><p>Sin tareas. Con el (+) cargás una en dos toques.</p></div>';
    } else {
      const orden = tareas.slice().sort((a, b) => Number(a.hecha) - Number(b.hecha));
      orden.forEach((t) => {
        html += '<div class="pieza' + (t.hecha ? ' hecha' : '') + '" data-tarea="' + t.id + '">' +
          '<span class="estado">' + (t.hecha ? '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' : '') + '</span>' +
          '<div class="cuerpo"><p class="titulo">' + esc(t.texto) + '</p>' +
          (t.fecha ? '<p class="meta">Para el ' + fechaCorta(t.fecha) + '</p>' : '') + '</div>' +
          '<button class="btn-borrar" data-borrar-tarea="' + t.id + '" aria-label="Borrar tarea">&#215;</button>' +
          '</div>';
      });
    }

    // Notas
    html += '<div class="bloque-cabecera" style="margin-top:24px;"><h3>Notas</h3><span class="conteo">' + notas.length + '</span></div>';
    if (notas.length === 0) {
      html += '<div class="tarjeta vacio"><p>Sin notas todavía. Lo que anotes con el (+) queda acá.</p></div>';
    } else {
      notas.slice().reverse().forEach((n) => {
        html += '<div class="tarjeta nota">' +
          '<p>' + esc(n.texto) + '</p>' +
          '<div class="nota-pie"><span class="mono">' + fechaCorta(n.fecha) + '</span>' +
          '<button class="btn-borrar" data-borrar-nota="' + n.id + '" aria-label="Borrar nota">&#215;</button></div>' +
          '</div>';
      });
    }

    cont.innerHTML = html;

    cont.querySelectorAll('[data-tarea]').forEach((fila) => {
      fila.addEventListener('click', (e) => {
        if (e.target.closest('[data-borrar-tarea]')) return;
        const tareas2 = Store.leer('tareas', []);
        const t = tareas2.find((x) => x.id === fila.dataset.tarea);
        if (t) { t.hecha = !t.hecha; Store.guardar('tareas', tareas2); render(); }
      });
    });
    cont.querySelectorAll('[data-borrar-tarea]').forEach((b) => {
      b.addEventListener('click', () => {
        Store.guardar('tareas', Store.leer('tareas', []).filter((x) => x.id !== b.dataset.borrarTarea));
        render();
      });
    });
    cont.querySelectorAll('[data-borrar-nota]').forEach((b) => {
      b.addEventListener('click', () => {
        Store.guardar('notas', Store.leer('notas', []).filter((x) => x.id !== b.dataset.borrarNota));
        render();
      });
    });
  }

  // Tareas con fecha de hoy, para mostrar en HOY.
  function tareasDeHoy() {
    return Store.leer('tareas', []).filter((t) => t.fecha === Motor.fechaISO() && !t.hecha);
  }

  return { render, tareasDeHoy };
})();
