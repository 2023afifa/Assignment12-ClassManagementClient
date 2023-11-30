import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://class-management-server-seven.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;