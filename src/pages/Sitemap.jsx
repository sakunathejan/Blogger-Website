import React, { useEffect } from 'react';
import { generateSitemap } from '../utils/generateSitemap';

const Sitemap = () => {
  useEffect(() => {
    const sitemap = generateSitemap();
    
    // Create a blob and download it (for development)
    // In production, this should be served as a static file
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Set response headers for XML
    document.contentType = 'application/xml';
    
    // For now, we'll just log it. In production, generate this at build time
    console.log('Sitemap generated:', sitemap);
  }, []);

  return null;
};

export default Sitemap;

