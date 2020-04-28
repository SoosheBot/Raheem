import React, {useContext}from 'react';
import { render, fireEvent, wait, queryAllByTestId, getByTitle } from '@testing-library/react';
import Report from "../Report";

//mock the Firestore database
const { FakeFirestore } = require("firestore-jest-mock");

import "mutationobserver-shim";
global.MutationObserver = window.MutationObserver;

// import { ExpansionPanelActions, Input } from '@material-ui/core';
// import { formStore, StateProvider } from '../../formStore.js';


jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: jest.fn()
    }),
    useLocation: () => ({

    })
  }));

//create a new Fakefirestore database
const db = new FakeFirestore({
    fakeCollection: [
      { id: "1abc", storyBody: "Was protected" },
      { id: "2def", storyBody: "Officer was rude" },
    ],
  });

//mock adding a new record to a collection, like you would in realtime on Firebase
test("adds new report to a fakeCollection collection (database)", () => {
    db.collection("fakeCollection")
      .add({
        id: "3ghi",
        rating: 5
      })
      .then(function (docs) {
        expect(docs.exists).toBe(true);
        const data = docs.data();
  
        expect(data).toHaveProperty("rating", 5);
      })
      .catch((err) => {
        console.log("error adding report to fakeCollection database", err);
      });
  });
  

describe('<Report />', () => {
    it('renders', () => {
        render(<Report />);
    })
})


