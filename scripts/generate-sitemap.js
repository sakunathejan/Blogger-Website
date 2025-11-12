import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dynamic import for ES modules
const { posts } = await import('../src/data/posts.js');
const { siteConfig } = await import('../src/config.js');

const slugify = (str) =>
  String(str)
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-');

const joinUrl = (base, path) => {
  if (!base.endsWith('/')) {
    base = `${base}/`;
  }
  if (path.startsWith('/')) {
    path = path.slice(1);
  }
  return `${base}${path}`;
};

const generateSitemap = () => {
  const baseUrl = siteConfig.siteUrl || '';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: 'about', priority: '0.8', changefreq: 'monthly' },
    { url: 'contact', priority: '0.7', changefreq: 'monthly' },
    { url: 'privacy', priority: '0.5', changefreq: 'yearly' },
  ];

  const postPages = posts.map(post => ({
    url: `post/${post.slug}`,
    priority: post.featured ? '0.9' : '0.8',
    changefreq: 'weekly',
    lastmod: post.date,
  }));

  const categoryPages = [...new Set(posts.map(post => post.category))].map(category => ({
    url: `category/${slugify(category)}`,
    priority: '0.7',
    changefreq: 'weekly',
  }));

  const allPages = [...staticPages, ...postPages, ...categoryPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${joinUrl(baseUrl, page.url)}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
};

// Generate sitemap
try {
  const sitemap = generateSitemap();
  const distPath = resolve(process.cwd(), 'dist');
  
  // Ensure dist directory exists
  if (!existsSync(distPath)) {
    mkdirSync(distPath, { recursive: true });
  }
  
  writeFileSync(resolve(distPath, 'sitemap.xml'), sitemap);
  console.log('✓ Sitemap generated at dist/sitemap.xml');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}

