# Template Website Salon, Skincare & Spa

Template website statis untuk **salon, klinik skincare, dan spa** - mobile-first, tanpa
backend, dan reservasi dikirim langsung ke WhatsApp pemilik bisnis. Seluruh konten
dikendalikan dari satu file konfigurasi (`src/config/content.js`).

## Fitur

- **6 halaman**: Beranda, Tentang Kami, Layanan & Harga, Galeri, Reservasi, dan halaman 404 ramah pengunjung
- **Booking multi-layanan**: pilih beberapa treatment, estimasi total & durasi dihitung otomatis
- **Kirim lewat WhatsApp** (`wa.me`): tidak ada server, tidak ada database
- **Tombol WhatsApp mengambang** di seluruh halaman (otomatis sembunyi di halaman Reservasi)
- **Logo gambar**: pakai file logo Anda sendiri, atau biarkan kosong untuk logo teks
- **Rating testimoni**: bintang rating per ulasan, bisa dimatikan lewat satu pengaturan
- **SEO dinamis**: judul halaman, meta description, dan tag Open Graph otomatis dari konfigurasi
- Slider sebelum/sesudah, kapsul gambar, filter kategori layanan, pencarian
- Layout mobile-first, tema warm (sage, terracotta, cream), font Playfair Display + Plus Jakarta Sans
- Dukungan aksesibilitas dasar dan `prefers-reduced-motion`

## Struktur Proyek

```
lumina_web/
├── index.html               # Kerangka HTML, meta default
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── logo-sample.svg  # Contoh logo (lihat konfigurasi logoImage)
│       └── placeholder.svg  # Fallback otomatis untuk foto yang kosong
└── src/
    ├── main.js              # Entry point Vue
    ├── App.vue              # Kerangka: header, footer, dock, WA mengambang
    ├── assets/main.css      # Tokens warna, komponen util (btn, chip, input)
    ├── config/content.js    # ★ SEMUA KONTEN SITUS DI SINI
    ├── composables/
    │   └── useSeo.js        # Update judul & meta tiap pindah halaman
    ├── router/index.js      # Daftar halaman (hash router, termasuk 404)
    ├── store/booking.js     # State pilihan layanan (dibagikan lintas halaman)
    ├── utils/format.js      # Format harga, tanggal, link WhatsApp, status buka
    ├── components/          # Komponen bersama
    └── views/               # Halaman
```

## Menjalankan

```bash
npm install
npm run dev      # pengembangan (http://localhost:5173)
npm run build    # produksi -> folder dist/
npm run preview  # pratinjau hasil build
```

## Cara Menyesuaikan

### 1. Identitas bisnis & kontak

Buka `src/config/content.js` -> bagian `site`:

| Field | Keterangan |
| --- | --- |
| `businessName` | Nama lengkap bisnis |
| `shortName` | Nama pendek untuk logo teks |
| `logoImage` | Path logo gambar (lihat bagian Logo di bawah) |
| `tagline` | Kalimat singkat branding |
| `heroTitle` / `heroSubtitle` | Teks utama di beranda |
| `whatsappNumber` | Nomor WA format internasional tanpa `+` (misal `6281234567890`) |
| `phone`, `email` | Kontak yang tampil di footer |
| `instagram` | URL Instagram (kosongkan jika tidak dipakai) |
| `address`, `googleMapsUrl` | Alamat & link peta (kosongkan jika tidak dipakai) |
| `hours.openDays` | Hari buka, `0` = Minggu, `1` = Senin, dst. |
| `hours.open` / `hours.close` | Jam buka & tutup (logika "Buka Hari Ini") |
| `hours.dayText` | Teks jam buka yang tampil di website |

### 2. SEO

Bagian `seo` dipakai otomatis untuk judul halaman, deskripsi di hasil pencarian, dan
tampilan saat link dibagikan di media sosial:

| Field | Keterangan |
| --- | --- |
| `title` | Nama bisnis + kata kunci (misal `Salon Sekar - Salon, Skincare & Spa`) |
| `description` | 1-2 kalimat deskripsi bisnis |
| `ogImage` | URL foto cover untuk media sosial (boleh kosong) |

Judul per halaman otomatis bertambah kata "Beranda - [nama bisnis]", "Reservasi - [nama
bisnis]", dan seterusnya. Jangan lupa ganti placeholder `[..]` di file ini agar hasil
pencarian tidak menampilkan teks template.

### 3. Logo gambar

- Letakkan file logo di `public/images/`, misal `public/images/logo-anda.png`.
- Isi `site.logoImage` dengan `'/images/logo-anda.png'` (bisa juga URL eksternal).
- Logo tampil di header dan footer. Kosongkan `logoImage` (`''`) untuk memakai nama
  bisnis sebagai logo teks.
- File `public/images/logo-sample.svg` adalah contoh untuk melihat cara kerjanya.
  Ganti dengan logo asli sebelum dipublikasikan.

### 4. Daftar layanan & harga

Ubah array `services`. Setiap item:

```js
{
  id: 1,
  category: 'Facial & Skincare',   // harus ada di `categories`
  title: 'Nama Perawatan',
  description: 'Deskripsi singkat',
  duration: 90,                    // menit
  price: 850000,                   // Rupiah
  isFeatured: true,                // tampil di "Pilihan terlaris" beranda
  image: 'https://...',            // URL foto (boleh kosong -> placeholder)
}
```

### 5. Tim spesialis & testimoni

- `specialists`: nama, `role`, `experienceYears`, `bio`, `image`.
- `testimonials`: nama, `rating` (1-5), komentar. Bintang hanya tampil jika
  `showRatings = true`.

### 6. Galeri & konten lain

- `gallery.beforeAfter`: judul, deskripsi, foto sebelum & sesudah.
- `gallery.portfolio` dan `gallery.interiors`: kumpulan foto dengan judul.
- `values`: tiga kartu keunggulan di beranda (ikon Material Symbols).
- `marqueeItems`: teks strip berjalan.
- `heroPills`: kapsul gambar di beranda.
- `about`: cerita, visi, dan misi.

### 7. Foto

Semua `image` bisa diisi URL apa pun. Kosongkan untuk memakai placeholder otomatis
(`public/images/placeholder.svg`). Untuk foto sendiri: taruh file di `public/images/`
lalu isi `image: '/images/nama-file.jpg'`.

### 8. Label "Contoh Data Template"

Template menampilkan label kecil pada data contoh. Setelah konten diganti, matikan dengan
mengubah `showSampleTags = false`. Bintang rating testimoni bisa dimatikan dengan
`showRatings = false`.

### 9. Warna & font

Sesuaikan di `tailwind.config.js` (bagian `theme.extend`) dan `src/assets/main.css`.

## Deploy

Hasil `npm run build` ada di `dist/` - file statis murni, bisa diunggah ke hosting mana
pun. Karena memakai hash router, tidak perlu konfigurasi rewrite server.

- **Vercel / Netlify**: hubungkan repository, build command `npm run build`, output
  directory `dist`.
- **GitHub Pages**: build lalu upload isi `dist/` ke branch `gh-pages`.
- **Shared hosting**: upload isi `dist/` ke folder publik (misal `public_html`).

## FAQ

- **Mengapa masih ada teks dalam kurung siku `[..]`?** Itu placeholder yang sengaja
  dibiarkan agar pembeli tahu bagian mana yang wajib diisi. Ganti semuanya di
  `src/config/content.js` sebelum dipublikasikan.
- **Bagaimana ganti nomor WhatsApp?** Ubah `site.whatsappNumber` ke format internasional
  tanpa `+`. Tombol mengambang, tombol reservasi, dan footer ikut berubah otomatis.
- **Bagaimana pakai logo gambar sendiri?** Ikuti bagian "Logo gambar" di atas.
- **Foto tidak muncul di browser?** Pastikan URL benar, atau gunakan file di
  `public/images/` dengan path seperti `/images/nama-file.jpg`.
- **Bisakah dipakai tanpa font Google?** Ya, cukup hapus link font di `index.html` lalu
  sesuaikan `font-display` dan `font-sans` di `tailwind.config.js`.

## Catatan

- Data reservasi tidak disimpan di server; semuanya lewat pesan WhatsApp dari perangkat
  pengunjung.
- Ikon memakai Material Symbols (Google Fonts); teks memakai Playfair Display & Plus
  Jakarta Sans.
