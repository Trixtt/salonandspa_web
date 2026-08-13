<script setup>
import { formatPrice } from '../utils/format'
import AppImage from './AppImage.vue'

defineProps({
  service: { type: Object, required: true },
  selected: { type: Boolean, default: false },
})

defineEmits(['toggle'])
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-2xl border border-deep-sage/10 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
  >
    <div class="relative h-44 overflow-hidden">
      <AppImage
        :src="service.image"
        :alt="service.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute left-3 top-3 flex items-center gap-2">
        <span class="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-deep-sage">
          {{ service.category }}
        </span>
        <span
          v-if="service.isFeatured"
          class="rounded-full bg-terracotta-rose-dark px-3 py-1 text-xs font-semibold text-white"
        >
          Terlaris
        </span>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-5">
      <h3 class="text-xl text-deep-sage">{{ service.title }}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-sage-muted">
        {{ service.description }}
      </p>

      <p class="mt-4 flex items-center gap-1.5 text-sm text-sage-muted">
        <span class="material-symbols-outlined !text-base">schedule</span>
        {{ service.duration }} Menit
      </p>

      <div
        class="mt-4 flex items-center justify-between gap-2 border-t border-deep-sage/10 pt-4"
      >
        <p class="text-lg font-bold text-terracotta-rose-dark">
          {{ formatPrice(service.price) }}
        </p>
        <button
          class="chip !h-10 !px-4 !text-sm"
          :class="selected ? 'chip-active' : 'chip-idle'"
          :aria-pressed="selected"
          @click="$emit('toggle', service.id)"
        >
          <span class="material-symbols-outlined !text-lg">
            {{ selected ? 'check' : 'add' }}
          </span>
          {{ selected ? 'Dipilih' : 'Tambah ke Paket' }}
        </button>
      </div>
    </div>
  </article>
</template>
