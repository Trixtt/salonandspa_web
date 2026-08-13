<script setup>
import { computed, ref } from 'vue'
import { site, services } from '../config/content'
import { buildWaMessage, waLink, formatPrice } from '../utils/format'
import { useBooking } from '../store/booking'
import WhatsAppIcon from '../components/WhatsAppIcon.vue'

const booking = useBooking()

function readStored(key) {
  try {
    return localStorage.getItem(key) || ''
  } catch {
    return ''
  }
}

const form = ref({
  name: readStored('booking-name'),
  phone: readStored('booking-phone'),
  date: '',
  time: '',
  notes: '',
})

const errors = ref({})
const submitted = ref(false)
const timeSlots = ['09:00', '11:00', '13:00', '15:00', '17:00', '19:00']
const today = new Date().toISOString().split('T')[0]

const message = computed(() =>
  buildWaMessage(form.value, booking.selectedServices, site),
)
const waHref = computed(() => waLink(site.whatsappNumber, message.value))

function validate() {
  const e = {}
  if (!form.value.name.trim()) e.name = 'Nama lengkap wajib diisi.'
  if (!form.value.phone.trim()) e.phone = 'Nomor WhatsApp wajib diisi.'
  else if (!/^[0-9+ ]{8,}$/.test(form.value.phone.trim()))
    e.phone = 'Format nomor WhatsApp tidak valid.'
  if (!form.value.date) e.date = 'Pilih tanggal kedatangan.'
  if (!form.value.time) e.time = 'Pilih jam kedatangan.'
  if (booking.count === 0) e.services = 'Pilih minimal satu layanan.'
  errors.value = e
  return Object.keys(e).length === 0
}

function submit() {
  if (!validate()) {
    submitted.value = false
    return
  }
  try {
    localStorage.setItem('booking-name', form.value.name.trim())
    localStorage.setItem('booking-phone', form.value.phone.trim())
  } catch {
    /* penyimpanan lokal tidak tersedia */
  }
  window.open(waHref.value, '_blank', 'noopener')
  submitted.value = true
}

function resetForm() {
  submitted.value = false
  form.value.date = ''
  form.value.time = ''
  form.value.notes = ''
}
</script>

<template>
  <main>
    <section class="container-page pb-10 pt-28 md:pt-36">
      <div class="text-center">
        <p class="eyebrow !justify-center">Reservasi Jadwal</p>
        <h1 class="text-3xl leading-tight md:text-5xl">
          Atur jadwal perawatan Anda
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-sage-muted">
          Isi data di bawah, lalu kirim lewat WhatsApp. Tim kami akan membalas
          untuk konfirmasi jadwal.
        </p>
      </div>
    </section>

    <section class="container-page pb-24">
      <div class="grid gap-8 lg:grid-cols-5">
        <!-- ====== FORM ====== -->
        <form class="lg:col-span-3" novalidate @submit.prevent="submit">
          <!-- Pilihan layanan -->
          <div
            class="rounded-2xl border border-deep-sage/10 bg-white p-6 shadow-soft"
          >
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-xl">1. Pilih Layanan</h2>
              <RouterLink
                to="/services"
                class="text-sm font-semibold text-terracotta-rose-deep underline decoration-terracotta-rose underline-offset-4"
              >
                Edit di halaman Layanan
              </RouterLink>
            </div>

            <div v-if="booking.count > 0" class="mt-4 space-y-2">
              <div
                v-for="service in booking.selectedServices"
                :key="service.id"
                class="flex items-center justify-between gap-2 rounded-xl bg-warm-silk px-4 py-3"
              >
                <label
                  class="flex flex-1 cursor-pointer items-center gap-3 text-sm"
                >
                  <input
                    type="checkbox"
                    class="h-5 w-5 rounded accent-terracotta-rose-dark"
                    :checked="booking.isSelected(service.id)"
                    @change="booking.toggle(service.id)"
                  />
                  <span class="font-semibold text-deep-sage">
                    {{ service.title }}
                  </span>
                  <span class="ml-auto shrink-0 text-sage-muted">
                    {{ service.duration }} menit
                  </span>
                  <span class="shrink-0 font-semibold text-terracotta-rose-dark">
                    {{ formatPrice(service.price) }}
                  </span>
                </label>
              </div>
              <p class="mt-2 text-sm text-sage-muted">
                Total: <strong class="text-deep-sage">{{ formatPrice(booking.totalPrice) }}</strong> ·
                Durasi: <strong class="text-deep-sage">{{ booking.totalDuration }} menit</strong>
              </p>
            </div>

            <div
              v-else
              class="mt-4 rounded-xl border border-dashed border-deep-sage/20 bg-warm-silk/60 p-6 text-center"
            >
              <p class="text-sm text-sage-muted">
                Belum ada layanan yang dipilih. Silakan pilih di halaman Layanan.
              </p>
              <RouterLink to="/services" class="btn btn-primary mt-4">
                Pilih Layanan
              </RouterLink>
            </div>
            <p v-if="errors.services" class="mt-2 text-sm text-red-600">
              {{ errors.services }}
            </p>
          </div>

          <!-- Data pribadi -->
          <div
            class="mt-6 rounded-2xl border border-deep-sage/10 bg-white p-6 shadow-soft"
          >
            <h2 class="text-xl">2. Data Diri</h2>
            <div class="mt-4 grid gap-5 sm:grid-cols-2">
              <div>
                <label class="label-form" for="name">Nama Lengkap</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="input"
                  placeholder="Nama lengkap Anda"
                  :class="{ '!border-red-400': errors.name }"
                />
                <p v-if="errors.name" class="mt-1.5 text-sm text-red-600">
                  {{ errors.name }}
                </p>
              </div>
              <div>
                <label class="label-form" for="phone">Nomor WhatsApp Aktif</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="input"
                  placeholder="+62 8xx xxxx xxxx"
                  :class="{ '!border-red-400': errors.phone }"
                />
                <p v-if="errors.phone" class="mt-1.5 text-sm text-red-600">
                  {{ errors.phone }}
                </p>
              </div>
            </div>
          </div>

          <!-- Jadwal -->
          <div
            class="mt-6 rounded-2xl border border-deep-sage/10 bg-white p-6 shadow-soft"
          >
            <h2 class="text-xl">3. Tanggal & Jam Kedatangan</h2>
            <div class="mt-4">
              <label class="label-form" for="date">Tanggal</label>
              <input
                id="date"
                v-model="form.date"
                type="date"
                :min="today"
                class="input"
                :class="{ '!border-red-400': errors.date }"
              />
              <p v-if="errors.date" class="mt-1.5 text-sm text-red-600">
                {{ errors.date }}
              </p>
            </div>

            <div class="mt-5">
              <span class="label-form">Jam Kedatangan</span>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="slot in timeSlots"
                  :key="slot"
                  type="button"
                  class="chip"
                  :class="form.time === slot ? 'chip-active' : 'chip-idle'"
                  :aria-pressed="form.time === slot"
                  @click="form.time = slot"
                >
                  {{ slot }}
                </button>
              </div>
              <p v-if="errors.time" class="mt-1.5 text-sm text-red-600">
                {{ errors.time }}
              </p>
            </div>
          </div>

          <!-- Catatan -->
          <div
            class="mt-6 rounded-2xl border border-deep-sage/10 bg-white p-6 shadow-soft"
          >
            <h2 class="text-xl">4. Catatan Tambahan</h2>
            <label class="label-form mt-4" for="notes">
              Catatan Khusus (opsional)
            </label>
            <textarea
              id="notes"
              v-model="form.notes"
              rows="4"
              class="input resize-none"
              placeholder="Sebutkan alergi, kondisi kulit, atau permintaan khusus lainnya..."
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary mt-8 w-full sm:w-auto sm:px-10">
            <WhatsAppIcon />
            Kirim Reservasi via WA
          </button>

          <p
            v-if="submitted"
            class="mt-5 flex items-start gap-2 rounded-2xl border border-green-600/30 bg-green-50 p-4 text-sm text-green-800"
          >
            <span class="material-symbols-outlined !text-lg">check_circle</span>
            <span>
              WhatsApp telah dibuka dengan draf reservasi Anda. Jika tidak
              terbuka, pastikan aplikasi WhatsApp terpasang di perangkat.
              <button
                type="button"
                class="font-semibold underline underline-offset-2"
                @click="resetForm"
              >
                Reservasi jadwal lain
              </button>
            </span>
          </p>
        </form>

        <!-- ====== PRATINJAU PESAN ====== -->
        <aside class="lg:col-span-2">
          <div class="sticky top-24 rounded-2xl bg-deep-sage p-6 text-warm-silk shadow-lift">
            <div class="flex items-center justify-between">
              <h3 class="font-display text-lg">Pratinjau Pesan</h3>
              <span class="material-symbols-outlined text-terracotta-rose">
                chat
              </span>
            </div>
            <p class="mt-1 text-xs text-warm-silk/60">
              Ini yang akan dikirim ke WhatsApp {{ site.businessName }}
            </p>
            <pre
              class="mt-4 max-h-80 overflow-y-auto whitespace-pre-wrap rounded-xl bg-warm-silk/10 p-4 text-sm leading-relaxed text-warm-silk/90"
              aria-live="polite"
            >{{ message }}</pre>
            <a
              :href="waHref"
              target="_blank"
              rel="noopener"
              class="btn mt-5 w-full !bg-terracotta-rose-soft !text-deep-sage hover:!bg-white"
            >
              <WhatsAppIcon />
              Buka WhatsApp Sekarang
            </a>
            <p class="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-warm-silk/60">
              <span class="material-symbols-outlined !text-sm">lock</span>
              Data Anda hanya dikirim lewat pesan WhatsApp Anda sendiri
            </p>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>
