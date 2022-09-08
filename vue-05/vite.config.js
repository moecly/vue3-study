import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  /** 
   * 配置中转服务器
   */
  server: {
    proxy: {
      /* http://smartschoolmangersystem.free.idcfengye.com */
      '/path': {
        /* 替换的服务器地址 */
        target: 'http://smartschoolmangersystem.free.idcfengye.com',
        /* 开启代理，允许跨域 */
        changeOrigin: true,
        rewrite: path=>path.replace(/^\/path/, '')
      }
    }
  }
})
