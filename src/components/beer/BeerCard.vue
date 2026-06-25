<template>
  <article class="beer-card">
    <button class="beer-card__favorite" type="button" aria-label="Agregar a favoritos">
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
defineProps({
  beer: {
    type: Object,
    required: true
  }
})
</script>