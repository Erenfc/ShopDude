import React, { useContext, useEffect } from 'react';
import myContext from '../../context/data/myContext';
import { useSelector } from 'react-redux';
import Layout from '../../components/layout/Layout';
import Filter from '../../components/filter/Filter';
import Category from '../../components/category/Category';
import ProductCard from '../../components/productCard/ProductCard';

function Allproducts() {
  const context = useContext(myContext);
  const { mode } = context;

  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardStyle = mode === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white';

  return (
    <Layout>
      <Filter />
      <div className="my-8 "></div>
      <h1 className={`text-3xl font-bold text-center mb-8 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>All Categories</h1>
      <Category mode={mode} cardStyle={cardStyle} />
      <ProductCard val={100000}/>
    </Layout>
   );
}

export default Allproducts;