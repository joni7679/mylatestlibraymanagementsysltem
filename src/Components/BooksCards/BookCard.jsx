import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchIngBooks } from "../../Reducx/BooksSlice";

const BookCard = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchIngBooks());
  }, [dispatch]);

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (isLoading) {
    return <h1 className="text-center text-lg">Loading...</h1>;
  }

  // filter books based on search query
  const filteredBooks = books.filter((book) =>
    book?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book?.id.toString().includes(searchQuery)
  );

  return (
    <div className="w-full px-6 grid md:grid-cols-3  sm:grid-cols-2 gap-6">
      {filteredBooks.map((book) => (
        <div
          key={book.id}
          className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
        >
          <div className="w-full h-[200px]">
            <img
              className="w-full h-full object-contain"
              src={book.img_link}
              alt={book.title}
            />
          </div>

          <div className="p-5 space-y-2">
            <h2 className="text-xl font-bold text-gray-800"> {book.title}</h2>
            <p className="text-sm text-gray-500">by {book.author}</p>

            <div className="flex items-center gap-1 text-yellow-500 text-sm">

            </div>

            <p className="text-gray-700 text-sm line-clamp-3">{book.description}</p>

            <Link
              to={`/bookdetlist/${book.id}`}
              className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors"
            >
              Read More
            </Link>
          </div>

        </div>
      ))}
    </div>
  );
};

export default BookCard;
