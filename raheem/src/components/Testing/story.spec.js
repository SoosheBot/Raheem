import React, { useContext } from "react";
import { render, fireEvent } from "@testing-library/react";

//allows test to pass useHistory state without mutation-observer error
import "mutationobserver-shim";
global.MutationObserver = window.MutationObserver;

import Story from "../Story";

//for jest mocking
const mockHistoryPush = jest.fn();
const mockHistoryGoBack = jest.fn();

//mock the Firestore database
const { FakeFirestore } = require("firestore-jest-mock");

//mock Jest
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
    goBack: mockHistoryGoBack
  }),
  useLocation: () => ({}),
}));

//create a new Fakefirestore database
const db = new FakeFirestore({
  fakeCollection: [
    { id: "1abc", storyBody: "Was protected" },
    { id: "2def", storyBody: "Officer was rude" },
  ],
});

//mock add a new record to a collection, like you would in realtime on Firebase
test("adds new record to a fakeCollection collection (database)", () => {
  db.collection("fakeCollection")
    .add({
      id: "3ghi",
      storyBody: "Bad experience",
    })
    .then(function (docs) {
      expect(docs.exists).toBe(true);
      const data = docs.data();

      expect(data).toHaveProperty("storyBody", "Bad experience");
    })
    .catch((err) => {
      console.log("error adding to fakeCollection database", err);
    });
});

describe("Story page", () => {
  it("renders", () => {
    render(<Story />);
  });
});

describe("Story page", () => {
  it("submits the Story.js form", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<Story onSubmit={onSubmit} />);
    fireEvent.click(getByTestId("form"));
  });
});

describe("Go Back button", () => {
  it("uses useHistory to take user back a page", () => {
    const container = render(<Story />);
    const img = container.getByTestId("go-back");

    fireEvent.click(img);
    expect(mockHistoryGoBack).toHaveBeenCalled();
  });
});

describe("<Story />", () => {
  it("renders", () => {
    render(<Story />);
  });
});
