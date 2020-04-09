import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import Story from "./Story";
import { useForm } from "react-hook-form";

import "mutationobserver-shim";
global.MutationObserver = window.MutationObserver;

const { FakeFirestore } = require("firestore-jest-mock");

const db = new FakeFirestore({
  mockStory: [
    { id: "1abc", storyBody: "Was protected" },
    { id: "2def", storyBody: "Officer was rude" }
  ]
});

test("adds a new record to the mockStory collection (database)", () => {
  db
    .collection("mockStory")
    .add({
      id: "3ghi",
      storyBody: "Bad experience"
    })
    .then(function (docs) { 
      expect(docs.exists).toBe(true); 
      const data = docs.data();   

      expect(data).toHaveProperty("storyBody", "Bad experience");
    })
    .catch(err => {
      console.log("error adding to mock-story collection", err);
    });    
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("tests Story.js page", () => {
  it("renders without crashing", () => {
    render(<Story />);
  }); 
});

describe("GoBack button", () => {
  it('sends the user to the previous page', () => {
    const onSubmit = jest.fn();
    const { getAllByAltText } = render(<Story onSubmit={onSubmit} />);
    fireEvent.click(getAllByAltText("Go Back"));
    expect(onSubmit).toHaveBeenCalled();
  });
});