import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/components/SvgIcon/svgBuilder'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgBuilder('./src/assets/icon/') // svg图标批量引入
  ],
  resolve: {
    alias: [
      // 别名配置
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  define: {
    buildTime: JSON.stringify(new Date().toLocaleString())
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/css/global.less')}";`
        },
        javascriptEnabled: true
      }
    }
  },
  server: {
    // 服务器主机名
    host: 'localhost',
    // 端口号
    port: 3100,
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    // 服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
    open: false,
    // 自定义代理规则
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
