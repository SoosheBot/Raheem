import React, { useContext } from "react";
import { useForm } from "react-hook-form";

/* bring in our global form store */
import { formStore } from '../formStore.js';

/* components */
import Officer from "./Officer";
import LargeButtonPrimary from '../components/buttons/LargeButtonPrimary';
import LargeButtonSecondary from '../components/buttons/LargeButtonSecondary';

/* assets */
import Back from '../assets/Back.svg';

/* styles */
import { Container, Content, SubHeading, Paragraph, Controls, Divider, Label } from '../styles/global';
import { HeaderContainer } from '../styles/slider';
import { StoryForm } from '../styles/global/forms.js';

function Story() {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = data => {
        dispatch({ type: 'STORY', payload: data });
    };

    /* bring in our global state using the useContext hook
    and our form store */
    const globalState = useContext(formStore);

    /* deconstruct dispatch off globalState to dispatch an action */
    const { dispatch } = globalState;

    return (
        <Container>
            <Content>

                {console.log('TESTING. IS STATE UPDATED?', globalState)}
                <div className="go-back">
                    <img src={Back} alt="Go Back" />
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea name="story" ref={register} />

                        <Controls>
                            <LargeButtonPrimary title="Save For Later" />
                            <LargeButtonSecondary type="submit" title="Complete Report" />
                        </Controls>
                    </form>
                </StoryForm>
            </Content>
        </Container>

    )
}

export default Story;