import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('react-router') || id.includes('/react/') || id.includes('/react-dom/')) return 'vendor'
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('swiper')) return 'swiper'
          return undefined
        },
      },
    },
  },
})
