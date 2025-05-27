
import Navbar from '../Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import { BiLibrary, BiSearch } from 'react-icons/bi'
import { useEffect, useState } from 'react';
import { fetchUserData, fetchUsers } from '../../Reducx/UserSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Categeries from '../../Components/Catogeries/Categeries';
import { fetchAdminData } from '../../Reducx/AdminSlice';


function Home() {
  let dispatch = useDispatch();
  const [search, setSearch] = useState("");


  useEffect(() => {
    let res = axios.get(`http://localhost:3000/users`);
    let finalres = res.data;
    dispatch(fetchUserData(finalres))
  }, [])
  useEffect(() => {
    let res = axios.get(`http://localhost:3000/admin`);
    let finalres = res.data;
    dispatch(fetchAdminData(finalres))
  }, [])
  useEffect(() => {
    dispatch(fetchUsers)
    dispatch(fetchAdminData)
  }, [])
  return (
    <>

      <Navbar />
      <div className="min-h-screen flex flex-col md:flex-row bg-[#f1f1ed]">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="text-gray-900">+5,000 books</span><br />
            <span className="text-orange-400 font-semibold">in one place</span>
          </h1>
          <div className="mt-10 flex items-center bg-white shadow-md rounded-full w-full max-w-2xl overflow-hidden">
            <input
              type="text"
              placeholder="Search Books Here...."
              className="flex-grow px-6 py-4 outline-none text-gray-700 rounded-l-full"
            />
            <button className="bg-[#FF6900] px-6 py-4 rounded-r-full text-gray-100">
              <BiSearch className='text-xl cursor-pointer' />
            </button>
          </div>
          <button className="mt-6 cursor-pointer flex items-center gap-2 bg-[#FF6900] text-gray-100 px-6 py-3 rounded-full shadow hover:bg-orange-400 transition">
            <BiLibrary className='text-xl ' />
            Show Audiobooks
          </button>
        </div>
        <div className="w-full md:w-1/2 h-[400px] md:h-auto bg-cover bg-center" style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2022/02/20/11/52/kids-7024410_1280.jpg')`
        }}></div>
      </div>


      <Categeries />


      <Footer />


    </>
  )
}

export default Home