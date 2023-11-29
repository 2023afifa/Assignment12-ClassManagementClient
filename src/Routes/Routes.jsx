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
            }
        ]
    },
    {
        path: "dashboard",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "users",
                element: <PrivateRoute><Users></Users></PrivateRoute>,
            },
            {
                path: "adminprofile",
                element: <PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>,
            },
            {
                path: "request",
                element: <PrivateRoute><Requests></Requests></PrivateRoute>,
            },
            {
                path: "classes",
                element: <PrivateRoute><Classes></Classes></PrivateRoute>,
            },
            {
                path: "addclass",
                element: <PrivateRoute><AddClass></AddClass></PrivateRoute>,
            }
        ]
    }
]);