const Partners = () => {
    return (
        <div className="my-20">
            <h3 className="text-center text-3xl font-bold mb-6">Our Partners</h3>
            <div className="lg:mx-40 grid lg:grid-cols-5 items-center justify-center">
                <div className="lg:mr-16">
                    <img className="w-40 h-14 mx-auto" src="https://i.ibb.co/yVzQMZg/partner1.png" alt="" />
                    {/* <p className="text-xs text-gray-500 text-center">Empowering innovation with Samsung - A leader in technology and innovation</p> */}
                </div>
                <div>
                    <img className="w-32 mx-auto" src="https://i.ibb.co/nc7L4K6/partner2.png" alt="" />
                    {/* <p className="text-xs text-gray-500 text-center">Transforming possibilities with Cisco - Shaping the future of networking and technology</p> */}
                </div>
                <div>
                    <img className="w-32 mx-auto" src="https://i.ibb.co/RDb2g3p/partner3.png" alt="" />
                    {/* <p className="text-xs text-gray-500 text-center">Connecting possibilities with AT&T - A global leader in telecommunications</p> */}
                </div>
                <div>
                    <img className="w-32 mx-auto" src="https://i.ibb.co/58GGFDB/partner4.png" alt="" />
                    {/* <p className="text-xs text-gray-500 text-center">Strategic partnership with Citi - Driving financial solutions for success</p> */}
                </div>
                <div>
                    <img className="w-20 mx-auto" src="https://i.ibb.co/LJ8RQGh/partner5.png" alt="" />
                    {/* <p className="text-xs text-gray-500 text-center">Driving excellence together with Volkswagen - Pioneering automotive engineering</p> */}
                </div>

            </div>
        </div>
    );
};

export default Partners;