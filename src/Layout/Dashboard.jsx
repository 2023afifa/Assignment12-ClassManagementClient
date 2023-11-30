import { IoHomeOutline } from "react-icons/io5";
import { MdLaptopChromebook } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useTeacher from "../Hooks/useTeacher";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isTeacher] = useTeacher();


    return (
        <div className="flex">

            <div className="w-64 min-h-screen bg-cyan-500">
                <div className="text-center py-5">
                    <h1 className="text-2xl font-extrabold">SkillNest</h1>
                    <p className="text-xl font-semibold">Academy</p>
                </div>
                <ul className="menu font-bold lg:text-lg">
                    {
                        isAdmin ?
                            (<>
                                <li>
                                    <NavLink to="/dashboard/adminprofile"> Admin Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users"> Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/classes"> All Class Requests</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/request"> Teacher Request</NavLink>
                                </li>
                            </>)
                            :
                            isTeacher ?
                                (<>
                                    <li>
                                        <NavLink to="/dashboard/addclass"> Add Class</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myclass"> My Class</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/teacherprofile"> Teacher Profile</NavLink>
                                    </li>
                                </>)
                                :
                                (<>
                                    <li>
                                        <NavLink to="/dashboard/studentprofile"> Student Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/enrollclass"> My Enroll Class</NavLink>
                                    </li>
                                </>)
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"> <IoHomeOutline /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/allclass"> <MdLaptopChromebook /> All Classes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"> <RiContactsBook2Line /> Contact</NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex-1 p-8">
                <h2 className="text-center text-cyan-700 lg:text-5xl font-extrabold">Dashboard</h2>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;