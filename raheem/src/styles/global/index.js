import styled from 'styled-components';

//---yellow background container---///
export const Splash = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFF600;
    margin: 0;

        .home {
            height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
`;

//---grey bar on top of mobile view---//
export const TopBar = styled.div`
    display: none;

        @media (max-width: 500px) {
            display: block;
            width: 100%;
            height: 4.0rem;
            background: #555555;
        }
`;

//---buttons---//
//container for large buttons
export const Controls = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0 10rem;

    @media (max-width: 500px){
        margin: 3rem 0 2rem;
        padding: 0 2rem;
    }

    p {
        font-family: 'Neuzeit Grotesk', sans-serif;
        font-size: 1.8rem;
        margin: 1rem 0 0;

        @media (max-width: 500px){
            font-size: 1.6rem;
            margin: 1rem 0 2rem; 
        }
    }
`;

//black button
export const ButtonSecondary = styled.button`
    width: 100%;
    height: 7.5rem;
    background: #111111;
    border: 1px solid #000000;
    border-radius: 0.6rem;
    margin: 1.5rem 0;
    color: #ffffff;
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
            width: 100%;
        }
`;

//white button
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

//container for back arrow vector
export const BackButton = styled.div`
    width: 4rem;
    padding-top: 1rem;
    margin-right: 6.5rem;
    margin-left: 2rem;

    @media (max-width: 500px){
        margin-right: 2rem;
    }

    &:hover {
        cursor: pointer;
        transition: opacity 300ms;
        opacity: 0.9;
    }
`;

//---page containers---//
//white full background
export const PageContainer = styled.div`
    width: 90%;
    
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

        @media(max-width: 500px){
            width: 100%
        }
`

//content container (white background)
export const Container = styled.div`
    font-family: 'Noto Serif JP', serif;
    width: 55%;
    min-width: 500px; 
    display: flex;
    flex-direction: column;
    align-items: center;

    .page-top{
        margin-top: 10rem;

        @media (max-width: 500px){
            margin-top: 5rem;
        }
    }

    span {
        font-family: 'Noto Serif JP', serif;
        font-weight: 900;
        font-size: 1.2rem;
        text-align: center;
    }

    span.thankyou{
        font-size: 2.4rem;
        text-align: left;
        font-weight: normal;
    }

    p.instruction {
        margin: 1.2rem 0 1rem;
        font-size: 1.8rem;
        line-height: 1.6rem;
        font-family: 'Neuzeit Grotesk', sans-serif;
    }

        @media (max-width: 500px){
            width: 100%;
        }

        @media (max-width: 900px){
            width: 60%;
        }
`;

// header box
export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    .no-officer{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 1.5rem;

        @media (max-width: 500px){
            width: 65%;
        }
    }

    p.no-officer-text {
        font-family: 'Neuzeit Grotesk', sans-serif;
        font-size: 1.6rem;
        margin: 1rem 0;
        width: 100%;
        
        @media (max-width: 500px){
            width: 100%;
        }
    }
`;

//yellow heading box
export const YellowHeaderContainer = styled.div`
    width: 100%;
    background-color: #FFF600;
    margin: none;
`;

//officer display styling
export const OfficerContainer = styled.div`
    padding: 1rem 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: red solid 2px;

    @media (max-width: 500px){
        width: 65%;
    }
`;

export const OfficerPic = styled.div`
    margin-bottom: 2rem;
    width: 182px;
    height: 186px;
    left: 93px; 
    top: 111px;
    // height: 186.4px;
    border-radius: 50%;
    background: grey;
    border: 1px solid #111111;

    img {
        object-fit: cover;
        width: 100%;
        height: 184px;
        border-radius: 50%;
    }
`;

export const OfficerName = styled.p`
    font-family: 'Noto Serif JP', serif;
    text-align: center;
    line-height: 30px;
    font-weight: 900;
    font-size: 22px;
    font-weight: bold;
`;

export const OfficerInfo = styled.p`
    font-family: 'Noto Serif JP', serif;
    text-align: center;
    line-height: 24px;
    font-size: 16px;
    font-weight: 900;
`;


//yellow highlight heading box
export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 1rem;

    @media(max-width: 500px){
        justify-content: center;
        width: 100%;
    }

    h2 {
        font-size: 2.8rem;
        font-weight: 900;
        font-family: 'Neuzeit Grotesk', sans-serif;
        background: #FFF600;

        @media(max-width: 500px){
            font-size: 2.6rem;
            width: 100%;
            padding: 5px 20px;
        }
    }

    p {
        font-family: 'Neuzeit Grotesk', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 2.2rem; 
        margin: 2rem 0;

        @media( max-width: 500px){
            padding: 0 20px;
            margin: 0.5rem 0; 
            font-size: 1.8rem;
        }
    }

    span.light {
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 2.2rem;
        font-family: 'Neuzeit Grotesk', sans-serif;
    }
`;

//content container
export const Content = styled.div`
    width: 100%;
    background: #ffffff;
    padding-bottom: 10rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px){
        padding: 0 20px 5rem;
        margin-bottom: 1rem;
    }

    span {
        font-family: 'Noto Serif JP', serif;
        font-weight: 900;
        font-size: 1.2rem;
        text-align: center;
    }

    span.thankyou{
        font-size: 2.4rem;
        text-align: left;
        font-weight: normal;
    }

    p.officererror {
        font-size: 1.6rem;
        color: red;
        width: 50%;
        margin: 5% auto 10%;
        font-size: 1.6rem;
        font-family: 'Neuzeit Grotesk', sans-serif;
    }

    p.search {
        font-size: 1.6rem;
        font-family: 'Neuzeit Grotesk', sans-serif;
        text-align: left;
    }
`;


//heading and text styles
export const Title = styled.h1`
    font-size: 4.4rem;
    font-weight: 900;
    font-family: 'Noto Serif JP', serif;
`;

export const Heading = styled.h2`
    font-family: 'Neuzeit Grotesk', sans-serif;
    font-weight: 900;
    font-size: 4.4rem;
    line-height: 4.2rem;
    letter-spacing: -0.785714px;
    
    @media(max-width: 500px){
        margin: 20px;
    }
`;

export const Subheading = styled.h3`
    font-family: 'Neuzeit Grotesk', sans-serif;
    font-weight: 900;
    font-size: 2.6rem;
    margin: 2% 0px 3%;
    line-height: 2.8rem;

    @media(max-width: 500px){
        margin: 20px;
    }
`;

export const SmallHeading = styled.h4`
    font-family: 'Neuzeit Grotesk', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    margin: 1rem 0 .7rem;
`;

export const Label = styled.label`
    margin: 1rem 0 0;
    font-family: 'Neuzeit Grotesk', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
`;

export const Paragraph = styled.p`
    font-family: 'Neuzeit Grotesk', sans-serif;
    font-size: 1.2rem;
    line-height: 1.4rem;
`;

export const Feedback = styled.h3`
    font-family: 'Noto Serif JP';
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.4rem;

    @media(max-width: 500px){
        padding: 0 20px;
        margin-bottom: 2rem;
    }
`;

//opage/content dividers
export const Divider = styled.div`
    height: 5px;
    width: 100%;
    background: #111111;

    @media (max-width:500px){
        height: 3px;
        visibility: visible;
    }
`;

export const SmallDivider = styled.div`
    height: 3px;
    margin-top: 5rem;
    padding: 0;
    width: 100%;
    background: #111111;
    visibility: hidden;

        @media (max-width:500px){
            height: 1px;
            visibility: visible;
        }
`;

/* QR Component Form Specific Styling */
export const QRForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    input[type=text] {
        margin: 1rem 0;
        width: 100%;
        height: 4.6rem;
        padding-left: 1rem;
        font-weight: 300;
        font-size: 1.8rem;
        color: #ccc;
        border-radius: 0.6rem;
        border: 1px solid #111111;
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