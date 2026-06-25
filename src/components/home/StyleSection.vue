<template>
  <section class="style-section">
    <div class="section-header">
      <span class="section-kicker">Browse by Style</span>
      <h2>Explora por estilo cervecero</h2>
      <p>Elige una categoría para descubrir sabores, intensidad y perfiles distintos.</p>
    </div>

    <div class="style-grid">
      <article
        v-for="style in beerStyles"
        :key="style.name"
        class="style-card"
      >
        <span class="style-card__icon">{{ style.icon }}</span>
        <h3>{{ style.name }}</h3>
        <p>{{ style.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const beerStyles = [
  {
    name: 'IPA',
    icon: '🌿',
    description: 'Aromática, lupulada y con amargor marcado.'
  },
  {
    name: 'Lager',
    icon: '🍺',
    description: 'Ligera, limpia y refrescante.'
  },
  {
    name: 'Stout',
    icon: '☕',
    description: 'Oscura, tostada y con notas a café o chocolate.'
  },
  {
    name: 'Porter',
    icon: '🍫',
    description: 'Maltosa, suave y con carácter tostado.'
  },
  {
    name: 'Wheat',
    icon: '🌾',
    description: 'Suave, fresca y con cuerpo ligero.'
  },
  {
    name: 'Sour',
    icon: '🍒',
    description: 'Ácida, frutal y muy expresiva.'
  }
]
</script>