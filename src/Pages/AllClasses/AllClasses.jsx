import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllClass from "./AllClass";
import Footer from "../../Shared/Footer/Footer";

const AllClasses = () => {
    const [allClass, setAllClass] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic("/addclass")
            .then(res => {
                setAllClass(res.data);
            })
    }, [])

    const accepted = allClass.filter(c => c.classStatus === "Accepted");
    console.log(accepted);

    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <div className="hero pt-32 pb-10" style={{ backgroundImage: 'url(https://i.ibb.co/hdv8wYg/allclass.jpg)' }}>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-slate-200">Explore Classes</h1>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-6 my-20">
                    {
                        accepted.map(card => <AllClass key={card.id} card={card}></AllClass>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllClasses;