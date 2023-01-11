const path = require('path');
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
import { fileURLToPath, URL } from "url";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'D2S',
      fileName: (format) => `desk-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
});
