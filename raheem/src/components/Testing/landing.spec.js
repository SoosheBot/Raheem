import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Landing from '../Landing';
import Officer from '../Officer';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

describe('<Landing />', () => {
    it('renders', () => {
        render(<Landing />);
    });
});

// describe('Add a Report Button', () => {
//     it('renders successfully', () => {
//         const container = render(<Landing />);
//         const button = container.getByTestId('addReport');

//         expect(button.textContent).toMatch('Add a Report');
//     });
// });

// describe('View Reports Button', () => {
//     it('renders successfully', () => {
//         const container = render(<Landing />);
//         const button = container.getByTestId('viewReports');

//         expect(button.textContent).toMatch('View Reports');
//     });
// });

// describe('Add a Report Button click', () => {
//     it('calls history.push() once with /report route', () => {
//         const container = render(<Landing />);
//         const button = container.getByTestId('addReport');
//         fireEvent.click(button);
//         expect(mockHistoryPush).toHaveBeenCalledWith(`/report`);
//     });
// });

describe('<Officer />', () => {
    it('renders successfully', () => {
        render(<Officer
            profile={{
                officer: 'Officer Peyton',
                department: 'Oakland Police Department',
                precinct: '#19',
                badge: 'R4567'
            }} />);
    });
});