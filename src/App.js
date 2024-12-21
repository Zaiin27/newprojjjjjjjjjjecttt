import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar'; // Import the Navbar component
import './index.css';
import OrderConfirmation from './pages/OrderConfirmation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
      <ToastContainer />
        <Navbar /> {/* Add the Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order-confirmation" element={<OrderConfirmation/>} />
          <Route path="/admin" element={<AdminPanel />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
