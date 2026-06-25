<template>
  <section class="beers-page">
    <SectionTitle
      kicker="Beer Explorer"
      title="Explora cervezas"
      description="Busca y revisa cervezas reales desde la API, con información de ABV, IBU, estilo e imagen."
    />

    <SearchBar
      v-model="search"
      placeholder="Buscar por nombre, estilo o descripción..."
    />

    <p v-if="beerStore.isLoading" class="section-status">
      Cargando cervezas...
    </p>

    <p v-else-if="beerStore.error" class="section-status section-status--error">
      {{ beerStore.error }}
    </p>

    <div v-else class="beer-grid">
      <BeerCard
        v-for="beer in filteredBeers"
        :key="beer.id"
        :beer="beer"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useBeerStore } from '../stores/beerStore'

import SectionTitle from '../components/ui/SectionTitle.vue'
import SearchBar from '../components/ui/SearchBar.vue'
import BeerCard from '../components/beer/BeerCard.vue'

const route = useRoute()
const beerStore = useBeerStore()
const search = ref(route.query.style || '')

onMounted(() => {
  beerStore.fetchBeers()
})

const filteredBeers = computed(() => {
  const query = search.value.toLowerCase().trim()

  if (!query) {
    return beerStore.beers
  }

  return beerStore.beers.filter((beer) => {
    return (
      beer.name.toLowerCase().includes(query) ||
      beer.style.toLowerCase().includes(query) ||
      beer.description.toLowerCase().includes(query)
    )
  })
})
</script>