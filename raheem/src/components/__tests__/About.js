import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import About from '../About';

const mockHistoryPush = jest.fn();
const mockHistoryGoBack = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
        goBack: mockHistoryGoBack
    })
}));

describe('<About />', () => {
    it('renders successfully', () => {
        render(<About />);
    });
});

describe('Go Back button', () => {
    it('uses useHistory to take the user back a page', () => {
        const container = render(<About />);
        const img = container.getByTestId('goBackButton');

        fireEvent.click(img);
        expect(mockHistoryGoBack).toHaveBeenCalled();
    });
});