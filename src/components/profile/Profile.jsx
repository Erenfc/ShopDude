import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const orders = useSelector(state => state.orders);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      {user ? (
        <div className="max-w-md mx-auto border rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-2">Welcome, {user.username}!</h2>
          <p className="text-gray-700 mb-4">Email: {user.email}</p>
          <h3 className="text-lg font-semibold mb-2">Order History</h3>
          <ul className="mb-4">
            {orders.map(order => (
              <li key={order.id} className="mb-2">
                Order #{order.id} - Total: ${order.total}
              </li>
            ))}
          </ul>
          <Link to="/settings" className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">
            Settings
          </Link>
          <button onClick={logout} className="bg-red-500 text-white py-2 px-4 rounded-md">
            Logout
          </button>
        </div>
      ) : (
        <div className="max-w-md mx-auto border rounded-lg p-4 shadow-lg">
          <p className="text-lg font-semibold mb-4">You are not logged in.</p>
          <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">
            Login
          </Link>
          <Link to="/signup" className="bg-green-500 text-white py-2 px-4 rounded-md">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;