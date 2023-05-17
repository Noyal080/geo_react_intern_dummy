import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';

const Map = () => {
  const [markers, setMarkers] = useState([
    { position: [51.505, -0.09], name: 'London' },
    { position: [48.8566, 2.3522], name: 'Paris' },
    { position: [41.9028, 12.4964], name: 'Rome' }
  ]);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={3} style={{ height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map(marker => (
        <Marker position={marker.position} key={marker.name}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
      {markers.map(marker => (
        <Polyline positions={markers.map(m=>m.position)} color="blue" weight={5}  key={marker.name} />
      ))}
    </MapContainer>
  );
};

export default Map;
