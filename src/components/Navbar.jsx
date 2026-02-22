import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">

      <div className="px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-purple-600">
          BookMyEvent
        </h1>

        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/">Discover</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/map">Map</Link>
        </div>

        
        <div className="hidden md:flex gap-3">
          <Link to="/login" className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Login
          </Link>
          <Link to="/signup" className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Sign Up
          </Link>
        </div>

       
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>


      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 bg-white shadow-lg">

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-medium"
          >
            Discover
          </Link>

          <Link
            to="/calendar"
            onClick={() => setIsOpen(false)}
            className="font-medium"
          >
            Calendar
          </Link>

          <Link
            to="/map"
            onClick={() => setIsOpen(false)}
            className="font-medium"
          >
            Map
          </Link>

         <Link to="/login"> <button className=" w-full bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Login
          </button></Link>

          <Link to="/signup"> <button className="w-full bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Sign Up
          </button></Link> 

        </div>
      </div>

    </nav>
  );
};

export default Navbar;