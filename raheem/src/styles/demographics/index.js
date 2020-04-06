import styled from 'styled-components';

export const DemographicsContainer = styled.div`
    margin: 5rem 0;
    font-family: 'Noto Serif', serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    // Error styling
    p.error {
        margin-top: 1rem;
        font-family: 'Roboto', sans-serif;
        color: #db3737;
        font-size: 1.2rem;
        font-weight: 500;
    }

    // Top heading
    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 3rem;

        @media (max-width: 500px) {
            font-size: 3.5rem;
        }

        @media (max-width: 400px) {
            font-size: 3rem;
        }
    }

    // Top heading tagline
    p.description {
        font-size: 2rem;
        margin: 1rem 0;

        // mobile breakpoint at 540px
        @media (max-width: 540px) {
            font-size: 1.8rem;
        }

        @media(max-width: 500px) {
            font-size: 1.4rem;
            text-align: center;
        }

        @media(max-width: 400px) {
            text-align: center;
            padding: 0 5%;
        }
    }

    // Form heading
    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 2.2rem;
        margin-top: 3rem;

        @media (max-width: 310px) {
            font-size: 2.5rem;
        }
    }

    // Required field span
    span {
        font-size: 1.4rem;
        margin: 0.5rem 0 2rem;
    }

    // Form styling
    form {
        background: #ffffff;
        margin: 2rem 0;
        padding: 3rem 2rem;
        display: flex;
        flex-direction: column;
        padding: 0 10%;
        width: 80%;

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

            @media (max-width: 340px) {
                font-size: 1.6rem;
            }

            @media (max-width: 285px) {
                font-size: 1.2rem;
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

            &:hover {
                transition: background 300ms;
                background: #FAEB00;
                cursor: pointer;
            }
        }

        .controls {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
`;

export const Control = styled.button`
    width: 45%;
    font-family: 'Noto Serif', serif;
    font-weight: 700;
    font-size: 1.4rem;
    height: 5rem;
    border: none;
    border-radius: 0.5rem;
    background: #FFF600;
    padding: 0.5rem 1rem;
    transition: all 300ms;
    margin: 1rem 0 0;

    &:hover {
        transition: background 300ms;
        background: #FAEB00;
        cursor: pointer;
    }
`;