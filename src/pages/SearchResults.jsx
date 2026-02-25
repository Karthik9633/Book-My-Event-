import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import EventGridCard from "../components/EventGridCard";
import ResultsHeader from "../components/ResultsHeader";
import Pagination from "../components/Pagination";
import { events } from "../data/events";
import { useEffect } from "react";

const EVENTS_PER_PAGE = 6;

const SearchResults = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const searchLocation = searchParams.get("location") || "";

  const [appliedFilters, setAppliedFilters] = useState({
    categories: ["All Events"],
    startDate: "",
    endDate: "",
    price: 10000,
    venue: ""
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("recommended");

  // 🔥 FILTER (Title + Category + Location)
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const { categories, price } = appliedFilters;

      const categoryMatch =
        categories.includes("All Events") ||
        categories.includes(event.category);

      const priceMatch = event.price <= price;

      const lowerQuery = searchQuery.toLowerCase();

      const queryMatch =
        event.title.toLowerCase().includes(lowerQuery) ||
        event.category.toLowerCase().includes(lowerQuery);

      const locationMatch = event.location
        .toLowerCase()
        .includes(searchLocation.toLowerCase());

      return categoryMatch && priceMatch && queryMatch && locationMatch;
    });
  }, [appliedFilters, searchQuery, searchLocation]);

  // 🔥 SORT
  const sortedEvents = useMemo(() => {
    const sorted = [...filteredEvents];

    if (sortOption === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "newest") {
      sorted.sort((a, b) => b.id - a.id);
    }

    return sorted;
  }, [filteredEvents, sortOption]);

  const totalPages = Math.ceil(sortedEvents.length / EVENTS_PER_PAGE);

  const paginatedEvents = sortedEvents.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  return (
    <div className="flex flex-col lg:flex-row">

      <FilterSidebar
        appliedFilters={appliedFilters}
        setAppliedFilters={(filters) => {
          setAppliedFilters(filters);
          setCurrentPage(1);
        }}
      />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50">

        <ResultsHeader
          total={sortedEvents.length}
          currentPage={currentPage}
          eventsPerPage={EVENTS_PER_PAGE}
          sortOption={sortOption}
          setSortOption={(value) => {
            setSortOption(value);
            setCurrentPage(1);
          }}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {paginatedEvents.length > 0 ? (
            paginatedEvents.map((event) => (
              <EventGridCard key={event.id} event={event} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              No events found matching your filters.
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}

      </div>
    </div>
  );
};

export default SearchResults;