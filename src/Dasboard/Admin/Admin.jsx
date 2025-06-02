

import Sidebar from './Sidebar'
import Navbar from './Navbar'
// import AddStu from './AddStu'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';
function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row w-full h-screen bg-gray-800">

        
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-4 left-4 z-50 bg-blue-500 text-white px-3 py-1 rounded lg:hidden"
        >
          {isSidebarOpen ? "Close" : "Open"}
        </button>

      
        <div
          className={`bg-gray-900 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        fixed top-0 left-0 w-[40%] h-full z-40 md:relative md:translate-x-0 md:w-[25%] md:block `}
        >
          <Sidebar className="left-part" />
        </div>

        <div className="w-full md:w-[75%] h-full overflow-y-auto px-5 md:ml-0 right-part">
          <Outlet />
        </div>
      </div>


    </>
  )
}

export default Admin