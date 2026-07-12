// NORTE · store — ÚNICO módulo que toca localStorage (SISTEMA.md §8.3).
// Prohibido usar localStorage desde cualquier otro archivo.
// Todos los IDs son strings via nuevoId() (§8.2). Schema versionado + export/import (§8.4).

const Store = (() => {
  const PREFIJO = 'norte.';
  const SCHEMA_VERSION = 1;

  function clave(nombre) {
    return PREFIJO + nombre;
  }

  function leer(nombre, porDefecto = null) {
    try {
      const crudo = localStorage.getItem(clave(nombre));
      return crudo === null ? porDefecto : JSON.parse(crudo);
    } catch (e) {
      console.error('Store.leer falló para', nombre, e);
      return porDefecto;
    }
  }

  function guardar(nombre, valor) {
    localStorage.setItem(clave(nombre), JSON.stringify(valor));
  }

  function borrar(nombre) {
    localStorage.removeItem(clave(nombre));
  }

  function nuevoId() {
    return crypto.randomUUID();
  }

  function init() {
    if (leer('schema') === null) {
      guardar('schema', SCHEMA_VERSION);
      guardar('creado', new Date().toISOString());
    }
    // Acá vivirán las migraciones cuando SCHEMA_VERSION suba.
  }

  function exportar() {
    const datos = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIJO)) {
        try {
          datos[k] = JSON.parse(localStorage.getItem(k));
        } catch (e) {
          datos[k] = localStorage.getItem(k);
        }
      }
    }
    return JSON.stringify({
      app: 'NORTE',
      schema: SCHEMA_VERSION,
      version: VERSION,
      exportado: new Date().toISOString(),
      datos
    }, null, 2);
  }

  function importar(textoJson) {
    const paquete = JSON.parse(textoJson);
    if (paquete.app !== 'NORTE' || typeof paquete.datos !== 'object' || paquete.datos === null) {
      throw new Error('El archivo no es un backup de NORTE.');
    }
    if (paquete.schema > SCHEMA_VERSION) {
      throw new Error('El backup es de una versión más nueva de la app. Actualizá la app primero.');
    }
    // Limpia solo las claves propias y escribe las del backup.
    const propias = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIJO)) propias.push(k);
    }
    propias.forEach((k) => localStorage.removeItem(k));
    Object.entries(paquete.datos).forEach(([k, v]) => {
      if (k.startsWith(PREFIJO)) localStorage.setItem(k, JSON.stringify(v));
    });
    return Object.keys(paquete.datos).length;
  }

  return { leer, guardar, borrar, nuevoId, init, exportar, importar, SCHEMA_VERSION };
})();
