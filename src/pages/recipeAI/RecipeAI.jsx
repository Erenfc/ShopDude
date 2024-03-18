import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/productCard/ProductCard';

const RecipeIngredients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const recipeIngredients = {
    'pizza': ['Flour', 'Yeast', 'Salt', 'Tomato Sauce', 'Cheese'],
    'burger': ['Buns', 'Ground Beef', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Ketchup', 'Mustard'],
    'pasta': ['Pasta', 'Tomato Sauce', 'Cheese', 'Olive Oil', 'Garlic', 'Basil'],
    'biriyani': ['Basmati Rice', 'Chicken', 'Yogurt', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Cinnamon', 'Cardamom', 'Cloves', 'Bay Leaf', 'Saffron', 'Mint Leaves', 'Cilantro'],
    'paneer tikka': ['Paneer', 'Yogurt', 'Ginger-Garlic Paste', 'Turmeric Powder', 'Red Chili Powder', 'Garam Masala', 'Coriander Powder', 'Cumin Powder', 'Lemon Juice', 'Capsicum', 'Onion', 'Tomato'],
    'chicken curry': ['Chicken', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Turmeric Powder', 'Red Chili Powder', 'Coriander Powder', 'Cumin Powder', 'Garam Masala', 'Curry Leaves', 'Coconut Milk', 'Oil'],
    'palak paneer': ['Paneer', 'Spinach', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Turmeric Powder', 'Red Chili Powder', 'Garam Masala', 'Cumin Powder', 'Coriander Powder', 'Cream', 'Oil'],
    'samosa': ['Potatoes', 'Peas', 'Onion', 'Ginger', 'Garlic', 'Green Chili', 'Coriander', 'Cumin Seeds', 'Turmeric Powder', 'Garam Masala', 'Coriander Powder', 'Salt', 'Oil', 'Pastry Dough'],
    'chana masala': ['Chickpeas', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Coriander', 'Cumin Seeds', 'Turmeric Powder', 'Red Chili Powder', 'Coriander Powder', 'Garam Masala', 'Amchur Powder', 'Oil'],
    'tandoori chicken': ['Chicken', 'Yogurt', 'Ginger-Garlic Paste', 'Turmeric Powder', 'Red Chili Powder', 'Garam Masala', 'Coriander Powder', 'Cumin Powder', 'Lemon Juice', 'Kasuri Methi', 'Oil', 'Red Food Color'],
    'dal makhani': ['Black Lentils', 'Kidney Beans', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Cumin Seeds', 'Coriander Powder', 'Garam Masala', 'Butter', 'Cream'],
    'puri': ['Whole Wheat Flour', '', 'Salt', 'Oil'],
    'idli': ['Rice', 'Urad Dal', 'Fenugreek Seeds', 'Salt'],
    'dosa': ['Rice', 'Urad Dal', 'Fenugreek Seeds', 'Salt'],
    'pakora': ['Besan (Gram Flour)', 'Onion', 'Potatoes', 'Spinach', 'Chili Powder', 'Turmeric Powder', 'Baking Powder', 'Salt', '', 'Oil'],
    'jalebi': ['Flour', 'Yogurt', 'Baking Powder', 'Sugar', '', 'Saffron', 'Cardamom Powder', 'Oil'],
    'gulab jamun': ['Milk Powder', 'Flour', 'Baking Powder', 'Ghee', 'Milk', 'Sugar', '', 'Cardamom Powder'],
    'rasmalai': ['Milk', 'Sugar', 'Lemon Juice', '', 'Saffron', 'Cardamom Powder', 'Almonds', 'Pistachios'],
    'sambar': ['Toor Dal', 'Carrot', 'Beans', 'Eggplant', 'Drumstick', 'Onion', 'Tomato', 'Tamarind Pulp', 'Sambar Powder', 'Turmeric Powder', 'Red Chili Powder', 'Coriander', 'Mustard Seeds', 'Cumin Seeds', 'Dry Red Chilies', 'Curry Leaves'],
    'butter chicken': ['Chicken', 'Butter', 'Cream', 'Yogurt', 'Tomato', 'Onion', 'Ginger', 'Garlic', 'Green Chili', 'Cashew Nuts', 'Kasuri Methi', 'Turmeric Powder', 'Red Chili Powder', 'Garam Masala', 'Coriander Powder', 'Cumin Powder'],
    'aloo paratha': ['Whole Wheat Flour', 'Potatoes', 'Onion', 'Green Chili', 'Coriander', 'Cumin Seeds', 'Salt', 'Ghee'],
    'paneer butter masala': ['Paneer', 'Butter', 'Cream', 'Tomato', 'Onion', 'Ginger', 'Garlic', 'Green Chili', 'Cashew Nuts', 'Kasuri Methi', 'Turmeric Powder', 'Red Chili Powder', 'Garam Masala', 'Coriander Powder', 'Cumin Powder'],
    'masala dosa': ['Rice', 'Urad Dal', 'Fenugreek Seeds', 'Potato', 'Onion', 'Green Chili', 'Mustard Seeds', 'Curry Leaves', 'Turmeric Powder', 'Ghee'],
    'hyderabadi biryani': ['Basmati Rice', 'Chicken', 'Yogurt', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Mint Leaves', 'Cilantro', 'Saffron', 'Bay Leaf', 'Cardamom', 'Cinnamon', 'Cloves', 'Ghee'],
    'rasgulla': ['Milk', 'Lemon Juice', 'Sugar', 'Rose '],
    'vada pav': ['Potatoes', 'Buns', 'Besan (Gram Flour)', 'Green Chili', 'Ginger', 'Garlic', 'Mustard Seeds', 'Turmeric Powder', 'Coriander', 'Oil'],
    'mango lassi': ['Mango', 'Yogurt', 'Milk', 'Sugar', 'Cardamom Powder'],
    'vegetable pulao': ['Basmati Rice', 'Mixed Vegetables (Carrot, Beans, Peas, Cauliflower)', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Cinnamon', 'Cardamom', 'Cloves', 'Bay Leaf', 'Mint Leaves', 'Cilantro', 'Ghee'],
    'kheer': ['Rice', 'Milk', 'Sugar', 'Cardamom Powder', 'Saffron', 'Almonds', 'Pistachios', 'Cashew Nuts', 'Raisins'],
    'bhindi masala': ['Okra', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Coriander Powder', 'Turmeric Powder', 'Red Chili Powder', 'Garam Masala', 'Amchur Powder', 'Oil'],
    'coconut chutney': ['Coconut', 'Green Chili', 'Ginger', 'Curry Leaves', 'Mustard Seeds', 'Urad Dal', 'Tamarind', 'Salt'],
    'ragi dosa': ['Ragi Flour', 'Rice Flour', 'Urad Dal', 'Fenugreek Seeds', 'Green Chili', 'Ginger', 'Coriander', 'Salt', 'Oil'],
    'chole bhature': ['Chickpeas', 'Bhature (Fried Bread)', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Cumin Seeds', 'Coriander Powder', 'Turmeric Powder', 'Red Chili Powder', 'Garam Masala', 'Amchur Powder', 'Coriander', 'Oil'],
    'vada': ['Urad Dal', 'Green Chili', 'Ginger', 'Curry Leaves', 'Onion', 'Coriander', 'Salt', 'Oil'],
    'pongal': ['Rice', 'Moong Dal', 'Pepper', 'Cumin Seeds', 'Ginger', 'Cashew Nuts', 'Curry Leaves', 'Ghee'],
    'rasam': ['Tomato', 'Tamarind', 'Toor Dal', 'Turmeric Powder', 'Rasam Powder', 'Coriander', 'Cumin Seeds', 'Mustard Seeds', 'Dry Red Chilies', 'Garlic', 'Curry Leaves', 'Asafoetida', 'Oil'],
    'kozhukattai': ['Rice Flour', 'coconut', 'Jaggery', 'Cardamom Powder', 'Salt', 'Oil'],
    'avial': ['Mixed Vegetables (Drumstick, Carrot, Potato, Beans, Raw Banana, Pumpkin)', 'coconut', 'Curd', 'Green Chili', 'Cumin Seeds', 'Turmeric Powder', 'Curry Leaves', 'Coconut Oil'],
    'puliyodharai': ['Rice', 'Tamarind', 'Jaggery', 'Turmeric Powder', 'Mustard Seeds', 'Chana Dal', 'Urad Dal', 'Curry Leaves', 'Dry Red Chilies', 'Asafoetida', 'Gingelly Oil'],
    'adai': ['Rice', 'Toor Dal', 'Chana Dal', 'Urad Dal', 'Moong Dal', 'Green Chili', 'Ginger', 'Curry Leaves', 'Onion', 'Coriander', 'Salt', 'Oil'],
    'thayir sadam': ['Rice', 'Curd', 'Mustard Seeds', 'Urad Dal', 'Green Chili', 'Ginger', 'Curry Leaves', 'Coriander', 'Salt', 'Oil'],
    'kuzhi paniyaram': ['Rice Flour', 'Urad Dal', 'Fenugreek Seeds', 'coconut', 'Jaggery', 'Cardamom Powder', 'Salt', 'Oil'],
    'uttapam': ['Rice', 'Urad Dal', 'Fenugreek Seeds', 'Onion', 'Tomato', 'Green Chili', 'Coriander', 'Salt', 'Oil'],
    'upma': ['Semolina (Sooji/Rava)', 'Onion', 'Green Chili', 'Ginger', 'Curry Leaves', 'Mustard Seeds', 'Urad Dal', 'Chana Dal', 'Cashew Nuts', 'Vegetables (Carrot, Peas, Beans)', 'Turmeric Powder', 'Salt', 'Oil'],
    'bisi bele bath': ['Rice', 'Toor Dal', 'Carrot', 'Beans', 'Peas', 'Potato', 'Tamarind', 'Jaggery', 'Turmeric Powder', 'Sambar Powder', 'Mustard Seeds', 'Cumin Seeds', 'Curry Leaves', 'Dry Red Chilies', 'Asafoetida', 'Ghee'],
    'idli sambar': ['Idli Rice', 'Urad Dal', 'Toor Dal', 'Mixed Vegetables (Carrot, Beans, Potato, Drumstick)', 'Tamarind', 'Sambar Powder', 'Mustard Seeds', 'Cumin Seeds', 'Dry Red Chilies', 'Curry Leaves', 'Asafoetida', 'Ghee'],
    'thakkali kuzhambu': ['Tomato', 'Onion', 'Tamarind', 'Garlic', 'Turmeric Powder', 'Red Chili Powder', 'Coriander Powder', 'Cumin Seeds', 'Mustard Seeds', 'Fenugreek Seeds', 'Curry Leaves', 'Asafoetida', 'Oil'],
    'vathal kuzhambu': ['Vathal', 'Tamarind', 'Garlic', 'Sambar Powder', 'Turmeric Powder', 'Mustard Seeds', 'Cumin Seeds', 'Dry Red Chilies', 'Curry Leaves', 'Asafoetida', 'Oil'],
    'kothamalli thokku': ['Coriander', 'Green Chili', 'Ginger', 'Garlic', 'Tamarind', 'Jaggery', 'Mustard Seeds', 'Fenugreek Seeds', 'Asafoetida', 'Turmeric Powder', 'Salt', 'Oil'],
    'thalicha thayir saadam': ['Rice', 'Curd', 'Mustard Seeds', 'Urad Dal', 'Green Chili', 'Ginger', 'Curry Leaves', 'Coriander', 'Salt', 'Oil'],
    'appam': ['Rice', 'Coconut', 'Yeast', 'Sugar', 'Salt'],
    'puttu': ['Rice Flour', 'Coconut', '', 'Salt'],
    'fish curry': ['Fish', 'Coconut', 'Shallots', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Turmeric Powder', 'Red Chili Powder', 'Coriander Powder', 'Fenugreek Seeds', 'Curry Leaves', 'Tamarind', 'Coconut Oil'],
    'idiyappam': ['Rice Flour', '', 'Salt'],
    'kerala beef fry': ['Beef', 'Shallots', 'Ginger', 'Garlic', 'Green Chili', 'Turmeric Powder', 'Red Chili Powder', 'Coriander Powder', 'Garam Masala', 'Curry Leaves', 'Coconut Oil'],
    'kerala chicken curry': ['Chicken', 'Coconut', 'Shallots', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Turmeric Powder', 'Red Chili Powder', 'Coriander Powder', 'Garam Masala', 'Curry Leaves', 'Coconut Oil'],
    'kerala fish molee': ['Fish', 'Coconut Milk', 'Ginger', 'Garlic', 'Green Chili', 'Turmeric Powder', 'Pepper Powder', 'Curry Leaves', 'Mustard Seeds', 'Fenugreek Seeds', 'Coconut Oil'],
    'puttu kadala curry': ['Chana (Kadala)', 'Coconut', 'Shallots', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Turmeric Powder', 'Red Chili Powder', 'Coriander Powder', 'Garam Masala', 'Curry Leaves', 'Coconut Oil'],
    'kerala parotta': ['Flour', '', 'Sugar', 'Salt', 'Oil'],
    'kerala vegetable stew': ['Mixed Vegetables (Carrot, Potato, Green Beans, Peas)', 'Coconut Milk', 'Shallots', 'Ginger', 'Green Chili', 'Cinnamon', 'Cloves', 'Cardamom', 'Curry Leaves', 'Coconut Oil'],
    'kerala prawn curry': ['Prawns', 'Coconut', 'Shallots', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Turmeric Powder', 'Red Chili Powder', 'Coriander Powder', 'Garam Masala', 'Curry Leaves', 'Coconut Oil'],
    'kerala banana chips': ['Raw Banana', 'Turmeric Powder', 'Salt', 'Coconut Oil'],
    'kerala beef curry': ['Beef', 'Coconut', 'Shallots', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Turmeric Powder', 'Red Chili Powder', 'Coriander Powder', 'Garam Masala', 'Curry Leaves', 'Coconut Oil'],
    'kerala sambar': ['Toor Dal', 'Mixed Vegetables (Drumstick, Carrot, Beans, Pumpkin)', 'Shallots', 'Tomato', 'Tamarind', 'Sambar Powder', 'Turmeric Powder', 'Red Chili Powder', 'Mustard Seeds', 'Cumin Seeds', 'Dry Red Chilies', 'Curry Leaves', 'Asafoetida', 'Coconut Oil'],
    'pav bhaji': ['Potatoes', 'Mixed Vegetables (Carrot, Beans, Peas)', 'Onion', 'Tomato', 'Capsicum', 'Ginger', 'Garlic', 'Green Chili', 'Pav Bhaji Masala', 'Turmeric Powder', 'Red Chili Powder', 'Butter', 'Coriander', 'Pav (Bread Rolls)'],
    'bombay sandwich': ['Bread', 'Potatoes', 'Tomato', 'Cucumber', 'Onion', 'Green Chutney', 'Butter', 'Chaat Masala'],
    'misal pav': ['Mixed Sprouts', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Pav Bhaji Masala', 'Turmeric Powder', 'Red Chili Powder', 'Coriander', 'Lemon Juice', 'Pav (Bread Rolls)'],
    'cheese toast': ['Bread', 'Cheese', 'Butter', 'Green Chili', 'Tomato', 'Onion', 'Capsicum', 'Coriander', 'Chaat Masala'],
    'cheese dosa': ['Dosa Batter', 'Cheese', 'Green Chili', 'Coriander', 'Butter'],
    'corn cheese balls': ['Sweet Corn', 'Potatoes', 'Cheese', 'Green Chili', 'Ginger', 'Garlic', 'Coriander', 'Bread Crumbs', 'Oil'],
    'vegetable frankie': ['Tortilla Wraps', 'Potatoes', 'Mixed Vegetables (Carrot, Beans, Peas, Cauliflower)', 'Onion', 'Ginger', 'Garlic', 'Green Chili', 'Garam Masala', 'Turmeric Powder', 'Red Chili Powder', 'Coriander', 'Oil'],
    'vegetable biryani': ['Basmati Rice', 'Mixed Vegetables (Carrot, Beans, Peas, Cauliflower)', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chili', 'Cinnamon', 'Cardamom', 'Cloves', 'Bay Leaf', 'Saffron', 'Mint Leaves', 'Cilantro', 'Yogurt', 'Ghee'],
    'paneer burger': ['Buns', 'Paneer', 'Potatoes', 'Onion', 'Tomato', 'Lettuce', 'Mayonnaise', 'Ketchup', 'Mustard', 'Oil'],
    'vegetable sandwich': ['Bread', 'Carrot', 'Cucumber', 'Capsicum', 'Tomato', 'Butter', 'Green Chutney', 'Mayonnaise', 'Tomato Ketchup', 'Chaats Masala'],
    'cheese pasta': ['Pasta', 'Cheese', 'Milk', 'Butter', 'Flour', 'Garlic', 'Salt', 'Black Pepper'],
    'sandwich': ['Bread', 'Carrot', 'Cucumber', 'Capsicum', 'Tomato', 'Butter', 'Green Chutney', 'Mayonnaise', 'Tomato Ketchup', 'Chaats Masala'],
    'Rice Kheer': ['Milk', 'Rice', 'Sugar', 'Cardamom', 'Saffron', 'Almonds', 'Cashews', 'Raisins'],
    'Paneer Tikka Masala': ['Milk', 'Paneer', 'Yogurt', 'Onion', 'Tomato', 'Garlic', 'Ginger', 'Green Chili', 'Coriander Powder', 'Cumin Powder', 'Garam Masala', 'Kasuri Methi', 'Fresh Cream', 'Butter', 'Oil'],
    'Badam Milk': ['Milk', 'Almonds', 'Sugar', 'Saffron', 'Cardamom'],
    'Basundi': ['Milk', 'Sugar', 'Saffron', 'Cardamom', 'Almonds', 'Pistachios'],
    'Rasmalai': ['Milk', 'Sugar', 'Cardamom', 'Saffron', 'Almonds', 'Pistachios', 'Lemon Juice'],
    'Kesar Pista Ice Cream': ['Milk', 'Cream', 'Sugar', 'Saffron', 'Pistachios', 'Cardamom'],
    'Shahi Tukda': ['Milk', 'Bread', 'Ghee', 'Sugar', 'Saffron', 'Cardamom', 'Almonds', 'Pistachios'],
    'Coconut Laddu': ['Milk', 'Coconut', 'Sugar', 'Cardamom', 'Ghee'],
    'Chocolate Chip Cookies': ['Flour', 'Butter', 'Brown Sugar', 'White Sugar', 'Eggs', 'Vanilla Extract', 'Baking Soda', 'Salt', 'Chocolate Chips'],
    'Blueberry Muffins': ['Flour', 'Sugar', 'Butter', 'Eggs', 'Milk', 'Baking Powder', 'Salt', 'Blueberries'],
    'Banana Bread': ['Flour', 'Sugar', 'Butter', 'Eggs', 'Bananas', 'Baking Soda', 'Salt', 'Vanilla Extract'],
    'Croissants': ['Flour', 'Sugar', 'Butter', 'Yeast', 'Salt', 'Milk', 'Eggs'],
    'Cinnamon Rolls': ['Flour', 'Butter', 'Sugar', 'Brown Sugar', 'Cinnamon', 'Yeast', 'Milk', 'Eggs', 'Vanilla Extract'],
    'Red Velvet Cake': ['Flour', 'Sugar', 'Butter', 'Eggs', 'Cocoa Powder', 'Red Food Coloring', 'Buttermilk', 'Vinegar', 'Vanilla Extract', 'Baking Soda', 'Salt'],
    'Apple Pie': ['Flour', 'Butter', 'Sugar', 'Apples', 'Cinnamon', 'Nutmeg', 'Lemon Juice', 'Salt', 'Pie Crust'],
    'Carrot Cake': ['Flour', 'Sugar', 'Vegetable Oil', 'Eggs', 'Carrots', 'Walnuts', 'Pineapple', 'Vanilla Extract', 'Baking Powder', 'Baking Soda', 'Cinnamon', 'Salt'],
    'Chocolate Cake': ['Flour', 'Sugar', 'Butter', 'Eggs', 'Cocoa Powder', 'Baking Powder', 'Baking Soda', 'Vanilla Extract', 'Milk', 'Salt'],
    'Cheesecake': ['Graham Crackers', 'Butter', 'Cream Cheese', 'Sugar', 'Eggs', 'Sour Cream', 'Vanilla Extract'],
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
          className="w-full p-2 mb-4 border border-gray-300 rounded"/>
        <button
          onClick={searchRecipes}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Search Recipes
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div>
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
