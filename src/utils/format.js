export function formatPrice(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value)
}

export function formatDate(value) {
  if (!value) return ''
  const [y, m, d] = value.split('-')
  return `${d}/${m}/${y}`
}

export function buildWaMessage(booking, selectedServices, site) {
  const lines = []
  lines.push(`Halo ${site.businessName}, saya ingin reservasi treatment:`)
  lines.push('')
  lines.push(`Nama: ${booking.name.trim()}`)
  lines.push(`No. WhatsApp: ${booking.phone.trim()}`)
  lines.push(`Tanggal: ${formatDate(booking.date)}`)
  lines.push(`Jam: ${booking.time}`)
  lines.push('')
  lines.push('Layanan yang dipilih:')
  selectedServices.forEach((service, index) => {
    lines.push(`${index + 1}. ${service.title} (${service.duration} menit, ${formatPrice(service.price)})`)
  })
  lines.push(`Estimasi total: ${formatPrice(selectedServices.reduce((sum, s) => sum + s.price, 0))}`)
  if (booking.notes && booking.notes.trim()) {
    lines.push('')
    lines.push(`Catatan: ${booking.notes.trim()}`)
  }
  return lines.join('\n')
}

export function waLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

// Hitung status buka/tutup salon berdasarkan konfigurasi jam buka.
export function isOpenNow(hours) {
  if (!hours) return null
  const now = new Date()
  const day = now.getDay()
  if (!hours.openDays.includes(day)) return false
  const nowMin = now.getHours() * 60 + now.getMinutes()
  const [oh, om] = (hours.open || '00:00').split(':').map(Number)
  const [ch, cm] = (hours.close || '00:00').split(':').map(Number)
  const openMin = oh * 60 + om
  const closeMin = ch * 60 + cm
  return nowMin >= openMin && nowMin < closeMin
}
