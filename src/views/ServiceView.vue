<script setup>
import { computed, ref } from 'vue'
import { categories, services } from '../config/content'
import { useBooking } from '../store/booking'
import ServiceFilterChips from '../components/ServiceFilterChips.vue'
import ServiceCard from '../components/ServiceCard.vue'
import BookingDrawer from '../components/BookingDrawer.vue'

const booking = useBooking()
const activeCategory = ref('Semua')
const searchQuery = ref('')

const filteredServices = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return services.filter((service) => {
    const matchesCategory =
      activeCategory.value === 'Semua' ||
      service.category === activeCategory.value
    const matchesQuery =
      !query ||
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query)
    return matchesCategory && matchesQuery
  })
})
</script>

<template>
  <main>
    <section class="container-page pb-10 pt-28 md:pt-36">
      <div v-reveal class="text-center">
        <p class="eyebrow !justify-center">Layanan & Harga</p>
        <h1 class="text-3xl leading-tight md:text-5xl">Katalog Layanan</h1>
        <p class="mx-auto mt-5 max-w-2xl text-sage-muted">
          Temukan perawatan yang Anda butuhkan, pilih beberapa sekaligus, dan
          lihat estimasi total di panel bawah layar.
        </p>
      </div>

      <div class="mt-10 flex flex-col gap-4">
        <ServiceFilterChips
          :categories="categories"
          :active="activeCategory"
          @change="(cat) => (activeCategory = cat)"
        />
        <div class="relative max-w-md">
          <span
            class="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-deep-sage/50"
          >
            search
          </span>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Cari nama perawatan..."
            class="input !pl-11"
            aria-label="Cari layanan"
          />
        </div>
      </div>
    </section>

    <section class="container-page pb-24">
      <p class="mb-5 text-sm text-sage-muted">
        {{ filteredServices.length }} perawatan ditemukan
      </p>

      <div v-if="filteredServices.length > 0" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="(service, index) in filteredServices"
          :key="service.id"
          v-reveal="index * 60"
          :service="service"
          :selected="booking.isSelected(service.id)"
          @toggle="booking.toggle"
        />
      </div>

      <div
        v-else
        class="flex flex-col items-center rounded-2xl border border-dashed border-deep-sage/20 bg-white/60 px-6 py-16 text-center"
      >
        <span class="material-symbols-outlined text-5xl text-deep-sage/30">
          search_off
        </span>
        <h3 class="mt-4 text-lg text-deep-sage">Tidak ada layanan yang cocok</h3>
        <p class="mt-2 max-w-sm text-sm text-sage-muted">
          Coba kata kunci lain atau tampilkan kembali seluruh kategori.
        </p>
        <button
          class="btn btn-outline mt-6 !h-10 !px-5 !text-sm"
          @click="
            searchQuery = '';
            activeCategory = 'Semua';
          "
        >
          Reset Filter
        </button>
      </div>
    </section>

    <BookingDrawer />
  </main>
</template>
