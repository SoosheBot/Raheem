import styled from 'styled-components';

export const TopBar = styled.div`
    display: none;

        @media (max-width: 500px) {
            display: block;
            width: 100%;
            height: 3.6rem;
            background: #555555;
        }
`;

export const ButtonSecondary = styled.button`
    width: 100%;
    height: 7.5rem;
    border: 1px solid #000000;
    border-radius: 0.6rem;
    background: #111111;
    margin: 0.5rem 0;
    color: #ffffff;
    font-family: 'Noto Serif JP', serif;
    font-size: 2.2rem;
    line-height: 2.4rem;
    letter-spacing: 0.25;
    transition: all 300ms;

    &:hover {
        cursor: pointer;
        transition: opacity 300ms;
        opacity: 0.9;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }

        @media (max-width: 500px){
            height: 5.2rem;
            font-size: 2.0rem;
            line-height: 2.4rem;
            letter-spacing: -0.23809px;
            margin: 0.5rem 0;
        }
`;

export const ButtonPrimary = styled.button`
    width: 100%;
    height: 7.5rem;
    background: #ffffff;
    border: 1px solid #111111;
    border-radius: 0.6rem;
    margin: 1.5rem 0;
    color: #111111;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-family: 'Noto Serif JP', serif;
    font-size: 2.2rem;
    line-height: 3.2rem;
    letter-spacing: -0.261905px;
    transition: all 300ms;

    &:hover {
        cursor: pointer;
        transition: opacity 300ms;
        opacity: 0.9;
    }

        @media (max-width: 500px){
            height: 5.2rem;
            font-size: 2.0rem;
            line-height: 2.4rem;
            letter-spacing: -0.23809px;
            margin: 0.5rem 0;
        }
`;


export const Container = styled.div`
    margin: 1rem 0;
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

    span.thankyou{
        font-size: 2rem;
        line-height: 2.4rem;
        text-align: left;
        font-weight: bold;
    }

    p.description {
        margin: 1.2rem 0 1rem;
        font-size: 1.8rem;
        line-height: 1.6rem;
        font-family: 'Roboto', sans-serif;
    }

    p.no-officer {
        font-size: 1.6rem;
        margin: 2rem 0 1rem;
        margin: 0 20px;
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
    width: 100%;
    background: #ffffff;
    margin-bottom: 2rem;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    p.no-officer {
        font-size: 1.6rem;
        margin: 2rem 0 1rem;
    }
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
    font-size: 2.6rem;
    margin: 2% 0 3%;
    line-height: 2.6rem;
`

export const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    line-height: 1.6rem;
    margin-top: 1rem;
`;

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
`;

export const Divider = styled.div`
    height: 4px;
    width: 100%;
    background: #111111;
    margin-bottom: 4.4rem;
`;

export const SmallDivider = styled.div`
    height: 1px;
    margin-top: 5rem;
    padding: 0;
    width: 100%;
    background: #111111;
`;

export const Controls = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`;

/* Email Styling */
export const EmailParagraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    line-height: 1.6rem;
    padding: 0 20px;
    margin: 1rem 0 5rem;
    color: #111111;
`;

export const EmailLabel = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1.8rem;
    line-height; 1.6rem;
    color: #111111;
    margin-bottom: 1rem;
`;

export const EmailForm = styled.form`
    input[type=text] {
        width: 100%;
        height: 4.8rem;
        background: #ffffff;
        border-radius: 0.5rem;
        border: 1px solid #111111;
        color: #111111;
        font-size: 1.8rem;
        line-height: 1.6rem;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
        padding-left: 2%;

        &:placeholder {
            color: #C4C4C4;
        }
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
    width: 35rem;
    height: 35rem;
    background: #C4C4C4;

    img {
        width: 100%;
        object-fit: contain;
    }
`;