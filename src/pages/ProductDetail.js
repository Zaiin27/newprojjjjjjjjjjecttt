import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../redux/slices/productsSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selectedProduct);

    useEffect(() => {
        dispatch(fetchProductDetails(id));
    }, [dispatch, id]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast.success(`${product.title} added to cart!`);
    };

    if (!product) return <p>Loading product details...</p>;

    return (
        <div className="container mx-auto p-8 bg-gradient-to-r  to-blue-500 min-h-screen">
            <ToastContainer position="top-right" autoClose={2000} />
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-2xl p-6 rounded-2xl transform transition-transform duration-300 hover:scale-105 animate-fadeIn">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full md:w-1/2 h-80 object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:translate-y-1"
                />
                <div className="md:ml-6 text-gray-800 w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price}</p>
                    <button
                        onClick={handleAddToCart}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
