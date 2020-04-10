import React from 'react';
import { useHistory } from 'react-router-dom';

//components
import Officer from './Officer'

//style
import styled from 'styled-components';
import { Container, Content, Controls, Divider } from '../styles/global';

//Purpose of this component is to serve as a landing after a user scans a QR code and explain what Raheem is to new users
function Landing(props) {

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
                    <ButtonPrimary data-testid="viewReports">View Reports</ButtonPrimary>
                    <ButtonSecondary data-testid="addReport" onClick={() => history.push(`/report`)}>Add a Report</ButtonSecondary>
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

const ButtonSecondary = styled.button`
    width: 100%;
    height: 5.2rem;
    border: 1px solid #000000;
    border-radius: 0.6rem;
    background: #111111;
    margin: 0.5rem 0;
    color: #ffffff;
    font-family: 'Noto Serif JP', serif;
    font-size: 2.2rem;
    line-height: 2.4rem;
    letter-spacing: 0.25;
    transition: all 300ms;

    &:hover {
        cursor: pointer;
        transition: opacity 300ms;
        opacity: 0.9;
    }
`;

const ButtonPrimary = styled.button`
    width: 100%;
    height: 5.2rem;
    border: 1px solid #111111;
    border-radius: 0.6rem;
    background: #ffffff;
    margin: 0.5rem 0;
    color: #111111;
    font-weight: bold;
    font-family: 'Noto Serif JP', serif;
    font-size: 2.2rem;
    line-height: 2.4rem;
    letter-spacing: 0.25;
    transition: all 300ms;

    &:hover {
        cursor: pointer;
        transition: opacity 300ms;
        opacity: 0.9;
    }

`;