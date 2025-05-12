// src/components/Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Navbar />
      <div className="pt-24 px-4 min-h-screen bg-gradient-to-b from-gray-50 to-indigo-100">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your cart is empty. Start shopping now!</p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded border border-gray-200"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-indigo-600 font-bold mt-2">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
