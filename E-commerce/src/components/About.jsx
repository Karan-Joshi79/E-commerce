// src/components/About.jsx
import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate=useNavigate();
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 px-4 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-indigo-700 mb-6">About MyShop</h1>
          <p className="text-lg leading-relaxed mb-4">
            At <span className="font-semibold text-indigo-600">MyShop</span>, we’re passionate about bringing premium quality products to your doorstep — from cutting-edge electronics to stylish apparel and timeless books.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Founded in 2025, our mission is simple: to offer an effortless, personalized shopping experience backed by top-notch service.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're a tech enthusiast, a fashion lover, or a bookworm, <span className="font-semibold text-indigo-600">MyShop</span> is your destination for curated collections at unbeatable prices.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
