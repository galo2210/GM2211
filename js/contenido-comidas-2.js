// NORTE · contenido COMIDA tanda 2 — 8 recetas nuevas (16/07/2026).
// Criterio: ricas, sanas, baratas, ingredientes de cualquier súper/chino,
// y con los utensilios básicos: olla, sartén, horno, microondas. Mismo esquema v2.

const COMIDAS_TANDA_2 = {

  cenas: [
    {
      nombre: 'Guiso de lentejas con carne',
      detalle: '~600 kcal · 40g prot por porción',
      datos: { tiempo: '50 min', activo: '15 min', rinde: '4 porciones' },
      ingredientes: [
        '400g de lentejas secas (remojadas 2+ horas, o de lata x2 sin remojo)',
        '300g de carne en cubos chicos (paleta o la que esté en oferta)',
        '100g de panceta o chorizo colorado en cubitos (el sabor)',
        '1 cebolla + 1 zanahoria + 1/2 morrón, todo picado',
        '1 lata de tomate triturado',
        '1 papa en cubos, pimentón dulce, comino, sal'
      ],
      pasos: [
        { t: 'Dorar', d: 'Olla grande, fuego fuerte, un poco de aceite: panceta primero hasta que suelte grasa (2 min), después la carne en cubos hasta dorar (4-5 min).', tip: 'Esa grasita de la panceta es la base de sabor de todo el guiso: no la escatimes.' },
        { t: 'Sofrito', d: 'Bajá a fuego medio y sumá cebolla, zanahoria y morrón. 5-7 min hasta que la cebolla esté transparente. Pimentón y comino, 30 segundos revolviendo.', tip: 'El pimentón se quema fácil: entra, se revuelve y enseguida va el tomate.' },
        { t: 'Guisar', d: 'Tomate, lentejas escurridas, papa y agua caliente hasta cubrir todo por 2 dedos. Sal. Fuego BAJO tapado 30-35 min, revolviendo cada 10, hasta que la lenteja esté tierna.', tip: 'Si espesa de más, agua caliente de a chorritos. ¿Guiso aguado? 10 min destapado y listo.' },
        { t: 'Dividir', d: '4 tuppers. Es de las pocas cenas que rinde CUATRO noches — y mejora al día siguiente.', tip: null }
      ],
      claves: [
        'Lentejas: proteína + fibra + hierro por dos mangos — el mejor kilo-caloría del súper',
        'El guiso espesa al enfriar: cortalo un punto más líquido de lo que querés',
        'Una olla, una cuchara: la limpieza también es parte de la receta'
      ],
      sustituciones: [
        { falta: 'Carne', usa: 'Solo panceta/chorizo + lentejas: sigue teniendo 30g+ de proteína por porción' },
        { falta: 'Lentejas secas (sin remojar)', usa: '2 latas escurridas: entran en el paso 3 con solo 10 min de olla' }
      ],
      dudas: [
        { q: '¿Las lentejas no inflan?', a: 'Remojadas y bien cocidas, mucho menos. Y el cuerpo se adapta en 2 semanas de comerlas seguido — después las digiere como campeón.' },
        { q: '¿En verano guiso?', a: 'Versión verano: menos agua, más espeso, y se come tibio tipo estofado. O guardá esta carta para otoño-invierno y listo.' }
      ],
      guardar: 'Heladera 4 días, y es EL plato freezable: porciones en freezer 3 meses. Recalentar con un chorrito de agua.',
      porque: 'La cena más barata por porción de todo tu plan, 4 noches resueltas de una olla, y hierro + fibra que a tu dieta le vienen perfecto.'
    },
    {
      nombre: 'Arroz con pollo a la sartén',
      detalle: '~620 kcal · 45g prot por porción',
      datos: { tiempo: '35 min', activo: '15 min', rinde: '3 porciones' },
      ingredientes: [
        '600g de pata/muslo deshuesado en trozos grandes',
        '1 taza y media de arroz (seco)',
        '1 cebolla + 1 morrón picados',
        '1 diente de ajo, pimentón, cúrcuma o condimento para arroz (opcional, da el color)',
        '3 tazas de agua caliente o caldo (cubito vale)',
        'Aceite, sal, pimienta'
      ],
      pasos: [
        { t: 'Dorar el pollo', d: 'Sartén grande o cacerola baja, fuego fuerte, aceite. Pollo salpimentado con la piel para abajo primero: 4 min por lado hasta dorar. Retiralo (queda a medio cocer, está bien).', tip: 'No laves la sartén: lo pegado es el sabor del arroz.' },
        { t: 'Sofrito', d: 'Misma sartén, fuego medio: cebolla, morrón y ajo, 5 min. Sumá el arroz CRUDO y revolvé 1 minuto hasta que los granos brillen.', tip: 'Ese minuto de "nacarar" el arroz hace que no se pegue después.' },
        { t: 'Todo junto', d: 'Pimentón y cúrcuma, el agua caliente (3 tazas), sal, y el pollo hundido en el arroz con su juguito. Hervor → fuego MÍNIMO tapado 15 min SIN revolver ni espiar.', tip: 'La regla de oro del arroz: 15 min tapado sin tocar. Revolver = engrudo.' },
        { t: 'Reposo', d: 'Apagá y dejá 5 min tapado. Destapá, esponjá con tenedor, dividí en 3.', tip: null }
      ],
      claves: [
        'Todo en UNA sartén: la cena completa con una sola cosa para lavar',
        'Arroz nacarado + fuego mínimo tapado = suelto garantizado',
        'El pollo termina de cocinarse DENTRO del arroz y le deja todo su jugo'
      ],
      sustituciones: [
        { falta: 'Pata/muslo', usa: 'Pechuga en cubos grandes (entra directo en el paso 3, sin dorar tanto, para que no se seque)' },
        { falta: 'Morrón', usa: 'Zanahoria rallada, arvejas de lata al final, o nada: la base cebolla+ajo banca sola' }
      ],
      dudas: [
        { q: '¿El arroz quedó duro a los 15 min?', a: 'Chorrito de agua caliente, tapa y 5 min más de fuego mínimo. Cada hornalla es un mundo: a la segunda vez ya conocés la tuya.' },
        { q: '¿Se puede hacer con arroz integral?', a: 'Sí, pero tarda 35-40 min y necesita 1 taza más de agua. Para empezar, dominá la versión blanca.' }
      ],
      guardar: 'Heladera 3 días. Recalentar: micro 2 min con chorrito de agua para revivirlo.',
      porque: 'El plato único definitivo: proteína + carbo + verdura en una sartén, con el pollo saborizando el arroz. Rinde 3 cenas y parece más difícil de lo que es.'
    },
    {
      nombre: 'Pollo al horno con papas (bandeja única)',
      detalle: '~650 kcal · 50g prot por porción',
      datos: { tiempo: '55 min', activo: '10 min', rinde: '3 porciones' },
      ingredientes: [
        '6 patas-muslo de pollo (o 1 kg de la parte que esté en oferta)',
        '800g de papas en gajos gruesos',
        '1 cebolla en cuartos',
        'Aceite de oliva, pimentón, ajo en polvo, orégano, sal, pimienta',
        'Jugo de medio limón'
      ],
      pasos: [
        { t: 'Horno a full', d: 'Precalentá a 220° durante 10 min. Mientras: papas en gajos y cebolla en cuartos a la asadera, mezcladas con aceite, sal y pimentón.', tip: 'Gajos GRUESOS (en 6 la papa mediana): los finitos se queman antes de que el pollo esté.' },
        { t: 'El pollo', d: 'Secá el pollo con papel (piel seca = piel crocante), untalo con aceite, sal, pimentón, ajo en polvo y orégano. Acomodalo ARRIBA de las papas, piel hacia arriba.', tip: 'El jugo del pollo cae sobre las papas mientras se hace: por eso van abajo.' },
        { t: 'Hornear', d: '45-50 min a 220° SIN tocar. Está listo cuando la piel está dorada crocante y al pinchar la parte gorda el jugo sale transparente (no rosado).', tip: 'Si a los 40 min la piel no doró: 5 min de grill final con ojo encima.' },
        { t: 'Terminar', d: 'Limón exprimido por arriba de todo y a la mesa (o a los tuppers).', tip: null }
      ],
      claves: [
        '10 minutos de manos: el horno hace TODO el trabajo',
        'Piel seca antes de condimentar = piel crocante después',
        'Jugo transparente al pinchar = pollo listo, sin adivinar'
      ],
      sustituciones: [
        { falta: 'Papas', usa: 'Batatas, calabaza en cubos o mitad y mitad: mismos tiempos' },
        { falta: 'Patas-muslo', usa: 'Pollo entero abierto (mismo método, 10-15 min más) — más barato aún por kilo' }
      ],
      dudas: [
        { q: '¿La piel del pollo no es "mala"?', a: 'Son ~40 kcal extra por presa y muchísimo sabor. En tu plan de comer MÁS y rico, la piel se queda. Si un día querés recortar, se saca en el plato, no antes de cocinar.' },
        { q: '¿Cómo sé que no quedó crudo por dentro?', a: 'El test del jugo: pinchá la parte más gorda con un cuchillo. ¿Jugo transparente? Listo. ¿Rosado? 10 min más. Nunca falla.' }
      ],
      guardar: 'Heladera 3 días. Recalentar al horno 10 min recupera el crocante (el micro lo ablanda pero vale para el apuro).',
      porque: 'La cena de domingo que se cocina sola mientras hacés otra cosa, y deja dos tuppers listos. Máximo resultado por minuto de esfuerzo de toda tu rotación.'
    },
    {
      nombre: 'Salteado de carne y verduras con arroz',
      detalle: '~620 kcal · 45g prot por porción',
      datos: { tiempo: '25 min', activo: '20 min', rinde: '2 porciones' },
      ingredientes: [
        '400g de carne en tiras finas (cuadril, nalga, o "para saltado")',
        '1 cebolla + 1 morrón + 1 zanahoria en tiras',
        '3 cucharadas de salsa de soja',
        '1 diente de ajo, jengibre en polvo si hay',
        '2 tazas de arroz cocido (del que ya tenés hecho)',
        'Aceite, pimienta'
      ],
      pasos: [
        { t: 'Todo cortado ANTES', d: 'El salteado es rápido: cortá carne y verduras en tiras y tené la soja a mano ANTES de prender el fuego.', tip: 'Truco para tiras finas de carne: 20 min en el freezer antes de cortarla y sale como en el chino.' },
        { t: 'La carne', d: 'Sartén BIEN caliente con aceite (que humee apenas). Carne en UNA capa, sin tocarla 1 minuto, después revolvé 1 minuto más. Retirá.', tip: 'En dos tandas si no entra: amontonada se hierve gris en vez de dorarse.' },
        { t: 'Las verduras', d: 'Misma sartén, más aceite si pide: cebolla, morrón y zanahoria a fuego fuerte 3-4 min revolviendo. Tienen que quedar con mordida, no blandas.', tip: 'El crocante de la verdura es la gracia del salteado: mejor que falte un minuto a que sobre.' },
        { t: 'Juntar', d: 'Volvé la carne, sumá ajo, jengibre y la salsa de soja. 1 minuto revolviendo y apagá. Serví sobre el arroz calentado en micro.', tip: 'La soja entra al FINAL: cocinada mucho tiempo amarga y se pasa de sal.' }
      ],
      claves: [
        'Fuego FUERTE y todo listo antes de empezar: el salteado no espera a nadie',
        'Carne en una capa sin tocar = dorada; amontonada y revuelta = hervida',
        'De sartén a mesa en 25 min: la cena "fresca" más rápida de tu rotación'
      ],
      sustituciones: [
        { falta: 'Carne', usa: 'Pollo en tiras (mismo método) o 3 huevos revueltos al final estilo arroz salteado' },
        { falta: 'Salsa de soja', usa: 'Sal + un toque de miel y limón: agridulce casero decente' }
      ],
      dudas: [
        { q: '¿Sirve cualquier corte de carne?', a: 'Los tiernos (cuadril, nalga, lomo si hay oferta). Los duros (paleta, carnaza) son para olla larga, no para salteado: quedan chicle.' },
        { q: '¿Puedo usar verduras congeladas?', a: 'Sí: directo del freezer a la sartén bien caliente, 2 min más de cocción. Que no se descongelen antes o largan agua.' }
      ],
      guardar: 'Mejor recién hecho. Si guardás: heladera 2 días, recalentado fuerte en sartén (el micro lo ablanda).',
      porque: 'Tu "restaurante chino" casero: rápido, fresco y con la verdura que a tu semana le falta, usando el arroz que ya está hecho.'
    },
    {
      nombre: 'Tarta de jamón, queso y cebolla',
      detalle: '~550 kcal · 35g prot por porción (media tarta)',
      datos: { tiempo: '45 min', activo: '10 min', rinde: '2 porciones (media tarta c/u)' },
      ingredientes: [
        '2 tapas de tarta compradas (rollo de heladera)',
        '200g de jamón cocido en tiras',
        '200g de queso cremoso o en hebras',
        '1 cebolla grande en pluma',
        '3 huevos + un chorro de leche',
        'Orégano, pimienta, sal (poca: el jamón ya trae)'
      ],
      pasos: [
        { t: 'La cebolla', d: 'Sartén fuego medio con un poco de aceite: cebolla en pluma 8-10 min hasta dorada y dulce. Es el paso que separa una tarta rica de una del montón.', tip: 'Pizca de sal a la cebolla desde el inicio: suda y carameliza más rápido.' },
        { t: 'Armar', d: 'Tartera o fuente aceitada, una tapa abajo. Cebolla, jamón y queso distribuidos. Batí los huevos con la leche y pimienta, y volcalos por encima.', tip: 'El huevo batido es el pegamento: llega a todos los rincones y suma 18g de proteína.' },
        { t: 'Cerrar y hornear', d: 'Segunda tapa arriba, bordes pellizcados para sellar, 3 cortes con cuchillo en el centro (respiraderos). Horno 200° por 30-35 min hasta dorada.', tip: 'Sin los cortes de arriba, el vapor infla la tapa y la despega.' },
        { t: 'Reposo', d: '5 min fuera del horno antes de cortar: el relleno asienta y no se desparrama.', tip: null }
      ],
      claves: [
        'La cebolla dorada ES la receta: no la saltees',
        'Media tarta es una cena completa con 35g de proteína',
        'La otra mitad, fría o recalentada, es cena o almuerzo de mañana'
      ],
      sustituciones: [
        { falta: 'Jamón', usa: 'Atún (2 latas escurridas), pollo desmenuzado de la olla, o choclo+queso para versión sin carne' },
        { falta: 'Tapas de tarta', usa: 'Sin tapa: la misma mezcla en fuente aceitada = "tortilla de horno", 25 min y menos carbo' }
      ],
      dudas: [
        { q: '¿Tarta no es "comida chatarra"?', a: 'La comprada de rotisería puede: masa doble gruesa, relleno misterioso. La tuya tiene 3 huevos, 200g de jamón y vos elegiste todo. Es una cena legítima de tu plan.' },
        { q: '¿Fría también va?', a: 'La tarta fría del día siguiente es un clásico argentino válido. Para tibia: horno 10 min (el micro ablanda la masa).' }
      ],
      guardar: 'Heladera 3 días tapada. Recalentar en horno para masa crocante; micro solo con apuro.',
      porque: 'La cena que se arma en 10 minutos de manos, cubre dos comidas y usa las tapas compradas sin culpa: el relleno casero es lo que importa.'
    },
    {
      nombre: 'Pastel de papa exprés',
      detalle: '~680 kcal · 45g prot por porción',
      datos: { tiempo: '45 min', activo: '20 min', rinde: '3 porciones' },
      ingredientes: [
        '500g de carne picada común',
        '800g de papas',
        '1 cebolla picada + 1/2 morrón',
        '40g de manteca + chorrito de leche (para el puré)',
        '50g de queso en hebras para gratinar',
        'Pimentón, comino, sal, pimienta, aceitunas si hay'
      ],
      pasos: [
        { t: 'El puré', d: 'Papas peladas en trozos, hervidas 20 min desde el hervor (tenedor entra fácil). Escurrí, pisá con manteca, leche y sal.', tip: 'Arrancá por acá: mientras las papas hierven, hacés todo el relleno.' },
        { t: 'El relleno', d: 'Sartén fuego fuerte: cebolla y morrón 5 min, sumá la picada desgranando con la cuchara hasta que dore (7-8 min). Pimentón, comino, sal, y aceitunas si te gustan.', tip: 'Probá el relleno ANTES de armar: tiene que estar rico solo. Si está soso, el pastel también.' },
        { t: 'Armar', d: 'Fuente aceitada: relleno abajo, puré arriba emparejado con cuchara, queso en hebras por encima.', tip: 'Rayitas con el tenedor sobre el puré: más puntas doradas al gratinar.' },
        { t: 'Gratinar', d: 'Horno fuerte (220°) o grill, 15 min hasta que el queso dore. Como todo ya está cocido, solo buscás el dorado.', tip: null }
      ],
      claves: [
        'Todo el trabajo es en paralelo: papas hirviendo mientras la carne se dora',
        'El relleno se prueba y se ajusta ANTES de armar',
        'Rinde 3 porciones generosas que recalientan perfecto'
      ],
      sustituciones: [
        { falta: 'Papa', usa: 'Mitad papa mitad calabaza: más dulce, menos kcal, mismo confort' },
        { falta: 'Horno', usa: 'Versión bowl: puré abajo, carne arriba en el plato y micro 1 min. Sin gratinar pero mismo sabor' }
      ],
      dudas: [
        { q: '¿Huevo duro adentro como el clásico?', a: 'Si querés, 2 huevos duros en rodajas entre carne y puré: +12g de proteína y más clásico imposible. Es tu pastel: tus reglas.' },
        { q: '¿La picada suelta mucha agua?', a: 'Fuego más fuerte y paciencia: dejá que el agua se evapore ANTES de condimentar. Carne dorada, no hervida — la regla de siempre.' }
      ],
      guardar: 'Heladera 3 días. Recalienta noble en micro (2 min) u horno. El relleno solo también se freeza.',
      porque: 'El plato de abuela en versión sistema: proteína + papa + confort real, 3 noches resueltas, y una fuente que sale a la mesa con orgullo.'
    }
  ],

  almuerzos: [
    {
      nombre: 'Ensalada de fideos con atún',
      detalle: '~520 kcal · 35g prot',
      datos: { tiempo: '15 min', activo: '10 min', rinde: '2 tuppers' },
      ingredientes: [
        '160g de fideos cortos secos (mostacholes, fusiles)',
        '2 latas de atún escurrido',
        '2 huevos duros',
        '1/2 morrón + 1 tomate en cubos, aceitunas',
        'Aceite de oliva generoso, sal, pimienta, orégano'
      ],
      pasos: [
        { t: 'Fideos', d: 'Herví los fideos en agua con sal el tiempo del paquete, colalos y pasalos por agua FRÍA para cortar la cocción.', tip: 'El enjuague frío evita que se peguen y los deja listos para ensalada.' },
        { t: 'Armar', d: 'En un bowl: fideos, atún desmenuzado, huevos en cuartos, tomate, morrón y aceitunas. Dividí en 2 tuppers.', tip: 'Domingo a la noche = lunes y martes de almuerzo resueltos.' },
        { t: 'Aliñar al comer', d: 'El oliva, sal y orégano van al MOMENTO de comer, no antes.', tip: 'Aliñada desde el domingo, el martes es una pasta triste. Al momento, es ensalada fresca.' }
      ],
      claves: [
        'Dos almuerzos de oficina en 15 minutos de domingo',
        'Se come FRÍA: cero drama de microondas ocupado',
        'El oliva del final es el que hace las cuentas calóricas que necesitás'
      ],
      sustituciones: [
        { falta: 'Atún', usa: 'Pollo desmenuzado de la cena de olla o 2 latas de caballa (más barata)' },
        { falta: 'Fideos', usa: 'Arroz frío: se convierte en ensalada de arroz, mismo espíritu' }
      ],
      dudas: [
        { q: '¿No es poca comida para un almuerzo?', a: 'Son 80g de fideos secos + una lata de atún + huevo por tupper: 520 kcal y 35g de proteína medidos. Si tu tarde pide más, sumale una fruta del cajón.' }
      ],
      guardar: 'Sin aliñar: 3 días en heladera. El aceite viaja en frasquito aparte o vive en el cajón de la oficina.',
      porque: 'El almuerzo de oficina que se prepara en tanda, viaja bien, se come frío y no depende de nada: la definición de sistema.'
    },
    {
      nombre: 'Tortilla de papas (dura toda la semana)',
      detalle: '~500 kcal · 30g prot por porción',
      datos: { tiempo: '40 min', activo: '25 min', rinde: '3 porciones' },
      ingredientes: [
        '600g de papas en cubitos chicos o láminas finas',
        '6 huevos',
        '1 cebolla en pluma',
        'Aceite (bastante para las papas, después se escurre)',
        'Sal, pimienta'
      ],
      pasos: [
        { t: 'Las papas', d: 'Sartén con un buen fondo de aceite, fuego medio: papas en cubitos chicos 15 min revolviendo cada tanto, hasta tiernas y apenas doradas. La cebolla entra a mitad de camino. Escurrí TODO en un colador.', tip: 'Cubitos chicos = mitad de tiempo que las láminas clásicas y cero técnica.' },
        { t: 'La mezcla', d: 'Batí los 6 huevos con sal y pimienta en un bowl grande y sumá las papas escurridas tibias. Mezclá y dejá reposar 5 min: la papa se embebe de huevo.', tip: 'Ese reposo de 5 min es el secreto de la tortilla jugosa.' },
        { t: 'Cuajar', d: 'Sartén antiadherente con un chorrito del aceite escurrido, fuego MEDIO-BAJO. Volcá la mezcla, 6-8 min hasta que los bordes cuajen y el centro tiemble apenas.', tip: 'Fuego bajo y paciencia: fuego fuerte = quemada afuera, cruda adentro.' },
        { t: 'Dar vuelta', d: 'Plato grande encima de la sartén, vuelta decidida con una mano en el plato, y la tortilla desliza de nuevo a la sartén 4-5 min del otro lado.', tip: 'La primera vuelta de tu vida sale regular. La segunda, perfecta. Es un rito de iniciación.' }
      ],
      claves: [
        'Una tortilla el domingo = viandas para 3 días (fría es aún más rica)',
        'Cubitos chicos + reposo en huevo: la versión sin técnica que sale siempre',
        'Fuego medio-bajo en el cuajado, no negociable'
      ],
      sustituciones: [
        { falta: 'Ganas de dar la vuelta', usa: 'Terminala en horno 10 min (si la sartén es de metal): tortilla abierta estilo frittata, cero riesgo' },
        { falta: 'Papa', usa: 'Mitad papa mitad batata, o papas de la cena de bandeja que sobraron' }
      ],
      dudas: [
        { q: '¿Cuánto aceite queda realmente?', a: 'Se escurre casi todo en el colador: quedan ~2 cucharadas en la tortilla entera. Las 500 kcal por porción ya lo cuentan.' },
        { q: '¿Jugosa o bien cocida?', a: 'A gusto: centro tembloroso = jugosa (mi voto); 2 min más por lado = firme. Las dos son válidas, tu tortilla manda.' }
      ],
      guardar: 'Heladera 3-4 días tapada. Fría es un manjar; tibia, 40 segundos de micro. Viaja perfecta al trabajo.',
      porque: 'La proteína + papa portátil de la semana: se hace una vez, rinde tres viandas, y fría en la oficina es de las cosas más ricas de tu rotación.'
    }
  ]
};

COMIDAS_TANDA_2.cenas.forEach((r) => COMIDAS.cena.recetas.push(r));
COMIDAS_TANDA_2.almuerzos.forEach((r) => COMIDAS.almuerzo.recetas.push(r));
