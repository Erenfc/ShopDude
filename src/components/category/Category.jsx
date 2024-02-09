import React from 'react';

function Category({ mode, cardStyle }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-nowrap">
        <CategoryCard imgUrl="https://i.postimg.cc/mDQc5Y65/fruitveg-removebg-preview.png" title="Fruits & Vegetables" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/fLMWkckm/Meats-Fish-removebg-preview.png" title="Meat & Fish" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://example.com/rice-atta-dal.jpg" title="Rice, Atta & Dal" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/G2GcLT9D/Oil-Masala-Sauces-QL30-removebg-preview.png" title="Oil, Masala & Sauces" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/tCT0qvSb/Snacks-Biscuits-2-removebg-preview.png" title="Snacks & Biscuits" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://example.com/instant-food.jpg" title="Instant Food" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://example.com/dairy-bread.jpg" title="Dairy & Bread" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://example.com/chocolates-icecreams.jpg" title="Chocolates & Icecreams" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://example.com/breakfast-food-item.jpg" title="Breakfast Food Item" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://example.com/tea-coffee.jpg" title="Tea & Coffee" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://example.com/health-nutrition.jpg" title="Health & Nutrition" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/c4jn6LYT/Cleaning-Household-removebg-preview.png" title="Cleaning & Household" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://example.com/hygiene-personal-care.jpg" title="Hygiene & Personal Care" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/GtTLY1TY/Bath-Body-QL30-removebg-preview.png" title="Soap & Shampoo" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://example.com/beauty-makeup.jpg" title="Beauty & Makeup" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://example.com/baby-care.jpg" title="Baby Care" cardStyle={cardStyle} />
      </div>
    </div>
  );
}

function CategoryCard({ imgUrl, title, cardStyle }) {
  return (
    <div className={`flex-shrink-0 w-48 mx-2 overflow-hidden rounded-lg p-4 border shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out ${cardStyle}`}>
      <div className="flex justify-center mb-4">
        <img className="w-32" src={imgUrl} alt={title} />
      </div>
      <h1 className="text-base text-center font-semibold title-font">{title}</h1>
    </div>
  );
}

export default Category;