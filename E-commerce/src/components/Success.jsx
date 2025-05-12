// src/components/Success.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-200 to-green-300 pt-24 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full animate-fadeIn">
          <div className="flex justify-center mb-6">
            <CheckCircleIcon className="w-16 h-16 text-green-500 animate-bounce" />
          </div>
          <h2 className="text-3xl font-extrabold text-green-700 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-1">Thank you for shopping with us.</p>
          <p className="text-gray-500 text-sm italic">You’ll be redirected shortly...</p>

          <div className="mt-6">
            <div className="w-full h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
