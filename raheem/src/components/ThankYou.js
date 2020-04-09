import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


import Officer from './Officer';

//buttons
import GoBack from './buttons/GoBack.js';
import LargeButtonPrimary from './buttons/LargeButtonPrimary';
import LargeButtonSeconary from './buttons/LargeButtonSecondary';

//styles
import { Container, Content, SubHeading, Paragraph, Controls } from '../styles/global';
import { HeaderContainer } from '../styles/slider';

/* assets */
import Back from '../assets/Back.svg';

function ThankYou() {

    /* useHistory from react-router-dom */
    const history = useHistory();

    /* we could possibly store some value in localStorage to determine
        whether or not the user has rendered the Thank You component from
        the cancel button on the initial landing, or from actually completing
        a submission */
    const [cancelled, setCancelled] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('completed') === 'true') {
            setSubmitted(true);
        }
        else if (localStorage.getItem('completed') === 'false') {
            setCancelled(true);
        }
    }, []);

    return (
        <Container>
            <Content>
                <div className="go-back">
                    <img onClick={() => history.goBack()} src={Back} alt="Go Back" />
                </div>
            </Content>

            <Officer profile={{
                officer: "Officer Peyton",
                precinct: "#15",
                badge: "R4567"
            }} />

            <hr />

            {cancelled === true &&
                <Cancelled>
                    <ThankYouH2>Thank you for your feedback!</ThankYouH2>
                    <HeaderContainer>
                        <h2>Reminder sent</h2>
                    </HeaderContainer>
                    <p>Follow the link in your email to complete your story.</p>

                    <Controls style={{ paddingLeft: '20px', paddingRight: '20px' }} >
                        <LargeButtonPrimary route="" title="Home Page" />
                        <LargeButtonSeconary title="Officer Page" />
                    </Controls>
                </Cancelled>}

            {submitted &&
                <div style={{ width: '100%' }}>
                    <Submitted>
                        <ThankYouH2>Thank you for your feedback!</ThankYouH2>
                    </Submitted>
                    <Submitted>
                        <HeaderContainer>
                            <h2>Report Submitted!</h2>
                        </HeaderContainer>
                        <p>Your story will help end police violence.</p>

                        <Controls style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                            <LargeButtonPrimary route="" title="Home Page" />
                            <LargeButtonSeconary title="Officer Page" />
                        </Controls>
                    </Submitted>
                </div>}
        </Container>
    )
}

export default ThankYou;

const ThankYouH2 = styled.h2`
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.4rem;
    padding: 0 20px;
    margin-bottom: 2rem;
`;

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
    // background: #ffffff;
    // margin: 2rem 0;
    // display: flex;
    // flex-direction: column;
    // padding: 0 20px;
    // width: 100%;

    background: #ffffff;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
        font-size: 1.8rem;
        line-height: 1.6rem;
        font-family: 'Roboto', sans-serif;
        padding: 0 20px;
        margin-top: 0.5rem;
    }
`;

const Submitted = styled.div`
    background: #ffffff;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
        font-size: 1.8rem;
        line-height: 1.6rem;
        font-family: 'Roboto', sans-serif;
        padding: 0 20px;
        margin-top: 0.5rem;
    }
`;