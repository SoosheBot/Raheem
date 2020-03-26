import React from 'react';
import { useHistory } from 'react-router-dom';

//progress bar
import ProgressBar from './other/ProgressBar'

//buttons
import Continue from './buttons/Continue.js';
import Exit from './buttons/Exit.js';

//style
import styled from 'styled-components';



//Purpose of this component is to explain what Raheem is to new users
function Landing(props) {
    /* bring in useHistory hook from react-router-dom */
    const history = useHistory();

    const onSubmit = () => {
        history.push(`/details`);
    }

    return (
        <AboutContainer className="container">

            <AboutStoryContainer>
                <AboutHeading>Your story can end police violence.</AboutHeading>
                <AboutSubHeading>Report and track police to build safer communities for people of color.
                </AboutSubHeading>
            </AboutStoryContainer>

            <AboutTextContainer >
                <div>
                    <AboutHeading>About Raheem</AboutHeading>
                    <AboutSubHeading>Raheem is an independent service for reporting police conduct in the United States.</AboutSubHeading>
                    <AboutContent>Being killed by police is the 6th leading cause of death for young Black men in America. Yet, there is limited information about the 63 million police interactions every year that shape our lives or the lives of our loved ones—until it's too late.  </AboutContent>
                    <AboutContent>
                        Raheem uses data to identify places with the highest rates of police violence in the country. Then we partner with community oversight structures in these areas to collect firsthand reports of police conduct and help people file formal complaints that can lead to officers being held accountable.
                    </AboutContent>
                </div>

                <ButtonContainer className="landingButtonContainer">
                    <ExitContainer>
                        <Exit />
                        {/* go to thank you */}
                    </ExitContainer>
                    <ContinueContainer>
                        <Continue />
                        {/* goes to stop details */}
                    </ContinueContainer>
                </ButtonContainer>

                <div className="progressContainer">
                    {/* add progress bar */}
                </div>
            </AboutTextContainer>
        </AboutContainer>
    )
}

export default Landing;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Noto Serif', serif;
    margin: 5rem 0;
`

const AboutStoryContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 9% 5%;

    @media (max-width: 500px) {
        width: 95%;
    }
`

const AboutTextContainer = styled.div`
    background: #ffffff;
    width: 80%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 9%;

    @media (max-width: 500px) {
        width: 95%;
    }
`

const AboutHeading = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 4.0rem;
    margin: 2% 0 2%;
`

const AboutSubHeading = styled.h3`
    font-weight: 900;
    font-size: 1.8rem;
    margin: 2% 0 3%;
    line-height: 2.6rem;
`

const AboutContent = styled.p`
    font-size: 1.6rem;
    margin: 0 0 2rem;
    line-height: 2.6rem;
    text-align: justify;
`

const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 500px) {
        width: 95%;
    }
`

const ContinueContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2% 0;
`

const ExitContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2% 0;
`