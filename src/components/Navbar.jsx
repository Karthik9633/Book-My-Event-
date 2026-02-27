import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

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

        <div className="hidden md:flex gap-3 relative">
          {user ? (
            <>
              <div
                onClick={() => setDropdown(!dropdown)}
                className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center cursor-pointer font-bold"
              >
                {user.name.charAt(0).toUpperCase()}
              </div>

              {dropdown && (
                <div className="absolute right-0 top-14 bg-white shadow-lg rounded-xl w-40 py-2">
                  <button
                    onClick={() => {
                      navigate("/mytickets");
                      setDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    My Tickets
                  </button>

                  <button
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/login" className="bg-purple-600 text-white px-5 py-2 rounded-full">
                Login
              </Link>
              <Link to="/signup" className="bg-purple-600 text-white px-5 py-2 rounded-full">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;