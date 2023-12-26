import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  
  base: "/",
  clearScreen: false,
  envPrefix: "APP_",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
