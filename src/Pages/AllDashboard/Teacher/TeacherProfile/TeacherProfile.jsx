import useAuth from "../../../../Hooks/useAuth";

const TeacherProfile = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className="hero bg-base-200 mt-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl"><span className="font-bold">Name: </span>{user.displayName}</h1>
                        <p className="text-xl mt-5"><span className="font-bold">Email: </span>{user.email}</p>
                        <p className="text-xl"><span className="font-bold">Phone: </span>013652270845</p>
                        <p className="py-6 text-sm text-justify">Welcome, esteemed teacher! As a facilitator on our platform, you hold the key to inspiring and educating our learners. You have the authority to create and manage classes, where you can share your expertise with eager students. Utilize the dashboard to monitor class progress, review student submissions, and engage in meaningful discussions. Remember, the approval of your classes by the admin will grant students access to your course content. Keep the learning environment vibrant, foster collaboration, and watch your students thrive.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherProfile;

