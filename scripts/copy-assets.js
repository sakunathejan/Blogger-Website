import { existsSync, copyFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const distPath = resolve(process.cwd(), 'dist');

// Ensure dist directory exists
if (!existsSync(distPath)) {
  mkdirSync(distPath, { recursive: true });
}

// Copy robots.txt to dist
const robotsPath = resolve(process.cwd(), 'public/robots.txt');
if (existsSync(robotsPath)) {
  copyFileSync(robotsPath, resolve(distPath, 'robots.txt'));
  console.log('✓ robots.txt copied to dist');
}

// Copy _redirects for Netlify
const redirectsPath = resolve(process.cwd(), 'public/_redirects');
if (existsSync(redirectsPath)) {
  copyFileSync(redirectsPath, resolve(distPath, '_redirects'));
  console.log('✓ _redirects copied to dist');
}

// Copy .htaccess for Apache
const htaccessPath = resolve(process.cwd(), 'public/.htaccess');
if (existsSync(htaccessPath)) {
  copyFileSync(htaccessPath, resolve(distPath, '.htaccess'));
  console.log('✓ .htaccess copied to dist');
}

