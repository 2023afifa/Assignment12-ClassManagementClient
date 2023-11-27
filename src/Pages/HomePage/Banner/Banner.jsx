const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/L8rsqVB/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To <span className="text-cyan-500">SkillNest</span></h1>
                        <p className="mb-5">Unlock Your Potential with SkillNest Academy: Learn, Grow, Succeed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;