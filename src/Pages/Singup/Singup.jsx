import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignupSchema } from '../../schemas/Index';
import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { addusers } from '../../Reducx/UserSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: '',
  email: '',
  number: '',
  password: '',
  confirmPassword: '',
};

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const authData = {
        id: nanoid(),
        name: values.name,
        email: values.email,
        number: values.number,
        password: values.password,
        confirmPassword: values.confirmPassword,
        registrationDate: new Date().toISOString(), 
        role: "user"
      };

      try {
        const res = await axios.post('http://localhost:3000/users', authData);
        dispatch(addusers(authData));
        toast.success("Signup successful!");
        resetForm();
        setTimeout(() => navigate('/login'), 1000);
      } catch (error) {
        toast.error("Something went wrong during signup.");
        console.error(error);
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="flex items-center justify-center p-5 bg-gray-100 ">
        <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            Create an Account
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Join our community and start your reading journey today.
          </p>

          <form onSubmit={handleSubmit} autoComplete="off">

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Username</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Username..."
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>


            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email..."
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>


            <div className="mb-4">
              <label htmlFor="number" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Phone Number..."
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.number && touched.number && (
                <p className="text-red-500 text-sm mt-1">{errors.number}</p>
              )}
            </div>


            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password..."
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {showPassword ? (
                <FaRegEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xl absolute right-2 top-11 cursor-pointer"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xl absolute right-2 top-11 cursor-pointer"
                />
              )}
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>


            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password..."
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">Login Now</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
