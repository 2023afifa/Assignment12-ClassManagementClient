import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuth from "../../../../Hooks/useAuth";
import EnrollClass from "./EnrollClass";


const EnrollClasses = () => {
    const { user } = useAuth();
    const [enrollClasses, setEnrollClasses] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic("/enroll")
            .then(res => {
                setEnrollClasses(res.data);
            })
    }, [])

    const enrollClass = enrollClasses.filter(c => c.email === user.email);
    console.log(enrollClass);

    if(enrollClass.length == 0){
        return <p className="text-center text-xl font-extrabold lg:mt-28">You have no classes here right now</p>
    }


    return (
        <div>
            <h2 className="text-center text-3xl font-semibold mt-5 mb-10">Enrolled Classes</h2>
            <div className="grid lg:grid-cols-2 gap-10">
                {
                    enrollClass.map(card => <EnrollClass key={card.id} card={card}></EnrollClass>)
                }
            </div>
        </div>
    );
};

export default EnrollClasses;