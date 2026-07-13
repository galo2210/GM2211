// NORTE · contenido COMIDA — recetas con cantidades reales (SISTEMA.md §4.2).
// Objetivo: recomposición. ~2.000-2.100 kcal · 140g+ proteína. El problema es comer POCO:
// densidad calórica sabrosa SÍ (crema, manteca, oliva, palta, miel). Nada acá toca el store.

const COMIDAS = {

  'desayuno': {
    titulo: 'Desayuno',
    recetas: [{
      nombre: 'Tarrito de avena + 2 cafés',
      detalle: '~550 kcal · 30g prot · se come en la oficina',
      ingredientes: [
        '40g de avena',
        '200ml de leche protein',
        '1 scoop de whey',
        '100g de frutos rojos congelados',
        'Miel a gusto',
        'Canela'
      ],
      pasos: [
        'El tarrito se arma la noche anterior (está en tu bloque NOCHE).',
        'A la mañana: agarrarlo de la heladera y llevarlo. Listo.',
        'En la oficina: 2 cafés con leche lo acompañan. Cafeína OK hasta las 15:00.'
      ],
      porque: 'Desayunar 30g de proteína sin cocinar nada a la mañana. La avena banca el hambre hasta el almuerzo.'
    }]
  },

  'almuerzo': {
    titulo: 'Almuerzo',
    recetas: [
      {
        nombre: 'Wrap de jamón, queso y palta',
        detalle: '~500 kcal · 40g prot',
        ingredientes: ['2 tortillas', '4 fetas de jamón', '4 fetas de queso', '1/2 palta', 'Lo que haya de verde'],
        pasos: ['Armar a la mañana o la noche anterior.', 'Si hay tostadora en la oficina, 2 min y cambia todo.'],
        porque: 'Rápido, rico y con la palta sumando las calorías buenas que te faltan.'
      },
      {
        nombre: 'Tupper de atún, huevo y arroz',
        detalle: '~500 kcal · 40g prot',
        ingredientes: ['1 lata de atún', '2 huevos duros', 'Arroz cocido (1 taza)', '1/2 morrón', 'Aceitunas', 'Chorro generoso de oliva'],
        pasos: ['Se arma en 5 min con arroz que ya tengas hecho.', 'El oliva no se escatima: es parte de la comida, no adorno.'],
        porque: 'Proteína doble (atún + huevo) y carbo que rinde para la tarde de trabajo.'
      },
      {
        nombre: 'Yogur proteico + maní + kiwi',
        detalle: '~450 kcal · 35g prot · el de emergencia',
        ingredientes: ['1 yogur Ser Pro', 'Puñado de maní', '1 kiwi', 'Galletas de arroz con Finlandia'],
        pasos: ['Cero preparación: se compra y se come.', 'Es el plan B digno para el día que no armaste nada.'],
        porque: 'Que el peor almuerzo posible siga sumando 35g de proteína.'
      }
    ]
  },

  'post-gym': {
    titulo: 'Post-gym',
    recetas: [{
      nombre: 'Licuado de whey y banana',
      detalle: '~400 kcal · 35g prot · 18:30, LA comida clave',
      ingredientes: ['1 scoop y medio de whey', '1 banana', '250ml de leche', 'Miel si el día fue pesado'],
      pasos: [
        'Licuar y tomar al llegar, ANTES de cualquier otra cosa.',
        'Alternativa válida: adelantar la cena si ya está hecha.',
        'El porro de la vuelta del gym se corre 1 hora: primero esto.'
      ],
      porque: 'Es la comida que más te cuesta y la que más paga: entrenaste, el cuerpo pide material.'
    }]
  },

  'cena': {
    titulo: 'Cena de olla',
    nota: 'Se cocina 1 vez para 2-3 días. Rotan durante la semana.',
    recetas: [
      {
        nombre: 'Pollo a la crema con portobellos y arroz',
        detalle: '~650 kcal · 50g prot por porción · rinde 3',
        ingredientes: ['600g de pollo (pata/muslo deshuesado o pechuga)', '250g de portobellos', '250ml de crema', '1 cebolla', '1 taza y media de arroz (seco)', 'Manteca, sal, pimienta'],
        pasos: [
          'Dorar el pollo en manteca, salpimentado. Retirar.',
          'En la misma olla: cebolla y portobellos hasta que suelten el agua.',
          'Volver el pollo, sumar la crema, 10 min a fuego bajo.',
          'Arroz aparte. Guardar en 3 tuppers: cena de hoy + 2 días resueltos.'
        ],
        porque: 'La crema no es trampa: es la densidad calórica que a vos te falta, con gusto a comida de verdad.'
      },
      {
        nombre: 'Roast beef con puré de papines',
        detalle: '~650 kcal · 50g prot por porción · rinde 3',
        ingredientes: ['700g de roast beef en cubos', '600g de papines', '40g de manteca', '2 dientes de ajo', 'Chorrito de leche', '1 cebolla'],
        pasos: [
          'Dorar fuerte los cubos de carne con la cebolla. Bajar el fuego, tapar, 40 min con un fondo de agua.',
          'Hervir los papines 20 min. Pisarlos con la manteca, el ajo y la leche.',
          'Tuppers: carne + puré. El puré con manteca de verdad, no de dieta.'
        ],
        porque: 'Hierro, proteína y un puré que dan ganas de cenar. Comer rico sostiene el plan.'
      },
      {
        nombre: 'Milanesa al horno + papines',
        detalle: '~700 kcal · 45g prot · 1 vez cada 5-7 días',
        ingredientes: ['2 milanesas de carne o pollo', '400g de papines', 'Oliva, sal, provenzal'],
        pasos: [
          'Horno fuerte: milanesas 12-15 min, papines aplastados con oliva 25 min.',
          'Es LA comida rica de la semana. Sin culpa: está en el plan a propósito.'
        ],
        porque: 'Regla 80/20: la milanesa programada evita la milanesa descontrolada.'
      },
      {
        nombre: 'Fideos con boloñesa casera',
        detalle: '~650 kcal · 45g prot por porción · rinde 3',
        ingredientes: ['500g de carne picada', '1 lata de tomate', '1 cebolla', '1 zanahoria rallada', 'Fideos (100g secos por porción)', 'Toque de crema al final'],
        pasos: [
          'Cebolla y zanahoria en la olla. Sumar la carne y dorar bien.',
          'Tomate, sal, orégano: 20 min a fuego bajo. Toque de crema al apagar.',
          'La salsa se guarda; los fideos se hacen frescos cada noche (8 min).'
        ],
        porque: 'Carbo + proteína en el formato más fácil de comer cuando no hay ganas de nada.'
      },
      {
        nombre: 'Omelette gigante (día flojo)',
        detalle: '~550 kcal · 40g prot · para el día de poca energía',
        ingredientes: ['4 huevos', 'Queso en hebras', '2 fetas de jamón', '1/2 palta encima', 'Manteca'],
        pasos: [
          'Batir, verter en sartén con manteca, fuego medio-bajo.',
          'Queso y jamón adentro, doblar, palta arriba. 6 minutos total.',
          'Este es el "no me da la vida para cocinar" oficial. Cuenta igual.'
        ],
        porque: 'Un día flojo con omelette es un día a ~1.800 kcal: normal, sin culpa, sigue el plan.'
      }
    ]
  },

  'tarrito-avena': {
    titulo: 'Tarrito de avena p/ mañana',
    recetas: [{
      nombre: 'Armado del tarrito (3 minutos)',
      detalle: 'Se hace a la noche, se come mañana en la oficina',
      ingredientes: ['40g de avena', '200ml de leche protein', '1 scoop de whey', '100g de frutos rojos congelados', 'Miel', 'Canela'],
      pasos: [
        'Todo junto en el tarrito. Revolver 10 segundos.',
        'Heladera. Los frutos congelados se descongelan solos a la noche.',
        'A la mañana solo hay que agarrarlo. Ese es el truco: decidir a la noche, no a las 8:10.'
      ],
      porque: 'El desayuno se gana o se pierde la noche anterior. Tres minutos hoy = 30g de proteína mañana.'
    }]
  }
};
