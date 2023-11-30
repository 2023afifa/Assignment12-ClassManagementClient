import Navbar from "../../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Pay = () => {
    const paymentDetail = useLoaderData();
    const { _id, image, title, description, price } = paymentDetail;
    console.log(paymentDetail);

    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        console.log(data);
        const classInfo = {
            title: data.title,
            name: data.name,
            email: data.email,
            price: data.price,
            description: data.description,
            image: data.image,
        }
        axiosPublic.post("/enroll", classInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log("Enrolled in database");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Enrollment done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-3xl font-semibold mt-5 mb-10">Payment Details</h2>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8">
                        <h3 className="font-semibold">Title</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" defaultValue={title} {...register("title", { required: true })} name="title" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Name</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" defaultValue={user.displayName} {...register("name", { required: true })} name="name" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Email</h3>
                        <input className="w-full p-2 border-2 rounded" type="email" defaultValue={user.email} {...register("email", { required: true })} name="email" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Price</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" defaultValue={price} {...register("price", { required: true })} name="price" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Description</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" defaultValue={description} {...register("description", { required: true })} name="description" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Photo</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" defaultValue={image} {...register("image", { required: true })} name="image" placeholder="Type here" id="" />
                    </div>
                    <input className="bg-cyan-500 text-white font-semibold w-full rounded-md py-2 mt-4" type="submit" value="Enroll" />
                </form>
            </div>
        </div>
    );
};

export default Pay;