import React, {useContext}from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThankYou from "../ThankYou";

const mockHistoryPush = jest.fn();
const mockHistoryGoBack = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), 
    useHistory: () => ({
        goBack: mockHistoryGoBack
    }),
    useLocation: () => ({
    }),
  }));


describe('<ThankYou />', () => {
    it('renders', () => {
        render(<ThankYou />);
    });
});

describe('Go Back button', () => {
    it('uses useHistory to take the user back a page', () => {
        const container = render(<ThankYou />);
        const img = container.getByTestId('goBackButton');

        fireEvent.click(img);
        expect(mockHistoryGoBack).toHaveBeenCalled();
    });
});

describe('Cancelled Form / Saved', () => {
    it('renders <Cancelled /> if user did not submit report', () => {
        if (localStorage.getItem('completed') === 'false') {
            render(<Cancelled />);
        }
    });
});

describe('Submitted', () => {
    it('renders <Submitted /> if user submitted the report', () => {
        if (localStorage.getItem('completed') === 'true') {
            render(<Submitted />);
        }
    });
});

