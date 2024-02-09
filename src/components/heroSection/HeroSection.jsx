import React, { useState, useEffect } from 'react';

function HeroSection() {
  const imageUrls = [
    'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageUrls.length]);

  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'auto',
        maxWidth: '100%',
        margin: '50px',
      }}>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index + 1}`}
          style={{
            marginRight: '5px',
            flexShrink: 0,
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 0.1s ease-in-out',
            margin: '0 10px',
          }}/>
      ))}
    </div>
  );
}

export default HeroSection;