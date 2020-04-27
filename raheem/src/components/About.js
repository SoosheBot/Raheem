import React from "react";
import { useHistory } from "react-router-dom";

//styles
// import styled from 'styled-components';
// import { PageContainer, Container, YellowHeaderContainer, Content, BackButton, SmallHeading, Heading, Subheading, HeadingContainer, HeaderContainer } from '../styles/global';
import {
  PageContainer,
  Container,
  Content,
  BackButton,
  SmallHeading,
  Heading,
  Subheading,
  HeadingContainer,
  HeaderContainer,
} from "../styles/global";

/* assets */
import Back from "../assets/Back.svg";

//Purpose of this component is to explain what Raheem is to new users
function About(props) {
  /* bring in useHistory hook from react-router-dom */
  const history = useHistory();

  return (
    <PageContainer>
      <HeaderContainer>
        <BackButton>
          <img
            data-testid="goBackButton"
            onClick={() => history.goBack()}
            src={Back}
            alt="Go Back"
          />
        </BackButton>
      </HeaderContainer>

      <Container>
        <HeadingContainer className="about, page-top">
          <Heading className="about">About Raheem</Heading>
        </HeadingContainer>

        <Subheading className="about">
          Raheem is an independent service for reporting police conduct in the
          United States.
        </Subheading>

        <Content className="about">
          We work to translate the lived experiences of people impacted by
          police violence into effective policy, officer accountability, and new
          narratives about how we keep our communities safe. Partners in our
          work include community-run oversight structures, public defenders, and
          advocacy organizations.
        </Content>

        <Subheading className="about">Our Story</Subheading>

        <Content className="about">
          Brandon D. Anderson founded Raheem after he lost his life partner to
          police violence during a routine traffic stop. The officer had a
          history of being physically abusive, particularly during traffic
          stops, but no one had ever reported him.
        </Content>

        <Subheading className="about">Our Strategy</Subheading>

        <Content className="about">
          Getting killed by police is the sixth leading cause of death for young
          Black men in America. Yet, we practically know nothing about how the
          63 million police interactions every year shape our lives or the lives
          of our loved ones—until it's too late. There are 18,000 police
          departments in the country, each with its own unique, complicated
          process of reporting police misconduct. As a result, 95% of people do
          not report police violence and oversight boards miss the opportunity
          to have these experiences shape their policy agenda. We're working to
          change that.
        </Content>
        <Content className="about">
          We engage communities who’ve been directly impacted by policing to
          hear their stories about officer conduct that usually go unreported.
          Then we use this information to help local, independent investigators
          hold police officers accountable and support community-led oversight
          structures in advancing policies to end police violence.
        </Content>
        <Content className="about">
          Raheem uses data to identify places with the highest rates of police
          violence in the country. Then we partner with community oversight
          structures in these areas to collect firsthand reports of police
          conduct and help people file formal complaints that can lead to
          officers being held accountable. Our digital outreach and organizing
          strategy enables us to reach people who’ve been recently impacted by
          policing and connect them to oversight boards, organizations, and
          advocacy campaigns that can help them seek justice and accountability
          for police violence.
        </Content>

        <HeadingContainer className="about">
          <h2>Our Team</h2>
        </HeadingContainer>

        <SmallHeading className="about">Brandon Anderson</SmallHeading>
        <Content className="about">
          Brandon D. Anderson, Founder & CEO, founded Raheem after police killed
          his partner during a routine traffic stop. He is a U.S. army veteran,
          2019 TED Fellow, and Smithsonian Ingenuity Award Nominee. Brandon
          graduated from Georgetown University in 2015.
        </Content>

        <SmallHeading className="about">Nadav Savio</SmallHeading>
        <Content className="about">
          Nadav Savio, Head of Product at Raheem, has over 20 years of
          experience including leading product design for Google Search and user
          experience for Google.org. He previously ran his own design firm.
        </Content>

        <SmallHeading className="about">Samuel Sinyangwe</SmallHeading>
        <Content className="about">
          Samuel Sinyangwe, Data Strategist at Raheem, is a policy analyst who
          founded Mapping Police Violence, the first national database of police
          killings in the U.S. Samuel graduated from Stanford University in
          2012.
        </Content>

        <SmallHeading className="about">Ariel Matos</SmallHeading>
        <Content className="about">
          Ariel Matos, Growth Strategist at Raheem, ran content strategy for
          FADER and Refinery29 (where she increased revenue over $100 million).
          Ariel graduated from University of San Francisco in 2013.
        </Content>

        <SmallHeading className="about">Ellie Dehghan</SmallHeading>
        <Content className="about">
          Ellie Dehghan has worked with communities surviving violence and
          seeking justice through a variety of pathways. She’s currently the Sr.
          Director of Legal at Callisto, a nonprofit utilizing tech to combat
          sexual assault & advance justice. Raised in the East Bay by Mexican
          and Iranian immigrants, Ellie is graduate of Stanford Law School, and
          UC Berkeley.
        </Content>

        <Content className="about">
          Proudly based in Oakland, CA, Raheem is a nonprofit, 501(c)(3)
          organization operating nationwide for a world in which we all feel
          safe to live and love freely.
        </Content>
      </Container>

      {/* <ButtonContainer className="landingButtonContainer">
                <a href="#top" className="top">Back To Top</a>
            </ButtonContainer> */}
    </PageContainer>
  );
}

export default About;
