import React, { useContext } from "react";
import { useForm } from "react-hook-form";

/*FireStore*/
import firebase from "../firebase"

/* bring in our global form store */
import { formStore } from '../formStore.js';

/* components */
import Officer from "./Officer";
import LargeButtonPrimary from '../components/buttons/LargeButtonPrimary';
import LargeButtonSecondary from '../components/buttons/LargeButtonSecondary';

/* styles */
import { Container, Content, SubHeading, Paragraph, Controls } from '../styles/global';
import { StoryForm } from '../styles/global/forms.js';


function Story() {

    /* bring in our global state using the useContext hook
    and our form store */
    const globalState = useContext(formStore);

    /* deconstruct dispatch off globalState to dispatch an action */
    const { dispatch } = globalState;

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = data => {
        console.log('firing onSubmit');
        console.log(`globalState:${globalState.state}`);
        dispatch({ type: 'STORY', payload: data });
        firebase
        .firestore()
        .collection('stories')
        .add({
            reportRef: `/raheem-b6ed6/reports/${globalState.state.reportId}`,
            storyBody: data
        })
    };





    return (
        <Container>
            <Content>

                {console.log('TESTING. IS STATE UPDATED?', globalState)}

                <Officer profile={{
                    officer: "Officer Peyton",
                    precinct: "#15",
                    badge: "R4567"
                }} />

                <SubHeading>Tell us more</SubHeading>
                <Paragraph>Describe the incident from start to finish. Be as descriptive
                as possible, and remember to include details about the officer's attitude
                and actions during this encounter.
                </Paragraph>

                <StoryForm>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea name="story" ref={register} />

                        <Controls>
                            <LargeButtonPrimary title="Save For Later" />
                            <LargeButtonSecondary type="submit" title="Complete report" />
                        </Controls>
                    </form>
                </StoryForm>
            </Content>
        </Container>

    )
}

export default Story;