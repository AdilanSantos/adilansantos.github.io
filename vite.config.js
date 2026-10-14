import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repositório adilansantos.github.io → publicado na raiz (base '/')
export default defineConfig({
  plugins: [react()],
  base: '/',
})
