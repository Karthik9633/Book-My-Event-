import { useState } from "react";

const categoriesList = [
  "All Events",
  "Music",
  "Technology",
  "Art",
  "Food & Drink"
];

const FilterSidebar = ({ appliedFilters, setAppliedFilters }) => {

  // 🔥 TEMP STATE (does NOT affect page until Apply is clicked)
  const [tempFilters, setTempFilters] = useState(appliedFilters);

  const toggleCategory = (category) => {
    if (category === "All Events") {
      setTempFilters({ ...tempFilters, categories: ["All Events"] });
      return;
    }

    const exists = tempFilters.categories.includes(category);

    const updated = exists
      ? tempFilters.categories.filter((c) => c !== category)
      : tempFilters.categories
          .filter((c) => c !== "All Events")
          .concat(category);

    setTempFilters({ ...tempFilters, categories: updated });
  };

  const applyFilters = () => {
    setAppliedFilters(tempFilters);
  };

  const resetFilters = () => {
    const reset = {
      categories: ["All Events"],
      startDate: "",
      endDate: "",
      price: 1000,
      venue: ""
    };
    setTempFilters(reset);
    setAppliedFilters(reset);
  };

  return (
    <aside className="w-[300px] bg-[#f9fafc] border-r p-6">

      {/* CATEGORIES */}
      <div className="mb-10">
        <h3 className="text-xs font-bold uppercase text-gray-400 mb-4">
          Categories
        </h3>

        <div className="space-y-3 text-sm">
          {categoriesList.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={tempFilters.categories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 accent-purple-600"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* DATE RANGE */}
      <div className="mb-10">
        <h3 className="text-xs font-bold uppercase text-gray-400 mb-4">
          Date Range
        </h3>

        <input
          type="date"
          value={tempFilters.startDate}
          onChange={(e) =>
            setTempFilters({ ...tempFilters, startDate: e.target.value })
          }
          className="w-full border rounded-xl px-4 py-2 mb-3"
        />

        <input
          type="date"
          value={tempFilters.endDate}
          onChange={(e) =>
            setTempFilters({ ...tempFilters, endDate: e.target.value })
          }
          className="w-full border rounded-xl px-4 py-2"
        />
      </div>

      {/* PRICE */}
      <div className="mb-10">
        <h3 className="text-xs font-bold uppercase text-gray-400 mb-4">
          Price Range
        </h3>

        <input
          type="range"
          min="0"
          max="1000"
          value={tempFilters.price}
          onChange={(e) =>
            setTempFilters({
              ...tempFilters,
              price: Number(e.target.value)
            })
          }
          className="w-full accent-purple-600"
        />

        <div className="text-sm text-purple-600 mt-2">
          Up to ${tempFilters.price}
        </div>
      </div>

      {/* APPLY BUTTON */}
      <button
        onClick={applyFilters}
        className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold"
      >
        Apply Filters
      </button>

      {/* RESET */}
      <div className="text-center mt-4">
        <button
          onClick={resetFilters}
          className="text-sm text-gray-400 hover:text-purple-600"
        >
          Reset all filters
        </button>
      </div>

    </aside>
  );
};

export default FilterSidebar;