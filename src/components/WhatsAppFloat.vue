<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { site } from '../config/content'
import WhatsAppIcon from './WhatsAppIcon.vue'

const route = useRoute()

// Floating WhatsApp disembunyikan di halaman reservasi karena halaman itu
// sudah memiliki tombol kirim via WhatsApp.
const isReservationPage = computed(() => route.path === '/reservasi')

const message = encodeURIComponent(`Halo ${site.businessName}, saya ingin bertanya.`)
const href = `https://wa.me/${site.whatsappNumber}?text=${message}`
</script>

<template>
  <a
    v-if="!isReservationPage && site.whatsappNumber"
    :href="href"
    target="_blank"
    rel="noopener"
    aria-label="Chat WhatsApp"
    class="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105 active:scale-95 lg:bottom-6"
  >
    <WhatsAppIcon sizeClass="h-7 w-7" />
  </a>
</template>
