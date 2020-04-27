import React, { useState } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


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

  //get location data and send to firebase.

  const CollectLocation = (lat, lon) =>{
    const dataLat = lat;
    const dataLon = lon;
    console.log(`lat:${dataLat}  lon:${dataLon}`); 
  }

  //refactored for DRYness in return

  const _onViewportChange = (viewport) => {setViewport({ ...viewport }); CollectLocation(viewport.latitude,viewport.longitude)};

  return (
    <div>
      <ReactMapGL
        className="MapBox"
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        // mapStyle can be changed to another map style at https://www.mapbox.com/gallery/
        // changed mapstyle for visualizing it more easily in test -- can change back in prod
        mapStyle="mapbox://styles/mapbox/streets-v11"
        //onViewportChange={_onViewportChange}
      >
        {/* built-in functionality for geolocation in react-map-gl */}
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          onViewportChange={_onViewportChange}
          latitude='{viewport.latitude}'
        />
      </ReactMapGL>
    </div>
  );
};
