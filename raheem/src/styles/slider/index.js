import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 4.5rem auto 1rem;
    
        
    @media(max-width: 500px){
        width: 85%;
        margin: 5rem auto 1rem;
    }
`

//styling for slider
export const TxSlider = withStyles({
    root: {
        color: '#FFF600',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#FFF600',
        border: '1px solid #555555',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    markLabel: {
        fontSize: '1.8rem',
        padding: '20px',
        // fontFamily: "'Neuzeit Grotesk', sans-serif",
        lineHeight: '1.8rem',
        letterSpacing: -0.2,
        color: '#111111'
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
        color: '#111111',
        fontFamily: 'Roboto',
        fontSize: '1.2rem',
    },
    track: {
        height: 5,
        borderRadius: 10,
        color: '#111111'
    },
    rail: {
        height: 5,
        borderRadius: 10,
        border: '1px solid #111111',
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