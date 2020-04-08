import React, { createContext, useReducer } from 'react';

/* setup our initial global state */
const initialState = {
    reportId: '',
    tags: [],
    race: '',
    gender: '',
    transgender: null,
    rating: '',
    dob: '',
    incidentDate: '',
    time: ''
}

/* create our context object using the createContext hook */
const formStore = createContext(initialState);

/* deconstruct Provider from our form store */
const { Provider } = formStore;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'REPORT':
                return {
                    ...state,
                    ...action.payload
                }
            case 'STORY':
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return state;
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { formStore, StateProvider }