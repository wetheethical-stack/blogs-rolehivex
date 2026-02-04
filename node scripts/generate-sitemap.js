// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

// 1. PASTE YOUR DB ARRAY HERE (Just the ID and Date are needed)
const DB = [
  { id: 'ghost', date: '2026-01-14' },
  { id: 'amazon-layoffs-jan-2026', date: '2026-01-30' },
  { id: 'openclaw-viral-agent', date: '2026-01-31' },
  { id: 'bounty', date: '2026-01-12' },
  { id: 'leetcode', date: '2026-01-10' },
  { id: 'salary', date: '2026-01-08' },
  { id: 'ai-code', date: '2026-01-05' },
  { id: 'remote', date: '2026-01-02' },
  { id: 'burnout', date: '2025-12-28' },
  { id: 'devrel', date: '2025-12-25' },
  { id: 'agentic-correction', date: '2026-01-28' },
  { id: 'security', date: '2025-12-20' },
  { id: 'msft-crash', date: '2026-01-29' }
];

const DOMAIN = 'https://hiring.rolehivex.online';

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${DB.map(item => `
  <url>
    <loc>${DOMAIN}/?post=${item.id}</loc>
    <lastmod>${new Date(item.date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generated in /public folder');
};

generateSitemap();
