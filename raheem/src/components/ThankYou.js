import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


function ThankYou() {

    /* we could possibly store some value in localStorage to determine
        whether or not the user has rendered the Thank You component from
        the cancel button on the initial landing, or from actually completing
        a submission */
    const [cancelled, setCancelled] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // uncomment to view cancelled thank you screen
    // localStorage.setItem('cancelled', 'true');

    // uncomment to view submitted thank you screen
    localStorage.setItem('submitted', 'true');

    useEffect(() => {
        if (!!localStorage.getItem('cancelled')) {
            setCancelled(true);
        }
        else if (!!localStorage.getItem('submitted')) {
            setSubmitted(true);
        }
    }, []);

    return (
        <ThankYouContainer>
            {cancelled &&
                <Cancelled>
                    <h2>Thank You</h2>
                    <p>Thank you for your time today.</p>
                    <p>If you accidentally clicked on 'cancel', you can click the back button
                    to return to the report submission form and continue filling out your report,
                    otherwise, we hope you have a great rest of the day.
                    </p>
                </Cancelled>}

            {submitted &&
                <Submitted>
                    <h2>Thank You</h2>
                    <p>Thank you for taking the time to help build a safer community.</p>
                    <p>For further escalation of your report, you have the following options: </p>
                    <ul>
                        <li>Escalate to Raheem staff.</li>
                        <li>Escalate to the media.</li>
                        <li>Escalate to law enforcement.</li>
                    </ul>
                </Submitted>}
        </ThankYouContainer>
    )
}

export default ThankYou;

const ThankYouContainer = styled.div`
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
`;

const Cancelled = styled.div`
    background: #ffffff;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    padding: 3rem 10%;
    width: 80%;

    @media (max-width: 500px) {
        width: 95%;
    }
`;

const Submitted = styled.div`
    background: #ffffff;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    padding: 3rem 10%;
    width: 80%;

    ul li {
        font-size: 1.6rem;
        line-height: 3.6rem;

        @media (max-width: 490px) {
            font-size: 1.4rem;
        }

        @media (max-width: 400px) {
            font-size: 1.4rem;
            margin-left: 2rem;
        }
    }

    @media (max-width: 500px) {
        width: 95%;
    }
`;