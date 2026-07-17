// NORTE · app — navegación por hash, cabecera de HOY y pantalla Ajustes.
// El motor del día llega en F1; esto es la fundación.

(() => {
  Store.init();

  // ---------- Tema (Obsidiana por defecto, Plata como alternativa) ----------
  const TEMAS = { obsidiana: '#0C0D10', plata: '#E4E7EC' };

  function aplicarTema(nombre) {
    const tema = TEMAS[nombre] ? nombre : 'obsidiana';
    document.documentElement.setAttribute('data-tema', tema);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', TEMAS[tema]);
  }

  function renderTema() {
    const cont = document.getElementById('ajustes-tema');
    if (!cont) return;
    const actual = Store.leer('tema', 'obsidiana');
    cont.innerHTML = '<div class="chips">' +
      '<button class="chip' + (actual === 'obsidiana' ? ' activo' : '') + '" data-tema-op="obsidiana">Obsidiana · oscuro</button>' +
      '<button class="chip' + (actual === 'plata' ? ' activo' : '') + '" data-tema-op="plata">Plata · claro</button>' +
      '</div>';
    cont.querySelectorAll('[data-tema-op]').forEach((b) => {
      b.addEventListener('click', () => {
        Store.guardar('tema', b.dataset.temaOp);
        aplicarTema(b.dataset.temaOp);
        renderTema();
      });
    });
  }

  aplicarTema(Store.leer('tema', 'obsidiana'));

  // ---------- Cabecera de HOY ----------
  function saludo() {
    const h = new Date().getHours();
    if (h < 12) return 'Buen día, Galo.';
    if (h < 19) return 'Buenas tardes, Galo.';
    return 'Buenas noches, Galo.';
  }

  function fechaHoy() {
    const texto = new Intl.DateTimeFormat('es-AR', {
      weekday: 'long', day: 'numeric', month: 'long'
    }).format(new Date());
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  document.getElementById('hoy-fecha').textContent = fechaHoy();
  document.getElementById('hoy-saludo').textContent = saludo();

  // ---------- Navegación ----------
  const RUTAS = ['hoy', 'biblioteca', 'tuyo', 'progreso', 'ajustes', 'cierre', 'gym', 'rutina', 'comida', 'compras', 'movilidad', 'player', 'respirar', 'aprender', 'foco', 'plata'];

  function navegar() {
    const ruta = location.hash.replace('#/', '') || 'hoy';
    const destino = RUTAS.includes(ruta) ? ruta : 'hoy';
    document.querySelectorAll('.pantalla').forEach((p) => {
      p.classList.toggle('visible', p.id === 'pantalla-' + destino);
    });
    document.querySelectorAll('.nav-item[data-ruta]').forEach((b) => {
      b.classList.toggle('activo', b.dataset.ruta === destino);
    });
    if (destino === 'hoy') Hoy.renderHoy();
    if (destino === 'cierre') Hoy.renderCierre();
    if (destino === 'progreso') Progreso.render();
    if (destino === 'tuyo') Tuyo.render();
    if (destino === 'gym') Gym.render();
    if (destino === 'rutina') RutinaEditor.render();
    if (destino === 'comida') Comida.render();
    if (destino === 'compras') Compras.render();
    if (destino === 'biblioteca') Biblioteca.render();
    if (destino === 'ajustes') { Registro.renderConfig(); renderTema(); }
    if (destino === 'movilidad') Movilidad.renderLista();
    if (destino === 'player') Movilidad.renderPlayer();
    if (destino === 'respirar') Respiracion.renderLista();
    if (destino === 'aprender') Aprender.render();
    if (destino === 'foco') Foco.render();
    if (destino === 'plata') Plata.render();
    if (destino !== 'gym') Gym.pararTimer();
    if (destino !== 'player') Movilidad.pararTimer();
    if (destino !== 'respirar') Respiracion.pararTimer();
    if (destino !== 'foco') Foco.pararTimer();
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', navegar);
  document.querySelectorAll('[data-ruta]').forEach((b) => {
    b.addEventListener('click', () => { location.hash = '#/' + b.dataset.ruta; });
  });
  navegar();

  // ---------- Hoja de registro rápido ----------
  Registro.init();

  // ---------- Ajustes ----------
  document.getElementById('dato-version').textContent = 'v' + VERSION + ' · ' + FASE;
  document.getElementById('dato-build').textContent = BUILD_FECHA;
  document.getElementById('dato-schema').textContent = String(Store.SCHEMA_VERSION);

  document.getElementById('btn-exportar').addEventListener('click', () => {
    const blob = new Blob([Store.exportar()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'norte-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  const inputImportar = document.getElementById('input-importar');
  document.getElementById('btn-importar').addEventListener('click', () => inputImportar.click());
  inputImportar.addEventListener('change', () => {
    const archivo = inputImportar.files[0];
    if (!archivo) return;
    const lector = new FileReader();
    lector.onload = () => {
      try {
        if (!confirm('Esto reemplaza los datos actuales por los del backup. ¿Seguir?')) return;
        const cantidad = Store.importar(lector.result);
        alert('Listo: ' + cantidad + ' registros importados.');
        location.reload();
      } catch (e) {
        alert('No se pudo importar: ' + e.message);
      } finally {
        inputImportar.value = '';
      }
    };
    lector.readAsText(archivo);
  });
})();
