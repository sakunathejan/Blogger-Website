// Sample blog posts data
export const posts = [
  {
    id: 1,
    title: 'Getting Started with Modern Web Development',
    slug: 'getting-started-with-modern-web-development',
    excerpt: 'Learn the fundamentals of modern web development and the tools that will help you build amazing websites.',
    content: `# Getting Started with Modern Web Development

Modern web development has evolved significantly over the years. Today, developers have access to powerful tools and frameworks that make building web applications faster and more efficient.

## The Modern Stack

The modern web development stack typically includes:

1. **Frontend Framework**: React, Vue, or Angular
2. **Build Tools**: Vite, Webpack, or Parcel
3. **CSS Framework**: Tailwind CSS, Bootstrap, or custom CSS
4. **Backend**: Node.js, Python, or other server-side technologies

## Getting Started

To get started with modern web development, you'll need to:

1. Learn HTML, CSS, and JavaScript fundamentals
2. Choose a frontend framework
3. Set up your development environment
4. Start building projects

## Conclusion

Modern web development is an exciting field with endless possibilities. Start with the basics and gradually work your way up to more complex projects.`,
    category: 'Technology',
    author: 'John Doe',
    date: '2024-01-15',
    featured: true,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    tags: ['web development', 'react', 'javascript', 'tutorial'],
  },
  {
    id: 2,
    title: '10 Tips for Better Work-Life Balance',
    slug: '10-tips-for-better-work-life-balance',
    excerpt: 'Discover practical strategies to achieve a healthier balance between your professional and personal life.',
    content: `# 10 Tips for Better Work-Life Balance

Achieving a healthy work-life balance is essential for your overall well-being and productivity. Here are ten practical tips to help you find that balance.

## 1. Set Clear Boundaries

Establish clear boundaries between work and personal time. This might mean setting specific work hours and sticking to them.

## 2. Learn to Say No

It's okay to decline requests that don't align with your priorities or would overextend you.

## 3. Take Regular Breaks

Regular breaks throughout the day can help you stay focused and productive.

## 4. Prioritize Your Health

Make time for exercise, healthy eating, and adequate sleep.

## 5. Disconnect Regularly

Set aside time to disconnect from work emails and notifications.

## 6. Delegate When Possible

Don't try to do everything yourself. Learn to delegate tasks when appropriate.

## 7. Plan Your Time

Use a calendar or planner to schedule both work and personal activities.

## 8. Practice Mindfulness

Mindfulness and meditation can help you stay present and reduce stress.

## 9. Pursue Hobbies

Make time for activities you enjoy outside of work.

## 10. Seek Support

Don't hesitate to seek support from family, friends, or professionals when needed.

## Conclusion

Finding work-life balance is an ongoing process. Start by implementing a few of these tips and adjust as needed.`,
    category: 'Lifestyle',
    author: 'Jane Smith',
    date: '2024-01-10',
    featured: true,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop',
    tags: ['work-life balance', 'productivity', 'wellness', 'lifestyle'],
  },
  {
    id: 3,
    title: 'Exploring Hidden Gems: A Travel Guide',
    slug: 'exploring-hidden-gems-travel-guide',
    excerpt: 'Discover off-the-beaten-path destinations that offer unique experiences and unforgettable memories.',
    content: `# Exploring Hidden Gems: A Travel Guide

Travel is about more than just visiting popular tourist destinations. Sometimes, the most memorable experiences come from exploring hidden gems that few people know about.

## Why Explore Hidden Gems?

Hidden gems offer:
- Authentic local experiences
- Fewer crowds
- Better value for money
- Unique stories to tell

## How to Find Hidden Gems

1. Talk to locals
2. Research off-season destinations
3. Explore beyond major cities
4. Use alternative travel guides
5. Follow travel bloggers who focus on lesser-known places

## Conclusion

Next time you plan a trip, consider adding a hidden gem to your itinerary. You might just discover your new favorite destination.`,
    category: 'Travel',
    author: 'John Doe',
    date: '2024-01-05',
    featured: false,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop',
    tags: ['travel', 'adventure', 'exploration', 'destinations'],
  },
  {
    id: 4,
    title: 'The Art of Minimalist Living',
    slug: 'art-of-minimalist-living',
    excerpt: 'Learn how simplifying your life can lead to greater happiness, freedom, and peace of mind.',
    content: `# The Art of Minimalist Living

Minimalism is more than just a design aesthetic—it's a lifestyle that can bring clarity, peace, and freedom to your life.

## What is Minimalism?

Minimalism is the intentional promotion of the things we value most and the removal of everything that distracts us from them.

## Benefits of Minimalism

- Reduced stress and anxiety
- More time and energy
- Financial freedom
- Environmental benefits
- Greater focus and clarity

## Getting Started

1. Start small
2. Declutter one area at a time
3. Question your purchases
4. Focus on experiences over things
5. Be patient with the process

## Conclusion

Minimalism is a personal journey. There's no one-size-fits-all approach. Start where you are and take it one step at a time.`,
    category: 'Lifestyle',
    author: 'Jane Smith',
    date: '2024-01-01',
    featured: false,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=400&fit=crop',
    tags: ['minimalism', 'lifestyle', 'simplicity', 'wellness'],
  },
];

// Get featured posts
export const getFeaturedPosts = () => posts.filter(post => post.featured);

// Get recent posts
export const getRecentPosts = (limit = 6) => {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

// Get post by slug
export const getPostBySlug = (slug) => {
  return posts.find(post => post.slug === slug);
};

// Get posts by category
export const getPostsByCategory = (category) => {
  return posts.filter(post => post.category === category);
};

// Get related posts
export const getRelatedPosts = (currentPost, limit = 3) => {
  return posts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};

// Get all categories with post counts
export const getCategoriesWithCounts = () => {
  const categoryCounts = {};
  posts.forEach(post => {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
  });
  return categoryCounts;
};

