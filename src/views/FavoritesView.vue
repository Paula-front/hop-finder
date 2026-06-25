<template>
  <section class="favorites-page">
    <SectionTitle
      kicker="Favorites"
      title="Tus cervezas favoritas"
      description="Guarda cervezas para revisarlas después y comparar estilos, ABV, IBU y maridajes."
    />

    <div v-if="beerStore.favorites.length" class="beer-grid">
      <BeerCard
        v-for="beer in beerStore.favorites"
        :key="beer.id"
        :beer="beer"
      />
    </div>

    <div v-else class="empty-state">
      <h2>Aún no tienes favoritos</h2>
      <p>Explora cervezas y presiona el corazón para guardarlas aquí.</p>

      <RouterLink to="/beers" class="btn btn-primary">
        Explorar cervezas
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useBeerStore } from '../stores/beerStore'

import SectionTitle from '../components/ui/SectionTitle.vue'
import BeerCard from '../components/beer/BeerCard.vue'

const beerStore = useBeerStore()
</script>