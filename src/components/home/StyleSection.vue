<template>
  <section class="style-section">
    <div class="section-header">
      <span class="section-kicker">Browse by Style</span>
      <h2>Explora por estilo cervecero</h2>
      <p>Elige una categoría para descubrir sabores, intensidad y perfiles distintos.</p>
    </div>

    <div class="style-grid">
      <StyleCard
        v-for="style in beerStyles"
        :key="style.slug"
        :style="style"
      />
    </div>
  </section>
</template>

<script setup>
import StyleCard from '../beer/StyleCard.vue'

const beerStyles = [
  {
    slug: 'ipa',
    name: 'IPA',
    icon: '🌿',
    range: 'IBU alto',
    profile: 'Lupulada',
    alcohol: '5% - 7.5%',
    description: 'Aromática, intensa y con amargor marcado.'
  },
  {
    slug: 'lager',
    name: 'Lager',
    icon: '🍺',
    range: 'IBU bajo',
    profile: 'Refrescante',
    alcohol: '4% - 5.5%',
    description: 'Ligera, limpia y fácil de beber.'
  },
  {
    slug: 'stout',
    name: 'Stout',
    icon: '☕',
    range: 'Cuerpo alto',
    profile: 'Tostada',
    alcohol: '4% - 8%',
    description: 'Oscura, cremosa y con notas a café o chocolate.'
  },
  {
    slug: 'porter',
    name: 'Porter',
    icon: '🍫',
    range: 'Maltosa',
    profile: 'Tostada',
    alcohol: '4.5% - 6.5%',
    description: 'Suave, oscura y con carácter a malta tostada.'
  },
  {
    slug: 'wheat',
    name: 'Wheat',
    icon: '🌾',
    range: 'Cuerpo medio',
    profile: 'Suave',
    alcohol: '4% - 5.5%',
    description: 'Fresca, ligera y elaborada con trigo.'
  },
  {
    slug: 'sour',
    name: 'Sour',
    icon: '🍒',
    range: 'Ácida',
    profile: 'Frutal',
    alcohol: '3% - 6%',
    description: 'Expresiva, ácida y muchas veces frutal.'
  }
]
</script>