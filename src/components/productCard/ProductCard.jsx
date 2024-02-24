import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myContext from '../../context/data/myContext';
import './productCard.css';
import { Link } from 'react-router-dom';

function ProductCard() {
    const context = useContext(myContext);
    const { mode, product, searchkey, filterType, filterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addCart = (product, event) => {
        event.preventDefault();
        dispatch(addToCart(product));
        toast.success('Added to cart');
    }

    const decrement = (item) => {
        const updatedProduct = { ...item, quantity: Math.max(item.quantity - 1, 1) };
        setProductList(prevList => prevList.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    }

    const increment = (item) => {
        const updatedProduct = { ...item, quantity: item.quantity + 1 };
        setProductList(prevList => prevList.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    }

    const [productList, setProductList] = useState(product.map(item => ({ ...item, quantity: 1 })));

    const subtotal = productList.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const filteredProducts = productList.filter((item) => {
        const titleMatches = item.title.toLowerCase().includes(searchkey.toLowerCase());
        const categoryMatches = filterType === '' || item.category.toLowerCase().includes(filterType.toLowerCase());
        let priceMatches = true;
        if (filterPrice !== '') {
            const filterPriceNumber = parseFloat(filterPrice);
            priceMatches = parseFloat(item.price) <= filterPriceNumber;
        }
        return titleMatches && categoryMatches && priceMatches;
    });

    return (
        <section className={`text-gray-600 body-font ${mode === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {filteredProducts.slice(0, 8).map((item, index) => {
                        const { brand, title, category, price, regularPrice, imageUrl, id, quantity } = item;
                        return (
                            <div key={index} className={`store-product-container cursor-pointer w-1/2 lg:w-1/5 md:h-120 ${mode === 'light' ? 'bg-white' : 'bg-gray-900'} border-solid border border-gray-300 box-border h-80 shadow-none border-[#f1edf3] p-5 mb-5`} href={`/productinfo/${id}`}>
                                <div className="image-container mb-1">
                                    <img className="object-cover w-full h-full" src={imageUrl} alt={title} />
                                </div>
                                <div>
                                    <h4 className={`block font-semibold text-sm sm:text-base mb-1`} style={{ color: mode === 'dark' ? 'white' : '' }}>{brand}</h4>
                                    <h4 className={`block font-bold text-sm sm:text-base mb-1`} style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h4>
                                    <h4 className={`block font-medium text-xs sm:text-base mb-1`} style={{ color: mode === 'dark' ? 'white' : '' }}>{category}</h4>
                                    <h4 className={`mb-1`} style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price} {regularPrice && <span className="text-gray-500 line-through ml-3">₹{regularPrice}</span>}</h4>
                                    <div className="button-container">
                                        <button className="add-button" onClick={(e) => addCart(item, e)}>Add to Cart</button>
                                        <div className="input-group">
                                            <button className="incDecBtn" type="button" onClick={() => decrement(item)} disabled={quantity === 1}>-</button>
                                            <input type="text" className="customIncDecInput" value={quantity} readOnly />
                                            <button className="incDecBtn" type="button" onClick={() => increment(item)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
