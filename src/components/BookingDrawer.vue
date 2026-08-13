<script setup>
import { useBooking } from '../store/booking'
import { formatPrice } from '../utils/format'

const booking = useBooking()
</script>

<template>
  <div
    v-if="booking.count > 0"
    class="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:inset-x-auto lg:bottom-6 lg:right-6 lg:px-0 lg:pb-0"
  >
    <div
      class="mx-auto w-full max-w-md rounded-t-2xl bg-deep-sage p-5 text-warm-silk shadow-lift lg:w-96 lg:rounded-2xl"
    >
      <div class="flex items-center justify-between">
        <h4 class="font-display text-lg">{{ booking.count }} Paket Dipilih</h4>
        <button
          class="grid h-9 w-9 place-items-center rounded-full text-warm-silk/70 transition-colors hover:bg-white/10"
          aria-label="Kosongkan semua pilihan"
          @click="booking.clear()"
        >
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <ul class="mt-3 max-h-32 space-y-1 overflow-y-auto text-sm text-warm-silk/85">
        <li
          v-for="service in booking.selectedServices"
          :key="service.id"
          class="flex justify-between gap-2"
        >
          <span class="truncate">{{ service.title }}</span>
          <span class="shrink-0">{{ formatPrice(service.price) }}</span>
        </li>
      </ul>

      <div
        class="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-sm"
      >
        <span>Estimasi Durasi</span>
        <span class="font-semibold">{{ booking.totalDuration }} Menit</span>
      </div>
      <div class="mt-1 flex items-center justify-between text-sm">
        <span>Estimasi Total</span>
        <span class="text-lg font-bold text-terracotta-rose-soft">
          {{ formatPrice(booking.totalPrice) }}
        </span>
      </div>

      <RouterLink to="/reservasi" class="btn btn-primary mt-4 w-full">
        Lanjut ke Reservasi
      </RouterLink>
    </div>
  </div>
</template>
