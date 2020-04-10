import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

/*FireStore*/
import firebase from "../firebase";

/* bring in our global form store */
import { formStore } from '../formStore.js';

/* components */
import Officer from "./Officer";

/* assets */
import Back from '../assets/Back.svg';

/* styles */
import { Container, Content, SubHeading, Paragraph, Controls, Divider, Label } from '../styles/global';
import { HeaderContainer } from '../styles/slider';
import { StoryForm } from '../styles/global/forms.js';


function Story() {

    /* bring in useHistory from react-router-dom */
    const history = useHistory();

    /* bring in our global state using the useContext hook
    and our form store */
    const globalState = useContext(formStore);

    /* deconstruct dispatch off globalState to dispatch an action */
    const { dispatch } = globalState;

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
        history.push(`/thank-you`);
    };

    return (
        <Container>
            <Content>

                {/* {console.log('TESTING. IS STATE UPDATED?', globalState)} */}
                <div className="go-back">
                    <img onClick={() => history.goBack()} src={Back} alt="Go Back" data-testid="go-back"/>
                </div>
                <Officer profile={{
                    officer: "Officer Peyton",
                    precinct: "#15",
                    badge: "R4567"
                }} />
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
                <Paragraph className='description'>Describe the incident from start to finish. Be as descriptive
                as possible, and remember to include details about the officer's attitude
                and actions during this encounter.
                </Paragraph>

                <StoryForm>
                    <form onSubmit={handleSubmit(onSubmit)} data-testid='form'>
                        <textarea name="story" ref={register} />

                        <Controls>
                            <ButtonPrimary onClick={() => {
                                localStorage.setItem('completed', false);
                                history.push(`/email`);
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