<template>
  <div class="app">
    <Navbar />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
</script>