const Partners = () => {
    return (
        <div className="my-20">
            <h3 className="text-center text-3xl font-semibold mb-6">Our Partners</h3>
            <div className="bg-zinc-200 mx-14 px-20 py-10 flex items-center justify-center gap-10">
                <div>
                    <img className="w-40 h-14 mx-auto" src="../../../../images/partner1.png" alt="" />
                    <p className="text-xs text-gray-500 text-center">Empowering innovation with Samsung - A leader in technology and innovation</p>
                </div>
                <div>
                    <img className="w-32 mx-auto" src="../../../../images/partner2.png" alt="" />
                    <p className="text-xs text-gray-500 text-center">Transforming possibilities with Cisco - Shaping the future of networking and technology</p>
                </div>
                <div>
                    <img className="w-32 mx-auto" src="../../../../images/partner3.png" alt="" />
                    <p className="text-xs text-gray-500 text-center">Connecting possibilities with AT&T - A global leader in telecommunications</p>
                </div>
                <div>
                    <img className="w-32 mx-auto" src="../../../../images/partner4.png" alt="" />
                    <p className="text-xs text-gray-500 text-center">Strategic partnership with Citi - Driving financial solutions for success</p>
                </div>
                <div>
                    <img className="w-24 mx-auto" src="../../../../images/partner5.png" alt="" />
                    <p className="text-xs text-gray-500 text-center">Driving excellence together with Volkswagen - Pioneering automotive engineering</p>
                </div>
                
            </div>
        </div>
    );
};

export default Partners;