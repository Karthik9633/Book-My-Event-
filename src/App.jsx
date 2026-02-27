import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
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
        <Route path="/favorites" element={<MyFavorites />} />
        <Route path="/success/:id" element={<RegistrationSuccess/>} />
      </Routes>
    </Layout>
  );
}


export default App;
