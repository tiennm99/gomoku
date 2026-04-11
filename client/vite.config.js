import { defineConfig } from 'vite';

export default defineConfig({
  // No GitHub Pages base path — dev server only, prod served by nginx (phase-11)
  server: { port: 5173, strictPort: true },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Phaser 3 bundle is ~1.6 MB raw / 364 KB gzipped — raise limit to avoid CI noise
    chunkSizeWarningLimit: 2000,
  },
});
