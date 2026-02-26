import FavoritesSidebar from "../components/FavoritesSidebar";
import FavoriteCard from "../components/FavoriteCard";
import { useFavorites } from "../context/FavoritesContext";
import { useState, useMemo, useEffect } from "react";
import { LayoutGrid, List } from "lucide-react";
import Pagination from "../components/Pagination";

const EVENTS_PER_PAGE = 6;

const MyFavorites = () => {
  const { favorites } = useFavorites();

  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 if favorites change
  useEffect(() => {
    setCurrentPage(1);
  }, [favorites]);

  const totalPages = Math.ceil(favorites.length / EVENTS_PER_PAGE);

  const paginatedFavorites = useMemo(() => {
    const start = (currentPage - 1) * EVENTS_PER_PAGE;
    return favorites.slice(start, start + EVENTS_PER_PAGE);
  }, [favorites, currentPage]);

  return (
    <div className="flex bg-gray-50 min-h-screen">

      {/* LEFT SIDEBAR */}
      <FavoritesSidebar />

      {/* RIGHT CONTENT */}
      <div className="flex-1 p-10">

        {/* HEADER (UI NOT CHANGED) */}
        <div className="flex justify-between items-start mb-10">

          <div>
            <h1 className="text-3xl font-bold">
              Your Favorite Events{" "}
              <span className="text-purple-600">
                ({favorites.length})
              </span>
            </h1>
            <p className="text-gray-500 mt-2">
              Manage and track the events you're interested in attending.
            </p>
          </div>

          {/* VIEW TOGGLE (UI NOT CHANGED) */}
          <div className="flex gap-3">
            <button
              onClick={() => setView("grid")}
              className="p-3 bg-white rounded-xl shadow"
            >
              <LayoutGrid size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className="p-3 bg-white rounded-xl shadow"
            >
              <List size={18} />
            </button>
          </div>

        </div>

        {/* GRID (UI NOT CHANGED) */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {paginatedFavorites.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 mt-20">
              No favorite events yet.
            </div>
          ) : (
            paginatedFavorites.map((event) => (
              <FavoriteCard key={event.id} event={event} />
            ))
          )}

        </div>

        {/* PAGINATION (USING YOUR COMPONENT) */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

      </div>

    </div>
  );
};

export default MyFavorites;