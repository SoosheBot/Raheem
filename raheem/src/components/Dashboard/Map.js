import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import styled from 'styled-components';

export default function Map() {
    const [viewport, setViewport] = useState ({
        latitude: 41.0635,
        longitude: -96.2706,
        width: "100vw",
        height: "100vh",
        zoom: 4
    })

    return (
        <div>
            <StartEnd>Map Start</StartEnd>
                <ReactMapGL className="MapBox"
                    {...viewport} 
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    // mapStyle can be changed to another map style at https://www.mapbox.com/gallery/
                    mapStyle="mapbox://styles/chernandez85/ck9ah2a5t1u461ir5hlb8m3zc"
                    onViewportChange={viewport => {
                        setViewport(viewport);
                    }}>
                </ReactMapGL>
            <StartEnd>Map End</StartEnd>
        </div>
    )
}

const StartEnd = styled.h1`
    font-size: 4em;
    font-weight: bold;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    border: 5px solid purple;
`;
