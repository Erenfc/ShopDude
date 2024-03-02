import React, { useState, useEffect } from 'react';

function Giveaway() {
  const [giveawayImages] = useState([
    'https://i.postimg.cc/s2PMj0Bw/Hv-UEe1709374940.jpg',
    'https://i.postimg.cc/cJGKNNJv/l-HDv-B1709374897.jpg',
    'https://i.postimg.cc/MpFCcWBG/f-MT141709374983.jpg',
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % giveawayImages.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [giveawayImages.length]);

  return (
    <section className="giveaway-section">
      <h1 className='text-center text-3xl font-bold text-black p-5'>Giveaway Contest</h1>
      <div
        style={{
          position: 'relative',
          height: 'auto',
          width: '100%',
          overflow: 'hidden',
          marginTop: '10px',
          marginBottom: '25px',
          display: 'flex',
          alignItems: 'center',
        }}>
        <div
          style={{
            display: 'flex',
            transition: 'transform 1s ease-in-out',
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}>
          {giveawayImages.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Giveaway Image ${index + 1}`}
              style={{
                flexShrink: 0,
                maxHeight: '300px',
                width: 'auto',
              }} />
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href='https://forms.gle/wiQE8FR1i1mRFsHo6' target='_blank' rel='noopener noreferrer' >
          <button className='text-white bg-purple-500 px-5 py-2 rounded-xl mb-5'>Apply Now</button>
        </a>
      </div>

    </section>
  );
}

export default Giveaway;
