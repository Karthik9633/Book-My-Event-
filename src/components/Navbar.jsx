import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext"; // ✅ added

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); // ✅ added

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-2">

      <div className="px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-purple-600">
          BookMyEvent
        </h1>

        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/">Discover</Link>
          <Link to="/search">Events</Link>
          <Link to="/map">Map</Link>
          <Link to="/favorites">My Favorites</Link>
        </div>

        {/* ✅ AUTH SECTION UPDATED */}
        <div className="hidden md:flex gap-3 items-center">

          {!user ? (
            <>
              <Link to="/login" className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
                Login
              </Link>
              <Link to="/signup" className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              {/* Profile Circle */}
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
                {user.name?.charAt(0).toUpperCase()}
              </div>

              {/* Logout Button */}
              <button
                onClick={logout}
                className="bg-gray-200 px-5 py-2 rounded-full hover:bg-gray-300 transition"
              >
                Logout
              </button>
            </>
          )}

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 bg-white shadow-lg">

          <Link to="/" onClick={() => setIsOpen(false)} className="font-medium">
            Discover
          </Link>

          <Link to="/calendar" onClick={() => setIsOpen(false)} className="font-medium">
            Calendar
          </Link>

          <Link to="/map" onClick={() => setIsOpen(false)} className="font-medium">
            Map
          </Link>

          {!user ? (
            <>
              <Link to="/login">
                <button className="w-full bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="w-full bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium">{user.name}</span>
              </div>

              <button
                onClick={logout}
                className="w-full bg-red-700 text-white px-5 py-2 rounded-full hover:bg-gray-300 transition"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>

    </nav>
  );
};

export default Navbar;