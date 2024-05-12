import React, { useRef } from 'react';
import { BsTruck } from 'react-icons/bs';
import { GiShoppingCart, GiTakeMyMoney } from 'react-icons/gi';
import { FaHandshake, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Card({ icon, title, description, bgColor }) {
  return (
    <div className={`p-4 flex-shrink-0`} style={{ minWidth: 'clamp(150px, 25%, 300px)' }}>
      <div className={`border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 ${bgColor} shadow-inset p-4 rounded-lg flex flex-col items-center justify-center`}>
        {icon}
        <h2 className="title-font font-medium text-lg text-gray-900 mb-2">{title}</h2>
        <p className="delivery-description leading-relaxed text-center">{description}</p>
      </div>
    </div>
  );
}

function Track() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 350;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 350;
    }
  };

  return (
    <div className="overflow-hidden relative">
      <div className="overflow-x-auto flex flex-no-wrap pb-4" ref={containerRef}>
        <Card
          icon={<GiShoppingCart className="text-green-600 w-12 h-12 mb-3 inline-block" />}
          title="Grocery Shopping"
          description="Our delivery partner will be at your door."
          bgColor="bg-green-200"
        />
        <Card
          icon={<VscWorkspaceTrusted className="text-blue-600 w-12 h-12 mb-3 inline-block" />}
          title="Trusted Products"
          description="Rely on us for authentic and reliable organic goodness."
          bgColor="bg-blue-200"
        />
        <Card
          icon={<MdVerified className="text-purple-600 w-12 h-12 mb-3 inline-block" />}
          title="Organic Certified Products"
          description="Purity you can trust, nurtured with organic integrity."
          bgColor="bg-purple-200"
        />
        <Card
          icon={<BsTruck className="text-yellow-600 w-12 h-12 mb-3 inline-block" />}
          title="Fast Delivery in 20 mins"
          description="Get your order delivered in 20-30 minutes."
          bgColor="bg-yellow-200"
        />
        <Card
          icon={<GiTakeMyMoney className="text-red-600 w-12 h-12 mb-3 inline-block" />}
          title="Free Shipping Over 100rs"
          description="Enjoy free shipping on orders over 100rs."
          bgColor="bg-red-200"
        />
        <Card
          icon={<FaHandshake className="text-indigo-600 w-12 h-12 mb-3 inline-block" />}
          title="Refer and Get Offers"
          description="Invite Your Relatives and Get More Offers"
          bgColor="bg-indigo-200"
        />
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center">
          <FaChevronLeft className="text-gray-600 w-6 h-6" onClick={scrollLeft}/>
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center">
          <FaChevronRight className="text-gray-600 w-6 h-6" onClick={scrollRight}/>
        </button>
    </div>
  );
}

export default Track;
