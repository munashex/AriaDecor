import  { useEffect, useState } from 'react';


const ContactCarousel = ({ speed = 20000 }) => {
  const [translateX, setTranslateX] = useState(0);
  const text = "Contact us - ARIADECO STUDIO - About us - ARIADECO STUDIO - Contact us - ARIADECO STUDIO - Contact us - ARIADECO STUDIO - Contact us - ARIADECO STUDIO -";
  const repeatedText = Array(10).fill(text);

  useEffect(() => {
    const animate = () => {
      setTranslateX((prevTranslateX) => {
        if (prevTranslateX <= -100) {
          return 0;
        }
        return prevTranslateX - 1;
      });
    };

    const intervalId = setInterval(animate, speed / 100);

    return () => clearInterval(intervalId);
  }, [speed]);

 
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {repeatedText.map((item, index) => (
          <div
            key={index}
            className="flex-none inline-block"
          >
           <h1 className="text-4xl animate-fade-down animate-delay-300 animate-duration-500 font-bold md:text-5xl lg:text-7xl font-shantell">{item.toUpperCase()}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCarousel;