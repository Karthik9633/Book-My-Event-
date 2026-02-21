import { useState } from "react";
import { LayoutGrid, Map, Calendar } from "lucide-react";

const ResultsHeader = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="mb-8">

      {/* TOP ROW */}
      <div className="flex justify-between items-start mb-6">

        {/* LEFT TITLE */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            All Events From Your Locality
          </h1>
          <p className="text-gray-500 mt-1">
            30 experiences found for this weekend
          </p>
        </div>

        {/* VIEW TOGGLE */}
        <div className="flex items-center bg-gray-100 rounded-xl p-1 gap-1">

          <button
            onClick={() => setView("grid")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              view === "grid"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500"
            }`}
          >
            <LayoutGrid size={16} />
            Grid
          </button>

          <button
            onClick={() => setView("map")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              view === "map"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500"
            }`}
          >
            <Map size={16} />
            Map
          </button>

          <button
            onClick={() => setView("calendar")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              view === "calendar"
                ? "bg-white shadow text-gray-900"
                : "text-gray-500"
            }`}
          >
            <Calendar size={16} />
            Calendar
          </button>

        </div>
      </div>

      {/* SECOND ROW */}
      <div className="flex justify-between items-center text-sm">

        {/* SORT */}
        <div className="flex items-center gap-2 text-gray-600">
          <span>Sort by:</span>
          <select className="bg-transparent font-medium text-gray-900 outline-none">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        {/* SHOWING COUNT */}
        <div className="text-gray-500">
          Showing 1–6 of 20 
        </div>

      </div>

    </div>
  );
};

export default ResultsHeader;