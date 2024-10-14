import React, { useState } from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, GeoJSON, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Icon } from 'leaflet';
import { Button, Modal } from 'react-bootstrap';
import migoriJSON from './migori.js';
import kenyaJSON from "./kenya";
import kajiadoJSON from './kajiado.js';
import kiambuJSON from './kiambu.js';
import machakosJSON from './machakos.js';
import nairobiJSON from './nairobi.js';
import nakuruJSON from './nakuru.js';
import narokJSON from './narok.js';
import kakamegaJSON from './kakamega.js';
import kibweziJSON from './kibwezi.js';
import kituiJSON from './kitui.js';
import nyamiraJSON from './nyamira.js';
import MarkerClusterGroup from "react-leaflet-cluster";
import 'react-leaflet-markercluster/dist/styles.min.css';
import Legend from './legend.js';

function MapPage () {
  const [ clickedFeature , setClickedFeature] = useState(null);
  const [showMap, setShowMap] = useState(false); 
  const geoJsonDataArray = [kenyaJSON, migoriJSON, kajiadoJSON, kiambuJSON, machakosJSON, nairobiJSON, nakuruJSON , narokJSON, kakamegaJSON, kibweziJSON, kituiJSON, nyamiraJSON];

const getStyle = (feature) => {
  return {
     color: 'black',
    weight: 2,
    fillOpacity: 0.5,
    fillColor: feature.properties.color,
    dashArray: 3,
  };
};


  const handleFeatureClick = (event) => {
    const layer = event.target;
    setClickedFeature(layer.feature.properties);
  };

  const handleMouseOver = (event) => {
    const layer = event.target;
    layer.setStyle({
      weight: 2,
    });
    layer.openPopup();
  };

  const handleMouseOut = (event) => {
    const layer = event.target;
    layer.setStyle({

      weight: 2,
    });
    layer.closePopup();
  };

  const onEachFeature = (feature, layer) => {
    const popupContent = `${feature.properties.name}`;
    layer.bindPopup(popupContent);

    layer.on({
      click: handleFeatureClick,
      mouseover: handleMouseOver,
      mouseout: handleMouseOut,
    });
  };

  const customIcon = new Icon({
    iconUrl: 'https://img.icons8.com/?size=100&id=43731&format=png&color=000000',
    iconSize: [38, 38],
    popupAnchor: [0, -38],
  });

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
  
    <Button variant="primary" onClick={() => setShowMap(true)}>
      Open Map Window
    </Button>

    
    <Modal show={showMap} onHide={() => setShowMap(false)} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Map</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ width: '100%', height: '600px' }}>
          <MapContainer center={[-1.1318, 36.81]} zoom={6} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Ujamaa Africa</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup>
              {markers.map((marker, index) => (
                <Marker key={index} position={marker.geocode} icon={customIcon} />
              ))}
            </MarkerClusterGroup>

            {geoJsonDataArray.map((data, index) => (
              <GeoJSON
                key={index}
                data={data}
                style={getStyle}
                onEachFeature={onEachFeature}
              />
            ))}

            <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="Default Street Map">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Dark palette">
                <TileLayer
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  minZoom={0}
                  maxZoom={20}
                  ext="png"
                />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Stadia Stamen Watercolor">
                <TileLayer
                  url='https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg'
                  attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  minZoom={0}
                  maxZoom={16}
                  ext="jpg"
                />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Satellite View">
                <TileLayer
                  url='https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png'
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
      <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', padding: '10px',  overflowY: 'auto' , fontFamily: 'Arial, sans-serif' , fontSize: '14px', backgroundColor: '#f2efe9' }}>
        {clickedFeature ? (
          <div>
            <h2> County Statistics </h2>

            <br></br>
            <p>County : {clickedFeature.name}</p>
            <br></br>

            {/* TL span */}

            <span 
      className="icon 1" 
      style={{ 
        backgroundColor: '#999b37',
        width: '24px', 
        height: '24px', 
        display: 'inline-block', 
        marginRight: '8px'
      }}><p style={{ margin: '0 0 0 30px' }}> Target Learners: {clickedFeature.TargetLearners}</p></span>

      {/* LT span */}

            <span 
      className="icon 2" 
      style={{ 
        backgroundColor: 'blue',
        width: '24px', 
        height: '24px', 
        display: 'list-item', 
        marginTop: '8px',
      }}>  <p style={{ margin: '0 0 0 30px' }}> Learners Trained: {clickedFeature.LearnersTrained}</p></span>
            <br></br>
      <br></br>

          </div>
        ) : (
          <p>Click on a County to see the Statistics </p>
        )}
      </div>
      </Modal.Body>
      </Modal>
    </div>
  );
}


export default MapPage;
