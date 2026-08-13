<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <div class="relative overflow-hidden bg-deep-sage py-5 md:py-6" aria-hidden="true">
    <div class="animate-marquee-x flex w-max whitespace-nowrap group-hover:[animation-play-state:paused]">
      <div
        v-for="(row, r) in 2"
        :key="r"
        class="flex shrink-0 items-center"
        :class="r === 1 ? 'pl-0' : ''"
      >
        <span
          v-for="(item, i) in items"
          :key="`${r}-${i}`"
          class="flex items-center gap-6 pr-6 font-display text-lg font-semibold uppercase tracking-[0.2em] text-warm-silk/90"
        >
          {{ item }}
          <span class="material-symbols-outlined !text-base text-terracotta-rose">
            spa
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
