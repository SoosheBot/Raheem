import React from 'react'
import styled from 'styled-components'

/* assets */
import OfficerPlaceholder from '../assets/OfficerPlaceholder.png';

const OfficerPic = styled.div`
    margin-bottom: 2rem;
    width: 182px;
    height: 186px;
    left: 93px;
    top: 111px;
    // height: 186.4px;
    border-radius: 50%;
    background: grey;
    border: 1px solid #111111;

    img {
        object-fit: cover;
        width: 100%;
        height: 184px;
        border-radius: 50%;
    }
`;

const OfficerName = styled.p`
    font-family: 'Noto Serif JP', serif;
    text-align: center;
    line-height: 30px;
    font-weight: 900;
    font-size: 22px;
    font-weight: bold;
`;

const OfficerInfo = styled.p`
    font-family: 'Noto Serif JP', serif;
    text-align: center;
    line-height: 24px;
    font-size: 16px;
    font-weight: 900;
`;

const DivO = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`;

function Officer(props) {
    return (
        <DivO>
            <OfficerPic><img src={props.profile.img} alt="Officer Picture" /></OfficerPic>
            <OfficerName>{props.profile.officer}</OfficerName>
            <OfficerInfo>Precinct: {props.profile.precinct}</OfficerInfo>
            <OfficerInfo>Department: {props.profile.department}</OfficerInfo>
        </DivO>
    )
}

export default Officer;