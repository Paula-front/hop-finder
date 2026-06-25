<template>
  <div v-if="isVisible" class="modal-overlay">
    <article class="responsible-modal">
      <span class="responsible-modal__badge">Consumo responsable</span>

      <h2>Bienvenido a Hop Finder</h2>

      <p>
        Esta aplicación tiene fines educativos y de demostración tecnológica.
        Promovemos el consumo responsable y la exploración informada de la
        cultura cervecera.
      </p>

      <p class="responsible-modal__warning">
        El consumo de alcohol en menores de 18 años se encuentra prohibido en Chile.
      </p>

      <button class="btn btn-primary" type="button" @click="closeModal">
        Entendido
      </button>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const acceptedNotice = localStorage.getItem('hopFinderResponsibleNotice')

  if (!acceptedNotice) {
    isVisible.value = true
  }
})

const closeModal = () => {
  localStorage.setItem('hopFinderResponsibleNotice', 'accepted')
  isVisible.value = false
}
</script>