<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
})

const failed = ref(false)
const placeholder = `${import.meta.env.BASE_URL}images/placeholder.svg`
const currentSrc = computed(() =>
  !props.src || failed.value ? placeholder : props.src,
)

function onError() {
  failed.value = true
}
</script>

<template>
  <img :src="currentSrc" :alt="alt" loading="lazy" @error="onError" />
</template>
