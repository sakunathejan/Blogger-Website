# Adding Posts Guide

This guide explains how to add and manage blog posts in your website.

## Adding a New Post

Posts are stored in `src/data/posts.js`. To add a new post:

1. Open `src/data/posts.js`
2. Add a new post object to the `posts` array
3. Follow the structure of existing posts

## Post Structure

Each post object should have the following properties:

```javascript
{
  id: 1, // Unique ID (use next available number)
  title: 'Your Post Title', // Post title
  slug: 'your-post-slug', // URL-friendly slug (lowercase, hyphens)
  excerpt: 'Brief description of your post...', // Short description for previews
  content: `# Your Post Title

Your post content in markdown format...`, // Full post content in markdown
  category: 'Technology', // Category name
  author: 'Your Name', // Author name
  date: '2024-01-15', // Publication date (YYYY-MM-DD)
  featured: false, // Whether to show in featured section
  image: 'https://images.unsplash.com/photo-...', // Featured image URL
  tags: ['tag1', 'tag2', 'tag3'], // Array of tags
}
```

## Example Post

```javascript
{
  id: 5,
  title: 'My New Blog Post',
  slug: 'my-new-blog-post',
  excerpt: 'This is a brief description of my new blog post that will appear in previews.',
  content: `# My New Blog Post

This is the full content of my blog post written in **markdown**.

## Subheading

You can use:
- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Code blocks
- And more markdown features

### Code Example

\`\`\`javascript
const example = 'This is code';
\`\`\`

## Conclusion

This is the end of my blog post.`,
  category: 'Technology',
  author: 'John Doe',
  date: '2024-01-20',
  featured: true,
  image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
  tags: ['web development', 'react', 'tutorial'],
}
```

## Markdown Support

The post content supports full markdown syntax including:

- **Headers:** `# H1`, `## H2`, `### H3`, etc.
- **Bold:** `**bold text**`
- **Italic:** `*italic text*`
- **Links:** `[link text](https://example.com)`
- **Lists:** `- Item 1`, `- Item 2`
- **Code blocks:** ` ```language code ``` `
- **Blockquotes:** `> Quote text`
- **Images:** `![alt text](image-url)`
- **Tables:** Markdown tables
- **And more:** GitHub Flavored Markdown (GFM)

## Categories

Available categories are defined in `src/config.js`:

```javascript
export const categories = [
  'Technology',
  'Lifestyle',
  'Travel',
  'Food',
  'Health',
  'Business',
  'Design',
  'Personal',
];
```

You can add new categories by updating this array.

## Images

### Using External Images

You can use external image URLs:

```javascript
image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
```

### Using Local Images

1. Add images to `public/images/` folder
2. Reference them in your post:

```javascript
image: '/images/your-image.jpg',
```

### Image Recommendations

- **Size:** 800x400px or larger
- **Format:** JPG, PNG, or WebP
- **Aspect Ratio:** 16:9 or 2:1
- **Optimization:** Compress images before uploading

## Featured Posts

Set `featured: true` to show the post in the featured section on the homepage.

```javascript
featured: true,
```

## Tags

Tags help with SEO and related posts. Use relevant keywords:

```javascript
tags: ['web development', 'react', 'javascript', 'tutorial'],
```

## Date Format

Use ISO date format (YYYY-MM-DD):

```javascript
date: '2024-01-20',
```

## Slug Format

Slugs should be:
- Lowercase
- Use hyphens instead of spaces
- URL-friendly
- Descriptive

Examples:
- ✅ `my-new-blog-post`
- ✅ `getting-started-with-react`
- ❌ `My New Blog Post` (has spaces)
- ❌ `my_new_blog_post` (uses underscores)

## Best Practices

1. **Write Quality Content:** Focus on valuable, informative content
2. **Use Proper Headings:** Structure your content with proper heading hierarchy
3. **Add Images:** Include relevant images to make posts more engaging
4. **Write Good Excerpts:** Write compelling excerpts that encourage clicks
5. **Use Tags Wisely:** Use relevant tags that match your content
6. **Optimize Images:** Compress images before adding them
7. **Proofread:** Check for spelling and grammar errors
8. **SEO:** Use descriptive titles and excerpts for better SEO

## Editing Existing Posts

To edit an existing post:

1. Open `src/data/posts.js`
2. Find the post you want to edit
3. Update the properties as needed
4. Save the file
5. The changes will appear after rebuilding

## Deleting Posts

To delete a post:

1. Open `src/data/posts.js`
2. Remove the post object from the `posts` array
3. Save the file
4. Rebuild the site

## Advanced: Multiple Authors

If you have multiple authors, you can:

1. Update the author field in each post
2. Filter posts by author if needed
3. Add author profiles in the About page

## Advanced: Custom Fields

You can add custom fields to posts:

```javascript
{
  // ... existing fields
  customField: 'custom value',
  readTime: '5 min read',
  views: 1000,
}
```

Then use these fields in your components as needed.

## Future: CMS Integration

For a more advanced setup, you can:

1. Integrate with a headless CMS (Contentful, Strapi, etc.)
2. Use a markdown-based CMS (Forestry, Netlify CMS)
3. Build a custom admin panel
4. Use a database for posts

## Tips

- Keep post IDs unique and sequential
- Use descriptive slugs
- Write engaging excerpts
- Add relevant tags
- Use high-quality images
- Optimize for SEO
- Test posts after adding them

## Support

For questions or issues:
1. Check existing posts for examples
2. Review markdown documentation
3. Test posts in development mode
4. Check console for errors

