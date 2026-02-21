import { useState } from "react";
import { Link } from "react-router-dom";
import 'primeicons/primeicons.css';

const EventCard = ({ event }) => {
    const [saved, setSaved] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">

            {/* IMAGE SECTION */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* CATEGORY BADGE */}
                <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {event.category}
                </span>

                
                <button
                    onClick={() => setSaved(!saved)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                >
                    {saved ? <i className="pi pi-bookmark-fill"></i>:<i className="pi pi-bookmark"></i>}
                </button>
            </div>

            {/* CONTENT SECTION */}
            <div className="p-5">

                {/* TITLE */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition">
                    {event.title}
                </h3>

                {/* DATE */}
                <div className="text-sm text-gray-500 mb-1 flex justify-between">
                    <span>📅 {event.date}</span>
                </div>

                {/* LOCATION */}
                <div className="text-sm text-gray-500 mb-4">
                    📍 {event.location}
                </div>

                {/* PRICE + BUTTON */}
                <div className="flex justify-between items-center">

                    <div>
                        <p className="text-xs text-gray-400 uppercase">
                            Tickets from
                        </p>
                        <p className="text-lg font-bold text-primary">
                            {event.price === 0 ? "Free" : `$${event.price}`}
                        </p>
                    </div>

                    <Link
                        to={`/event/${event.id}`}
                        className="px-4 py-2 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-primary transition"
                    >
                        View Details
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default EventCard;