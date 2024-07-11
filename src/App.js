import React from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import polygonJSON from './polygon.js';
import kenyaJSON from "./kenya";
import  MarkerClusterGroup  from "react-leaflet-markercluster";
import 'react-leaflet-markercluster/dist/styles.min.css';
// import { L } from "leaflet";


function App() {

  // GeoJSON Array

  const geoJsonDataArray = [kenyaJSON, polygonJSON];

  const handleFeatureClick = (event) => {
    const layer = event.target;
    console.log('Feature clicked:', layer.feature);

  };
  
  const handleMouseOver = (event) => {
    const layer = event.target;
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });
    layer.openPopup();
  };
  
  const handleMouseOut = (event) => {
    const layer = event.target;
    layer.setStyle({
      weight: 4,
      color: 'black',
      dashArray: '3',
      fillOpacity: 0
    });

    layer.closePopup();

  };
  
  const onEachFeature = (feature, layer) => {
    const popupContent = `Feature: ${feature.properties.name}`;
    layer.bindPopup(popupContent);
    
    layer.on({
      click: handleFeatureClick,
      mouseover: handleMouseOver,
      mouseout: handleMouseOut,
    });
  };
  

  // icons
  
  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/798/798008.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38], // Anchor the icon at its center bottom
    popupAnchor: [0, -38], // Position the popup above the icon
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

        {/* <MarkerClusterGroup>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
        */}

        {/* GEOJSON */}

      {geoJsonDataArray.map((data, index) => (

        <GeoJSON
          key={index}
          data={data}
          style={{ color: 'black', weight: 4, fillOpacity: 0.0 , dashArray: 3 }}
          onEachFeature={onEachFeature}
        />

      ))};

      {/* layer controls */}

      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Default Street Map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Dark pallette">
          <TileLayer url= "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?apikey=4bc5ae1a-e40d-4030-b17d-8079a33b8ba3"
          attribution= '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           minZoom={0} maxZoom={20} ext="png" />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Stadia Stamen Watercolor">
          <TileLayer url= 'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?apikey=4bc5ae1a-e40d-4030-b17d-8079a33b8ba3'
           attribution= '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           minZoom={0} maxZoom={16} ext="jpg" />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Satellite View">
          <TileLayer url= 'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg?apikey=4bc5ae1a-e40d-4030-b17d-8079a33b8ba3'
          attribution= '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          minZoom={0} maxZoom={20} ext="jpg" />
        </LayersControl.BaseLayer>
        
      </LayersControl>
     
      


      </MapContainer>

    </div>
  );
}

export default App;
