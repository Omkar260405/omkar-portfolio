import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Kept aligned with the original portfolio setup.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
