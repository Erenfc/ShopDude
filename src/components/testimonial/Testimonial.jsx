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
    { id: 1, name: 'Somu Raj', role: 'Happy Customer', image: 'https://via.placeholder.com/150', feedback: 'I love the convenience of ordering groceries online. The quality of the products is excellent, and the delivery is always on time. Highly recommended!' },
    { id: 2, name: 'Parameshwaran', role: 'Satisfied Customer', image: 'https://via.placeholder.com/150', feedback: 'The variety of products available is impressive. I can find everything I need for my family in one place. Plus, the user-friendly website makes shopping a breeze!' },
    { id: 3, name: 'Palani Kumar', role: 'Frequent Shopper', image: 'https://via.placeholder.com/150', feedback: 'As a busy professional, online grocery shopping has been a game-changer for me. It saves me time, and I can trust the quality of the products. Great service!' },
    { id: 4, name: 'Sangili Arumugam', role: 'Happy Customer', image: 'https://via.placeholder.com/150', feedback: 'Fantastic experience! The products are fresh, and the delivery is always prompt. I highly recommend this service.' },
    { id: 5, name: 'Sattanathan', role: 'Satisfied Customer', image: 'https://via.placeholder.com/150', feedback: 'I\'m impressed by the quality and variety of products available. It\'s so convenient to shop online and have everything delivered to my doorstep.' },
    { id: 6, name: 'Suresh', role: 'Frequent Shopper', image: 'https://via.placeholder.com/150', feedback: 'I\'ve been using this service for months now, and I have never been disappointed. The website is easy to use, and the delivery is always on time. Highly recommended!' },
    { id: 7, name: 'Rabin', role: 'Happy Customer', image: 'https://via.placeholder.com/150', feedback: 'I can\'t imagine going back to traditional grocery shopping after experiencing this service. It\'s convenient, reliable, and the quality of the products is top-notch.' },
    { id: 8, name: 'Jeyasuriya', role: 'Satisfied Customer', image: 'https://via.placeholder.com/150', feedback: 'Shopping for groceries online has made my life so much easier. I don\'t have to deal with crowded stores or long checkout lines anymore. Plus, the customer service is excellent!' },
    { id: 9, name: 'Mugesh', role: 'Frequent Shopper', image: 'https://via.placeholder.com/150', feedback: 'I recommend this service to all my friends and family. It\'s convenient, affordable, and the quality of the products is always consistent.' },
    { id: 10, name: 'Muthu Saravana', role: 'Happy Customer', image: 'https://via.placeholder.com/150', feedback: 'I\'ve tried other online grocery services before, but this one is by far the best. The selection is great, the prices are reasonable, and the delivery is fast.' },
    { id: 11, name: 'Sameem', role: 'Satisfied Customer', image: 'https://via.placeholder.com/150', feedback: 'I love how easy it is to reorder my favorite items with just a few clicks. This service has saved me so much time and hassle.' },
    { id: 12, name: 'Saravana', role: 'Frequent Shopper', image: 'https://via.placeholder.com/150', feedback: 'I\'m a busy parent, so anything that makes my life easier is a win in my book. This service has definitely made grocery shopping less stressful for me.' },
    { id: 13, name: 'Anu', role: 'Happy Customer', image: 'https://via.placeholder.com/150', feedback: 'I appreciate how responsive the customer support team is. Anytime I\'ve had an issue, they\'ve been quick to resolve it and ensure my satisfaction.' },
    { id: 14, name: 'Karuppasamy', role: 'Satisfied Customer', image: 'https://via.placeholder.com/150', feedback: 'I was hesitant to try online grocery shopping at first, but now I can\'t imagine going back. It\'s so convenient, and the quality of the products is excellent.' },
    { id: 15, name: 'Sri Devi', role: 'Frequent Shopper', image: 'https://via.placeholder.com/150', feedback: 'I love that I can schedule my deliveries around my busy schedule. It\'s one less thing to worry about during the week.' },
    { id: 16, name: 'Mahalakshmi', role: 'Happy Customer', image: 'https://via.placeholder.com/150', feedback: 'I\'ve been using this service for years now, and it never disappoints. The quality of the products is consistently high, and the delivery is always on time.' },
    { id: 17, name: 'Manikandan', role: 'Satisfied Customer', image: 'https://via.placeholder.com/150', feedback: 'I love that I can get all of my grocery shopping done without ever leaving my house. It\'s a game-changer for busy parents like me.' },
    { id: 18, name: 'Sakthivel', role: 'Frequent Shopper', image: 'https://via.placeholder.com/150', feedback: 'I appreciate how easy it is to find new products to try. The recommendations are always spot-on, and I\'ve discovered some new favorites thanks to this service.' },
    { id: 19, name: 'RajaPandi', role: 'Happy Customer', image: 'https://via.placeholder.com/150', feedback: 'I\'ve saved so much time and money since switching to online grocery shopping. I don\'t know how I ever lived without it!' },
    { id: 20, name: 'Rajkumar', role: 'Satisfied Customer', image: 'https://via.placeholder.com/150', feedback: 'I appreciate how environmentally friendly this service is. I can reduce my carbon footprint by having groceries delivered instead of driving to the store.' },
  ], []);

  const testimonialSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
  }, [mode, testimonials]);

  return (
    <section className="testimonial-section">
      <div className="container mx-auto px-5 py-10">
        <h1 className="text-center text-3xl font-bold text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonials</h1>
        <h2 className="text-center text-2xl font-semibold mb-10" style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className="text-green-500">customers</span> are saying</h2>

        <Slider {...testimonialSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
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
