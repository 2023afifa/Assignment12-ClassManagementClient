import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const navLink =
        <>
            <li><NavLink className="mr-2" to="/">Home</NavLink></li>
            <li><NavLink className="mr-2" to="/allclass">All Classes</NavLink></li>
            <li><NavLink className="mr-2" to="/request">Teach On SkillNest</NavLink></li>
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
        <div className="fixed w-full z-10">
            <div className="navbar bg-black bg-opacity-20 md:px-10 lg:px-48">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    {/* <img className="h-8 md:h-16 mr-2" src="https://i.ibb.co/rsYwc84/5920.jpg" alt="" /> */}
                    <h1 className="normal-case text-xl md:text-3xl font-bold"><span className="text-slate-200">Skill</span><span className="text-sky-600">Nest</span> <span className="text-slate-200">Academy</span></h1>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-lg text-slate-200 navStyle">
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
                                    <ul className="menu menu-sm dropdown-content font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a className="text-cyan-700 md:text-2xl my-3">{user.displayName}</a></li>
                                        <li><Link to="/dashboard" className="md:text-lg">Dashboard</Link></li>
                                        <button onClick={handleLogout} className="bg-cyan-500 text-white rounded-lg py-1 mt-2">Logout</button>
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