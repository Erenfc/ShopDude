import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import myContext from '../../context/data/myContext';

const Testimonial = () => {
  const context = useContext(myContext);
  const { mode } = context;

  const { useMemo } = React;

  const testimonials = useMemo(() => [
    { id: 1, name: 'Jane Doe', role: 'Happy Customer', image: 'https://ecommerce-sk.vercel.app/img/jane.png', feedback: 'I love the convenience of ordering groceries online. The quality of the products is excellent, and the delivery is always on time. Highly recommended!' },
    { id: 2, name: 'John Smith', role: 'Satisfied Customer', image: 'https://ecommerce-sk.vercel.app/img/john.png', feedback: 'The variety of products available is impressive. I can find everything I need for my family in one place. Plus, the user-friendly website makes shopping a breeze!' },
    { id: 3, name: 'Amy Johnson', role: 'Frequent Shopper', image: 'https://ecommerce-sk.vercel.app/img/amy.png', feedback: 'As a busy professional, online grocery shopping has been a game-changer for me. It saves me time, and I can trust the quality of the products. Great service!' },
  ], []);
  const testimonialSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => { console.log('Testimonial Mode:', mode); console.log('Testimonial Testimonials:', testimonials); }, [mode, testimonials]);

  return (
    <section className="testimonial-section">
      <div className="container mx-auto px-5 py-10">
        <h1 className="text-center text-3xl font-bold text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonials</h1>
        <h2 className="text-center text-2xl font-semibold mb-10" style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className="text-green-500">customers</span> are saying</h2>

        <Slider {...testimonialSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                {console.log('Testimonial:', testimonial)}
                <img alt={`testimonial-${testimonial.id}`} className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 mx-auto" src={testimonial.image} />
                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">{testimonial.feedback}</p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">{testimonial.name}</h2>
                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;