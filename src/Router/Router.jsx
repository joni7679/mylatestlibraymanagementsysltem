import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Singup/Singup";
import Contact from "../Pages/Contact/Contact";
import Error404 from "../Pages/Error404/Error404"
import Admin from "../Dasboard/Admin/Admin";
import UserTable from "../Dasboard/Admin/UserTable";
import AddStudents from "../Dasboard/Admin/AddStudents";
import Dasboard from "../Dasboard/User/Dasboard";
import AdminHome from "../Dasboard/Admin/AdminHome";
import Books from "../Components/Books";
import BookDetlist from "../Components/BookDetlist";
import ProtectedRoute from "../Components/ProtectedRoute";
import PublicRoute from "../Components/PublicRoute";
import StudentReviewForm from "../Components/StudentReviewForm";
import ProfileSettings from "../Dasboard/User/ProfileSettings";
import User from "../Dasboard/User/User";
import Learning from "../Dasboard/User/Learning";
import UserDetails from "../Dasboard/Admin/UserDetails";
import UserActions from "../Dasboard/Admin/UserActions";
import AdminProtectedRoute from "../Components/AdminProtectedRoute";
import BooksTable from "../Dasboard/Admin/BooksTable";
import BookDetailsContainer from "../Dasboard/Admin/BookDetailsContainer";
import Addbooks from "../Dasboard/Admin/Addbooks";
import EditBook from "../Dasboard/Admin/EditBook";
export let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/review",
    element: <StudentReviewForm />
  },
  {
    path: "/bookdetlist/:id",
    element: <BookDetlist />
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: (
      <AdminProtectedRoute>
        <Admin />
      </AdminProtectedRoute>
    ),
    children: [
      {
        path: "/admin/users",
        element: (
          <AdminProtectedRoute>
            <UserTable
            />
          </AdminProtectedRoute>

        )
      },
      {
        path: "/admin/admin",
        element: (
          <AdminProtectedRoute>
            <AdminHome />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/admin/addstudents",
        element: (
          <AdminProtectedRoute>
            <AddStudents />
          </AdminProtectedRoute>
        )
      },
      {
        path: "/admin/userDetails",
        element: (
          <AdminProtectedRoute>
            <UserDetails />

          </AdminProtectedRoute>
        )

      },
      {
        path: "/admin/userDetails/:id",
        element: <UserDetails />

      },
      {
        path: "/admin/userActions",
        element: <UserActions />

      },
      {
        path: "/admin/userActions/:id",
        element: <UserActions />
      },
      {
        path: '/admin/bookstable',
        element: <BooksTable />
      },
      {
        path: '/admin/addbooks',
        element: <Addbooks />
      },
      {
        path: '/admin/editbooks/:bookid',
        element: <EditBook />
      },
      {
        path: `/admin/bookDetails`,
        element: <BookDetailsContainer />
      },
      {
        path: `/admin/bookDetails/:id`,
        element: <BookDetailsContainer />
      },
      {
        path: "/admin/payments",
        element: <h1>payments</h1>
      },
      {
        path: "/admin/addbooks",
        element: <h1>Add Books</h1>,
      },

      {
        path: "/admin/editbooks",
        element: <h1>Edit Books</h1>,
      }
    ],
  }
  ,
  {
    path: "user",
    element: (
      <ProtectedRoute>
        <Dasboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/user/dasboard',
        element: (
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        )
      },
      {
        path: '/user/mybooks',
        element: (
          <ProtectedRoute>
            <h1>hello user</h1>
          </ProtectedRoute>
        )
      },
      {
        path: '/user/learning',
        element: (
          <ProtectedRoute>
            <Learning />
          </ProtectedRoute>
        )
      },
      {
        path: '/user/profile',
        element: <ProfileSettings />
      },
    ]
  },
  {
    path: "*",
    element: <Error404 />,
  }
]);
