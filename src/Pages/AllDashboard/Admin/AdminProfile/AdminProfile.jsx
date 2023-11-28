import useAuth from "../../../../Hooks/useAuth";

const AdminProfile = () => {
    const { user } = useAuth();

    return (
        <div>
            <h2 className="text-3xl text-center text-cyan-500 font-semibold mb-5">Admin Profile</h2>
            <div className="flex justify-center items-center gap-20">
                <div className="font-bold text-3xl">
                    <h3>Name: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                </div>
                <img className="w-2/5" src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default AdminProfile;