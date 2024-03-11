import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllClass from "./AllClass";

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
            <div className="mt-28">
                <h2 className="text-center text-3xl font-semibold my-5">All Classes</h2>
                <div className="grid lg:grid-cols-3 gap-6 mb-10">
                    {
                        accepted.map(card => <AllClass key={card.id} card={card}></AllClass>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllClasses;