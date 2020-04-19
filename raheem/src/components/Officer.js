import React from 'react'
// import styled from 'styled-components'

/* assets */
import OfficerPlaceholder from '../assets/OfficerPlaceholder.png';

//styles
import { OfficerContainer, OfficerPic, OfficerName, OfficerInfo } from '../styles/global'

function Officer(props) {
    return (
        <OfficerContainer>
            <OfficerPic><img src={props.profile.img} alt="Officer Picture" /></OfficerPic>
            <OfficerName>{props.profile.officer}</OfficerName>
            <OfficerInfo>Precinct: {props.profile.precinct}</OfficerInfo>
            <OfficerInfo>Department: {props.profile.department}</OfficerInfo>
        </OfficerContainer>
    )
}

export default Officer;