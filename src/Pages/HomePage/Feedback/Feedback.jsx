const Feedback = () => {
    return (
        <div className="mb-20">
            <h3 className="text-center text-3xl font-semibold mb-6">Feedback</h3>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/kcjMrjp/course22.jpg)' }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl font-bold">John Smith</h1>
                        <p className="mb-10">I'm amazed by the comprehensive Web Development courses on this platform. The hands-on projects provided me with valuable practical experience. The instructors are knowledgeable and supportive. I highly recommend it to anyone looking to enhance their coding skills.</p>
                        <h1 className="mb-5 text-3xl font-bold">Emily Davis</h1>
                        <p className="mb-10">Digital Marketing courses here are outstanding! The content is up-to-date, and the interactive quizzes made learning fun. The community is friendly, and the responsive support team promptly addressed my queries. Great platform for aspiring marketers!</p>
                        <h1 className="mb-5 text-3xl font-bold">Alex Rodriguez</h1>
                        <p className="mb-10">I enrolled in the Graphic Design program, and I'm thrilled with the creative projects and challenges. The platform's user-friendly interface makes navigation a breeze. The feedback from instructors is constructive and motivates me to refine my design skills.</p>
                        <h1 className="mb-5 text-3xl font-bold">Sophie Chen</h1>
                        <p className="mb-10">Data Science courses provided a structured and clear learning path. The instructors explain complex concepts in an accessible way. The real-world applications and case studies helped me grasp the practical side of data science. I'm delighted with my learning experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;