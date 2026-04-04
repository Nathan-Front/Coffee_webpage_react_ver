import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Coffee_webpage_react_ver/',
  server: {
    historyApiFallback: true, // This is the magic line for refreshes
  },
})
