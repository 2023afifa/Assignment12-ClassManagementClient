import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AClass = ({ card }) => {
    const { _id, title, image, price, description, classStatus } = card;
    const axiosPublic = useAxiosSecure();


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/addclass/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card w-96 md:w-[450px] h-[450px] rounded bg-slate-100 shadow-xl mx-auto">
                <figure className="h-1/2"><img src={image} alt="Course" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-sky-700 text-2xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <p className="text-sky-700 text-2xl font-bold">${price}</p>
                    <div className="card-actions justify-around items-center">
                        <Link to={`/update/${_id}`}>
                            <button className="text-slate-100 bg-orange-600 px-5 py-2 font-bold rounded-sm hover:bg-slate-100 hover:text-orange-600">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="text-slate-100 bg-red-600 px-5 py-2 font-bold rounded-sm hover:bg-slate-100 hover:text-red-600">Delete</button>
                        <Link to={`/seedetails/${_id}`}>
                            <button disabled={classStatus !== "Accepted"} className="text-slate-100 bg-sky-700 px-5 py-2 font-bold rounded-sm hover:bg-slate-100 hover:text-sky-700">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AClass;





{/* <div className="card w-96 h-[550px] rounded-none bg-base-100 shadow-md mx-auto">
    <figure><img src={image} alt="Food" /></figure>
    <div className="card-body">
        <h2 className="card-title text-cyan-700">{title}</h2>
        <p className="font-semibold">{name}</p>
        <p>{description}</p>
        <p><span className="font-semibold">Price:</span> ${price}</p>

        <div className="card-actions justify-center">
            <Link to={`/update/${_id}`}>
                <button className="btn bg-orange-500 text-white">Update</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white">Delete</button>
            <Link to={`/seedetails/${_id}`}>
                <button disabled={classStatus !== "Accepted"} className="btn bg-cyan-500 text-white">See Details</button>
            </Link>
        </div>
    </div>
</div> */}