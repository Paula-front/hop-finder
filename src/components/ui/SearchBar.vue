<template>
  <div class="smart-search">
    <label class="search-bar">
      <span class="search-bar__icon">⌕</span>

      <input
        :value="modelValue"
        class="search-bar__input"
        type="search"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>

    <div v-if="suggestions.length" class="search-suggestions">
      <RouterLink
        v-for="beer in suggestions"
        :key="beer.id"
        :to="`/beers/${beer.id}`"
        class="search-suggestion"
      >
        <img :src="getBeerImage(beer)" :alt="beer.name" />
        <span>{{ beer.name }}</span>
        <small>{{ beer.style }}</small>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { getBeerImage } from '../../utils/beerImage'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Search beers...'
  },
  suggestions: {
    type: Array,
    default: () => []
  }
})

defineEmits(['update:modelValue'])
</script>