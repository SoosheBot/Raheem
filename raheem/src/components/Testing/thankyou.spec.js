import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom'

import ThankYou from '../ThankYou';
import Officer from '../Officer';

const mockHistoryPush = jest.fn();
const mockHistoryGoBack = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
        goBack: mockHistoryGoBack
    })
}));

describe('<ThankYou />', () => {
    it('renders successfully', () => {
        render(<Router history={history}><ThankYou /></Router>);
    });
});

// describe('Go Back button', () => {
//     it('uses useHistory to take the user back a page', () => {
//         const container = render(<ThankYou />);
//         const img = container.getByTestId('goBackButton');

//         fireEvent.click(img);
//         expect(mockHistoryGoBack).toHaveBeenCalled();
//     });
// });

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

// describe('Cancelled Form / Saved', () => {
//     it('renders <Cancelled /> if user did not submit report', () => {
//         if (localStorage.getItem('completed') === 'false') {
//             render(<Cancelled />);
//         }
//     });
// });

// describe('Submitted', () => {
//     it('renders <Submitted /> if user submitted the report', () => {
//         if (localStorage.getItem('completed') === 'true') {
//             render(<Submitted />);
//         }
//     });
// });