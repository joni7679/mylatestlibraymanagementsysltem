import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchIngBooks } from '../../Reducx/BooksSlice';
import { toast, ToastContainer } from 'react-toastify';
import { fetchAdminData } from '../../Reducx/AdminSlice';
import usePasswordConfirmation from '../../Hooks/usePasswordConfirmation';


function EditBook() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const { bookid } = useParams();
    const [bookdata, SetBookData] = useState({})

    const { books, isLoading, error } = useSelector((state) => state.books);
    console.log("books data", books);
    console.log("bookid", bookid);
    console.log(books);
    // admin data
    let { admin, isLogined, currentAdmin } = useSelector((state) => state.admin);
    console.log("admin data", isLogined, currentAdmin);
    let { requestPasswordCheck, PasswordModalComponent } = usePasswordConfirmation()
    // find book by id 
    const book = books.find((book) => book.id.toString() === bookid)

    console.log("edit book data", book)

    // update book data logic here.....
    const updateForm = (e) => {
        e.preventDefault();

        // const inputPassword = window.prompt("Plz Enter your password to confirm");
        // if (!inputPassword) {
        //     toast.error("Password is required");
        //     return;
        // }

        // if (inputPassword !== currentAdmin.password) {
        //     toast.error("Wrong password! Update cancelled.");
        //     return;
        // }
        requestPasswordCheck(async () => {
            if (!bookdata.title || !bookdata.description || !bookdata.category || !bookdata.price || !bookdata.language || !bookdata.img_link) {
                toast.error("Please fill in all fields");
                return;
            }
            
            const updatedBook = {
                id: bookid,
                title: bookdata.title,
                description: bookdata.description,
                category: bookdata.category,
                price: bookdata.price,
                language: bookdata.language,
                img_link: bookdata.img_link
            }

            try {
                let response = await axios.patch(`http://localhost:3000/books/${bookid}`, updatedBook);
                console.log(response.data);
                toast.success("Book updated successfully");
                setTimeout(() => {
                    navigate('/admin/bookstable');
                }, 10);

                dispatch(fetchIngBooks(response.data));

            } catch (error) {
                console.error("Error updating book:", error);
                toast.error("Failed to update book.");
            }
        })


    }



    useEffect(() => {
        if (book) {
            SetBookData(book);
        }
    }, [book]);


    useEffect(() => {
        dispatch(fetchIngBooks())
    }, [dispatch])
    useEffect(() => { dispatch(fetchAdminData()) }, [])
    if (isLoading) {
        return <h1>Loading........</h1>
    }
    if (error) {
        return <h1 className='text-red-500 text-center'>Error: {error}</h1>
    }
    return (
        <>

            <ToastContainer position="top-center" autoClose={2000} />
            <PasswordModalComponent />
            <div className="w-[80%] mx-auto p-6 bg-gray-900 shadow-lg rounded-xl mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Edit Book</h2>
                <form className="space-y-4" onSubmit={updateForm} autoComplete="off">
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div>
                            <label className="block mb-1 font-semibold text-gray-100">Book ID</label>
                            <input
                                type="text" name='bookid'
                                className="w-full text-white p-2 border border-gray-100 rounded-md  "
                                placeholder="Enter Book ID"
                                value={bookdata.id || ''}

                                readOnly

                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-gray-100">Title</label>
                            <input
                                type="text" name="title"
                                className="w-full text-white p-2 border border-gray-100 rounded-md  "
                                placeholder="Enter Book Title"
                                value={bookdata.title || ''}
                                onChange={(e) => SetBookData({
                                    ...bookdata,
                                    title: e.target.value
                                })}

                            />

                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-gray-100">Description</label>
                            <textarea
                                className="w-full p-2 border border-gray-100 text-white rounded-md  "
                                rows="3" name="description"
                                placeholder="Enter Book Description"
                                value={bookdata.description || ''}
                                onChange={(e) => SetBookData({
                                    ...bookdata,
                                    description: e.target.value
                                })}
                            ></textarea>


                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-gray-100">Category</label>
                            <input
                                type="text" name="category"
                                className="w-full p-2 border border-gray-100 text-white rounded-md  "
                                placeholder="Enter Book Category"
                                value={bookdata.category || ''}
                                onChange={(e) => SetBookData({
                                    ...bookdata,
                                    category: e.target.value
                                })}
                            />
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-5 mt-5'>
                        <div>
                            <label className="block mb-1 font-semibold text-gray-100">Price</label>
                            <input
                                type="text" name="price"
                                className="w-full p-2 border border-gray-100 text-white rounded-md  "
                                placeholder="Enter Price"
                                value={bookdata.price || ''}
                                onChange={(e) => SetBookData({
                                    ...bookdata,
                                    price: e.target.value
                                })}

                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-gray-100">Language</label>
                            <input
                                type="text" name="language"
                                className="w-full p-2 border border-gray-100 text-white rounded-md  "
                                placeholder="Enter Language"
                                value={bookdata.language || ''}
                                onChange={(e) => SetBookData({
                                    ...bookdata,
                                    language: e.target.value
                                })}


                            />

                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-gray-100">Image Link</label>
                            <input
                                type="text" name="img_link"
                                className="w-full p-2 border border-gray-100 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Paste Image URL"
                                value={bookdata.img_link || ''}
                                onChange={(e) => SetBookData({
                                    ...bookdata,
                                    img_link: e.target.value
                                })}

                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-600 cursor-pointer text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Update Book
                    </button>
                </form>
            </div>


        </>
    )
}

export default EditBook