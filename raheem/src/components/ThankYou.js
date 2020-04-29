import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Officer from "./Officer";

//styles
// import { PageContainer, Container, BackButton, Feedback, Content, Divider, Controls, HeaderContainer, HeadingContainer } from '../styles/global';
import {
  PageContainer,
  Container,
  BackButton,
  Content,
  Divider,
  Controls,
  HeaderContainer,
  HeadingContainer,
} from "../styles/global";

//buttons
import { ButtonPrimary, ButtonSecondary } from "../styles/global";

/* assets */
import Back from "../assets/Back.svg";

function ThankYou() {
  /* useHistory from react-router-dom */
  const history = useHistory();
  const location = useLocation();

  /* state for managing whether or not the user successfully submitted
    a report or chose to save it for later */
  const [cancelled, setCancelled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* state for officer from Story or Email component */
  const [officer] = useState(location.state);

  /* on rendering of the component, check to see if the user successfully
    completed the report or not and set our state accordingly */
  useEffect(() => {
    if (localStorage.getItem("completed") === "true") {
      setSubmitted(true);
    } else if (localStorage.getItem("completed") === "false") {
      setCancelled(true);
    }
  }, []);

  return (
    <PageContainer>
      <Container>
        <HeaderContainer>
          <BackButton className="go-back">
            <img
              data-testid="goBackButton"
              onClick={() => history.goBack()}
              src={Back}
              alt="Go Back"
            />
          </BackButton>

          {/* If there is no attached officer to the report, then alert the user */}
          {location.state === undefined && (
            <div className="no-officer">
              <p className="no-officer-text">
                No officer information was loaded.
              </p>
              <p className="no-officer-text">
                Please rescan your QR code or continue submitting your report
                with no officer information attached.
              </p>
            </div>
          )}

          {/* If there is an attached officer to the report, display the officer's information */}
          {officer && officer.officer !== false && (
            <Officer
              profile={{
                officer: `${officer.officerRank} ${officer.officerLName}`,
                precinct: officer.PoliceDepartment,
                badge: officer.officerBadgeID,
                img: officer.img,
              }}
            />
          )}
        </HeaderContainer>
      </Container>
      <Divider />

      {/* If the user has cancelled or saved their report, alert
        them that a reminder will be sent to them to complete it */}
      {cancelled === true && (
        <Container className="thank-you">
          <HeadingContainer className="page-top">
            <h2>Reminder Sent!</h2>
          </HeadingContainer>

          <Content className="thanks">
            <p className="instruction">
              Follow the link in your email to complete your story.
            </p>
          </Content>
          <Controls>
            <ButtonPrimary data-testid="homePageButton">Home</ButtonPrimary>
            <ButtonSecondary data-testid="officerPageButton">
              Officer Page
            </ButtonSecondary>
          </Controls>
        </Container>
      )}

      {/* If the user has successfully submitted the report, alert them
        that we have received it and their story will help end police violence */}
      {submitted && (
        <Container className="thank-you">
          <HeadingContainer>
            <h2>Report Submitted!</h2>
          </HeadingContainer>

          <Content className="thanks">
            <p>Your story will help end police violence.</p>
          </Content>

          <Controls>
            {/* Push the user back to the home / splash page */}
            <ButtonPrimary
              data-testid="homePageButton"
              onClick={() => history.push(`/`)}
            >
              Home
            </ButtonPrimary>

            {/* Push the user to the officer's page to view officer specific reports */}
            <ButtonSecondary
              data-testid="officerPageButton"
              onClick={() =>
                history.push(`/officers/${officer.officerBadgeID}`)
              }
            >
              Officer Page
            </ButtonSecondary>
          </Controls>
        </Container>
      )}
    </PageContainer>
  );
}

export default ThankYou;
