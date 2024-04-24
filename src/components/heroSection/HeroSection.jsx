import React, { useState, useEffect } from 'react';

function HeroSection() {
  const imageUrls = [
    'https://i.postimg.cc/XqVMq6f6/1500x300-summer-store-2-SX1500-QL85.jpg',
    'https://i.postimg.cc/vBKqFR0v/Cooking-essentials-1500x300-4-SX1500-QL85.jpg',
    'https://i.postimg.cc/5jd17JfT/mango-1500x300-v1-SX1500-QL85.jpg',
    'https://i.postimg.cc/pLwQQK9M/Untitled.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [imageUrls]);

  return (
    <div className="relative w-full overflow-hidden sm:mb-20 mt-6 mb-14">
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            className="flex-shrink-0 w-full sm:p-9"

          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
