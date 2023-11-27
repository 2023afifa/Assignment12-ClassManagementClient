import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import SignUp from "../Pages/SignUp/SignUp";

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
                path: "/signup",
                element: <SignUp></SignUp>,
            }
        ]
    },
]);