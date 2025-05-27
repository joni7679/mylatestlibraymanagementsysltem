
import { Outlet } from "react-router-dom"
import Usernavbar from "./Usernavbar"
import UsersSidebar from "./UsersSidebar"


function Dasboard() {

  return (
    <>
      <Usernavbar />
      <div className="flex">
        <div className="left-part w-[20%]">
          <UsersSidebar />
        </div>
        <div className="right-part w-[80%] bg-gray-800">
          <Outlet/>
        </div>
      </div>

    </>
  )
}

export default Dasboard
