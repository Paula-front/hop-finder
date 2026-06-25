<template>
  <section class="featured-section">
    <SectionTitle
      kicker="Featured Beers"
      title="Cervezas destacadas"
      description="Una selección inicial para explorar estilos, intensidad y perfiles de sabor."
    />

    <div class="beer-grid">
      <BeerCard
        v-for="beer in featuredBeers"
        :key="beer.id"
        :beer="beer"
      />
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../ui/SectionTitle.vue'
import BeerCard from '../beer/BeerCard.vue'

import { featuredBeers } from '../../data/featuredBeers'
</script>