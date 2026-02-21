import FilterSidebar from "../components/FilterSidebar";
import ResultsHeader from "../components/ResultsHeader";
import EventGridCard from "../components/EventGridCard";
import Pagination from "../components/Pagination";
import { events } from "../data/events";

const SearchResults = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">

        {/* LEFT SIDEBAR */}
        <FilterSidebar />

        {/* RIGHT CONTENT */}
        <div className="flex-1">

          <ResultsHeader />

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
            {events.map((event) => (
              <EventGridCard key={event.id} event={event} />
            ))}
          </div>

          <Pagination />

        </div>

      </div>
    </div>
  );
};

export default SearchResults;