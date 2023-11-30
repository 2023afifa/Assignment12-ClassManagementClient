import { useForm } from "react-hook-form";
import Navbar from "../../Shared/Navbar/Navbar";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SeeDetails = () => {
    const assignDetail = useLoaderData();
    const { _id, title } = assignDetail;
    console.log(assignDetail);

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        console.log(data);
        const taskInfo = {
            title: data.title,
            task: data.task,
            deadline: data.deadline,
        }
        axiosPublic.post("/assignment", taskInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log("Assignment");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Assignment Created",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-3xl font-semibold my-10">Class Progress and Assignment</h2>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8">
                        <h3 className="font-semibold">Title</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" defaultValue={title} {...register("title", { required: true })} name="title" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Task</h3>
                        <input className="w-full p-2 border-2 rounded" type="text" {...register("task", { required: true })} name="task" placeholder="Type here" id="" />
                    </div>
                    <div className="mb-8">
                        <h3 className="font-semibold">Deadline</h3>
                        <input className="w-full p-2 border-2 rounded" type="date" {...register("deadline", { required: true })} name="deadline" placeholder="Type here" id="" />
                    </div>
                    <input className="bg-cyan-500 text-white font-semibold w-full rounded-md py-2 mt-4" type="submit" value="Create" />
                </form>
            </div>
        </div>
    );
};

export default SeeDetails;