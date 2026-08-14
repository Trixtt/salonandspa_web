import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { site, seo } from '../config/content'

// Judul per halaman. Terapkan setelah konten config site & seo.
const pageTitles = {
  '/': 'Beranda',
  '/about': 'Tentang Kami',
  '/services': 'Layanan & Harga',
  '/gallery': 'Galeri',
  '/reservasi': 'Reservasi',
}

function setMeta(attrName, attrValue, content) {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function applySeo(path) {
  const page = pageTitles[path] || 'Halaman Tidak Ditemukan'
  const title = `${page} | ${site.businessName}`
  document.title = title
  setMeta('name', 'description', seo.description)
  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', seo.description)
  if (seo.ogImage) setMeta('property', 'og:image', seo.ogImage)
}

export function useSeo() {
  const route = useRoute()
  onMounted(() => applySeo(route.path))
  watch(
    () => route.path,
    (path) => applySeo(path),
  )
}
