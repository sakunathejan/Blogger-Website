import React, { useEffect } from 'react';
import { siteConfig } from '../config';

const SEO = ({ 
  title, 
  description, 
  image, 
  type = 'website',
  slug = '',
  publishedTime,
  modifiedTime,
  author,
  tags = [],
}) => {
  const pageTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName;
  const pageDescription = description || siteConfig.siteDescription;
  const pageImage = image || `${siteConfig.siteUrl}/og-image.jpg`;
  const pageUrl = slug ? `${siteConfig.siteUrl}/${slug}` : siteConfig.siteUrl;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('title', pageTitle);
    updateMetaTag('description', pageDescription);
    updateMetaTag('author', author || siteConfig.author);
    if (tags.length > 0) {
      updateMetaTag('keywords', tags.join(', '));
    }

    // Open Graph / Facebook
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', pageUrl, true);
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:image', pageImage, true);
    updateMetaTag('og:site_name', siteConfig.siteName, true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', pageUrl, true);
    updateMetaTag('twitter:title', pageTitle, true);
    updateMetaTag('twitter:description', pageDescription, true);
    updateMetaTag('twitter:image', pageImage, true);
    if (siteConfig.twitterHandle) {
      updateMetaTag('twitter:creator', siteConfig.twitterHandle, true);
    }

    // Article specific
    if (type === 'article' && publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true);
      }
      tags.forEach((tag, index) => {
        updateMetaTag(`article:tag`, tag, true);
      });
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageUrl);

    // JSON-LD Structured Data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebSite',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      ...(type === 'article' && {
        headline: title,
        image: pageImage,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
          '@type': 'Person',
          name: author || siteConfig.author,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.siteName,
        },
        description: pageDescription,
        ...(tags.length > 0 && {
          keywords: tags.join(', '),
        }),
      }),
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Additional SEO
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
  }, [pageTitle, pageDescription, pageImage, pageUrl, type, publishedTime, modifiedTime, author, tags]);

  return null;
};

export default SEO;

