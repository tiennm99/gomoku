import { defineConfig } from 'vite';

export default defineConfig({
  // No GitHub Pages base path — dev server only, prod served by nginx (phase-11)
  server: { port: 5173, strictPort: true },
  build: { outDir: 'dist', sourcemap: true },
});
