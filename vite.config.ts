import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// public/ 폴더의 정적 HTML 파일을 SPA보다 먼저 서빙하는 미들웨어
function staticHtmlMiddleware() {
  return {
    name: 'static-html',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const url = req.url?.split('?')[0] ?? '/'
        // /topcit, /hankuksa 경로만 처리
        if (!url.startsWith('/topcit') && !url.startsWith('/hankuksa')) return next()

        const candidates = [
          path.join('public', url, 'index.html'),
          path.join('public', url.replace(/\/$/, ''), 'index.html'),
          path.join('public', url.endsWith('.html') ? url : url + '/index.html'),
        ]
        for (const candidate of candidates) {
          if (fs.existsSync(candidate)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(fs.readFileSync(candidate))
            return
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), staticHtmlMiddleware()],
})
