<template>
  <div class="app">
    <Navbar />
    <ResponsibleModal />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue'
import ResponsibleModal from './components/ui/ResponsibleModal.vue'
</script>