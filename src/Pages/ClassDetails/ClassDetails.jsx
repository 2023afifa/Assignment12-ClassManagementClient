import Navbar from "../../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";


const ClassDetails = () => {
    const classDetail = useLoaderData();
    const { image, title, description, name, price } = classDetail;
    console.log(classDetail);



    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-3xl font-semibold mt-5 mb-10">Class Details</h2>
            <div className="card lg:card-side bg-base-100 w-3/5 mx-auto rounded">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-cyan-700">{title}</h2>
                    <p className="font-semibold">{description}</p>
                    <p className="font-semibold">Instructor: {name}</p>
                    <p className="font-semibold">Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-cyan-500 text-white">Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;