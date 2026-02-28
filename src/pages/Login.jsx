import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import 'primeicons/primeicons.css';
import { useEffect } from "react";
import { useToast } from "../context/ToastContext"


const Login = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const { showToast } = useToast()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const { login } = useAuth();
  const navigate = useNavigate();

  // 🔹 VALIDATION (UNCHANGED)
  const validate = (field, value) => {
    let newErrors = { ...errors };

    if (field === "email") {
      if (!value) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Enter a valid email address";
      } else {
        delete newErrors.email;
      }
    }

    if (field === "password") {
      if (!value) {
        newErrors.password = "Password is required";
      } else if (value.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      } else {
        delete newErrors.password;
      }
    }

    setErrors(newErrors);
  };

  const isFormValid =
    email &&
    password &&
    !errors.email &&
    !errors.password;

  // 🔥 ONLY LOGIC ADDED
  const handleSubmit = () => {
    if (!isFormValid) return;

    const success = login(email, password);

    if (success) {
      showToast("Login Successful 🎉", "success");
      navigate("/");
    } else {
      showToast("Invalid Email or Password ❌", "error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

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
            Join thousands discovering local concerts and events.
          </p>

          <div className="flex items-center gap-4">
            <div className="bg-white text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              12k+
            </div>
            <span>Already attending events this weekend</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-16 bg-gray-50">
        <div className="w-full max-w-md">

          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-gray-500 mb-8">
            Please enter your details to sign in.
          </p>

          <div className="mb-5">
            <label className="text-sm font-medium">Email Address</label>
            <div className="flex items-center border rounded-full px-4 py-3 mt-2 bg-white">
              <Mail size={18} className="text-gray-400 mr-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validate("email", e.target.value);
                }}
                placeholder="name@example.com"
                className="w-full outline-none bg-transparent"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-2 ml-2">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium">Password</label>
            <div className="flex items-center border rounded-full px-4 py-3 mt-2 bg-white">
              <Lock size={18} className="text-gray-400 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validate("password", e.target.value);
                }}
                placeholder="••••••••"
                className="w-full outline-none bg-transparent"
              />
              {showPassword ? (
                <EyeOff size={18} onClick={() => setShowPassword(false)} />
              ) : (
                <Eye size={18} onClick={() => setShowPassword(true)} />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-2 ml-2">
                {errors.password}
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-full font-semibold shadow-lg transition ${!isFormValid
              ? "opacity-50 cursor-not-allowed"
              : "hover:opacity-95"
              }`}
          >
            Sign In →
          </button>

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