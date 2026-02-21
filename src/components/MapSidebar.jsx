import { Heart } from "lucide-react";
import { events } from "../data/events";

const categories = ["ALL", "MUSIC", "TECH", "ART", "FOOD"];

const MapSidebar = () => {
  return (
    <aside className="w-[420px] bg-white border-r border-gray-200 flex flex-col">

      {/* HEADER */}
      <div className="p-6 border-b">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">42 Events Nearby</h2>
          <button className="text-sm bg-purple-100 text-purple-600 px-4 py-1 rounded-full font-medium">
            Filters
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`px-4 py-2 text-xs rounded-full font-semibold ${
                index === 0
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* EVENTS LIST */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {events.slice(0, 3).map((event, index) => (
          <div key={event.id} className="bg-white rounded-2xl shadow-sm">

            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="rounded-2xl w-full h-48 object-cover"
              />

              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                <Heart size={18} />
              </button>

              {index === 0 && (
                <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  SELLING FAST
                </span>
              )}

              {event.price === 0 && (
                <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  FREE
                </span>
              )}
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{event.title}</h3>
                <div className="text-right">
                  <p className="font-bold">${event.price}</p>
                  <p className="text-xs text-gray-400">TICKETS</p>
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-1">
                📍 {event.location}
              </p>
              <p className="text-purple-600 text-sm mt-1 font-medium">
                {event.date}
              </p>
            </div>
          </div>
        ))}

      </div>
    </aside>
  );
};

export default MapSidebar;