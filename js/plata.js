// NORTE · PLATA — Fondo Brasil (barra siempre visible), gastos del mes por categoría,
// fijos editables e ingresos. El negocio real vive en otro proyecto: acá solo su bloque y sus números.

const Plata = (() => {

  const BRASIL_INICIAL = 1000;   // USD con los que arranca el fondo (SISTEMA.md §6.1)
  const META_DEFECTO = 3500;
  const FECHA_VIAJE = new Date(2027, 0, 15); // referencia enero 2027

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function pesos(n) { return '$' + Number(n).toLocaleString('es-AR'); }
  function usd(n) { return 'USD ' + Number(n).toLocaleString('es-AR'); }

  function mesActual(fechaIso) {
    return Motor.fechaISO(new Date(fechaIso)).slice(0, 7) === Motor.fechaISO().slice(0, 7);
  }

  function render() {
    const cont = document.getElementById('plata-contenido');
    const meta = Store.leer('brasil-meta', META_DEFECTO);
    const aportes = Store.leer('brasil-aportes', []);
    const aportado = BRASIL_INICIAL + aportes.reduce((s, a) => s + a.monto, 0);
    const pct = Math.min(100, Math.round((aportado / meta) * 100));
    const falta = Math.max(0, meta - aportado);
    const mesesRestantes = Math.max(1, Math.round((FECHA_VIAJE - Date.now()) / (30.4 * 24 * 60 * 60 * 1000)));
    const porMes = Math.ceil(falta / mesesRestantes);

    const registros = Store.leer('registros', []);
    const gastosMes = registros.filter((r) => r.tipo === 'gasto' && r.valor && mesActual(r.fecha));
    const ingresosMes = registros.filter((r) => r.tipo === 'ingreso' && r.valor && mesActual(r.fecha));
    const fijos = Store.leer('gastos-fijos', []);

    let html = '';

    // ---------- Fondo Brasil ----------
    html += '<div class="para-ahora">' +
      '<p class="etiqueta">Fondo Brasil · enero 2027</p>' +
      '<h2>' + usd(aportado) + ' <span style="font-size:15px; color:var(--texto-3); font-weight:400;">de ' + usd(meta) + '</span></h2>' +
      '<div class="barra"><div style="width:' + pct + '%;"></div></div>' +
      '<p class="detalle">' + pct + '% · faltan ' + usd(falta) + (falta > 0 ? ' ≈ ' + usd(porMes) + '/mes por ' + mesesRestantes + ' meses' : ' · ¡LLEGASTE!') + '</p>' +
      '<p class="porque">El aporte es flexible: cargá lo que puedas cada mes y la cuenta se rehace sola. Sin drama si un mes es menos.</p>' +
      '<div class="acciones">' +
      '<button class="btn btn-primario" id="btn-aporte">Cargar aporte</button>' +
      '<button class="btn btn-secundario" id="btn-meta">Cambiar meta</button>' +
      '</div></div>';

    if (aportes.length > 0) {
      html += '<div class="tarjeta">';
      aportes.slice(-5).reverse().forEach((a) => {
        const f = new Date(a.fecha);
        html += '<div class="fila-dato"><span>' + String(f.getDate()).padStart(2, '0') + '/' + String(f.getMonth() + 1).padStart(2, '0') + ' · Aporte</span>' +
          '<span class="valor">' + usd(a.monto) + '</span></div>';
      });
      html += '</div>';
    }

    // ---------- Gastos del mes ----------
    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Gastos del mes</h3></div>';
    if (gastosMes.length === 0) {
      html += '<div class="tarjeta vacio"><p>Sin gastos cargados este mes. Entran por el (+) o al terminar una compra.</p></div>';
    } else {
      const porCategoria = {};
      gastosMes.forEach((r) => {
        const cat = r.valor.categoria || 'Otro';
        porCategoria[cat] = (porCategoria[cat] || 0) + Number(r.valor.monto || 0);
      });
      const total = Object.values(porCategoria).reduce((s, v) => s + v, 0);
      html += '<div class="tarjeta">';
      Object.entries(porCategoria).sort((a, b) => b[1] - a[1]).forEach(([cat, monto]) => {
        html += '<div class="fila-dato"><span>' + esc(cat) + '</span><span class="valor">' + pesos(monto) + '</span></div>';
      });
      html += '<div class="fila-dato"><span><strong>Total</strong></span><span class="valor"><strong>' + pesos(total) + '</strong></span></div>' +
        '</div>';
    }

    // ---------- Fijos ----------
    const totalFijos = fijos.reduce((s, f) => s + f.monto, 0);
    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Gastos fijos</h3>' +
      '<span class="conteo">' + pesos(totalFijos) + '/mes</span></div>';
    if (fijos.length === 0) {
      html += '<div class="tarjeta vacio"><p>Cargá alquiler, expensas, servicios: lo que sale sí o sí todos los meses.</p></div>';
    } else {
      html += '<div class="tarjeta">';
      fijos.forEach((f) => {
        html += '<div class="fila-dato"><span>' + esc(f.nombre) + '</span>' +
          '<span style="display:flex; align-items:center; gap:8px;"><span class="valor">' + pesos(f.monto) + '</span>' +
          '<button class="btn-borrar" data-borrar-fijo="' + f.id + '" aria-label="Borrar fijo">&#215;</button></span></div>';
      });
      html += '</div>';
    }
    html += '<div class="tarjeta"><div class="registro-fila">' +
      '<input type="text" id="fijo-nombre" placeholder="Nombre (ej: Expensas)">' +
      '<input type="text" inputmode="numeric" id="fijo-monto" placeholder="$" class="precio-input" style="width:90px;">' +
      '<button class="btn btn-secundario" id="btn-agregar-fijo">Sumar</button></div></div>';

    // ---------- Ingresos del mes ----------
    html += '<div class="bloque-cabecera" style="margin-top:16px;"><h3>Ingresos del mes</h3></div>';
    if (ingresosMes.length === 0) {
      html += '<div class="tarjeta vacio"><p>Se cargan por el (+) → Ingreso. Cuando el negocio arranque, acá se va a notar.</p></div>';
    } else {
      const totalIng = ingresosMes.reduce((s, r) => s + Number(r.valor.monto || 0), 0);
      html += '<div class="tarjeta">';
      ingresosMes.slice(-5).reverse().forEach((r) => {
        html += '<div class="fila-dato"><span>' + esc(r.valor.origen || 'Ingreso') + '</span>' +
          '<span class="valor">' + pesos(r.valor.monto) + '</span></div>';
      });
      html += '<div class="fila-dato"><span><strong>Total</strong></span><span class="valor"><strong>' + pesos(totalIng) + '</strong></span></div></div>';
    }

    // ---------- Negocio ----------
    html += '<div class="tarjeta vacio" style="margin-top:16px;"><p><strong>Negocio.</strong> El proyecto se trabaja aparte; acá viven sus 2 bloques semanales de foco (sábado y domingo en HOY, editables en Mi rutina) y sus ingresos cuando lleguen.</p></div>';

    cont.innerHTML = html;

    document.getElementById('btn-aporte').addEventListener('click', () => {
      const v = prompt('¿Cuánto aportás al fondo? (USD)');
      if (v === null) return;
      const n = parseInt(String(v).replace(/[^\d]/g, ''), 10);
      if (!n || n < 1) return;
      const aportes2 = Store.leer('brasil-aportes', []);
      aportes2.push({ id: Store.nuevoId(), monto: n, fecha: new Date().toISOString() });
      Store.guardar('brasil-aportes', aportes2);
      render();
    });

    document.getElementById('btn-meta').addEventListener('click', () => {
      const v = prompt('Meta del fondo en USD:', String(meta));
      if (v === null) return;
      const n = parseInt(String(v).replace(/[^\d]/g, ''), 10);
      if (n > 0) { Store.guardar('brasil-meta', n); render(); }
    });

    document.getElementById('btn-agregar-fijo').addEventListener('click', () => {
      const nombre = String(document.getElementById('fijo-nombre').value).trim();
      const monto = parseInt(String(document.getElementById('fijo-monto').value).replace(/[^\d]/g, ''), 10);
      if (!nombre || !monto) { alert('Nombre y monto.'); return; }
      const fijos2 = Store.leer('gastos-fijos', []);
      fijos2.push({ id: Store.nuevoId(), nombre, monto });
      Store.guardar('gastos-fijos', fijos2);
      render();
    });

    cont.querySelectorAll('[data-borrar-fijo]').forEach((b) => {
      b.addEventListener('click', () => {
        Store.guardar('gastos-fijos',
          Store.leer('gastos-fijos', []).filter((x) => x.id !== b.dataset.borrarFijo));
        render();
      });
    });
  }

  return { render };
})();
