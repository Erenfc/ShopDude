import React, { Suspense } from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
const ProductCard = React.lazy(() => import('../../components/productCard/ProductCard'));
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import { Link } from 'react-router-dom';
import Giveaway from '../../components/giveaway/Giveaway';

function Home() {
  return (
    <Layout>
      <Filter />
      <HeroSection />
      <Suspense fallback={
        <div>
          <style>
            {`
              .spinner {
                font-size: 28px;
                position: relative;
                display: inline-block;
                width: 1em;
                height: 1em;
              }

              .spinner.center {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
              }

              .spinner .spinner-blade {
                position: absolute;
                left: 0.4629em;
                bottom: 0;
                width: 0.074em;
                height: 0.2777em;
                border-radius: 0.0555em;
                background-color: transparent;
                transform-origin: center -0.2222em;
                animation: spinner-fade9234 1s infinite linear;
              }

              .spinner .spinner-blade:nth-child(1) {
                animation-delay: 0s;
                transform: rotate(0deg);
              }

              .spinner .spinner-blade:nth-child(2) {
                animation-delay: 0.083s;
                transform: rotate(30deg);
              }

              .spinner .spinner-blade:nth-child(3) {
                animation-delay: 0.166s;
                transform: rotate(60deg);
              }

              .spinner .spinner-blade:nth-child(4) {
                animation-delay: 0.249s;
                transform: rotate(90deg);
              }

              .spinner .spinner-blade:nth-child(5) {
                animation-delay: 0.332s;
                transform: rotate(120deg);
              }

              .spinner .spinner-blade:nth-child(6) {
                animation-delay: 0.415s;
                transform: rotate(150deg);
              }

              .spinner .spinner-blade:nth-child(7) {
                animation-delay: 0.498s;
                transform: rotate(180deg);
              }

              .spinner .spinner-blade:nth-child(8) {
                animation-delay: 0.581s;
                transform: rotate(210deg);
              }

              .spinner .spinner-blade:nth-child(9) {
                animation-delay: 0.664s;
                transform: rotate(240deg);
              }

              .spinner .spinner-blade:nth-child(10) {
                animation-delay: 0.747s;
                transform: rotate(270deg);
              }

              .spinner .spinner-blade:nth-child(11) {
                animation-delay: 0.83s;
                transform: rotate(300deg);
              }

              .spinner .spinner-blade:nth-child(12) {
                animation-delay: 0.913s;
                transform: rotate(330deg);
              }

              @keyframes spinner-fade9234 {
                0% {
                  background-color: #69717d;
                }
                100% {
                  background-color: transparent;
                }
              }
            `}
          </style>
          <div className="spinner center">
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
          </div>
        </div>
      }>
        <ProductCard />
      </Suspense>
      <div className="flex justify-center mb-10">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
      <Giveaway />
    </Layout>
  );
}

export default Home;
