
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';

 const allProducts = [
   // Electronics
  {
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
  },
   // Clothing
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
   // Books
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


const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';

  const filtered = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

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
      <div className="pt-24 px-4 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6">
            Search Results for: <span className="text-gray-800">{query}</span>
          </h1>

          {filtered.length === 0 ? (
            <p className="text-gray-600">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover rounded mb-3"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;

