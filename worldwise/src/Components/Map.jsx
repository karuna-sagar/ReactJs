import React, { useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useCities } from "../Contexts/CitiesContext";

export default function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [searchParams, setSearchParam] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => navigate("form")}
    >
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName} </span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
