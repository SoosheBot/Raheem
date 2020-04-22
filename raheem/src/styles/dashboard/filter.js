import styled from 'styled-components';

export const FilterContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 99;
    background: #ffffff;
    box-shadow: 1px 0px 4px 1px #111111;
`;

export const TopBar = styled.div`
    width: 100%;
    height: 3.6rem;
    background: #555555;
`;

export const FilterTop = styled.div`
    font-family: 'neuzeit-grotesk', sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 7.4rem;

    .close {
        font-family: 'neuzeit-grotesk', sans-serif;
        width: 100%;
        padding: 0 20px;
        height: 4.7rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;

        .exit {
            width: 15%;
            height: 4.7rem;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: 2rem;

            &:hover {
                cursor: pointer;
            }
        }
    
        .top-text {
            width: 85%;
            height: 4.7rem;
            display: flex;
            align-items: center;
    
            p {
                font-size: 1.8rem;
                line-height: 2.4rem;
                letter-spacing: -0.196364px;
                color: #111111;
            }
        }
    }

    .matched-stories {
        padding: 0 20px;
        width: 100%;
        height: 3.6rem;
        font-family: 'neuzeit-grotesk', sans-serif;
        border-bottom: 1px solid #C4C4C4;
        display: flex;
        align-items: center;

        p {
            font-size: 1.6rem;
            line-height: 2.2rem;
            color: #111111;
        }
    }
`;

export const FilterHeading = styled.h2`
    font-family: 'neuzeit-grotesk', sans-serif;
    font-weight: 900;
    font-size: 2.6rem;
    line-height: 2.8rem;
    letter-spacing: -0.283636px;
    color: #000000;
    padding: 0 20px;
    margin-bottom: 2.4rem;
`;

export const GroupInputContainer = styled.div`
    width: 100%;
    margin-bottom: 5rem;
    padding: 0 20px;
    font-family: 'neuzeit-grotesk', sans-serif;

    .inp-text {
        font-size: 3rem;
        line-height: 1.8rem;
        letter-spacing: -0.166667px;
        color: #000000;
    }

    h3 {
        font-size: 1.8rem;
        font-weight: normal;
        line-height: 2.4rem;
        letter-spacing: -0.196364px;
        color: #111111;
        border-bottom: 1px solid #C4C4C4;
        padding-bottom: 0.1rem;
        margin-bottom: 1.4rem;
    }

    .inputs {
        display: grid;
        grid-template-columns: 50% 50%;

        /* Customize the label (the container) */
        .container {
        display: block;
        position: relative;
        padding-top: 0.4rem;
        padding-left: 35px;
        margin-top: 1rem;
        margin-bottom: 12px;
        cursor: pointer;
        color: #000000;
        font-size: 1.4rem;
        line-height: 1.8rem;
        letter-spacing: -0.166667px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        }

        /* Hide the browser's default checkbox */
        .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        background-color: #C4C4C4;
        border-radius: 0.6rem;
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
        content: "";
        position: absolute;
        display: none;
        }

        /* Show the checkmark when checked */
        .container input:checked ~ .checkmark:after {
        display: block;
        }

        /* Style the checkmark/indicator */
        .container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid #000000;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        }
    }
`;

export const FilterSearch = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

.query {
    width: 100%;
    display: flex;
    padding: 0 20px;

    input[type=text] {
        width: 85%;
        height: 3.6rem;
        background: #F2F2F2;
        border: none;
        padding-left: 0.5rem;
        font-size: 1.6rem;
        font-family: 'neuzeit-grotesk', sans-serif;

        &:focus {
            outline: none;
            border: 1px solid #FFF600;
        }
    }

    .search {
        width: 15%;
        height: 3.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F2F2F2;

        img {
            width: 100%;
            height: 2rem;
            object-fit: contain;
        }
    }
}

.filter {
    margin-top: 2.5rem;
    width: 100%;
    height: 3.6rem;
    background: #F2F2F2;
    font-family: 'neuzeit-grotesk', sans-serif;
    display: flex;
    justify-content: space-evenly;
    
    div {
        width: 45%;
        text-align: center;

        &:hover {
            cursor: pointer;
        }

        p {
            font-size: 1.4rem;
            line-height: 3.4rem;
            letter-spacing: 0.36px;
            color: #555555;

            span {
                font-weight: 900;
            }
        }
    }
}
`;

export const Controls = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 11.9rem 0 3.2rem;
`;