import React from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import { Link } from 'react-router-dom';
import Giveaway from '../../components/giveaway/Giveaway';

function Home() {
  return (
    <Layout>
      <Filter />
      <HeroSection />
        <ProductCard val = {18} />
      <div className="flex justify-center mb-10 mt-5">
        <Link to={'/allproducts'}>
          <button className='bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
      <Giveaway />
    </Layout>
  );
}

export default Home;
