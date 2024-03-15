import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
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
            <div className="bg-sky-200 py-24">
                <div className="w-10/12 md:w-3/4 lg:w-2/5 mx-auto shadow-2xl">
                    <div className="hero py-20" style={{ backgroundImage: 'url(https://i.ibb.co/wYsjrCm/register.jpg)' }}>
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <h2 className="text-4xl font-bold text-slate-50">Sign Up For Free!!!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-100 px-10 pb-10">
                        <p className="text-center text-sky-700 font-bold py-3">Already registered? Go to <Link to="/signin" className="underline hover:text-sky-600">SIGN IN</Link></p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <h3 className="font-bold">Name</h3>
                                <input className="w-full p-2" type="text" {...register("name", { required: true })} name="name" placeholder="Type here" id="" />
                                {
                                    errors.name && <span className="text-red-600 font-medium">This field is required</span>
                                }
                            </div>
                            <div className="mb-4">
                                <h3 className="font-bold">Photo</h3>
                                <input className="w-full p-2" type="text" {...register("photoURL", { required: true })} placeholder="Type here" id="" />
                                {
                                    errors.photoUrl && <span className="text-red-600 font-medium">This field is required</span>
                                }
                            </div>
                            <div className="mb-4">
                                <h3 className="font-bold">Email</h3>
                                <input className="w-full p-2" type="email" {...register("email", { required: true })} name="email" placeholder="Type here" id="" />
                                {
                                    errors.email && <span className="text-red-600 font-medium">Email is required</span>
                                }
                            </div>
                            <div className="mb-4">
                                <h3 className="font-bold">Password</h3>
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
                            <input className="bg-sky-700 text-slate-200 font-semibold w-full rounded py-2 mt-4 hover:bg-sky-600" type="submit" value="Sign Up" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;