import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import { getFeaturedPosts, getRecentPosts, getPostsByCategory } from '../data/posts';
import { siteConfig, categories } from '../config';
import './Home.css';

const Home = () => {
  const { category: categoryParam } = useParams();
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (categoryParam) {
      // Find the matching category by converting slug back to category name
      const matchedCategory = categories.find(cat => {
        const categorySlug = cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
        return categorySlug === categoryParam.toLowerCase();
      });
      
      if (matchedCategory) {
        setCategory(matchedCategory);
        const categoryPosts = getPostsByCategory(matchedCategory);
        setPosts(categoryPosts);
        setFeaturedPosts([]);
      } else {
        setCategory(null);
        setPosts([]);
        setFeaturedPosts([]);
      }
    } else {
      setCategory(null);
      const featured = getFeaturedPosts();
      const recent = getRecentPosts(12);
      setFeaturedPosts(featured);
      setPosts(recent);
    }
  }, [categoryParam]);

  const pageTitle = category 
    ? `${category} Posts | ${siteConfig.siteName}`
    : siteConfig.siteName;
  const pageDescription = category
    ? `Browse all posts in the ${category} category`
    : siteConfig.siteDescription;

  return (
    <>
      <SEO 
        title={category ? `${category} Posts` : undefined}
        description={pageDescription}
      />
      <div className="home-page">
        <div className="container">
          <div className="home-content">
            <div className="posts-section">
              {category && (
                <div className="category-header">
                  <h1>{category} Posts</h1>
                  <p>Browse all posts in this category</p>
                </div>
              )}

              {!category && featuredPosts.length > 0 && (
                <section className="featured-posts">
                  <h2 className="section-title">Featured Posts</h2>
                  <div className="posts-grid">
                    {featuredPosts.map((post) => (
                      <BlogCard key={post.id} post={post} featured />
                    ))}
                  </div>
                </section>
              )}

              <section className="recent-posts">
                {!category && <h2 className="section-title">Recent Posts</h2>}
                {posts.length > 0 ? (
                  <div className="posts-grid">
                    {posts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="no-posts">
                    <p>No posts found in this category.</p>
                  </div>
                )}
              </section>
            </div>

            <aside className="sidebar-wrapper">
              <Sidebar />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

