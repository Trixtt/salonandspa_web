<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { site } from '../config/content'
import { isOpenNow } from '../utils/format'
import { useBooking } from '../store/booking'

const route = useRoute()
const booking = useBooking()
const openNow = computed(() => isOpenNow(site.hours))
const hidden = computed(
  () =>
    route.name === 'reservation' ||
    (route.name === 'services' && booking.count > 0),
)
</script>

<template>
  <div v-if="!hidden" class="fixed inset-x-0 bottom-0 z-30 lg:hidden">
    <div
      class="border-t border-white/10 bg-deep-sage px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-warm-silk"
    >
      <div class="flex items-center justify-between gap-3">
        <div class="min-w-0">
          <p class="flex items-center gap-1.5 text-sm font-semibold">
            <span
              class="h-2 w-2 rounded-full"
              :class="openNow ? 'bg-green-400' : 'bg-red-400'"
            ></span>
            {{ openNow ? 'Buka Hari Ini' : 'Tutup Sekarang' }}
          </p>
          <p class="truncate text-xs text-warm-silk/70">
            {{ site.hours.dayText }}
          </p>
        </div>
        <RouterLink to="/reservasi" class="btn btn-primary shrink-0 !h-11 !px-5">
          Reservasi
        </RouterLink>
      </div>
    </div>
  </div>
</template>
