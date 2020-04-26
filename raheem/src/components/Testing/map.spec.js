import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';

import Map from '../Dashboard/Map';

// const TOKEN = process.env.REACT_APP_MAPBOX_ACCESSTOKEN;


describe('<Map />', () => {
    it('renders without crashing', () => {
        render(<Map />);
    });
});

