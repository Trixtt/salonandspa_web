<script setup>
import { about, site, specialists } from '../config/content'
import SectionHeading from '../components/SectionHeading.vue'
import AppImage from '../components/AppImage.vue'

const commitments = [
  {
    icon: 'verified_user',
    title: 'Terapis Bersertifikat',
    description:
      'Setiap terapis memiliki sertifikasi resmi dan mengikuti pelatihan berkala.',
  },
  {
    icon: 'science',
    title: 'Bahan BPOM & Aman',
    description:
      'Produk perawatan terdaftar BPOM dan dipilih untuk semua jenis kulit.',
  },
  {
    icon: 'sanitizer',
    title: 'Ruang Private Steril',
    description:
      'Alat steril sekali pakai dan ruang privat untuk setiap sesi perawatan.',
  },
]
</script>

<template>
  <main>
    <!-- Banner -->
    <section class="container-page pb-10 pt-28 md:pt-36">
      <div v-reveal class="text-center">
        <p class="eyebrow !justify-center">Tentang Kami</p>
        <h1 class="mx-auto max-w-3xl text-3xl leading-tight md:text-5xl">
          Mendefinisikan ulang ketenangan alami
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-sage-muted">
          {{ about.story }}
        </p>
      </div>
    </section>

    <section class="container-page pb-12">
      <div
        v-reveal
        class="group relative h-56 overflow-hidden rounded-3xl shadow-lift md:h-[420px]"
      >
        <AppImage
          :src="about.heroImage"
          :alt="`Suasana interior ${site.businessName}`"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </section>

    <!-- Cerita & filosofi -->
    <section class="section bg-cream">
      <div class="container-page grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal class="relative max-w-md mx-auto w-full lg:max-w-none">
          <div class="overflow-hidden rounded-2xl aspect-[4/5] shadow-soft">
            <AppImage
              :src="about.storyImage"
              :alt="`Proses perawatan wajah di ${site.businessName}`"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
        <div v-reveal>
          <SectionHeading
            align="left"
            eyebrow="Cerita Kami"
            title="Kecantikan yang berasal dari harmoni"
          />
          <p class="mt-5 leading-relaxed text-sage-muted">{{ about.story }}</p>
          <p class="mt-4 leading-relaxed text-sage-muted">
            {{ about.storySecond }}
          </p>
          <blockquote
            class="mt-6 rounded-2xl border-l-4 border-terracotta-rose bg-white p-5 text-deep-sage shadow-soft"
          >
            "{{ about.visi }}"
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Komitmen -->
    <section class="section">
      <div class="container-page">
        <SectionHeading
          eyebrow="Komitmen Kami"
          title="Standar yang kami jaga di setiap perawatan"
        />
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div
            v-for="(commitment, index) in commitments"
            :key="commitment.title"
            v-reveal="index * 90"
            class="rounded-2xl border border-deep-sage/5 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            :class="index === 1 ? 'md:-translate-y-4' : ''"
          >
            <span
              class="grid h-12 w-12 place-items-center rounded-full text-white"
              :class="index === 1 ? 'bg-terracotta-rose-dark' : 'bg-deep-sage'"
            >
              <span class="material-symbols-outlined">{{ commitment.icon }}</span>
            </span>
            <h3 class="mt-6 text-xl text-deep-sage">{{ commitment.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-sage-muted">
              {{ commitment.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visi & Misi -->
    <section class="section bg-cream">
      <div class="container-page grid gap-8 lg:grid-cols-2">
        <div
          v-reveal
          class="rounded-3xl bg-deep-sage p-8 text-warm-silk shadow-lift transition-transform duration-300 hover:-translate-y-1.5 md:p-10"
        >
          <h2 class="text-2xl md:text-3xl">Visi</h2>
          <p class="mt-4 leading-relaxed text-warm-silk/85">{{ about.visi }}</p>
        </div>
        <div
          v-reveal="120"
          class="rounded-3xl border border-deep-sage/10 bg-white p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift md:p-10"
        >
          <h2 class="text-2xl md:text-3xl">Misi</h2>
          <ul class="mt-4 space-y-3">
            <li
              v-for="(item, index) in about.misi"
              :key="index"
              class="flex gap-3 leading-relaxed text-sage-muted"
            >
              <span class="material-symbols-outlined !text-lg shrink-0 text-terracotta-rose-dark">
                check_circle
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Tim -->
    <section class="section">
      <div class="container-page">
        <div class="flex flex-col items-center gap-3 text-center">
          <SectionHeading
            eyebrow="Tim Spesialis"
            title="Para ahli di balik setiap perawatan"
            lead="Terapis bersertifikat dengan pengalaman bertahun-tahun di bidangnya."
          />
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

    <!-- CTA -->
    <section class="section pt-0">
      <div class="container-page">
        <div
          v-reveal
          class="rounded-3xl bg-deep-sage px-6 py-12 text-center text-warm-silk md:px-12"
        >
          <h2 class="text-2xl md:text-3xl">
            Kenali lebih dekat sebelum memutuskan
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-warm-silk/80">
            Datang dan rasakan langsung suasana {{ site.businessName }}.
          </p>
          <RouterLink to="/reservasi" class="btn btn-primary mt-7">
            Reservasi Kunjungan
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
