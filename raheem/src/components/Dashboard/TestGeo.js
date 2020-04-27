import React, { useState } from "react";

/* styles */
import { PageContainer, Container } from "../../styles/global";

export default function TestGeo() {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  const handleClick = (e) => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const success = (pos) => {
    var crd = pos.coords;
    setCoords({ lat: crd.latitude, lon: crd.longitude });
  };

  const error = (err) => {
    console.error(`ERROR(${err.code}): ${err.message}`);
  };

  return (
    <PageContainer>
      <Container>
        <span>{`lat: ${coords.lat}`}</span>
        <span>{`lon: ${coords.lon}`}</span>
        <button data-testid='location-services' onClick={handleClick}>Allow Location Services</button>
      </Container>
    </PageContainer>
  );
}
