// src/pages/OrderConfirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {}; // Safely access orderDetails

  if (!orderDetails) {
    return <h2>Order details not found!</h2>;
  }

  const { name, address, city, postalCode, cardNumber, expirationDate, cvv } = orderDetails;

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Order Confirmation</h1>
      <p className="text-xl text-center mb-12">Thank you for your order!</p>
      
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <ul className="list-none mb-6">
          <li><strong>Name:</strong> {name}</li>
          <li><strong>Address:</strong> {address}</li>
          <li><strong>City:</strong> {city}</li>
          <li><strong>Postal Code:</strong> {postalCode}</li>
          <li><strong>Card Number:</strong> {cardNumber}</li>
          <li><strong>Expiration Date:</strong> {expirationDate}</li>
          <li><strong>CVV:</strong> {cvv}</li>
        </ul>
      </div>

      <div className="text-center mt-10">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => window.location.href = '/'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
