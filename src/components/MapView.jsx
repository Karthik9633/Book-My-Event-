import {
  GoogleMap,
  LoadScript,
  Marker
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh"
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

const MapView = ({ events }) => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {events.map((event) => (
          <Marker
            key={event.id}
            position={{ lat: event.lat, lng: event.lng }}
            label={{
              text: event.price === 0 ? "Free" : `$${event.price}`,
              color: "white",
              fontSize: "12px",
              fontWeight: "bold"
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;