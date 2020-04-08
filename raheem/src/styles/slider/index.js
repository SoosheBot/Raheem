import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export const SliderContainer = styled.div`
    display: flex;
    width: 99%;
    padding: 2% 1% 4%;
    margin-bottom: 3rem;
`

export const HeaderContainer = styled.div`
    display: flex;
    width: 85%;
    padding: 3% 0 2%;

    h2 {
        font-size: 2.6rem;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;
    }
`

export const TxSlider = withStyles({
    root: {
        color: '#FFF600',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid #111111',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    markLabel: {
        fontSize: '1.5rem',
        padding: '19px 30px',
        fontFamily: 'Roboto',
        lineHeight: '1.8rem',
        letterSpacing: -0.2,
        color: '#C4C4C4'
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
        color: '#111111',
        fontFamily: 'Roboto',
        fontSize: '1.1rem',
    },
    track: {
        height: 8,
        borderRadius: 10,
        border: '1px solid #111111',
        color: '#FFF600'
    },
    rail: {
        height: 8,
        borderRadius: 10,
        border: '2px solid #000000',
        color: '#555555',
    },
})(Slider);

export const marks = [
    {
        value: 1,
        label: 'Very Poorly',
    },
    {
        value: 10,
        label: 'Very Well',
    },
];