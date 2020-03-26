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

const Close = styled.p`
    content: 'x';
    font-weight: 300;
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
            </FormW>

        </FormY>
    )
}

export default Story;