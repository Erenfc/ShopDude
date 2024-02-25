import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState(null);
    const params = useParams();

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id));
            setProduct(productTemp.data());
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addProductToCart = () => {
        if (product) {
            dispatch(addToCart(product));
            toast.success('Added to cart');
        }
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    {product && (
                        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
                            <img
                                alt="product"
                                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                src={product.imageUrl}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                                    {product.title}
                                </h1>
                                <h2 className="text-gray-500 mb-4">{product.brand}</h2>
                                <p className="leading-relaxed mb-6">{product.description}</p>
                                <div className="flex items-center pb-6 border-b-2 border-gray-200 mb-4">
                                    <span className="title-font font-medium text-2xl text-gray-900">
                                        ₹{product.price}
                                    </span>
                                    
                                </div>
                                <div className="flex border-b-2 border-gray-200 py-4">
                                    <span className="mr-3 text-lg text-gray-500">Rating:</span>
                                    <div className="flex">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6 text-green-500" viewBox="0 0 24 24">
                                            <path d="M12 2L15.09 8.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6 text-green-500" viewBox="0 0 24 24">
                                            <path d="M12 2L15.09 8.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6 text-green-500" viewBox="0 0 24 24">
                                            <path d="M12 2L15.09 8.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6 text-green-500" viewBox="0 0 24 24">
                                            <path d="M12 2L15.09 8.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6 text-green-500" viewBox="0 0 24 24">
                                            <path d="M12 2L15.09 8.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-gray-600">4 Reviews</p>
                                </div>
                                <div className="flex mt-6">
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                        </svg>
                                    </button>
                                    <button onClick={addProductToCart} className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default ProductInfo;
