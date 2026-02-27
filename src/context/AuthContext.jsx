import { createContext, useContext, useState } from "react";
import { useToast } from "./ToastContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { showToast } = useToast();

    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("loggedUser")) || null;
    });

    // ✅ SIGNUP (ONLY SAVE USER, DO NOT LOGIN)
    const signup = (name, email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.find((u) => u.email === email);

        if (userExists) {
            showToast("Email already registered", "error");
            return false;
        }

        const newUser = { name, email, password };

        localStorage.setItem("users", JSON.stringify([...users, newUser]));

        showToast("Your account was created successfully", "success");

        return true; // IMPORTANT
    };

    // ✅ LOGIN
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const matchedUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!matchedUser) {
            showToast("Login failed. Invalid email or password", "error");
            return false;
        }

        setUser(matchedUser);
        localStorage.setItem("loggedUser", JSON.stringify(matchedUser));

        showToast("Login successful", "success");

        return true;
    };

    // ✅ LOGOUT
    const logout = () => {
        setUser(null);
        localStorage.removeItem("loggedUser");
        showToast("Logged out successfully", "success");
    };

    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);