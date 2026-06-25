<template>
  <section class="style-section">

    <SectionTitle
      kicker="Browse by Style"
      title="Explora por estilo cervecero"
      description="Elige una categoría para descubrir sabores, intensidad y perfiles distintos."
    />

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
import SectionTitle from '../ui/SectionTitle.vue'
import StyleCard from '../beer/StyleCard.vue'

import { beerStyles } from '../../data/beerStyles'
</script>