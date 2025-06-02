import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaEyeSlash, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUserData, fetchUsers, removeUser } from "../../Reducx/UserSlice";
import { BiSearch } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";
import { fetchAdminData } from "../../Reducx/AdminSlice";
import { IoIosEyeOff } from "react-icons/io";
import usePasswordConfirmation from "../../Hooks/usePasswordConfirmation";

const UserTable = () => {
  const [Searchquery, setSearchQuery] = useState("");
  let disptch = useDispatch();
  let navigate = useNavigate();
  const [showPassword, setPassword] = useState({});
  let { users, error, isLoading, currentUser, isLogined } = useSelector((state) => state.user);
  let { admin, currentAdmin } = useSelector((state) => state.admin);
  console.log("admin data", isLogined, currentAdmin);
  console.log("your user table is", users);
  let { requestPasswordCheck, PasswordModalComponent } = usePasswordConfirmation()
  // password show and hide logic here
  const handleShowPassword = (id) => {
    setPassword((prev) => {
      return { ...prev, [id]: !prev[id] };
    })
  }

  // handle view user
  const handleViewUser = (userId) => {
    navigate(`/admin/userDetails/${userId}?name${encodeURIComponent(userId.name)}`);
    console.log("view user", userId.name);
  }

  // handle delete user
  const handleDeleteUser = (userId) => {
    console.log("delete user", userId);

    // let confirm = window.confirm("Are you sure you want to delete this user?");
    // let inputPassword = window.prompt("Plz Enter Your Password to confirm");
    // if (!inputPassword) {
    //   toast.error("Password is required");
    //   return;
    // }

    // if (inputPassword !== currentAdmin.password) {
    //   toast.error("Wrong password! Update cancelled.");
    //   return;
    // }
    requestPasswordCheck(() => {
      toast.success("User deleted successfully");
      setTimeout(() => {
        navigate('/admin');
      }, 100);
      disptch(deleteUserData(userId))
    })

  }
  // handle edit user
  const handleEditUser = (userId) => {
    let confim = window.confirm("Are You Sure Went To Edit This Data")
    console.log("edit user", userId);
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
    disptch(fetchAdminData())
  }, [])
  if (!filteredUsers) {
    return <h1>this data not avaible</h1>

  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <PasswordModalComponent />
      <div className="overflow-x-auto p-4 h-[80%] mt-6 right-part">

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

        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-5 table-auto">
          <thead className="bg-gray-200">
            <tr>

              <th className="py-3 px-6 text-left">Student Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Password</th>

              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              fetchUsers.length > 0 ? (
                filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-100">
                      <td className="py-3 px-6">{user.name}</td>
                      <td className="py-3 px-6">{user.email}</td>
                      <td className="py-3 px-6 w-[10rem]  ">
                        <p className="flex items-center gap-2 w-full">
                          {showPassword[user.id] ? user.password : "***"}
                          <span className="cursor-pinter mr-2 flex items-center" onClick={() => handleShowPassword(user.id)}>{
                            showPassword[user.id] ? (
                              <FaEye className="inline-block cursor-pointer" />
                            ) :
                              (
                                <IoIosEyeOff className="inline-block cursor-pointer" />
                              )
                          }</span>
                        </p>
                      </td>
                      <td className="py-3 px-6 flex gap-3">
                        <button
                          onClick={() => handleEditUser(user.id)}
                          className="text-blue-500 hover:text-blue-700 cursor-pointer"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleViewUser(user.id)}
                          className="text-blue-500 hover:text-blue-700 cursor-pointer"
                        >
                          <GrView />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-500 hover:text-red-700 cursor-pointer"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">No matching users found.</td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">Data not available.</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
