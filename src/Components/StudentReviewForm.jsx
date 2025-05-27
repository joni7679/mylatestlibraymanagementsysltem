import React, { useEffect, useState } from "react";
import Navbar from "../Pages/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Reducx/UserSlice";
import { toast, ToastContainer } from "react-toastify";
import { addReview } from "../Reducx/BooksSlice";

const StudentReviewForm = () => {
  const dispatch = useDispatch();
  const { users, error, isLoading, currentUser, isLogined } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    message: ""
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validation Logic
  const validate = () => {
    const errors = {};

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    console.log("Submitted Review:", {
      name: currentUser.name,
      email: currentUser.email,
      message: formData.message
    });
    dispatch(addReview(setFormData));
    toast.success("Review submitted successfully!");

    setFormData({ course: "", message: "" });
    setFormErrors({});
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
            Student Review Form
          </h2>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={currentUser.name}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={currentUser.email}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-gray-600">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
            )}
          </div>


          <button
            type="submit"
            className="w-full cursor-pointer bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-all duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentReviewForm;
