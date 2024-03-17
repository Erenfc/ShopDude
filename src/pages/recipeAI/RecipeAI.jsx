import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/productCard/ProductCard';

const RecipeIngredients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const recipeIngredients = {
    'puttu': ['Rice Flour', 'Coconut', '', 'Salt'],
    // Add other recipes and their ingredients here
  };

  const searchRecipes = () => {
    const ingredients = recipeIngredients[searchTerm.toLowerCase()];
    if (ingredients) {
      setRecipes(ingredients.filter(ingredient => ingredient.trim() !== ''));
      setErrorMessage('');
    } else {
      setRecipes([]);
      setErrorMessage('Recipe not found. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto mt-10 px-4">
        <input
          type="text"
          placeholder="Enter recipe name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={searchRecipes}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Search Recipes
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
          {recipes.length > 0 ? (
            recipes.map((ingredient, index) => (
              <ProductCard key={index} title={ingredient} />
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default RecipeIngredients;
