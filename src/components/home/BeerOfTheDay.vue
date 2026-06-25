<template>
  <section class="beer-of-day">
    <SectionTitle
      kicker="Beer of the Day"
      title="La cerveza destacada de hoy"
      description="Una recomendación aleatoria desde la API para descubrir nuevos estilos y perfiles de sabor."
    />

    <p v-if="beerStore.isLoading" class="section-status">
      Cargando cerveza destacada...
    </p>

    <article v-else-if="beerStore.randomBeer" class="beer-hero">
      <div class="beer-hero__image">
        <img
          :src="beerStore.randomBeer.image"
          :alt="beerStore.randomBeer.name"
        />
      </div>

      <div class="beer-hero__content">
        <span class="beer-hero__badge">Today's Pick</span>

        <h3>{{ beerStore.randomBeer.name }}</h3>

        <p class="beer-hero__tagline">
          {{ beerStore.randomBeer.tagline }}
        </p>

        <p>
          {{ beerStore.randomBeer.description }}
        </p>

        <div class="beer-hero__stats">
          <span>★ {{ beerStore.randomBeer.rating }}</span>
          <span>ABV {{ beerStore.randomBeer.abv }}%</span>
          <span>IBU {{ beerStore.randomBeer.ibu }}</span>
        </div>

        <RouterLink
          :to="`/beers/${beerStore.randomBeer.id}`"
          class="btn btn-primary"
        >
          Explorar cerveza
        </RouterLink>
      </div>
    </article>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBeerStore } from '../../stores/beerStore'

import SectionTitle from '../ui/SectionTitle.vue'

const beerStore = useBeerStore()

onMounted(() => {
  beerStore.fetchRandomBeer()
})
</script>