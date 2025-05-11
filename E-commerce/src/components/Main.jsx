import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const backgroundImageUrl = 'https://media.istockphoto.com/id/839422436/photo/business-man-showing-online-shopping-concept-in-color-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=JLDRWM6TiExFVMHxZpwuDOTE27Sdmpa7mtx3KkbEDtA=';

  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        animation: 'fadeIn 1.5s ease-in-out'
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/30 animate-pulse-slow"></div>
      
      {/* Content container */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        {/* Animated title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg animate-slideInDown">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MyShop</span>
        </h1>
        
        {/* Subtle animated text */}
        <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-100">
          Discover premium products at <span className="font-semibold text-amber-300">unbeatable prices</span>
        </p>
        
        {/* Glowing button */}
        <button
          onClick={() => navigate('/shop')}
          className="relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 group"
        >
          Shop Now
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></span>
        </button>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </div>
  );
};

export default Main;