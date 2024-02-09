import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import myContext from '../../context/data/myContext';

function ProductCard() {
    const context = useContext(myContext);
    const { mode, product, searchkey, filterType, filterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const textColor = mode === 'light' ? 'text-gray-900' : 'text-white';

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 md:py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {product
                        .filter((obj) => obj.title.toLowerCase().includes(searchkey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                        .filter((obj) => obj.price.includes(filterPrice))
                        .slice(0, 8)
                        .map((item, index) => {
                            const { title, price, category, brand, imageUrl, id, regularPrice } = item;
                            return (
                                <a key={index} id={`store-product-${id}`} className="cursor-pointer product-card w-1/2 lg:w-1/5 md:h-120 bg-white border-solid border box-border h-80 shadow-none border-[#f1edf3] p-1" href={`/productinfo/${id}`}>
                                    <div className="relative h-[150px] md:h-[200px] ml-1 mr-1">
                                        <div className="relative flex flex-col justify-between -mx-1 bottom-5">
                                            <div>
                                            <div className="flex justify-center items-center ml-12" style={{ height: '60%', width: '60%' }}>
                                            <img className="object-cover w-full h-full" src={imageUrl} alt={title}/>
                                               </div>
                                                <h4 className="block font-semibold text-sm sm:text-base mb-1">{brand}</h4>
                                                <h4 className="block font-bold text-sm sm:text-base mb-2">{title}</h4>
                                                <h4 className="block font-medium text-xs sm:text-base">{category}</h4>
                                            </div>
                                            <div className="product-card items-end mt-1 sm:mt-4">
                                                <div className="product-card_price-container__NcBb7">
                                                    <h4 className="block font-norms text-base">₹{price} {regularPrice && <span className="text-gray-500 line-through ml-3">₹{regularPrice}</span>}</h4>
                                                </div>
                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className="py-1 px-z sm:px-20 text-base rounded-md py-0 h-full text-white font-semibold sm:text-base shadow-lg w-full sm:w-[90%] bg-green-500"
                                                        type="button"
                                                        aria-label="Add">
                                                        <div className="flex justify-center items-center font-lato">
                                                            <span className="text-semibold sm:text-md">Add to cart</span>
                                                        </div>
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;