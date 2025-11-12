import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SEO from '../components/SEO';
import Sidebar from '../components/Sidebar';
import AdSense from '../components/AdSense';
import { getPostBySlug, getRelatedPosts } from '../data/posts';
import { siteConfig, socialLinks } from '../config';
import CommentSection from '../components/CommentSection';
import './Post.css';

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundPost = getPostBySlug(slug);
    if (foundPost) {
      setPost(foundPost);
      const related = getRelatedPosts(foundPost, 3);
      setRelatedPosts(related);
    }
    setIsLoading(false);
  }, [slug]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const shareUrl = `${siteConfig.siteUrl}/post/${slug}`;
  const shareTitle = post ? post.title : '';
  const shareDescription = post ? post.excerpt : '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
  };

  if (isLoading) {
    return (
      <div className="post-page loading">
        <div className="container">
          <div className="content-wrapper">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="post-page not-found">
        <div className="container">
          <div className="content-wrapper">
            <h1>Post Not Found</h1>
            <p>The post you're looking for doesn't exist.</p>
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const publishedTime = new Date(post.date).toISOString();

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
        slug={`post/${slug}`}
        publishedTime={publishedTime}
        author={post.author}
        tags={post.tags}
      />
      <div className="post-page">
        <div className="container">
          <div className="post-content-wrapper">
            <article className="post-article">
              {/* Post Header */}
              <header className="post-header">
                <Link to={`/category/${post.category.toLowerCase()}`} className="post-category">
                  {post.category}
                </Link>
                <h1 className="post-title">{post.title}</h1>
                <div className="post-meta">
                  <span className="post-author">By {post.author}</span>
                  <span className="post-date">{formatDate(post.date)}</span>
                  <span className="reading-time">5 min read</span>
                </div>
              </header>

              {/* Featured Image */}
              {post.image && (
                <div className="post-image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="post-image"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Post Content */}
              <div className="post-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* In-Post AdSense */}
              <div className="post-ad">
                <AdSense slot="in-post" format="horizontal" style={{ minHeight: '90px' }} />
              </div>

              {/* Post Footer */}
              <footer className="post-footer">
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="post-tag">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Social Share Buttons */}
                <div className="social-share">
                  <h3>Share this post</h3>
                  <div className="share-buttons">
                    <a
                      href={shareLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button share-twitter"
                      aria-label="Share on Twitter"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                      Twitter
                    </a>
                    <a
                      href={shareLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button share-facebook"
                      aria-label="Share on Facebook"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                      Facebook
                    </a>
                    <a
                      href={shareLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button share-linkedin"
                      aria-label="Share on LinkedIn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href={shareLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-button share-whatsapp"
                      aria-label="Share on WhatsApp"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </footer>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section className="related-posts">
                  <h2>Related Posts</h2>
                  <div className="related-posts-grid">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/post/${relatedPost.slug}`}
                        className="related-post-card"
                      >
                        {relatedPost.image && (
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="related-post-image"
                            loading="lazy"
                          />
                        )}
                        <div className="related-post-content">
                          <h3>{relatedPost.title}</h3>
                          <span className="related-post-date">{formatDate(relatedPost.date)}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Comment Section */}
              <CommentSection postId={post.id} postSlug={slug} />
            </article>

            <aside className="post-sidebar-wrapper">
              <Sidebar />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

