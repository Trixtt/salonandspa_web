<template>
  <main
    class="container-page flex min-h-[70vh] flex-col items-center justify-center pb-24 pt-28 text-center"
  >
    <p v-reveal class="eyebrow">Halaman Tidak Ditemukan</p>
    <h1
      v-reveal
      class="mt-4 font-display text-7xl font-bold leading-none text-deep-sage md:text-9xl"
    >
      404
    </h1>
    <p v-reveal class="mx-auto mt-4 max-w-md text-sage-muted">
      Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
    </p>
    <div v-reveal class="mt-8 flex flex-col gap-3 sm:flex-row">
      <RouterLink to="/" class="btn btn-primary">Kembali ke Beranda</RouterLink>
      <RouterLink to="/services" class="btn btn-outline">Lihat Layanan</RouterLink>
    </div>
  </main>
</template>
