import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const MyTickets = () => {
  const { tickets } = useAuth();

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-10">
          My Registered Tickets
        </h1>

        {tickets.length === 0 ? (
          <p className="text-gray-500">No tickets registered yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <img
                  src={ticket.image}
                  alt={ticket.eventTitle}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">
                    {ticket.eventTitle}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {ticket.date}
                  </p>

                  <p className="text-sm text-gray-500 mb-3">
                    {ticket.location}
                  </p>

                  <p className="text-sm">
                    <span className="font-semibold">Ticket:</span>{" "}
                    {ticket.tier?.name}
                  </p>

                  <p className="text-sm">
                    <span className="font-semibold">Quantity:</span>{" "}
                    {ticket.quantity}
                  </p>

                  <p className="text-purple-600 font-bold mt-3">
                    ${ticket.total}
                  </p>

                  <Link
                    to={`/success/${ticket.eventId}`}
                    state={{
                      tier: ticket.tier,
                      quantity: ticket.quantity,
                      total: ticket.total,
                    }}
                    className="block mt-4 bg-purple-600 text-white text-center py-2 rounded-lg"
                  >
                    View Ticket
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MyTickets;