<template>
  <article class="style-card" :class="`style-card--${style.slug}`">
    <div class="style-card__top">
      <span class="style-card__icon">{{ style.icon }}</span>
      <span class="style-card__range">{{ style.range }}</span>
    </div>

    <h3>{{ style.name }}</h3>
    <p>{{ style.description }}</p>

    <div class="style-card__details">
      <span>{{ style.profile }}</span>
      <span>{{ style.alcohol }}</span>
    </div>

    <RouterLink :to="`/beers?style=${style.slug}`" class="style-card__link">
      Explorar →
    </RouterLink>
  </article>
</template>

<script setup>
defineProps({
  style: {
    type: Object,
    required: true
  }
})
</script>