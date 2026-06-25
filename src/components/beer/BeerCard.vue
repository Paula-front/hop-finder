<template>
  <article class="beer-card">
    <button
      class="beer-card__favorite"
      :class="{ 'beer-card__favorite--active': beerStore.isFavorite(beer.id) }"
      type="button"
      :aria-label="beerStore.isFavorite(beer.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'"
      @click="beerStore.toggleFavorite(beer)"
    >
      ♥
    </button>

    <div class="beer-card__image-wrap">
      <img
        class="beer-card__image"
        :src="beer.image"
        :alt="beer.name"
      />
    </div>

    <div class="beer-card__content">
      <div class="beer-card__rating">★ {{ beer.rating }}</div>

      <h3>{{ beer.name }}</h3>
      <p class="beer-card__brewery">{{ beer.brewery }}</p>
      <p class="beer-card__tagline">{{ beer.tagline }}</p>

      <div class="beer-card__chips">
        <span>{{ beer.style }}</span>
        <span>ABV {{ beer.abv }}%</span>
        <span>IBU {{ beer.ibu }}</span>
      </div>

      <RouterLink :to="`/beers/${beer.id}`" class="beer-card__link">
        Ver detalle →
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import { useBeerStore } from '../../stores/beerStore'

defineProps({
  beer: {
    type: Object,
    required: true
  }
})

const beerStore = useBeerStore()
</script>