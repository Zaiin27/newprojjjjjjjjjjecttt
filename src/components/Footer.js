// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 mt-10">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
        <div className="text-center md:text-left mb-4">
          <h2 className="text-2xl font-bold">My Store</h2>
          <p className="mt-2">Your one-stop shop for awesome products!</p>
        </div>
        <div className="flex space-x-6 mb-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
          <Link to="/checkout" className="hover:underline">Checkout</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} My Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
