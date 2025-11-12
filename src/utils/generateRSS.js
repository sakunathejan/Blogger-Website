import { getRecentPosts } from '../data/posts';
import { siteConfig } from '../config';

export const generateRSS = () => {
  const baseUrl = siteConfig.siteUrl;
  const currentDate = new Date().toUTCString();
  const posts = getRecentPosts(20);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${siteConfig.siteName}</title>
    <link>${baseUrl}</link>
    <description>${siteConfig.siteDescription}</description>
    <language>en-US</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <generator>${siteConfig.siteName} RSS Generator</generator>
    <managingEditor>${siteConfig.authorEmail} (${siteConfig.author})</managingEditor>
    <webMaster>${siteConfig.authorEmail} (${siteConfig.author})</webMaster>
    ${posts
      .map(
        post => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/post/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/post/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      <author>${siteConfig.authorEmail} (${post.author})</author>
      <category>${post.category}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.image ? `<enclosure url="${post.image}" type="image/jpeg" />` : ''}
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`;

  return rss;
};

