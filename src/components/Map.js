import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import LocationPin from "./LocationPin";

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map" style={{ height: '271px', width: '90vw' }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        bootstrapURLKeys={{ key: 'AIzaSyBtShCSY9K-CrWpFaYO7c5Z46dyI-UAEu0' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;