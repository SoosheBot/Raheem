import React from "react";
import { render } from "@testing-library/react";


import TestGeo from "../../Dashboard/TestGeo";

describe("<TestGeo />", () => {
    it("renders", () => {
      render(<TestGeo />);
    });
  });