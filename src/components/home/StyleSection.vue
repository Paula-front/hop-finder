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
import { beerStyles } from '../../data/beerStyles'
</script>