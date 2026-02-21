import { useState, useMemo } from "react";
import FilterSidebar from "../components/FilterSidebar";
import EventGridCard from "../components/EventGridCard";
import ResultsHeader from "../components/ResultsHeader";
import { events } from "../data/events";
import Pagination from "../components/Pagination";

const EVENTS_PER_PAGE = 6;

const SearchResults = () => {

  const [appliedFilters, setAppliedFilters] = useState({
    categories: ["All Events"],
    startDate: "",
    endDate: "",
    price: 1000,
    venue: ""
  });

  // 🔥 ADD THIS
  const [currentPage, setCurrentPage] = useState(1);

  // 🔥 FILTER LOGIC (UNCHANGED)
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const { categories, startDate, endDate, price, venue } = appliedFilters;

      const categoryMatch =
        categories.includes("All Events") ||
        categories.includes(event.category);

      const priceMatch = event.price <= price;

      let dateMatch = true;
      if (startDate) {
        dateMatch = new Date(event.date) >= new Date(startDate);
      }
      if (endDate) {
        dateMatch =
          dateMatch && new Date(event.date) <= new Date(endDate);
      }

      let venueMatch = true;
      if (venue) {
        venueMatch = event.venueType === venue;
      }

      return categoryMatch && priceMatch && dateMatch && venueMatch;
    });
  }, [appliedFilters]);

  // 🔥 ADD THIS
  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);

  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  return (
    <div className="flex">

      <FilterSidebar
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />

      <div className="flex-1 p-8 bg-gray-50">
        <ResultsHeader count={filteredEvents.length} />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {paginatedEvents.map((event) => (
            <EventGridCard key={event.id} event={event} />
          ))}
        </div>

        {/* 🔥 ADD THIS */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

      </div>

    </div>
  );
};

export default SearchResults;