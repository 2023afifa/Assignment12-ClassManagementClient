import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Total = () => {





    return (
        <div className="my-20">
            <h3 className="text-center text-3xl font-semibold mb-3">Course Statistics</h3>
            <div className="text-center">
                <div className="stats stats-vertical lg:stats-horizontal shadow bg-sky-600 text-slate-200 w-[800px] h-40">
                    <div className="stat">
                        <div className="text-2xl">Users</div>
                        <div className="stat-value">1K+</div>
                    </div>

                    <div className="stat">
                        <div className="text-2xl">Courses</div>
                        <div className="stat-value">78</div>
                    </div>

                    <div className="stat">
                        <div className="text-2xl">Enrollment</div>
                        <div className="stat-value">752</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;



// const axiosPublic = useAxiosPublic();
// const { data: users = [] } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//         const res = await axiosPublic.get("/user");
//         return res.data;
//     }
// });
// const { data: courses = [] } = useQuery({
//     queryKey: ["courses"],
//     queryFn: async () => {
//         const res = await axiosPublic.get("/addclass");
//         return res.data;
//     }
// });