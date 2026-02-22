import { Eye, Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* LEFT SIDE IMAGE */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
          alt="Event"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700/80 to-purple-900/90 flex flex-col justify-center p-16 text-white">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            🎉 BookMyEvent
          </h2>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Discover the pulse of your city.
          </h1>

          <p className="text-lg opacity-90 mb-10">
            Join a community of enthusiasts and never miss out on the most
            exciting local events.
          </p>

          <div className="flex items-center gap-4">
            <div className="bg-white text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              10k+
            </div>
            <span>Joined by over 10,000 local event lovers</span>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 bg-gray-50">
        <div className="w-full max-w-md">

          <h1 className="text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-gray-500 mb-8">
            Start exploring events happening near you today.
          </p>

          {/* FULL NAME */}
          <div className="mb-5">
            <label className="text-sm font-medium">Full Name</label>
            <div className="flex items-center border rounded-full px-4 py-3 mt-2 bg-white">
              <User size={18} className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="text-sm font-medium">Email Address</label>
            <div className="flex items-center border rounded-full px-4 py-3 mt-2 bg-white">
              <Mail size={18} className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="text-sm font-medium">Password</label>
            <div className="flex items-center border rounded-full px-4 py-3 mt-2 bg-white">
              <Lock size={18} className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full outline-none bg-transparent"
              />
              <Eye size={18} className="text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* TERMS */}
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
            <input type="checkbox" className="accent-purple-600" />
            I agree to the{" "}
            <span className="text-purple-600">Terms of Service</span>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-full font-semibold shadow-lg">
            Create Account
          </button>

          <div className="my-6 text-center text-gray-400 text-sm">
            Or sign up with
          </div>

          <div className="flex gap-4">
            <button className="flex-1 border rounded-full py-3 bg-white">
              Google
            </button>
            <button className="flex-1 border rounded-full py-3 bg-white">
              Facebook
            </button>
          </div>

          <p className="text-center mt-8 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;