import { useState } from "react";

const FilterSidebar = () => {
  const [price, setPrice] = useState(500);
  const [venue, setVenue] = useState("Outdoor");

  return (
    <aside className="w-[300px] bg-[#f9fafc] border-r border-gray-200 min-h-screen p-6 ">

      {/* CATEGORIES */}
      <div className="mb-10">
        <h3 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4">
          Categories
        </h3>

        <div className="space-y-3 text-sm">

          {[
            "All Events",
            "Concerts & Music",
            "Tech & Innovation",
            "Arts & Culture",
            "Food & Drink"
          ].map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                defaultChecked={index === 0}
                className="w-4 h-4 accent-purple-600"
              />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* DATE RANGE */}
      <div className="mb-10">
        <h3 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4">
          Date Range
        </h3>

        <div className="space-y-3">
          <input
            type="date"
            className="w-full border border-gray-200 rounded-xl px-4 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="date"
            className="w-full border border-gray-200 rounded-xl px-4 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* PRICE RANGE */}
      <div className="mb-10">
        <h3 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4">
          Price Range
        </h3>

        <div className="flex justify-between text-sm text-purple-600 font-medium mb-2">
          <span>$0</span>
          <span>$500+</span>
        </div>

        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full accent-purple-600"
        />

        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>FREE</span>
          <span>$1000</span>
        </div>
      </div>

      {/* VENUE TYPE */}
      <div className="mb-10">
        <h3 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4">
          Venue Type
        </h3>

        <div className="flex flex-wrap gap-3">

          {["Indoor", "Outdoor", "Hybrid", "Virtual"].map((type) => (
            <button
              key={type}
              onClick={() => setVenue(type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                venue === type
                  ? "bg-purple-100 text-purple-700 border border-purple-300"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-purple-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* APPLY BUTTON */}
      <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-full shadow-md hover:opacity-95 transition">
        Apply Filters
      </button>

      {/* RESET */}
      <div className="text-center mt-4">
        <button className="text-sm text-gray-400 hover:text-purple-600 transition">
          Reset all filters
        </button>
      </div>

    </aside>
  );
};

export default FilterSidebar;