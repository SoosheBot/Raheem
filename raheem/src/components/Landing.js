import React from 'react';
import { useHistory } from 'react-router-dom';

//components
import Officer from './Officer'

//style
import styled from 'styled-components';
import { Container, Content } from '../styles/global';

/* components */
import LargeButtonPrimary from './buttons/LargeButtonPrimary';
import LargeButtonSecondary from './buttons/LargeButtonSecondary';


//Purpose of this component is to serve as a landing after a user scans a QR code and explain what Raheem is to new users
function Landing(props) {
    /* bring in useHistory hook from react-router-dom */
    const history = useHistory();

    return (
        <AboutContainer className="container">

            <AboutStoryContainer>
                <AboutHeading>
                    Your story can end police violence.
                </AboutHeading>
            </AboutStoryContainer>

            <AboutTextContainer>

                <AboutSubHeading>
                    Report and track police to build safer communities for people of color.
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

                <ButtonContainer className="landingButtonContainer">
                    <LargeButtonPrimary title="View Reports" />
                    <LargeButtonSecondary title="Add a Report" />
                </ButtonContainer>

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
    // padding: 0 9% 5%;
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

const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 500px) {
        width: 95%;
    }
`

const ViewButton = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 2.4rem;
    line-height: 2.6rem;
`

const ReportButton = styled.button`
    background: #FFF600;
    font-family: 'Roboto', sans-serif;
    font-size: 2.4rem;
    line-height: 2.6rem;
`

const Divider = styled.div`
    height: 4px;
    width: 100%;
    background: #111111;
    margin-bottom: 4.4rem;
`;
