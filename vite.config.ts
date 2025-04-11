import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { svgsprites } from './vite_plugins/svgsprites'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ react(), tailwindcss(), svgsprites() ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
    },
  },
})
