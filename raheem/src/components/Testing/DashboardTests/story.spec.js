import React from "react";
import { render } from "@testing-library/react";

import Story from "../../Dashboard/Story";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), 
    useParams: () => ({
      
    }),
  }));

// describe("<Story />", () => {
//     it("renders", () => {
//       render(<Story />);
//     });
// });