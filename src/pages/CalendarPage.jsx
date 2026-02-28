import { useState, useMemo } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  addDays,
  isSameMonth,
  isSameDay,
  parseISO,
} from "date-fns";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { events } from "../data/events";
import { Link } from "react-router-dom";

const categories = [
  "All Events",
  "Music",
  "Technology",
  "Art",
  "Food & Drink",
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [freeOnly, setFreeOnly] = useState(false);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  // ✅ FILTER EVENTS
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const eventDate = event.calendarDate
        ? parseISO(event.calendarDate)
        : null;

      if (!eventDate) return false;

      const matchCategory =
        selectedCategory === "All Events" ||
        event.category === selectedCategory;

      const matchFree = freeOnly ? event.price === 0 : true;

      return matchCategory && matchFree;
    });
  }, [selectedCategory, freeOnly]);

  // ✅ EVENTS FOR SELECTED DAY
  const selectedDayEvents = filteredEvents.filter((event) => {
    if (!event.calendarDate) return false;
    return isSameDay(parseISO(event.calendarDate), selectedDate);
  });

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="w-72 bg-white border-r p-6 hidden lg:flex flex-col gap-8">

        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase mb-4">
            Categories
          </h3>

          <div className="space-y-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-3 rounded-xl ${selectedCategory === cat
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : ""
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase mb-4">
            Availability
          </h3>

          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={freeOnly}
              onChange={() => setFreeOnly(!freeOnly)}
            />
            Free events only
          </label>
        </div>
      </aside>

      {/* ================= CENTER CALENDAR ================= */}
      <main className="flex-1 bg-white flex flex-col">

        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            {format(currentMonth, "MMMM yyyy")}
          </h2>

          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
            <button onClick={prevMonth} className="p-2">
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => {
                setCurrentMonth(new Date());
                setSelectedDate(new Date());
              }}
              className="px-4 text-sm font-semibold"
            >
              Today
            </button>

            <button onClick={nextMonth} className="p-2">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 border-b text-xs font-bold text-gray-400 uppercase">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="py-3 text-center">{d}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 auto-rows-[120px] border-l">
          {days.map((d, i) => {

            const dayEvents = filteredEvents.filter((event) =>
              event.calendarDate
                ? isSameDay(parseISO(event.calendarDate), d)
                : false
            );

            return (
              <div
                key={i}
                onClick={() => setSelectedDate(d)}
                className={`border-r border-b p-2 cursor-pointer
                  ${!isSameMonth(d, monthStart) ? "bg-gray-50 text-gray-300" : ""}
                  ${isSameDay(d, selectedDate) ? "bg-purple-50 ring-1 ring-purple-500" : ""}
                `}
              >
                <span className="text-sm font-semibold">
                  {format(d, "d")}
                </span>

                <div className="mt-2 space-y-1 text-xs">
                  {dayEvents.slice(0, 2).map((event) => (
                    <div
                      key={event.id}
                      className="bg-purple-600 text-white px-2 py-1 rounded truncate"
                    >
                      {event.title}
                    </div>
                  ))}

                  {dayEvents.length > 2 && (
                    <div className="text-gray-400">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        <div className="flex justify-center py-6">
          <Link to="/map" className="bg-black text-white px-6 py-3 rounded-full shadow-lg">
            🗺 Show Map
          </Link>
        </div>

      </main>

      {/* ================= RIGHT PANEL ================= */}
      <aside className="w-[380px] bg-white border-l p-6 hidden xl:flex flex-col">

        <p className="text-xs font-bold text-purple-600 uppercase">
          {format(selectedDate, "EEEE")}
        </p>

        <h2 className="text-2xl font-bold mt-2">
          {format(selectedDate, "MMMM d, yyyy")}
        </h2>

        <p className="text-sm text-gray-500">
          {selectedDayEvents.length} events scheduled
        </p>

        <div className="mt-6 space-y-6">

          {selectedDayEvents.length === 0 && (
            <p className="text-gray-400">No events on this day.</p>
          )}

          {selectedDayEvents.map((event) => (
            <div key={event.id} className="bg-gray-50 p-4 rounded-2xl">

              <img
                src={event.image}
                alt={event.title}
                className="h-40 w-full rounded-xl object-cover mb-3"
              />

              <h4 className="font-bold">{event.title}</h4>

              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={14} /> {event.location}
              </p>

              <Link
                to={`/event/${event.id}`}
                className="mt-3 inline-block text-purple-600 font-semibold text-sm"
              >
                View Details →
              </Link>

            </div>
          ))}

        </div>

      </aside>
    </div>
  );
};

export default Calendar;