import { useEffect, useState } from 'react';
import { carouselImages } from '../data/carouselImages';

const InfiniteImageCarousel = ({ speed = 10000 }) => {
  const [translateX, setTranslateX] = useState(0);
  
  // Repeat images array to create infinite effect
  const repeatedImages = [...carouselImages, ...carouselImages,];

  useEffect(() => {
    const animate = () => {
      setTranslateX((prevTranslateX) => {
        if (prevTranslateX <= -100) {
          return 0;
        }
        return prevTranslateX - 0.5;
      });
    };

    const intervalId = setInterval(animate, speed / 100);

    return () => clearInterval(intervalId);
  }, [speed]);

  return (
    <div className="w-full overflow-hidden mt-20 lg:mt-28">
      <div
        className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {repeatedImages.map((image) => (
          <div
            key={image.id}
            className="flex-none inline-block px-2"
          >
            <img
              src={image.image} 
              alt={image.alt}
              title={image.title}
              className="h-72 md:h-80 w-96 lg:h-96  object-cover rounded-lg  
              transition-shadow duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteImageCarousel;