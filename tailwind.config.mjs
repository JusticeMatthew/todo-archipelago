/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  blocklist: ['container'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      fontSize: {
        min: 'var(--step-00)',
        bread: 'var(--step-0)',
        subTitle: 'var(--step-1)',
        title: 'var(--step-5)',
        headline: 'var(--step-6)',
      },
      colors: {
        light: '#F8FAFC',
        dark: '#0D111C',
        astro: '#a692af',
      },
    },
  },
  plugins: [],
};
