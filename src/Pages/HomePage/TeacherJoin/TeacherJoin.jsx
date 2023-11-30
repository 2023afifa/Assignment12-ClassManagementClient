import { Link } from "react-router-dom";

const TeacherJoin = () => {
    return (
        <div className="mb-20">
            <div className="hero bg-slate-50">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/rQdCVwb/Instructor.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Become An Instructor</h1>
                        <p className="py-6">Unlock the opportunity to share your expertise and passion with eager learners around the globe. Join our esteemed community of educators dedicated to shaping the next generation of professionals. As a teacher, you have the freedom to craft engaging courses in Web Development, Digital Marketing, Graphic Design, Data Science, and Language Learning. Showcase your skills, connect with a diverse audience, and make a lasting impact on the learning journey of others. Empower individuals to acquire new skills and achieve their goals. Join us on this educational adventure as we create a space for knowledge exchange and skill enhancement</p>
                        <Link to="/request"><button className="btn bg-cyan-500 text-white normal-case">Start Teaching Today</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherJoin;