<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import AppImage from './AppImage.vue'

const props = defineProps({
  before: { type: String, required: true },
  after: { type: String, required: true },
  beforeLabel: { type: String, default: 'Sebelum' },
  afterLabel: { type: String, default: 'Sesudah' },
})

const pos = ref(50)
const dragging = ref(false)
const container = ref(null)

function setFromClientX(clientX) {
  const rect = container.value.getBoundingClientRect()
  const pct = ((clientX - rect.left) / rect.width) * 100
  pos.value = Math.min(100, Math.max(0, pct))
}

function onDown(event) {
  dragging.value = true
  setFromClientX(event.clientX)
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', onUp)
}
function onMove(event) {
  if (dragging.value) setFromClientX(event.clientX)
}
function onUp() {
  dragging.value = false
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerup', onUp)
}
function onKey(event) {
  if (event.key === 'ArrowLeft') pos.value = Math.max(0, pos.value - 5)
  if (event.key === 'ArrowRight') pos.value = Math.min(100, pos.value + 5)
}

onMounted(() => {
  if (props.before === props.after) pos.value = 50
})
onUnmounted(() => {
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerup', onUp)
})
</script>

<template>
  <div
    ref="container"
    class="relative aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-2xl select-none md:aspect-[16/9]"
    role="slider"
    aria-label="Slider perbandingan sebelum dan sesudah perawatan"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="Math.round(pos)"
    tabindex="0"
    @pointerdown="onDown"
    @keydown="onKey"
  >
    <AppImage
      :src="after"
      :alt="afterLabel"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div
      class="absolute inset-0"
      :style="{ clipPath: `inset(0 0 0 ${pos}%)` }"
    >
      <AppImage
        :src="before"
        :alt="beforeLabel"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>

    <div
      class="absolute inset-y-0 z-10 w-0.5 bg-white"
      :style="{ left: `calc(${pos}% - 1px)` }"
    >
      <div
        class="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lift"
      >
        <span class="material-symbols-outlined text-deep-sage">swap_horiz</span>
      </div>
    </div>

    <span
      class="pointer-events-none absolute bottom-3 left-3 rounded-full bg-deep-sage/85 px-3 py-1 text-xs font-semibold text-warm-silk"
    >
      {{ beforeLabel }}
    </span>
    <span
      class="pointer-events-none absolute bottom-3 right-3 rounded-full bg-terracotta-rose-dark/90 px-3 py-1 text-xs font-semibold text-white"
    >
      {{ afterLabel }}
    </span>
  </div>
</template>
