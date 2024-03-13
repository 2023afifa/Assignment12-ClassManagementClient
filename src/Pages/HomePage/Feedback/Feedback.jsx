import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    const Feedback = () => {
        return (
            <div className="my-20 mx-5 md:mx-10 lg:mx-40">
                <h3 className="text-center text-3xl font-bold mb-3">Feedback from Our Students</h3>
                <Slider {...settings}>
                    <div className="bg-sky-600 text-slate-200">
                        <div className="max-w-xs md:max-w-xl lg:max-w-3xl mx-auto py-14">
                            <p className="text-justify">I'm amazed by the comprehensive Web Development courses on this platform. The hands-on projects provided me with valuable practical experience. The instructors are knowledgeable and supportive. I highly recommend it to anyone looking to enhance their coding skills.</p>
                            <h1 className="text-xl font-bold text-end">- John Smith</h1>
                        </div>
                    </div>
                    <div className="bg-sky-600 text-slate-200">
                        <div className="max-w-xs md:max-w-xl lg:max-w-3xl mx-auto py-14">
                            <p className="text-justify">Digital Marketing courses here are outstanding! The content is up-to-date, and the interactive quizzes made learning fun. The community is friendly, and the responsive support team promptly addressed my queries. Great platform for aspiring marketers!</p>
                            <h1 className="text-xl font-bold text-end">- Emily Davis</h1>
                        </div>
                    </div>
                    <div className="bg-sky-600 text-slate-200">
                        <div className="max-w-xs md:max-w-xl lg:max-w-3xl mx-auto py-14">
                            <p className="text-justify">I enrolled in the Graphic Design program, and I'm thrilled with the creative projects and challenges. The platform's user-friendly interface makes navigation a breeze. The feedback from instructors is constructive and motivates me to refine my design skills.</p>
                            <h1 className="text-xl font-bold text-end">- Alex Rodriguez</h1>
                        </div>
                    </div>
                    <div className="bg-sky-600 text-slate-200">
                        <div className="max-w-xs md:max-w-xl lg:max-w-3xl mx-auto py-14">
                            <p className="text-justify">Data Science courses provided a structured and clear learning path. The instructors explain complex concepts in an accessible way. The real-world applications and case studies helped me grasp the practical side of data science. I'm delighted with my learning experience.</p>
                            <h1 className="text-xl font-bold text-end">- Sophie Chen</h1>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    };

    return <Feedback></Feedback>;
}