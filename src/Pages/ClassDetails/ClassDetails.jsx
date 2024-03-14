import { IoPersonCircleOutline } from "react-icons/io5";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link, useLoaderData } from "react-router-dom";


const ClassDetails = () => {
    const classDetail = useLoaderData();
    const { _id, image, title, description, name, price } = classDetail;
    console.log(classDetail);



    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-sky-100 py-20">
                <h2 className="text-center text-3xl font-semibold my-5">Class Details</h2>
                <div className="">
                    <div className="card bg-slate-200 w-10/12 md:w-3/4 lg:w-3/5 mx-auto rounded-sm shadow-2xl">
                        <figure><img src={image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-sky-700 text-4xl font-bold">{title}</h2>
                            <p className="font-medium text-2xl">{description}</p>
                            <div className="card-actions justify-start">
                                <Link to={`/pay/${_id}`}><button className="hover:bg-slate-100 hover:text-sky-700 text-xl py-2 px-10 border-2 border-sky-700 rounded font-semibold bg-sky-700 text-slate-100">Pay</button></Link>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-xl">
                            <div className="w-3/4 bg-slate-100 py-2 flex items-center justify-center">
                                <IoPersonCircleOutline className="text-3xl text-sky-700 mr-2" />
                                <p><span className="font-bold">{name}</span>, Instructor</p>
                            </div>
                            <p className="w-1/4 font-bold bg-sky-700 text-white text-center py-2">${price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ClassDetails;