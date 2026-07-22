// NORTE · PLATA definitiva — concepto "Banco + Gráfico" ELEGIDO POR GALO (16/07/2026).
// Orden: balance gigante centrado → acciones rápidas → Brasil con anillo →
// trío de contexto → dona de categorías → fijos → extracto. Todo inline, cero prompt().

const Plata = (() => {

  const BRASIL_INICIAL = 1000;
  const META_DEFECTO = 3500;
  const FECHA_VIAJE = new Date(2027, 0, 15);
  const COLORES_DONA = ['var(--plata)', 'var(--cuerpo)', 'var(--cabeza)', 'var(--sistema)', 'var(--verde)', 'var(--texto-3)'];

  let editandoMeta = false;

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function pesos(n) { return '$' + Number(n).toLocaleString('es-AR'); }
  function usd(n) { return 'USD ' + Number(n).toLocaleString('es-AR'); }
  function mesDe(fechaIso) { return Motor.fechaISO(new Date(fechaIso)).slice(0, 7); }

  // Anillo del Fondo Brasil con el % adentro.
  function anillo(pct, size) {
    const r = (size - 9) / 2;
    const c = 2 * Math.PI * r;
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="var(--superficie-2)" stroke-width="7"/>' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="var(--plata)" stroke-width="7" stroke-linecap="round" ' +
      'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - pct / 100)).toFixed(1) + '" ' +
      'transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')" style="transition: stroke-dashoffset 0.5s ease;"/>' +
      '<text x="' + size / 2 + '" y="' + (size / 2 + 4.5) + '" text-anchor="middle" font-family="ui-monospace, monospace" ' +
      'font-size="' + Math.round(size / 4.6) + '" font-weight="700" fill="var(--plata)">' + pct + '%</text>' +
      '</svg>';
  }

  // Dona de gastos por categoría.
  function dona(entradas, total) {
    const size = 116, r = 42, sw = 16;
    const c = 2 * Math.PI * r;
    let offset = 0;
    let segs = '';
    entradas.forEach((e) => {
      const largo = Math.max(2, (e.monto / total) * c - 2.5);
      segs += '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="' + e.color + '" ' +
        'stroke-width="' + sw + '" stroke-dasharray="' + largo.toFixed(1) + ' ' + (c - largo).toFixed(1) + '" ' +
        'stroke-dashoffset="' + (-offset).toFixed(1) + '" transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')"/>';
      offset += (e.monto / total) * c;
    });
    const totalCorto = total >= 1000000 ? '$' + (total / 1000000).toFixed(1).replace('.', ',') + 'M' : '$' + Math.round(total / 1000) + 'k';
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">' + segs +
      '<text x="' + size / 2 + '" y="' + (size / 2 - 1) + '" text-anchor="middle" font-family="ui-monospace, monospace" font-size="15" font-weight="700" fill="var(--texto-1)">' + totalCorto + '</text>' +
      '<text x="' + size / 2 + '" y="' + (size / 2 + 13) + '" text-anchor="middle" font-family="ui-monospace, monospace" font-size="8" fill="var(--texto-3)">GASTADO</text>' +
      '</svg>';
  }

  function render() {
    const cont = document.getElementById('plata-contenido');
    const meta = Store.leer('brasil-meta', META_DEFECTO);
    const aportes = Store.leer('brasil-aportes', []);
    const aportado = BRASIL_INICIAL + aportes.reduce((s, a) => s + a.monto, 0);
    const pct = Math.min(100, Math.round((aportado / meta) * 100));
    const falta = Math.max(0, meta - aportado);
    const mesesRestantes = Math.max(1, Math.round((FECHA_VIAJE - Date.now()) / (30.4 * 86400000)));
    const porMes = Math.ceil(falta / mesesRestantes);

    const registros = Store.leer('registros', []);
    const mesAct = Motor.fechaISO().slice(0, 7);
    const dAnt = new Date(); dAnt.setMonth(dAnt.getMonth() - 1);
    const mesAnt = Motor.fechaISO(dAnt).slice(0, 7);
    const gastosMes = registros.filter((r) => r.tipo === 'gasto' && r.valor && mesDe(r.fecha) === mesAct);
    const gastosMesAnt = registros.filter((r) => r.tipo === 'gasto' && r.valor && mesDe(r.fecha) === mesAnt);
    const ingresosMes = registros.filter((r) => r.tipo === 'ingreso' && r.valor && mesDe(r.fecha) === mesAct);
    const fijos = Store.leer('gastos-fijos', []);

    const totalGastos = gastosMes.reduce((s, r) => s + Number(r.valor.monto || 0), 0);
    const totalGastosAnt = gastosMesAnt.reduce((s, r) => s + Number(r.valor.monto || 0), 0);
    const totalIngresos = ingresosMes.reduce((s, r) => s + Number(r.valor.monto || 0), 0);
    const totalFijos = fijos.reduce((s, f) => s + f.monto, 0);
    const balance = totalIngresos - totalGastos - totalFijos;
    const ritmoDiario = Math.round(totalGastos / Math.max(1, new Date().getDate()));
    const proyeccion = ritmoDiario * 30;
    const hayDatos = gastosMes.length > 0 || ingresosMes.length > 0;
    const nombreMes = new Intl.DateTimeFormat('es-AR', { month: 'long' }).format(new Date());

    let html = '';

    // ============ 1 · BALANCE GIGANTE ============
    html += '<div class="p-hero">' +
      '<p class="p-hero-lbl">Balance de ' + nombreMes + '</p>' +
      (hayDatos || totalFijos > 0
        ? '<p class="p-hero-num" style="color:' + (balance >= 0 ? 'var(--verde)' : 'var(--cuerpo)') + ';">' +
          (balance >= 0 ? '+' : '−') + pesos(Math.abs(balance)).slice(1) + '</p>' +
          '<p class="p-hero-sub">' + pesos(totalIngresos) + ' in · ' + pesos(totalGastos) + ' out · ' + pesos(totalFijos) + ' fijos</p>'
        : '<p class="p-hero-num" style="color:var(--texto-3);">—</p>' +
          '<p class="p-hero-sub">Mes en blanco: arrancá con el primer movimiento</p>') +
      '</div>';

    // ============ 2 · ACCIONES RÁPIDAS ============
    html += '<div class="qa-fila">' +
      '<button class="qa" data-abrir-registro="gasto"><span>' + Iconos.get('compras', 22) + '</span>Gasto</button>' +
      '<button class="qa" data-abrir-registro="ingreso"><span>' + Iconos.get('progreso', 22) + '</span>Ingreso</button>' +
      '<button class="qa" id="qa-aporte"><span>' + Iconos.get('energia', 22) + '</span>Aporte</button>' +
      '</div>';

    // ============ 3 · FONDO BRASIL con anillo ============
    html += '<div class="tarjeta p-brasil">' +
      '<div style="display:flex; align-items:center; gap:15px;">' +
      anillo(pct, 68) +
      '<div style="flex:1; min-width:0;">' +
      '<p class="p-k">Fondo Brasil · enero 2027</p>' +
      '<p class="p-v">' + usd(aportado) + ' <span>/ ' + meta.toLocaleString('es-AR') + '</span></p>' +
      '<p class="p-s">' + (falta > 0 ? usd(porMes) + '/mes × ' + mesesRestantes + ' meses y llegás' : '¡Llegaste! Brasil pagado.') + '</p>' +
      '</div></div>' +
      '<div class="registro-fila" style="border:none; padding:13px 0 0; gap:8px;">' +
      '<input type="text" inputmode="numeric" id="aporte-monto" placeholder="Aporte del mes (USD)">' +
      '<button class="btn btn-primario" id="btn-aporte">Sumar</button>' +
      '<button class="btn-mini" id="btn-meta" style="flex:none; min-width:60px;">' + (editandoMeta ? 'Cerrar' : 'Meta') + '</button>' +
      '</div>' +
      (editandoMeta
        ? '<div class="registro-fila" style="border:none; padding:8px 0 0;">' +
          '<input type="text" inputmode="numeric" id="meta-monto" placeholder="Nueva meta (USD)" value="' + meta + '">' +
          '<button class="btn btn-secundario" id="btn-meta-guardar">Guardar</button></div>'
        : '') +
      '</div>';

    if (hayDatos) {
      // ============ 4 · TRÍO DE CONTEXTO ============
      html += '<div class="stats tres" style="margin-top:12px;">' +
        '<div class="stat pc-plata"><p class="s-label">' + Iconos.get('plata', 12) + 'Gastado</p>' +
        '<p class="s-valor" style="font-size:17px;">' + pesos(totalGastos) + '</p>' +
        '<p class="s-sub">' + (totalGastosAnt > 0
          ? (totalGastos <= totalGastosAnt ? '−' : '+') + Math.abs(Math.round((totalGastos / totalGastosAnt - 1) * 100)) + '% vs ' + new Intl.DateTimeFormat('es-AR', { month: 'short' }).format(dAnt)
          : gastosMes.length + ' movimientos') + '</p></div>' +
        '<div class="stat pc-plata"><p class="s-label">' + Iconos.get('reloj', 12) + 'Por día</p>' +
        '<p class="s-valor" style="font-size:17px;">' + pesos(ritmoDiario) + '</p>' +
        '<p class="s-sub">≈' + pesos(proyeccion) + ' al 30</p></div>' +
        '<div class="stat pc-plata"><p class="s-label">' + Iconos.get('progreso', 12) + 'Ingresos</p>' +
        '<p class="s-valor" style="font-size:17px;">' + pesos(totalIngresos) + '</p>' +
        '<p class="s-sub">' + (ingresosMes.length || 0) + ' este mes</p></div>' +
        '</div>';

      // ============ 5 · DONA DE CATEGORÍAS ============
      if (gastosMes.length > 0) {
        const porCat = {};
        gastosMes.forEach((r) => {
          const cat = r.valor.categoria || 'Otro';
          porCat[cat] = (porCat[cat] || 0) + Number(r.valor.monto || 0);
        });
        let entradas = Object.entries(porCat).sort((a, b) => b[1] - a[1]).map(([cat, monto]) => ({ cat, monto }));
        if (entradas.length > 5) {
          const resto = entradas.slice(4).reduce((s, e) => s + e.monto, 0);
          entradas = entradas.slice(0, 4).concat([{ cat: 'Otras', monto: resto }]);
        }
        entradas.forEach((e, i) => { e.color = COLORES_DONA[i % COLORES_DONA.length]; });

        html += '<p class="filtro-caption" style="margin-top:20px;">A dónde se fue</p>' +
          '<div class="tarjeta" style="display:flex; align-items:center; gap:16px;">' +
          dona(entradas, totalGastos) +
          '<div style="flex:1; min-width:0;">' +
          entradas.map((e) =>
            '<div class="ley"><i style="background:' + e.color + ';"></i>' +
            '<span style="min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">' + esc(e.cat) + '</span>' +
            '<span class="m">' + pesos(e.monto) + ' <small>' + Math.round(e.monto / totalGastos * 100) + '%</small></span></div>').join('') +
          '</div></div>';
      }
    } else {
      html += '<div class="tarjeta" style="margin-top:12px; display:flex; gap:13px; align-items:flex-start;">' +
        '<span style="flex:none; width:42px; height:42px; border-radius:12px; display:grid; place-items:center; color:var(--plata); background:var(--plata-tenue);">' + Iconos.get('plata', 20) + '</span>' +
        '<div><p style="font-size:15px; font-weight:600; margin:0 0 3px;">Todo listo para arrancar.</p>' +
        '<p style="margin:0;">Con el primer gasto o ingreso aparecen el balance, la dona de categorías y el ritmo diario.</p></div></div>';
    }

    // ============ 6 · FIJOS ============
    html += '<p class="filtro-caption" style="margin-top:20px;">Fijos mensuales' + (totalFijos > 0 ? ' · ' + pesos(totalFijos) : '') + '</p>' +
      '<div class="tarjeta">';
    if (fijos.length === 0) {
      html += '<p style="margin-bottom:10px; font-size:14px;">Alquiler, expensas, servicios. Se cargan una vez y entran al balance solos.</p>';
    } else {
      fijos.forEach((f) => {
        html += '<div class="fila-dato" style="padding:9px 0;"><span style="font-size:14.5px;">' + esc(f.nombre) + '</span>' +
          '<span style="display:flex; align-items:center; gap:8px;"><span class="valor">' + pesos(f.monto) + '</span>' +
          '<button class="btn-borrar" data-borrar-fijo="' + f.id + '" aria-label="Borrar fijo">&#215;</button></span></div>';
      });
    }
    html += '<div class="registro-fila" style="border:none;">' +
      '<input type="text" id="fijo-nombre" placeholder="Nombre (ej: Expensas)">' +
      '<input type="text" inputmode="numeric" id="fijo-monto" placeholder="$" class="precio-input">' +
      '<button class="btn btn-secundario" id="btn-agregar-fijo">Sumar</button></div>' +
      '</div>';

    // ============ 7 · EXTRACTO ============
    const movimientos = registros
      .filter((r) => (r.tipo === 'gasto' || r.tipo === 'ingreso') && r.valor)
      .map((r) => ({ fecha: r.fecha, tipo: r.tipo, monto: r.valor.monto, detalle: r.tipo === 'gasto' ? r.valor.categoria : r.valor.origen }))
      .concat(aportes.map((a) => ({ fecha: a.fecha, tipo: 'aporte', monto: a.monto, detalle: 'Fondo Brasil' })))
      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
      .slice(0, 10);

    if (movimientos.length > 0) {
      html += '<p class="filtro-caption" style="margin-top:20px;">Movimientos</p><div class="tarjeta" style="padding:6px 16px;">';
      movimientos.forEach((m) => {
        const f = new Date(m.fecha);
        const fecha = String(f.getDate()).padStart(2, '0') + '/' + String(f.getMonth() + 1).padStart(2, '0');
        const conf = m.tipo === 'ingreso'
          ? { color: 'var(--verde)', signo: '+ ', txt: pesos(m.monto) }
          : m.tipo === 'aporte'
            ? { color: 'var(--plata)', signo: '★ ', txt: usd(m.monto) }
            : { color: 'var(--texto-2)', signo: '− ', txt: pesos(m.monto) };
        html += '<div class="fila-dato" style="padding:10.5px 0;">' +
          '<span style="font-size:14px;"><span style="font-family:var(--mono); font-size:11.5px; color:var(--texto-3);">' + fecha + '</span>' +
          '&nbsp;&nbsp;' + esc(m.detalle || '') + '</span>' +
          '<span class="valor" style="color:' + conf.color + '; font-weight:700;">' + conf.signo + conf.txt + '</span></div>';
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

    document.getElementById('qa-aporte').addEventListener('click', () => {
      const input = document.getElementById('aporte-monto');
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => input.focus(), 350);
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
