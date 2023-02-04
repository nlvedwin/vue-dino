import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// get mode from command line
const mode = process.env.Site

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8200,
  },
  plugins: [vue()],
  define: {
    'process.env': {
      VUE_APP_VERSION: JSON.stringify(require('./package.json').version),
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['choices.js', 'choices/public/assets/styles/choices.min.css'],
  },
  build:
    process.env.DOCS === 'true'
      ? {}
      : {
          lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'VueDino',
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
})
