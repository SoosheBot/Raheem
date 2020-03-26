import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

//styled
import styled from 'styled-components'

//form validation
import { useForm } from "react-hook-form";

//antd components and icons
import { BellOutlined } from '@ant-design/icons';
import { Progress } from 'antd';

//buttons
import GoBack from "./buttons/GoBack.js";


//component for user to subscrbe to email newsletter 
//Do we want to render this separately or reuse the email collection form simultaneously
const Subscribe = () => {

    /* pull in useHistory hook from react-router-dom */
    const history = useHistory();

    /* state to hold email preferences to pass up through context */
    const [emailPreferences, setEmailPreferences] = useState({});

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        setEmailPreferences(values);

        /* set submitted key in localStorage so that Thank You
            component conditionally renders correct view, then use
            useHistory to push the user to the Thank You component */

        localStorage.setItem('submitted', 'true');
        history.push(`/thank-you`);
    };

    return (
        <SubscribeContainer>
            <div className="email-preference">
                <h2>Thank you!</h2>
                <p>
                    Please take a moment to select if you want to recieve any of the following:
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <input
                            type="checkbox"
                            name="Local Area Updates"
                            ref={register}
                        />
                    Local Area Updates
                </div>

                    <div>
                        <input
                            type="checkbox"
                            name="Send Me a Copy of My Response"
                            ref={register}
                        />
                    Copy of My Response
                </div>


                    {/* on submit will need to direct to thank you page with confirmation to check email for next steps */}
                    <div className="controls">
                        <button type="submit"> Subscribe <BellOutlined /> </button>
                        {/* go to thank you */}

                        <button onClick={() => history.push(`/demographics`)}>Go Back</button>
                        {/* go to demographics */}
                    </div>
                </form>

                <div className="progressContainer">

                </div>
            </div>

            {console.log(emailPreferences)}
        </SubscribeContainer>
    );
};

export default Subscribe;

const SubscribeContainer = styled.div`
    margin: 5rem 0;
    font-family: 'Noto Serif', serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 4rem;
        margin-bottom: 2rem;

        @media (max-width: 262px) {
            font-size: 3rem;
            text-align: center;
        }
    }

    p {
        font-size: 2rem;
        line-height: 3.6rem;
        margin-bottom: 2rem;

        @media (max-width: 490px) {
            font-size: 1.6rem; 
        }

        @media (max-width: 375px) {
            font-size: 1.4rem; 
        }
    }

    .email-preference {
        background: #ffffff;
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        padding: 3rem 10%;
        width: 80%;
    
        @media (max-width: 500px) {
            width: 95%;
        }

        form {

            // Checkbox styling
            input[type=checkbox] {
                height: 3rem;
                width: 10%;
                border-radius: 50%;
    
                // mobile breakpoint at 600px
                @media (max-width: 600px) {
                    margin-right: 0.5rem;
                }
            }

            div {
                font-family: 'Roboto', sans-serif;
                font-size: 2rem;
                font-weight: 900;
                margin: 1rem 0;
                display: flex;
                align-items: center;
    
                @media (max-width: 310px) {
                    font-size: 1.6rem;
                }
            }

            .controls {
                width: 100%;
                display: flex;
                justify-content: space-between;

                @media (max-width: 350px) {
                    flex-direction: column;
                }

                button {
                    font-family: 'Noto Serif', serif;
                    font-weight: 700;
                    font-size: 2rem;
                    height: 5rem;
                    border: none;
                    border-radius: 0.5rem;
                    background: #FFF600;
                    padding: 0.5rem 1rem;
                    transition: all 300ms;
                    margin: 3rem 0 0;
        
                    &:hover {
                        transition: background 300ms;
                        background: #FAEB00;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;