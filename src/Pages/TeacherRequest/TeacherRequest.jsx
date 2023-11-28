import { useForm } from "react-hook-form";
import Navbar from "../../Shared/Navbar/Navbar";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const TeacherRequest = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const userInfo = {
            name: data.name,
            photo: data.photo,
            experience: data.experience,
            category: data.category,
        }
        axiosPublic.post("/request", userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log("User added database");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User created successfully",
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
            <h2 className="text-center text-3xl font-semibold my-5">Submit Your Request</h2>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8">
                        <h3 className="font-semibold">Name</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" defaultValue={user.displayName} {...register("name", { required: true })} name="name" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Photo</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" defaultValue={user.photoURL} {...register("photoURL", { required: true })} placeholder="Photo here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Experience</h3>
                        <select className="w-full p-2 border-2 rounded" {...register("experience")}>
                            <option value="beginner">beginner</option>
                            <option value="experienced">experienced</option>
                            <option value="some idea">some idea</option>
                        </select>
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Category</h3>
                        <select className="w-full p-2 border-2 rounded" {...register("category")}>
                            <option value="webdev">Web Development</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="graphic">Graphic Design</option>
                            <option value="science">Data Science</option>
                            <option value="language">Language Learning</option>
                        </select>
                    </div>
                    <input className="bg-cyan-500 text-white font-semibold w-full rounded-md py-2 mt-4" type="submit" value="Submit for Review" />
                </form>
            </div>
        </div>
    );
};

export default TeacherRequest;