import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        lang: "en-us",
        name: "AnimeNEXT Mobile",
        short_name: "AnimeNEXT",
        description: "The latest information about AnimeNEXT.",
        start_url: "/",
        scope: "/",
        orientation: "any",
        display: "standalone",
        icons: [
            {
                src: "favicon-32x32.png",
                sizes: "32x32",
                type: "image/png"
            },
            {
                src: "favicon-192x192.png",
                sizes: "192x192",
                type: "image/png"
            }
        ]
      },
      minify: true,
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,json,css,html,jpg,png,webmanifest}"]
      }
    })
  ],
})
