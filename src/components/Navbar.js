// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Access isLoggedIn from state

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-extrabold transform transition-transform duration-300 hover:scale-105">
          <Link to="/">My Store</Link>
        </div>
        <div className="space-x-6">
          {['', 'Products', 'Cart', 'Checkout', 'Admin'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative text-white text-lg group hover:text-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              {item}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          {!isLoggedIn && (
            <>
              <Link to="/login" className="relative text-white text-lg group hover:text-gray-200 transition-all duration-300 transform hover:scale-105">
                Login
              </Link>
              <Link to="/register" className="relative text-white text-lg group hover:text-gray-200 transition-all duration-300 transform hover:scale-105">
                Register
              </Link>
            </>
          )}
          {isLoggedIn && (
            <button onClick={handleLogout} className="text-white text-lg">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
