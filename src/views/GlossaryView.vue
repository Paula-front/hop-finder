<template>
  <section class="academy-page">
    <SectionTitle
      kicker="Beer Academy"
      title="Aprende sobre cerveza artesanal"
      description="Conceptos simples para entender estilos, amargor, alcohol, perfiles de sabor y cultura cervecera."
    />

    <SearchBar
      v-model="search"
      placeholder="Buscar concepto: ABV, IBU, IPA, Lager..."
    />

    <div class="academy-levels">
      <button
        v-for="level in levels"
        :key="level"
        type="button"
        class="filter-chip"
        :class="{ 'filter-chip--active': selectedLevel === level }"
        @click="toggleLevel(level)"
      >
        {{ level }}
      </button>
    </div>

    <div class="academy-detail-grid">
      <AcademyDetailCard
        v-for="topic in filteredTopics"
        :key="topic.id"
        :topic="topic"
      />
    </div>

    <div v-if="!filteredTopics.length" class="empty-state">
      <h2>No encontramos ese concepto</h2>
      <p>Prueba buscando ABV, IBU, IPA, Lager, Stout o Sour.</p>

      <button type="button" class="btn btn-primary" @click="clearFilters">
        Limpiar búsqueda
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

import SectionTitle from '../components/ui/SectionTitle.vue'
import SearchBar from '../components/ui/SearchBar.vue'
import AcademyDetailCard from '../components/academy/AcademyDetailCard.vue'

import { academyTopics } from '../data/academyTopics'

const search = ref('')
const selectedLevel = ref('')

const levels = ['Beginner', 'Intermediate']

const filteredTopics = computed(() => {
  const query = search.value.toLowerCase().trim()
  const level = selectedLevel.value.toLowerCase().trim()

  return academyTopics.filter((topic) => {
    const matchesSearch =
      !query ||
      topic.title.toLowerCase().includes(query) ||
      topic.subtitle.toLowerCase().includes(query) ||
      topic.shortDescription.toLowerCase().includes(query) ||
      topic.description.toLowerCase().includes(query)

    const matchesLevel = !level || topic.level.toLowerCase() === level

    return matchesSearch && matchesLevel
  })
})

const toggleLevel = (level) => {
  selectedLevel.value = selectedLevel.value === level ? '' : level
}

const clearFilters = () => {
  search.value = ''
  selectedLevel.value = ''
}
</script>