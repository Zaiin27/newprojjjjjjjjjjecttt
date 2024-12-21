import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const products = [
        {
            id: 1,
            title: 'Stylish Chair',
            price: 99.99,
            image: 'https://plus.unsplash.com/premium_photo-1664872566732-d5a16add5989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            title: 'Elegant Lamp',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id:3,
            title: 'Stylish Chair',
            price: 99.99,
            image: 'https://plus.unsplash.com/premium_photo-1664872566732-d5a16add5989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];

    return (
        <div>
            {/* Full Height Banner Section */}
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyNXx8bW9kZXJuJTIwY29tcGFueSUyMHJvb3R8ZW58MHx8fHwxNjM0NzU0MzI0&ixlib=rb-1.2.1&q=80&w=1080')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto flex items-center justify-center h-full text-white text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Our E-commerce Platform</h1>
                    <p className="text-xl md:text-2xl mb-8">Discover our wide range of products!</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="max-w-xs mx-4 mb-8 bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 mb-4">"Fantastic service and great products! Highly recommend!"</p>
                            <h3 className="font-bold">John Doe</h3>
                        </div>
                        <div className="max-w-xs mx-4 mb-8 bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 mb-4">"I love shopping here! The quality is always top-notch."</p>
                            <h3 className="font-bold">Jane Smith</h3>
                        </div>
                        <div className="max-w-xs mx-4 mb-8 bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 mb-4">"Fast shipping and excellent customer support!"</p>
                            <h3 className="font-bold">Bob Johnson</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Logos Section */}
            <section className="py-20">
    <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted by Leading Brands</h2>
        <div className="flex justify-center flex-wrap">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" className="mx-4 my-2 h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" className="mx-4 my-2 h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" className="mx-4 my-2 h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix Logo" className="mx-4 my-2 h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" className="mx-4 my-2 h-12" />
        </div>
    </div>
</section>

            {/* Featured Products Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Link to={`/products`} key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
                                <h3 className="font-bold mb-2">{product.title}</h3>
                                <p className="text-gray-700">${product.price.toFixed(2)}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
