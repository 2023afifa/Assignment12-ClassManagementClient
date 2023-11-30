import useAuth from "../../../../Hooks/useAuth";

const StudentProfile = () => {
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
                        <p className="py-6 text-sm text-justify">Welcome to our learning platform! As a student, you have a world of knowledge at your fingertips. Dive into courses across various categories, including Web Development, Digital Marketing, Graphic Design, Data Science, and Language Learning. Our platform is designed to empower you on your learning journey. Explore cutting-edge technologies, master new skills, and connect with a community of learners passionate about growth. Engage in hands-on projects, interact with experienced instructors, and track your progress seamlessly. Whether you are a beginner or looking to enhance your expertise, there is a course tailored for you. Let the journey to knowledge and skill mastery begin!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;