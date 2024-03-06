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
                                    <style>
                                        {`
              .con-like {
                --red: rgb(255, 50, 50);
                position: relative;
                width: 30px;
                height: 30px;
                border: none;
              }
              
              .con-like .like {
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: 0;
                z-index: 20;
                cursor: pointer;
              }
              
              .con-like .checkmark {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              
              .con-like .outline,
              .con-like .filled {
                fill: var(--red);
                position: absolute;
              }
              
              .con-like .filled {
                animation: kfr-filled 0.5s;
                display: none;
              }
              
              .con-like .celebrate {
                position: absolute;
                animation: kfr-celebrate 0.5s;
                animation-fill-mode: forwards;
                display: none;
              }
              
              .con-like .poly {
                stroke: var(--red);
                fill: var(--red);
              }
              
              .con-like .like:checked ~ .checkmark .filled {
                display: block
              }
              
              .con-like .like:checked ~ .checkmark .celebrate {
                display: block
              }
              
              @keyframes kfr-filled {
                0% {
                  opacity: 0;
                  transform: scale(0);
                }
              
                50% {
                  opacity: 1;
                  transform: scale(1.2);
                }
              }
              
              @keyframes kfr-celebrate {
                0% {
                  transform: scale(0);
                }
              
                50% {
                  opacity: 0.8;
                }
              
                100% {
                  transform: scale(1.2);
                  opacity: 0;
                  display: none;
                }
              }`}
                                    </style><div className="con-like">
                                        <input type="checkbox" id="like" className="like" />
                                        <label htmlFor="like" title="like" className="checkmark">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="outline" viewBox="0 0 24 24">
                                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="filled" viewBox="0 0 24 24">
                                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="celebrate">
                                                <polygon className="poly" points="10,10 20,20"></polygon>
                                                <polygon className="poly" points="10,50 20,50"></polygon>
                                                <polygon className="poly" points="20,80 30,70"></polygon>
                                                <polygon className="poly" points="90,10 80,20"></polygon>
                                                <polygon className="poly" points="90,50 80,50"></polygon>
                                                <polygon className="poly" points="80,80 70,70"></polygon>
                                            </svg>
                                        </label>
                                    </div>
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
