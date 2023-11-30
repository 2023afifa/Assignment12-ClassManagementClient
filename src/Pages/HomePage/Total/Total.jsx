import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Total = () => {
    const axiosPublic = useAxiosPublic();

    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosPublic.get("/user");
            return res.data;
        }
    });


    const { data: courses = [] } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const res = await axiosPublic.get("/addclass");
            return res.data;
        }
    });



    return (
        <div className="mb-20">
            <h3 className="text-center text-3xl font-semibold mb-6">Course Statistics</h3>
            <div className="hero bg-slate-50">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img className="w-3/5" src="https://i.ibb.co/L8tLnGF/total.jpg" />
                    <div>
                        <h1 className="text-4xl font-bold text-cyan-700">Total Users: {users.length}</h1>
                        <h1 className="text-4xl font-bold text-cyan-700">Total Course: {courses.length}</h1>
                        <h1 className="text-4xl font-bold text-cyan-700">Total Enrollment: 48</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;