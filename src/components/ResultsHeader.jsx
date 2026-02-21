const ResultsHeader = () => {
  return (
    <div>

      <h1 className="text-3xl font-extrabold">
        All Events In Your Locality
      </h1>

      <p className="text-gray-500 mt-1">
        20 experiences found for this weekend
      </p>

      <div className="flex justify-between items-center mt-6">

        <div>
          <span className="text-sm text-gray-500 mr-2">Sort by:</span>
          <select className="font-semibold">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price; High to Low</option>
          </select>
        </div>

        <div className="text-sm text-gray-500">
          Showing 1–6 of 20
        </div>

      </div>
    </div>
  );
};

export default ResultsHeader;