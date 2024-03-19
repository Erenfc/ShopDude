import React from 'react';

function Category({ mode, cardStyle }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-nowrap">
        <CategoryCard imgUrl="https://i.postimg.cc/dt5DKCGP/Fruits-Veg-removebg-preview.png" title="Fruits & Vegetables" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/sD8NM6rV/Dairy-Bread-Eggs-removebg-preview.png" title="Milk, Bread & Eggs" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/FKbWnhJR/Meats-Fish-removebg-preview.png" title="Meat & Fish" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/mDbdvKQS/Atta-Rice-Oil-Dals-removebg-preview.png" title="Rice, Atta & Dal" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/Xqp4n8Dt/Oil-Masala-Sauces-QL30-removebg-preview.png" title="Oil, Masala & Sauces" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/Y2ZqBDf1/Remove-bg-ai-1710784680660.png" title="Snacks & Biscuits" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/zDgFnB7K/Remove-bg-ai-1710784884194.png" title="Instant Food" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/bY9vv3MZ/apricot-cakes-2-removebg-preview.png" title="Cakes & Backery" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/cHv82HSG/Chocolates-Icecreams-new-removebg-preview.png" title="Chocolates & Icecreams" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/c4g0JJ8r/hp-bev-m-tea-coffee-480-250923-removebg-preview.png" title="Tea & Coffee" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/8CnkrmrL/Health-Nutrition-QL30-removebg-preview.png" title="Health & Nutrition" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/ZRMLYzVP/Remove-bg-ai-1710784141387.png" title="Cleaning & Household" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/VvnzYMfj/Hygiene-Personal-care-QL30-removebg-preview-1.png" title="Hygiene & Personal Care" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/xd305qzp/Bath-Body-QL30-removebg-preview.png" title="Soap & Shampoo" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/m2zQynPk/Beauty-makeup-QL30-removebg-preview.png" title="Beauty & Makeup" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/B65TxGvG/babycare-removebg-preview.png" title="Baby Care" cardStyle={cardStyle} />
      </div>
    </div>
  );
}

function CategoryCard({ imgUrl, title, cardStyle }) {
  return (
    <div className={`flex-shrink-0 w-48 mx-2 overflow-hidden rounded-lg p-4 border shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out ${cardStyle} mb-5`}>
      <div className="flex justify-center mb-4 ">
      <img className="w-32" src={imgUrl} alt={title} sizes="(max-height: 300px) 100px, 300px" />
      </div>
      <h1 className="text-base text-center font-semibold title-font">{title}</h1>
    </div>
  );
}

export default Category;
