import styled from 'styled-components';

export const Container = styled.div`
    margin: 5rem 0;
    font-family: 'Noto Serif', serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 2.6rem;
    font-weight: 700;
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