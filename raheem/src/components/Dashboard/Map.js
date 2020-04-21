import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import styled from 'styled-components';

export default function Map() {
    const [viewport, setViewport] = useState ({
        latitude: 37.616936,
        longitute: -122.383789,
        width: "100vw",
        height: "100vh",
        zoom: 10
    })

    return (
        <div>
            <StarEnd>Map Start</StarEnd>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}                
                mapStyle="mapbox://styles/chernandez85/ck98v7h9609z31irsyoa7undo"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}>
            </ReactMapGL>
            <StarEnd>Map End</StarEnd>
        </div>
    )
}

const StarEnd = styled.h1`
    font-size: 4em;
    font-weight: bold;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    border: 5px solid purple;
`;