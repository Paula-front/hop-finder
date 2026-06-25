<template>
  <header class="navbar">
    <RouterLink to="/" class="navbar__brand">
      <span class="navbar__logo">HF</span>
      <span>Hop Finder</span>
    </RouterLink>

    <nav class="navbar__links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/beers">Beers</RouterLink>
      <RouterLink to="/academy">Beer Academy</RouterLink>
      <RouterLink to="/favorites">
        Favorites
        <span v-if="beerStore.favoritesCount" class="navbar__counter">
          {{ beerStore.favoritesCount }}
        </span>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { useBeerStore } from '../../stores/beerStore'

const beerStore = useBeerStore()
</script>