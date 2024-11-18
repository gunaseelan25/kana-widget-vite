import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import react from '@vitejs/plugin-react';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      'crypto': resolve(__dirname, 'node_modules/crypto-browserify'),
      'near-api-js': 'near-api-js/dist/near-api-js.js',
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        nodePolyfills({
          include: null,
        }),
      ],
    },
    sourcemap: false,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        }),
      ],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});