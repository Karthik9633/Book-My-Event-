import { Search, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative bg-black">
            <div
                className="h-[600px] bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2')",
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 text-center text-white">

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        Discover experiences <br />
                        that <span className="text-purple-500 italic">move you.</span>
                    </h1>


                    <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                        Find the best local events, workshops, and concerts curated just for you.
                    </p>


                    <div className="mt-10 bg-white rounded-full shadow-2xl p-3 flex flex-col md:flex-row items-center gap-3 max-w-4xl mx-auto">


                        <div className="flex items-center gap-2 px-4 flex-1 text-gray-600">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="What's the occasion?"
                                className="w-full outline-none"
                            />
                        </div>


                        <div className="hidden md:block h-8 w-px bg-gray-200" />


                        <div className="flex items-center gap-2 px-4 flex-1 text-gray-600">
                            <MapPin size={18} />
                            <input
                                type="text"
                                placeholder="Near me"
                                className="w-full outline-none"
                            />
                        </div>


                        <div className="hidden md:block h-8 w-px bg-gray-200" />


                        <div className="flex items-center gap-2 px-4 flex-1 text-gray-600">
                            <Calendar size={18} />
                            <input
                                type="text"
                                placeholder="When?"
                                className="w-full outline-none"
                            />
                        </div>


                        <Link
                            to="/search"
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
                        >
                            Search
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;