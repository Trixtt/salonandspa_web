// =====================================================================
// KONFIGURASI KONTEN WEBSITE
// Seluruh identitas bisnis dikontrol dari file ini.
//
// ISI DI SINI: lengkapi form data kontak di bawah, lalu build ulang.
// =====================================================================

// Tampilkan bintang rating pada kartu testimoni.
// Rating diatur per-testimoni lewat field "rating" di data testimonials.
export const showRatings = true

export const site = {
  businessName: 'Funny Beauty Studio',
  shortName: 'Funny Beauty Studio',
  // Logo gambar (opsional). Letakkan file di folder public/images/ lalu tulis
  // path-nya di sini, misal '/images/logo-anda.png'. Bisa juga URL gambar apa pun.
  // Kosongkan ('') untuk memakai nama bisnis sebagai logo teks.
  logoImage: '',
  tagline: 'Salon & Klinik Kecantikan',
  heroTitle: 'Rawat Kecantikan Alami, Pancarkan Kepercayaan Diri',
  heroSubtitle:
    'Salon, klinik skincare, dan spa dalam satu tempat. Perawatan dengan bahan terdaftar BPOM, terapis bersertifikat, dan ruang privat yang steril.',
  // ==========================================================
  // FORM DATA KONTAK — isi sendiri
  // Nomor WhatsApp format internasional tanpa tanda + (misal 628xxxxxxxxxx).
  whatsappNumber: '62857280599999',
  phone: '62857280599999',
  // Belum diketahui, isi nanti:
  email: '',
  // Contoh: 'https://instagram.com/namaakun' (kosongkan jika tidak dipakai)
  instagram: 'https://instagram.com/funnybeautystudio_',
  address:
    'Kaliputu, Jl. Sumur Kotak 9, Gg. Nanas No. 45-46, Candi Lor, Singocandi, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59314',
  // Contoh: 'https://maps.google.com/?q=...' (kosongkan jika tidak dipakai)
  googleMapsUrl: '',
  hours: {
    // openDays: 0 = Minggu, 1 = Senin, dst. Sesuaikan hari buka Anda.
    openDays: [0, 1, 2, 3, 4, 5, 6],
    // open/close dipakai logika status "Buka Hari Ini". Sesuaikan jam Anda.
    open: '10:00',
    close: '18:00',
    // Teks jam buka yang tampil di website.
    dayText: 'Setiap hari, 10.00 s.d. 18.00',
  },
}

// Pengaturan SEO. Nilai ini dipakai otomatis untuk judul halaman, deskripsi di
// hasil pencarian, dan tampilan saat link dibagikan di media sosial.
export const seo = {
  title: 'Funny Beauty Studio | Salon & Klinik Kecantikan',
  description:
    'Funny Beauty Studio adalah salon dan klinik kecantikan di Kudus dengan perawatan skincare, spa, dan perawatan rambut. Bahan terdaftar BPOM, terapis bersertifikat, dan ruang privat yang steril.',
  // Foto cover saat link dibagikan (opsional, bisa URL eksternal).
  ogImage: '',
}

// Foto kapsul pada bagian hero (bisa digeser di layar HP)
export const heroPills = [
  {
    label: 'Signature Facial',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTdSAZATljezxDJC5GnAy6Cxp7RwX923Ahav098fSn_eLK9UirGieZ3KGCF3P5XEHkP3GiWCpoJdYy6bH34VDcoQNFtip3EjKcMd3Q-24wZxeiTQ61g_vq9gw72SjiL_EvZlgUP1k4j9j84MKeQx6wV7YCHmZAYJ8C9ytIjzv9mqNcx82lKSNu1DZpmxj4vzqVSNgEP1yLdp9kVgpwlTW3XwTMZFin-ai3bfX4H2nfqV57MZtH_gI3',
  },
  {
    label: 'Balinese Massage',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKSQLIkdlfY8QW5fkhmi2D1WNBHIpsQPkqLDeBShX0OE1302-sW_To74gCWMzd5Vt3J6NztgCR5NVhBsYeHUxpgGb-HvSuPldPGvYDMYGTKNXBS0xSXaGCDcQ9135cuKyMDrG2Tb4Dt2axfQ6ZfOAazu1Qf8mcXUzBqPg3q5R1bjkr0ViVKWn6HX5C5pR0cSekMXQVkS4cBHAGeLX1Hn2Jo5fQFFeH3hZehbxSUmoFOhx1jTtKAqNO',
  },
  {
    label: 'Konsultasi Klinik',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCqSrmD4ryLNNGJCXhZHQx2QI7GqjVWkyKHLVWyc7oUXtP04B2WMTtsuR2wX243PHH4LG0AcC6Anhvsl18P8SjMWefppfIiy8PwQlJT572xX2P7xySjdp7QGxXZnQn3ONRJnRfP2b2pl40vgFfloLxTALOUL11R7bJBkdpVculYO4-pMjuioMrpYx6N3aHdGEkvAnaCaWIdnbjTm07raNaDY-CQTFrbjMTEptIkzm4PKyyZ-1zQhqy',
  },
  {
    label: 'Produk Organik',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHz65VHdR6BoflA_rJXVeZ3F7y-k48B24rEZlB-qa9DNY_IEVqoCb6a9hxpMMV4hvETzTw2Fni5P1goI9uhp_-RFgF4PXaLrsd6c-Cy6ZLaxisEANRyl3azfGwvIZsRtLasK-UQJiJqfcxmeAoQ_b9pfo3iKVkd1ztSEuj7d6-5uvUiv5MjlVZNlGAqUg4gN_z0SLMq_Jthdmacm2xcQWviBX77gdY97srdGkijYpQn7kDOhAA22ag',
  },
  {
    label: 'Ruang Relaksasi',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5jjCKtIth-2zjuXQJjTD82DlLU5V6YC56SsM-BBXcoda72K9UJ8KJ2dX2UHSkf8mr1U-U3l5Zso4xTXHsXpr1xy0diZLhSNugUEZUEx_gMf3OB1Xo4_GqSdAqbIsvegMaIr1eBxd6ZIFJlV5Bs_2k199PQqZq4mRN98xbWuh61xCfbwccutj9xPT52IS0lf79qinTNIw-1WppagmQu5OnfLF0uJdCaYkIt7TBkyhop8PJY5ApBD9D',
  },
  {
    label: 'Terapi Holistik',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqQBWhFuih7OfWz1uDHCZYBlazyW47S1OF_gtXDy_dymG2xYEqxUqrGkM1aiy55bpbvAJWpV2Wvh7zdA1bLVJ4Boamla2eIGSZWdmhwF7z6EagYmFIX-vPrrn1splhsCFgtdvuYEpJxRng7t_KBJV_3RbpRGGdbJH0QyfvSzUefeSnaOO4sBU9Sd_slX_8lloI2bIrDy4SWj1VJUCKnfxnVQPUxsQosNX7v0Tb_IcrtNeT0hsPPX3r',
  },
]

// Teks strip berjalan di antara section (bisa diubah sesuai kebutuhan)
export const marqueeItems = [
  'Facial & Skincare',
  'Hair & Styling',
  'Nail & Lash',
  'Body & Spa',
  'Produk BPOM',
  'Terapis Sertifikat',
]

// Tiga kartu keunggulan utama (floating cards pada halaman utama)
export const values = [
  {
    icon: 'verified_user',
    title: 'Terapis Bersertifikat',
    description:
      'Setiap terapis dan estetisian kami memiliki sertifikasi resmi dan pelatihan berkala di bidangnya masing-masing.',
  },
  {
    icon: 'science',
    title: 'Bahan BPOM & Aman',
    description:
      'Seluruh produk perawatan terdaftar BPOM dan dipilih dengan standar ketat agar aman untuk semua jenis kulit.',
  },
  {
    icon: 'sanitizer',
    title: 'Ruang Private Steril',
    description:
      'Setiap sesi perawatan dilakukan di ruang privat dengan alat yang disterilkan sekali pakai.',
  },
]

// Statistik singkat pada beranda (jumlah masalah yang telah ditangani, dll).
// Angka dan label adalah data contoh - ganti dengan data asli bisnis Anda.
export const stats = [
  { value: 50, suffix: '+', label: 'Masalah kulit teratasi' },
  { value: 10000, suffix: '+', label: 'Klien puas' },
  { value: 15, suffix: '+', label: 'Tahun pengalaman' },
  { value: 98, suffix: '%', label: 'Tingkat kepuasan' },
]

export const categories = [
  'Facial & Skincare',
  'Hair & Styling',
  'Nail & Lash',
  'Body & Spa',
]

export const services = [
  {
    id: 1,
    category: 'Facial & Skincare',
    title: 'Signature Facial',
    description:
      'Perawatan wajah menyeluruh dengan teknik pijat eksklusif dan produk organik premium untuk kulit bercahaya.',
    duration: 90,
    price: 850000,
    isFeatured: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkRc1GJKm-Ob4AUTG2OxSGnsJQJLuB9YF-qEo1ObN1DK7kuGa-wWMNDxALbvqSEpBiYAHPisQXr4FdvjvDp87xddW9OXFCiCe_47TLykGOu0wD9thakThhqFhdbVjOaWuUilUntLmRp9pdPu2jdXQ1eSXiXjhAz7rplFqjt7otG3FRzSKIFMeTW35Tdw6Xzjy0mLINN72HEBxT3IHDlv1p42U7MeY-9pz3YWSsxwZ_wzR5A6cjtMhY',
  },
  {
    id: 2,
    category: 'Facial & Skincare',
    title: 'Hydra Glow Facial',
    description:
      'Deep cleansing dan hidrasi intensif untuk mengangkat sel kulit mati dan mencerahkan kulit kusam.',
    duration: 75,
    price: 650000,
    isFeatured: false,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBfWnAcgocVIshcO6N7GJ0ZproR7ZMZwWerNgshoHX1Vc22JVPg4LnjjlMFFf_63kRF47TJO4LFnwn82JWucWx-9cEqlG1_kxauflGJGmdkwIt5REvo38k9aqFXLhd76dZuls0jKx-7A6phq2yG1mBCLdGOVcYhB-i04nt0QVbTwsC2hOobo89x2aLKHPQCqgfjhBQLeG7zDWJ-hEgNyZMNKhD074jd_q9VNoGssEQZiPQ_gJlSBi_7',
  },
  {
    id: 3,
    category: 'Hair & Styling',
    title: 'Botanical Hair Spa',
    description:
      'Perawatan rambut bernutrisi menggunakan ekstrak tumbuhan alami untuk rambut rusak dan kulit kepala.',
    duration: 60,
    price: 650000,
    isFeatured: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwtQdbsEpG81feRGz6p7dLKkXRKIO8UYA46ORnF1FuQ2yHoj5LIZ-0osdPhwW0d_L5m9tS8iVBH8gSClQNXzNrFUoJULdSuOzYhfvQgmqAoRhHqXUXpyNB86cNnabuXHjefpKaUxSiwKCzT1oF_pT7o1z5q5ZldVnQ5Tadp8kkyta5eQYKWazJx0twBt8hwaL0m7t9_FMOzyj_m9X78pwou-D-lp_XOGctJ2iIk2nBszH_6epTweAV',
  },
  {
    id: 4,
    category: 'Hair & Styling',
    title: 'Deep Scalp Therapy',
    description:
      'Perawatan kulit kepala untuk mengatasi ketombe, rambut rontok, dan menyeimbangkan minyak alami.',
    duration: 45,
    price: 450000,
    isFeatured: false,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3UEzvye34smN6zSMNsqwz9f8wLFjAxlh_a2sCu63TSbyv-WgDV9a5G_rc-_Rjt9LbPGz99NibAwQgrMp8w0ZBH8ujc8yQ9_qZXGRLP0LNC7O42oFbgxNVriKeVDtWrR11hk2GD6v2snan9pqkDwJNDM0KpXs22N3LHyFoFwZ0HWtqRpdOIhe7KAeyptJpFUxSBTkGQNVrZp7_8DzuacnT4kMWTHTlmIwzmGZoEMsZfplP6xxzPhi_',
  },
  {
    id: 5,
    category: 'Nail & Lash',
    title: 'Classic Mani Pedi',
    description:
      'Perawatan kuku tangan dan kaki dengan pembersihan presisi, pijat ringan, dan pilihan cat tanpa zat beracun.',
    duration: 90,
    price: 450000,
    isFeatured: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5xzIx_VNkBV0bZiEdO6gB8I34_KV2GCNqbyUg3Z3Uyc8bchifQbHKotPJfQadoeJm5x_NJf48cF-fhU3_LhVx7Z5kk8n85JzqvIskhL5260waK2b_44-_wgKps4fLovEXyRzxUg-YsBPdJOwpzjfL1tIge98PJZqNuSk6gZOGHlwRAkwwjxnkwnmK8jTXPu6G2dh5gdG_oGj72hLQrfXdDPQeggfV-S5Bbgwanl2WiCAaOw0DxTng',
  },
  {
    id: 6,
    category: 'Nail & Lash',
    title: 'Gel Nails Art',
    description:
      'Cat kuku gel tahan lama dengan desain sesuai keinginan, dikerjakan oleh nail artist berpengalaman.',
    duration: 120,
    price: 550000,
    isFeatured: false,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_uh9BiHS4VqmAFBNsiPlMot-GbEjkaGRv95Hou6zF427zJc5A8dkCxpfQ1izxrAIvlE6Yp9lmEh0VNezbuh4hd4oi-RUpZb6XeGCP19cjgrHgYvHOxWdJKMze-3WGclTLlXA5mxWj_JYDrHMVDOo4CbNERW4p0Nbcrv9l2CczFNiQFcMC4j-GM7N5SjecLGsXKSoHpioYuFleSBC4Qj5odlQfNRFN4Rsd_CgJy-3C3UApkXsAOVUU',
  },
  {
    id: 7,
    category: 'Body & Spa',
    title: 'Balinese Massage',
    description:
      'Pijat relaksasi khas Bali dengan minyak aromaterapi untuk melepas penat dan melancarkan sirkulasi.',
    duration: 60,
    price: 550000,
    isFeatured: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKSQLIkdlfY8QW5fkhmi2D1WNBHIpsQPkqLDeBShX0OE1302-sW_To74gCWMzd5Vt3J6NztgCR5NVhBsYeHUxpgGb-HvSuPldPGvYDMYGTKNXBS0xSXaGCDcQ9135cuKyMDrG2Tb4Dt2axfQ6ZfOAazu1Qf8mcXUzBqPg3q5R1bjkr0ViVKWn6HX5C5pR0cSekMXQVkS4cBHAGeLX1Hn2Jo5fQFFeH3hZehbxSUmoFOhx1jTtKAqNO',
  },
  {
    id: 8,
    category: 'Body & Spa',
    title: 'Deep Tissue Therapy',
    description:
      'Pijatan tekanan dalam untuk meredakan ketegangan otot kronis dan memulihkan postur tubuh.',
    duration: 120,
    price: 1200000,
    isFeatured: false,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOO8IaN3gUpmQFVkiyGzWXBXMSTby4KroePDLraCrm0Uhbh4xelzi2FVdlZ2i0wtNlFk3uJHXcnaKkPB4NVCotqPSvF-fDlexJ_s0OND_ZZ6A6rFzG0WzHPMig3bTymhc1eZiYbZjoqHqX5OgO_YaKbhwE1h7EFIy5JGTVF6hWHTmaazVQEQHfCCWSnEv8umTBUMV-5V452qvqtGUwtiiH_TgGTYN8-CgvySLWEHj_xxIgIGpzz2Zd',
  },
]

export const specialists = [
  {
    name: 'Amelia Sari',
    role: 'Lead Esthetician',
    experienceYears: 10,
    bio: 'Spesialis perawatan anti penuaan dan teknik pijat wajah holistik.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBiNv9JVceQi2lP4PsvhXsCgoba0qYWxeqz74CjdRZOgqOxXsnLkqMwwlxXoahIK_RqPCW1KJVQLYD_1KZtEnGnaOqnQlgMNMauoXrBycLxKZConESdjYCj7Ajf4NJJOotXSee7w6dsWYhGnTkjxgfrT-aj-orz9QU21NP5mz5If3FhhkvQ9EoGPs0n5euyDSoqa_vZISrP8e8Kh7nzfkif6InOdknQNJ-cdHSmW-CujadTZj9o3-U_',
  },
  {
    name: 'Bima Wardhana',
    role: 'Master Wellness Therapist',
    experienceYears: 8,
    bio: 'Ahli terapi jaringan dalam dan pemulihan energi tubuh.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAuk43jumgFx1mK-_CYh9GxsCvEzpw_s23yaTJLUfd1C0IcosCq-CZiHsmhabE4J2n-kNipg1vt-nPvspNIUsX_PIbjuSDhTewwHCdAI9rbhIhu9qrjQ7uSzr3i9Tl9_JJH-Lx7IjD10R4caxEv3WS9CATR928BdIU9CJVpfrBwQ-G9gSO5f9_kAzc5UD-g9OZlT_CAKruOfR4zlGINkgWhy6EODhODbv94lCekNlfVGiJRjVfUDAJ3',
  },
  {
    name: 'Dr. Citra Lestari',
    role: 'Clinical Dermatologist',
    experienceYears: 12,
    bio: 'Mengawasi seluruh prosedur medis estetika dan perawatan kulit klinis.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAt8oqEDGftcJim5oZTQbiL1a7a1mF5j0g8sqsSViWoaMwhDTVSFjxDsCwIPhifrRXZxo1Q2OwCpXMWniN8H7aYpr1LybowvSwA_sDTYpKLIXFo2zEA-10GqgNYh-whznp9IqDwFi8leXpBTgcuSCw06Fxy55D2zclEnVN6o22q6mi6showAMjNguYl5g3pL6hyvw8eRAs1DXRGgYE9myEnFF10IpG_khGriAMkYlNzRdzYiDsTH444',
  },
]

// Testimoni adalah data contoh untuk template. Ganti dengan ulasan asli pelanggan.
export const testimonials = [
  {
    name: 'Sarah Rahma',
    rating: 5,
    comment:
      'Kulit saya jauh lebih halus setelah tiga sesi signature facial. Terapisnya menjelaskan setiap langkah dengan detail.',
  },
  {
    name: 'Dinda Putri',
    rating: 5,
    comment:
      'Tempatnya privat dan bersih. Saya bisa reservasi lewat WhatsApp tanpa repot datang duluan.',
  },
  {
    name: 'Andra Firmansyah',
    rating: 4,
    comment:
      'Jam buka sampai malam sangat membantu setelah jam kerja. Pijat balinesenya bikin badan langsung segar.',
  },
]

export const gallery = {
  beforeAfter: {
    title: 'Signature Lift',
    description:
      'Perawatan komprehensif memulihkan elastisitas alami dan kilau wajah dalam satu sesi.',
    before:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-uZeLG-CHqX-iP9oEGBcyLvimtZqapF3By5ok3E5cuJcy4C7Ix2DaE6ErwPTaTGDSvNlq97EQyU4WkMVPTRsLs1QhwqtGDlBUDPNU5e2fp7VQK0eTh3rMMCXQBbRYjsxN7Ji6eT0UoJ-SALqUIZUAqbztMnfAqwCziany6p3uNAR5fne-6PniRcKABXMMD9s1TVw89uXLvFLRRU0cmK7JI0FghW7QsiyzeVYjFavXIYOL69f3InM4',
    after:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSyWhe7KPrYVxAUGI3nsWD9O2bKVOikB7GVPzves0Vq-NGyiQ48xa9Nq_xmOhankSg5BxCv9si5XMzV57hR-O3aLL6g8_p4W9Luj6PpOUwJ0hV8S6VoZtAE0kfR9viBdbXed6PdnCT72GrkSZhpjeTstkDfpDyFt42IoJTPxuFYwWWXs3UWTPXroOQcV4XF2FqJ9hK5RRf0aRTu7-mGmo1iJ84gMpoZTGiYLnXU87TzvN_iLvvAMs-',
  },
  portfolio: [
    {
      title: 'Botanical Scalp Therapy',
      tag: 'Hair Wellness',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB3UEzvye34smN6zSMNsqwz9f8wLFjAxlh_a2sCu63TSbyv-WgDV9a5G_rc-_Rjt9LbPGz99NibAwQgrMp8w0ZBH8ujc8yQ9_qZXGRLP0LNC7O42oFbgxNVriKeVDtWrR11hk2GD6v2snan9pqkDwJNDM0KpXs22N3LHyFoFwZ0HWtqRpdOIhe7KAeyptJpFUxSBTkGQNVrZp7_8DzuacnT4kMWTHTlmIwzmGZoEMsZfplP6xxzPhi_',
    },
    {
      title: 'Hydra Glow Facial',
      tag: 'Aesthetic Skin',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBfWnAcgocVIshcO6N7GJ0ZproR7ZMZwWerNgshoHX1Vc22JVPg4LnjjlMFFf_63kRF47TJO4LFnwn82JWucWx-9cEqlG1_kxauflGJGmdkwIt5REvo38k9aqFXLhd76dZuls0jKx-7A6phq2yG1mBCLdGOVcYhB-i04nt0QVbTwsC2hOobo89x2aLKHPQCqgfjhBQLeG7zDWJ-hEgNyZMNKhD074jd_q9VNoGssEQZiPQ_gJlSBi_7',
    },
    {
      title: 'Gel Nails Art',
      tag: 'Nail Studio',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB_uh9BiHS4VqmAFBNsiPlMot-GbEjkaGRv95Hou6zF427zJc5A8dkCxpfQ1izxrAIvlE6Yp9lmEh0VNezbuh4hd4oi-RUpZb6XeGCP19cjgrHgYvHOxWdJKMze-3WGclTLlXA5mxWj_JYDrHMVDOo4CbNERW4p0Nbcrv9l2CczFNiQFcMC4j-GM7N5SjecLGsXKSoHpioYuFleSBC4Qj5odlQfNRFN4Rsd_CgJy-3C3UApkXsAOVUU',
    },
  ],
  interiors: [
    {
      title: 'Area Lobby',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCqOWLGsw0O-3-6Hc7bYRaE32PyhdzqVtzdDf7KrdiEslhWOG4q9873lBWftnlvuAHAffKt1-GzxYaKUgIWcdJkzsC0gvas43XHgA3-W7IqZknkYyenoCNsmMwbHkfbdsLnK7eglME1MbOD9lr2F2eG0HlD_OoyJ8zbggKdvpBuIynUNE21Stt3m10FeOlD2LQ6u4b5sd2LmLRODjn0r6RwWWllfNSYAktp57hmnf7rio8NEDWSV5xG',
    },
    {
      title: 'Koridor Ruang Privat',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBc-U72R38px1U_NlmfrGZDS2kWvYfi0mwjURMWyXeIlLUmQT8oI1RrAO8tQ4EMnCWb9ujvizwLASwK6-XRPmLRjinQrgsWq_iMpmgO97UgnQEVW8gVpNePGfLDoicC8B3nefe7Bs_K-h_zrnw3MDPBmR7l0LhjTKLI1yWhNzFSezEJ9QH548aDyXnP3hFNpQmvbyQLbVq5Bm256YmoG90Ag0MYh_GHTF9vYJgjx5oZ4TbEJLkXtnGM',
    },
    {
      title: 'Ruang Perawatan',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuADJ3DsbJJ1M1dQAM23e5bRCDxVKyawdABmsa5QQL9NmmcIAVc_gtmvEc3I2OgrreqD3K2QK5IJ8bQGS9IyCYQRwkUsSkaJKGdDdsc-rc6qKTcU-fis-r5YvwZKUYFjRQ408t2fZn0jybRT5lNy8_hKWJ-FoEHEE8pmJaPbFJBImy9GXkgiW90jZ_9yfktZXC10WOAnq_dhb4nndTa-Be_m7a_5VpGbc_MGrrEouax95721dAx584Ec',
    },
  ],
}

export const about = {
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD_vPs2bLroNfzEVUN9u5SqzWOH_hRCYZHnhvR5WttauiWeQ9Oah8rSKZoAZe9G71c55iUumdIRxsZkSnWjLmqe25eKpju50TP8nHinZWsCAjvbyotkbFEUZGJJkWxvdlXZPO9vB_AELFS3jiXxSrO_1g56Z5dz7RxlD6Mot0EshCIltbjUHwiZqLAF-uvdKLWFyE3xZzZ2RZLVRRPwTB9-DNIFXHlhDfJ0obQDq-DhazPVgc8gjM93',
  storyImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCRktyteMachhfBDtzQAkvvqyH4VjY1t3tncT9WKTctLDGCLAd5ANkCM_x81CYZU88y6wbkB3tttj8AZDY6lmrUaurXTXjdO1cl-AOywitfx4P0AdsgKLQgrdvBFWd5JPbOPolEJh_-FLUpKZqHUahehw7J9aeC374Ju8wPquPXaz_i5pG8lqdmeeN9Zg4zsmGKMv3tdW_-LZN2D4d_lRzwlXNXWzEwIHIsQ9Tp_kdXK1rY41rI_QpO',
  story:
    'Bisnis ini lahir dari keyakinan bahwa kecantikan sejati memancar dari keseimbangan holistik. Kami merawat kulit dan tubuh dengan bahan alami yang teruji, sekaligus memberikan pengalaman yang menenangkan pikiran.',
  storySecond:
    'Setiap sentuhan, setiap produk, dan setiap ruang kami pilih dengan cermat agar Anda merasa aman, nyaman, dan benar-benar diperhatikan.',
  visi: 'Menjadi destinasi perawatan kecantikan terpercaya yang memadukan keahlian, keamanan, dan ketenangan dalam satu pengalaman.',
  misi: [
    'Menghadirkan perawatan dengan produk terdaftar BPOM dan standar higienitas tinggi.',
    'Memberikan edukasi perawatan kulit agar hasilnya bertahan lama di rumah.',
    'Menjaga harga tetap transparan tanpa biaya tersembunyi.',
    'Membina tim terapis dengan pelatihan dan sertifikasi berkelanjutan.',
  ],
}
