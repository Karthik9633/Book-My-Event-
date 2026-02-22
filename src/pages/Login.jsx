import { Eye, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* LEFT SIDE IMAGE */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Event"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700/80 to-purple-900/90 flex flex-col justify-center p-16 text-white">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            🎉 BookMyEvent
          </h2>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Connect with the heartbeat of your city.
          </h1>

          <p className="text-lg opacity-90 mb-10">
            Join thousands of people discovering local concerts, tech meetups,
            and art exhibits every day.
          </p>

          <div className="flex items-center gap-4">
            <div className="bg-white text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              12k+
            </div>
            <span>Already attending events this weekend</span>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 bg-gray-50">
        <div className="w-full max-w-md">

          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-gray-500 mb-8">
            Please enter your details to sign in to your account.
          </p>

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
          <div className="mb-3">
            <div className="flex justify-between">
              <label className="text-sm font-medium">Password</label>
              <span className="text-purple-600 text-sm cursor-pointer">
                Forgot Password?
              </span>
            </div>

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

          {/* CHECKBOX */}
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
            <input type="checkbox" className="accent-purple-600" />
            Stay signed in for 30 days
          </div>

          {/* BUTTON */}
          <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-full font-semibold shadow-lg hover:opacity-95 transition">
            Sign In →
          </button>

          {/* SOCIAL */}
          <div className="my-6 text-center text-gray-400 text-sm">
            Or continue with
          </div>

          <div className="flex gap-4">
            <button className="flex-1 border rounded-full py-3 bg-white">
              Google
            </button>
            <button className="flex-1 border rounded-full py-3 bg-white">
              Apple
            </button>
          </div>

          <p className="text-center mt-8 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-600 font-medium">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;