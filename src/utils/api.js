import axios from 'axios';

const API = axios.create({ baseURL: 'https://fakestoreapi.com/' });

export const fetchProducts = () => API.get('/products');
export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const registerUser = (userData) => API.post('/users', userData);
// Other endpoints for cart, order history, etc.
