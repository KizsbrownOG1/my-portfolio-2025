// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // This reads your tsconfig paths and resolves @/ correctly
  ],
  resolve: {
    alias: {
      '@': '/src' // optional, tsconfigPaths usually handles this
    }
  }
});
