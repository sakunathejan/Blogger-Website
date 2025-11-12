import { execSync } from 'child_process';
import { existsSync, mkdirSync, copyFileSync } from 'fs';
import { resolve } from 'path';

console.log('Building website...');

// Build with Vite
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✓ Build completed');
} catch (error) {
  console.error('✗ Build failed:', error);
  process.exit(1);
}

// Generate sitemap and RSS
try {
  console.log('Generating sitemap and RSS feed...');
  const { generateSitemap } = await import('./generate-sitemap.js');
  const { generateRSS } = await import('./generate-rss.js');
  
  const distPath = resolve(process.cwd(), 'dist');
  
  // Copy robots.txt
  const robotsPath = resolve(process.cwd(), 'public/robots.txt');
  if (existsSync(robotsPath)) {
    copyFileSync(robotsPath, resolve(distPath, 'robots.txt'));
    console.log('✓ robots.txt copied');
  }
  
  console.log('✓ Build process completed');
} catch (error) {
  console.error('✗ Post-build process failed:', error);
  process.exit(1);
}

