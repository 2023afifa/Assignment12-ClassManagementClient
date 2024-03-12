import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Teachers = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
    };

    return (
        <div className="my-20 overflow-hidden">
            <h1 className="text-center text-3xl font-bold mb-6">Meet Our Faculty</h1>
            <div className="bg-sky-600 py-10">
                <Slider {...settings}>
                    <div>
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://i.ibb.co/rw9LfX2/teacher1.jpg" alt="Teacher 1" />
                        <h3 className="text-slate-200 text-xl text-center font-semibold mt-2">Emily</h3>
                        <p className="text-slate-200 text-center">Head of Marketing</p>
                    </div>
                    <div>
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://i.ibb.co/NZxd02m/teacher2.jpg" alt="Teacher 2" />
                        <h3 className="text-slate-200 text-xl text-center font-semibold mt-2">Olivia</h3>
                        <p className="text-slate-200 text-center">Lead Graphic Designer</p>
                    </div>
                    <div>
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://i.ibb.co/HzmRJT8/teacher3.jpg" alt="Teacher 3" />
                        <h3 className="text-slate-200 text-xl text-center font-semibold mt-2">James</h3>
                        <p className="text-slate-200 text-center">Literature Department Chair</p>
                    </div>
                    <div>
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://i.ibb.co/mB8q8hM/teacher4.jpg" alt="Teacher 4" />
                        <h3 className="text-slate-200 text-xl text-center font-semibold mt-2">Michael</h3>
                        <p className="text-slate-200 text-center">Data Science Lead Instructor</p>
                    </div>
                    <div>
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://i.ibb.co/FYyp7wB/teacher5.jpg" alt="Teacher 5" />
                        <h3 className="text-slate-200 text-xl text-center font-semibold mt-2">Benjamin</h3>
                        <p className="text-slate-200 text-center">Web Development Manager</p>
                    </div>
                    <div>
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://i.ibb.co/yyK2cPW/teacher6.jpg" alt="Teacher 6" />
                        <h3 className="text-slate-200 text-xl text-center font-semibold mt-2">Sophia</h3>
                        <p className="text-slate-200 text-center">Mathematics Department Head</p>
                    </div>
                    <div>
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://i.ibb.co/LgzF0fZ/teacher7.jpg" alt="Teacher 7" />
                        <h3 className="text-slate-200 text-xl text-center font-semibold mt-2">Ava</h3>
                        <p className="text-slate-200 text-center">Business Management Director</p>
                    </div>
                    <div>
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://i.ibb.co/jf44CXb/teacher8.jpg" alt="Teacher 8" />
                        <h3 className="text-slate-200 text-xl text-center font-semibold mt-2">Alexander</h3>
                        <p className="text-slate-200 text-center">Creative Writing Program Coordinator</p>
                    </div>
                    <div>
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://i.ibb.co/HNzcc8q/teacher9.jpg" alt="Teacher 9" />
                        <h3 className="text-slate-200 text-xl text-center font-semibold mt-2">William</h3>
                        <p className="text-slate-200 text-center">Digital Marketing Specialist</p>
                    </div>
                    <div>
                        <img className="h-40 w-40 rounded-full mx-auto" src="https://i.ibb.co/1JnLTYn/teacher10.jpg" alt="Teacher 10" />
                        <h3 className="text-slate-200 text-xl text-center font-semibold mt-2">Ethan</h3>
                        <p className="text-slate-200 text-center">Machine Learning Lead Instructor</p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Teachers;