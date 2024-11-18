import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import react from '@vitejs/plugin-react';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      'crypto': resolve(__dirname, 'node_modules/crypto-browserify'),
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
    commonjsOptions: {
      include: [] // Add empty include array for commonjs options
    }
  },
  optimizeDeps: {
    disabled: false, // Explicitly enable deps optimization
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