import React, { useEffect, useState } from 'react';
import { BiPencil } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from './Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import CustomerReviewSlider from './CustomerReviewSlider';
import { useDispatch, useSelector } from 'react-redux';

import Login from '../Pages/Login/Login';
import { toast, ToastContainer } from 'react-toastify';
import { decrementCopy } from '../Reducx/BooksSlice';

function BookDetlist() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let { user, error, isLoading, currentUser, isLogined } = useSelector((state) => state.user)

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error("Error fetching book data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);




    if (loading) {
        return <p className="text-center py-20 text-xl font-semibold">Loading book details...</p>;
    }
    let handelReview = () => {
        if (isLogined) {
            navigate(`/review`)
        }
        else {
            navigate(`/login`)
        }
    }
    // availablenow logic here
    const availablenow = (bookid, copy) => {
        if (isLogined) {
            dispatch(decrementCopy(bookid, copy));
            toast.success(`Dear ${currentUser.name} Book copy available now plz Check your Dasboard`);

        } else {
            toast.warning("Login First.....");
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        }
    }

    return (
        <>
            <ToastContainer />
            <Navbar />
            <div className='bg-[#F7F5F3]'>
                <div className="container mx-auto flex justify-center items-center p-6">
                    <div className="bg-white rounded-lg shadow p-6 w-full max-w-6xl flex flex-col md:flex-row gap-10">
                        <div className="flex-1 space-y-4">
                            <button className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
                                <BiPencil className='text-xl' /> Write a Review
                            </button>

                            <h2 className="text-2xl font-semibold text-[#1E1E1E]">{book.title}</h2>

                            <span className="inline-block bg-[#f88716] text-gray-700 px-4 py-1 rounded-full text-sm font-medium">
                                {book.category}
                            </span>

                            <p className="text-gray-600 leading-relaxed text-sm">{book.description}</p>

                            <div className="flex flex-wrap gap-3">
                                <button className="px-4 py-2 border rounded-full text-gray-700 bg-gray-100 text-sm font-medium">
                                    Language: {book.language}
                                </button>
                                <button className="px-4 py-2 border rounded-full text-gray-700 bg-gray-100 text-sm font-medium">
                                    Author: {book.author}
                                </button>
                                <button className="px-4 py-2 border rounded-full text-gray-700 bg-gray-100 text-sm font-medium">
                                    Publisher: {book.publisher}
                                </button>
                                <button className="px-4 py-2 border rounded-full text-gray-700 bg-gray-100 text-sm font-medium">
                                    Copies: {book.copies_available}
                                </button>
                                <button className="px-4 py-2 border rounded-full text-gray-700 bg-gray-100 text-sm font-medium">
                                    ISBN: {book.isbn}
                                </button>
                                <button className="px-4 py-2 border rounded-full text-gray-700 bg-gray-100 text-sm font-medium">
                                    Pages: {book.pages}
                                </button>
                                <button className="px-4 py-2 border rounded-full text-gray-700 bg-gray-100 text-sm font-medium">
                                    Format: {book.format}
                                </button>
                            </div>

                            <p className="text-2xl font-bold text-[#1E1E1E]">₹ {book.price}</p>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 bg-[#FF6900] text-[#1E1E1E] px-6 py-2 rounded-full font-medium">
                                    <CgShoppingCart className='text-xl' /> BUY IT NOW
                                </button>
                                <button onClick={() => availablenow(book.id, book.copies_available)} className="flex items-center capitalize cursor-pointer gap-2 bg-[#FF6900] text-[#1E1E1E] hover:bg-orange-600 px-6 py-2 rounded-full font-medium">
                                    {book.copies_available > 0 ? "Available Now" : "Out of Stock"}
                                </button>
                            </div>

                        </div>

                        <div className="flex justify-center items-center flex-1">
                            <img
                                src={book.img_link}
                                alt={book.title || 'Book image'}
                                className="rounded-lg w-[280px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white px-4 py-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Customer Reviews</h2>
                <button onClick={handelReview} className="bg-orange-500 cursor-pointer hover:bg-orange-700 text-white font-medium py-2 px-6 rounded mb-4 transition duration-300">
                    Write Review
                </button>
                <p className="text-orange-500 font-mono text-lg">Please login if you want to write a review</p>
            </div>
            <div className='container mx-auto px-4 pb-16'>
                <h2 className='text-xl font-bold mb-6 text-center'>Previous Customer Reviews</h2>
                {book.review?.length > 0 ? (
                    <CustomerReviewSlider book={book} />
                ) : (
                    <p className='text-gray-500 text-2xl text-center'>No reviews  available for this book.</p>
                )}
            </div>

            <Footer />
        </>
    );
}

export default BookDetlist;
