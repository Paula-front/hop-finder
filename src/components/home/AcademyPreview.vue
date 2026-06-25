<template>
  <section class="academy-preview">
    <SectionTitle
      kicker="Beer Academy"
      title="Aprende mientras exploras"
      description="Conceptos simples para entender estilos, intensidad, amargor y porcentaje de alcohol."
    />

    <div class="academy-grid">
      <AcademyCard
        v-for="topic in academyTopics"
        :key="topic.id"
        :topic="topic"
      />
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../ui/SectionTitle.vue'
import AcademyCard from '../academy/AcademyCard.vue'

import { academyTopics } from '../../data/academyTopics'
</script>