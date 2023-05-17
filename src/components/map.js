import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup } from 'react-leaflet';
import Form from './planner/form'
import { EditControl } from "react-leaflet-draw";
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

function LeafletMap({ lat, lng }) {
  const mapRef = useRef(null);
  const [edit, setEdit] = useState(true);
  const [layer, setLayer] = useState(null);

  const onCreated = (e) => {
    setLayer(e.layer);
    setEdit(true);
  };

  const onEdited = (e) => {
    const layers = e.layers;
    layers.eachLayer((layer) => {
      setLayer(layer);
    });
  };

  const onDeleted = () => {
    setEdit(false);
  };

  useEffect(() => {
    const map = mapRef.current;

    if (map) {
      map.leafletElement.invalidateSize();
    }
  }, []);

  return (
    <div>
    <Form/>
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]}>
        <Popup>
          Your location.
        </Popup>
      </Marker>
      <FeatureGroup>
        {edit && (
          <EditControl
            position="topright"
            onEdited={onEdited}
            onDeleted={onDeleted}
            draw={{
              polyline: true,
              rectangle: true,
              circle: true,
              circlemarker: true,
              marker: true,
              polygon: {
                allowIntersection: true,
                drawError: {
                  color: "#e1e100",
                  message: "<strong>Oh snap!<strong> you can't draw that!",
                },
                shapeOptions: {
                  color: "#97009c",
                },
                showArea: true,
              },
            }}
          />
        )}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {layer}
      </FeatureGroup>
    </MapContainer>
    </div>
  );
}

export default LeafletMap;
