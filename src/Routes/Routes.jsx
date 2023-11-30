import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Dashboard from "../Layout/Dashboard";
import Users from "../Pages/AllDashboard/Admin/Users/Users";
import AdminProfile from "../Pages/AllDashboard/Admin/AdminProfile/AdminProfile";
import TeacherRequest from "../Pages/TeacherRequest/TeacherRequest";
import PrivateRoute from "./PrivateRoute";
import Requests from "../Pages/AllDashboard/Admin/Requests/Requests";
import AddClass from "../Pages/AllDashboard/Teacher/AddClass/AddClass";
import Classes from "../Pages/AllDashboard/Admin/Classes/Classes";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import MyClass from "../Pages/AllDashboard/Teacher/MyClass/MyClass";
import Update from "../Pages/AllDashboard/Teacher/Update/Update";
import TeacherProfile from "../Pages/AllDashboard/Teacher/TeacherProfile/TeacherProfile";
import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";
import StudentProfile from "../Pages/AllDashboard/Student/StudentProfile/StudentProfile";
import Pay from "../Pages/Pay/Pay";
import EnrollClasses from "../Pages/AllDashboard/Student/EnrollClasses/EnrollClasses";
import SeeDetails from "../Pages/SeeDetails/SeeDetails";
import MyTask from "../Pages/MyTask/MyTask";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allclass",
                element: <AllClasses></AllClasses>,
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/addclass/${params.id}`),
            },
            {
                path: "/request",
                element: <PrivateRoute><TeacherRequest></TeacherRequest></PrivateRoute>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addclass/${params.id}`),
            },
            {
                path: "/pay/:id",
                element: <PrivateRoute><Pay></Pay></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addclass/${params.id}`),
            },
            {
                path: "/seedetails/:id",
                element: <PrivateRoute><SeeDetails></SeeDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addclass/${params.id}`),
            },
            {
                path: "/enrollclass/:id",
                element: <PrivateRoute><MyTask></MyTask></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`),
            },
        ]
    },
    {
        path: "dashboard",
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "users",
                element: <AdminRoute><Users></Users></AdminRoute>,
            },
            {
                path: "adminprofile",
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>,
            },
            {
                path: "request",
                element: <AdminRoute><Requests></Requests></AdminRoute>,
            },
            {
                path: "classes",
                element: <AdminRoute><Classes></Classes></AdminRoute>,
            },
            {
                path: "addclass",
                element: <TeacherRoute><AddClass></AddClass></TeacherRoute>,
            },
            {
                path: "myclass",
                element: <TeacherRoute><MyClass></MyClass></TeacherRoute>,
            },
            {
                path: "teacherprofile",
                element: <TeacherRoute><TeacherProfile></TeacherProfile></TeacherRoute>,
            },
            {
                path: "studentprofile",
                element: <PrivateRoute><StudentProfile></StudentProfile></PrivateRoute>,
            },
            {
                path: "enrollclass",
                element: <PrivateRoute><EnrollClasses></EnrollClasses></PrivateRoute>,
            }
        ]
    }
]);