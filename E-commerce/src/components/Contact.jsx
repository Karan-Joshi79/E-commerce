// src/components/Contact.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate=useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setForm({ name: '', email: '', message: '' });
    navigate('/')
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 px-4 bg-gradient-to-b from-pink-50 via-white to-pink-100 text-gray-800">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
