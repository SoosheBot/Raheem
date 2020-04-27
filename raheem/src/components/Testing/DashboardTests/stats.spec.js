import React from "react";
import { render } from "@testing-library/react";

import Stats from "../../Dashboard/Stats";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    
  }),
}));

describe("<Stats />", () => {
  it("renders", () => {
    render(<Stats />);
  });
});

describe("", () => {
  it("toggles between 'visual' and 'list' views", () => {

  });
});