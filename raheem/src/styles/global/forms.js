import styled from 'styled-components';

export const ReportForm = styled.div`
    margin: 1rem 0;
    font-family: 'Noto Serif', serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        background: #ffffff;
        margin: 2rem 0 0;
        display: flex;
        flex-direction: column;
        width: 100%;

        @media (min-width: 1080px) {
            width: 800px;
            padding: 0 5%;
        }

        @media (max-width: 500px) {
            width: 95%;
        }

        // Content and field separation within form
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

        // Top heading
    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 2.2rem;
        width: 100%;
        text-align: left;
        margin-top: 5rem;

        &:first-child {
            margin-top: 2rem;
        }

        @media (max-width: 500px) {
            font-size: 3.5rem;
        }

        @media (max-width: 400px) {
            font-size: 3rem;
        }
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.8rem;
        margin-top: 2rem;
    }

    span {
        margin-top: 3rem;
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

    .error {
        color: red;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        font-weight: 300;
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

        // Date of birth container
        .dob-container {
            width: 100%;
        }

        // Date of birth input styling
        input[type=text].dob {
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

        // Radio button styling
        input[type=radio] {
            height: 3rem;
            width: 10%;
            margin-right: 1rem;
        }

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

        // Select input styling
        select {
            margin: 1rem 0 0.5rem;
            height: 5rem;
            font-size: 1.6rem;
            padding-left: 1rem;
            font-weight: 700;

            &:focus {
                outline: none;
                border: 1px solid #FAEB00;
            }

            @media (max-width: 300px) {
                font-size: 1.4rem;
            }

            @media (max-width: 255px) {
                font-size: 1.2rem;
            }
        }

        // Submit button styling
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

            @media (max-width: 340px) {
                font-size: 1.6rem;
            }

            @media (max-width: 265px) {
                font-size: 1.4rem;
            }

            &:hover {
                transition: background 300ms;
                background: #FAEB00;
                cursor: pointer;
            }
        }
    }
`;