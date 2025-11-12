import React, { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

const LazyImage = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
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

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true); // Prevent showing skeleton after error
  };

  return (
    <div ref={imgRef} className={`lazy-image-wrapper ${className}`} {...props}>
      {!isLoaded && !hasError && (
        <div className="lazy-image-placeholder">
          <div className="lazy-image-skeleton"></div>
        </div>
      )}
      {hasError && (
        <div className="lazy-image-fallback">
          <div className="fallback-content">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            <span>Image unavailable</span>
          </div>
        </div>
      )}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'lazy-image-loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default LazyImage;

