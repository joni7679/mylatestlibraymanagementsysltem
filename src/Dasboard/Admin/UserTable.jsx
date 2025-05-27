import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUserData, fetchUsers, removeUser } from "../../Reducx/UserSlice";
import { BiSearch } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { toast } from "react-toastify";

const UserTable = () => {
  const [Searchquery, setSearchQuery] = useState("");
  let disptch = useDispatch();
  let navigate = useNavigate();
  let { users, error, isLoading, currentUser, isLogined } = useSelector((state) => state.user);
  console.log("your user table is", users);

  // handle view user
  const handleViewUser = (userId) => {
    navigate(`/admin/userDetails/${userId}?name${encodeURIComponent(userId.name)}`);
    console.log("view user", userId.name);
  }

  // handle delete user
  const handleDeleteUser = (userId) => {
    console.log("delete user", userId);
    let confirm = window.confirm("Are you sure you want to delete this user?");
    if (confirm) {
      toast.success("User deleted successfully");
      setTimeout(() => {
        navigate('/admin');
      }, 100);
      disptch(deleteUserData(userId))
    }
  }
  // handle edit user
  const handleEditUser = (userId) => {
    console.log("edit user", userId);
    let confim = window.confirm("Are you sure you want to edit this user?");
    if (confim) {
      navigate(`/admin/userActions/${userId}`);
    }
  }

  // search users based on search query
  const filteredUsers = users.filter(user =>
    user?.name.toLowerCase().includes(Searchquery.toLowerCase()) ||
    user?.email.toLowerCase().includes(Searchquery.toLowerCase()) ||
    user?.id.toString().includes(Searchquery)
  );


  useEffect(() => {
    disptch(fetchUsers())
  }, [])

  return (

    <div className="overflow-x-auto p-4 h-[80%] mt-6">

      <Link to={`/admin/addstudents`} className="py-[15px] px-[25px] cursor-pointer bg-blue-500 text-white capitalize rounded-2xl">Add New user & admin </Link>


      <div className="mt-10 flex items-center bg-white shadow-md rounded-full w-full max-w-2xl overflow-hidden">
        <input
          type="text"
          placeholder="Search Stuent Here...." value={Searchquery} onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow px-6 py-4 outline-none text-gray-700 rounded-l-full"
        />
        <button className="bg-[#2571f4] px-6 py-4 rounded-r-full text-gray-100">
          <BiSearch className='text-xl cursor-pointer' />
        </button>
      </div>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-5">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left">Student Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Books</th>
            <th className="py-3 px-6 text-left">Password</th>
            <th className="py-3 px-6 text-left">Is Admin</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-6">{user.name}</td>
              <td className="py-3 px-6">{user.email}</td>
              <td className="py-3 px-6">{user.books || "N/A"}</td>
              <td className="py-3 px-6">{user.password || "N/A"}</td>
              <td className="py-3 px-6">{user.isAdmin ? "Yes" : "No"}</td>
              <td className="py-3 px-6 flex gap-3">
                <button onClick={() => handleEditUser(user.id)} className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  <FaEdit />
                </button>
                <button onClick={() => handleViewUser(user.id)} className="text-blue-500 hover:text-blue-700 cursor-pointer">
                  <GrView />
                </button>
                <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-700 cursor-pointer">
                  <FaTrash />
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
