const PopularClasses = () => {
    return (
        <div className="mb-20">
            <h3 className="text-center text-3xl font-semibold mb-6">Our Popular Classes</h3>
            <div className="grid lg:grid-cols-3 gap-5">
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://i.ibb.co/1qhc5hC/course18.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Digital Marketing Masterclass
                            <div className="badge badge-secondary">Popular</div>
                        </h2>
                        <p>Learn the latest strategies in digital marketing and SEO</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Digital</div>
                            <div className="badge badge-outline">Marketing</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://i.ibb.co/n1mxRLj/course5.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Graphic Design for Beginners
                            <div className="badge badge-secondary">Popular</div>
                        </h2>
                        <p>Start your journey in graphic design with this beginner-friendly course</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Graphic</div>
                            <div className="badge badge-outline">Design</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://i.ibb.co/F5cCvBj/course10.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Advanced French Conversation
                            <div className="badge badge-secondary">Popular</div>
                        </h2>
                        <p>Enhance your French language skills with advanced conversation technique</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Language</div>
                            <div className="badge badge-outline">French</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;