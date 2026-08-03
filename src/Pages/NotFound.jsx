import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-5">
            <h1 className="text-8xl font-bold text-red-500">404</h1>
            <h2 className="text-3xl font-semibold mt-5">Page Not Found</h2>
            <p className="text-gray-600 mt-3 mb-5">Sorry, the page you are looking for doesn't exist. </p>
            <Link to="/" className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition">Back to Home</Link>
        </div>
    );
};

export default NotFound;