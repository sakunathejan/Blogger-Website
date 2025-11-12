import React, { useEffect } from 'react';
import { siteConfig } from '../config';

const AdSense = ({ slot = 'default', format = 'auto', style = {} }) => {
  useEffect(() => {
    // Load AdSense script if not already loaded
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseId}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Push ad to AdSense
    if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, []);

  // Don't render ads if AdSense ID is not configured
  if (!siteConfig.adsenseId || siteConfig.adsenseId.includes('YOUR_ADSENSE_ID')) {
    return (
      <div className="adsense-placeholder" style={style}>
        <p>AdSense Ad Placeholder</p>
        <small>Replace YOUR_ADSENSE_ID in config.js with your actual AdSense ID</small>
      </div>
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: 'block',
        ...style,
      }}
      data-ad-client={siteConfig.adsenseId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
};

export default AdSense;

