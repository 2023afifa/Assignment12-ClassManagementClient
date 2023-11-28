import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

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
        <div>
            <div className="navbar bg-slate-50 md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img className="h-8 md:h-14 mr-2" src="../../../images/education.png" alt="" />
                    <a className="normal-case text-xl md:text-3xl text-cyan-500 font-bold">SkillNest Academy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
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
                                        <li><a>Name: {user.displayName}</a></li>
                                        <li><Link to="/dashboard">Dashboard</Link></li>
                                        <button onClick={handleLogout} className="bg-cyan-500 text-white rounded-lg py-1 mt-2">Logout</button>
                                    </ul>
                                </div>
                            </>
                            :
                            <Link to="/signin"><button className="btn">Sign In</button></Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;