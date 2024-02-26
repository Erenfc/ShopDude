import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import myContext from '../../context/data/myContext';

const Giveaway = () => {
  const context = useContext(myContext);
  const { mode } = context;

  const giveawayImages = [
    'https://placekitten.com/300/200',
    'https://placekitten.com/300/201',
    'https://placekitten.com/300/202',
  ];

  const giveawaySettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <section className="giveaway-section">
      <div className="container mx-auto px-5 py-10">
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold mb-4" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Giveaway Images
          </h2>
          {/* Giveaway Images Slider */}
          <Slider {...giveawaySettings}>
            {giveawayImages.map((image, index) => (
              <div key={index} className="mb-4 mx-auto">
                <img
                  alt={`giveaway ${index+1}`}
                  className="w-full h-64 object-cover object-center rounded-md inline-block border-2 border-gray-200 bg-gray-100"
                  src={image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Giveaway;
