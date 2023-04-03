import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Cogip',
        short_name: 'Cogip Web Client',
        start_url: './',
        display: 'standalone',
        background_color: '#ffffff',
        lang: 'fr',
        scope: './',
        icons: [
          {
            src: '/vite.svg',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/vite.svg',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        theme_color: '#ffffff',
      },
    }),
  ],
})
