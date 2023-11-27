import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Partners></Partners>
            <PopularClasses></PopularClasses>
            <Footer></Footer>
        </div>
    );
};

export default Home;