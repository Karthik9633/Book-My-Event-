import { useState } from "react";
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
} from "date-fns";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { events } from "../data/events";
import { Link } from "react-router-dom";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 9)); 
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 9, 5));

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

  return (
    <div className="flex bg-gray-100 min-h-screen">
      
      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="w-72 bg-white border-r p-6 hidden lg:flex flex-col gap-8">
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase mb-4">
            Categories
          </h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-xl bg-purple-100 text-purple-700 font-semibold">
              All Events
            </button>
            <button>Music & Concerts</button><br></br>
            <button>Arts & Culture</button><br></br>
            <button>Food & Drink</button><br></br>
            <button>Sports & Fitness</button>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase mb-4">
            Availability
          </h3>
          <label className="flex gap-2 items-center">
            <input type="checkbox" /> Free events
          </label>
          <label className="flex gap-2 items-center">
            <input type="checkbox" defaultChecked /> Ticketed events
          </label>
          <label className="flex gap-2 items-center">
            <input type="checkbox" /> Virtual only
          </label>
        </div>

        <div className="mt-auto bg-purple-50 p-4 rounded-2xl border border-purple-100">
          <p className="text-xs font-bold text-purple-600">PRO TIP</p>
          <p className="text-xs text-gray-600 mt-2">
            Connect your Google Calendar to sync personal events automatically.
          </p>
          <button className="text-xs text-purple-600 mt-2 font-semibold">
            Learn more →
          </button>
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
            <button className="px-4 text-sm font-semibold">Today</button>
            <button onClick={nextMonth} className="p-2">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 border-b text-xs font-bold text-gray-400 uppercase">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
            <div key={d} className="py-3 text-center">{d}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 auto-rows-[130px] border-l">
          {days.map((d, i) => (
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

              {isSameDay(d, new Date(2023, 9, 5)) && (
                <div className="mt-2 space-y-1 text-xs">
                  <div className="bg-purple-600 text-white px-2 py-1 rounded">
                    6:00 PM Gala Dinner
                  </div>
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded">
                    10:00 AM Workshop
                  </div>
                  <div className="text-gray-400">+2 more</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show Map */}
        <div className="flex justify-center py-6">
          <Link to="/map" className="bg-black text-white px-6 py-3 rounded-full shadow-lg">
            🗺 Show Map
          </Link>
        </div>
      </main>

      {/* ================= RIGHT PANEL ================= */}
      <aside className="w-[380px] bg-white border-l p-6 hidden xl:flex flex-col">
        <p className="text-xs font-bold text-purple-600 uppercase">
          Thursday
        </p>
        <h2 className="text-2xl font-bold mt-2">
          October 5, 2023
        </h2>
        <p className="text-sm text-gray-500">
          4 events scheduled for today
        </p>

        <div className="mt-6 space-y-6">
          {events.slice(0,3).map((event) => (
            <div key={event.id} className="bg-gray-50 p-4 rounded-2xl">
              <img
                src={event.image}
                alt={event.title}
                className="h-40 w-full rounded-xl object-cover mb-3"
              />
              <p className="text-sm text-purple-600 font-semibold">
                6:00 PM — 10:00 PM
              </p>
              <h4 className="font-bold">{event.title}</h4>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={14}/> {event.location}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold shadow-lg">
          🎟 Book Tickets for Today
        </button>
      </aside>
    </div>
  );
};

export default Calendar;