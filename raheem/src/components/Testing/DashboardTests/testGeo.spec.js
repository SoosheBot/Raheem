import React from "react";
import { render } from "@testing-library/react";

import TestGeo from "../../Dashboard/TestGeo";

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
//   useParams: () => ({
    
//   }),
// }));

describe("<TestGeo />", () => {
    it("renders", () => {
      render(<TestGeo />);
    });
  });