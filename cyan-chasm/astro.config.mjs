// astro.config.mjs
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Ensure static build (needed for SPAs)
  vite: {
    server: {
      port: 4321,
      strictPort: true,
      hmr: {
        port: 4321,
      },
      historyApiFallback: true, // 👈 Add this for React Router SPA routes
    },
    plugins: [tailwindcss()],
  },
  integrations: [react(), tailwind()],
});
