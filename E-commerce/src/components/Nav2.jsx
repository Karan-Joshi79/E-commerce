import React from 'react';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

const Nav2 = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 shadow-xl">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
    
    {/* Logo */}
    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
      MyShop
    </div>

    {/* Search Bar with Integrated Button */}
    <div className="flex-1 mx-6 relative gap-3">
      <div className="flex">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
        />
        <button 
          className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-r-md border border-l-0 border-gray-700 transition-all flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-5 h-5 text-white"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
            />
          </svg>
          <span className="ml-2 hidden sm:inline">Search</span>
        </button>
      </div>
    </div>

    {/* Icons */}
    <div className="flex items-center space-x-4">
      <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md px-4 py-2 text-gray-200 hover:text-white transition-all">
        <UserIcon className="w-5 h-5" />
        <span>Login</span>
      </button>
      <button className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 rounded-md px-4 py-2 text-white transition-all relative">
        <ShoppingCartIcon className="w-5 h-5" />
        <span>Cart</span>
        <span className="absolute -top-2 -right-2 bg-amber-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          3
        </span>
      </button>
    </div>
  </div>
</header>
  );
};

export default Nav2;
