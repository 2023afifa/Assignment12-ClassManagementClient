import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Feedback from "../Feedback/Feedback";
import Partners from "../Partners/Partners";
import PopularClasses from "../PopularClasses/PopularClasses";
import TeacherJoin from "../TeacherJoin/TeacherJoin";
import Teachers from "../Teachers/Teachers";
import Total from "../Total/Total";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Feedback></Feedback>
            <Total></Total>
            <TeacherJoin></TeacherJoin>
            <Teachers></Teachers>
            <Discount></Discount>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;