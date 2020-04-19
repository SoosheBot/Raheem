import React from 'react'
import styled from 'styled-components'

/* assets */
import OfficerPlaceholder from '../assets/OfficerPlaceholder.png';

//styles
import { OfficerContainer, OfficerPic, OfficerName, OfficerInfo } from '../styles/global'

function Officer(props) {
    return (
        <OfficerContainer>
            <OfficerPic><img src={props.profile.img} alt="Officer Picture" /></OfficerPic>
            <div className="officer-info">
                <OfficerName>{props.profile.officer}</OfficerName>
                <OfficerInfo>{props.profile.department}</OfficerInfo>
                {/* <OfficerInfo>Precinct: {props.profile.precinct}</OfficerInfo>
                <OfficerInfo>Department: {props.profile.department}</OfficerInfo> */}
            </div>
        </OfficerContainer>
    )
}

export default Officer;