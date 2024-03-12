import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/VmhTLbC/banner-2.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl md:text-6xl lg:text-8xl font-bold">Welcome To <span className="text-sky-700">SkillNest</span></h1>
                        <p className="mb-5 text-xl">"Unlock Your Potential with SkillNest Academy: Learn, Grow, Succeed" - Discover a world of opportunities, expand your horizons, and achieve your goals with SkillNest Academy's diverse range of courses. Let your journey to success begin here, where learning knows no bounds, growth is inevitable, and success is within reach. </p>
                        <Link to="/allclass">
                            <button className="btn bg-sky-700 text-white border-none rounded-sm hover:bg-sky-600">Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;