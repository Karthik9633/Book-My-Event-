import { Plus, Minus, Navigation } from "lucide-react";

const MapView = () => {
  return (
    <div className="flex-1 relative">

      {/* MAP BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco&zoom=12&size=1200x800&maptype=roadmap')",
        }}
      />

      {/* SEARCH THIS AREA */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <button className="bg-white shadow px-6 py-3 rounded-full font-medium">
          🔄 Search this area
        </button>
      </div>

      {/* MAP CONTROLS */}
      <div className="absolute right-6 top-6 flex flex-col gap-2">

        <button className="bg-white p-3 rounded-xl shadow">
          <Plus />
        </button>

        <button className="bg-white p-3 rounded-xl shadow">
          <Minus />
        </button>

        <button className="bg-white p-3 rounded-xl shadow">
          <Navigation />
        </button>

      </div>

      {/* MAP MARKERS */}
      <div className="absolute top-[40%] left-[45%] bg-purple-600 text-white px-4 py-2 rounded-full font-bold shadow">
        $45
      </div>

      <div className="absolute top-[60%] left-[55%] bg-purple-600 text-white px-4 py-2 rounded-full font-bold shadow">
        $15
      </div>

      {/* BOTTOM TOGGLE */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="bg-white rounded-full shadow flex overflow-hidden">
          <button className="px-6 py-3 font-medium text-gray-600">
            List View
          </button>
          <button className="px-6 py-3 bg-purple-600 text-white font-medium">
            Map View
          </button>
        </div>
      </div>

    </div>
  );
};

export default MapView;