import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuth from "../../../../Hooks/useAuth";
import AClass from "./AClass";

const MyClass = () => {
    const { user } = useAuth();
    const [myClasses, setMyClasses] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic("/addclass")
            .then(res => {
                setMyClasses(res.data);
            })
    }, [])

    const myClass = myClasses.filter(c => c.email === user.email);
    console.log(myClass);

    return (
        <div>
            <h2 className="text-center text-3xl font-semibold mt-5 mb-10">My Class</h2>
            <div className="grid lg:grid-cols-2 gap-10">
                {
                    myClass.map(card => <AClass key={card.id} card={card}></AClass>)
                }
            </div>
        </div>
    );
};

export default MyClass;