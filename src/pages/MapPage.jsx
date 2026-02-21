import MapSidebar from "../components/MapSidebar";
import MapView from "../components/MapView";

const MapPage = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <MapSidebar />
      <MapView />
    </div>
  );
};

export default MapPage;