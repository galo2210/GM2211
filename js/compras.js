// NORTE · módulo COMPRAS — listas editables, secciones, "ya tengo",
// contador de gasto en vivo, presupuesto quincenal e historial de precios.

const Compras = (() => {

  const SECCIONES = ['Proteínas', 'Verdulería', 'Lácteos', 'Almacén', 'Permitidos', 'Otro'];
  const PRESUPUESTO_DEFECTO = 300000; // ~$300.000 ARS cada 2 semanas (SISTEMA.md §4.2)

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function pesos(n) {
    return '$' + Number(n).toLocaleString('es-AR');
  }

  // Adivina la sección por palabras clave del ingrediente.
  function seccionDe(texto) {
    const t = texto.toLowerCase();
    if (/pollo|carne|roast|milanesa|atún|atun|huevo|jamón|jamon|picada/.test(t)) return 'Proteínas';
    if (/leche|queso|crema|manteca|yogur|finlandia|whey/.test(t)) return 'Lácteos';
    if (/banana|kiwi|frutos|papine|cebolla|morrón|morron|palta|zanahoria|verde|portobello|arándano|arandano/.test(t)) return 'Verdulería';
    if (/franui|gomita|galletita|chocolate/.test(t)) return 'Permitidos';
    return 'Almacén';
  }

  function listas() { return Store.leer('compras-listas', []); }
  function guardarListas(l) { Store.guardar('compras-listas', l); }

  function listaActiva() {
    const todas = listas();
    if (todas.length === 0) {
      const nueva = { id: Store.nuevoId(), nombre: 'Súper', items: [] };
      guardarListas([nueva]);
      Store.guardar('compras-activa', nueva.id);
      return nueva;
    }
    const id = Store.leer('compras-activa');
    return todas.find((l) => l.id === id) || todas[0];
  }

  function precioConocido(texto) {
    const precios = Store.leer('compras-precios', {});
    return precios[texto.trim().toLowerCase()] || null;
  }

  function recordarPrecio(texto, precio) {
    const precios = Store.leer('compras-precios', {});
    precios[texto.trim().toLowerCase()] = precio;
    Store.guardar('compras-precios', precios);
  }

  function render() {
    const cont = document.getElementById('compras-contenido');
    const lista = listaActiva();
    const todas = listas();
    const presupuesto = Store.leer('compras-presupuesto', PRESUPUESTO_DEFECTO);
    const gastado = lista.items.reduce((s, it) => s + (it.tengo && it.precio ? it.precio : 0), 0);

    let html = '';

    // Selector de listas
    html += '<div class="chips">';
    todas.forEach((l) => {
      html += '<button class="chip' + (l.id === lista.id ? ' activo' : '') + '" data-lista="' + l.id + '">' + esc(l.nombre) + '</button>';
    });
    html += '<button class="chip" id="btn-nueva-lista">+ Lista</button></div>';

    // Presupuesto y gasto en vivo
    html += '<div class="tarjeta">' +
      '<div class="fila-dato"><span>Gastado (marcado ✓ con precio)</span><span class="valor">' + pesos(gastado) + '</span></div>' +
      '<div class="fila-dato"><span>Presupuesto quincenal</span><span class="valor" id="txt-presupuesto">' + pesos(presupuesto) + '</span></div>' +
      '<div class="fila-dato"><span>' + (gastado <= presupuesto ? 'Te queda' : 'Te pasaste') + '</span>' +
      '<span class="valor" style="color:' + (gastado <= presupuesto ? 'var(--verde)' : 'var(--acento)') + ';">' + pesos(Math.abs(presupuesto - gastado)) + '</span></div>' +
      '<div class="acciones-col"><button class="btn btn-secundario" id="btn-editar-presupuesto">Cambiar presupuesto</button></div>' +
      '</div>';

    // Armar desde recetas
    html += '<button class="cierre-card activo" id="btn-desde-recetas"><div class="cuerpo">' +
      '<p class="titulo">Armar desde recetas</p>' +
      '<p class="meta">Elegí los platos de la semana y la lista se arma sola</p></div></button>' +
      '<div id="panel-recetas" hidden></div>';

    // Agregar ítem
    html += '<div class="tarjeta"><div class="registro-fila">' +
      '<input type="text" id="item-texto" placeholder="Agregar (ej: Pollo 1kg)">' +
      '<button class="btn btn-primario" id="btn-agregar-item">Sumar</button></div></div>';

    // Ítems por sección
    if (lista.items.length === 0) {
      html += '<div class="tarjeta vacio"><p>Lista vacía. Sumá a mano o armala desde las recetas.</p></div>';
    } else {
      SECCIONES.forEach((sec) => {
        const items = lista.items.filter((it) => it.seccion === sec);
        if (items.length === 0) return;
        html += '<div class="bloque-cabecera" style="margin-top:12px;"><h3>' + sec + '</h3>' +
          '<span class="conteo">' + items.filter((i) => i.tengo).length + '/' + items.length + '</span></div>';
        items.forEach((it) => {
          const ultPrecio = precioConocido(it.texto);
          html += '<div class="pieza' + (it.tengo ? ' hecha' : '') + '" data-item="' + it.id + '">' +
            '<span class="estado" data-accion="tengo">' + (it.tengo ? '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' : '') + '</span>' +
            '<div class="cuerpo"><p class="titulo">' + esc(it.texto) + '</p>' +
            '<p class="meta">' + (it.precio ? pesos(it.precio) : (ultPrecio ? 'últ. vez ' + pesos(ultPrecio) : 'sin precio')) + '</p></div>' +
            '<input type="text" inputmode="numeric" class="precio-input" data-precio value="' + (it.precio || '') + '" placeholder="$" aria-label="Precio">' +
            '<button class="btn-borrar" data-accion="borrar" aria-label="Borrar">&#215;</button>' +
            '</div>';
        });
      });
      html += '<div class="tarjeta vacio" style="margin-top:12px;"><p>Si hay que recortar, el orden es: proteínas > verduras > carbos > permitidos.</p></div>';
    }

    cont.innerHTML = html;
    conectar(cont, lista);
  }

  function conectar(cont, lista) {
    cont.querySelectorAll('[data-lista]').forEach((b) => {
      b.addEventListener('click', () => {
        Store.guardar('compras-activa', b.dataset.lista);
        render();
      });
    });

    document.getElementById('btn-nueva-lista').addEventListener('click', () => {
      const nombre = prompt('Nombre de la lista (ej: Chino, Verdulería):');
      if (!nombre || !nombre.trim()) return;
      const todas = listas();
      const nueva = { id: Store.nuevoId(), nombre: nombre.trim(), items: [] };
      todas.push(nueva);
      guardarListas(todas);
      Store.guardar('compras-activa', nueva.id);
      render();
    });

    document.getElementById('btn-editar-presupuesto').addEventListener('click', () => {
      const v = prompt('Presupuesto quincenal en pesos:', String(Store.leer('compras-presupuesto', PRESUPUESTO_DEFECTO)));
      if (v === null) return;
      const n = parseInt(String(v).replace(/[^\d]/g, ''), 10);
      if (n > 0) { Store.guardar('compras-presupuesto', n); render(); }
    });

    document.getElementById('btn-agregar-item').addEventListener('click', () => {
      const input = document.getElementById('item-texto');
      const texto = String(input.value).trim();
      if (!texto) return;
      const todas = listas();
      const l = todas.find((x) => x.id === lista.id);
      l.items.push({ id: Store.nuevoId(), texto, seccion: seccionDe(texto), tengo: false, precio: null });
      guardarListas(todas);
      render();
    });

    // Armar desde recetas
    document.getElementById('btn-desde-recetas').addEventListener('click', () => {
      const panel = document.getElementById('panel-recetas');
      if (!panel.hidden) { panel.hidden = true; return; }
      let html = '<div class="tarjeta">';
      COMIDAS.cena.recetas.forEach((r, i) => {
        html += '<div class="fila-dato"><span>' + esc(r.nombre) + '</span>' +
          '<button class="interruptor" data-receta-check="cena-' + i + '" role="switch" aria-checked="false"><span></span></button></div>';
      });
      COMIDAS.almuerzo.recetas.forEach((r, i) => {
        html += '<div class="fila-dato"><span>' + esc(r.nombre) + '</span>' +
          '<button class="interruptor" data-receta-check="almuerzo-' + i + '" role="switch" aria-checked="false"><span></span></button></div>';
      });
      html += '<div class="acciones-col"><button class="btn btn-primario" id="btn-agregar-recetas">Agregar ingredientes a la lista</button></div></div>';
      panel.innerHTML = html;
      panel.hidden = false;

      panel.querySelectorAll('[data-receta-check]').forEach((b) => {
        b.addEventListener('click', () => {
          b.classList.toggle('prendido');
          b.setAttribute('aria-checked', b.classList.contains('prendido') ? 'true' : 'false');
        });
      });

      document.getElementById('btn-agregar-recetas').addEventListener('click', () => {
        const elegidas = Array.from(panel.querySelectorAll('.interruptor.prendido')).map((b) => b.dataset.recetaCheck);
        if (elegidas.length === 0) { alert('Elegí al menos un plato.'); return; }
        const todas = listas();
        const l = todas.find((x) => x.id === lista.id);
        elegidas.forEach((clave) => {
          const [grupo, idx] = clave.split('-');
          const receta = COMIDAS[grupo].recetas[Number(idx)];
          receta.ingredientes.forEach((ing) => {
            const yaEsta = l.items.some((it) => it.texto.toLowerCase() === ing.toLowerCase());
            if (!yaEsta) {
              l.items.push({ id: Store.nuevoId(), texto: ing, seccion: seccionDe(ing), tengo: false, precio: null });
            }
          });
        });
        guardarListas(todas);
        render();
      });
    });

    // Ítems
    cont.querySelectorAll('[data-item]').forEach((fila) => {
      const itemId = fila.dataset.item;

      fila.querySelector('[data-accion="tengo"]').addEventListener('click', () => {
        const todas = listas();
        const l = todas.find((x) => x.id === lista.id);
        const it = l.items.find((x) => x.id === itemId);
        it.tengo = !it.tengo;
        guardarListas(todas);
        render();
      });

      fila.querySelector('[data-accion="borrar"]').addEventListener('click', () => {
        const todas = listas();
        const l = todas.find((x) => x.id === lista.id);
        l.items = l.items.filter((x) => x.id !== itemId);
        guardarListas(todas);
        render();
      });

      fila.querySelector('[data-precio]').addEventListener('change', (e) => {
        const n = parseInt(String(e.target.value).replace(/[^\d]/g, ''), 10);
        const todas = listas();
        const l = todas.find((x) => x.id === lista.id);
        const it = l.items.find((x) => x.id === itemId);
        it.precio = n > 0 ? n : null;
        if (n > 0) recordarPrecio(it.texto, n);
        guardarListas(todas);
        render();
      });
    });
  }

  return { render };
})();
