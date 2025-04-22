// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  server: {
    host: true,
  },
  preview: {
    allowedHosts: [
      'obalaghanda.onrender.com',
      'localhost' // For local testing
    ],
    host: true,
    port: process.env.PORT ? parseInt(process.env.PORT) : 10000
  }
})
