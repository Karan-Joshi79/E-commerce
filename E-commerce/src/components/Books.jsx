// src/pages/Books.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import Navbar from './Navbar';
import { useAuth } from '../context/AuthContext';

const Books = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const products = [
    {
      id: 1,
      name: 'The Silent Patient',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600',
    },
    {
      id: 2,
      name: 'Atomic Habits',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=600',
    },
    {
      id: 3,
      name: 'Where the Crawdads Sing',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600',
    },
    {
      id: 4,
      name: 'Educated',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600',
    },
    {
      id: 5,
      name: 'The Midnight Library',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=600',
    },
    {
      id: 6,
      name: 'Project Hail Mary',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=600',
    },
    {
      id: 7,
      name: 'Malibu Rising',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600',
    },
    {
      id: 8,
      name: 'The Last Thing He Told Me',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600',
    },
    {
      id: 9,
      name: 'The Four Winds',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600',
    },
    {
      id: 10,
      name: 'The Sanatorium',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600',
    },
  ];

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      localStorage.setItem('redirectAfterLogin', JSON.stringify(product));
      navigate('/login');
    } else {
      dispatch(addToCart(product));
      navigate('/checkout');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-amber-600 mb-10">Books Collection</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-amber-600 font-bold mb-4">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
