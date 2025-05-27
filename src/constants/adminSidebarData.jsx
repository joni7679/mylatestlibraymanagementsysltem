
import { FaUserCog, FaChalkboardTeacher, FaChartBar, FaMoneyCheckAlt, FaBell, FaBook } from "react-icons/fa";
import { MdOutlineLibraryBooks, MdOutlineDashboardCustomize } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";

export const adminDashboardFeatures = [
    {
        title: "User Management",
        icon: <FaUserCog className="text-blue-600 text-2xl" />,
        path: "/admin/user",
        index: true,
        features: [
            {
                title: "User List",
                path: "/admin/users",
                icon: <FaUserCog className="text-blue-600 text-2xl" />,
            },
            {
                title: "User Details",
                path: "/admin/userDetails",
            },
            {
                title: "User Actions",
                path: "/admin/userActions",
            }
        ],
    },
    {
        title: "Books Management",
        icon: <MdOutlineLibraryBooks className="text-green- text-2xl" />,
        path: "/user/course",
        features: [
            {
                title: "Books List",
                path: "/admin/bookstable",
                icon: <MdOutlineLibraryBooks className="text-green- text-2xl" />,
            }, {
                title: "Books Details",
                path: "/admin/bookDetails",
            },
            {
                title: "Books Actions",
                path: "/admin/courseActions",

            },
            {
                title: "Books Uploads",
                path: "/admin/courseUploads",
            }
        ],
    },
    {
        title: "Instructor Management",
        icon: <FaChalkboardTeacher className="text-purple-600 text-2xl" />,
        path: "/admin/instructor",
        features: [
            {
                title: "Instructor List",
                path: "/admin/instructorTable",
                icon: <FaChalkboardTeacher className="text-purple-600 text-2xl" />,
            },
            {
                title: "Instructor Details",
                path: "/admin/instructorDetails",
            },
            {
                title: "Instructor Actions",
                path: "/admin/instructorActions",
            }
        ],
    },
    {
        title: "Analytics & Reports",
        icon: <FaChartBar className="text-white text-2xl" />,
        path: "/admin/analytics",
        features: [
            {
                title: "User Analytics",
                path: "/admin/userAnalytics",
                icon: <FaChartBar className="text-white text-2xl" />,

            },
            {
                title: "Course Analytics",
                path: "/admin/courseAnalytics",
                icon: <FaChartBar className="text-white text-2xl" />,
            },
            {
                title: "Instructor Analytics",
                path: "/admin/instructorAnalytics",
                icon: <FaChartBar className="text-white text-2xl" />,
            },
            {
                title: "Revenue Analytics",
                path: "/admin/revenueAnalytics",
                icon: <FaChartBar className="text-white text-2xl" />,

            },
            {
                title: "Enrollment Analytics",
                path: "/admin/enrollmentAnalytics",
                icon: <FaChartBar className="text-white text-2xl" />,
            }, {
                title: "User Activity",
                path: "/admin/userActivity",
                icon: <FaChartBar className="text-white text-2xl" />,
            }
        ],
    },
    {
        title: "Payment Management",
        icon: <FaMoneyCheckAlt className="text-white text-2xl" />,
        path: "/admin/payment",
        features: [
            {
                title: "Payment History",
                path: "/user/paymentHistory",
                icon: <FaMoneyCheckAlt className="text-white text-2xl" />,
            },
            {
                title: "Refund Requests",
                path: "/admin/refundRequests",
                icon: <FaMoneyCheckAlt className="text-white text-2xl" />,

            },
            {
                title: "Payment Settings",
                path: "/admin/paymentSettings",
                icon: <FaMoneyCheckAlt className="text-white text-2xl" />,
            }
        ],
    },
    {
        title: "Notifications System",
        icon: <FaBell className="text-red-500 text-2xl" />,
        path: "/admin/notifications",
        features: [
            {
                title: "Send Notifications",
                path: "/admin/sendNotifications",
                icon: <FaBell className="text-red-500 text-2xl" />,
            },
            {
                title: "Notification History",
                path: "/admin/notificationHistory",
                icon: <FaBell className="text-red-500 text-2xl" />,
            },
            {
                title: "User Preferences",
                path: "/admin/userPreferences",
                icon: <FaBell className="text-red-500 text-2xl" />,

            },
            {
                title: "Notification Templates",
                path: "/admin/notificationTemplates",
                icon: <FaBell className="text-red-500 text-2xl" />,
            }
        ],
    },
    {
        title: "CMS (Content Management System)",
        icon: <MdOutlineDashboardCustomize className="text-teal-500 text-2xl" />,
        path: "/admin/cms",
        features: [
            {
                title: "Manage Blog Posts",
                path: "/admin/blogPosts",
                icon: <MdOutlineDashboardCustomize className="text-teal-500 text-2xl" />,
            },
            {
                title: "Manage Categories",
                path: "/admin/categories",
                icon: <BiCategoryAlt className="text-teal-500 text-2xl" />,
            },
            {
                title: "Manage Tags",
                path: "/admin/tags",
                icon: <BiCategoryAlt className="text-teal-500 text-2xl" />,
            },
        ],
    },
];
