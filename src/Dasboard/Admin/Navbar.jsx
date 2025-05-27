

import { FaMoon, FaBell } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutAdmin } from '../../Reducx/AdminSlice';
import { toast, ToastContainer } from "react-toastify";
const Navbar = () => {
    let { admin, currentAdmin } = useSelector((state) => state.admin)

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
            <nav className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 shadow-md ">

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search.."
                        className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>
                <div>
                    <h1 className="text-xl capitalize"> Wellcome to {currentAdmin.name} you are admin right now</h1>
                </div>

                <div className="flex items-center gap-4">
                    <button className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">Live</button>
                    <FaMoon className="text-gray-600 text-lg cursor-pointer" />
                    <FaBell className="text-gray-600 text-lg cursor-pointer" />

                </div>

                <div className="relative group w-16 h-16">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300 shadow-md cursor-pointer">
                        <img
                            src="https://i.pravatar.cc/150?img=1"
                            alt="Admin"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-20 right-0 w-40 bg-white rounded-xl shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                        <Link to={`/admin`} className="text-gray-700 text-sm font-medium p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
                            <MdDashboard className='inline-block mr-2' />
                            Admin Panel
                        </Link>
                        <h1
                            onClick={handleLogOutAdmin}
                            className="text-red-600 text-sm font-medium p-2 rounded-lg hover:bg-red-100 cursor-pointer transition"
                        >
                            <LuLogOut className='inline-block mr-2' />
                            Log Out
                        </h1>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
