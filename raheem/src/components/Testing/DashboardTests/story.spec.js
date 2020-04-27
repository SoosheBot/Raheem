import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Story from '../../Dashboard/Story';
import { StoryContainer, StoryContent, LongStoryContent, StoryTagContainer, StoryTag } from '../../../styles/dashboard';

describe("Story page", () => {
    it("renders", () => {
      render(<Story />);
    });
  });