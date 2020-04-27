import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Story from '../../Dashboard/Story';

describe("Story page", () => {
    it("renders", () => {
      render(<Story />);
    });
  });