import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecentPosts, getCategoriesWithCounts } from '../data/posts';
import { categories } from '../config';
import AdSense from './AdSense';
import './Sidebar.css';

const Sidebar = () => {
  const recentPosts = getRecentPosts(5);
  const categoryCounts = getCategoriesWithCounts();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <aside className="sidebar">
      {/* Newsletter Subscription */}
      <div className="sidebar-widget">
        <h3>Subscribe to Newsletter</h3>
        <p>Get the latest posts delivered to your inbox.</p>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Categories */}
      <div className="sidebar-widget">
        <h3>Categories</h3>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/category/${category.toLowerCase()}`}>
                {category}
                <span className="category-count">({categoryCounts[category] || 0})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="sidebar-widget">
        <h3>Recent Posts</h3>
        <ul className="recent-posts-list">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.slug}`}>
                <h4>{post.title}</h4>
                <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar AdSense */}
      <div className="sidebar-widget sidebar-ad">
        <AdSense slot="sidebar" format="vertical" style={{ minHeight: '250px' }} />
      </div>
    </aside>
  );
};

export default Sidebar;

