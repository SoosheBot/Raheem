import React, {useContext}from 'react';
import { render, fireEvent, wait, queryAllByTestId, getByTitle } from '@testing-library/react';
import Report from "../Report";

//mock the Firestore database
const { FakeFirestore } = require("firestore-jest-mock");

// import "mutationobserver-shim";
// import { ExpansionPanelActions, Input } from '@material-ui/core';
// import { formStore, StateProvider } from '../../formStore.js';

// global.MutationObserver = window.MutationObserver;

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
  



// jest.mock('react-router-dom', () => ({
//       ...jest.requireActual('react-router-dom'),
//     useHistory: () => ({
//       push: jest.fn()
//     })
//   }));

// describe('<Report />', () => {
//     it('renders without crashing', () => {
//         render(<Report />);
//     })

    // it('submits a report', () => {
    //   const { getByText } = render(<Report />)
    //   act(() => {
    //     fireEvent(
    //       getByText('Add This Report'),
    //       new MouseEvent('click', {
    //         cancelable: true,
    //       })
    //     )
    //   })
      
    // })
// })

// const document = render(<Report />)
// const cont = document.getByTestId('allmytags')
// const tags = cont.querySelectorAll("Tag");

// tags.forEach((tag) => {
  
//   describe("tag is clicked", ()=>{
//     it('changes local state to contains tag value', () =>{
//       fireEvent.click(tag);
//     }) 
//     expect(tag.classList).toBe("toggled")
//   })
// })

// const fakedata = {
//   reportId: '',
//   tags: ["helped", "protected"],
//   race: 'asian',
//   gender: 'male',
//   selfIdentify: '',
//   rating: 5,
//   dob: '10/17/1995',
//   incidentDate: '04/09/2020',
//   time: '15:00'
// }

// const globalstate = jest.mock('../../formStore.js', () =>{
//   useContext(formStore);
// });

// const btn = document.getByTitle("Add This Report");

// describe("submit button click", () =>{
//   it("data is submitted to global state", ()=>{
//     fireEvent.click(btn);
//   })
//   expect()
// })

const val = {value:3}

// describe("report", ()=>{
//   test("Slider Test", ()=>{
//     const { getByTestId } = render(<Report />);
//     //console.log(`Element: ${getByTestId("slider")}`);
//     fireEvent.change(getByTestId("slider"), {
//       target:val
//     })
    
//   })
// })