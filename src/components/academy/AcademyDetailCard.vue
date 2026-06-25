<template>
  <article class="academy-detail-card">
    <div class="academy-detail-card__icon">
      {{ topic.icon }}
    </div>

    <div>
      <span class="academy-detail-card__level">
        {{ topic.level }}
      </span>

      <h3>{{ topic.title }}</h3>
      <p class="academy-detail-card__subtitle">{{ topic.subtitle }}</p>
      <p>{{ topic.description }}</p>

      <div class="academy-detail-card__example">
        <strong>Ejemplo:</strong>
        <span>{{ topic.example }}</span>
      </div>

      <div class="academy-scale">
        <span
          v-for="item in topic.scale"
          :key="item"
        >
          {{ item }}
        </span>
      </div>

      <p class="academy-detail-card__tip">
        💡 {{ topic.tip }}
      </p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  topic: {
    type: Object,
    required: true
  }
})
</script>