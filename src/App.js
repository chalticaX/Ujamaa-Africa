import React from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import polygonJSON from './polygon.js';
import kenyaJSON from "./kenya";
// import { L } from "leaflet";


function App() {

  // GeoJSON Array

  const geoJsonDataArray = [kenyaJSON, polygonJSON];

  // icons
  
  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/798/798008.png',
    iconSize: [38, 38],
  });

  // coordinates

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

        {/* MARKERS */}

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>

            <Popup>{marker.popUp}</Popup>

          </Marker>

        ))};


        {/* GEOJSON */}

      {geoJsonDataArray.map((data, index) => (

        <GeoJSON
          key={index}
          data={data}
          style={{ fillColor: 'blue', color: 'blue', weight: 2, fillOpacity: 0.5 }}
        />

      ))};

      {/* layer controls */}

      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Default Street Map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Dark pallette">
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
           minZoom={0} maxZoom={20} ext="png" />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Stadia Stamen Watercolor">
          <TileLayer url= 'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg'
           minZoom={0} maxZoom={16} ext="jpg" />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Satellite View">
          <TileLayer url= 'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg'
          minZoom={0} maxZoom={20} ext="jpg" />
        </LayersControl.BaseLayer>
        
      </LayersControl>
     
      </MapContainer>

    </div>
  );
}

export default App;
