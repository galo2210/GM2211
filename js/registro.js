// NORTE · registro rápido (+) — peso, pasos, ánimo, sueño, marihuana, gasto, nota y tarea.
// Todo en 1-2 toques. Registro sin juicio: acá no se opina, se anota.

const Registro = (() => {

  const TIPOS = [
    { tipo: 'peso', nombre: 'Peso' },
    { tipo: 'pasos', nombre: 'Pasos' },
    { tipo: 'animo', nombre: 'Ánimo' },
    { tipo: 'sueno', nombre: 'Sueño' },
    { tipo: 'marihuana', nombre: 'Marihuana' },
    { tipo: 'gasto', nombre: 'Gasto' },
    { tipo: 'nota', nombre: 'Nota' },
    { tipo: 'tarea', nombre: 'Tarea' }
  ];

  const CATEGORIAS_GASTO = ['Comida', 'Súper', 'Salida', 'Transporte', 'Marihuana', 'Casa', 'Otro'];

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function guardarRegistro(tipo, valor) {
    const registros = Store.leer('registros', []);
    registros.push({ id: Store.nuevoId(), tipo, valor, fecha: new Date().toISOString() });
    Store.guardar('registros', registros);
  }

  function cerrarHoja() {
    document.getElementById('hoja-registro').classList.remove('visible');
    renderMenu();
  }

  function tiposActivos() {
    const config = Store.leer('registro-config', {});
    const activos = TIPOS.filter((t) => config[t.tipo] !== false);
    return activos.length > 0 ? activos : TIPOS;
  }

  function renderMenu() {
    const cont = document.getElementById('hoja-cuerpo');
    let html = '<div class="registro-grilla">';
    tiposActivos().forEach((t) => {
      html += '<button class="registro-opcion" data-tipo="' + t.tipo + '">' + esc(t.nombre) + '</button>';
    });
    html += '</div>' +
      '<p class="hoja-ayuda" style="margin:12px 0 0;">Qué aparece acá se elige en Ajustes.</p>';
    cont.innerHTML = html;
    cont.querySelectorAll('[data-tipo]').forEach((b) => {
      b.addEventListener('click', () => renderForm(b.dataset.tipo));
    });
  }

  // Toggles en Ajustes: qué tipos ofrece el (+).
  function renderConfig() {
    const cont = document.getElementById('ajustes-registro-config');
    const config = Store.leer('registro-config', {});
    let html = '';
    TIPOS.forEach((t) => {
      const activo = config[t.tipo] !== false;
      html += '<div class="fila-dato"><span>' + esc(t.nombre) + '</span>' +
        '<button class="interruptor' + (activo ? ' prendido' : '') + '" data-config-tipo="' + t.tipo + '" role="switch" aria-checked="' + activo + '" aria-label="Mostrar ' + esc(t.nombre) + ' en el registro rápido"><span></span></button></div>';
    });
    cont.innerHTML = html;
    cont.querySelectorAll('[data-config-tipo]').forEach((b) => {
      b.addEventListener('click', () => {
        const config2 = Store.leer('registro-config', {});
        const activo = config2[b.dataset.configTipo] !== false;
        if (activo) config2[b.dataset.configTipo] = false; else delete config2[b.dataset.configTipo];
        Store.guardar('registro-config', config2);
        renderConfig();
      });
    });
  }

  function renderForm(tipo) {
    const cont = document.getElementById('hoja-cuerpo');
    let html = '<button class="btn-volver" id="btn-volver-menu">&#8249; Volver</button>';

    if (tipo === 'peso') {
      html += '<p class="hoja-ayuda">En ayunas, después del baño: mismo momento, dato comparable.</p>' +
        '<div class="registro-fila"><input type="text" inputmode="decimal" id="reg-valor" placeholder="68,5 (kg)">' +
        '<button class="btn btn-primario" id="reg-guardar">Guardar</button></div>';
    }
    if (tipo === 'pasos') {
      html += '<p class="hoja-ayuda">El número de la app Salud del iPhone, tal cual está.</p>' +
        '<div class="registro-fila"><input type="text" inputmode="numeric" id="reg-valor" placeholder="8200">' +
        '<button class="btn btn-primario" id="reg-guardar">Guardar</button></div>';
    }
    if (tipo === 'animo') {
      html += '<p class="hoja-ayuda">¿Cómo venís? 1 = pozo · 5 = enchufado.</p>' +
        '<div class="animo-fila">' + [1, 2, 3, 4, 5].map((n) =>
          '<button class="btn-animo" data-valor="' + n + '">' + n + '</button>').join('') + '</div>';
    }
    if (tipo === 'sueno') {
      html += '<p class="hoja-ayuda">Horas dormidas anoche, redondeá tranquilo.</p>' +
        '<div class="animo-fila">' + [5, 6, 7, 8, 9].map((n) =>
          '<button class="btn-animo" data-valor="' + n + '">' + n + 'h</button>').join('') + '</div>' +
        '<div class="registro-fila"><input type="text" inputmode="decimal" id="reg-valor" placeholder="Otra cantidad (ej: 6,5)">' +
        '<button class="btn btn-secundario" id="reg-guardar">Guardar</button></div>';
    }
    if (tipo === 'marihuana') {
      html += '<p class="hoja-ayuda">Solo el dato, sin juicio. Tu regla: máximo 1 por día.</p>' +
        '<div class="animo-fila">' +
        '<button class="btn-animo" data-valor="0">Nada</button>' +
        '<button class="btn-animo" data-valor="0.5">Medio</button>' +
        '<button class="btn-animo" data-valor="1">Entero</button>' +
        '</div>';
    }
    if (tipo === 'gasto') {
      html += '<p class="hoja-ayuda">Monto en pesos. La categoría ordena después.</p>' +
        '<div class="registro-fila"><input type="text" inputmode="numeric" id="reg-valor" placeholder="15000 ($)"></div>' +
        '<div class="registro-fila"><select id="reg-categoria" class="campo-busqueda">' +
        CATEGORIAS_GASTO.map((c) => '<option>' + c + '</option>').join('') +
        '</select><button class="btn btn-primario" id="reg-guardar">Guardar</button></div>';
    }
    if (tipo === 'nota') {
      html += '<p class="hoja-ayuda">Lo que tengas en la cabeza. Queda en TUYO.</p>' +
        '<textarea id="reg-valor" class="campo-texto" rows="3" placeholder="Escribí acá"></textarea>' +
        '<button class="btn btn-primario" id="reg-guardar" style="width:100%; margin-top:10px;">Guardar nota</button>';
    }
    if (tipo === 'tarea') {
      html += '<p class="hoja-ayuda">Con fecha aparece en HOY ese día. Sin fecha queda en TUYO.</p>' +
        '<div class="registro-fila"><input type="text" id="reg-valor" placeholder="Qué hay que hacer"></div>' +
        '<div class="registro-fila"><input type="date" id="reg-fecha" class="campo-busqueda">' +
        '<button class="btn btn-primario" id="reg-guardar">Guardar</button></div>';
    }

    cont.innerHTML = html;
    document.getElementById('btn-volver-menu').addEventListener('click', renderMenu);

    // Botones de valor directo (ánimo, sueño rápido, marihuana)
    cont.querySelectorAll('.btn-animo[data-valor]').forEach((b) => {
      b.addEventListener('click', () => {
        guardarRegistro(tipo, Number(b.dataset.valor));
        cerrarHoja();
      });
    });

    const guardar = document.getElementById('reg-guardar');
    if (guardar) {
      guardar.addEventListener('click', () => {
        const input = document.getElementById('reg-valor');

        if (tipo === 'peso') {
          const v = parseFloat(String(input.value).trim().replace(',', '.'));
          if (!v || v < 30 || v > 200) { alert('Revisá el peso: número en kg.'); return; }
          guardarRegistro('peso', v);
        }
        if (tipo === 'pasos') {
          const v = parseInt(String(input.value).replace(/[^\d]/g, ''), 10);
          if (!v || v < 1 || v > 100000) { alert('Revisá los pasos.'); return; }
          guardarRegistro('pasos', v);
        }
        if (tipo === 'sueno') {
          const v = parseFloat(String(input.value).trim().replace(',', '.'));
          if (!v || v < 1 || v > 16) { alert('Revisá las horas de sueño.'); return; }
          guardarRegistro('sueno', v);
        }
        if (tipo === 'gasto') {
          const v = parseInt(String(input.value).replace(/[^\d]/g, ''), 10);
          if (!v || v < 1) { alert('Cargá el monto en pesos.'); return; }
          guardarRegistro('gasto', { monto: v, categoria: document.getElementById('reg-categoria').value });
        }
        if (tipo === 'nota') {
          const texto = String(input.value).trim();
          if (!texto) { alert('La nota está vacía.'); return; }
          const notas = Store.leer('notas', []);
          notas.push({ id: Store.nuevoId(), texto, fecha: new Date().toISOString() });
          Store.guardar('notas', notas);
        }
        if (tipo === 'tarea') {
          const texto = String(input.value).trim();
          if (!texto) { alert('Escribí la tarea.'); return; }
          const tareas = Store.leer('tareas', []);
          tareas.push({
            id: Store.nuevoId(), texto,
            fecha: document.getElementById('reg-fecha').value || null,
            hecha: false
          });
          Store.guardar('tareas', tareas);
        }
        cerrarHoja();
        if (location.hash === '#/hoy' || location.hash === '' ) Hoy.renderHoy();
      });
    }
  }

  function init() {
    const hoja = document.getElementById('hoja-registro');
    document.getElementById('btn-mas').addEventListener('click', () => {
      renderMenu();
      hoja.classList.add('visible');
    });
    document.getElementById('btn-cerrar-hoja').addEventListener('click', cerrarHoja);
    hoja.addEventListener('click', (e) => { if (e.target === hoja) cerrarHoja(); });
    renderMenu();
  }

  return { init, guardarRegistro, renderConfig };
})();
