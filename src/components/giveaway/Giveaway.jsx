import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Giveaway() {
  const [giveawayImages] = useState([
    'https://i.postimg.cc/cJGKNNJv/l-HDv-B1709374897.jpg',
    'https://i.postimg.cc/s2PMj0Bw/Hv-UEe1709374940.jpg',
    'https://i.postimg.cc/MpFCcWBG/f-MT141709374983.jpg',
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % giveawayImages.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [giveawayImages.length]);

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? giveawayImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === giveawayImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 relative">
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8'>Giveaway Contest</h1>
        <div className="relative overflow-hidden md:h-80 h-60">
          <div className="carousel w-full flex justify-center items-center h-full relative">
            {giveawayImages.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Giveaway Image ${index + 1}`}
                className={`absolute top-0 left-0 w-full md:h-full lg:h-full object-fit transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}/>
            ))}
          </div>
          <button
            className="absolute top-1/3 md:top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full text-xs shadow-md focus:outline-none"
            onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <button
            className="absolute top-1/3 md:top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full text-xs shadow-md focus:outline-none"
            onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>
        <div className="text-center md:mt-8">
          <a href='https://forms.gle/wiQE8FR1i1mRFsHo6' target='_blank' rel='noopener noreferrer' >
            <button className='text-white bg-purple-500 px-5 py-2 rounded-xl'>Apply Now</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Giveaway;
