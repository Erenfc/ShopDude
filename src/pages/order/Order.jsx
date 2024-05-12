import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import LoaderImage from '../../assets/loader.gif';

function Order() {
    const userid = JSON.parse(localStorage.getItem('user')).user.uid;
    const context = useContext(myContext);
    const { loading, order } = context;

    return (
        <Layout>
            {loading && (
                    <div className="h-full pt-10 flex justify-center items-center">
                        <img src={LoaderImage} alt="Loading..." />
                    </div>)}
            {order.length > 0? (
                <div className="h-full pt-10">
                    {order.filter(obj => obj.userid === userid).map(filteredOrder => (
                        <div key={filteredOrder.orderId} className="mx-auto max-w-5xl px-6 relative">
                            <h2 className="text-xl font-semibold mb-4">Order Date: {filteredOrder.date}</h2>
                            {filteredOrder.cartItems.map((item) => (
                                <div key={item.productId} className="relative bg-white rounded-lg shadow-md overflow-hidden mb-4">
                                    <div className="flex items-center p-4">
                                        <img src={item.imageUrl} alt="Product" className="w-20 h-20 object-cover mr-4" />
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                            <p className="text-sm text-gray-500">Category: {item.category}</p>
                                            <p className="text-sm text-gray-500">Price: {item.price}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">Status: {filteredOrder.status}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <h2 className="text-center text-2xl text-white">No Orders</h2>
            )}
        </Layout>
    );
}

export default Order;
