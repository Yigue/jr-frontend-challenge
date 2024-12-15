import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  server: {
    proxy: {
      '/api': {
        target: 'https://fake-api-listings.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Reemplaza '/api' con la ruta real
      },
    },
  },

  
})
