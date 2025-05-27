import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { addBooks } from '../../Reducx/BooksSlice';
import axios from 'axios';

function Addbooks() {
    let dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [addbook, setbookData] = useState({
        title: "",
        bookid: "",
        description: "",
        category: "",
        price: "",
        img_link: "",
        language: "",
        review: [],

    })




    // handle change
    const handlechange = (e) => {
        const { name, value } = e.target;
        setbookData({
            ...addbook,
            [e.target.name]: e.target.value
        })

    }

    // validation
    const validate = () => {
        const errors = {};
        if (!addbook.title.trim()) {
            errors.title = "Title is required";
        }
        else if (!addbook.title || addbook.title.length < 3) {
            errors.title = "Title must be at least 3 characters long";
        }
        if (!addbook.bookid.trim()) {
            errors.bookid = "Book ID is required";
        }
        else if (!addbook.bookid || addbook.bookid.length < 2) {
            errors.bookid = "Book ID must be at least 2 characters long";
        }
        if (!addbook.description.trim()) {
            errors.description = "Description is required";
        }
        else if (!isNaN(addbook.description)) {
            errors.description = "Description must be a string";
        }
        else if (addbook.description.length < 10) {
            errors.description = "Description must be at least 10 characters long";
        }
        if (!addbook.category.trim()) {
            errors.category = "Category is required";
        }
        else if (addbook.category.length < 3) {
            errors.category = "Category must be at least 3 characters long";
        }
        if (!isNaN(addbook.category)) {
            errors.category = "Category must be a string";
        }
        if (!addbook.price || isNaN(addbook.price)) {
            errors.price = "Price is required and must be a number";
        }
        else if (!addbook.price || addbook.price <= 0) {
            errors.price = "Price must be greater than 0";
        }

        if (!addbook.language.trim()) {
            errors.language = "Language is required";
        }
        else if (addbook.language.length < 3) {
            errors.language = "language must be at least 3 characters long";
        }
        if (!addbook.img_link.trim()) {
            errors.img_link = "Image link is required";
        }

        return errors;

    }

    // handle submit
    const handleSubmits = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            toast.error("Please fill all fields correctly.");
            return;
        }
        // add book to state
        try {
            let res = await axios.post(`http://localhost:3000/books`, addbook);
            let finalres = await res.data;
            console.log("finalres", finalres);
            dispatch(addBooks(finalres));
            setbookData({
                title: "",
                bookid: "",
                description: "",
                category: "",
                price: "",
                img_link: "",
            })
            toast.success("Book added successfully");
        } catch (error) {
            toast.error("Failed to add book. Please try again.");
        }
    }


    return (
        <>
            <ToastContainer />
            <div className="max-w-2xl mx-auto p-6 bg-gray-900 shadow-lg rounded-xl mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Add New Book</h2>
                <form className="space-y-4" onSubmit={handleSubmits} autoComplete="off">
                    <div>
                        <label className="block mb-1 font-semibold text-gray-100">Book ID</label>
                        <input
                            type="text" name='bookid' value={addbook.bookid} onChange={handlechange}
                            className="w-full text-white p-2 border border-gray-100 rounded-md  "
                            placeholder="Enter Book ID"
                        />
                        {errors.bookid && <p className="text-red-500 text-sm">{errors.bookid}</p>}


                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-100">Title</label>
                        <input
                            type="text" name="title" value={addbook.title} onChange={handlechange}
                            className="w-full text-white p-2 border border-gray-100 rounded-md  "
                            placeholder="Enter Book Title"
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-100">Description</label>
                        <textarea
                            className="w-full p-2 border border-gray-100 text-white rounded-md  "
                            rows="3" name="description" value={addbook.description} onChange={handlechange}
                            placeholder="Enter Book Description"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}

                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-100">Category</label>
                        <input
                            type="text" name="category" value={addbook.category} onChange={handlechange}
                            className="w-full p-2 border border-gray-100 text-white rounded-md  "
                            placeholder="Enter Book Category"
                        />
                        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}

                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-100">Price</label>
                        <input
                            type="text" name="price" value={addbook.price} onChange={handlechange}
                            className="w-full p-2 border border-gray-100 text-white rounded-md  "
                            placeholder="Enter Price"
                        />
                        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-100">Language</label>
                        <input
                            type="text" name="language" value={addbook.language} onChange={handlechange}
                            className="w-full p-2 border border-gray-100 text-white rounded-md  "
                            placeholder="Enter Language"
                        />
                        {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}

                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-100">Image Link</label>
                        <input
                            type="text" name="img_link" value={addbook.img_link} onChange={handlechange}
                            className="w-full p-2 border border-gray-100 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Paste Image URL"
                        />
                        {errors.img_link && <p className="text-red-500 text-sm">{errors.img_link}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-600 cursor-pointer text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Add Book
                    </button>
                </form>
            </div>






        </>
    )
}

export default Addbooks