import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Navbar.css";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";


const Navbar = () => {
    const { user, logOut } = useAuth();

    const navLink =
        <>
            <li><NavLink className="lg:mr-2" to="/">Home</NavLink></li>
            <li><NavLink className="lg:mr-2" to="/allclass">All Classes</NavLink></li>
            <li><NavLink className="lg:mr-2" to="/request">Teach On SkillNest</NavLink></li>
        </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="fixed w-full top-0 z-10">
            <div className="navbar bg-black bg-opacity-20 px-10 md:px-5 lg:px-48">
                <div className="lg:navbar-start">
                    <h1 className="normal-case text-3xl font-bold"><span className="text-slate-200">Skill</span><span className="text-sky-600">Nest</span> <span className="text-slate-200">Academy</span></h1>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-slate-200 md:hidden">
                            <MdOutlineMenu className="text-2xl" />
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 navStyle">
                            {navLink}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden md:flex flex-1">
                    <ul className="menu menu-horizontal px-1 font-bold lg:text-lg text-slate-200 navStyle">
                        {navLink}
                    </ul>
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul className="menu menu-sm dropdown-content font-semibold mt-1 z-[1] p-2 shadow bg-slate-200 rounded w-52">
                                        <li><Link to="/dashboard" className="md:text-xl">Dashboard</Link></li>
                                        <li><h2 className="hover:bg-transparent"><IoMdPerson className="text-sky-800 text-xl" />{user.displayName}</h2></li>
                                        <li><h2 className="hover:bg-transparent"><AiOutlineMail className="text-sky-800 text-xl" />{user.email}</h2></li>
                                        <button onClick={handleLogout} className="bg-sky-700 text-white rounded-lg py-1 mt-2">Logout</button>
                                    </ul>
                                </div>
                            </>
                            :
                            <Link to="/signin"><button className="bg-sky-700 text-white px-5 py-2 rounded-3xl hover:bg-sky-800">Sign In</button></Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;