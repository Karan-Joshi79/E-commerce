
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice'; // ✅ import Redux action
import Navbar from './Navbar';
import { useAuth } from '../context/AuthContext';

const Electronics = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
 const products = [{
     id: 1,
     name: 'Wireless Earbuds',
     price: 20.0,
     image: 'https://images.unsplash.com/photo-1570993492903-ba4c3088f100?w=600',
   },
   {
     id: 2,
     name: 'Smart Watch',
     price: 50.0,
     image: 'https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?w=600',
   },
   {
     id: 3,
     name: 'Bluetooth Speaker',
     price: 80.0,
     image: 'https://images.unsplash.com/photo-1518671678551-911467efe539?w=600',
   },
   {
     id: 4,
     name: 'Gaming Mouse',
     price: 35.0,
     image: 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D',
   },
   {
     id: 5,
     name: 'Mechanical Keyboard',
     price: 65.0,
     image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=600',
   },
   {
     id: 6,
     name: 'Noise Cancelling Headphones',
     price: 120.0,
     image: 'https://images.unsplash.com/photo-1612478120679-5b7412e15f84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Tm9pc2UlMjBDYW5jZWxsaW5nJTIwSGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
   },
   {
     id: 7,
     name: 'Portable Charger',
     price: 25.0,
     image: 'https://images.unsplash.com/photo-1600577231598-31ea4cb50da3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGFibGUlMjBjaGFyZ2VyfGVufDB8fDB8fHww',
   },
   {
     id: 8,
     name: 'Smartphone Stand',
     price: 10.0,
     image: 'https://images.unsplash.com/photo-1601220363009-f7e66d095649?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnRwaG9uZSUyMHN0YW5kfGVufDB8fDB8fHww',
   },
   {
     id: 9,
     name: '4K Monitor',
     price: 250.0,
     image: 'https://images.unsplash.com/photo-1600818272779-cfa6145222f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8NGslMjBtb25pdGVyfGVufDB8fDB8fHww',
   },
   {
     id: 10,
     name: 'Webcam',
     price: 45.0,
     image: 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViY2FtfGVufDB8fDB8fHww',
   },
   {
     id: 11,
     name: 'Smart Light Bulb',
     price: 15.0,
     image: 'https://images.unsplash.com/photo-1529310399831-ed472b81d589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHQlMjBidWxifGVufDB8fDB8fHww',
   },
   {
     id: 12,
     name: 'Wireless Charger',
     price: 30.0,
     image: 'https://images.unsplash.com/photo-1603674554159-b62f6febbce5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lyZWxlc3MlMjBjaGFyZ2VyfGVufDB8fDB8fHww',
   },
   {
     id: 13,
     name: 'Laptop Cooling Pad',
     price: 22.0,
     image: 'https://images.unsplash.com/photo-1705508216613-be1715a31212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG90JTIwY29saW5nJTIwcGFkfGVufDB8fDB8fHww',
   },
   {
     id: 14,
     name: 'Streaming Microphone',
     price: 99.0,
     image: 'https://images.unsplash.com/photo-1620245446020-879dc5cf2414?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWFtaW5nJTIwbWljcmlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
   },
   {
     id: 15,
     name: 'USB-C Hub',
     price: 40.0,
     image: 'https://images.unsplash.com/photo-1616578781650-cd818fa41e57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNiJTIwYyUyMGh1YnxlbnwwfHwwfHx8MA%3D%3D',// ... (your existing products array)
 }];
  

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      localStorage.setItem('redirectAfterLogin', JSON.stringify(product));
      navigate('/login');
    } else {
      dispatch(addToCart(product)); // ✅ Add to Redux cart
      navigate('/checkout');        // ✅ Go to checkout (we’ll read cart from Redux there)
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">Electronics</h1>
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

export default Electronics;
