// src/pages/Login.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/authSlice'; // Ensure logout is not imported here
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize the navigate function
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Access isLoggedIn from state

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Implement your login logic
    const userData = { username: 'testuser' }; // Replace with actual login data
    dispatch(login(userData)); // Dispatch login action

    // Redirect to home after successful login
    navigate('/');
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <h2 className="text-2xl mb-4">Login</h2>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" className="mb-2 w-full border p-2 rounded" required />
          <input type="password" placeholder="Password" className="mb-2 w-full border p-2 rounded" required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      ) : (
        <div>
          <p className="mb-2">Welcome back!</p>
        </div>
      )}
    </div>
  );
};

export default Login;
