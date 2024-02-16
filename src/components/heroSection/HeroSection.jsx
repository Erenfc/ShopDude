import React, { useState, useEffect } from 'react';

function HeroSection() {
  const imageUrls = [
    'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
    'https://i.postimg.cc/RCg3z9P9/Screenshot-2024-02-14-210402.png',
    'https://i.postimg.cc/dV41bZ8J/Screenshot-2024-02-14-213816.png',
    'https://i.postimg.cc/ZR7zv38w/VPN-app-1.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [imageUrls]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        marginTop: '25px',
        marginBottom: '25px',
        marginLeft:'15px',
        marginRight:'15px',
      }}>
      <div
        style={{
          display: 'flex',
          transition: 'transform 1s ease-in-out',
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            style={{
              flexShrink: 0,
              width: '100%',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
