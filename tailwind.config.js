/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        'warm-silk': '#FFFFFF',
        'deep-sage': '#2D4030',
        'deep-sage-light': '#3D5A44',
        'muted-sand': '#E9EBEF',
        'muted-sand-deep': '#D9DCE3',
        'cream': '#F5F6F8',
        'terracotta-rose': '#C88A75',
        'terracotta-rose-dark': '#A45E43',
        'terracotta-rose-deep': '#8E5038',
        'terracotta-rose-soft': '#F2C9B8',
        'sage-muted': '#5C6B5E',
      },
      fontFamily: {
        display: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px rgba(45, 64, 48, 0.08)',
        lift: '0 16px 44px rgba(45, 64, 48, 0.16)',
      },
      maxWidth: {
        page: '1200px',
      },
      keyframes: {
        'marquee-up': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-50%)' },
        },
        'marquee-down': {
          from: { transform: 'translateY(-50%)' },
          to: { transform: 'translateY(0)' },
        },
        'marquee-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee-up': 'marquee-up 30s linear infinite',
        'marquee-down': 'marquee-down 34s linear infinite',
        'marquee-x': 'marquee-x 26s linear infinite',
      },
    },
  },
  plugins: [],
}
