import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

/*FireStore*/
import firebase from "../config/firebase";

/* bring in our global form store */
import { formStore } from "../formStore.js";

/* components */
import Officer from "./Officer";

/* assets */
import Back from "../assets/Back.svg";

/* styles */
import {
  PageContainer,
  BackButton,
  Container,
  Content,
  HeaderContainer,
  HeadingContainer,
  Controls,
  Divider,
} from "../styles/global";
import { StoryForm } from "../styles/global/forms.js";

//buttons
import { ButtonPrimary, ButtonSecondary } from "../styles/global";

function Story() {

  /* bring in useHistory and useLocation from react-router-dom */
  const history = useHistory();
  const location = useLocation();

  /* bring in our global state using the useContext hook
    and our form store */
  const globalState = useContext(formStore);

  /* deconstruct dispatch off globalState to dispatch an action */
  const { dispatch } = globalState;

  /* state for officer passed in from Report component */
  const [officer] = useState(location.state);

  /* configure react-hook-form */
  const { handleSubmit, register } = useForm();

  /* handle submission of the form */
  const onSubmit = (data) => {

    /* dispatch the form data to the backend to match its respective report */
    dispatch({ type: "STORY", payload: data });
    firebase
      .firestore()
      .collection("stories")
      .add({
        reportRef: `/raheem-mercy/reports/${globalState.state.reportId}`,
        officerId: officer.officerBadgeID,
        storyBody: data,
      });

    /* set the completed flag to true in localStorage and push the user
      to the thank you component to be conditionally rendered as a complete
      submission of the report */
    localStorage.setItem("completed", true);
    history.push(`/thank-you`, officer);
  };

  return (
    <PageContainer>
      <Container>
        <HeaderContainer>
          <BackButton className="go-back-button">
            <img
              onClick={() => history.goBack()}
              src={Back}
              alt="Go Back"
              data-testid="go-back"
            />
          </BackButton>

          {/* If there is no attached officer to the report, alert the user */}
          {location.state === undefined && (
            <div className="no-officer">
              <p className="no-officer-text">
                No officer information was loaded.{" "}
              </p>
              <p className="no-officer-text">
                Please rescan your QR code or continue submitting your report
                with no officer information attached.
              </p>
            </div>
          )}

          {/* If there is an attached officer, then display the officer's information */}
          {officer && officer.officer !== false && (
            <Officer
              profile={{
                officer: `${officer.officerRank} ${officer.officerLName}`,
                department: officer.officerPoliceDepartment,
                img: officer.img,
              }}
            />
          )}
        </HeaderContainer>
      </Container>
      <Divider />

      <Container>
        <HeadingContainer className="page-top">
          <h2>What Happened?</h2>
        </HeadingContainer>

        <Content>
          <p className="instruction">
            Describe the incident from start to finish. Be as descriptive as
            possible, and remember to include details about the officer's
            attitude and actions during this encounter.
          </p>

          <StoryForm>
            <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
              <textarea name="story" ref={register} />

              <Controls>
                {/* If the user opts to save the submission for later,
                    then set the completed flag to false in localStorage
                    and push them to the thank you component to conditionally
                    render the saved submission alert */}
                <ButtonPrimary
                  onClick={() => {
                    localStorage.setItem("completed", false);
                    history.push(`/thank-you`, officer);
                  }}
                >
                  Save For Later
                </ButtonPrimary>
                <ButtonSecondary data-testid="complete-report" type="submit">
                  Complete Report
                </ButtonSecondary>
              </Controls>
            </form>
          </StoryForm>
        </Content>
      </Container>
    </PageContainer>
  );
}

export default Story;
