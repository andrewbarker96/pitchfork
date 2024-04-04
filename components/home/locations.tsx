import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: 38.64627456665039,
  lng: -90.50367736816406
};

const GMapsAPI = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
export const googleMapsApiKey = GMapsAPI!

var Locations = () => {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
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