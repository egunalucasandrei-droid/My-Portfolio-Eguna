import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: "/", 
  server: { host: '127.0.0.1', port: 5173, strictPort: true },
  define: { 'import.meta.env.PORTFOLIO_ROOT': JSON.stringify(fileURLToPath(new URL('.', import.meta.url))) },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
