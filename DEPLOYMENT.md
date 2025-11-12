# Deployment Guide

This guide will help you deploy your blog to various hosting platforms.

## Pre-Deployment Checklist

1. ✅ Update `src/config.js` with your site information
2. ✅ Update `public/robots.txt` with your domain
3. ✅ Replace AdSense ID in `src/config.js`
4. ✅ Update social media links in `src/config.js`
5. ✅ Test the site locally with `npm run dev`
6. ✅ Build the site with `npm run build:full`

## Building for Production

Run the full build command to generate all necessary files:

```bash
npm run build:full
```

This will:
- Build the React application
- Generate sitemap.xml
- Generate RSS feed (rss.xml)
- Copy robots.txt and routing files

## Deployment Options

### Netlify

1. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

2. **Via Netlify Dashboard:**
   - Connect your repository
   - Build command: `npm run build:full`
   - Publish directory: `dist`
   - The `_redirects` file will handle SPA routing

### Vercel

1. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Via Vercel Dashboard:**
   - Connect your repository
   - Build command: `npm run build:full`
   - Output directory: `dist`
   - The `vercel.json` file will handle routing

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build:full",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Apache Server

1. Build the project:
   ```bash
   npm run build:full
   ```

2. Upload the `dist` folder contents to your server

3. Ensure `.htaccess` file is uploaded (it's in the dist folder)

4. Set up SSL certificate (recommended)

### AWS S3 + CloudFront

1. Build the project:
   ```bash
   npm run build:full
   ```

2. Upload `dist` folder contents to S3 bucket

3. Configure CloudFront distribution:
   - Set error pages: 404 → /index.html (200)
   - Configure caching headers

4. Set up SSL certificate

## Post-Deployment

1. **Verify Site:**
   - Check all pages load correctly
   - Test navigation
   - Verify mobile responsiveness

2. **SEO Setup:**
   - Submit sitemap.xml to Google Search Console
   - Verify robots.txt is accessible
   - Test RSS feed (rss.xml)

3. **AdSense:**
   - Verify ads are displaying (if approved)
   - Check ad placement
   - Monitor ad performance

4. **Analytics:**
   - Add Google Analytics (if desired)
   - Set up tracking
   - Verify tracking is working

5. **Performance:**
   - Test PageSpeed Insights
   - Optimize images if needed
   - Check Lighthouse scores

## Troubleshooting

### 404 Errors on Routes

If you're getting 404 errors on routes:
- Ensure routing configuration is set up correctly
- Check that redirects are working
- Verify server configuration

### Images Not Loading

- Check image paths
- Verify images are in the correct directory
- Check CORS settings if using external images

### AdSense Not Working

- Verify AdSense ID is correct
- Check if account is approved
- Ensure ads.txt file is configured (if required)

### Build Errors

- Check Node.js version (requires Node 18+)
- Clear node_modules and reinstall
- Check for TypeScript errors
- Verify all dependencies are installed

## Support

For issues or questions:
1. Check the README.md
2. Review error messages
3. Check console logs
4. Verify configuration files

