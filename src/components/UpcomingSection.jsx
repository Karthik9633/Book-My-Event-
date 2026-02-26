import { useState } from "react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

const UpcomingSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextEvents = () => {
    if (startIndex + itemsPerPage < events.length) {
      setStartIndex((prev) => prev + itemsPerPage);
    }
  };

  const prevEvents = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex((prev) => prev - itemsPerPage);
    }
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled =
    startIndex + itemsPerPage >= events.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-20">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Upcoming Events
          </h2>
          <p className="text-gray-500 text-sm">
            Handpicked events happening in your city
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">

          <button
            onClick={prevEvents}
            disabled={isPrevDisabled}
            className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm transition text-xl
              ${
                isPrevDisabled
                  ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            ‹
          </button>

          <button
            onClick={nextEvents}
            disabled={isNextDisabled}
            className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm transition text-xl
              ${
                isNextDisabled
                  ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            ›
          </button>

        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events
          .slice(startIndex, startIndex + itemsPerPage)
          .map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
      </div>

      {/* Load More */}
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