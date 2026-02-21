import { useState } from "react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

const UpcomingSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextEvents = () => {
    if (startIndex + itemsPerPage < events.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevEvents = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-10 mb-20">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        {/* Left Title */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Upcoming Events
          </h2>
          <p className="text-gray-500 text-sm">
            Handpicked events happening in your city
          </p>
        </div>

        {/* Right Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prevEvents}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm hover:bg-gray-100 transition"
          style={{ fontSize: '1.5rem' }}>
            ‹
          </button>

          <button
            onClick={nextEvents}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm hover:bg-gray-100 transition"
          style={{ fontSize: '1.5rem' }}>
            ›
          </button>
        </div>

      </div>

      {/* Events Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.slice(startIndex, startIndex + itemsPerPage).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/search"
          className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition text-sm font-medium"
        >
          Load More Events
        </Link>
      </div>

    </div>
  );
};

export default UpcomingSection;