import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    manifest: true,
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      name: 'hg-storybook',
      fileName: (format) => `index.${format}.ts`,
      cssFileName: 'hg-storybook',
    },
    rollupOptions: {
      external: ['react', 'tailwindcss'],
      output: {
        globals: {
          tailwindcss: 'tailwindcss',
          react: 'React',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'lib'),
    },
  },
});
