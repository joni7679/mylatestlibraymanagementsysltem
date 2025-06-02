import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchIngBooks } from "../../Reducx/BooksSlice";
import { fetchUserData, fetchUsers } from "../../Reducx/UserSlice";

function AdminHome() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let { users, error, isLoading, currentUser, isLogined } = useSelector((state) => state.user);
    let { books } = useSelector((state) => state.books)
    console.log("users", users);

    // total users
    let totalUsers = users?.length || 0;
    // total books
    let totalBooks = books?.length || 0;




    useEffect(() => { dispatch(fetchIngBooks()) }, [])
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])



    return (

        <div className="p-4 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded shadow">
                    <h2 className="text-xl font-bold text-blue-700">Total Users</h2>
                    <p className="text-2xl">{totalUsers}</p>
                </div>
                <div className="bg-green-300 p-4 rounded shadow">
                    <h2 className="text-xl font-bold text-green-700">Total Books</h2>
                    <p className="text-2xl">{totalBooks}</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded shadow h-[10rem] overflow-auto">
                    copies_available copy
                    {books.map((book) => (
                        <div key={book.id} className="bg-gray-100 rounded-lg p-4 mb-3 shadow">
                            <h2 className="text-sm font-semibold text-gray-800">{book.title}</h2>
                            <p className="text-gray-600">Copies Available: {book.copies_available || 0}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default AdminHome
