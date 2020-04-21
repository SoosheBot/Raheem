import React, { createContext, useReducer } from 'react';

/* setup our initial global state */
const initialState = {
    loading: false,
    error: '',
    filtering: false
}

/* create our context object using the createContext hook */
const globalStore = createContext(initialState);

/* deconstruct Provider from our form store */
const { Provider } = globalStore;

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'FILTERING':
                console.log('definitely got here');
                const newState = {
                    ...state,
                    filtering: true,
                    wtf: true
                }
                return newState;
            default:
                return state;
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { globalStore, GlobalProvider }