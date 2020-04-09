import React from "react";
import { useHistory } from 'react-router-dom';


/*FireStore*/
import firebase from "../firebase"

//form validation
import { useForm } from "react-hook-form";

//buttons
import GoBack from "./buttons/GoBack.js";

/* styles */
import { Container, Content, Controls, Divider, EmailParagraph, EmailLabel, EmailForm } from '../styles/global';
import { HeaderContainer } from '../styles/slider';

/* assets */
import Back from '../assets/Back.svg';

/* components */
import Officer from './Officer';
import LargeButtonPrimary from './buttons/LargeButtonPrimary';
import LargeButtonSecondary from './buttons/LargeButtonSecondary';

//component for user to submit their email address to save the form for later
const Email = () => {

    /* bring in useHistory hook from react-router-dom */
    const history = useHistory();

    /* configure react-hook-form */
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {

        console.log("values from email on-submit",values);
        firebase
        .firestore()
        .collection('emails')
        .add({
            emails: values.email
        })

    };

    return (
        <Container>
            <Content>
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
                        <LargeButtonPrimary title="Go Back" />
                        <LargeButtonSecondary type="submit" title="Submit" />
                    </Controls>
                </EmailForm>
            </Content>
        </Container>
    );
};

export default Email;