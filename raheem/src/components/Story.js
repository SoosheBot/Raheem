import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

/*FireStore*/
import firebase from "../firebase";

/* bring in our global form store */
import { formStore } from "../formStore.js";

/* components */
import Officer from "./Officer";

/* assets */
import Back from "../assets/Back.svg";

/* styles */
import { Container, Content, SubHeading, Paragraph, Controls, Divider, Label } from '../styles/global';
import { HeaderContainer } from '../styles/slider';
import { StoryForm } from '../styles/global/forms.js';

//buttons
import { ButtonPrimary, ButtonSecondary } from '../styles/global';

function Story() {
  /* bring in useHistory from react-router-dom */


    /* bring in useHistory from react-router-dom */
    const history = useHistory();
    const location = useLocation();

    /* bring in our global state using the useContext hook
    and our form store */
    const globalState = useContext(formStore);

    /* deconstruct dispatch off globalState to dispatch an action */
    const { dispatch } = globalState;

    /* state for officer passed in from Report component */
    const [officer, setOfficer] = useState(location.state);

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = data => {
        // console.log('firing onSubmit');
        // console.log(`globalState:${globalState.state}`);
        dispatch({ type: 'STORY', payload: data });
        firebase
            .firestore()
            .collection('stories')
            .add({
                reportRef: `/raheem-b6ed6/reports/${globalState.state.reportId}`,
                storyBody: data
            })
        localStorage.setItem('completed', true);
        history.push(`/thank-you`, officer);
    };

    return (
        <Container>
            <Content>

                {/* {console.log('TESTING. IS STATE UPDATED?', globalState)} */}
                <div className="go-back">
                    <img onClick={() => history.goBack()} src={Back} alt="Go Back" data-testid="go-back" />
                </div>

                {location.state === undefined &&
                    <div>
                        <p className="no-officer">No officer information was loaded. Please rescan your QR code or continue submitting
                            your report with no officer information attached.</p>
                    </div>
                }

                {officer && officer.officer !== false &&
                    <Officer profile={{
                        officer: `${officer.officerRank} ${officer.officerLName}`,
                        precinct: officer.PoliceDepartment,
                        badge: officer.officerBadgeID,
                        img: officer.img
                    }} />
                }
            </Content>
            <Divider />
            <Content>
                <span className="thankyou">
                    Thank you for your feedback!
                </span>
            </Content>

            <HeaderContainer>
                <h2>Tell Us More</h2>
            </HeaderContainer>

            <Content>
                <Paragraph>Describe the incident from start to finish. Be as descriptive
                as possible, and remember to include details about the officer's attitude
                and actions during this encounter.
                </Paragraph>

                <StoryForm>
                    <form onSubmit={handleSubmit(onSubmit)} data-testid='form'>
                        <textarea name="story" ref={register} />

                        <Controls>
                            <ButtonPrimary onClick={() => {
                                localStorage.setItem('completed', false);
                                history.push(`/email`, officer);
                            }}>Save For Later</ButtonPrimary>
                            <ButtonSecondary type="submit">Complete Report</ButtonSecondary>
                        </Controls>
                    </form>
                </StoryForm>
            </Content>
        </Container>

    )
}

export default Story;
