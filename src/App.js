import './App.css';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {

  // Co-ordinates

  const markers = [
    {
      geocode: [-1.253, 36.8844],
      popUp: "Ujamaa Oficce"
    },
    {
      geocode: [-1.2866, 36.8174],
      popUp: "Nairobi"
    },
    {
      geocode: [-1.21555, 36.83514],
      popUp: "Kiambu road"
    },
  ];
  return (
    <div>
  <MapContainer center={[-.1318, 36.81]} zoom={7}>
    <TileLayer 
    attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />

    {
      markers.map(marker =>(
      <Marker position={marker.geocode}>
        
      </Marker>
      ))
  
    }

  </MapContainer>
  </div>
  );
}

export default App;
