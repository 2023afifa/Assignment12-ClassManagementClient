import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Footer from "../../Shared/Footer/Footer";

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
            <div className="bg-sky-200 py-24">
                <div className="w-2/5 mx-auto shadow-2xl">
                    <div className="hero py-20" style={{ backgroundImage: 'url(https://i.ibb.co/48q2pc1/login.jpg)' }}>
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <h2 className="text-4xl font-bold text-slate-50">Welcome Back!!!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-100">
                        <p className='text-center text-sky-700 font-bold pt-3'>New here? <Link to="/signup" className="underline hover:text-sky-600">SIGN UP</Link></p>
                        <form onSubmit={handleSignIn} className="card-body py-0">
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter email" className="input rounded" required />
                            </div>
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter password" className="input rounded" required />
                            </div>
                            {
                                errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                            }

                            <div className="form-control">
                                <input className="bg-sky-700 text-slate-200 font-semibold w-full rounded py-2 hover:bg-sky-600" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="divider mx-8">OR</div>
                        <div className="mx-8 pb-10">
                            <button onClick={handleGoogleLogIn} className="btn btn-outline normal-case rounded text-sky-700 w-full">Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignIn;