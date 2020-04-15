import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function LargeButtonPrimary(props) {

    const history = useHistory();
    const { title, route } = props;

    const nextPage = (e) => {
        e.preventDefault();
        history.push(`/${route}`)
    }

    return (
        <Primary onClick={nextPage}>{title}</Primary>
    )
}

const Primary = styled.button`
    width: 100%;
    height: 3.2rem;
    background: #ffffff;
    border: 1px solid #111111;
    border-radius: 0.6rem;
    margin: 1.5rem 0;
    color: #111111;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-family: 'Noto Serif JP', serif;
    font-size: 2.2rem;
    line-height: 3.2rem;
    letter-spacing: -0.261905px;
    transition: all 300ms;

    &:hover {
        cursor: pointer;
        transition: opacity 300ms;
        opacity: 0.9;
    }

        @media (max-width 500px){
            height: 2.4rem;
            font-size: 2.0rem;
            line-height: 2.4rem;
            letter-spacing: -0.23809px;
            margin: 0.5rem 0;
        }
`;