import { useContext, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myContext from '../../context/data/myContext';
import './productCard.css';

function ProductCard() {
    const context = useContext(myContext);
    const { mode, product, searchkey, filterType, filterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    }

    const filteredProducts = product.filter((item) => {
        const titleMatches = item.title.toLowerCase().includes(searchkey.toLowerCase());
        const categoryMatches = filterType === '' || item.category.toLowerCase().includes(filterType.toLowerCase());
        let priceMatches = true;
        if (filterPrice !== '') {
            const filterPriceNumber = parseFloat(filterPrice);
            priceMatches = parseFloat(item.price) <= filterPriceNumber;
        }
        return titleMatches && categoryMatches && priceMatches;
    });

    const handleAddToCart = (event, product) => {
        event.preventDefault();
        addCart(product);
    };

    return (
        <section className={`text-gray-600 body-font ${mode === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {filteredProducts.slice(0, 8).map((item, index) => {
                        const { title, price, category, brand, imageUrl, id, regularPrice } = item;
                        return (
                            <a key={index} id={`store-product-${id}`} className={`store-product-container cursor-pointer w-1/2 lg:w-1/6 md:h-120 ${mode === 'light' ? 'bg-white' : 'bg-gray-900'} border-solid border border-gray-300 box-border h-80 shadow-none border-[#f1edf3] p-5 mb-5`} href={`/productinfo/${id}`}>
                                <div className="image-container mb-1">
                                    <img className="object-cover w-full h-full" src={imageUrl} alt={title} />
                                </div>
                                <div>
                                    <h4 className={`block font-semibold text-sm sm:text-base mb-1`} style={{ color: mode === 'dark' ? 'white' : '' }}>{brand}</h4>
                                    <h4 className={`block font-bold text-sm sm:text-base mb-1`} style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h4>
                                    <h4 className={`block font-medium text-xs sm:text-base mb-1`} style={{ color: mode === 'dark' ? 'white' : '' }}>{category}</h4>
                                    <h4 className={`mb-1`} style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price} {regularPrice && <span className="text-gray-500 line-through ml-3">₹{regularPrice}</span>}</h4>
                                    <div className="button-container">
                                        <button className="add-button" onClick={(e) => handleAddToCart(e, item)}>Add to Cart</button>
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