export const academyTopics = [
  {
    id: 'abv',
    title: 'ABV',
    subtitle: 'Alcohol By Volume',
    icon: '🍺',
    level: 'Beginner',
    shortDescription: 'Indica el porcentaje de alcohol de una cerveza.',
    description:
      'ABV significa Alcohol By Volume. Mide qué porcentaje del volumen total de la cerveza corresponde a alcohol.',
    example: 'Una cerveza con 5% ABV tiene 5% de alcohol por volumen.',
    scale: ['0%', '3%', '5%', '8%', '12%+'],
    tip: 'Más ABV no siempre significa mejor cerveza, solo indica mayor graduación alcohólica.'
  },
  {
    id: 'ibu',
    title: 'IBU',
    subtitle: 'International Bitterness Units',
    icon: '🌿',
    level: 'Beginner',
    shortDescription: 'Mide el nivel de amargor de una cerveza.',
    description:
      'IBU mide el amargor de una cerveza, principalmente asociado al uso del lúpulo.',
    example: 'Una Lager puede tener IBU bajo, mientras que una IPA suele tener IBU más alto.',
    scale: ['0', '20', '40', '60', '80+'],
    tip: 'IBU no mide alcohol. Una cerveza puede ser amarga y tener poco alcohol.'
  },
  {
    id: 'ipa',
    title: 'IPA',
    subtitle: 'India Pale Ale',
    icon: '🌱',
    level: 'Beginner',
    shortDescription: 'Estilo aromático, lupulado y con amargor marcado.',
    description:
      'La IPA es un estilo conocido por su presencia de lúpulo, aromas cítricos, florales o resinosos y un amargor más notorio.',
    example: 'Punk IPA es un ejemplo clásico dentro de este perfil.',
    scale: ['Suave', 'Media', 'Amarga', 'Intensa'],
    tip: 'Las IPA suelen combinar muy bien con comidas especiadas o hamburguesas.'
  },
  {
    id: 'lager',
    title: 'Lager',
    subtitle: 'Fermentación baja',
    icon: '🍻',
    level: 'Beginner',
    shortDescription: 'Cerveza limpia, ligera y refrescante.',
    description:
      'Las Lager suelen ser cervezas de sabor limpio, cuerpo ligero y final refrescante.',
    example: 'Es uno de los estilos más populares para quienes comienzan a explorar cerveza.',
    scale: ['Ligera', 'Refrescante', 'Limpia'],
    tip: 'No todas las Lager son simples; algunas tienen perfiles muy complejos.'
  },
  {
    id: 'stout',
    title: 'Stout',
    subtitle: 'Oscura y tostada',
    icon: '☕',
    level: 'Intermediate',
    shortDescription: 'Cerveza oscura con notas a café, cacao o malta tostada.',
    description:
      'La Stout destaca por su color oscuro, cuerpo más cremoso y sabores tostados.',
    example: 'Puede recordar a café, chocolate amargo o pan tostado.',
    scale: ['Tostada', 'Cremosa', 'Intensa'],
    tip: 'Una Stout no siempre tiene más alcohol que una cerveza clara.'
  },
  {
    id: 'porter',
    title: 'Porter',
    subtitle: 'Maltosa y oscura',
    icon: '🍫',
    level: 'Intermediate',
    shortDescription: 'Estilo oscuro, suave y con carácter maltoso.',
    description:
      'La Porter es una cerveza oscura con notas tostadas, cacao, caramelo o frutos secos.',
    example: 'Suele ser menos intensa que algunas Stout, pero muy sabrosa.',
    scale: ['Maltosa', 'Tostada', 'Suave'],
    tip: 'Combina muy bien con carnes, postres de chocolate y quesos maduros.'
  },
  {
    id: 'wheat',
    title: 'Wheat Beer',
    subtitle: 'Cerveza de trigo',
    icon: '🌾',
    level: 'Beginner',
    shortDescription: 'Cerveza fresca, suave y elaborada con trigo.',
    description:
      'Las cervezas de trigo suelen ser ligeras, suaves y con una textura agradable.',
    example: 'Muchas Wheat Beer tienen notas frutales o especiadas.',
    scale: ['Suave', 'Ligera', 'Fresca'],
    tip: 'Son ideales para quienes prefieren cervezas menos amargas.'
  },
  {
    id: 'sour',
    title: 'Sour Beer',
    subtitle: 'Ácida y frutal',
    icon: '🍒',
    level: 'Intermediate',
    shortDescription: 'Cerveza con acidez marcada y perfil expresivo.',
    description:
      'Las Sour Beer destacan por su acidez, frescura y muchas veces por notas frutales.',
    example: 'Pueden recordar a frutas rojas, cítricos o sabores fermentados.',
    scale: ['Ácida', 'Frutal', 'Expresiva'],
    tip: 'Son una gran opción para quienes buscan sabores diferentes.'
  }
]