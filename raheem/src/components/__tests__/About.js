import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import About from '../About';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

describe('<About />', () => {
    it('renders successfully', () => {
        render(<About />);
    });
});