import { Link } from "react-router";

const Unauthorized = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-20">Unauthorized Access</h1>
            <p className="text-center mt-4">You do not have permission to view this page.</p>
            <Link to="/" className="text-blue-500 hover:underline block text-center mt-6">Go to Home Page</Link>
        </div>
    );
};

export default Unauthorized;