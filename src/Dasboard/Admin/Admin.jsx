

import Sidebar from './Sidebar'
import Navbar from './Navbar'
// import AddStu from './AddStu'
import { Outlet } from 'react-router-dom'
function Admin() {
  
  return (
    <>
      <Navbar />
      <div className="flex  w-full h-screen bg-gray-800">
        <div className="left-part w-[25%]">
          <Sidebar />
        </div>
        <div className="right-part w-[90%] h-screen  overflow-scroll px-5">
          <Outlet />
        </div>


      </div>

    </>
  )
}

export default Admin