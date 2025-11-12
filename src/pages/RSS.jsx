import React, { useEffect } from 'react';
import { generateRSS } from '../utils/generateRSS';

const RSS = () => {
  useEffect(() => {
    const rss = generateRSS();
    
    // For development, log it. In production, generate this at build time
    console.log('RSS feed generated:', rss);
  }, []);

  return null;
};

export default RSS;

