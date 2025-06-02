

import { FaMoon, FaBell } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutAdmin } from '../../Reducx/AdminSlice';
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
const Navbar = () => {
    let { admin, currentAdmin } = useSelector((state) => state.admin)
    const [isOpen, setIsOpen] = useState(false)
    let dispatch = useDispatch();
    let navigate = useNavigate();

    // handle logout logic here
    let handleLogOutAdmin = () => {
        let confirm = window.confirm("Are you sure you want to log out?");
        if (confirm) {
            dispatch(logOutAdmin());
            toast.success("Log Out Successfully");
            console.log("Admin logged out");
            navigate(`/`)
        }
        else {
            toast.error("Log Out Cancelled");
        }

    }
    return (
        <>
            <ToastContainer />
            <div>

            </div>
            <nav className="flex flex-wrap md:flex-nowrap justify-between items-center px-4 py-3 bg-gradient-to-r from-purple-100 to-pink-100 shadow-md gap-4">

                <div className="w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search.."
                        className="w-full md:w-auto px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>


                <div className="w-full md:flex-1 text-center md:text-left">
                    <h1 className="text-lg md:text-xl capitalize font-medium">
                        Welcome to {currentAdmin.name}, you are admin right now
                    </h1>
                </div>


                <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto justify-center md:justify-end">
                    <button className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">Live</button>
                    <FaMoon className="text-gray-600 text-lg cursor-pointer" />
                    <FaBell className="text-gray-600 text-lg cursor-pointer" />
                </div>


                <div className="relative group w-12 h-12 md:w-16 md:h-16 mx-auto md:mx-0">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300 shadow-md cursor-pointer">
                        <img
                            src="https://i.pravatar.cc/150?img=1"
                            alt="Admin"
                            className="w-full h-full object-cover"
                        />
                    </div>


                    <div className="absolute top-16 right-0 w-40 bg-white rounded-xl shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                        <Link
                            to={`/admin`}
                            className="text-gray-700 text-sm font-medium p-2 rounded-lg hover:bg-gray-100 block transition"
                        >
                            <MdDashboard className="inline-block mr-2" />
                            Admin Panel
                        </Link>
                        <h1
                            onClick={handleLogOutAdmin}
                            className="text-red-600 text-sm font-medium p-2 rounded-lg hover:bg-red-100 cursor-pointer block transition"
                        >
                            <LuLogOut className="inline-block mr-2" />
                            Log Out
                        </h1>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
