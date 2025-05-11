import React from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCartIcon, StarIcon } from '@heroicons/react/24/solid';
const Main2 = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      price: 20.00,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1570993492903-ba4c3088f100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVhcmJ1ZHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 50.00,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 80.00,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1518671678551-911467efe539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];
  

  const categories = ['Electronics', 'Clothing', 'Home', 'Books'];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Categories Section */}
      <section className="bg-white py-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4 text-center">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
               <Link
               key={index}
               to={`/category/${category.toLowerCase()}`}
               className="bg-indigo-50 hover:bg-indigo-100 rounded-lg p-4 text-center transition cursor-pointer"
             >
               <span className="text-indigo-700 font-medium">{category}</span>
             </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition">
                      <ShoppingCartIcon className="w-5 h-5 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main2;