<script setup>
import { computed } from 'vue'
import { site } from '../config/content'

const props = defineProps({
  size: { type: String, default: 'md' },
  onDark: { type: Boolean, default: false },
})

const logoSrc = computed(() => {
  if (!site.logoImage) return ''
  return site.logoImage.startsWith('http')
    ? site.logoImage
    : import.meta.env.BASE_URL + site.logoImage.replace(/^\//, '')
})

const imgClass = computed(
  () =>
    ({
      sm: 'h-9 w-auto',
      md: 'h-10 w-auto md:h-12',
      lg: 'h-12 w-auto md:h-14',
    })[props.size] || 'h-10 w-auto md:h-12',
)

const textClass = computed(() => {
  const base =
    'whitespace-nowrap font-display font-bold tracking-[0.12em] lg:tracking-[0.2em]'
  const size =
    ({ sm: 'text-base', md: 'text-base md:text-xl', lg: 'text-2xl md:text-3xl' })[
      props.size
    ] || 'text-base md:text-xl'
  const color = props.onDark ? 'text-warm-silk' : 'text-deep-sage'
  const dot = props.onDark ? 'text-terracotta-rose' : 'text-terracotta-rose-dark'
  return `${base} ${size} ${color}`
})

const dotClass = computed(() =>
  props.onDark ? 'text-terracotta-rose' : 'text-terracotta-rose-dark',
)
</script>

<template>
  <img
    v-if="logoSrc"
    :src="logoSrc"
    :alt="site.businessName"
    :class="imgClass"
    class="max-w-[11rem] object-contain"
  />
  <span v-else :class="textClass">
    {{ site.shortName }}<span :class="dotClass">.</span>
  </span>
</template>
