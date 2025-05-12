import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const cartItems = useSelector((state) => state.cart.items || []);
  const cartCount = cartItems.length;

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
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-pink-50/80 to-violet-800/30 backdrop-blur-xl shadow-lg border-b border-pink-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all duration-500 hover:drop-shadow-[0_5px_15px_rgba(236,72,153,0.3)]"
        >
          MyShop
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-8 relative group">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/70 text-pink-900 placeholder-pink-400/70 border border-pink-200/50 rounded-l-full py-2 px-5 focus:outline-none focus:ring-2 focus:ring-pink-300/50 focus:bg-white/90 transition-all duration-300 group-hover:bg-white/80"
          />
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-5 rounded-r-full transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {[
            { path: '/', name: 'Home' },
            { path: '/shop', name: 'Shop' },
            { path: '/about', name: 'About' },
            { path: '/contact', name: 'Contact' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative text-pink-900/90 hover:text-rose-600 font-medium text-sm transition-all duration-300 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-5">
          <Link
            to="/contact"
            className="p-2.5 bg-white/80 hover:bg-white shadow-sm hover:shadow-md rounded-full border border-pink-100 transition-all duration-300 hover:-translate-y-0.5"
          >
            <UserIcon className="w-5 h-5 text-pink-600" />
          </Link>

          <Link
            to="/cart"
            className="p-2.5 bg-white/80 hover:bg-white shadow-sm hover:shadow-md rounded-full border border-pink-100 relative transition-all duration-300 hover:-translate-y-0.5"
          >
            <ShoppingCartIcon className="w-5 h-5 text-pink-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>

          {!isLoggedIn ? (
            <Link
              to="/login"
              className="px-4 py-2 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white/90 hover:bg-white text-rose-600 text-sm font-medium rounded-full border border-rose-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
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
