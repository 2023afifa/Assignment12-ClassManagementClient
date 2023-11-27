import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = data => {

    }

    return (
        <div>
            <div className=" shadow-2xl">
                <div className="py-24">
                    <div className="flex justify-around">
                        <div className="w-1/3">
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
                                <input className="bg-[#D1A054] text-white font-semibold w-full rounded-md py-2 mt-4" type="submit" value="Sign Up" />
                            </form>
                            <p className="text-center text-[#D1A054] font-bold mt-5"><small>Already registered? <Link to="/login">Go to log in</Link></small></p>
                        </div>

                        <div>
                            <img src="https://i.ibb.co/cwkWRWF/authentication2.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;