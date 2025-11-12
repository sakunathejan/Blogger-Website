# Quick Start Guide

Get your blog up and running in minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Your Site

Open `src/config.js` and update:

1. **Site URL:**
   ```javascript
   siteUrl: 'https://yourdomain.com',
   ```

2. **Site Name:**
   ```javascript
   siteName: 'Your Blog Name',
   ```

3. **Site Description:**
   ```javascript
   siteDescription: 'Your blog description',
   ```

4. **Author Information:**
   ```javascript
   author: 'Your Name',
   authorEmail: 'your.email@example.com',
   ```

5. **Social Media Links:**
   Update the social media links with your profiles

6. **AdSense ID (Optional):**
   ```javascript
   adsenseId: 'ca-pub-YOUR_ADSENSE_ID',
   ```

## Step 3: Update robots.txt

Open `public/robots.txt` and update:

```
Sitemap: https://yourdomain.com/sitemap.xml
```

## Step 4: Add Your Posts

Open `src/data/posts.js` and add your blog posts. See `POSTS_GUIDE.md` for detailed instructions.

## Step 5: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your blog.

## Step 6: Build for Production

```bash
npm run build:full
```

This will:
- Build the React application
- Generate sitemap.xml
- Generate RSS feed (rss.xml)
- Copy robots.txt and routing files

## Step 7: Deploy

Deploy the `dist` folder to your hosting provider. See `DEPLOYMENT.md` for detailed instructions.

## That's It! 🎉

Your blog is now ready. For more information:

- **Adding Posts:** See `POSTS_GUIDE.md`
- **Deployment:** See `DEPLOYMENT.md`
- **Configuration:** See `README.md`

## Next Steps

1. ✅ Customize the design (update CSS in `src/index.css`)
2. ✅ Add your blog posts
3. ✅ Set up AdSense (if desired)
4. ✅ Configure analytics
5. ✅ Submit sitemap to Google Search Console
6. ✅ Test on mobile devices
7. ✅ Optimize images
8. ✅ Test page speed

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Make sure Node.js version is 18 or higher
2. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Images Not Loading

- Check image URLs are correct
- Verify images are accessible
- Check CORS settings if using external images

### AdSense Not Working

- Verify AdSense ID is correct
- Check if account is approved
- Ensure ads are enabled in config

### Routing Issues

- Check that routing files are in dist folder
- Verify server configuration
- Test redirects are working

## Support

For more help:
- Check the README.md
- Review DEPLOYMENT.md
- See POSTS_GUIDE.md
- Check console for errors

