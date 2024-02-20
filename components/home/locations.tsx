import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GoogleMapsAPI from '@/secrets/maps_api';

const MapsAPI = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || GoogleMapsAPI;

const containerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: 38.64627456665039,
  lng: -90.50367736816406
};

const Locations = () => {
  return (
    <LoadScript googleMapsApiKey={MapsAPI}>
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