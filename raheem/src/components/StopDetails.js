import React from 'react';

import styled from 'styled-components';

import Continue from './buttons/Continue';
import GoBack from './buttons/GoBack';
import Save from './buttons/Save';
// import Tags from './Tags';

const Form = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 375px;
    background-color: #FFF600;
`;

const Heading1 = styled.h1`
    font-size: 3em;
    text-align: center;
    margin: 1em;
`;

const Heading2 = styled.h2`
    text-align: center;
`;

function StopDetails() {
    return (
        <Form>
            <div>
                <Heading2>My Stories</Heading2>
            </div>

            <div>
                <Heading1>Your story matters.</Heading1>
            </div>

            <div className="tagsButtonContainer">
                <div>
                    <p>Click here to proceed.</p>
                    <Continue />
                    {/* continue to story */}
                </div>
                <div>
                    <p>Click here to go back.</p>
                    <GoBack />
                    {/* go back to landing */}
                </div>
                <div>
                    <p>Click here to save your responses and come back later.</p>
                    <Save />
                    {/* go to email */}
                </div>
            </div>
        </Form>
    )
}

export default StopDetails;