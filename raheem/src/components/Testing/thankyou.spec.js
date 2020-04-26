import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ThankYou from '../ThankYou';

// const mockHistoryPush = jest.fn();
// const mockHistoryGoBack = jest.fn();

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useHistory: () => ({
//         push: mockHistoryPush,
//         goBack: mockHistoryGoBack
//     })
// }));

describe('<ThankYou />', () => {
    it('renders', () => {
        render(<ThankYou />);
    });
});
