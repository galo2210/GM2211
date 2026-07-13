// NORTE · base de alimentos — lo que Galo come de verdad, con macros por porción típica.
// Platos = sus combos armados. Sueltos = para componer. Valores aproximados, sirven para la tendencia.

const ALIMENTOS = [

  // ---------- Platos de su plan ----------
  { id: 'tarrito-avena', nombre: 'Tarrito de avena completo', porcion: '1 tarrito', kcal: 550, prot: 30, cat: 'Platos' },
  { id: 'licuado-postgym', nombre: 'Licuado whey + banana', porcion: '1 vaso grande', kcal: 400, prot: 35, cat: 'Platos' },
  { id: 'wrap-jamon-queso', nombre: 'Wrap jamón, queso y palta', porcion: '1 wrap', kcal: 500, prot: 40, cat: 'Platos' },
  { id: 'tupper-atun', nombre: 'Tupper atún, huevo y arroz', porcion: '1 tupper', kcal: 500, prot: 40, cat: 'Platos' },
  { id: 'yogur-proteico-combo', nombre: 'Yogur Ser Pro + maní + kiwi', porcion: '1 combo', kcal: 450, prot: 35, cat: 'Platos' },
  { id: 'pollo-crema', nombre: 'Pollo a la crema c/ portobellos y arroz', porcion: '1 porción', kcal: 650, prot: 50, cat: 'Platos' },
  { id: 'roastbeef-pure', nombre: 'Roast beef con puré de papines', porcion: '1 porción', kcal: 650, prot: 50, cat: 'Platos' },
  { id: 'milanesa-papines', nombre: 'Milanesa al horno + papines', porcion: '1 plato', kcal: 700, prot: 45, cat: 'Platos' },
  { id: 'fideos-bolonesa', nombre: 'Fideos con boloñesa', porcion: '1 plato', kcal: 650, prot: 45, cat: 'Platos' },
  { id: 'omelette-gigante', nombre: 'Omelette gigante 4 huevos', porcion: '1 omelette', kcal: 550, prot: 40, cat: 'Platos' },

  // ---------- Proteínas ----------
  { id: 'whey', nombre: 'Whey (scoop)', porcion: '1 scoop', kcal: 120, prot: 24, cat: 'Proteínas' },
  { id: 'huevo', nombre: 'Huevo', porcion: '1 unidad', kcal: 75, prot: 6, cat: 'Proteínas' },
  { id: 'pechuga', nombre: 'Pechuga a la plancha', porcion: '150g', kcal: 250, prot: 46, cat: 'Proteínas' },
  { id: 'atun-lata', nombre: 'Atún en lata', porcion: '1 lata', kcal: 150, prot: 30, cat: 'Proteínas' },
  { id: 'carne-picada', nombre: 'Carne picada cocida', porcion: '150g', kcal: 330, prot: 32, cat: 'Proteínas' },
  { id: 'jamon-cocido', nombre: 'Jamón cocido', porcion: '2 fetas', kcal: 60, prot: 9, cat: 'Proteínas' },
  { id: 'queso-fetas', nombre: 'Queso en fetas', porcion: '2 fetas', kcal: 130, prot: 9, cat: 'Proteínas' },

  // ---------- Lácteos y desayuno ----------
  { id: 'leche-protein', nombre: 'Leche protein', porcion: '200ml', kcal: 90, prot: 8, cat: 'Lácteos' },
  { id: 'cafe-con-leche', nombre: 'Café con leche', porcion: '1 taza', kcal: 80, prot: 5, cat: 'Lácteos' },
  { id: 'yogur-ser-pro', nombre: 'Yogur Ser Pro', porcion: '1 pote', kcal: 120, prot: 15, cat: 'Lácteos' },
  { id: 'yogur-griego', nombre: 'Yogur griego', porcion: '1 pote', kcal: 150, prot: 8, cat: 'Lácteos' },
  { id: 'avena', nombre: 'Avena', porcion: '40g', kcal: 150, prot: 5, cat: 'Almacén' },

  // ---------- Carbos ----------
  { id: 'arroz-cocido', nombre: 'Arroz cocido', porcion: '1 taza', kcal: 200, prot: 4, cat: 'Carbos' },
  { id: 'fideos-cocidos', nombre: 'Fideos cocidos', porcion: '1 plato', kcal: 350, prot: 12, cat: 'Carbos' },
  { id: 'papines', nombre: 'Papines', porcion: '300g', kcal: 240, prot: 6, cat: 'Carbos' },
  { id: 'pan', nombre: 'Pan', porcion: '2 rebanadas', kcal: 160, prot: 6, cat: 'Carbos' },
  { id: 'tortilla-wrap', nombre: 'Tortilla de wrap', porcion: '1 unidad', kcal: 150, prot: 4, cat: 'Carbos' },
  { id: 'galletas-arroz', nombre: 'Galletas de arroz', porcion: '3 unidades', kcal: 105, prot: 2, cat: 'Carbos' },

  // ---------- Frutas y grasas buenas ----------
  { id: 'banana', nombre: 'Banana', porcion: '1 unidad', kcal: 105, prot: 1, cat: 'Frutas' },
  { id: 'kiwi', nombre: 'Kiwi', porcion: '1 unidad', kcal: 45, prot: 1, cat: 'Frutas' },
  { id: 'frutos-rojos', nombre: 'Frutos rojos congelados', porcion: '100g', kcal: 50, prot: 1, cat: 'Frutas' },
  { id: 'palta', nombre: 'Palta', porcion: '1/2 unidad', kcal: 160, prot: 2, cat: 'Grasas buenas' },
  { id: 'mani', nombre: 'Maní', porcion: '1 puñado (30g)', kcal: 170, prot: 8, cat: 'Grasas buenas' },
  { id: 'aceite-oliva', nombre: 'Aceite de oliva', porcion: '1 cda', kcal: 120, prot: 0, cat: 'Grasas buenas' },
  { id: 'manteca', nombre: 'Manteca', porcion: '10g', kcal: 75, prot: 0, cat: 'Grasas buenas' },
  { id: 'miel', nombre: 'Miel', porcion: '1 cda', kcal: 65, prot: 0, cat: 'Almacén' },
  { id: 'queso-finlandia', nombre: 'Finlandia', porcion: '1 cda', kcal: 70, prot: 2, cat: 'Lácteos' },

  // ---------- Permitidos (80/20, medidos, tarde-noche) ----------
  { id: 'chocolate-80', nombre: 'Chocolate 80%', porcion: '2 cuadraditos', kcal: 110, prot: 2, cat: 'Permitidos' },
  { id: 'franui', nombre: 'Franui', porcion: '1/2 caja', kcal: 180, prot: 2, cat: 'Permitidos' },
  { id: 'gomitas', nombre: 'Gomitas', porcion: '1 puñado', kcal: 140, prot: 0, cat: 'Permitidos' },
  { id: 'galletitas', nombre: 'Galletitas', porcion: '3 unidades', kcal: 150, prot: 2, cat: 'Permitidos' },
  { id: 'arandanos', nombre: 'Arándanos', porcion: '100g', kcal: 55, prot: 1, cat: 'Frutas' }
];
