import styled from 'styled-components';

export const Container = styled.div`
    margin: 5rem 0;
    font-family: 'Noto Serif', serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-family: 'Noto Serif', serif;
        font-weight: 900;
        font-size: 1.2rem;
        text-align: center;
    }
`

export const HeadingContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 9% 5%;
`;

export const Content = styled.div`
    width: 80%;
    background: #ffffff;
    margin: 2rem 0;
    padding: 3rem 10%;
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 4.0rem;
    margin: 2% 0 2%;
`

export const SubHeading = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 1.8rem;
    margin: 2% 0 3%;
    line-height: 2.6rem;
`

export const ContentSep = styled.div`
    height: 1rem;
    background: #000000;
    width: 100%;
    margin: 3rem 0 5rem;
`;

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;

    span.light {
        font-weight: 300;
        font-size: 2.2rem;
        font-family: 'Roboto', sans-serif;
    }
`;

/* QR Component Form Styling */
export const QRForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    input[type=text] {
        margin: 1rem 0;
        width: 30.27rem;
        height: 4.6rem;
        padding-left: 1rem;
        font-weight: 300;
        font-size: 1.8rem;
        color: #ccc;
    }

    input[type=submit] {
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
`;

export const QRCodeContainer = styled.div`
    width: 30.27rem;
    height: 10.87rem;
    background: #C4C4C4;
`;


/* incident time styling */
export const IncidentTimeContainer = styled.div`
    width: 100%;

    // Top heading
    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 2.2rem;
        width: 100%;
        text-align: left;

        @media (max-width: 500px) {
            font-size: 3.5rem;
        }

        @media (max-width: 400px) {
            font-size: 3rem;
        }
    }

    // Top heading tagline
    p.description {
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        text-align: left;
        margin: 1rem 0;

        // mobile breakpoint at 540px
        @media (max-width: 540px) {
            font-size: 1.8rem;
        }

        @media(max-width: 500px) {
            font-size: 1.4rem;
        }

        @media(max-width: 400px) {
            padding: 0 5%;
        }
    }

    input[type=text].incident {
        width: 33%;
        height: 5rem;
        font-weight: 900;
        font-size: 2rem;
        padding-left: 1rem;

        @media (max-width: 440px) {
            font-size: 1.6rem;
            padding-left: 0.5rem;
        }

        @media (max-width: 360px) {
            font-size: 1.2rem;
            padding-left: 0.5rem;
        }

        @media (max-width: 285px) {
            font-size: 1.2rem;
        }

        @media (max-width: 265px) {
            font-size: 1rem;
        }

        &:focus {
            outline: none;
            border: 1px solid #FAEB00;
        }
    }

    input[type=time] {
        margin-top: 2rem;
        width: 99%;
        height: 5rem;
        font-size: 2rem;
        font-weight: 900;
        padding-left: 1rem;
        font-family: 'Roboto', sans-serif;
    }

    input[type=time]::-webkit-datetime-edit-text {
        font-size: 2rem;
        padding: 0 15%;
    }

    input[type=time]::-webkit-clear-button {
        display: none;
    }

    input[type=time]::-webkit-inner-spin-button {
        height: 5rem;
    }
`;