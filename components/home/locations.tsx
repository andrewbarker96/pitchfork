import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GMapsAPI from '@/secrets/GMapsAPI';

const containerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: 38.64627456665039,
  lng: -90.50367736816406
};

var Locations = () => {
  return (
    <LoadScript googleMapsApiKey={GMapsAPI}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Locations;