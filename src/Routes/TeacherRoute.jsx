import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useTeacher from "../Hooks/useTeacher";

const TeacherRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isTeacher, isTeacherLoading] = useTeacher();
    const location = useLocation();

    if (loading || isTeacherLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isTeacher) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
};

export default TeacherRoute;