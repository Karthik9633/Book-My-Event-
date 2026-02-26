import FavoritesSidebar from "../components/FavoritesSidebar";
import FavoriteCard from "../components/FavoriteCard";
import { useFavorites } from "../context/FavoritesContext";
import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import Pagination from "../components/Pagination";
import { useEffect } from "react";

const EVENTS_PER_PAGE = 6;

const MyFavorites = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { favorites } = useFavorites();
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(favorites.length / EVENTS_PER_PAGE);

  const paginatedFavorites = favorites.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  return (
    <div className="flex bg-gray-50 min-h-screen">

      <FavoritesSidebar />

      <div className="flex-1 p-10">

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

        {favorites.length === 0 ? (
          <p className="text-gray-500">No favorite events yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {paginatedFavorites.map((event) => (
              <FavoriteCard key={event.id} event={event} />
            ))}
          </div>
        )}

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