import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post, featured = false }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className={`blog-card ${featured ? 'blog-card-featured' : ''}`}>
      <Link to={`/post/${post.slug}`} className="blog-card-link">
        <div className="blog-card-image-wrapper">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="blog-card-image"
          />
          {featured && <span className="featured-badge">Featured</span>}
        </div>
        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className="blog-card-category">{post.category}</span>
            <span className="blog-card-date">{formatDate(post.date)}</span>
          </div>
          <h2 className="blog-card-title">{post.title}</h2>
          <p className="blog-card-excerpt">{post.excerpt}</p>
          <div className="blog-card-footer">
            <span className="blog-card-author">By {post.author}</span>
            <span className="read-more">Read more →</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;

