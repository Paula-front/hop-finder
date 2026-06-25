<template>
  <section class="hero">
    <div class="hero__content">
      <span class="hero__badge">Craft Beer Explorer</span>

      <h1>
        Discover your next
        <span>favorite beer.</span>
      </h1>

      <p>
        Explora cervezas artesanales, compara estilos y aprende conceptos como
        ABV, IBU, IPA y Lager en una experiencia visual e interactiva.
      </p>

      <SearchBar
        v-model="search"
        placeholder="Buscar cervezas por nombre o estilo..."
      />

      <div class="hero__actions">
        <RouterLink to="/beers" class="btn btn-primary">
          Explorar cervezas
        </RouterLink>

        <RouterLink to="/academy" class="btn btn-secondary">
          Beer Academy
        </RouterLink>
      </div>
    </div>

    <div class="hero__card">
      <span class="hero__card-label">Beer of the day</span>
      <h2>Punk IPA</h2>
      <p>Bold. Hoppy. Fresh.</p>

      <div class="hero__stats">
        <span>ABV 5.6%</span>
        <span>IBU 35</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from '../ui/SearchBar.vue'

const search = ref('')
</script>