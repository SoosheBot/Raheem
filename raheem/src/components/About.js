import React from 'react';
import { useHistory } from 'react-router-dom';

//styles
import styled from 'styled-components';

/* assets */
import Back from '../assets/Back.svg';


//Purpose of this component is to explain what Raheem is to new users
function About(props) {
    /* bring in useHistory hook from react-router-dom */
    const history = useHistory();

    const onSubmit = () => {
        history.push(`/details`);
    }

    return (
        <AboutContainer className="container">

            <AboutBackContainer>
                <div className="go-back">
                    <img data-testid="goBackButton" onClick={() => history.goBack()} src={Back} alt="Go Back" />
                </div>
            </AboutBackContainer>

            <AboutHeadingContainer>
                <AboutHeading id="top">
                    About Raheem
                </AboutHeading>
            </AboutHeadingContainer>

            <AboutTextContainer className="strategy">
                <AboutSubHeading>
                    Raheem is an independent service for reporting police conduct in the United States.
                </AboutSubHeading>

                <AboutContent>
                    We work to translate the lived experiences of people impacted by police violence into effective policy, officer accountability, and new narratives about how we keep our communities safe. Partners in our work include community-run oversight structures, public defenders, and advocacy organizations.
                </AboutContent>

                <AboutSubHeading>
                    Our Story
                </AboutSubHeading>

                <AboutContent>
                    Brandon D. Anderson founded Raheem after he lost his life partner to police violence during a routine traffic stop. The officer had a history of being physically abusive, particularly during traffic stops, but no one had ever reported him.
                </AboutContent>

                <AboutSubHeading>
                    Our Strategy
                </AboutSubHeading>

                <AboutContent>
                    Getting killed by police is the sixth leading cause of death for young Black men in America. Yet, we practically know nothing about how the 63 million police interactions every year shape our lives or the lives of our loved ones—until it's too late. There are 18,000 police departments in the country, each with its own unique, complicated process of reporting police misconduct. As a result, 95% of people do not report police violence and oversight boards miss the opportunity to have these experiences shape their policy agenda. We're working to change that.
                </AboutContent>
                <AboutContent>
                    We engage communities who’ve been directly impacted by policing to hear their stories about officer conduct that usually go unreported. Then we use this information to help local, independent investigators hold police officers accountable and support community-led oversight structures in advancing policies to end police violence.
                </AboutContent>
                <AboutContent>
                    Raheem uses data to identify places with the highest rates of police violence in the country. Then we partner with community oversight structures in these areas to collect firsthand reports of police conduct and help people file formal complaints that can lead to officers being held accountable. Our digital outreach and organizing strategy enables us to reach people who’ve been recently impacted by policing and connect them to oversight boards, organizations, and advocacy campaigns that can help them seek justice and accountability for police violence.
                </AboutContent>
            </AboutTextContainer>

            <AboutHeadingContainer>
                <AboutHeading>
                    Our Team
                </AboutHeading>
            </AboutHeadingContainer>

            <AboutTextContainer className="team">
                <AboutTeamSubHeading>
                    Brandon Anderson
                </AboutTeamSubHeading>
                <AboutContent>
                    Brandon D. Anderson, Founder & CEO, founded Raheem after police killed his partner during a routine traffic stop. He is a U.S. army veteran, 2019 TED Fellow, and Smithsonian Ingenuity Award Nominee. Brandon graduated from Georgetown University in 2015.
                </AboutContent>

                <AboutTeamSubHeading>
                    Nadav Savio
                </AboutTeamSubHeading>
                <AboutContent>
                    Nadav Savio, Head of Product at Raheem, has over 20 years of experience including leading product design for Google Search and user experience for Google.org. He previously ran his own design firm.
                </AboutContent>

                <AboutTeamSubHeading>
                    Samuel Sinyangwe
                </AboutTeamSubHeading>
                <AboutContent>
                    Samuel Sinyangwe, Data Strategist at Raheem, is a policy analyst who founded Mapping Police Violence, the first national database of police killings in the U.S. Samuel graduated from Stanford University in 2012.
                </AboutContent>

                <AboutTeamSubHeading>
                    Ariel Matos
                </AboutTeamSubHeading>
                <AboutContent>
                    Ariel Matos, Growth Strategist at Raheem, ran content strategy for FADER and Refinery29 (where she increased revenue over $100 million). Ariel graduated from University of San Francisco in 2013.
                </AboutContent>

                <AboutTeamSubHeading>
                    Ellie Dehghan
                </AboutTeamSubHeading>
                <AboutContent>
                    Ellie Dehghan has worked with communities surviving violence and seeking justice through a variety of pathways. She’s currently the Sr. Director of Legal at Callisto, a nonprofit utilizing tech to combat sexual assault & advance justice. Raised in the East Bay by Mexican and Iranian immigrants, Ellie is graduate of Stanford Law School, and UC Berkeley.
                </AboutContent>

                <AboutContent>
                    Proudly based in Oakland, CA, Raheem is a nonprofit, 501(c)(3) organization operating nationwide for a world in which we all feel safe to live and love freely.
                </AboutContent>

            </AboutTextContainer>

            <ButtonContainer className="landingButtonContainer">
                <a href="#top" className="top">Back To Top</a>
            </ButtonContainer>


        </AboutContainer>
    )
}

export default About;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Noto Serif', serif;
    margin: 2rem 0 3rem;
`

const AboutBackContainer = styled.div`
    width: 100%;
    padding: 0 20px 1.5rem;
`

const AboutTextContainer = styled.div`
    background: #ffffff;
    margin: 0 20px 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const AboutHeadingContainer = styled.div`
    width: 100%;
    background-color: #FFF600;
    margin-bottom: 1rem;
`
const AboutHeading = styled.h2`
    font-family: 'Neuzeit Grotesk', sans-serif;
    font-weight: 900;
    font-size: 4.4rem;
    line-height: 4.2rem;
    margin: 0 20px .2rem;
    text-align: left;
`

const AboutSubHeading = styled.h3`
    font-family: 'Neuzeit Grotesk', sans-serif;
    font-weight: 900;
    font-size: 3.2rem;
    line-height: 3.8rem;
    letter-spacing: -0.3809;
    margin: .3rem 0 1.7rem;
    text-align: left;
`

const AboutTeamSubHeading = styled.h3`
    font-family: 'Neuzeit Grotesk', sans-serif;
    font-weight: 900;
    font-size: 2.6rem;
    line-height: 2.8rem;
    letter-spacing: -0.3809;
    margin: .3rem 0 1.7rem;
    text-align: left;
`

const AboutContent = styled.p`
    font-family: 'Neuzeit Grotesk', sans-serif;
    font-size: 1.6rem;
    margin: 0 0 2rem;
    line-height: 2.6rem;
    text-align: left;
`

const ButtonContainer = styled.div`
    width: 100%;
    background-color: #111111;
    color: #FFF600;
    padding: 1rem 20px;
    font-family: 'Neuzeit Grotesk', sans-serif;
    font-size: 1.6rem;

    a.top {
       color: #FFF600;
       text-decoration: none; 
    }
`