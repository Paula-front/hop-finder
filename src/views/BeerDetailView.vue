<template>
  <section class="beer-detail-page">
    <p v-if="beerStore.isLoading" class="section-status">
      Cargando detalle...
    </p>

    <p v-else-if="beerStore.error" class="section-status section-status--error">
      {{ beerStore.error }}
    </p>

    <article v-else-if="beerStore.selectedBeer" class="beer-detail">
      <div class="beer-detail__image">
        <img
          :src="beerStore.selectedBeer.image"
          :alt="beerStore.selectedBeer.name"
        />
      </div>

      <div class="beer-detail__content">
        <RouterLink to="/beers" class="beer-detail__back">
          ← Volver a cervezas
        </RouterLink>

        <span class="beer-detail__style">
          {{ beerStore.selectedBeer.style }}
        </span>

        <h1>{{ beerStore.selectedBeer.name }}</h1>

        <p class="beer-detail__tagline">
          {{ beerStore.selectedBeer.tagline }}
        </p>

        <p>
          {{ beerStore.selectedBeer.description }}
        </p>

        <div class="beer-detail__stats">
          <span>ABV {{ beerStore.selectedBeer.abv }}%</span>
          <span>IBU {{ beerStore.selectedBeer.ibu }}</span>
          <span>{{ beerStore.selectedBeer.firstBrewed }}</span>
        </div>

        <div
          v-if="beerStore.selectedBeer.foodPairing.length"
          class="beer-detail__section"
        >
          <h2>Maridaje recomendado</h2>
          <ul>
            <li
              v-for="food in beerStore.selectedBeer.foodPairing"
              :key="food"
            >
              {{ food }}
            </li>
          </ul>
        </div>

        <div
          v-if="beerStore.selectedBeer.brewersTips"
          class="beer-detail__section"
        >
          <h2>Tips del maestro cervecero</h2>
          <p>{{ beerStore.selectedBeer.brewersTips }}</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBeerStore } from '../stores/beerStore'

const route = useRoute()
const beerStore = useBeerStore()

onMounted(() => {
  beerStore.fetchBeerById(route.params.id)
})
</script>