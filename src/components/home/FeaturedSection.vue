<template>
  <section class="featured-section">
    <SectionTitle
      kicker="Featured Beers"
      title="Cervezas destacadas"
      description="Una selección inicial para explorar estilos, intensidad y perfiles de sabor."
    />

    <p v-if="beerStore.isLoading" class="section-status">
      Cargando cervezas...
    </p>

    <p v-else-if="beerStore.error" class="section-status section-status--error">
      {{ beerStore.error }}
    </p>

    <div v-else class="beer-grid">
      <BeerCard
        v-for="beer in beerStore.beers.slice(0, 3)"
        :key="beer.id"
        :beer="beer"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBeerStore } from '../../stores/beerStore'

import SectionTitle from '../ui/SectionTitle.vue'
import BeerCard from '../beer/BeerCard.vue'

const beerStore = useBeerStore()

onMounted(() => {
  beerStore.fetchBeers()
})
</script>