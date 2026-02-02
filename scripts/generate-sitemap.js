import { writeFileSync, mkdirSync } from 'node:fs'
import { env } from 'node:process'
const site = env.SITE_URL || env.VITE_SITE_URL || 'http://localhost:5173'
const publicDir = new URL('../public/', import.meta.url).pathname.replace(/\/g, '/')
try { mkdirSync(publicDir, { recursive: true }) } catch (e) {}

const robots = `User-agent: *\nAllow: /\nSitemap: ${site.replace(/\/$/, '')}/sitemap.xml\n`
writeFileSync(publicDir + 'robots.txt', robots, 'utf8')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${site.replace(/\/$/, '')}/</loc>\n  </url>\n  <url>\n    <loc>${site.replace(/\/$/, '')}/build</loc>\n  </url>\n</urlset>`
writeFileSync(publicDir + 'sitemap.xml', sitemap, 'utf8')

console.log('Wrote robots.txt and sitemap.xml to', publicDir)
