# Professional Blogger Website

A modern, AdSense-ready blogging website built with React and Vite.

## Features

- ✅ Clean, minimalist design (Medium/Substack style)
- ✅ Fully responsive mobile-first layout
- ✅ SEO optimized with meta tags, schema markup, and Open Graph
- ✅ AdSense-friendly ad sections
- ✅ Light/Dark mode toggle
- ✅ Fast loading with lazy loading and optimizations
- ✅ RSS feed, sitemap.xml, and robots.txt
- ✅ Markdown-based post system
- ✅ Comment section
- ✅ Newsletter subscription form

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

For a full build including sitemap and RSS generation:

```bash
npm run build:full
```

Or for a standard build:

```bash
npm run build
npm run generate:seo
npm run copy:assets
```

This will:
1. Build the React application
2. Generate sitemap.xml
3. Generate RSS feed (rss.xml)
4. Copy robots.txt and routing files to dist

## AdSense Setup

1. Replace `YOUR_ADSENSE_ID` in `src/config.js` with your actual AdSense publisher ID
   ```javascript
   adsenseId: 'ca-pub-YOUR_ADSENSE_ID',
   ```
2. The AdSense component is already integrated in:
   - Header (banner ad)
   - Sidebar (vertical ad)
   - Inside blog posts (horizontal ad)
3. Make sure your AdSense account is approved before enabling ads
4. Customize ad slots in `src/components/AdSense.jsx` if needed

## Adding Posts

Posts are stored in `src/data/posts.js`. You can add new posts by adding objects to the posts array.

For markdown content, edit the `content` field in the post object.

## Configuration

Before deploying, update the following in `src/config.js`:

1. **Site Information:**
   ```javascript
   siteUrl: 'https://yourdomain.com',
   siteName: 'Your Blog Name',
   siteDescription: 'Your blog description',
   author: 'Your Name',
   authorEmail: 'your.email@example.com',
   ```

2. **Social Media Links:**
   Update the social media links in `src/config.js` with your profiles

3. **AdSense:**
   Replace `YOUR_ADSENSE_ID` with your actual AdSense publisher ID

4. **Robots.txt:**
   Update the sitemap URL in `public/robots.txt` with your domain

## Deployment

The built files in the `dist` folder can be deployed to any static hosting service:

### Netlify
1. Build the project: `npm run build:full`
2. Deploy the `dist` folder to Netlify
3. The `_redirects` file will handle SPA routing automatically

### Vercel
1. Build the project: `npm run build:full`
2. Deploy the `dist` folder to Vercel
3. The `vercel.json` file will handle routing automatically

### GitHub Pages
1. Build the project: `npm run build:full`
2. Deploy the `dist` folder contents to your GitHub Pages repository
3. Update the base path in `vite.config.js` if using a subdirectory

### Apache Server
1. Build the project: `npm run build:full`
2. Upload the `dist` folder contents to your server
3. The `.htaccess` file will handle SPA routing automatically

### Important Notes
1. Update the `siteUrl` in `src/config.js` with your actual domain before building
2. Verify your AdSense account is approved before enabling ads
3. Test the sitemap.xml and RSS feed after deployment
4. Submit your sitemap to Google Search Console

