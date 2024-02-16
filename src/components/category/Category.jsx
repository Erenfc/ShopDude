import React from 'react';

function Category({ mode, cardStyle }) {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-nowrap">
        <CategoryCard imgUrl="https://i.postimg.cc/QM96bWG4/basket-full-vegetables-1112-316.png" title="Fruits & Vegetables" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/pXNgKMSs/Dairy-Bread-Eggs-removebg-preview.png" title="Milk, Bread & Eggs" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/ncNccyx2/Meats-Fish-removebg-preview.png" title="Meat & Fish" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/fTGHjBFD/Slice-10-removebg-preview.png" title="Rice, Atta & Dal" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/Xqp4n8Dt/Oil-Masala-Sauces-QL30-removebg-preview.png" title="Oil, Masala & Sauces" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/N0WgWYm9/Snacks-Biscuits-2-removebg-preview.png" title="Snacks & Biscuits" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/pTzWfTyV/Instant-Food-new-removebg-preview.png" title="Instant Food" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/bY9vv3MZ/apricot-cakes-2-removebg-preview.png" title="Cakes & Backery" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/cHv82HSG/Chocolates-Icecreams-new-removebg-preview.png" title="Chocolates & Icecreams" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/W3chW7Xg/Tea-coffee-QL30-removebg-preview.png" title="Tea & Coffee" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/8CnkrmrL/Health-Nutrition-QL30-removebg-preview.png" title="Health & Nutrition" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/4NQhK48P/Cleaning-Household-removebg-preview.png" title="Cleaning & Household" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/VvnzYMfj/Hygiene-Personal-care-QL30-removebg-preview-1.png" title="Hygiene & Personal Care" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/xd305qzp/Bath-Body-QL30-removebg-preview.png" title="Soap & Shampoo" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/m2zQynPk/Beauty-makeup-QL30-removebg-preview.png" title="Beauty & Makeup" cardStyle={cardStyle} />
        <CategoryCard imgUrl="https://i.postimg.cc/28NTKmhM/Baby-Care-2-QL30-removebg-preview.png" title="Baby Care" cardStyle={cardStyle} />
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