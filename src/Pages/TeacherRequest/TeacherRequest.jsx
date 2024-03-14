import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Footer from "../../Shared/Footer/Footer";


const TeacherRequest = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const userInfo = {
            name: user.displayName,
            photo: user.photoURL,
            email: user.email,
            experience: data.experience,
            category: data.category,
            status: "Pending",
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


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero pt-32 pb-10" style={{ backgroundImage: 'url(https://i.ibb.co/FsNxN41/teacherrequest.jpg)' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md md:max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold text-slate-200">Submit Your Teacher Request Form</h1>
                    </div>
                </div>
            </div>
            <div className="w-1/2 mx-auto my-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-5">
                        <h3 className="font-bold">Experience</h3>
                        <select id="experience" name="experience" className="w-full p-2 border-2 border-sky-700 rounded" {...register("experience")}>
                            <option value="Beginner">Beginner</option>
                            <option value="Experienced">Experienced</option>
                            <option value="Some idea">Some Idea</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <h3 className="font-bold">Category</h3>
                        <select id="category" name="category" className="w-full p-2 border-2 border-sky-700 rounded" {...register("category")}>
                            <option value="Web Development">Web Development</option>
                            <option value="Marketing">Digital Marketing</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Language">Language Learning</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <input className="bg-sky-700 text-slate-100 font-semibold rounded px-5 py-2 hover:bg-sky-600" type="submit" value="Submit for Review" />
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default TeacherRequest;





// const handleRequest = e => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const photo = form.image.value;
//     const experience = form.experience.value;
//     const category = form.category.value;

//     const request = { name, photo, experience, category };
//     console.log(request);

//     fetch("https://class-management-server-seven.vercel.app/request", {
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