import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { signIn, logInUserGoogle } = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setErrorMessage("");


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User logged in successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }

    const handleGoogleLogIn = () => {
        logInUserGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero">
                <div className="hero-content py-10 flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter password" className="input input-bordered" required />
                            </div>
                            {
                                errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                            }

                            <div className="form-control mt-6">
                                <input className="btn bg-cyan-500 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center pb-3">Login with <a onClick={handleGoogleLogIn} className="font-bold">Google</a></p>
                        <p className='mx-auto mb-5 text-cyan-500 font-bold text-xl'><small>New here? <Link to="/signup">Create a New Account</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;