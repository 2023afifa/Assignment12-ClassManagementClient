import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Navbar from "../../../../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";

const Requests = () => {
    const axiosPublic = useAxiosPublic();
    const [teacherRequests, setTeacherRequests] = useState([]);

    useEffect(() => {
        axiosPublic.get('/request')
            .then((response) => {
                setTeacherRequests(response.data);
            });
    }, []);

    const { data: requests = [], refetch } = useQuery({
        queryKey: ["requests"],
        queryFn: async () => {
            const res = await axiosPublic.get("/request");
            return res.data;
        }
    });

    const handleAction = (requestId, action) => {
        axiosPublic.patch(`/request/${requestId}`, { action })
            .then((res) => {
                setTeacherRequests((prevRequests) =>
                    prevRequests.map((request) =>
                        request._id === requestId ? { ...request, status: action } : request
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
            <h2 className="text-3xl text-center text-cyan-500 font-semibold mb-5">All Requests</h2>
            <h3 className="text-xl font-bold mb-3">Total Requests: {requests.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Experience</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requests.map((request, index) => <tr key={request._id}>
                                <th>{index + 1}</th>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={request.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <td>{request.name}</td>
                                <td>{request.experience}</td>
                                <td>{request.category}</td>
                                <td>{request.status}</td>
                                <td><button onClick={() => handleAction(request._id, "Approved")} disabled={request.status !== 'pending'} className="btn bg-green-500 text-white">Approve</button></td>
                                <td><button onClick={() => handleAction(request._id, "Rejected")} disabled={request.status !== 'pending'} className="btn bg-red-500 text-white">Reject</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Requests;