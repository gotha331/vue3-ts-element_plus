import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// elememt-plus按需引入
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // 解决 NetWork "vite use '--host' to expose"
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      comps: resolve(__dirname, 'src/components'),
      apis: resolve(__dirname, 'src/apis'),
      views: resolve(__dirname, 'src/views'),
      utils: resolve(__dirname, 'src/utils'),
      routes: resolve(__dirname, 'src/routes'),
      styles: resolve(__dirname, 'src/styles'),
      plugins: resolve(__dirname, 'src/plugins'),
      layouts: resolve(__dirname, 'src/layouts')
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
