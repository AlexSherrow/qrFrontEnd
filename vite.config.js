import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // string shorthand
      '/api': 'https://qrbackend-13d260ac2b78.herokuapp.com/',
    }
  }
})
