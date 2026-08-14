<script setup>
import { gallery, site, testimonials } from '../config/content'
import SectionHeading from '../components/SectionHeading.vue'
import BeforeAfterSlider from '../components/BeforeAfterSlider.vue'
import AppImage from '../components/AppImage.vue'
import StarRating from '../components/StarRating.vue'
</script>

<template>
  <main>
    <section class="container-page pb-10 pt-28 md:pt-36">
      <div v-reveal class="text-center">
        <p class="eyebrow !justify-center">Galeri Transformasi</p>
        <h1 class="text-3xl leading-tight md:text-5xl">Galeri Transformasi</h1>
        <p class="mx-auto mt-5 max-w-2xl text-sage-muted">
          Geser garis pada foto sebelum dan sesudah untuk melihat hasil
          perawatan, lalu jelajahi suasana ruang perawatan kami.
        </p>
      </div>
    </section>

    <!-- Before / After -->
    <section class="container-page pb-12">
      <div class="flex flex-col items-center gap-3 text-center">
        <SectionHeading
          eyebrow="Sebelum & Sesudah"
          :title="`Hasil perawatan ${gallery.beforeAfter.title}`"
        />
      </div>
      <p class="mx-auto mt-4 max-w-xl text-center text-sm text-sage-muted">
        {{ gallery.beforeAfter.description }}
      </p>
      <div v-reveal class="mx-auto mt-8 max-w-4xl">
        <BeforeAfterSlider
          :before="gallery.beforeAfter.before"
          :after="gallery.beforeAfter.after"
        />
      </div>
    </section>

    <!-- Portofolio -->
    <section class="section bg-cream">
      <div class="container-page">
        <SectionHeading
          eyebrow="Portofolio"
          title="Setiap perawatan adalah cerita pembaruan"
        />
        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            v-for="(item, index) in gallery.portfolio"
            :key="item.title"
            v-reveal="index * 90"
            class="group relative overflow-hidden rounded-2xl shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            :class="index === 0 ? 'md:row-span-2' : ''"
          >
            <div class="aspect-[4/5] h-full">
              <AppImage
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div
              class="absolute inset-0 flex items-end bg-gradient-to-t from-deep-sage/80 via-transparent to-transparent p-5"
            >
              <div>
                <span
                  class="rounded-full bg-terracotta-rose-dark px-3 py-1 text-xs font-semibold text-white"
                >
                  {{ item.tag }}
                </span>
                <h3 class="mt-2 text-lg text-warm-silk">{{ item.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Suasana -->
    <section class="section">
      <div class="container-page">
        <SectionHeading
          eyebrow="Suasana"
          title="Ruang yang dirancang untuk menenangkan"
          lead="Ruang privat, pencahayaan hangat, dan area tunggu yang nyaman."
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <figure
            v-for="(interior, index) in gallery.interiors"
            :key="interior.title"
            v-reveal="index * 90"
            class="group overflow-hidden rounded-2xl shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <div class="aspect-[4/5] overflow-hidden">
              <AppImage
                :src="interior.image"
                :alt="interior.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption class="flex items-center justify-between bg-white px-5 py-4">
              <span class="text-sm font-semibold text-deep-sage">
                {{ interior.title }}
              </span>
              <span class="text-xs text-sage-muted">Ruang {{ interior.title }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Ulasan -->
    <section class="section bg-cream">
      <div class="container-page">
        <SectionHeading
          eyebrow="Ulasan"
          title="Pengalaman pelanggan di tempat kami"
        />
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <figure
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.name"
            v-reveal="index * 90"
            class="flex flex-col rounded-2xl border border-deep-sage/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <span class="material-symbols-outlined text-3xl text-terracotta-rose">
              format_quote
            </span>
            <StarRating :rating="testimonial.rating" class="mt-3" />
            <blockquote class="mt-3 flex-1 leading-relaxed text-deep-sage">
              {{ testimonial.comment }}
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-3 border-t border-deep-sage/10 pt-4">
              <span
                class="grid h-10 w-10 place-items-center rounded-full bg-deep-sage text-sm font-bold text-warm-silk"
              >
                {{ testimonial.name.charAt(0) }}
              </span>
              <span class="text-sm font-semibold text-deep-sage">
                {{ testimonial.name }}
              </span>
            </figcaption>
          </figure>
        </div>
        <div class="mt-8 flex flex-col items-center gap-3 text-center">
          <a
            v-if="site.googleMapsUrl"
            :href="site.googleMapsUrl"
            target="_blank"
            rel="noopener"
            class="text-sm font-semibold text-terracotta-rose-deep underline decoration-terracotta-rose underline-offset-4"
          >
            Lihat ulasan di Google Maps
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
