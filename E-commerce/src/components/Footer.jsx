import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
   
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* About Us */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">MyShop</h3>
              <p className="text-gray-400">
                Your one-stop destination for quality products at affordable prices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Shop</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
  
            {/* Customer Service */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Return Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-gray-400">Subscribe to get updates on new arrivals and special offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md text-gray-800 focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
  
          {/* Payment Methods */}
          <div className="flex justify-center space-x-6 mb-6">
            <FaCcVisa size={30} className="text-gray-400 hover:text-white transition" />
            <FaCcMastercard size={30} className="text-gray-400 hover:text-white transition" />
            <FaCcPaypal size={30} className="text-gray-400 hover:text-white transition" />
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer
