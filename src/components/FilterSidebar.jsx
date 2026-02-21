const FilterSidebar = () => {
  return (
    <div className="w-72 bg-white p-6 rounded-2xl shadow-sm h-fit">

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-4">
          Categories
        </h3>

        <div className="space-y-3 text-sm">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-purple-600" defaultChecked />
            All Events
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-purple-600" />
            Concerts & Music
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-purple-600" />
            Tech & Innovation
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-purple-600" />
            Arts & Culture
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="accent-purple-600" />
            Food & Drink
          </label>
        </div>
      </div>

      {/* Date */}
      <div className="mb-8">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-4">
          Date Range
        </h3>

        <input
          type="date"
          className="w-full border rounded-lg p-2 mb-3"
        />
        <input
          type="date"
          className="w-full border rounded-lg p-2"
        />
      </div>

      {/* Button */}
      <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
        Apply Filters
      </button>

      <p className="text-center text-sm text-gray-400 mt-4 cursor-pointer">
        Reset all filters
      </p>
    </div>
  );
};

export default FilterSidebar;