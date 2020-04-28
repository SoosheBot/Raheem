import React, {useContext}from 'react';
import { render, fireEvent } from '@testing-library/react';
import QRcode from "../QRcode";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
  }),
  useLocation: () => ({
    
  })
}));

describe('<QRcode />', () => {
    it('renders', () => {
        render(<QRcode />);
    })
  })