const Pagination = () => {
  return (
    <div className="mt-12 flex flex-col items-center gap-6">
      <div className="flex gap-3 items-center">
        <span className="w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-lg">
          1
        </span>
        <span className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer">
          2
        </span>
        <span className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer">
          3
        </span>
         <span className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer">
          4
        </span>
        <span className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer">
          5
        </span>
        <span className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-lg cursor-pointer">
          ...
        </span>
      </div>

    </div>
  );
};

export default Pagination;