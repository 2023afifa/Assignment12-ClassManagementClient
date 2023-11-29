import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Classes = () => {
    const axiosPublic = useAxiosPublic();
    const [classRequests, setClassRequests] = useState([]);

    useEffect(() => {
        axiosPublic.get('/addclass')
            .then((response) => {
                setClassRequests(response.data);
            });
    }, []);

    const { data: classes = [], refetch } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
            const res = await axiosPublic.get("/addclass");
            return res.data;
        }
    });

    const handleAction = (requestId, action) => {
        axiosPublic.patch(`/addclass/${requestId}`, { action })
            .then((res) => {
                setClassRequests((prevRequests) =>
                    prevRequests.map((request) =>
                        request._id === requestId ? { ...request, classStatus: action } : request
                    )
                );
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    return (
        <div>
            <h2 className="text-3xl text-center text-cyan-500 font-semibold mb-5">All Class Request</h2>
            <h3 className="text-xl font-bold mb-3">Total Class Requests: {classes.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Reject</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <td>{user.title}</td>
                                <td>{user.description}</td>
                                <td>{user.email}</td>
                                <td>{user.classStatus}</td>
                                <td><button onClick={() => handleAction(user._id, "Accepted")} disabled={user.classStatus !== 'pending'} className="btn bg-green-500 text-white">Approve</button></td>
                                <td><button onClick={() => handleAction(user._id, "Rejected")} disabled={user.classStatus !== 'pending'} className="btn bg-red-500 text-white">Reject</button></td>
                                <td><button disabled={user.classStatus !== 'Accepted'} className="btn bg-cyan-500 text-white">See Progress</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Classes;