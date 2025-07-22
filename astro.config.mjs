// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://prettyboypizza.com',
  base: "/",
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/styles/variables.scss" as *;
            @use "@/styles/fonts.scss" as *;
            `
        }
      }
    }
  }
});