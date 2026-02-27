import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext"; // ✅ added

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [terms, setTerms] = useState(false);
    const [errors, setErrors] = useState({});

    const { signup } = useAuth(); // ✅ added
    const navigate = useNavigate(); // ✅ added

    const validate = (field, value) => {
        let newErrors = { ...errors };

        if (field === "name") {
            if (!value.trim()) {
                newErrors.name = "Full name is required";
            } else if (value.trim().length < 5) {
                newErrors.name = "Name must be at least 5 characters";
            } else {
                delete newErrors.name;
            }
        }

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
            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (!value) {
                newErrors.password = "Password is required";
            } else if (!passwordRegex.test(value)) {
                newErrors.password =
                    "Password must be 8+ characters and include uppercase, lowercase, number & special character";
            } else {
                delete newErrors.password;
            }
        }

        if (field === "terms") {
            if (!value) {
                newErrors.terms = "You must agree to the Terms of Service";
            } else {
                delete newErrors.terms;
            }
        }

        setErrors(newErrors);
    };

    const isFormValid =
        name &&
        email &&
        password &&
        terms &&
        !errors.name &&
        !errors.email &&
        !errors.password &&
        !errors.terms;

    // ✅ ONLY THIS LOGIC ADDED
    const handleSignup = () => {
        if (!isFormValid) return;

        signup(name, email, password); // store user
        navigate("/"); // redirect to home
    };

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
                        Join a community of enthusiasts and never miss out on the most exciting local events.
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
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    validate("name", e.target.value);
                                }}
                                placeholder="John Doe"
                                className="w-full outline-none bg-transparent"
                            />
                        </div>
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-2 ml-2">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* EMAIL */}
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

                    {/* PASSWORD */}
                    <div className="mb-4">
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
                                <EyeOff size={18} className="cursor-pointer" onClick={() => setShowPassword(false)} />
                            ) : (
                                <Eye size={18} className="cursor-pointer" onClick={() => setShowPassword(true)} />
                            )}
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-2 ml-2">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* TERMS */}
                    <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            checked={terms}
                            onChange={(e) => {
                                setTerms(e.target.checked);
                                validate("terms", e.target.checked);
                            }}
                            className="accent-purple-600"
                        />
                        I agree to the{" "}
                        <span className="text-purple-600">Terms of Service</span>
                    </div>
                    {errors.terms && (
                        <p className="text-red-500 text-xs mb-4 ml-2">
                            {errors.terms}
                        </p>
                    )}

                    {/* ONLY onClick ADDED */}
                    <button
                        onClick={handleSignup}
                        disabled={!isFormValid}
                        className={`w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-full font-semibold shadow-lg transition ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        Create Account
                    </button>

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