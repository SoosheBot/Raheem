import React from "react";

//form validation
import { useForm } from "react-hook-form";

import Continue from './buttons/Continue';
import GoBack from './buttons/GoBack';
import Save from './buttons/Save';

import styled from "styled-components";

const FormY = styled.form`
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

const Statement = styled.h2`
    font-size: 2.25em;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    margin-bottom: 2.5em;
`;

const GraySpan = styled.span`
    color: #888888;
`;

const Heading2 = styled.h2`
    font-size: 2.5em;
    padding-left: 1em;
    padding-right: 1em;
    margin-top: 2.5em;
`;

const MyStories = styled.p`
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

const Details = styled.p`
    font-size: 14px;
    margin: 1em;
    padding-top: 4em;
    text-align: center;
`;

const PTag = styled.p`
    font-size: 14px;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
`;

const SummaryInput = styled.input`
    margin: 0 auto;
    display: block;
    width: 85%;
    height: 30em;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
`;

const BasicInput = styled.input`
    margin: 0 auto;
    display: block;
    width: 85%;
    height: 2.25em;
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 3em;
`;

const FeelInput = styled.input`
    margin: 0 auto;
    display: block;
    width: 85%;
    height: 1.75em;
    padding-right: 0.75em;
    padding-left: 0.75em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2.5em;
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
                    <MyStories>My Stories</MyStories>

                </div>
                <Heading1>Your story matters.</Heading1>
                <PHeading>The more we know about police behavior, the greater chance we have to change it.</PHeading>
            </div>

            <FormW onSubmit={handleSubmit(onSubmit)}>
                <Details>Details</Details>
                <Statement><GraySpan>I was</GraySpan> Profiled <GraySpan>by police near</GraySpan> Schenectady, New York 12345</Statement>

                <Heading2>What happened?</Heading2>
                <PTag>
                    Describe the indicent from start to finish. Be as descriptive as possible, and remember to include details about the officer's attitude and actions during this encounter.
                </PTag>

                <SummaryInput
                    name="story"
                    ref={register({
                    required: 'Required',
                    pattern: {
                        message: "input is required"
                    }
                    })}
                />
                {errors.email && errors.email.message}
                <PTag>Required</PTag>

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
                <Heading2>When did this happen?</Heading2>
                <PTag>Enter the date and time as best as you can remember.</PTag>

                <div>
                    <BasicInput type="date" />
                    <PTag>Required</PTag>

                    <BasicInput type="time" />
                    <PTag>Required</PTag>
                </div>

                <Heading2>How were you treated?</Heading2>
                <PTag>Required</PTag>
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

                <Heading2>How did this make you feel?</Heading2>
                <FeelInput placeholder="I felt..." />
                <PTag>Required</PTag>

                <Heading2>How could this have gone better?</Heading2>
                <PTag>How would you have preferred the officer(s) to handle the situation? What different actions would have led to a better oucome?</PTag>
                <SummaryInput
                    name="story"
                    ref={register({
                    required: 'Required',
                    pattern: {
                        message: "input is required"
                    }
                    })}
                />
                {errors.email && errors.email.message}
                <PTag>Required</PTag>
            </FormW>

        </FormY>
    )
}

export default Story;