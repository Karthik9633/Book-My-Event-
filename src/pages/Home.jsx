import { useState } from "react";
import Hero from "../components/Hero";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import FeaturedExperience from "../components/FeaturedExperience";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";

const categories = [
  "All Events",
  "Music",
  "Technology",
  "Business",
  "Health",
  "Art",
  "Food",
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Events");

  const featuredEvent =
    selectedCategory === "All Events"
      ? events.find((e) => e.featured)
      : events.find(
        (e) =>
          e.category.toLowerCase().includes(
            selectedCategory.toLowerCase()
          ) && e.featured === true
      );

  return (
    <>
      <Hero />


      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-64 px-10 py-6 flex gap-5 overflow-x-auto">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all
                ${selectedCategory === cat
                  ? "bg-purple-600 text-white"
                  : "bg-white border border-gray-200 hover:border-purple-600 hover:text-purple-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>


      {featuredEvent && (
        <FeaturedExperience event={featuredEvent} />
      )}


      <div className="max-w-7xl mx-auto px-10 mb-20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <p className="text-gray-500 text-sm">
              Handpicked events happening in your city
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/search" className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
            Load More Events
          </Link>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Home;