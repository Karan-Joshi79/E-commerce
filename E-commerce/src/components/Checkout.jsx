// src/pages/Checkout.jsx
import React from 'react';
import { clearCart } from '../redux/slices/cartSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  // Redirect to home if cart is empty
 useEffect(() => {
  if (cartItems.length === 0) {
    navigate('/');
  }
  clearCart();
}, [cartItems, navigate]);

if (cartItems.length === 0) return null;


  // Calculate total
  const total = cartItems.reduce((acc, item) =>   item.price, 0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-24 px-4">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Your Cart</h2>

          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <span className="text-indigo-700 font-bold">${item.price.toFixed(2)}</span>
            </div>
          ))}

          <div className="text-right mt-6">
            <h4 className="text-xl font-semibold">Total: <span className="text-indigo-600">${total.toFixed(2)}</span></h4>
          </div>

          <button
            onClick={() => navigate('/payment')}
            className="w-full bg-indigo-600 text-white py-3 mt-6 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
