import React from 'react';
import { render, fireEvent, wait, queryAllByTestId } from '@testing-library/react';
import Report from "../Report";
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;


jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: jest.fn()
    })
  }));

describe('<Report />', () => {
    it('renders without crashing', () => {
        render(<Report />);
    })
})

const tags = queryAllByTestId