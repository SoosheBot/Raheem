import React from "react";

//form validation
import { useForm } from "react-hook-form";

import Continue from './buttons/Continue';
import GoBack from './buttons/GoBack';
import Save from './buttons/Save';

import styled from "styled-components";

const Form = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 375px;
    background-color: #FFF600;
`;

const WhiteBG = styled.div`
    background-color: #FFFFFF;
`;

const Heading1 = styled.h1`
    font-size: 3em;
    text-align: center;
    margin: 1em;
`;

const Heading2 = styled.h2`
    text-align: center;
`;

const PTag = styled.p`
    font-size: 16px;
`;

function Story() {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log("values from story on-submit", values);
    };

    return (
        <Form>
            <div>
                <PTag>
                    Describe the indicent from start to finish. Be as descriptive as possible, and remember to include details about the officer's attitude and actions during this encounter.
                </PTag>

                <form onSubmit={handleSubmit(onSubmit)}>
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
                </form>

            </div>

            <div className="tagsButtonContainer">
                <div>
                    <p>Click here to proceed.</p>
                    <Continue />
                    {/* continue to demographics */}
                </div>
                <div>
                    <p>Click here to go back.</p>
                    <GoBack />
                    {/* go back to tags */}
                </div>
                <div>
                    <p>Click here to save your responses and come back later.</p>
                    <Save />
                    {/* go to email */}
                </div>
            </div>

            {/* progress bar */}
        </Form>
    )
}

export default Story;