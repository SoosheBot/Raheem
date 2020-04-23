import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import styled from "styled-components";

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESSTOKEN;

const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px"
};

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100vh",
    height: "100vh",
    latitude: 37,
    longitude: -112,
    zoom: 4,
  });

  //refactored for DRYness in return

  const _onViewportChange = (viewport) => setViewport({ ...viewport });

  return (
    <div>
      {/* <StartEnd>Map Start</StartEnd> */}

      <ReactMapGL
        className="MapBox"
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        // mapStyle can be changed to another map style at https://www.mapbox.com/gallery/
        // changed mapstyle for visualizing it more easily in test -- can change back in prod
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={_onViewportChange}
      >
        {/* built-in functionality for geolocation in react-map-gl */}
        <GeolocateControl test-id='geolocate-button'
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          onViewportChange={_onViewportChange}
          latitude='{viewport.latitude}'
        />
      </ReactMapGL>

      {/* <StartEnd>Map End</StartEnd> */}
    </div>
  );
}

// const StartEnd = styled.h1`
//   font-size: 4em;
//   font-weight: bold;
//   padding-top: 50px;
//   padding-bottom: 50px;
//   text-align: center;
//   border: 5px solid purple;
// `;
