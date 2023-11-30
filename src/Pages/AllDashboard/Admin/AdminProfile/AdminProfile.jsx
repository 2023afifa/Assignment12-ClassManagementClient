import useAuth from "../../../../Hooks/useAuth";

const AdminProfile = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className="hero bg-base-200 mt-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl"><span className="font-bold">Name: </span>{user.displayName}</h1>
                        <p className="text-2xl"><span className="font-bold">Email: </span>{user.email}</p>
                        <p className="text-2xl"><span className="font-bold">Phone: </span>013652270845</p>
                        <p className="py-6 text-sm text-justify">As an admin, you wield extensive control and influence within our platform. Your responsibilities include managing user accounts, overseeing class requests, and ensuring the smooth functioning of our educational ecosystem. You have the authority to review and approve class submissions, thereby shaping the content available to our learners. Monitoring user interactions and addressing queries or concerns is also within your purview. With access to analytics and reporting tools, you can derive insights into user engagement and platform performance. Additionally, as an admin, you have the ability to send system-wide announcements, enforce policy compliance, and facilitate communication between users. Your role is pivotal in maintaining a positive and secure learning environment, and your decisions contribute significantly to the overall success and growth of our educational community.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;