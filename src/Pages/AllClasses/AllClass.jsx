import { Link } from "react-router-dom";

const AllClass = ({ card }) => {
    const { _id, title, name, image, price, description } = card;

    return (
        <div>
            <div className="card w-96 h-[550px] rounded-none bg-base-100 shadow-md mx-auto">
                <figure><img src={image} alt="Food" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-cyan-700">{title}</h2>
                    <p className="font-semibold">{name}</p>
                    <p>{description}</p>
                    <p><span className="font-semibold">Price:</span> ${price}</p>

                    <div className="card-actions justify-center">
                        <Link to={`/details/${_id}`}><button className="btn bg-cyan-500 text-white">Enroll</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClass;