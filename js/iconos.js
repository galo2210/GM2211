// NORTE · iconos — set de íconos de línea (SVG, currentColor) y mapeo pieza→ícono+pilar.
// Sin emojis como íconos (SISTEMA.md §7). Un solo lugar para toda la iconografía.

const Iconos = (() => {

  const SVG = {
    reloj: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 1.8"/>',
    gym: '<path d="M4 9v6M7 6.5v11M17 6.5v11M20 9v6M7 12h10"/>',
    comida: '<path d="M6 3v7M9 3v7M7.5 3v18M7.5 10a2.5 2.5 0 0 0 1.5-2.3V3M17 3c-1.4 0-2.2 2-2.2 5s.8 4 2.2 4.2V21"/>',
    movilidad: '<path d="M3 12h4l2.5-7 4 14 2.5-7H21"/>',
    compras: '<circle cx="9.5" cy="20" r="1.4"/><circle cx="17.5" cy="20" r="1.4"/><path d="M2.5 3.5H5l2.4 11.2a1.2 1.2 0 0 0 1.2 1h8.6a1.2 1.2 0 0 0 1.2-.95L21 7.5H6"/>',
    suplementos: '<circle cx="12" cy="12" r="8.5"/><path d="M6.5 12h11"/>',
    respirar: '<path d="M3 8.5h10a3 3 0 1 0-3-3M3 15.5h13a3 3 0 1 1-3 3M3 12h8"/>',
    aprender: '<path d="M12 6.5C10 5 6.5 5 4.5 6v12c2-1 5.5-1 7.5.5M12 6.5c2-1.5 5.5-1.5 7.5 0v12c-2-1-5.5-1-7.5.5M12 6.5V19"/>',
    foco: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
    plata: '<rect x="3" y="6" width="18" height="13" rx="2.2"/><path d="M3 10h18"/><circle cx="17" cy="14.5" r="1.3"/>',
    rutina: '<path d="M4 8h9M17 8h3M4 16h3M11 16h9"/><circle cx="15.5" cy="8" r="2"/><circle cx="9" cy="16" r="2"/>',
    ajustes: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M4.2 4.2l1.8 1.8M18 18l1.8 1.8M3 12h2.5M18.5 12H21M4.2 19.8L6 18M18 6l1.8-1.8"/>',
    sueno: '<path d="M20 13.5A8 8 0 1 1 10.5 4a6.2 6.2 0 0 0 9.5 9.5Z"/>',
    pasos: '<path d="M8.5 4.5c-1.3 1.8-1.3 5 0 7 .6 1 .6 2.6.2 4.2M8.5 20c-1.5 0-2.5-.8-2.3-2.3M15.5 8c1.3 1.8 1.3 4.4 0 7-.5 1-.5 2.6-.1 4.2M15.5 21c1.5 0 2.5-.8 2.3-2.3"/>',
    biblioteca: '<path d="M5 4h4v16H5zM11 4h4v16h-4z"/><path d="M17 5l3 .8-3 14.4"/>',
    tuyo: '<rect x="4" y="4" width="16" height="16" rx="2.2"/><path d="M8 9.5h8M8 13h5"/>',
    progreso: '<path d="M4 16.5V12M9 16.5V7.5M14 16.5v-6M19 16.5v-11"/>',
    mas: '<path d="M12 5.5v13M5.5 12h13"/>',
    check: '<path d="M4.5 12.5L9.5 17.5L19.5 6.5"/>',
    cerrar: '<path d="M6 6l12 12M18 6L6 18"/>',
    flecha: '<path d="M9 5l7 7-7 7"/>',
    volver: '<path d="M15 5l-7 7 7 7"/>',
    energia: '<path d="M13 3L5 13.5h5.5L9 21l8-11h-5.5z"/>',
    cuerpo: '<circle cx="12" cy="7.5" r="3.8"/><path d="M5.5 20c0-3.2 2.9-5.5 6.5-5.5s6.5 2.3 6.5 5.5"/>',
    cabeza: '<path d="M9.5 18h5M10.5 21h3M12 3a6 6 0 0 0-3.8 10.6c.7.6 1.1 1.5 1.2 2.4h5.2c.1-.9.5-1.8 1.2-2.4A6 6 0 0 0 12 3Z"/>',
    sistema: '<path d="M12 3l8.5 4.7L12 12.4 3.5 7.7 12 3Z"/><path d="M3.5 12.3L12 17l8.5-4.7"/>',
    punto: '<circle cx="12" cy="12" r="3.4" fill="currentColor" stroke="none"/>'
  };

  function get(nombre, size = 22, sw = 1.8) {
    const inner = SVG[nombre] || SVG.punto;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" ' +
      'stroke="currentColor" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      inner + '</svg>';
  }

  // Mapeo pieza del día → ícono + pilar (para HOY).
  const MAPA = {
    'gym-empuje': ['gym', 'cuerpo'], 'gym-tiron': ['gym', 'cuerpo'],
    'gym-mixto': ['gym', 'cuerpo'], 'gym-pierna': ['gym', 'cuerpo'],
    'desayuno': ['comida', 'cuerpo'], 'almuerzo': ['comida', 'cuerpo'],
    'cena': ['comida', 'cuerpo'], 'post-gym': ['comida', 'cuerpo'], 'tarrito-avena': ['comida', 'cuerpo'],
    'creatina': ['suplementos', 'cuerpo'], 'esclerovitan': ['suplementos', 'cuerpo'], 'magnesio-placa': ['suplementos', 'cuerpo'],
    'movilidad-activar': ['movilidad', 'cuerpo'], 'drenaje': ['movilidad', 'cuerpo'],
    'casa-cuello': ['movilidad', 'cuerpo'], 'pausas-oficina': ['movilidad', 'cuerpo'],
    'pasos': ['pasos', 'cuerpo'], 'pasos-meta-alta': ['pasos', 'cuerpo'], 'pasos-meta-base': ['pasos', 'cuerpo'],
    'foco': ['foco', 'cabeza'], 'aprender': ['aprender', 'cabeza'], 'respiracion': ['respirar', 'cabeza'],
    'foco-negocio': ['plata', 'plata']
  };

  function dePieza(ref) {
    const m = MAPA[ref];
    return m ? { icono: m[0], pilar: m[1] } : { icono: 'punto', pilar: 'sistema' };
  }

  return { get, dePieza };
})();
