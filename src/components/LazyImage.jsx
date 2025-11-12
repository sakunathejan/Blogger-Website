import React, { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

const LazyImage = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef} className={`lazy-image-wrapper ${className}`} {...props}>
      {!isLoaded && (
        <div className="lazy-image-placeholder">
          <div className="lazy-image-skeleton"></div>
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'lazy-image-loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default LazyImage;

