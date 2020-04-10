import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import Email from '../Email';
import Officer from '../Officer';

import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

const mockHistoryPush = jest.fn();
const mockHistoryGoBack = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
        goBack: mockHistoryGoBack
    })
}));

describe('<Email />', () => {
    it('renders successfully', () => {
        render(<Email />);
    });
});

describe('Go Back button', () => {
    it('uses useHistory to take the user back a page', () => {
        const container = render(<Email />);
        const img = container.getByTestId('goBackButton');

        fireEvent.click(img);
        expect(mockHistoryGoBack).toHaveBeenCalled();
    });
});

describe('<Officer />', () => {
    it('renders successfully', () => {
        render(<Officer
            profile={{
                officer: 'Officer Peyton',
                precinct: '#15',
                badge: 'R4567'
            }} />);
    });
});

describe('Submit button', () => {
    it('renders successfully', () => {
        const container = render(<Email />);
        const button = container.getByTestId('submitButton');

        expect(button.textContent).toMatch('Submit');
    });
});

describe('Large Go Back button', () => {
    it('uses useHistory to take the user back a page', () => {
        const container = render(<Email />);
        const button = container.getByTestId('goBackLargeButton');

        fireEvent.click(button);
        expect(mockHistoryGoBack).toHaveBeenCalled();
    });
});

describe('Email Input', () => {
    it('user should be able to successfully enter in an email address', () => {
        const container = render(<Email />);
        const email = container.getByTestId('emailInput');
        const emailValue = 'randomEmail@mail.com';

        fireEvent.input(email, {
            target: {
                value: `randomEmail@mail.com`
            }
        })

        expect(email.value).toEqual(emailValue);
    });
});