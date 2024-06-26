/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  blocklist: ['container'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto-Slab', ...defaultTheme.fontFamily.serif],
      },
      margin: {
        section: 'var(--space-section)',
      },
      fontSize: {
        min: 'var(--step-00)',
        bread: 'var(--step-0)',
        subtitle: 'var(--step-1)',
        title: 'var(--step-5)',
        headline: 'var(--step-6)',
      },
      colors: {
        light: '#F8FAFC',
        dark: '#0D111C',
        highlight: 'var(--highlight)',
        astro: 'var(--astro)',
        solid: 'var(--solid)',
      },
    },
  },
  plugins: [],
};
