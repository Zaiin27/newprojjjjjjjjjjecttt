import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <ToastContainer position="top-right" autoClose={2000} />
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition duration-300 transform"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition duration-300"
            />
            <h3 className="text-lg font-semibold text-gray-700 truncate">{product.title}</h3>
            <p className="text-xl font-bold text-gray-800 mb-4">${product.price}</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Add to Cart
              </button>
              <Link to={`/product/${product.id}`}>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
