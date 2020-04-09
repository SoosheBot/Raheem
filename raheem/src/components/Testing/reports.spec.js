import React from 'react';
import {render, fireEvent, wait} from '@testing-library/react';
import Report from '../Report';
import { useHistory } from 'react-router-dom';

describe('<Report />', () => {
  it('renders without crashing', () => {
  render(<Report />);
  })
  })