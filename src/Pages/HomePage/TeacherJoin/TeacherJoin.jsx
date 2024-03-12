import { Link } from "react-router-dom";

const TeacherJoin = () => {
    return (
        <div className="my-20">
            <div className="hero py-20" style={{ backgroundImage: 'url(https://i.ibb.co/fDDcW6w/instructor.jpg)' }}>
                <div className="hero-overlay bg-opacity-30 max-w-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl text-slate-100 font-bold">Become An Instructor</h1>
                        <p className="mb-5 font-bold">Unlock the opportunity to share your expertise and passion with eager learners around the globe. Join our esteemed community of educators dedicated to shaping the next generation of professionals. As a teacher, you have the freedom to craft engaging courses in Web Development, Digital Marketing, Graphic Design, Data Science, and Language Learning. Showcase your skills, connect with a diverse audience, and make a lasting impact on the learning journey of others. Empower individuals to acquire new skills and achieve their goals. Join us on this educational adventure as we create a space for knowledge exchange and skill enhancement. </p>
                        <Link to="/request">
                            <button className="btn bg-sky-600 border-none text-white normal-case hover:bg-sky-700">Start Teaching Today</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherJoin;