<script setup>
import { computed } from 'vue'
import AppImage from './AppImage.vue'

const props = defineProps({
  items: { type: Array, required: true },
})

const columns = computed(() => {
  const left = []
  const right = []
  props.items.forEach((item, index) => {
    ;(index % 2 === 0 ? left : right).push(item)
  })
  return { left, right }
})

function cardClass(index) {
  return index % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'
}
</script>

<template>
  <div class="group relative" role="img" aria-label="Galeri perawatan berjalan otomatis">
    <div class="grid grid-cols-2 gap-4 sm:gap-5">
      <div
        class="h-[420px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] sm:h-[500px] lg:h-[560px]"
      >
        <div class="animate-marquee-up flex flex-col group-hover:[animation-play-state:paused]">
          <div
            v-for="(item, i) in [...columns.left, ...columns.left]"
            :key="`l${i}`"
            class="pb-5"
          >
            <figure class="rounded-3xl bg-white p-2 shadow-soft">
              <div
                class="overflow-hidden rounded-2xl"
                :class="cardClass(i % columns.left.length)"
              >
                <AppImage
                  :src="item.image"
                  :alt="item.label"
                  class="h-full w-full object-cover"
                />
              </div>
              <figcaption
                class="px-1 pb-1 pt-2 text-center text-xs font-semibold text-deep-sage"
              >
                {{ item.label }}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div
        class="h-[420px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] sm:h-[500px] lg:mt-10 lg:h-[560px]"
      >
        <div class="animate-marquee-down flex flex-col group-hover:[animation-play-state:paused]">
          <div
            v-for="(item, i) in [...columns.right, ...columns.right]"
            :key="`r${i}`"
            class="pb-5"
          >
            <figure class="rounded-3xl bg-white p-2 shadow-soft">
              <div
                class="overflow-hidden rounded-2xl"
                :class="cardClass(i % columns.right.length)"
              >
                <AppImage
                  :src="item.image"
                  :alt="item.label"
                  class="h-full w-full object-cover"
                />
              </div>
              <figcaption
                class="px-1 pb-1 pt-2 text-center text-xs font-semibold text-deep-sage"
              >
                {{ item.label }}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
