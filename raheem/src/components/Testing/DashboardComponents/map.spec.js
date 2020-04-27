import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";

import Map from "../../Dashboard/Map";

describe("<Map />", () => {
  it("renders", () => {
    render(<Map />);
  });
});

describe("ReactMapGL", () => {
  it("renders geolocate of react-map-gl", () => {
    render(
      <div>
        <ReactMapGL>
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </ReactMapGL>
      </div>
    );
  });
});
