// NORTE · PROGRESO — lo que se mide con lo que Galo registra:
// peso (sparkline), fuerza por ejercicio, pasos de la semana, ánimo, sueño (+correlación) y Fondo Brasil.
// Gráficos en SVG puro, sin librerías.

const Progreso = (() => {

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function porTipo(tipo) {
    return Store.leer('registros', [])
      .filter((r) => r.tipo === tipo)
      .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  }

  function diaLocal(fechaIso) {
    return Motor.fechaISO(new Date(fechaIso));
  }

  // ---------- Gráficos SVG ----------
  function sparkline(valores, opciones = {}) {
    const w = 300, h = 54, pad = 4;
    const min = opciones.min !== undefined ? opciones.min : Math.min(...valores);
    const max = opciones.max !== undefined ? opciones.max : Math.max(...valores);
    const rango = (max - min) || 1;
    const puntos = valores.map((v, i) => {
      const x = pad + (i / Math.max(1, valores.length - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / rango) * (h - pad * 2);
      return x.toFixed(1) + ',' + y.toFixed(1);
    });
    const ultimo = puntos[puntos.length - 1].split(',');
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" style="width:100%; height:54px; display:block;">' +
      '<polyline points="' + puntos.join(' ') + '" fill="none" stroke="var(--acento)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' +
      '<circle cx="' + ultimo[0] + '" cy="' + ultimo[1] + '" r="3.5" fill="var(--acento)"/>' +
      '</svg>';
  }

  function barras(valores, etiquetas, meta) {
    const w = 300, h = 74, padB = 16;
    const max = Math.max(...valores, meta || 0, 1);
    const anchoBarra = (w / valores.length) - 8;
    let svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" style="width:100%; height:74px; display:block;">';
    if (meta) {
      const yMeta = (h - padB) - (meta / max) * (h - padB - 4);
      svg += '<line x1="0" y1="' + yMeta.toFixed(1) + '" x2="' + w + '" y2="' + yMeta.toFixed(1) + '" stroke="var(--borde)" stroke-width="1" stroke-dasharray="4 3"/>';
    }
    valores.forEach((v, i) => {
      const x = i * (w / valores.length) + 4;
      const alto = v > 0 ? Math.max(2, (v / max) * (h - padB - 4)) : 0;
      const y = (h - padB) - alto;
      svg += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + anchoBarra.toFixed(1) + '" height="' + alto.toFixed(1) + '" rx="3" fill="' + (v > 0 ? 'var(--acento)' : 'var(--superficie-2)') + '"/>';
      svg += '<text x="' + (x + anchoBarra / 2).toFixed(1) + '" y="' + (h - 3) + '" text-anchor="middle" font-size="10" font-family="var(--mono)" fill="var(--texto-3)">' + etiquetas[i] + '</text>';
    });
    return svg + '</svg>';
  }

  // ---------- Render ----------
  function render() {
    const cont = document.getElementById('progreso-lista');
    const registros = Store.leer('registros', []);
    let html = '';

    // Comida de hoy
    const iso = Motor.fechaISO();
    const comidasHoy = registros.filter((r) => r.tipo === 'comida' && diaLocal(r.fecha) === iso);
    if (comidasHoy.length > 0) {
      const kcal = comidasHoy.reduce((s, r) => s + (r.valor.kcal || 0), 0);
      const prot = comidasHoy.reduce((s, r) => s + (r.valor.prot || 0), 0);
      html += '<div class="tarjeta"><h2>Comida de hoy</h2>' +
        '<div class="fila-dato"><span>Calorías</span><span class="valor">' + kcal + ' / ~2.050</span></div>' +
        '<div class="fila-dato"><span>Proteína</span><span class="valor">' + prot + ' / 140g+</span></div></div>';
    }

    // Peso
    const pesos = porTipo('peso');
    html += '<div class="tarjeta"><h2>Peso</h2>';
    if (pesos.length >= 2) {
      const vals = pesos.slice(-30).map((r) => r.valor);
      const delta = (vals[vals.length - 1] - vals[0]).toFixed(1);
      html += sparkline(vals) +
        '<div class="fila-dato"><span>' + vals[0] + ' kg → <strong>' + vals[vals.length - 1] + ' kg</strong></span>' +
        '<span class="valor" style="color:var(--texto-2);">' + (delta > 0 ? '+' : '') + delta + ' kg</span></div>';
    } else {
      html += '<p>Dos pesajes y acá aparece la línea. Mismo momento del día, dato comparable.</p>';
    }
    html += '</div>';

    // Pasos de la semana
    const pasos = porTipo('pasos');
    html += '<div class="tarjeta"><h2>Pasos · últimos 7 días</h2>';
    if (pasos.length > 0) {
      const dias = [];
      const etiquetas = [];
      const LETRAS = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
      for (let i = 6; i >= 0; i--) {
        const f = new Date(Date.now() - i * 86400000);
        const isoDia = Motor.fechaISO(f);
        const delDia = pasos.filter((r) => diaLocal(r.fecha) === isoDia).map((r) => r.valor);
        dias.push(delDia.length ? Math.max(...delDia) : 0);
        etiquetas.push(LETRAS[f.getDay()]);
      }
      html += barras(dias, etiquetas, 10000) +
        '<p class="mono" style="margin-top:6px;">La línea punteada es la meta de 10.000.</p>';
    } else {
      html += '<p>Cargá los pasos de la app Salud con el (+) y acá se dibuja la semana.</p>';
    }
    html += '</div>';

    // Ánimo
    const animos = porTipo('animo');
    html += '<div class="tarjeta"><h2>Ánimo</h2>';
    if (animos.length >= 2) {
      const vals = animos.slice(-14).map((r) => r.valor);
      const prom = (vals.reduce((s, v) => s + v, 0) / vals.length).toFixed(1);
      html += sparkline(vals, { min: 1, max: 5 }) +
        '<div class="fila-dato"><span>Promedio últimos ' + vals.length + '</span><span class="valor">' + prom + ' / 5</span></div>';
    } else {
      html += '<p>El cierre lo pregunta cada noche. En unos días esta línea empieza a contar tu historia.</p>';
    }
    html += '</div>';

    // Sueño + correlación con ánimo
    const suenos = porTipo('sueno');
    html += '<div class="tarjeta"><h2>Sueño</h2>';
    if (suenos.length >= 2) {
      const vals = suenos.slice(-14).map((r) => r.valor);
      html += sparkline(vals, { min: 4, max: 10 });
      // Correlación simple: ánimo promedio según horas dormidas ese día
      const conAmbos = suenos.map((s) => {
        const dia = diaLocal(s.fecha);
        const animoDia = animos.filter((a) => diaLocal(a.fecha) === dia);
        return animoDia.length ? { horas: s.valor, animo: animoDia[animoDia.length - 1].valor } : null;
      }).filter(Boolean);
      const bien = conAmbos.filter((x) => x.horas >= 7);
      const mal = conAmbos.filter((x) => x.horas < 7);
      if (bien.length >= 3 && mal.length >= 3) {
        const pb = (bien.reduce((s, x) => s + x.animo, 0) / bien.length).toFixed(1);
        const pm = (mal.reduce((s, x) => s + x.animo, 0) / mal.length).toFixed(1);
        html += '<div class="fila-dato"><span>Ánimo con 7+ hs dormidas</span><span class="valor">' + pb + ' / 5</span></div>' +
          '<div class="fila-dato"><span>Ánimo con menos de 7</span><span class="valor">' + pm + ' / 5</span></div>';
      } else {
        html += '<p style="margin-top:6px;">Con unas semanas de datos, acá aparece TU correlación sueño-energía. Con datos tuyos, no de un paper.</p>';
      }
    } else {
      html += '<p>Un toque cada mañana. La correlación con tu energía se arma sola.</p>';
    }
    html += '</div>';

    // Fuerza por ejercicio
    const historial = Store.leer('gym-historial', []);
    html += '<div class="tarjeta"><h2>Fuerza</h2>';
    const porEjercicio = {};
    historial.forEach((h) => {
      porEjercicio[h.ejercicioId] = porEjercicio[h.ejercicioId] || [];
      porEjercicio[h.ejercicioId].push(h);
    });
    const conProgreso = Object.entries(porEjercicio).filter(([, marcas]) => marcas.length >= 2);
    if (conProgreso.length > 0) {
      conProgreso.slice(0, 6).forEach(([ejId, marcas]) => {
        const nombre = nombreEjercicio(ejId);
        const primera = marcas[0];
        const ultima = marcas[marcas.length - 1];
        html += '<div class="fila-dato"><span>' + esc(nombre) + '</span>' +
          '<span class="valor">' + primera.peso + 'kg → <strong>' + ultima.peso + 'kg×' + ultima.reps + '</strong></span></div>';
      });
    } else {
      html += '<p>Anotá los pesos en cada sesión y acá ves cómo suben. La memoria miente; el dato no.</p>';
    }
    html += '</div>';

    // Fondo Brasil
    const meta = Store.leer('brasil-meta', 3500);
    const aportado = 1000 + Store.leer('brasil-aportes', []).reduce((s, a) => s + a.monto, 0);
    const pct = Math.min(100, Math.round((aportado / meta) * 100));
    html += '<button class="tarjeta" data-ir-plata style="width:100%; text-align:left; font-family:inherit; cursor:pointer;"><h2>Fondo Brasil</h2>' +
      '<div class="barra"><div style="width:' + pct + '%;"></div></div>' +
      '<div class="fila-dato"><span>USD ' + aportado.toLocaleString('es-AR') + ' de ' + meta.toLocaleString('es-AR') + '</span><span class="valor">' + pct + '%</span></div>' +
      '</button>';

    // Últimos registros
    const ETIQUETA = {
      peso: 'Peso', pasos: 'Pasos', animo: 'Ánimo', sueno: 'Sueño',
      marihuana: 'Marihuana', gasto: 'Gasto', comida: 'Comida', diario: 'Diario', ingreso: 'Ingreso'
    };
    const MARI = { 0: 'Nada', 0.5: 'Medio', 1: 'Entero' };
    const ultimos = registros.slice(-12).reverse();
    if (ultimos.length > 0) {
      html += '<div class="bloque-cabecera" style="margin-top:8px;"><h3>Últimos registros</h3></div><div class="tarjeta">';
      ultimos.forEach((r) => {
        const f = new Date(r.fecha);
        const fecha = String(f.getDate()).padStart(2, '0') + '/' + String(f.getMonth() + 1).padStart(2, '0');
        let valor = String(r.valor);
        if (r.tipo === 'peso') valor += ' kg';
        if (r.tipo === 'animo') valor += ' / 5';
        if (r.tipo === 'sueno') valor += ' hs';
        if (r.tipo === 'marihuana') valor = typeof r.valor === 'object' ? (MARI[r.valor.cantidad] || '') + ' · ' + r.valor.como : (MARI[r.valor] !== undefined ? MARI[r.valor] : valor);
        if (r.tipo === 'gasto' && typeof r.valor === 'object') valor = '$' + Number(r.valor.monto).toLocaleString('es-AR') + ' · ' + r.valor.categoria;
        if (r.tipo === 'ingreso' && typeof r.valor === 'object') valor = '$' + Number(r.valor.monto).toLocaleString('es-AR') + ' · ' + r.valor.origen;
        if (r.tipo === 'comida' && typeof r.valor === 'object') valor = r.valor.nombre + ' · ' + r.valor.kcal + ' kcal';
        if (r.tipo === 'diario' && typeof r.valor === 'object') valor = '"' + r.valor.respuesta + '"';
        html += '<div class="fila-dato"><span>' + fecha + ' · ' + (ETIQUETA[r.tipo] || r.tipo) + '</span>' +
          '<span class="valor">' + esc(valor) + '</span></div>';
      });
      html += '</div>';
    } else {
      html += '<div class="tarjeta vacio"><p>Todavía no registraste nada. Con el (+) arranca todo: cada dato que cargás construye estos gráficos.</p></div>';
    }

    cont.innerHTML = html;
    const btnPlata = cont.querySelector('[data-ir-plata]');
    if (btnPlata) btnPlata.addEventListener('click', () => { location.hash = '#/plata'; });
  }

  function nombreEjercicio(ejId) {
    for (const ref of Object.keys(GYM_SESIONES)) {
      const ej = GYM_SESIONES[ref].ejercicios.find((x) => x.id === ejId);
      if (ej) return ej.nombre;
    }
    return ejId;
  }

  return { render };
})();
