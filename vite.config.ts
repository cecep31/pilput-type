import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      // API_HOST="http://127.0.0.1:8080"
      API_HOST:"https://api.pilput.dev",
      // NEXT_PUBLIC_API_HOST="http://127.0.0.1:8080"
      NEXT_PUBLIC_API_HOST:"https://api.pilput.dev",
      // NEXT_PUBLIC_WS_HOST="ws://localhost:8080"
      NEXT_PUBLIC_WS_HOST:"ws://api.pilput.dev",
      // NEXT_PUBLIC_STORAGE="https://d42zd71vraxqs.cloudfront.net/"
      NEXT_PUBLIC_STORAGE:"https://d42zd71vraxqs.cloudfront.net/",
    },
  }
})
