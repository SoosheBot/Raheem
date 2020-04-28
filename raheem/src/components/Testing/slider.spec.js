import React, {useContext}from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider from "../Slider";

describe('<Slider />', () => {
    it('renders', () => {
        render(<Slider />);
    });
});

