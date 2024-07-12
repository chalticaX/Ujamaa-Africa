import React from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import polygonJSON from './polygon.js';
import kenyaJSON from "./kenya";
import westernJSON from "./western.js";
import kajiadoJSON from './kajiado.js';
import kiambuJSON from './kiambu.js';
import machakosJSON from './machakos.js';
import nairobiJSON from './nairobi.js';
import MarkerClusterGroup from "react-leaflet-cluster";
import 'react-leaflet-markercluster/dist/styles.min.css';
import Legend from './legend.js';

function App() {

  // GeoJSON Array
  const geoJsonDataArray = [kenyaJSON, polygonJSON, westernJSON ,kajiadoJSON, kiambuJSON, machakosJSON, nairobiJSON];

  const handleFeatureClick = (event) => {
    const layer = event.target;
    console.log('Feature clicked:', layer.feature);
  };

  const handleMouseOver = (event) => {
    const layer = event.target
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.2
    });
    layer.openPopup();
  };

  const handleMouseOut = (event) => {
    const layer = event.target
    layer.setStyle({
      weight: 4,
      color: 'black',
      dashArray: '3',
      fillOpacity: 0
    });
    layer.closePopup();
  };


  const onEachFeature = (feature, layer) => {
    // const popupContent = `${feature.properties.name}`;
    // layer.bindPopup(popupContent);

    layer.on({
      click: handleFeatureClick,
      mouseover: handleMouseOver,
      mouseout: handleMouseOut,
    });
  };


  // Icons
  const customIcon = new Icon({
    iconUrl: 'https://img.icons8.com/?size=100&id=43731&format=png&color=000000',
    iconSize: [38, 38],
    popupAnchor: [0, -38],
  });

  // Coordinates
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
      <MapContainer center={[-1.1318, 36.81]} zoom={6} style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Ujamaa Africa</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* MARKERS */}
        <MarkerClusterGroup>
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon} >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup> 

        {/* GEOJSON */}
        {geoJsonDataArray.map((data, index) => (
          <GeoJSON
            key={index}
            data={data}
            style={{ color: 'black', weight: 4, fillOpacity: 0.0, dashArray: 3 }}
            onEachFeature={onEachFeature}
          />
        ))}

        {/* LAYER CONTROLS */}
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Default Street Map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Dark palette">
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?apikey=4bc5ae1a-e40d-4030-b17d-8079a33b8ba3"
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              minZoom={0}
              maxZoom={20}
              ext="png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Stadia Stamen Watercolor">
            <TileLayer
              url='https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?apikey=4bc5ae1a-e40d-4030-b17d-8079a33b8ba3'
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              minZoom={0}
              maxZoom={16}
              ext="jpg"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Satellite View">
            <TileLayer
              url='https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg?apikey=4bc5ae1a-e40d-4030-b17d-8079a33b8ba3'
              attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              minZoom={0}
              maxZoom={20}
              ext="jpg"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <Legend />
      </MapContainer>
    </div>
  );
}

export default App;
