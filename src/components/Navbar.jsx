import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-white shadow-sm px-10 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-600">BookMyEvent</h1>

            <div className="space-x-8 font-medium">
                <Link to="/">Discover</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/map">Map</Link>
            </div>

            <div className="gap-3 flex">

            <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:scale-105 transition hover:bg-purple-900">
                Login
            </button>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:scale-105 transition hover:bg-purple-900">
                Sign Up
            </button>

            </div>

        </div>
    );
};

export default Navbar;