// NORTE · contenido COMIDA v2 — recetas reescritas de raíz (16/07/2026).
// Esquema por receta: datos (tiempo/activo/rinde) · ingredientes con cantidades ·
// pasos ({t, d, tip}) con señales de cocina · claves · sustituciones ({falta, usa}) ·
// dudas ({q, a}) · guardar (conservación y recalentado) · porque. Nada acá toca el store.

// Suplementos: los que tiene, con timing (SISTEMA.md §4.3). Consultables y buscables.
const SUPLEMENTOS = [
  { nombre: 'Creatina monohidrato', timing: '5g TODOS los días, cualquier hora', porque: 'La más importante. Constancia > timing: funciona por saturación.' },
  { nombre: 'Whey', timing: 'Post-gym o para completar proteína', porque: 'Proteína rápida y barata por gramo. El desayuno y el post-gym viven de ella.' },
  { nombre: 'Fish oil 2000mg', timing: '2 cápsulas con comida grasa (cena)', porque: 'Antiinflamatorio, cabeza y piel. Con grasa se absorbe mejor.' },
  { nombre: 'Magnesio B6', timing: '1 antes de dormir', porque: 'Tensión muscular, dolores de cabeza y calidad de sueño. Tu combo nocturno.' },
  { nombre: 'Esclerovitan', timing: '1 a la mañana con el café', porque: 'Antioxidante de base. Va con el desayuno para no pensarlo.' },
  { nombre: 'Redoxon vit C', timing: 'Reserva: días de mucho desgaste o resfrío inminente', porque: 'No es diario: es el refuerzo puntual.' }
];

const COMIDAS = {

  'desayuno': {
    titulo: 'Desayuno',
    recetas: [{
      nombre: 'Tarrito de avena + 2 cafés',
      detalle: '~550 kcal · 30g prot',
      datos: { tiempo: '0 min a la mañana', activo: 'Se armó anoche', rinde: '1 desayuno' },
      ingredientes: [
        '40g de avena (4 cucharadas soperas colmadas)',
        '200ml de leche protein',
        '1 scoop de whey (el sabor que combine: vainilla y chocolate van con todo)',
        '100g de frutos rojos congelados (un puñado grande)',
        '1 cucharadita de miel',
        'Canela a gusto'
      ],
      pasos: [
        { t: 'Agarrar', d: 'El tarrito ya está en la heladera desde anoche (es la última pieza de tu bloque NOCHE). Solo agarralo al salir.', tip: 'Si un día no está: 2 minutos igual — avena + leche + whey revuelto en la oficina también funciona.' },
        { t: 'En la oficina', d: 'Comelo frío tal cual, o 40 segundos de microondas si preferís tibio. Los 2 cafés con leche lo acompañan.', tip: 'Cafeína OK hasta las 15:00 — los de la mañana son sagrados.' }
      ],
      claves: [
        'La avena remojada de noche queda cremosa sin cocinar nada',
        'La whey se disuelve ANTES de agregar la avena: nunca queda grumosa'
      ],
      sustituciones: [
        { falta: 'Frutos rojos', usa: 'Banana en rodajas (se agrega a la mañana, no de noche) o manzana rallada' },
        { falta: 'Leche protein', usa: 'Leche común + medio scoop extra de whey: mismas cuentas' }
      ],
      dudas: [
        { q: '¿No me empalaga todos los días lo mismo?', a: 'Rotá el "toque": canela, cacao amargo, coco rallado, mantequilla de maní. La base no se toca (es la que hace las cuentas); el toque cambia el juego.' },
        { q: '¿Puedo desayunar otra cosa un día?', a: 'Claro. La regla es UNA: 25-30g de proteína antes del mediodía. Lo que sea que cumpla eso, vale.' }
      ],
      guardar: 'El tarrito armado dura 48 hs en heladera — podés armar dos el domingo a la noche.',
      porque: '30g de proteína a las 9 AM sin cocinar ni decidir nada. El desayuno se gana la noche anterior; a las 8:10 solo se agarra.'
    }]
  },

  'almuerzo': {
    titulo: 'Almuerzo',
    recetas: [
      {
        nombre: 'Wrap de jamón, queso y palta',
        detalle: '~500 kcal · 40g prot',
        datos: { tiempo: '5 min', activo: '5 min', rinde: '1 almuerzo (2 wraps)' },
        ingredientes: [
          '2 tortillas rapiditas',
          '4 fetas de jamón cocido',
          '4 fetas de queso',
          '1/2 palta pisada con sal y limón',
          'Hojas verdes si hay (opcional, suma frescura)'
        ],
        pasos: [
          { t: 'Armar', d: 'Pisá la palta con sal y unas gotas de limón, untala en cada tortilla. Encima 2 fetas de jamón y 2 de queso por wrap.', tip: 'El limón evita que la palta se ponga negra hasta el mediodía.' },
          { t: 'Cerrar', d: 'Doblá los laterales hacia adentro y enrollá apretado. Envolvé en papel film o aluminio.', tip: 'Enrollado apretado no se desarma en la mochila.' },
          { t: 'En la oficina', d: 'Tal cual está, o 2-3 minutos en tostadora/sandwichera si hay: el queso fundido lo sube de categoría.', tip: null }
        ],
        claves: [
          'Se arma a la noche o a la mañana en 5 minutos reales',
          'La palta no es adorno: son las 160 kcal buenas que te faltan'
        ],
        sustituciones: [
          { falta: 'Palta', usa: 'Queso crema + un chorrito de oliva: misma cremosidad, mismas cuentas' },
          { falta: 'Jamón', usa: 'Pollo desmenuzado de la cena de olla — upgrade de proteína gratis' }
        ],
        dudas: [
          { q: '¿Aguanta sin heladera hasta el mediodía?', a: 'Con jamón y queso, buscá la heladera de la oficina. Si no hay: armalo con atún + palta, que banca mejor a temperatura.' }
        ],
        guardar: 'Armado aguanta 24 hs en heladera. La palta pisada con limón, tapada, también.',
        porque: 'Rápido, rico, transportable y con 40g de proteína. El almuerzo de oficina que no da vergüenza ni pena.'
      },
      {
        nombre: 'Tupper de atún, huevo y arroz',
        detalle: '~500 kcal · 40g prot',
        datos: { tiempo: '15 min', activo: '5 min si hay arroz hecho', rinde: '1 tupper' },
        ingredientes: [
          '1 lata de atún al natural, escurrido',
          '2 huevos duros (10-11 min desde agua hirviendo)',
          '1 taza de arroz cocido',
          '1/2 morrón en cubitos',
          'Un puñado de aceitunas',
          'Chorro GENEROSO de aceite de oliva, sal, pimienta'
        ],
        pasos: [
          { t: 'Base', d: 'Arroz cocido en el fondo del tupper (idealmente del que sobró de la cena de olla — cociná siempre de más).', tip: 'Truco definitivo: hacé 3 tazas de arroz el domingo y viví de eso hasta el jueves.' },
          { t: 'Armar', d: 'Encima el atún desmenuzado, los huevos en cuartos, morrón y aceitunas.', tip: 'Los huevos duros se pueden hacer de a 6: duran 5 días en heladera con cáscara.' },
          { t: 'El oliva', d: 'Chorro generoso de oliva + sal + pimienta AL MOMENTO DE COMER, no antes.', tip: 'El oliva es parte de la comida (120 kcal buenas), no un condimento tímido.' }
        ],
        claves: [
          'Todo el armado son ingredientes que ya están cocidos: es ensamblaje, no cocina',
          'El oliva generoso convierte 380 kcal flacas en 500 que te sirven'
        ],
        sustituciones: [
          { falta: 'Atún', usa: 'Lata de caballa (más barata, más grasa buena) o pollo desmenuzado' },
          { falta: 'Arroz', usa: 'Fideos fríos o papas hervidas en cubos: mismo rol de carbo' }
        ],
        dudas: [
          { q: '¿Frío no es triste?', a: 'Este plato ES frío — tipo ensalada de arroz. Si querés tibio, 1 minuto de micro SIN las aceitunas y el huevo, que se agregan después.' }
        ],
        guardar: 'Armado sin aliñar: 48 hs en heladera. Aliñá siempre al momento.',
        porque: 'Proteína doble (atún + huevo), carbo que sostiene la tarde y grasas buenas. El tupper que se arma medio dormido a la noche.'
      },
      {
        nombre: 'Yogur proteico + maní + kiwi',
        detalle: '~450 kcal · 35g prot · el plan B',
        datos: { tiempo: '0 min', activo: 'Comprar y comer', rinde: '1 almuerzo de emergencia' },
        ingredientes: [
          '1 yogur Ser Pro (o cualquier yogur proteico de 15g+)',
          '1 puñado de maní (30-40g)',
          '1 kiwi (o la fruta que haya)',
          '3 galletas de arroz con queso Finlandia'
        ],
        pasos: [
          { t: 'Comprar', d: 'Todo se consigue en cualquier kiosco grande o chino cerca de la oficina.', tip: 'Tené el maní y las galletas YA en el cajón del escritorio: solo comprás yogur y fruta.' },
          { t: 'Comer', d: 'Sin preparación. Es el plan B digno para el día que no armaste nada.', tip: null }
        ],
        claves: [
          'Su función es UNA: que el peor almuerzo posible siga sumando 35g de proteína',
          'El cajón del escritorio pre-cargado hace que el plan B tarde 3 minutos'
        ],
        sustituciones: [
          { falta: 'Ser Pro', usa: 'Dos yogures comunes + el maní: se llega parecido' },
          { falta: 'Todo (día catástrofe)', usa: 'Sándwich de jamón y queso doble del bufet + un yogur. No es ideal; es suficiente.' }
        ],
        dudas: [
          { q: '¿Está bien almorzar esto seguido?', a: 'Como plan B, perfecto. Si aparece 3+ veces por semana, el problema no es el yogur: es que los otros dos almuerzos necesitan menos fricción (arroz hecho, huevos duros listos).' }
        ],
        guardar: 'Nada que guardar: esa es la gracia.',
        porque: 'El sistema nunca depende de tu mejor versión. Este almuerzo existe para los días donde no hubo mejor versión.'
      }
    ]
  },

  'post-gym': {
    titulo: 'Post-gym',
    recetas: [{
      nombre: 'Licuado de whey y banana',
      detalle: '~400 kcal · 35g prot · LA comida clave',
      datos: { tiempo: '3 min', activo: '3 min', rinde: '1 licuado grande' },
      ingredientes: [
        '1 scoop y medio de whey',
        '1 banana madura (las con puntitos negros endulzan más)',
        '250ml de leche',
        '1 cucharadita de miel solo si el día fue pesado',
        '3-4 cubitos de hielo (cambia la textura por completo)'
      ],
      pasos: [
        { t: 'Licuar', d: 'Todo junto, 30-40 segundos hasta que no queden pedazos de banana. Con hielo queda espeso tipo smoothie.', tip: 'Sin licuadora: shaker con whey + leche, y la banana a mordiscos al lado. Cuenta igual.' },
        { t: 'Tomar YA', d: 'Al llegar, ANTES de la ducha, antes del sillón, antes de todo. Es la comida que más te cuesta y la que más paga.', tip: 'La alternativa válida: adelantar la cena si ya está lista. Lo que no es válido: saltearla.' },
        { t: 'La regla del porro', d: 'Si hay porro de la vuelta del gym, va UNA HORA después de esto. Primero el material de construcción; después el descanso.', tip: null }
      ],
      claves: [
        'La ventana mágica de 30 min es mito — pero la comida salteada post-gym es real y te la cobra la semana',
        'Banana + whey + leche: carbo rápido + proteína + líquido. La fórmula no necesita inventos'
      ],
      sustituciones: [
        { falta: 'Banana', usa: 'Un puñado de avena o 2 cucharaditas de miel: el carbo es el rol, no la fruta' },
        { falta: 'Whey', usa: '3 huevos revueltos + 2 tostadas en 8 minutos, o adelantá la cena directamente' }
      ],
      dudas: [
        { q: '¿Puedo hacer el licuado a la mañana y llevarlo?', a: 'Pierde textura y la whey se asienta. Mejor: llevá el scoop seco en el shaker y sumá leche/agua al momento. La banana viaja sola.' },
        { q: '¿Con agua o con leche?', a: 'Leche: 100 kcal y 8g de proteína extra que necesitás. El agua es para gente que quiere comer menos — no sos vos.' }
      ],
      guardar: 'No se guarda: se toma. 3 minutos de vida útil, como debe ser.',
      porque: 'Entrenaste y el cuerpo pide material. Este licuado es el puente entre el gym y la cena, y la comida que decide si el día sumó de verdad.'
    }]
  },

  'cena': {
    titulo: 'Cena de olla',
    nota: 'Se cocina 1 vez para 2-3 días. Rotan durante la semana: el delivery pierde contra la olla ya hecha.',
    recetas: [
      {
        nombre: 'Pollo a la crema con portobellos y arroz',
        detalle: '~650 kcal · 50g prot por porción',
        datos: { tiempo: '40 min', activo: '20 min', rinde: '3 porciones' },
        ingredientes: [
          '600g de pollo: pata/muslo deshuesado (más jugoso) o pechuga en cubos grandes',
          '250g de portobellos en láminas gruesas',
          '250ml de crema de leche',
          '1 cebolla grande picada',
          '1 taza y media de arroz (seco)',
          '30g de manteca, sal, pimienta, ajo en polvo'
        ],
        pasos: [
          { t: 'Dorar el pollo', d: 'Olla o sartén grande, fuego FUERTE, manteca. Pollo salpimentado en tandas (si lo amontonás, se hierve en vez de dorarse). 3-4 min por lado hasta que tenga color dorado real. Retiralo.', tip: 'El dorado es sabor: no lo apures. Los jugos pegados en el fondo son oro para el paso 2.' },
          { t: 'La base', d: 'Misma olla, fuego medio: cebolla 5 min hasta transparente, después portobellos hasta que suelten el agua y se evapore (7-8 min). Raspá el fondo con cuchara de madera.', tip: 'Los portobellos NO se salan hasta el final: la sal les saca el agua antes de tiempo.' },
          { t: 'Juntar', d: 'Volvé el pollo con sus jugos, sumá la crema, ajo en polvo, y 10 min a fuego BAJO con la olla destapada, revolviendo cada tanto. La salsa espesa sola.', tip: 'Si queda muy espesa: chorrito de leche. Muy líquida: 5 min más de fuego destapado.' },
          { t: 'El arroz', d: 'Aparte y en paralelo: 1,5 tazas de arroz, 3 de agua, sal. Hervor → fuego mínimo tapado 12 min → apagás y 5 min de reposo SIN destapar.', tip: 'Esa espera de 5 min tapado es la diferencia entre arroz suelto y engrudo.' },
          { t: 'Dividir', d: '3 tuppers: arroz abajo, pollo y salsa arriba. Uno es la cena de hoy; dos son tu semana resuelta.', tip: null }
        ],
        claves: [
          'Dorar fuerte en tandas — el 80% del sabor sale de ese paso',
          'La crema entra al final y a fuego bajo: hervida a lo loco se corta',
          'Siempre 3 porciones: cocinás una vez, cenás tres'
        ],
        sustituciones: [
          { falta: 'Portobellos', usa: 'Champiñones comunes (misma técnica) o cebolla + morrón salteados' },
          { falta: 'Crema', usa: 'Queso crema + chorrito de leche: salsa igual de rica, mismas cuentas' }
        ],
        dudas: [
          { q: '¿Pata/muslo no es "peor" que pechuga?', a: 'Tiene 2-3g más de grasa por porción y el triple de jugosidad. Para tu objetivo (comer MÁS y rico), es la mejor compra: más barata y no se seca nunca.' },
          { q: '¿La crema no es mucha grasa?', a: 'Son ~80 kcal de crema por porción, presupuestadas en tus 650. La densidad calórica rica es tu estrategia, no tu error. Comé tranquilo.' }
        ],
        guardar: 'Heladera 3 días en tuppers cerrados. Recalentar: micro 2 min con un chorrito de leche para revivir la salsa. NO freezar con crema (se corta al descongelar).',
        porque: 'La cena estrella de tu rotación: 50g de proteína con gusto a restaurante, y dos noches futuras donde "cocinar" es apretar un botón del micro.'
      },
      {
        nombre: 'Roast beef con puré de papines',
        detalle: '~650 kcal · 50g prot por porción',
        datos: { tiempo: '60 min', activo: '20 min', rinde: '3 porciones' },
        ingredientes: [
          '700g de roast beef en cubos de 3-4 cm',
          '600g de papines (o papas comunes en trozos)',
          '40g de manteca + un chorrito de leche para el puré',
          '2 dientes de ajo picados',
          '1 cebolla grande',
          'Sal, pimienta, laurel si hay'
        ],
        pasos: [
          { t: 'Sellar', d: 'Olla a fuego FUERTE con un poco de aceite. Cubos de carne salpimentados en tandas, 2 min por lado hasta costra marrón. Retirá.', tip: 'Carne amontonada = carne hervida gris. Tandas, siempre.' },
          { t: 'Estofar', d: 'Misma olla, fuego medio: cebolla 5 min. Volvé la carne, agua hasta cubrir la mitad, laurel, tapá y fuego BAJO 40-45 min hasta que un tenedor entre sin pelear.', tip: 'Revisá a los 30 min: si se quedó sin líquido, medio vaso de agua y seguís.' },
          { t: 'El puré', d: 'Mientras: papines hervidos con piel 20 min desde el hervor (tenedor entra fácil = listos). Escurrí, pisá con la manteca, el ajo, la leche y sal. Con piel: más sabor y cero pelado.', tip: 'La manteca DE VERDAD (40g) es lo que hace el puré memorable. Es tu presupuesto calórico bien gastado.' },
          { t: 'Dividir', d: '3 tuppers: puré + carne con su juguito por arriba.', tip: null }
        ],
        claves: [
          'El sellado fuerte + estofado lento = carne que se corta con cuchara',
          'El puré con piel ahorra 10 min y suma sabor',
          'El juguito del estofado ES la salsa: no lo tires nunca'
        ],
        sustituciones: [
          { falta: 'Roast beef', usa: 'Paleta o carnaza en cubos: mismo método, mismo precio, 5-10 min más de olla' },
          { falta: 'Papines', usa: 'Papa común, batata (más dulce) o puré mixto papa-calabaza' }
        ],
        dudas: [
          { q: '¿La carne quedó dura, qué hice mal?', a: 'Le faltó tiempo, no le sobró. La carne de olla pasa por una fase dura (30 min) antes de ablandarse (45+). Si está dura: 15 min más de fuego bajo con líquido, siempre se rinde.' },
          { q: '¿Puré instantáneo vale?', a: 'En emergencia sí, con la misma manteca. Pero los papines hervidos son 20 min sin atenderlos — probá el real dos veces antes de decidir.' }
        ],
        guardar: 'Heladera 3 días. La carne estofada incluso mejora al día siguiente. Recalentar: micro 2-3 min. La carne SÍ se puede freezar (el puré mejor no: queda gomoso).',
        porque: 'Hierro y proteína en su versión más reconfortante. La cena de "día largo" que te espera lista y te abraza.'
      },
      {
        nombre: 'Milanesa al horno + papines',
        detalle: '~700 kcal · 45g prot · 1 vez cada 5-7 días',
        datos: { tiempo: '30 min', activo: '10 min', rinde: '1-2 porciones' },
        ingredientes: [
          '2 milanesas de carne o pollo (de carnicería, ya empanadas)',
          '400g de papines partidos al medio',
          'Aceite de oliva, sal, provenzal o pimentón',
          'Limón para terminar'
        ],
        pasos: [
          { t: 'Horno a full', d: 'Precalentá al máximo (230-250°) 10 minutos ANTES de meter nada. El horno tibio es el enemigo de la milanesa crocante.', tip: 'Mientras precalienta, armá los papines: mismo tiempo, cero espera.' },
          { t: 'Papines primero', d: 'Partidos al medio, mezclados con oliva, sal y provenzal en la misma asadera. Van 10 min ANTES que las milanesas (necesitan 25 total).', tip: 'Cara cortada hacia abajo: se dora como frita sin freír.' },
          { t: 'Milanesas', d: 'A los 10 min, sumá las milanesas con un hilito de oliva por arriba. 7-8 min por lado, vuelta y vuelta, hasta doradas.', tip: 'El hilito de oliva por encima es el truco horno-que-parece-fritura.' },
          { t: 'Servir', d: 'Limón exprimido sobre la milanesa y a la mesa. Esta cena se come caliente, recién hecha.', tip: null }
        ],
        claves: [
          'Horno FUERTE y precalentado: la diferencia entre crocante y triste',
          'Es LA comida rica programada de la semana — regla 80/20 en acción',
          'Sin culpa: está en el plan a propósito, cada 5-7 días'
        ],
        sustituciones: [
          { falta: 'Milanesas compradas', usa: 'Suprema empanada casera (huevo + pan rallado, 10 min más) o medallones de la carnicería' },
          { falta: 'Papines', usa: 'Puré, ensalada con huevo, o arroz: cualquier compañero vale' }
        ],
        dudas: [
          { q: '¿Por qué no frita?', a: 'La frita suma ~250 kcal de aceite y el olor a fritanga de departamento. Al horno fuerte con el hilito de oliva llega al 90% del resultado con la mitad del costo.' },
          { q: '¿Puedo hacerla más seguido? Es mi comida favorita.', a: 'La regla de 5-7 días es lo que la mantiene especial Y dentro de las cuentas. La milanesa programada evita la milanesa descontrolada — esa es la jugada.' }
        ],
        guardar: 'La milanesa recalentada pierde la gracia. Si sobra: sándwich de milanesa frío mañana — que no es sobra, es premio.',
        porque: 'Tu comida favorita, legalizada y programada. El permitido que se espera toda la semana sabe mejor que el impulso.'
      },
      {
        nombre: 'Fideos con boloñesa casera',
        detalle: '~650 kcal · 45g prot por porción',
        datos: { tiempo: '35 min', activo: '15 min', rinde: '3 porciones de salsa' },
        ingredientes: [
          '500g de carne picada (común, no magra: el sabor vive en la grasa)',
          '1 lata de tomate triturado',
          '1 cebolla + 1 zanahoria rallada',
          '100g de fideos SECOS por porción (se pesan crudos)',
          'Toque de crema al apagar, sal, orégano, ají molido'
        ],
        pasos: [
          { t: 'Sofrito', d: 'Olla, fuego medio, un poco de aceite: cebolla picada + zanahoria rallada, 5-7 min hasta que ablanden.', tip: 'La zanahoria rallada endulza la salsa naturalmente: el truco de las nonas.' },
          { t: 'La carne', d: 'Fuego fuerte, sumá la picada DESGRANÁNDOLA con la cuchara. Cociná hasta que pierda todo el rosa y empiece a dorarse (7-8 min). Sal recién acá.', tip: 'Si suelta mucha agua, dejala evaporar antes de seguir: carne dorada > carne hervida.' },
          { t: 'La salsa', d: 'Tomate triturado, orégano, ají molido. Fuego BAJO 15-20 min destapado, revolviendo cada tanto. Al apagar: el toque de crema.', tip: 'La salsa que "plop-plopea" despacio está en el fuego correcto.' },
          { t: 'Los fideos', d: 'CADA NOCHE se hacen frescos: 100g en agua hirviendo con sal (agua "salada como el mar"), el tiempo del paquete menos 1 min. La salsa guardada se calienta y encima.', tip: 'Guardá un pocillo del agua de cocción: revive cualquier salsa espesada de heladera.' }
        ],
        claves: [
          'La salsa se hace UNA vez; los fideos, frescos cada noche en 10 min',
          'Carne común > magra para salsas: sabor y saciedad',
          '100g de fideos secos por porción: pesalos las primeras veces, después el ojo aprende'
        ],
        sustituciones: [
          { falta: 'Carne picada', usa: 'Mitad carne + mitad lentejas cocidas: rinde más y ni se nota' },
          { falta: 'Fideos', usa: 'Arroz, ñoquis comprados o polenta: la boloñesa banca todo' }
        ],
        dudas: [
          { q: '¿Por qué se pesan los fideos secos?', a: 'Porque cocidos duplican peso y el ojo miente al servir. 100g secos = ~350 kcal exactas. Es el único pesaje que te pido en toda la cocina.' },
          { q: '¿La crema en la boloñesa no es raro?', a: 'Media cucharada por porción redondea la acidez del tomate y suma cremosidad. Los italianos puristas que me perdonen: tu paladar y tus calorías lo agradecen.' }
        ],
        guardar: 'La salsa: 4 días en heladera o 2 meses en freezer (freezala en porciones). Los fideos nunca se guardan cocidos: 10 min frescos cada noche.',
        porque: 'El formato más fácil de comer del mundo para las noches sin ganas, con la salsa esperándote hecha. Carbo + proteína + confort.'
      },
      {
        nombre: 'Omelette gigante (día flojo)',
        detalle: '~550 kcal · 40g prot',
        datos: { tiempo: '8 min', activo: '8 min', rinde: '1 cena' },
        ingredientes: [
          '4 huevos',
          '50g de queso en hebras (un puñado grande)',
          '2 fetas de jamón en tiritas',
          '1/2 palta en láminas para arriba',
          '15g de manteca, sal, pimienta'
        ],
        pasos: [
          { t: 'Batir', d: 'Los 4 huevos con sal y pimienta, 20 segundos de tenedor — que se integren, sin espumar.', tip: 'Chorrito de leche opcional: omelette más esponjoso.' },
          { t: 'Cuajar', d: 'Sartén antiadherente fuego MEDIO-BAJO con la manteca. Verté los huevos y no toques 2 minutos, hasta que los bordes cuajen y el centro siga apenas húmedo.', tip: 'Fuego bajo y paciencia: el omelette dorado por fuera y seco por dentro es un huevo frito grande y triste.' },
          { t: 'Rellenar y doblar', d: 'Queso y jamón en una mitad, doblá la otra encima con espátula, 1 minuto más para que funda el queso.', tip: 'El centro apenas húmedo al doblar termina de cocinarse solo: ese es el punto cremoso.' },
          { t: 'Terminar', d: 'Al plato, palta en láminas encima, sal. Cena lista en 8 minutos reales.', tip: null }
        ],
        claves: [
          'Fuego medio-bajo SIEMPRE: la paciencia de 2 minutos hace el omelette',
          'Es el "no me da la vida para cocinar" oficial — y cuenta como cena completa',
          'Un día flojo con omelette es un día a ~1.800 kcal: normal, sin culpa, el plan sigue'
        ],
        sustituciones: [
          { falta: 'Jamón', usa: 'Lo que haya: tomate, cebolla que sobró, restos de pollo de olla' },
          { falta: 'Palta', usa: 'Un chorro de oliva por arriba o una tostada con manteca al lado' }
        ],
        dudas: [
          { q: '¿4 huevos no es mucho colesterol?', a: 'La evidencia actual descartó ese miedo para gente sana: el colesterol dietario impacta poco en el de sangre. 4 huevos = 24g de proteína de la mejor calidad que existe.' },
          { q: '¿Se me rompe al doblar, qué hago?', a: 'Nada: lo revolvés y son huevos revueltos con queso y jamón. Mismo sabor, mismas cuentas, cero drama. El omelette roto es un plato válido en todo el mundo.' }
        ],
        guardar: 'No se guarda: 8 minutos de sartén a mesa es su gracia.',
        porque: 'La red de seguridad de tu sistema: la cena digna de 8 minutos para el día sin nafta. Que exista hace que el delivery pierda incluso tus peores noches.'
      }
    ]
  },

  'tarrito-avena': {
    titulo: 'Tarrito de avena p/ mañana',
    recetas: [{
      nombre: 'Armado del tarrito (3 minutos)',
      detalle: 'El desayuno de mañana se decide hoy',
      datos: { tiempo: '3 min', activo: '3 min', rinde: 'El desayuno de mañana' },
      ingredientes: [
        '40g de avena (4 cucharadas colmadas)',
        '200ml de leche protein',
        '1 scoop de whey',
        '100g de frutos rojos congelados',
        '1 cucharadita de miel + canela'
      ],
      pasos: [
        { t: 'Disolver', d: 'PRIMERO la whey en la leche, revolviendo bien. Este orden evita los grumos para siempre.', tip: 'Frasco con tapa: 10 segundos de agitado y listo, ni cuchara hace falta.' },
        { t: 'Sumar', d: 'Avena, frutos rojos congelados tal cual, miel y canela. Revolvé 10 segundos.', tip: 'Los frutos van congelados: se descongelan solos y sueltan su jugo en la avena.' },
        { t: 'Heladera', d: 'Tapado, al estante de siempre. Mañana a las 8:10 solo se agarra.', tip: 'Hacelo SIEMPRE después de la cena, como parte del cierre de cocina: hábito apilado, cero decisión.' }
      ],
      claves: [
        'Whey disuelta primero = nunca más grumos',
        'Es la última jugada del día que le gana la mañana al apuro'
      ],
      sustituciones: [
        { falta: 'Ganas', usa: 'Versión de 30 segundos: avena + leche + whey en el frasco, agitar, listo. Sin toppings también funciona' }
      ],
      dudas: [
        { q: '¿Por qué de noche y no a la mañana?', a: 'Porque a las 8:10 no decidís bien y la avena remojada de noche queda cremosa sin cocción. El desayuno se gana o se pierde la noche anterior.' }
      ],
      guardar: 'Armado dura 48 hs: podés dejar dos hechos el domingo.',
      porque: 'Tres minutos hoy = 30g de proteína mañana sin pensar. La pieza más chica de tu sistema con el mejor retorno por minuto.'
    }]
  }
};
