import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      // Show success message
      toast.success('Registration successful! Redirecting to login...');
      formik.resetForm(); // Optionally reset the form
      
      // Redirect to login after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    },
  });

  return (
    <div className="max-w-sm mx-auto p-4">
      <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...formik.getFieldProps('username')}
          className="mb-2 w-full border p-2 rounded"
        />
        {formik.touched.username && formik.errors.username && <div className="text-red-500">{formik.errors.username}</div>}
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...formik.getFieldProps('email')}
          className="mb-2 w-full border p-2 rounded"
        />
        {formik.touched.email && formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          {...formik.getFieldProps('password')}
          className="mb-2 w-full border p-2 rounded"
        />
        {formik.touched.password && formik.errors.password && <div className="text-red-500">{formik.errors.password}</div>}

        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
