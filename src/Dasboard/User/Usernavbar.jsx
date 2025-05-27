import { CgProfile } from "react-icons/cg"
import { FaBell, FaMoon } from "react-icons/fa"
import { LuLogOut } from "react-icons/lu"
import { Link, useNavigate } from "react-router-dom"
import { fetchUsers, logOut } from "../../Reducx/UserSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"


function Usernavbar() {
  let dispatch = useDispatch();
  let nvigate = useNavigate();
  let { error, isLoading, currentUser, isLogined } = useSelector((state) => state.user)
  let handleLogOut = () => {
    let confirm = window.confirm("Are You sure Went To Log Out");
    if (confirm) {
      toast.success("Log Out successfully");
      setTimeout(() => {
        dispatch(logOut());
        nvigate("/login")
      }, 100)
    }
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  let storeUser = JSON.parse(localStorage.getItem("loginuser"))
  console.log("storeUser", storeUser.name);


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
          <h1 className="text-xl capitalize"> Wellcome to {storeUser.name}</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">Live</button>
          <FaMoon className="text-gray-600 text-lg cursor-pointer" />
          <FaBell className="text-gray-600 text-lg cursor-pointer" />
          <div className="relative group w-16 h-16">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300 shadow-md cursor-pointer">
              <img
                src="https://i.pravatar.cc/150?img=3"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-20 right-0 w-40 bg-white rounded-xl shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <h1 className="text-gray-700 text-sm font-medium p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
                <CgProfile className="text-lg mr-2 inline-block" />
                My Profile
              </h1>

              <h1
                onClick={handleLogOut}
                className="text-red-600 text-sm font-medium p-2 rounded-lg hover:bg-red-100 cursor-pointer transition"
              >
                <LuLogOut className='inline-block mr-2' />
                Log Out
              </h1>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Usernavbar
