<template>
  <section class="did-you-know">
    <div class="did-you-know__content">
      <span class="did-you-know__badge">Did you know?</span>

      <h2>{{ currentFact.title }}</h2>
      <p>{{ currentFact.text }}</p>

      <RouterLink to="/academy" class="did-you-know__link">
        Ir a Beer Academy →
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { beerFacts } from '../../data/beerFacts'

const currentFact = computed(() => {
  const index = Math.floor(Math.random() * beerFacts.length)
  return beerFacts[index]
})
</script>