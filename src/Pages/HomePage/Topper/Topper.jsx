const Topper = () => {
    return (
        <div className="mb-20 mx-10">
            <h3 className="text-center text-3xl font-semibold mb-6">Our Top Students</h3>
            <div className="grid lg:grid-cols-3 gap-10">
                <div className="w-96 mx-auto">
                    <img className="h-[500px] mx-auto" src="https://i.ibb.co/sHZPr1Z/stdn1.jpg" alt="" />
                    <p className="mt-3 text-justify text-neutral-400">Being named the top Web Development student is both an honor and a testament to the quality of the courses. The hands-on projects challenged and inspired me, making the learning journey truly rewarding. Thanks to the excellent instructors and interactive curriculum, I now feel confident in my coding abilities.</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold mt-2">Mitchell</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold">Top Web Development Student</p>
                </div>
                <div className="w-96 mx-auto">
                    <img className="h-[500px] w-[350px] mx-auto" src="https://i.ibb.co/myMN4n5/stdn3.jpg" alt="" />
                    <p className="mt-3 text-justify text-neutral-400">I'm thrilled to be acknowledged as the top Graphic Design student. The creative challenges and real-world projects allowed me to refine my design skills. The guidance from experienced instructors and the vibrant community made this learning journey truly remarkable. Thank you for the opportunity to excel in graphic design.</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold mt-2">Emma Rodriguez</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold"> Exceptional Graphic Design Achiever</p>
                </div>
                <div className="w-96 mx-auto">
                    <img className="h-[500px] w-[350px] mx-auto" src="https://i.ibb.co/X8TP505/stdn2.jpg" alt="" />
                    <p className="mt-3 text-justify text-neutral-400">Receiving recognition as the top Digital Marketing student is incredibly gratifying. The courses equipped me with the latest strategies and tools, enabling me to navigate the dynamic landscape of digital marketing. I'm grateful for the support and knowledge this platform has provided.</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold mt-2">Daniel Liu</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold">Outstanding Digital Marketing Performer</p>
                </div>
            </div>
        </div>
    );
};

export default Topper;