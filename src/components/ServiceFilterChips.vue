<script setup>
defineProps({
  categories: { type: Array, required: true },
  active: { type: String, default: 'Semua' },
})

defineEmits(['change'])
</script>

<template>
  <div
    class="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
    role="tablist"
    aria-label="Filter kategori layanan"
  >
    <button
      class="chip"
      :class="active === 'Semua' ? 'chip-active' : 'chip-idle'"
      role="tab"
      :aria-selected="active === 'Semua'"
      @click="$emit('change', 'Semua')"
    >
      Semua
    </button>
    <button
      v-for="cat in categories"
      :key="cat"
      class="chip"
      role="tab"
      :class="active === cat ? 'chip-active' : 'chip-idle'"
      :aria-selected="active === cat"
      @click="$emit('change', cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>
