import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  const location = useLocation()
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup"

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

export default Layout;