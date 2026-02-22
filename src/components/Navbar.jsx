import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-white shadow-md px-4 sm:px-6 lg:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-purple-600">BookMyEvent</h1>

            <div className="hidden md:flex space-x-6 lg:space-x-8 font-medium text-sm lg:text-base">
                <Link to="/">Discover</Link>
                <Link to="/search">Events</Link>
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