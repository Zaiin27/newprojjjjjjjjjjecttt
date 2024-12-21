// src/pages/Checkout.js
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    postalCode: Yup.string().required('Required'),
    cardNumber: Yup.string().required('Required'),
    expirationDate: Yup.string().required('Required'),
    cvv: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    // Handle order submission and navigate with state
    console.log('Order submitted', values);
    navigate('/order-confirmation', { state: { orderDetails: values } });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Checkout</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-4">
            <Field name="name" placeholder="Full Name" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <Field name="address" placeholder="Address" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <Field name="city" placeholder="City" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <Field name="postalCode" placeholder="Postal Code" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <Field name="cardNumber" placeholder="Card Number" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <Field name="expirationDate" placeholder="Expiration Date" className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <Field name="cvv" placeholder="CVV" className="w-full border p-2 rounded" />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Complete Purchase
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Checkout;
