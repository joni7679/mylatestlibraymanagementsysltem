

import { FaHome, FaClipboardList, FaBookOpen, FaExclamationTriangle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

export const usersidebarData = [
    {
        name: "Dashboard",
        icon: FaHome,
        path: "/user/dasboard",
        index: true,
    },
    {
        name: "Attendance Reports",
        icon: FaClipboardList,
        path: "/user/attendance"
    },
    {
        name: "My Profile",
        icon: FaClipboardList,
        path: "/user/profile"
    },
    {
        name: "My Learning",
        icon: FaBookOpen,
        path: "/user/learning"
    },
    {
        name: "Reports",
        icon: FaExclamationTriangle,
        path: "/user/reports"
    },
    {
        name: "Settings",
        icon: IoIosSettings,
        path: "/user/setting"
    }
];
