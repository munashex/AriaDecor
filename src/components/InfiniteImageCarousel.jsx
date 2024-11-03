import React, { useEffect, useState, memo } from 'react';
import { carouselImages } from '../data/carouselImages';

// Memoized Image Component for performance
const ImageComponent = memo(({ image }) => (
  <div className="flex-none inline-block px-2">
    <img
      src={image.image}
      alt={image.alt}
      title={image.title}
      loading="lazy"
      className="h-72 md:h-80 w-96 lg:h-96 object-cover rounded-lg transition-shadow duration-300"
    />
  </div>
));

const InfiniteImageCarousel = ({ speed = 10000 }) => {
  const [translateX, setTranslateX] = useState(0);
  
  // Use a subset of images to avoid performance issues
  const repeatedImages = [...carouselImages.slice(0, 5), ...carouselImages.slice(0, 5)];

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setTranslateX((prevTranslateX) => {
        if (prevTranslateX <= -100) {
          return 0;
        }
        return prevTranslateX - 0.1; // Adjusted for even slower movement
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden mt-20 lg:mt-28">
      <div
        className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {repeatedImages.map((image) => (
          <ImageComponent key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteImageCarousel;
