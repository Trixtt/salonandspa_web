<script setup>
import { computed } from 'vue'
import { showRatings } from '../config/content'

const props = defineProps({
  rating: { type: Number, default: 5 },
})

const stars = computed(() => [1, 2, 3, 4, 5].map((i) => i <= props.rating))

function starStyle(filled) {
  return filled ? { 'font-variation-settings': "'FILL' 1" } : undefined
}
</script>

<template>
  <div
    v-if="showRatings"
    class="flex items-center gap-0.5"
    role="img"
    :aria-label="`Rating ${rating} dari 5`"
  >
    <span
      v-for="(filled, index) in stars"
      :key="index"
      class="material-symbols-outlined !text-lg"
      :class="filled ? 'text-terracotta-rose' : 'text-muted-sand'"
      :style="starStyle(filled)"
      aria-hidden="true"
    >
      star
    </span>
  </div>
</template>
