<template>
  <header class="section-title">
    <span class="section-title__kicker">
      {{ kicker }}
    </span>

    <h2 class="section-title__heading">
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="section-title__description"
    >
      {{ description }}
    </p>
  </header>
</template>

<script setup>
defineProps({
  kicker: {
    type: String,
    default: ''
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    default: ''
  }
})
</script>