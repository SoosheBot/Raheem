import React, { useState } from "react";
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

describe("when toggle button is selected", () => {
  it("toggles between 'visual' and 'list' views when clicked", () => {
    const ToggledDisplay = () => {
      const [visual, setVisual] = useState();
      const [list, setList] = useState()
      if (list === "none") {
        return <Stats visual={visual} onClick={() => setVisual(!list)} />
      } else {
        return <Stats list={list} onClick={() => setList(!visual)} />
      }
         
    }
    const { queryByText } = render(<ToggledDisplay />)
  });
});