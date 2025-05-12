import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white px-4 overflow-hidden">
      {/* Animated Spark Overlay (optional glow layer) */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm animate-pulse-slow"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg animate-slideInDown">
          Discover Deals at <span className="text-amber-400">MyShop</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto animate-fadeIn delay-100">
          Explore exclusive collections of electronics, fashion, and books — crafted to your lifestyle.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-400/30 group"
        >
          Start Shopping
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></span>
        </button>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInDown {
          from {
            transform: translateY(-30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slideInDown {
          animation: slideInDown 1s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        .delay-100 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Main;
