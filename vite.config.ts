import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import path from 'path'

// 动态导入 element-ui
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  css: {
    // 配置 scss 全局变量
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "@/styles/variable.scss";`
      }
    }
  },
  plugins: [
    vue(),
    // 按需导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 处理自定义的 svg
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    // 项目开发阶段使用mock
    viteMockServe({
      mockPath: 'mock',
      enable: command === 'serve',
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
      }
    },
    open: true, // 项目启动后，自动打开
  },
}))
