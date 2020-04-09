import styled from 'styled-components';

export const TagContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 1rem 0 5rem;

    .toggled {
        background: #242424;
        color: #ffffff;
    }
`;

export const Tag = styled.button`
    margin: 0.5rem 0.5rem 0.5rem 0;
    padding: 0.7rem;
    background: #ffffff;
    border-radius: 100px;
    border: 1px solid #121212;
    color: #111111;
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-family: 'Roboto', sans-serif;
    transition: all 300ms;

    @media (min-width: 500px) {
        &:hover {
            transition: background 300ms;
            background: #FAEB00;
            cursor: pointer;
        }
    }

    &:focus {
        outline: none;
        border: 1px solid #121212;
    }
`;