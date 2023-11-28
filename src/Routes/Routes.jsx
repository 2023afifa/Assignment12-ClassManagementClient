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
                element: <Users></Users>,
            },
            {
                path: "adminprofile",
                element: <AdminProfile></AdminProfile>,
            }
        ]
    }
]);