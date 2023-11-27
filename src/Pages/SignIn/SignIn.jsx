import { Link } from "react-router-dom";

const SignIn = () => {

    const handleSignIn = event => {

    }

    return (
        <div>
            <div className="hero py-28 shadow-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
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

                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054] text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='mx-auto mb-3 text-[#D1A054] font-bold text-xl'><small>New here? <Link to="/signup">Create a New Account</Link></small></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;