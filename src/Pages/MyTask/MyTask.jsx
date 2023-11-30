import { useLoaderData } from "react-router-dom";

const MyTask = () => {
    const assignDetail = useLoaderData();
    console.log(assignDetail);

    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-10">Your Assignments</h2>
        </div>
    );
};

export default MyTask;