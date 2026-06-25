<template>
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
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Search beers...'
  }
})

defineEmits(['update:modelValue'])
</script>