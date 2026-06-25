<template>
  <section class="beers-page">
    <SectionTitle
      kicker="Beer Explorer"
      title="Explora cervezas"
      description="Busca por nombre, estilo o descripción. También puedes filtrar por estilos cerveceros."
    />

    <SearchBar
      v-model="search"
      placeholder="Buscar por nombre, estilo o descripción..."
      :suggestions="searchSuggestions"
    />

    <div class="filter-chips">
      <button
        v-for="style in styleFilters"
        :key="style"
        type="button"
        class="filter-chip"
        :class="{ 'filter-chip--active': selectedStyle === style }"
        @click="toggleStyle(style)"
      >
        {{ style }}
      </button>
    </div>

    <p v-if="beerStore.isLoading" class="section-status">
      Cargando cervezas...
    </p>

    <p v-else-if="beerStore.error" class="section-status section-status--error">
      {{ beerStore.error }}
    </p>

    <div v-else-if="filteredBeers.length" class="beer-grid">
      <BeerCard
        v-for="beer in filteredBeers"
        :key="beer.id"
        :beer="beer"
      />
    </div>

    <div v-else class="empty-state">
      <h2>No encontramos esa cerveza</h2>
      <p>Prueba con otro nombre, estilo o limpia los filtros.</p>

      <button type="button" class="btn btn-primary" @click="clearFilters">
        Limpiar búsqueda
      </button>
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
const selectedStyle = ref(route.query.style || '')

const styleFilters = ['IPA', 'Lager', 'Stout', 'Porter', 'Wheat', 'Sour']

onMounted(() => {
  beerStore.fetchBeers()
})

const filteredBeers = computed(() => {
  const query = search.value.toLowerCase().trim()
  const style = selectedStyle.value.toLowerCase().trim()

  return beerStore.beers.filter((beer) => {
    const matchesSearch =
      !query ||
      beer.name.toLowerCase().includes(query) ||
      beer.style.toLowerCase().includes(query) ||
      beer.description.toLowerCase().includes(query)

    const matchesStyle =
      !style ||
      beer.name.toLowerCase().includes(style) ||
      beer.style.toLowerCase().includes(style) ||
      beer.description.toLowerCase().includes(style)

    return matchesSearch && matchesStyle
  })
})

const searchSuggestions = computed(() => {
  if (search.value.trim().length < 2) {
    return []
  }

  return filteredBeers.value.slice(0, 5)
})

const toggleStyle = (style) => {
  selectedStyle.value = selectedStyle.value === style ? '' : style
}

const clearFilters = () => {
  search.value = ''
  selectedStyle.value = ''
}
</script>