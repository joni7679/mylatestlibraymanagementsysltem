import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchIngBooks } from '../../Reducx/BooksSlice';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import usePasswordConfirmation from '../../Hooks/usePasswordConfirmation';

function BooksTable() {
    const { books, isLoading, error } = useSelector((state) => state.books);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let { requestPasswordCheck, PasswordModalComponent } = usePasswordConfirmation()

    // handle books details
    let handleBookDetails = (book) => {
        navigate(`/admin/bookDetails/${book}?title=${encodeURIComponent(book.title)}`)
    }

    // visiable password logic



    // handle delted
    let handleDeleteBooks = (bookid) => {
        alert(bookid)
    }
    // edit books details
    let handleEditBooksDetails = (bookid) => {
        console.log("edit book", bookid);
        let confirm = window.confirm("Are you sure you want to edit this book Data?");
        if (confirm) {
            navigate(`/admin/editbooks/${bookid}`);
        }
        else {
            console.log("Edit book cancelled");
        }
    }


    useEffect(() => {
        dispatch(fetchIngBooks())
    }, [])
    return (
        <>
            <div className='mt-8 '>
                <Link to={`/admin/addbooks`} className="py-[15px] px-[25px] rounded-2xl mt-6 bg-blue-900 text-white">Add Books</Link>
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-5 ">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-6 text-left">Books Id</th>
                            <th className="py-3 px-6 text-left">Book Name</th>
                            <th className="py-3 px-6 text-left">Book Category</th>
                            <th className="py-3 px-6 text-left">price</th>
                            <th className="py-3 px-6 text-left">language</th>
                            <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {books.map((book) => (
                            <tr key={book.id} className="border-b hover:bg-gray-100">
                                <td className="py-3 px-6">{book.id}</td>
                                <td className="py-3 px-6">{book.title.slice(0, 15)}</td>
                                <td className="py-3 px-6">{book.category || "N/A"}</td>
                                <td className="py-3 px-6"> ₹{book.price || "N/A"}</td>
                                <td className="py-3 px-6 capitalize">{book.language || "N/A"}</td>
                                <td className="py-3 px-6 flex gap-3">
                                    <button onClick={() => handleEditBooksDetails(book.id)} className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => handleBookDetails(book.id)} className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                        <GrView />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700 cursor-pointer">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default BooksTable