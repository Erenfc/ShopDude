import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';


function Cart() {

  const context = useContext(myContext)
  const { mode } = context;

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart")
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmount(temp);
    console.log(temp)
  }, [cartItems])

  const shipping = totalAmount < 100 ? 30 : 0;

  const grandTotal = shipping + totalAmount;
  
  const [name, setName] = useState("")
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const buyNow = async () => {
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
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
      key: import.meta.env.RAZORPAY_API,
      key_secret: import.meta.env.RAZORPAY_KEY_SECRET,
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "ShopDude",
      description: "Your Online Purchases",
      handler: function (response) {
        console.log(response)
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
    console.log(pay)


  }
  return (
    <Layout>
  <h1 className="mb-10 text-center text-2xl font-bold"style={{ color: mode === 'dark' ? 'white' : '' }}>Cart Items</h1>
  <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 xl:px-0">
    <div className="rounded-lg md:w-2/3">
      {cartItems.map((item, index) => {
        const { title, price, category, imageUrl } = item;
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
                <button onClick={() => deleteCart(item)} className="text-red-500 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
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
        pincode={pincode}
        phoneNumber={phoneNumber}
        setName={setName}
        setAddress={setAddress}
        setPincode={setPincode}
        setPhoneNumber={setPhoneNumber}
        buyNow={buyNow}
      />
    </div>
  </div>
</Layout>
  )
}

export default Cart