import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteFromCart, incrementQuantity, clearCart } from "../../redux/cartSlice";
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';
import { FaTrashCan } from "react-icons/fa6";

function Cart() {
  const context = useContext(myContext);
  const { mode } = context;

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItems.forEach(cartItem => {
      temp = temp + (cartItem.price * cartItem.quantity);
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = totalAmount < 100 ? 30 : 0;

  const grandTotal = shipping + totalAmount;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (name === "" || address == "" || area == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }

    const addressInfo = {
      name,
      address,
      area,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }

    var options = {
      key: import.meta.env.VITE_RAZORPAY_API,
      key_secret: import.meta.env.VITE_RAZORPAY_KEY_SECRET,
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "ShopDude",
      description: "Your Online Purchases",
      handler: function (response) {
        toast.success('Payment Successful')
        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          ),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId
        }

        try {
          const orderRef = collection(fireDB, 'order');
          addDoc(orderRef, orderInfo);

        } catch (error) {
          console.log(error)
        }
      },

      theme: {
        color: "#3399cc"
      }
    };

    var pay = new window.Razorpay(options);
    pay.open();
    dispatch(clearCart());
  }

  return (
    <Layout>
      <h1 className="mb-10 text-center text-2xl font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart Items</h1>
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartItems.map((item, index) => {
            const { id, title, price, category, imageUrl, quantity } = item;
            return (
              <div key={index} className="rounded-lg border shadow-md bg-white p-6 flex items-center space-x-4">
                <img src={imageUrl} alt="product-image" className="w-24 md:w-40 rounded-lg" />
                <div className="flex flex-col md:flex-row md:flex-grow md:items-center md:justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                    <h2 className="text-sm font-medium text-gray-600 mt-1">{category}</h2>
                    <p className="text-sm font-semibold text-gray-700 mt-1">Price: ₹{price}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className='border-2 flex flex-row'>
                      <button onClick={() => handleDecrement(id)} type="button" className="h-7 w-7" >
                        -
                      </button>
                      <input
                        type="text"
                        readOnly
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        value={quantity} />
                      <button onClick={() => handleIncrement(id)} type="button" className="flex h-7 w-7 items-center justify-center">
                        +
                      </button>
                    </div>
                    <div className="ml-6 flex text-sm">
                      <button onClick={() => deleteCart(item)} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                        <FaTrashCan size={12} className="text-red-500" />
                        <span className="text-xs font-medium text-red-500">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="rounded-lg border shadow-md bg-white p-6 md:w-1/3">
          <div className="flex justify-between mb-4">
            <p className="text-gray-700 mb-2">Subtotal</p>
            <p className="text-gray-700 mb-2">₹{totalAmount}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-700 mb-2">Shipping</p>
            <p className="text-gray-700 mb-2">₹{shipping}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold mb-2">Total</p>
            <p className="text-lg font-bold mb-2">₹{grandTotal}</p>
          </div>
          <Modal
              name={name}
              address={address}
              area={area}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setArea={setArea}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow} />
        </div>
      </div>
    </Layout>
  )
}

export default Cart;