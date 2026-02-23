import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* 🔥 ADD THIS */}
      <main className="pt-20 flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;