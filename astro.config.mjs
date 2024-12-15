import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import preact from '@astrojs/preact';
import vue from '@astrojs/vue';
import alpinejs from '@astrojs/alpinejs';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), solidJs({
    include: ['**/solid/*', '**/node_modules/@suid/material/**'],
  }), preact({
    include: ['**/preact/*'],
  }), vue(), alpinejs(), svelte(), icon()],
});