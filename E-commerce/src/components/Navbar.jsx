import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';


const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-lg backdrop-blur-sm bg-opacity-90 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link 
          to="/" 
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 hover:from-cyan-400 hover:to-blue-400 transition-all duration-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        >
          MyShop
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-8 relative">
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-l-full py-2 px-5 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all"
          />
          <button
            onClick={handleSearch}
            className="bg-cyan-400 hover:bg-cyan-300 text-gray-900 px-5 rounded-r-full transition-all duration-300 flex items-center justify-center"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          {[
            { path: '/', name: 'Home' },
            { path: '/shop', name: 'Shop' },
            { path: '/about', name: 'About' },
            { path: '/contact', name: 'Contact' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative text-white/90 hover:text-white px-1 py-2 text-sm font-medium group transition-all duration-300"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link
            to="/account"
            className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 hover:border-cyan-300/50 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-300/20"
          >
            <UserIcon className="w-5 h-5 text-white" />
          </Link>

          <Link
            to="/cart"
            className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 hover:border-cyan-300/50 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-300/20 relative"
          >
            <ShoppingCartIcon className="w-5 h-5 text-white" />
            <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-gray-900 text-xs font-black rounded-full h-6 w-6 flex items-center justify-center border-2 border-white shadow-md animate-bounce">
              3
            </span>
          </Link>

          {!isLoggedIn ? (
            <Link to="/login" className="text-white hover:underline text-sm font-medium">
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-white hover:underline text-sm font-medium bg-transparent border-none focus:outline-none"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
