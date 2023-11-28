import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photoURL,
                        }
                        axiosPublic.post("/user", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("User added database");
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate("/");
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="shadow-2xl">
                <div className="py-14">
                    <div className="w-1/3 mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-8">
                                <h3 className="font-semibold">Name</h3>
                                <input className="w-full p-2" type="text" {...register("name", { required: true })} name="name" placeholder="Type here" id="" />
                                {
                                    errors.name && <span className="text-red-600 font-medium">This field is required</span>
                                }
                            </div>
                            <div className="mb-8">
                                <h3 className="font-semibold">Photo</h3>
                                <input className="w-full p-2" type="text" {...register("photoURL", { required: true })} placeholder="Photo here" id="" />
                                {
                                    errors.photoUrl && <span className="text-red-600 font-medium">This field is required</span>
                                }
                            </div>
                            <div className="mb-8">
                                <h3 className="font-semibold">Email</h3>
                                <input className="w-full p-2" type="email" {...register("email", { required: true })} name="email" placeholder="Type here" id="" />
                                {
                                    errors.email && <span className="text-red-600 font-medium">Email is required</span>
                                }
                            </div>
                            <div className="mb-8">
                                <h3 className="font-semibold">Password</h3>
                                <input className="w-full p-2" type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=(.*[!@#$%^&*()\-__+.]){1,})/ })} name="password" placeholder="Type here" id="" />
                                {
                                    errors.password?.type === "required" && <p className="text-red-600 font-medium">Password is required</p>
                                }
                                {
                                    errors.password?.type === "minLength" && <p className="text-red-600 font-medium">Password must be 6 characters</p>
                                }
                                {
                                    errors.password?.type === "pattern" && <p className="text-red-600 font-medium">Password must have atleast one special character</p>
                                }
                            </div>
                            <input className="bg-cyan-500 text-white font-semibold w-full rounded-md py-2 mt-4" type="submit" value="Sign Up" />
                        </form>
                        <p className="text-center text-cyan-500 font-bold mt-5"><small>Already registered? <Link to="/signin">Go to sign in</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;