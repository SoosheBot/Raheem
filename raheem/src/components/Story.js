import React from "react";

//form validation
import { useForm } from "react-hook-form";

import Continue from './buttons/Continue';
import GoBack from './buttons/GoBack';
import Save from './buttons/Save';

import styled from "styled-components";

const FormY = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 375px;
    background-color: #FFF600;
`;

const FormW = styled.form`
    background-color: #FFFFFF;
    margin: 1em;
    padding-bottom: 1em;
`;

const Heading1 = styled.h1`
    font-size: 4em;
    text-align: center;
    padding-right: 1em;
    padding-left: 1em;
    padding-top: 1em;
    padding-bottom: 0.5em;
`;

const Heading2 = styled.h2`
    text-align: center;
    padding: 1em;
`;

const PHeading = styled.p`
    text-align: center;
    font-size: 18px;
    margin-left: 3em;
    margin-right: 3em;
    margin-bottom: 3em;
`;

const PTag = styled.p`
    font-size: 14px;
    padding: 2em;
`;

function Story() {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log("values from story on-submit", values);
    };

    return (
        <FormY>
            <div>
                <div>
                    <Heading2>My Stories</Heading2>

                </div>
                <Heading1>Your story matters.</Heading1>
                <PHeading>The more we know about police behavior, the greater chance we have to change it.</PHeading>
            </div>

            <FormW onSubmit={handleSubmit(onSubmit)}>
                <p>Details</p>
                <h2>I was Profiled by police near Schenectady, New York 12345</h2>

                <h2>What happened?</h2>
                <PTag>
                    Describe the indicent from start to finish. Be as descriptive as possible, and remember to include details about the officer's attitude and actions during this encounter.
                </PTag>

                <input
                    name="story"
                    ref={register({
                    required: 'Required',
                    pattern: {
                        message: "input is required"
                    }
                    })}
                />
                {errors.email && errors.email.message}
                <p>Required</p>

                <div>
                    <input type="checkbox" />
                    <p>Did Police use physical force against you or point their weapon at you?</p>

                    <input type="checkbox" />
                    <p>Did police threaten you verbally, use foul language, or intimidate you during this encounter?</p>

                    <input type="checkbox" />
                    <p>Did police take money, take or destroy property, or issue an excessive fine during this encounter?</p>

                    <input type="checkbox" />
                    <p>Did police fail to help you when you needed it?</p>
                </div>
                <h2>When did this happen?</h2>
                <p>Enter the date and time as best as you can remember.</p>

                <div>
                    <input type="date" />
                    <p>Required</p>

                    <input type="time" />
                    <p>Required</p>
                </div>

                <h2>How were you treated?</h2>
                <p>Required</p>
                <div>
                    <input type="checkbox" />
                    <p>Very well</p>

                    <input type="checkbox" />
                    <p>Well</p>

                    <input type="checkbox" />
                    <p>Just okay</p>

                    <input type="checkbox" />
                    <p>Badly</p>

                    <input type="checkbox" />
                    <p>Very badly</p>
                </div>

                <h2>How did this make you feel?</h2>
                <input placeholder="I felt..." />
                <p>Required</p>

                <h2>How could this have gone better?</h2>
                <p>How would you have preferred the officer(s) to handle the situation? What different actions would have led to a better oucome?</p>
                <input
                    name="story"
                    ref={register({
                    required: 'Required',
                    pattern: {
                        message: "input is required"
                    }
                    })}
                />
                {errors.email && errors.email.message}
                <p>Required</p>
            </FormW>

        </FormY>
    )
}

export default Story;