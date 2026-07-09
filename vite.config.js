import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/cv/',
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['slowly-new-penguin.ngrok-free.app']
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.js'
  }
});
