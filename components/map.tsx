import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import  L, { LatLngExpression } from "leaflet";



function Map() {

  const position: LatLngExpression = [6.619307804140776, 3.5595638092519715];

  const customIcon = new L.Icon({
    iconUrl: "/logo/marislogo.png", 
    iconSize: [30, 29], 
    iconAnchor: [12, 30], 
    popupAnchor: [1, -34], 
    shadowUrl: "/svgs/marker-shadow.png", 
    shadowSize: [41, 41],
  });

  return (
    <MapContainer center={position} zoom={15} className="h-full w-full rounded-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>We are here!</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map