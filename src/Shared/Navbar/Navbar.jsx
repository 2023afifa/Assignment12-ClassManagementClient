import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink =
        <>
            <li><NavLink className="mr-2" to="/">Home</NavLink></li>
            <li><NavLink className="mr-2" to="/allclass">All Classes</NavLink></li>
            <li><NavLink className="mr-2" to="/teachon">Teach On SkillNest</NavLink></li>
        </>

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
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>User Name</a></li>
                            <li><a>Dashboard</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <a className="btn">Sign In</a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;