import { Heart, Calendar, MapPin } from "lucide-react";

const FavoriteCard = ({ event }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-52 object-cover"
        />

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
          <Heart size={18} className="text-red-500 fill-red-500" />
        </button>

        <span className="absolute bottom-4 left-4 bg-purple-600 text-white text-xs px-4 py-1 rounded-full">
          {event.category}
        </span>
      </div>

      {/* DETAILS */}
      <div className="p-6">

        <h3 className="font-bold text-lg mb-3">
          {event.title}
        </h3>

        <div className="text-sm text-gray-500 space-y-2">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            {event.date}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={14} />
            {event.location}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FavoriteCard;