import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        advancedChunks: {
          groups: [
            { name: 'react', test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/ },
            { name: 'gsap', test: /[\\/]node_modules[\\/](gsap|lenis)[\\/]/ },
            { name: 'motion', test: /[\\/]node_modules[\\/]framer-motion[\\/]/ },
            { name: 'swiper', test: /[\\/]node_modules[\\/](swiper|ssr-window|dom7)[\\/]/ },
          ],
        },
      },
    },
  },
})
