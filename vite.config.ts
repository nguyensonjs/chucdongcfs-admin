import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  css: { devSourcemap: true },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), devtoolsJson()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert/admin.chucdongcfs.com-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert/admin.chucdongcfs.com.pem'))
    },
    allowedHosts: ['admin.chucdongcfs.com'],
    port: 4443,
    host: 'admin.chucdongcfs.com',
    hmr: {
      path: '/vite/'
    },
    sourcemapIgnoreList: false,
    open: 'https://admin.chucdongcfs.com:4443'
  }
})
