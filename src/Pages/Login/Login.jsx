import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { useFormik } from 'formik'
import { Loginschema } from '../../schemas/Index'
import { useDispatch, useSelector } from 'react-redux'
import { loginFetchData } from '../../Reducx/UserSlice'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { featchAdminLoginData } from '../../Reducx/AdminSlice'

let initialValues = {
  email: '',
  password: '',
};

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { users, error, isLoading } = useSelector((state) => state.user)
  const { values, errors, handleBlur, handleSubmit, handleChange, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: Loginschema,
    onSubmit: async (values, action) => {
      try {
        let res = await dispatch(loginFetchData(values));


        if (loginFetchData.rejected.match(res)) {
          res = await dispatch(featchAdminLoginData(values));
        }
        if (loginFetchData.fulfilled.match(res) || featchAdminLoginData.fulfilled.match(res)) {
          toast.success("Login successful!");
          setTimeout(() => navigate("/"), 1000);
        }
        else {
          toast.error(res.payload || "Login failed. Please try again.");
        }
      }
      catch (err) {
        toast.error("Something went wrong. Please try again later.");
      }


    }
  });

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-semibold text-center text-gray-800">Welcome Back</h1>
          <p className="text-center text-gray-500 mb-6">Login to your account and continue your journey.</p>

          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email or Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && touched.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
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
                <p className="text-sm text-red-600 mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Login
            </button>
          </form>
          {error && <p className='text-red-500'>{error}</p>}
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup Now
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
