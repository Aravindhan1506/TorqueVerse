import { useState, useRef, useEffect, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  eager?: boolean;
  maxWidth?: number; // Constrain max width for faster loading
  maxHeight?: number; // Constrain max height for faster loading
  onLoad?: () => void;
}

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '',
  priority = false,
  eager = false,
  maxWidth = 400, // Default smaller size for card images
  maxHeight = 300,
  onLoad 
}: OptimizedImageProps) => {
  const shouldLoadImmediately = priority || eager;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(shouldLoadImmediately);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldLoadImmediately) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '25px', threshold: 0.01 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadImmediately]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Skeleton placeholder */}
      <div 
        className={`absolute inset-0 bg-secondary transition-opacity duration-100 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-muted to-secondary animate-shimmer" />
      </div>
      
      {/* Actual image with size constraints */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={maxWidth}
          height={maxHeight}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
          onLoad={handleLoad}
          className={`transition-opacity duration-100 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;