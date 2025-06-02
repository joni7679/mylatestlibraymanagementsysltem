import { FaBookOpen } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { adminDashboardFeatures } from "../../constants/adminSidebarData";
import { useState } from "react";

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({});
    const toggleMenu = (index) => {
        setOpenMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="h-screen bg-gray-900 shadow-md p-5 flex flex-col overflow-y-auto w-[18rem] left-part">
            <div className="flex items-center gap-3 mb-8">
                <FaBookOpen className="text-orange-500 text-3xl" />
                <Link to={`/admin`} className="text-xl font-semibold text-white">SkillSet</Link>
            </div>
            <ul className="space-y-4">
                {adminDashboardFeatures.map((item, index) => (
                    <li key={index} className="relative">

                        <button
                            onClick={() => toggleMenu(index)}
                            className="w-full flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-950 p-2 rounded text-gray-100 hover:text-orange-500"
                        >
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {openMenus[index] ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </button>


                        <ul className={`${openMenus[index] ? "block" : "hidden"} ml-6 mt-2 space-y-2`}>
                            {item?.features?.map((feature, featureIndex) => (
                                <li key={featureIndex}>
                                    <Link
                                        to={feature.path}
                                        className="flex items-center gap-2 text-gray-100 hover:text-orange-500 hover:bg-gray-950 p-2 rounded"
                                    >
                                        {feature.icon}
                                        <span>{feature.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
