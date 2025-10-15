import React, { useState, useCallback } from 'react';

interface OptimizedImageProps {
  webpSrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  onLoad?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  webpSrc, 
  fallbackSrc,
  alt, 
  className = '', 
  width, 
  height,
  onLoad 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [useWebP, setUseWebP] = useState(true);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    if (useWebP) {
      // If WebP fails, try fallback image
      setUseWebP(false);
      setHasError(false);
    } else {
      // If fallback also fails, show error
      setHasError(true);
    }
  }, [useWebP]);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 rounded flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-xs">Error</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse rounded ${className}`}
          style={{ width, height }}
        />
      )}
      
      {/* Actual image with WebP support and fallback */}
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={useWebP ? webpSrc : fallbackSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          style={{ width, height }}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;