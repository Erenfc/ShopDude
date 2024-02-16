import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import { BsTruck } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { GiTakeMyMoney } from 'react-icons/gi';

function Track() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div style={{ overflowX: 'auto', height: '500px', width: '100%', display: 'flex', justifyContent: 'center' }}>
      {/* Center the component horizontally */}
      <section className="specific-section">
        <div className="container mx-auto px-5 md:py-5">
          <div className="flex text-center">
            {/* Grocery Shopping Section */}
            <div className="p-4" style={{ minWidth: '300px' }}>
              <div
                className="grocery-card border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-inset p-4 rounded-lg"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                <GiShoppingCart className="text-green-600 w-12 h-12 mb-3 inline-block" />

                <h2 className="title-font font-medium text-lg text-gray-900 mb-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Grocery Shopping
                </h2>
                <p className="delivery-description leading-relaxed">Our delivery partner will be at your door.</p>
              </div>
            </div>

            {/* Fast Delivery Section */}
            <div className="p-4" style={{ minWidth: '300px' }}>
              <div
                className="grocery-card border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-inset p-4 rounded-lg"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                <BsTruck className="text-blue-600 w-12 h-12 mb-3 inline-block" />

                <h2 className="title-font font-medium text-lg text-gray-900 mb-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Fast Delivery
                </h2>
                <p className="delivery-description leading-relaxed">Get your order delivered in 20-30 minutes.</p>
              </div>
            </div>

            {/* Free Shipping Over 100rs Section */}
            <div className="p-4" style={{ minWidth: '300px' }}>
              <div
                className="grocery-card border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-inset p-4 rounded-lg"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                <GiTakeMyMoney className="text-purple-600 w-12 h-12 mb-3 inline-block" />

                <h2 className="title-font font-medium text-lg text-gray-900 mb-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Free Shipping Over 100rs
                </h2>
                <p className="delivery-description leading-relaxed">Enjoy free shipping on orders over 100rs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Track;