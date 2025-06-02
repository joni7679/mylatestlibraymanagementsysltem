
import { Link } from 'react-router-dom'
import { FaHome, FaClipboardList, FaBookOpen, FaExclamationTriangle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { usersidebarData } from '../../constants/userSidebarData';
import { retry } from '@reduxjs/toolkit/query';
function UsersSidebar() {
    return (
        <>
            <div className="h-screen w-64 bg-gray-900 shadow-md p-5 flex flex-col absolute">

                <div className="flex items-center gap-3 mb-8">
                    <FaBookOpen className="text-orange-500 text-3xl" />
                    <h1 className="text-xl text-white font-semibold">SkillSet</h1>
                </div>
                <ul className="space-y-4">
                    {usersidebarData.map((val, index) => {
                        const Icon = val.icon;
                        return (
                            <Link
                                key={index}
                                to={val.path}
                                className="flex items-center hover:bg-gray-950 p-2 rounded gap-3 text-gray-100 hover:text-orange-500 cursor-pointer " 
                            >
                                <Icon />
                                {val.name}
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}

export default UsersSidebar
