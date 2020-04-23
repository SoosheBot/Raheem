import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Map from '../Dashboard/Map';

describe('<Map />', () => {
    it('renders successfully', () => {
        render(<Map />);
    });
});
