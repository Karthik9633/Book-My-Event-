import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import EventDetails from "./pages/EventDetails";
import CalendarPage from "./pages/CalendarPage";
import MapPage from "./pages/MapPage";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyFavorites from "./pages/MyFavorites";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import MyTickets from "./pages/MyTickets";
import About from "./pages/About";
import ProtectedRoute from "./components/ProtectedRoute";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <MyFavorites />
            </ProtectedRoute>
          }
        />
        <Route path="/success/:id" element={<RegistrationSuccess />} />
        <Route path="/mytickets" element={<MyTickets />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;