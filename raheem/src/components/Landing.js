import React from 'react';

//ant design components
import { Progress } from 'antd';

//buttons
import Continue from './buttons/Continue.js';
import Exit from './buttons/Exit.js';

//style
import styled from 'styled-components';



//Purpose of this component is to explain what Raheem is to new users
function Landing() {

    return(
    <AboutContainer className="container">
        <AboutTextContainer className="landingTextContainer">
            <div>
                <AboutHeading>Your story can end police violence.</AboutHeading>
                <AboutSubHeading>Report and track police to build safer communities for people of color.
                </AboutSubHeading>
            </div>

            <div>
                <AboutHeading>About Raheem</AboutHeading>
                <AboutSubHeading>Raheem is an independent service for reporting police conduct in the United States.</AboutSubHeading>
                    <AboutContent>Being killed by police is the 6th leading cause of death for young Black men in America. Yet, there is limited information about the 63 million police interactions every year that shape our lives or the lives of our loved ones—until it's too late.  </AboutContent>
                    <AboutContent>
                    Raheem uses data to identify places with the highest rates of police violence in the country. Then we partner with community oversight structures in these areas to collect firsthand reports of police conduct and help people file formal complaints that can lead to officers being held accountable. 
                    </AboutContent>
            </div>
        </AboutTextContainer>



        <div className="landingButtonContainer">
            <div>
                <p>Click here to proceed.</p>
                <Continue />
                {/* goes to stop details */}
            </div>
            <div>
                <p>Click here to exit.</p>
                <Exit />
                {/* go to thank you */}
            </div>

        </div>
            {/* add progress bar */}
        <div className="progressContainer">

        </div>
    </AboutContainer>
    )
}

export default Landing;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Noto Serif', serif;

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
    margin: 0 0 2%;
`

const AboutSubHeading = styled.h3`
    font-weight: 900;
    font-size: 1.8rem;
    margin: 2% 0 3%;
`

const AboutContent = styled.p`
    font-size: 1.6rem;
    margin: 0 0 2rem;
    line-height: 2.6rem;
    text-align: justify;
`