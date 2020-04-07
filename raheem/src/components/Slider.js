import React, { useState } from "react";

//styles
import styled from 'styled-components';

//material ui imports
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


//styled components styling
const Container = styled.div`
margin: 5%;
`

//slider styles from material UI
const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const TxSlider = withStyles({
    root: {
        color: '#242424',
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
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const marks = [
    {
        value: 1,
        label: 'Very Poorly',
    },
    {
        value: 2,
    },
    {
        value: 3,
    },
    {
        value: 4,
    },
    {
        value: 5,
    },
    {
        value: 6,
    },    
    {
        value: 7,
    },    
    {
        value: 8,
    },    
    {
        value: 9,
    },
    {
        value: 10,
        label: 'Very Well',
    },
];

export default function CustomizedSlider() {
    const classes = useStyles();

    return (
        <Container>
            <div>
                <h2>How would you rate your treatment during your interaction?</h2>
            </div>
            <div className={classes.root}>
            <div className={classes.margin}>
            <Typography gutterBottom></Typography>
            <TxSlider 
                valueLabelDisplay="auto" 
                aria-label="pretto slider" 
                defaultValue={0} 
                step={1}
                marks={marks}
                min={1}
                max={10}/>
            </div>
            </div>
        </Container>
    );
}
