import React from "react";
import { render } from "@testing-library/react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";

import Stats from "../../Dashboard/Stats";

describe("<Stats />", () => {
  it("renders", () => {
    render(<Stats />);
  });
});