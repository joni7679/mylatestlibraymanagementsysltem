import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

export const menuItems = [
    {
        label: "My Profile",
        icon: <CgProfile className="text-lg mr-2 inline-block" />,
        onClick: () => console.log("Profile Clicked"),
        className: "text-gray-700 hover:bg-gray-100",
    },
    {
        label: "Dashboard",
        icon: <MdDashboard className="text-lg mr-2 inline-block" />,
        onClick: () => console.log("Dashboard Clicked"),
        className: "text-gray-700 hover:bg-gray-100",
    },
    {
        label: "Log Out",
        icon: <LuLogOut className="text-lg mr-2 inline-block" />,
        onClick: handleLogOut,
        className: "text-red-600 hover:bg-red-100",
    },
];