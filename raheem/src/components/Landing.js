import React from 'react';

//components
import Officer from './Officer'

//style
import styled from 'styled-components';
import { Container, Content, Controls, Divider } from '../styles/global';

/* components */
import LargeButtonPrimary from './buttons/LargeButtonPrimary';
import LargeButtonSecondary from './buttons/LargeButtonSecondary';


//Purpose of this component is to serve as a landing after a user scans a QR code and explain what Raheem is to new users
function Landing(props) {

    return (
        <AboutContainer className="container">

            <AboutStoryContainer>
                <AboutHeading>
                    Your story can end police violence.
                </AboutHeading>
            </AboutStoryContainer>

            <AboutTextContainer>

                <AboutSubHeading>
                    Raheem is an independent service for reporting police conduct to help build safer communities for people of color.
                </AboutSubHeading>



                {/* <AboutSubHeading>
                    Raheem is an independent service for reporting police conduct in the United States.
                </AboutSubHeading>
                <AboutSubHeading>
                    Submit your report to help track police behavior and build safer communities for people of color.
                </AboutSubHeading> */}

            </AboutTextContainer>

            <Divider />

            <AboutTextContainer>
                <Officer
                    profile={{
                        officer: "Officer Peyton",
                        precinct: "#15",
                        badge: "R4567"
                    }} />

                <Controls>
                    <LargeButtonPrimary title="View Reports" />
                    <LargeButtonSecondary route="report" title="Add a Report" />
                </Controls>
            </AboutTextContainer>
        </AboutContainer>
    )
}

export default Landing;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', serif;
    margin: 5rem 0;
`

const AboutStoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #FFF600;
`

const AboutTextContainer = styled.div`
    background: #ffffff;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
`

const AboutHeading = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 4.4rem;
    line-height: 4.2rem;
    padding: 0 20px;
    margin: 2% 0 2%;
`

const AboutSubHeading = styled.h3`
    font-weight: 900;
    font-size: 2.6rem;
    margin: 2.2rem 0;
    line-height: 2.6rem;
`