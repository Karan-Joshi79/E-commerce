
// src/pages/Clothing.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/slices/cartSlice';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const Clothing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

   const products = [
     {
       id: 1,
       name: 'Cotton T-Shirt',
       price: 19.99,
       image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
     },
     {
       id: 2,
       name: 'Denim Jeans',
       price: 49.99,
       image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600',
     },
     {
       id: 3,
       name: 'Summer Dress',
       price: 39.99,
       image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600',
     },
     {
       id: 4,
       name: 'Hoodie',
       price: 34.99,
       image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600',
     },
     {
       id: 5,
       name: 'Formal Shirt',
       price: 29.99,
       image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600',
     },
     {
       id: 6,
       name: 'Athletic Shorts',
       price: 24.99,
       image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600',
     },
     {
       id: 7,
       name: 'Winter Jacket',
       price: 89.99,
       image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600',
     },
     {
       id: 8,
       name: 'Casual Blazer',
       price: 59.99,
       image: 'https://plus.unsplash.com/premium_photo-1691622500262-9962299a130c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
     {
       id: 9,
       name: 'Silk Scarf',
       price: 22.99,
       image: 'https://images.unsplash.com/photo-1677478863154-55ecce8c7536?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2lsayUyMHNjYXJmfGVufDB8fDB8fHww',
     },
     {
       id: 10,
       name: 'Leather Belt',
       price: 29.99,
       image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600',
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
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">Clothing</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-indigo-600 font-bold mb-4">${product.price.toFixed(2)}</p>
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

export default Clothing;
