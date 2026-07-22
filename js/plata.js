// NORTE · PLATA v2 — tablero de plata (16/07/2026).
// Orden: Fondo Brasil (hero con aporte inline) → balance del mes en 4 stats →
// gastos por categoría en barras → fijos → movimientos unificados. Sin prompt(): todo inline.

const Plata = (() => {

  const BRASIL_INICIAL = 1000;   // USD con los que arranca el fondo (SISTEMA.md §6.1)
  const META_DEFECTO = 3500;
  const FECHA_VIAJE = new Date(2027, 0, 15);

  let editandoMeta = false;

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function pesos(n) { return '$' + Number(n).toLocaleString('es-AR'); }
  function usd(n) { return 'USD ' + Number(n).toLocaleString('es-AR'); }

  function mesDe(fechaIso) { return Motor.fechaISO(new Date(fechaIso)).slice(0, 7); }
  function mesActualStr() { return Motor.fechaISO().slice(0, 7); }
  function mesAnteriorStr() {
    const d = new Date();
    d.setMonth(d.getMonth() - 1);
    return Motor.fechaISO(d).slice(0, 7);
  }

  function stat(label, valor, sub, color) {
    return '<div class="stat pc-plata">' +
      '<p class="s-label">' + Iconos.get('plata', 13) + label + '</p>' +
      '<p class="s-valor"' + (color ? ' style="color:' + color + ';"' : '') + '>' + valor + '</p>' +
      (sub ? '<p class="s-sub">' + sub + '</p>' : '') +
      '</div>';
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
    const mesAct = mesActualStr();
    const mesAnt = mesAnteriorStr();
    const gastosMes = registros.filter((r) => r.tipo === 'gasto' && r.valor && mesDe(r.fecha) === mesAct);
    const gastosMesAnt = registros.filter((r) => r.tipo === 'gasto' && r.valor && mesDe(r.fecha) === mesAnt);
    const ingresosMes = registros.filter((r) => r.tipo === 'ingreso' && r.valor && mesDe(r.fecha) === mesAct);
    const fijos = Store.leer('gastos-fijos', []);

    const totalGastos = gastosMes.reduce((s, r) => s + Number(r.valor.monto || 0), 0);
    const totalGastosAnt = gastosMesAnt.reduce((s, r) => s + Number(r.valor.monto || 0), 0);
    const totalIngresos = ingresosMes.reduce((s, r) => s + Number(r.valor.monto || 0), 0);
    const totalFijos = fijos.reduce((s, f) => s + f.monto, 0);
    const balance = totalIngresos - totalGastos - totalFijos;
    const diaDelMes = new Date().getDate();
    const ritmoDiario = diaDelMes > 0 ? Math.round(totalGastos / diaDelMes) : 0;
    const proyeccion = ritmoDiario * 30;

    const hayMovimientos = gastosMes.length > 0 || ingresosMes.length > 0;
    let html = '';

    // ---------- 01 · Fondo Brasil (hero) ----------
    html += '<div class="para-ahora pc-plata">' +
      '<div class="ahora-top" style="margin-bottom:10px;"><span class="badge">' + Iconos.get('energia', 24) + '</span>' +
      '<div style="flex:1;"><p class="etiqueta">Fondo Brasil · enero 2027</p></div>' +
      '<span class="pill-pct">' + pct + '%</span></div>' +
      '<p class="hero-monto">' + usd(aportado).replace('USD ', '<small>USD</small> ') +
      ' <span class="hero-de">de ' + meta.toLocaleString('es-AR') + '</span></p>' +
      '<div class="barra hitos"><div style="width:' + pct + '%;"></div>' +
      '<span class="tick" style="left:25%;"></span><span class="tick" style="left:50%;"></span><span class="tick" style="left:75%;"></span></div>' +
      '<p class="detalle">' + (falta > 0
        ? 'Faltan <strong>' + usd(falta) + '</strong> · ritmo: <strong>' + usd(porMes) + '/mes</strong> × ' + mesesRestantes + ' meses'
        : '¡LLEGASTE! Brasil pagado.') + '</p>' +
      '<div class="registro-fila" style="border:none; padding:12px 0 0; gap:8px;">' +
      '<input type="text" inputmode="numeric" id="aporte-monto" placeholder="Aporte del mes (USD)">' +
      '<button class="btn btn-primario" id="btn-aporte">Sumar</button>' +
      '<button class="btn-mini" id="btn-meta" style="flex:none; min-width:64px;">' + (editandoMeta ? 'Cancelar' : 'Meta') + '</button>' +
      '</div>' +
      (editandoMeta
        ? '<div class="registro-fila" style="border:none; padding:8px 0 0;">' +
          '<input type="text" inputmode="numeric" id="meta-monto" placeholder="Nueva meta (USD)" value="' + meta + '">' +
          '<button class="btn btn-secundario" id="btn-meta-guardar">Guardar</button></div>'
        : '') +
      '</div>';

    // ---------- 02 · Balance protagonista + trío de stats ----------
    html += '<p class="filtro-caption" style="margin-top:20px;">' + new Intl.DateTimeFormat('es-AR', { month: 'long' }).format(new Date()).replace(/^./, (c) => c.toUpperCase()) + ', tu mes en números</p>';

    if (!hayMovimientos && totalFijos === 0) {
      // Mes sin datos: una sola invitación con acción, no cuatro ceros tristes
      html += '<div class="tarjeta" style="display:flex; gap:13px; align-items:flex-start;">' +
        '<span style="flex:none; width:42px; height:42px; border-radius:12px; display:grid; place-items:center; color:var(--plata); background:var(--plata-tenue);">' + Iconos.get('plata', 20) + '</span>' +
        '<div style="flex:1;"><p style="font-size:15.5px; font-weight:600; margin:0 0 4px;">Mes en blanco, todavía.</p>' +
        '<p style="margin:0 0 12px;">Con el primer movimiento se arma solo: balance, categorías y ritmo diario.</p>' +
        '<div style="display:flex; gap:8px;">' +
        '<button class="btn btn-secundario" data-abrir-registro="gasto" style="flex:1; min-height:42px; font-size:14px;">Cargar gasto</button>' +
        '<button class="btn btn-secundario" data-abrir-registro="ingreso" style="flex:1; min-height:42px; font-size:14px;">Cargar ingreso</button>' +
        '</div></div></div>';
    } else {
      // Balance como tarjeta ancha con su fórmula visible
      html += '<div class="stat pc-plata balance-hero">' +
        '<p class="s-label">' + Iconos.get('plata', 13) + 'Balance del mes</p>' +
        '<p class="s-valor" style="font-size:32px; color:' + (balance >= 0 ? 'var(--verde)' : 'var(--cuerpo)') + ';">' +
        (balance >= 0 ? '+' : '−') + pesos(Math.abs(balance)).slice(1) + '</p>' +
        '<div class="formula">' +
        '<span class="f-chip" style="color:var(--verde);">+ ' + pesos(totalIngresos) + '<small>ingresos</small></span>' +
        '<span class="f-chip">− ' + pesos(totalGastos) + '<small>gastos</small></span>' +
        '<span class="f-chip">− ' + pesos(totalFijos) + '<small>fijos</small></span>' +
        '</div></div>';

      html += '<div class="stats tres" style="margin-top:10px;">' +
        stat('Gastado', pesos(totalGastos),
          totalGastosAnt > 0
            ? (totalGastos <= totalGastosAnt ? '−' : '+') + Math.abs(Math.round((totalGastos / totalGastosAnt - 1) * 100)) + '% vs pasado'
            : gastosMes.length + ' mov.') +
        stat('Por día', pesos(ritmoDiario), totalGastos > 0 ? '≈' + pesos(proyeccion) + ' al 30' : '') +
        stat('Ingresos', pesos(totalIngresos), '') +
        '</div>';
    }

    // ---------- 03 · Gastos por categoría (barras) ----------
    if (gastosMes.length > 0) {
      html += '<p class="filtro-caption" style="margin-top:20px;">Gastos por categoría</p>';
      const porCategoria = {};
      gastosMes.forEach((r) => {
        const cat = r.valor.categoria || 'Otro';
        porCategoria[cat] = (porCategoria[cat] || 0) + Number(r.valor.monto || 0);
      });
      const maximo = Math.max(...Object.values(porCategoria));
      html += '<div class="tarjeta">';
      Object.entries(porCategoria).sort((a, b) => b[1] - a[1]).forEach(([cat, monto]) => {
        const ancho = Math.max(4, Math.round((monto / maximo) * 100));
        const pctCat = Math.round((monto / totalGastos) * 100);
        html += '<div class="cat-fila">' +
          '<div class="cat-info"><span>' + esc(cat) + '</span>' +
          '<span class="valor">' + pesos(monto) + ' · ' + pctCat + '%</span></div>' +
          '<div class="cat-barra"><div style="width:' + ancho + '%;"></div></div>' +
          '</div>';
      });
      html += '</div>';
    }

    // ---------- 04 · Fijos ----------
    html += '<p class="filtro-caption" style="margin-top:20px;">Fijos mensuales' + (totalFijos > 0 ? ' · ' + pesos(totalFijos) : '') + '</p>';
    html += '<div class="tarjeta">';
    if (fijos.length === 0) {
      html += '<p style="margin-bottom:10px;">Alquiler, expensas, servicios: lo que sale sí o sí. Se cargan una vez y entran al balance solos.</p>';
    } else {
      fijos.forEach((f) => {
        html += '<div class="fila-dato"><span>' + esc(f.nombre) + '</span>' +
          '<span style="display:flex; align-items:center; gap:8px;"><span class="valor">' + pesos(f.monto) + '</span>' +
          '<button class="btn-borrar" data-borrar-fijo="' + f.id + '" aria-label="Borrar fijo">&#215;</button></span></div>';
      });
    }
    html += '<div class="registro-fila" style="border:none;">' +
      '<input type="text" id="fijo-nombre" placeholder="Nombre (ej: Expensas)">' +
      '<input type="text" inputmode="numeric" id="fijo-monto" placeholder="$" class="precio-input">' +
      '<button class="btn btn-secundario" id="btn-agregar-fijo">Sumar</button></div>' +
      '</div>';

    // ---------- 05 · Movimientos (todo junto, cronológico) ----------
    const movimientos = registros
      .filter((r) => (r.tipo === 'gasto' || r.tipo === 'ingreso') && r.valor)
      .map((r) => ({ fecha: r.fecha, tipo: r.tipo, monto: r.valor.monto, detalle: r.tipo === 'gasto' ? r.valor.categoria : r.valor.origen }))
      .concat(aportes.map((a) => ({ fecha: a.fecha, tipo: 'aporte', monto: a.monto, detalle: 'Fondo Brasil' })))
      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
      .slice(0, 8);

    if (movimientos.length > 0) {
      html += '<p class="filtro-caption" style="margin-top:20px;">Últimos movimientos</p>';
      html += '<div class="tarjeta" style="padding:10px 16px;">';
      movimientos.forEach((m) => {
        const f = new Date(m.fecha);
        const fecha = String(f.getDate()).padStart(2, '0') + '/' + String(f.getMonth() + 1).padStart(2, '0');
        const conf = m.tipo === 'ingreso'
          ? { icono: 'progreso', color: 'var(--verde)', tenue: 'var(--verde-tenue)', signo: '+', montoTexto: pesos(m.monto) }
          : m.tipo === 'aporte'
            ? { icono: 'energia', color: 'var(--plata)', tenue: 'var(--plata-tenue)', signo: '', montoTexto: usd(m.monto) }
            : { icono: 'compras', color: 'var(--texto-2)', tenue: 'var(--superficie-2)', signo: '−', montoTexto: pesos(m.monto) };
        html += '<div class="fila-dato" style="padding:10px 0;">' +
          '<span style="display:flex; align-items:center; gap:11px; min-width:0;">' +
          '<span class="mov-ic" style="color:' + conf.color + '; background:' + conf.tenue + ';">' + Iconos.get(conf.icono, 16) + '</span>' +
          '<span style="min-width:0;"><span style="display:block; font-size:14.5px; font-weight:600; color:var(--texto-1);">' + esc(m.detalle || '') + '</span>' +
          '<span style="display:block; font-family:var(--mono); font-size:11px; color:var(--texto-3);">' + fecha + '</span></span></span>' +
          '<span class="valor" style="color:' + conf.color + '; font-weight:700; font-size:14px;">' + conf.signo + ' ' + conf.montoTexto + '</span></div>';
      });
      html += '</div>';
    }

    cont.innerHTML = html;
    conectar(cont, meta);
  }

  function conectar(cont, meta) {
    document.getElementById('btn-aporte').addEventListener('click', () => {
      const input = document.getElementById('aporte-monto');
      const n = parseInt(String(input.value).replace(/[^\d]/g, ''), 10);
      if (!n || n < 1) { input.focus(); return; }
      const aportes = Store.leer('brasil-aportes', []);
      aportes.push({ id: Store.nuevoId(), monto: n, fecha: new Date().toISOString() });
      Store.guardar('brasil-aportes', aportes);
      render();
    });

    document.getElementById('btn-meta').addEventListener('click', () => {
      editandoMeta = !editandoMeta;
      render();
    });

    const btnMetaGuardar = document.getElementById('btn-meta-guardar');
    if (btnMetaGuardar) {
      btnMetaGuardar.addEventListener('click', () => {
        const n = parseInt(String(document.getElementById('meta-monto').value).replace(/[^\d]/g, ''), 10);
        if (n > 0) Store.guardar('brasil-meta', n);
        editandoMeta = false;
        render();
      });
    }

    document.getElementById('btn-agregar-fijo').addEventListener('click', () => {
      const nombre = String(document.getElementById('fijo-nombre').value).trim();
      const monto = parseInt(String(document.getElementById('fijo-monto').value).replace(/[^\d]/g, ''), 10);
      if (!nombre || !monto) return;
      const fijos = Store.leer('gastos-fijos', []);
      fijos.push({ id: Store.nuevoId(), nombre, monto });
      Store.guardar('gastos-fijos', fijos);
      render();
    });

    cont.querySelectorAll('[data-borrar-fijo]').forEach((b) => {
      b.addEventListener('click', () => {
        Store.guardar('gastos-fijos',
          Store.leer('gastos-fijos', []).filter((x) => x.id !== b.dataset.borrarFijo));
        render();
      });
    });

    cont.querySelectorAll('[data-abrir-registro]').forEach((b) => {
      b.addEventListener('click', () => Registro.abrirEn(b.dataset.abrirRegistro));
    });
  }

  return { render };
})();
