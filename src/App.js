import React from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import polygonJSON from './polygon.js';
import { L } from "leaflet";

function App() {
  // Icons
  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/798/798008.png',
    iconSize: [38, 38],
  });

  // Co-ordinates
const markers = [
  {
    geocode: [-1.253, 36.8844],
    popUp: 'Ujamaa Office',
  },
  {
    geocode: [-1.2866, 36.8174],
    popUp: 'Nairobi',
  },
  {
    geocode: [-1.21555, 36.83514],
    popUp: 'Kiambu road',
  },
];



  return (
    <div>
      <MapContainer center={[-1.1318, 36.81]} zoom={7} style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Ujamaa Africa</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* markers */}
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>

            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
        <GeoJSON
          data={polygonJSON}
          style={{ fillColor: 'blue', color: 'blue', weight: 2, fillOpacity: 0.5 }}
        
        />
      
      </MapContainer>
    </div>
  );
}

export default App;
