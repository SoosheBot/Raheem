import React from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

/*FireStore*/
import firebase from "../firebase"

//form validation
import { useForm } from "react-hook-form";

/* styles */
import { Container, Content, Controls, Divider, EmailParagraph, EmailLabel, EmailForm } from '../styles/global';
import { HeaderContainer } from '../styles/slider';

/* assets */
import Back from '../assets/Back.svg';

/* components */
import Officer from './Officer';

//component for user to submit their email address to save the form for later
const Email = () => {

    /* bring in useHistory hook from react-router-dom */
    const history = useHistory();

    /* configure react-hook-form */
    const { handleSubmit, register, errors, watch } = useForm();
    const onSubmit = values => {

        console.log("values from email on-submit", values);
        localStorage.setItem('completed', false);
        firebase
            .firestore()
            .collection('emails')
            .add({
                emails: values.email
            })
        history.push(`/thank-you`);
    };

    return (
        <Container>
            <Content>
                <div className="go-back">
                    <img data-testid="goBackButton" onClick={() => history.goBack()} src={Back} alt="Go Back" />
                </div>

                <Officer profile={{
                    officer: "Officer Peyton",
                    precinct: "#15",
                    badge: "R4567"
                }} />
            </Content>

            <Divider />

            <HeaderContainer>
                <h2>Let us remind you</h2>
            </HeaderContainer>

            <EmailParagraph>
                Type in your email and we can email you a reminder, so you can complete your
                in-depth review later
            </EmailParagraph>

            <Content>
                <EmailForm onSubmit={handleSubmit(onSubmit)}>
                    <EmailLabel>Email</EmailLabel>
                    <input
                        name="email"
                        data-testid="emailInput"
                        type="text"
                        placeholder="email@emailaddress.com"
                        ref={register({
                            required: 'Required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid e-mail address"
                            }
                        })}
                    />
                    {errors.email && errors.email.message}

                    {/* on submit will need to direct to thank you page with confirmation to check email for next steps */}

                    <Controls>
                        <ButtonPrimary data-testid="goBackLargeButton">Go Back</ButtonPrimary>
                        <ButtonSecondary data-testid="submitButton" type="submit">Submit</ButtonSecondary>
                    </Controls>
                </EmailForm>
            </Content>
        </Container>
    );
};

export default Email;

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