<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { site } from '../config/content'
import { isOpenNow } from '../utils/format'
import BrandLogo from './BrandLogo.vue'

const route = useRoute()
const menuOpen = ref(false)
const scrolled = ref(false)
const closeBtn = ref(null)

const nav = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang Kami' },
  { to: '/services', label: 'Layanan' },
  { to: '/gallery', label: 'Galeri' },
]

const openNow = computed(() => isOpenNow(site.hours))

function isActive(path) {
  return route.path === path
}

function onScroll() {
  scrolled.value = window.scrollY > 8
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

watch(menuOpen, async (open) => {
  if (open) {
    await nextTick()
    closeBtn.value?.focus()
  }
})

function onKeydown(event) {
  if (event.key === 'Escape' && menuOpen.value) menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-warm-silk/90 shadow-soft backdrop-blur-md' : 'bg-transparent'"
  >
    <div class="container-page flex h-16 items-center justify-between md:h-20">
      <RouterLink
        to="/"
        class="min-w-0"
        :aria-label="`Beranda ${site.businessName}`"
      >
        <BrandLogo size="md" />
      </RouterLink>

      <nav class="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
        <RouterLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="text-sm font-semibold transition-colors"
          :class="
            isActive(item.to)
              ? 'text-terracotta-rose-deep underline decoration-terracotta-rose underline-offset-8'
              : 'text-deep-sage hover:text-terracotta-rose-deep'
          "
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="hidden md:block">
        <RouterLink to="/reservasi" class="btn btn-primary !h-11 !px-5">
          Reservasi
        </RouterLink>
      </div>

      <button
        class="grid h-11 w-11 place-items-center rounded-full text-deep-sage transition-transform active:scale-95 md:hidden"
        aria-label="Buka menu navigasi"
        @click="menuOpen = true"
      >
        <span class="material-symbols-outlined text-3xl">menu</span>
      </button>
    </div>
  </header>

  <Transition name="drawer">
    <div v-if="menuOpen" class="fixed inset-0 z-50 md:hidden">
      <div
        class="absolute inset-0 bg-deep-sage/50 backdrop-blur-[2px]"
        @click="menuOpen = false"
      ></div>
      <div
        class="drawer-panel absolute inset-y-0 right-0 flex w-72 max-w-[85%] flex-col bg-warm-silk p-6 shadow-lift"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
      >
        <div class="flex items-center justify-between">
          <BrandLogo size="sm" />
          <button
            ref="closeBtn"
            class="grid h-11 w-11 place-items-center rounded-full text-deep-sage transition-transform active:scale-95"
            aria-label="Tutup menu"
            @click="menuOpen = false"
          >
            <span class="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <nav class="mt-8 flex flex-col gap-1" aria-label="Navigasi menu ponsel">
          <RouterLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="rounded-xl px-4 py-3 text-base font-semibold transition-colors"
            :class="
              isActive(item.to)
                ? 'bg-muted-sand text-terracotta-rose-deep'
                : 'text-deep-sage hover:bg-muted-sand/60'
            "
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="mt-auto space-y-4">
          <p
            class="flex items-center gap-2 rounded-xl bg-deep-sage px-4 py-3 text-sm font-semibold text-warm-silk"
          >
            <span
              class="h-2 w-2 rounded-full"
              :class="openNow ? 'bg-green-400' : 'bg-red-400'"
            ></span>
            {{ openNow ? 'Buka Hari Ini' : 'Tutup Sekarang' }}
            <span class="ml-auto text-xs font-normal text-warm-silk/70">
              {{ site.hours.dayText }}
            </span>
          </p>
          <RouterLink to="/reservasi" class="btn btn-primary w-full">
            Reservasi
          </RouterLink>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.25s ease;
}
.drawer-enter-active .drawer-panel,
.drawer-leave-active .drawer-panel {
  transition: transform 0.25s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
.drawer-enter-from .drawer-panel,
.drawer-leave-to .drawer-panel {
  transform: translateX(100%);
}
</style>
