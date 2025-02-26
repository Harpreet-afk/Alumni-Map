"use client"; // Ensures this component runs only on the client side

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix missing Leaflet marker icons
const customIcon = new L.Icon({
  iconUrl: "/marker-icon-2x.png", // Load from public folder
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>Loading map...</p>;

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]} icon={customIcon}>
        <Popup>Welcome to this location!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
