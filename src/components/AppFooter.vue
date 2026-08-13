<script setup>
import { site } from '../config/content'
import BrandLogo from './BrandLogo.vue'

const year = new Date().getFullYear()

const navigation = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang Kami' },
  { to: '/services', label: 'Layanan' },
  { to: '/gallery', label: 'Galeri' },
  { to: '/reservasi', label: 'Reservasi' },
]
</script>

<template>
  <footer class="mt-auto bg-deep-sage text-warm-silk">
    <div class="container-page grid grid-cols-1 gap-10 py-14 md:grid-cols-12 md:py-16">
      <div class="md:col-span-5">
        <BrandLogo onDark size="lg" />
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-warm-silk/80">
          {{ site.tagline }}
        </p>
        <p class="mt-4 inline-flex items-center gap-2 text-sm text-warm-silk/80">
          <span class="material-symbols-outlined !text-base text-terracotta-rose">schedule</span>
          {{ site.hours.dayText }}
        </p>
      </div>

      <nav class="md:col-span-3" aria-label="Navigasi footer">
        <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-warm-silk/60">
          Eksplorasi
        </h4>
        <ul class="mt-4 space-y-3 text-sm">
          <li v-for="item in navigation" :key="item.to">
            <RouterLink
              :to="item.to"
              class="text-warm-silk/80 transition-colors hover:text-terracotta-rose"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="md:col-span-4">
        <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-warm-silk/60">
          Kontak
        </h4>
        <ul class="mt-4 space-y-3 text-sm text-warm-silk/80">
          <li class="flex items-start gap-2">
            <span class="material-symbols-outlined !text-base text-terracotta-rose">location_on</span>
            {{ site.address }}
          </li>
          <li class="flex items-center gap-2">
            <span class="material-symbols-outlined !text-base text-terracotta-rose">call</span>
            {{ site.phone }}
          </li>
          <li class="flex items-center gap-2">
            <span class="material-symbols-outlined !text-base text-terracotta-rose">mail</span>
            {{ site.email }}
          </li>
          <li>
            <a
              v-if="site.instagram"
              :href="site.instagram"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 transition-colors hover:text-terracotta-rose"
            >
              <span class="material-symbols-outlined !text-base text-terracotta-rose">photo_camera</span>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div
        class="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-warm-silk/60 sm:flex-row"
      >
        <p>© {{ year }} {{ site.businessName }}. Semua hak dilindungi.</p>
        <p>Template website siap dikustomisasi untuk bisnis Anda.</p>
      </div>
    </div>
  </footer>
</template>
