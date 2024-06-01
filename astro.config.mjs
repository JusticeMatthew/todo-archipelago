import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import preact from "@astrojs/preact";
import vue from "@astrojs/vue";
import alpinejs from "@astrojs/alpinejs";
import lit from "@astrojs/lit";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs({
    include: ['**/solid/*', '**/node_modules/@suid/material/**']
  }), preact({
    include: ['**/preact/*']
  }), vue(), alpinejs(), lit(), svelte()]
});