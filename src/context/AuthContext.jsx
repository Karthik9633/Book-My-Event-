import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // 🔐 Logged In User
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    // 🎟 Registered Tickets
    const [tickets, setTickets] = useState(
        JSON.parse(localStorage.getItem("tickets")) || []
    );

    // ✅ Keep tickets synced
    useEffect(() => {
        localStorage.setItem("tickets", JSON.stringify(tickets));
    }, [tickets]);

    // ✅ Keep user synced
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    // =============================
    // SIGNUP
    // =============================
    const signup = (name, email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find((u) => u.email === email);
        if (exists) return false;

        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        return true; // IMPORTANT
    };

    // =============================
    // LOGIN
    // =============================
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const found = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!found) return false;

        setUser(found);
        return true;
    };

    // =============================
    // LOGOUT
    // =============================
    const logout = () => {
        setUser(null);
    };

    // =============================
    // REGISTER TICKET
    // =============================
    const registerTicket = (ticketData) => {
        setTickets((prev) => [...prev, ticketData]);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signup,
                login,
                logout,
                tickets,
                registerTicket,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);