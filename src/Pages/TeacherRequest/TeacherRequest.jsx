import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const TeacherRequest = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const userInfo = {
            name: data.name,
            photo: data.photo,
            email: data.email,
            experience: data.experience,
            category: data.category,
            status: data.status,
        }
        axiosPublic.post("/request", userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log("User added database");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Request done successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error));
    }

    // const handleRequest = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const photo = form.image.value;
    //     const experience = form.experience.value;
    //     const category = form.category.value;

    //     const request = { name, photo, experience, category };
    //     console.log(request);

    //     fetch("http://localhost:5000/request", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(request)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.insertedId) {
    //                 toast("Added the food successfully");
    //             }
    //         })
    // }

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
                        <h3 className="font-semibold">Email</h3>
                        <input className="w-full p-2 border-2 rounded" type="email" defaultValue={user.email} {...register("email", { required: true })} name="email" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Photo</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" name="photo" defaultValue={user.photoURL} {...register("photo", { required: true })} placeholder="Photo here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Experience</h3>
                        <select id="experience" name="experience" className="w-full p-2 border-2 rounded" {...register("experience")}>
                            <option value="Beginner">Beginner</option>
                            <option value="Experienced">Experienced</option>
                            <option value="Some idea">Some Idea</option>
                        </select>
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Category</h3>
                        <select id="category" name="category" className="w-full p-2 border-2 rounded" {...register("category")}>
                            <option value="Web Development">Web Development</option>
                            <option value="Marketing">Digital Marketing</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Language">Language Learning</option>
                        </select>
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Status</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" defaultValue="pending" {...register("status", { required: true })} id="" />
                    </div>
                    <input className="bg-cyan-500 text-white font-semibold w-full rounded-md py-2 mt-4" type="submit" value="Submit for Review" />
                </form>
            </div>
            {/* <Navbar></Navbar>
            <h2 className="text-center text-3xl font-semibold my-5">Submit Your Request</h2>
            <div className="bg-slate-50 my-20">
                <form onSubmit={handleRequest} className="px-40">
                    <div>
                        <div>
                            <h3 className="font-bold mb-3">Name:</h3>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="name" defaultValue={user.displayName} className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">Image:</h3>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <input type="text" name="image" defaultValue={user.photoURL} className="input w-1/2" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">Experience:</h3>
                            <select name="experience" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>beginner</option>
                                <option>experienced</option>
                                <option>some idea</option>
                            </select>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">Category:</h3>
                            <select name="category" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphic Design</option>
                                <option>Data Science</option>
                                <option>Language Learning</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Submit Request" className="btn text-white bg-cyan-500" />
                    </div>
                </form>
            </div>
            <ToastContainer /> */}
        </div>
    );
};

export default TeacherRequest;