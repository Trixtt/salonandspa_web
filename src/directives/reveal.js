const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (reducedMotion()) {
      el.classList.add('is-visible')
      return
    }
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const delay = typeof binding.value === 'number' ? binding.value : 0
    if (delay > 0) el.style.transitionDelay = `${delay}ms`
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    el._revealObserver = observer
    observer.observe(el)
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}
