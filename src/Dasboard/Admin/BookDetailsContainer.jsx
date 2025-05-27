import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdOutlineDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUserData } from '../../Reducx/UserSlice'

function BookDetailsContainer() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { books, isLoading, error } = useSelector((state) => state.books)

  // find book by id 
  const book = books.find((book) => book.id.toString() === id)

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>
  }
  if (isLoading) {
    return <h1 className="text-center text-lg">Loading...</h1>
  }

  if (!book) {
    return <h1 className="text-center text-lg">Book not found</h1>
  }
  const handleDeleteUser = (userId) => {
    console.log("delete user", userId);
    // let confirm = window.confirm("Are you sure you want to delete this user?");
    // if (confirm) {
    //   dispatch(deleteUserData(userId))
    // }
  }
  return (
    <>

      <div className="container md:mx-auto flex justify-center items-center p-6 sm:flex-col">
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-6xl flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E1E1E]">{book.title}</h2>
            <span className="inline-block bg-[#f88716] text-gray-700 px-4 py-1 rounded-full text-sm font-medium">
              {book.category}
            </span>
            <p className="text-gray-600 leading-relaxed text-sm">{book.description}</p>
            <button className="px-6 py-2 border rounded-full text-gray-800 font-medium">
              {book.language}
            </button>
            <p className="text-2xl font-bold text-[#1E1E1E]">₹{book.price}</p>
          </div>

          <div className="flex justify-center items-center flex-1">
            <img
              src={book.img_link}
              alt={book.title}
              className="rounded-lg w-[280px] object-cover"
            />
          </div>
          <div className="flex gap-2 items-start">
            <FaEdit
              className="text-2xl cursor-pointer hover:text-blue-500 duration-100"

            />
            <MdOutlineDelete onClick={() => handleDeleteUser(book.id)}
              className="text-2xl cursor-pointer hover:text-red-600 duration-100"

            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetailsContainer
