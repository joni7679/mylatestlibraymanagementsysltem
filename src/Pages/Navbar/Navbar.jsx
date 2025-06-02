import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUsers, loginFetchData, logOut } from '../../Reducx/UserSlice';
import { toast, ToastContainer } from 'react-toastify';
import { BiLibrary } from 'react-icons/bi';
import { LuLogOut } from 'react-icons/lu';
import { MdDashboard } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { logOutAdmin } from '../../Reducx/AdminSlice';
import { CiMenuFries } from 'react-icons/ci';
import { navlink } from '../../constants/navlinks';
import { RxCross1 } from 'react-icons/rx';


function Navbar() {
    let dispatch = useDispatch();
    let { error, isLoading, currentUser, isLogined } = useSelector((state) => state.user)
    let { admin, currentAdmin } = useSelector((state) => state.admin);

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])


    // handle logOut
    let handleLogOut = () => {
        let confirm = window.confirm("Are You sure Went To Log Out");
        if (confirm) {
            toast.success("Log Out successfully");
            setTimeout(() => {
                dispatch(logOut())
            }, 100)
        }
    }
    let handleLogOutAdmin = () => {
        let confirm = window.confirm("Are You sure Went To Log Out.......");
        if (confirm) {
            toast.success("Log Out successfully");
            setTimeout(() => {
                dispatch(logOutAdmin())
            }, 100)
        }
    }

    return (

        <>
            <ToastContainer />
            <div className="w-full relative  bg-gray-800 flex items-center py-5 px-6">
                <nav className={`navbar responsivenavbar container mx-auto  flex items-center justify-between flex-wrap  md:px-12  ${isOpen ? "activenav" : ""}`}>
                    <Link to={`/`} className="logo text-white flex items-center gap-1"> <BiLibrary className='text-xl ' />Lms</Link>
                    <div className="center-nav flex items-center justify-between w-[50%]">
                        {
                            navlink.map((val, index) => {
                                return (
                                    <Link key={index} to={val.path} className='nav-item mr-[20px] text-white ' >{val.name}</Link>
                                )
                            })
                        }
                    </div>

                    {
                        currentAdmin ? (

                            <div className="relative group w-16 h-16 admin">
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
                        ) : isLogined ? (

                            <div className="relative group w-16 h-16 user">
                                <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300 shadow-md cursor-pointer">
                                    <img
                                        src="https://i.pravatar.cc/150?img=3"
                                        alt="User"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute top-20 right-0 w-40 bg-white rounded-xl shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                    <Link to={`/user/profile`} className="text-gray-700 text-sm font-medium p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
                                        <CgProfile className="text-lg mr-2 inline-block" />
                                        My Profile
                                    </Link>
                                    <Link to={`/user/dasboard`} className="text-gray-700 text-sm font-medium p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
                                        <MdDashboard className='inline-block mr-2' />
                                        Dashboard
                                    </Link>
                                    <h1
                                        onClick={handleLogOut}
                                        className="text-red-600 text-sm font-medium p-2 rounded-lg hover:bg-red-100 cursor-pointer transition"
                                    >
                                        <LuLogOut className='inline-block mr-2' />
                                        Log Out
                                    </h1>
                                </div>
                            </div>
                        ) : (

                            <div className="nav-right">
                                <Link to={`/login`} className='mr-5 px-5 py-2 bg-orange-500 text-white rounded-3xl'>Login</Link>
                                <Link to={`/signup`} className='px-5 py-2 bg-orange-500 text-white rounded-3xl'>Register</Link>
                            </div>
                        )
                    }

                </nav >
                <span className='toggle hidden' onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? (
                            <RxCross1 className='text-2xl text-white inline-block cursor-pointer' />
                        ) : (
                            <CiMenuFries className='text-2xl text-white inline-block cursor-pointer' />
                        )
                    }

                </span>
            </div >

        </>
    )
}

export default Navbar