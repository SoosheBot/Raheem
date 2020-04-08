import React from 'react'
import styled from 'styled-components'

const OfficerPic = styled.img`
    margin-bottom: 2rem;
    width: 124px;
    height: 127px;
    border-radius: 50%;
    background: grey;
`;

const OfficerInfo = styled.p`
    font-family: 'Noto Serif', serif;
    text-align: center;
    font-size: 2.2rem;
    margin: 1%;
    font-weight: bold;
`;

const DivO = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
`;

function Officer(props) {
    return (
        <DivO>
            <OfficerPic />
            <OfficerInfo>{props.profile.officer}</OfficerInfo>
            <OfficerInfo>Precinct: {props.profile.precinct}</OfficerInfo>
            <OfficerInfo>Badge Number: {props.profile.badge}</OfficerInfo>
        </DivO>
    )
}

export default Officer;