import Navbar from "../../../../Shared/Navbar/Navbar";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddClass = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
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
            classStatus: data.classStatus,
        }
        axiosPublic.post("/addclass", classInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log("Class added database");
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Class request done",
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
            <h2 className="text-center text-3xl font-semibold my-5">Add Class</h2>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8">
                        <h3 className="font-semibold">Title</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" {...register("title", { required: true })} name="title" placeholder="Type here" id="" />
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
                        <input className="w-full p-2 border-2 rounded" type="text" {...register("price", { required: true })} name="price" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Description</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" {...register("description", { required: true })} name="description" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Photo</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" {...register("image", { required: true })} name="image" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Status</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" defaultValue="pending" {...register("classStatus", { required: true })} name="classStatus" id="" />
                    </div>
                    <input className="bg-cyan-500 text-white font-semibold w-full rounded-md py-2 mt-4" type="submit" value="Add Class" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;