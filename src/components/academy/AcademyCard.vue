<template>
  <article class="academy-card">
    <span class="academy-card__level">{{ topic.level }}</span>

    <h3>{{ topic.title }}</h3>
    <p class="academy-card__subtitle">{{ topic.subtitle }}</p>
    <p>{{ topic.description }}</p>

    <RouterLink :to="`/academy?topic=${topic.id}`" class="academy-card__link">
      Aprender más →
    </RouterLink>
  </article>
</template>

<script setup>
defineProps({
  topic: {
    type: Object,
    required: true
  }
})
</script>