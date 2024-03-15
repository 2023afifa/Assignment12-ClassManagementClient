import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const EnrollClass = ({ card }) => {
    const { _id, title, name, image, price, description } = card;

    return (
        <div>
            <div className="card w-96 md:w-[450px] h-[450px] rounded bg-slate-100 shadow-xl mx-auto">
                <figure className="h-1/2"><img src={image} alt="Course" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-sky-700 text-2xl font-bold">{title}</h2>
                    <div className="flex justify-start items-center">
                        <IoPersonCircleOutline className="text-2xl text-sky-700 mr-2" />
                        <p className="font-semibold text-lg">{name}</p>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions justify-between items-center">
                        <p className="text-sky-700 text-2xl font-bold">${price}</p>
                        <Link to={`/enrollclass/${_id}`}>
                            <button className="bg-sky-700 text-slate-200 hover:bg-slate-200 hover:text-sky-700 border-2 border-sky-700 px-5 py-2 font-bold text-xl rounded-sm">Continue</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollClass;