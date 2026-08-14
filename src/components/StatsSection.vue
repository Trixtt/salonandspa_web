<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { stats } from '../config/content'

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const displayed = ref(stats.map((s) => (reducedMotion() ? s.value : 0)))
const rootRef = ref(null)
let observer = null
let rafId = null

function formatValue(value) {
  return value.toLocaleString('id-ID')
}

function animateTo(index, target) {
  const duration = 1400
  const start = performance.now()
  function tick(now) {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    displayed.value[index] = Math.round(eased * target)
    if (t < 1) rafId = requestAnimationFrame(tick)
    else displayed.value[index] = target
  }
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (reducedMotion() || !rootRef.value) return
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat, index) => animateTo(index, stat.value))
          observer.disconnect()
        }
      })
    },
    { threshold: 0.2 },
  )
  observer.observe(rootRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <section ref="rootRef" class="bg-cream" aria-label="Statistik">
    <div class="container-page">
      <div class="flex flex-col items-center gap-3 py-12 text-center md:py-16">
        <p class="eyebrow !justify-center">Angka Kami</p>
        <h2 class="text-2xl leading-tight text-deep-sage md:text-3xl">
          Masalah perawatan yang telah kami atasi
        </h2>

        <div
          class="mt-8 grid w-full grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4"
        >
          <div v-for="(stat, index) in stats" :key="stat.label" class="text-center">
            <p class="font-display text-4xl font-bold text-deep-sage md:text-5xl">
              {{ formatValue(displayed[index]) }}<span class="text-terracotta-rose-dark">{{ stat.suffix }}</span>
            </p>
            <p
              class="mx-auto mt-2 max-w-[9rem] text-xs font-semibold uppercase tracking-[0.18em] text-sage-muted"
            >
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
