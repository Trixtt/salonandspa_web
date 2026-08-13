<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  align: { type: String, default: 'center' },
})
</script>

<template>
  <div
    class="max-w-2xl"
    :class="align === 'center' ? 'mx-auto text-center' : ''"
  >
    <p
      v-if="eyebrow"
      class="eyebrow"
      :class="align === 'center' ? 'justify-center' : ''"
    >
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl leading-tight text-deep-sage md:text-4xl">{{ title }}</h2>
    <p v-if="lead" class="mt-4 text-base leading-relaxed text-sage-muted">
      {{ lead }}
    </p>
  </div>
</template>
