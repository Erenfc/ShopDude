import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import { BsTruck } from 'react-icons/bs';
import { GiShoppingCart, GiTakeMyMoney } from 'react-icons/gi';
import { FaHandshake } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Track() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div style={{ overflowX: 'auto', overflowY: 'hidden', height: '275px', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <section className="specific-section">
        <div className="container mx-auto p-5 md:p-5">
          <div className="flex text-center">
            <div className="p-4" style={{ minWidth: 'clamp(150px, 25%, 300px)' }}>
              <div className="grocery-card border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-green-200 shadow-inset p-4 rounded-lg">
                <GiShoppingCart className="text-green-600 w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-lg text-gray-900 mb-2">Grocery Shopping</h2>
                <p className="delivery-description leading-relaxed">Our delivery partner will be at your door.</p>
              </div>
            </div>

            <div className="p-4" style={{ minWidth: 'clamp(150px, 25%, 300px)' }}>
              <div className="grocery-card border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-blue-200 shadow-inset p-4 rounded-lg">
                <VscWorkspaceTrusted className="text-blue-600 w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-lg text-gray-900 mb-2">Trusted Products</h2>
                <p className="delivery-description leading-relaxed">Rely on us for authentic and reliable organic goodness.</p>
              </div>
            </div>

            <div className="p-4" style={{ minWidth: 'clamp(150px, 25%, 300px)' }}>
              <div className="grocery-card border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-purple-200 shadow-inset p-4 rounded-lg">
                <MdVerified className="text-purple-600 w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-lg text-gray-900 mb-2">Organic Certified Products</h2>
                <p className="delivery-description leading-relaxed">Purity you can trust, nurtured with organic integrity.</p>
              </div>
            </div>

            <div className="p-4" style={{ minWidth: 'clamp(150px, 25%, 300px)' }}>
              <div className="grocery-card border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-yellow-200 shadow-inset p-4 rounded-lg">
                <BsTruck className="text-yellow-600 w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-lg text-gray-900 mb-2">Fast Delivery in 20 mins</h2>
                <p className="delivery-description leading-relaxed">Get your order delivered in 20-30 minutes.</p>
              </div>
            </div>

            <div className="p-4" style={{ minWidth: 'clamp(150px, 25%, 300px)' }}>
              <div className="grocery-card border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-red-200 shadow-inset p-4 rounded-lg">
                <GiTakeMyMoney className="text-red-600 w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-lg text-gray-900 mb-2">Free Shipping Over 100rs</h2>
                <p className="delivery-description leading-relaxed">Enjoy free shipping on orders over 100rs.</p>
              </div>
            </div>

            <div className="p-4" style={{ minWidth: 'clamp(150px, 25%, 300px)' }}>
              <div className="grocery-card border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-indigo-200 shadow-inset p-4 rounded-lg">
                <FaHandshake className="text-indigo-600 w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-medium text-lg text-gray-900 mb-2">Refer and Get Offers</h2>
                <p className="delivery-description leading-relaxed">Invite Your Relatives and Get More Offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Track;
