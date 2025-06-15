import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default {
  server: {
    port: 3000,
    proxy: {
        '/api': 'http://localhost:5000',
    }
  },
  plugins: [
  //   VitePWA({
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     name: 'Goal Dashboard',
  //     short_name: 'Goals',
  //     start_url: '/',
  //     display: 'standalone',
  //     background_color: '#ffffff',
  //     theme_color: '#1f2937',
  //     icons: [
  //       {
  //         src: 'icon-192x192.png',
  //         sizes: '192x192',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'icon-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //       }
  //     ]
  //   }
  // }),
  react(), tailwindcss()],
};
