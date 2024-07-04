import './App.css';
import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  return (
  <MapContainer centre={[48.8566, 2.3522]} zoom={13}>
    <TileLayer>
      attribution='&copy' <a href="https://www.openstreetmap.org/copyright"></a>
      url=""
    </TileLayer>
  </MapContainer>
  );
}

export default App;
