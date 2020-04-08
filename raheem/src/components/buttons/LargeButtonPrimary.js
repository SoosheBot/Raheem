import React from 'react';
import styled from 'styled-components';

export default function LargeButtonPrimary(props) {

    const { title } = props;

    return (
        <Primary>{title}</Primary>
    )
}

const Primary = styled.button`
    width: 34.3rem;
    height: 5.2rem;
    border: 1px solid #000000;
    border-radius: 0.6rem;
    background: #ffffff;
    margin: 0.5rem 0;
    font-weight: 900;
    font-family: 'Noto Serif', serif;
    font-size: 2.2rem;
    transition: all 300ms;

    &:hover {
        cursor: pointer;
        transition: opacity 300ms;
        opacity: 0.9;
    }

`;