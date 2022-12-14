import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path-browserify"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      path: "path-browserify",
    },
  }
})



