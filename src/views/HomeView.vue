<script setup>
import { computed } from 'vue'
import {
  site,
  heroPills,
  marqueeItems,
  values,
  services,
  specialists,
  testimonials,
  about,
  showSampleTags,
} from '../config/content'
import { isOpenNow } from '../utils/format'
import { useBooking } from '../store/booking'
import HeroGallery from '../components/HeroGallery.vue'
import MarqueeStrip from '../components/MarqueeStrip.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ServiceCard from '../components/ServiceCard.vue'
import AppImage from '../components/AppImage.vue'
import SampleBadge from '../components/SampleBadge.vue'
import StarRating from '../components/StarRating.vue'
import StatsSection from '../components/StatsSection.vue'

const booking = useBooking()
const openNow = computed(() => isOpenNow(site.hours))
const featuredServices = computed(() =>
  services.filter((s) => s.isFeatured).slice(0, 4),
)

const bookingSteps = [
  {
    title: 'Pilih layanan',
    text: 'Tambahkan perawatan ke paket dan lihat estimasi harga di drawer.',
  },
  {
    title: 'Isi jadwal',
    text: 'Masukkan nama, nomor WhatsApp, tanggal dan jam kedatangan.',
  },
  {
    title: 'Kirim via WhatsApp',
    text: 'Pesan terformat otomatis terkirim, tim kami konfirmasi jadwal Anda.',
  },
]

const trustPoints = ['Bahan terdaftar BPOM', 'Terapis bersertifikat', 'Ruang privat steril']

function scrollToPricing() {
  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main>
    <!-- ============ HERO ============ -->
    <section class="container-page pb-12 pt-28 md:pt-36">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div v-reveal>
          <p class="eyebrow">Salon, Skincare & Spa</p>
          <h1 class="text-4xl leading-[1.12] text-deep-sage md:text-5xl lg:text-6xl">
            {{ site.heroTitle }}
          </h1>
          <p class="mt-5 max-w-xl text-base leading-relaxed text-sage-muted md:text-lg">
            {{ site.heroSubtitle }}
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <button class="btn btn-primary" @click="scrollToPricing">
              Lihat Menu & Harga
            </button>
            <RouterLink to="/reservasi" class="btn btn-outline">
              Reservasi Sekarang
            </RouterLink>
          </div>

          <ul class="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-deep-sage">
            <li
              v-for="point in trustPoints"
              :key="point"
              class="flex items-center gap-1.5"
            >
              <span class="material-symbols-outlined !text-lg text-terracotta-rose-dark">
                check_circle
              </span>
              {{ point }}
            </li>
          </ul>
        </div>

        <div class="min-w-0 lg:pl-6">
          <HeroGallery :items="heroPills" />
        </div>
      </div>
    </section>

    <!-- ============ STATISTIK ============ -->
    <StatsSection />

    <!-- ============ MARQUEE ============ -->
    <MarqueeStrip :items="marqueeItems" />

    <!-- ============ KEUNGGULAN ============ -->
    <section class="section bg-cream">
      <div class="container-page">
        <SectionHeading
          eyebrow="Keunggulan Kami"
          title="Alasan pelanggan mempercayakan perawatan mereka"
        />
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div
            v-for="(value, index) in values"
            :key="index"
            v-reveal="index * 90"
            class="rounded-2xl border border-deep-sage/5 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            :class="index === 1 ? 'md:-translate-y-4' : ''"
          >
            <span
              class="grid h-12 w-12 place-items-center rounded-full text-white"
              :class="index === 1 ? 'bg-terracotta-rose-dark' : 'bg-deep-sage'"
            >
              <span class="material-symbols-outlined">{{ value.icon }}</span>
            </span>
            <h3 class="mt-6 text-xl text-deep-sage">{{ value.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-sage-muted">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TENTANG RINGKASAN ============ -->
    <section class="section">
      <div class="container-page grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal class="relative max-w-md mx-auto w-full lg:max-w-none">
          <div class="crop-organic aspect-[4/5] overflow-hidden shadow-lift">
            <AppImage
              :src="about.storyImage"
              :alt="`Suasana perawatan di ${site.businessName}`"
              class="h-full w-full object-cover"
            />
          </div>
          <blockquote
            class="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-deep-sage p-5 text-sm leading-relaxed text-warm-silk shadow-lift"
          >
            Setiap perawatan diawali konsultasi singkat dan dipimpin oleh terapis
            bersertifikat.
          </blockquote>
        </div>

        <div v-reveal>
          <SectionHeading
            align="left"
            :eyebrow="`Tentang ${site.businessName}`"
            title="Kecantikan yang lahir dari harmoni"
          />
          <p class="mt-5 leading-relaxed text-sage-muted">{{ about.story }}</p>
          <p class="mt-4 leading-relaxed text-sage-muted">
            {{ about.storySecond }}
          </p>
          <RouterLink to="/about" class="btn btn-outline mt-8">
            Selengkapnya Tentang Kami
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ============ LAYANAN & PRICELIST ============ -->
    <section id="pricing" class="section scroll-mt-24 bg-cream">
      <div class="container-page">
        <div
          class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <SectionHeading
            align="left"
            eyebrow="Layanan & Harga"
            title="Pilihan perawatan terlaris"
            lead="Harga transparan dan durasi yang jelas, tanpa biaya tersembunyi."
          />
          <RouterLink to="/services" class="btn btn-outline shrink-0">
            Lihat Semua Layanan
          </RouterLink>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            v-for="(service, index) in featuredServices"
            :key="service.id"
            v-reveal="index * 90"
            :service="service"
            :selected="booking.isSelected(service.id)"
            @toggle="booking.toggle"
          />
        </div>
      </div>
    </section>

    <!-- ============ CARA RESERVASI / WHATSAPP ============ -->
    <section class="section">
      <div class="container-page grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal class="order-2 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="Cara Reservasi"
            title="Reservasi 30 detik lewat WhatsApp"
            lead="Tanpa download aplikasi dan tanpa antre. Pilih layanan, isi jadwal, kirim pesan, tim kami konfirmasi."
          />
          <ol class="mt-8 space-y-5">
            <li
              v-for="(step, index) in bookingSteps"
              :key="index"
              v-reveal="index * 90"
              class="flex gap-4"
            >
              <span
                class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-muted-sand font-display font-bold text-deep-sage"
              >
                {{ index + 1 }}
              </span>
              <div>
                <p class="font-semibold text-deep-sage">{{ step.title }}</p>
                <p class="mt-1 text-sm text-sage-muted">{{ step.text }}</p>
              </div>
            </li>
          </ol>
        </div>

        <div v-reveal class="order-1 flex justify-center lg:order-2">
          <div
            class="relative w-64 rounded-[2.5rem] border-[6px] border-deep-sage bg-warm-silk p-4 shadow-lift"
          >
            <div class="mb-3 flex items-center gap-2.5 border-b border-deep-sage/10 pb-3">
              <span
                class="grid h-9 w-9 place-items-center rounded-full bg-terracotta-rose text-sm font-bold text-white"
              >
                L
              </span>
              <div>
                <p class="text-sm font-semibold leading-tight text-deep-sage">
                  {{ site.businessName }}
                </p>
                <p class="text-xs text-sage-muted">WhatsApp</p>
              </div>
            </div>
            <div class="space-y-2 text-xs leading-relaxed">
              <p
                class="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-terracotta-rose/15 px-3 py-2 text-deep-sage"
              >
                Halo, saya mau reservasi signature facial besok
              </p>
              <p
                class="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-muted-sand px-3 py-2 text-deep-sage"
              >
                Baik kak, jadwal tersedia pukul 11.00. Kami konfirmasi segera ya
              </p>
              <p
                class="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-terracotta-rose/15 px-3 py-2 text-deep-sage"
              >
                Siap, terima kasih
              </p>
            </div>
            <div class="mt-4 flex justify-center">
              <SampleBadge />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TIM SPESIALIS ============ -->
    <section class="section bg-cream">
      <div class="container-page">
        <div class="flex flex-col items-center gap-3 text-center">
          <SectionHeading
            eyebrow="Tim Spesialis"
            title="Ditangani tangan-tangan berpengalaman"
            lead="Terapis dan spesialis kami bersertifikat dan menjalani pelatihan berkala."
          />
          <SampleBadge v-if="showSampleTags" />
        </div>

        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <div
            v-for="(specialist, index) in specialists"
            :key="specialist.name"
            v-reveal="index * 90"
            class="group overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            :class="index === 1 ? 'md:translate-y-6' : ''"
          >
            <div class="aspect-square overflow-hidden bg-muted-sand">
              <AppImage
                :src="specialist.image"
                :alt="specialist.name"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div class="p-5">
              <h3 class="text-xl text-deep-sage">{{ specialist.name }}</h3>
              <p class="mt-1 text-sm font-semibold text-terracotta-rose-deep">
                {{ specialist.role }}
              </p>
              <p class="mt-3 text-sm text-sage-muted">{{ specialist.bio }}</p>
              <p class="mt-4 text-xs font-semibold text-deep-sage">
                {{ specialist.experienceYears }} tahun pengalaman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONI ============ -->
    <section class="section">
      <div class="container-page">
        <SectionHeading
          eyebrow="Ulasan Pelanggan"
          title="Apa kata mereka setelah berkunjung"
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
          <SampleBadge />
          <p class="text-xs text-sage-muted">
            Ulasan di atas adalah contoh data template. Ganti dengan ulasan asli
            pelanggan Anda.
          </p>
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

    <!-- ============ MARQUEE ============ -->
    <MarqueeStrip :items="marqueeItems" />

    <!-- ============ CTA RESERVASI ============ -->
    <section class="section">
      <div class="container-page">
        <div
          v-reveal
          class="relative overflow-hidden rounded-3xl bg-deep-sage px-6 py-12 text-center text-warm-silk md:px-12 md:py-16"
        >
          <p
            class="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display text-[9rem] font-bold leading-none text-warm-silk/5"
            aria-hidden="true"
          >
            {{ site.shortName }}
          </p>
          <p
            class="mx-auto flex w-fit items-center gap-2 rounded-full bg-warm-silk/10 px-4 py-1.5 text-sm font-semibold"
          >
            <span
              class="h-2 w-2 rounded-full"
              :class="openNow ? 'bg-green-400' : 'bg-red-400'"
            ></span>
            {{ openNow ? 'Buka Hari Ini' : 'Tutup Sekarang' }} · {{ site.hours.dayText }}
          </p>
          <h2 class="mx-auto mt-6 max-w-2xl text-3xl leading-tight md:text-4xl">
            Siap merawat kulit dan tubuh Anda?
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-warm-silk/80">
            Reservasi hari ini, tim kami akan menghubungi Anda untuk konfirmasi
            jadwal.
          </p>
          <RouterLink to="/reservasi" class="btn btn-primary mt-8">
            Reservasi Sekarang
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
