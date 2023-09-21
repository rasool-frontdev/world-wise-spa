import { useNavigate, useSearchParams } from "react-router-dom";
import style from "./Map.module.css";
import { useCities } from "../context/CitiesContext";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
const Map = () => {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={style.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={style.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
