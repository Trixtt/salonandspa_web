<script setup>
import { showSampleTags } from '../config/content'
</script>

<template>
  <span
    v-if="showSampleTags"
    class="inline-flex items-center gap-1 rounded-full border border-terracotta-rose/40 bg-terracotta-rose/10 px-2.5 py-0.5 text-[11px] font-semibold text-terracotta-rose-deep"
  >
    <span class="material-symbols-outlined !text-xs">info</span>
    Contoh Data Template
  </span>
</template>
