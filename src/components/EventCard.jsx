import { Link } from "react-router-dom";
import "primeicons/primeicons.css";
import { useFavorites } from "../context/FavoritesContext";

const EventGridCard = ({ event }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const saved = isFavorite(event.id);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">

      {/* IMAGE SECTION */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />

        {/* CATEGORY BADGE */}
        <span className="absolute bottom-3 left-3 bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full font-semibold">
          {event.category}
        </span>

        {/* HEART BUTTON */}
        <button
          onClick={() => toggleFavorite(event)}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          {saved ? (
            <i className="pi pi-heart-fill text-red-500"></i>
          ) : (
            <i className="pi pi-heart text-gray-700"></i>
          )}
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h3 className="font-bold text-lg mb-2">
          {event.title}
        </h3>

        <p className="text-sm text-gray-500">
          {event.date}
        </p>

        <p className="text-sm text-gray-500 mb-4">
          {event.location}
        </p>

        <div className="flex justify-between items-center">

          {/* PRICE */}
          <div>
            <p className="text-xs text-gray-400">Tickets from</p>
            <p className="font-bold text-lg">
              ${event.price}
            </p>
          </div>

          {/* VIEW BUTTON */}
          <Link
            to={`/event/${event.id}`}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-600 transition"
          >
            View
          </Link>

        </div>
      </div>

    </div>
  );
};

export default EventGridCard;