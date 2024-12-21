import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:translate-y-1 hover:shadow-2xl">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg shadow-md mr-4 transition-transform transform hover:scale-105" />
                <div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-gray-700 text-lg">${item.price} x {item.quantity}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                    }
                    className="w-16 border border-blue-300 p-2 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="ml-4 text-red-600 hover:text-red-800 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {cartItems.length > 0 && (
        <>
          <div className="text-right text-2xl font-bold text-gray-800 mt-6">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button 
            onClick={handleCheckout} 
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
