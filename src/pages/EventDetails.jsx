import { useParams } from "react-router-dom";
import { events } from "../data/events";
import { useState, useEffect } from "react";
import EventMap from "../components/EventMap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const EventDetails = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, []);

    const { id } = useParams();
    const navigate = useNavigate();
    const { user, registerTicket } = useAuth(); // ✅ added only this

    const event = events.find((e) => e.id === Number(id));

    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 14,
        minutes: 35,
        seconds: 12,
    });

    const [selectedTier, setSelectedTier] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (event?.ticketTiers?.length > 0) {
            setSelectedTier(event.ticketTiers[0]);
        }
    }, [event]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => ({
                ...prev,
                seconds: prev.seconds > 0 ? prev.seconds - 1 : 59,
            }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!event) return <div className="p-10">Event not found</div>;

    const totalPrice = selectedTier
        ? Number(selectedTier.price) * Number(quantity)
        : 0;

    const handleRegister = () => {
        if (!user) {
            navigate("/login");
            return;
        }

        const ticketData = {
            id: Date.now(),
            eventId: event.id,
            eventTitle: event.title,
            image: event.image,
            date: event.date,
            location: event.location,
            tier: selectedTier,
            quantity,
            total: totalPrice,
        };

        registerTicket(ticketData);

        navigate(`/success/${event.id}`, {
            state: {
                tier: selectedTier,
                quantity,
                total: totalPrice,
            },
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">

            <div className="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-500">
                <Link to="/">
                    Home</Link> › Events › {event.title}
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-6">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 sm:h-80 md:h-[450px] object-cover"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 grid lg:grid-cols-3 gap-10">

                <div className="md:col-span-2">

                    <h1 className="text-4xl font-extrabold mb-6">
                        {event.title}
                    </h1>

                    <div className="flex gap-10 mb-8 text-gray-600">
                        <div>
                            <p className="font-semibold">Date & Time</p>
                            <p>{event.date}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Location</p>
                            <p>{event.venueAddress}</p>
                        </div>
                    </div>

                    <div className="bg-purple-100 rounded-2xl p-6 mb-10">
                        <p className="text-sm font-bold text-purple-600 mb-4">
                            EVENT STARTS IN
                        </p>

                        <div className="grid grid-cols-4 gap-4 text-center">
                            {Object.entries(timeLeft).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <p className="text-2xl font-bold text-purple-600">
                                        {value.toString().padStart(2, "0")}
                                    </p>
                                    <p className="text-xs uppercase text-gray-400">
                                        {key}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm mb-10 flex justify-between items-center">
                        <div>
                            <p className="font-bold">{event.organizer}</p>
                            <p className="text-sm text-gray-500">
                                Organized premium experiences
                            </p>
                        </div>
                        <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition">
                            Follow
                        </button>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">
                            About this event
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            {event.description}
                        </p>

                        <ul className="space-y-3 text-gray-600">
                            {event.highlights?.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-purple-600 font-bold">
                                        ✔
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            The Venue
                        </h2>
                        <p className="text-purple-600 mb-4">
                            {event.venueAddress}
                        </p>

                        <div className="rounded-2xl overflow-hidden shadow-md">

                            <div className="relative">

                                <EventMap lat={event.lat} lng={event.lng} />
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${event.lat},${event.lng}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition duration-300"
                                >
                                    <div className="bg-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                                        Open in Google Maps →
                                    </div>
                                </a>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 h-fit lg:sticky top-24">

                    <div className="flex justify-between items-center mb-6">
                        <p className="text-3xl font-extrabold text-purple-600">
                            ${totalPrice}
                        </p>
                        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-semibold">
                            ON SALE
                        </span>
                    </div>

                    <div className="mb-6">
                        <label className="text-sm font-semibold">
                            Ticket Tier
                        </label>
                        <select
                            value={selectedTier?.name || ""}
                            className="w-full border rounded-xl p-3 mt-2"
                            onChange={(e) => {
                                const tier = event.ticketTiers.find(
                                    (t) => t.name === e.target.value
                                );
                                setSelectedTier(tier);
                            }}
                        >
                            {event.ticketTiers?.map((tier, index) => (
                                <option key={index} value={tier.name}>
                                    {tier.name} - ${tier.price}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="text-sm font-semibold">
                            Quantity
                        </label>
                        <input
                            type="number"
                            value={quantity}
                            min="1"
                            onChange={(e) =>
                                setQuantity(Math.max(1, Number(e.target.value)))
                            }
                            className="w-full border rounded-xl p-3 mt-2"
                        />
                    </div>

                    {/* 🔥 SAME BUTTON STYLE, JUST ADDED onClick */}
                    <button
                        onClick={handleRegister}
                        className="w-full bg-purple-600 text-white px-3 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition"
                    >
                        Register Now
                    </button>

                    <p className="text-xs text-gray-400 text-center mt-4">
                        No hidden fees • Full refund up to 7 days before
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;