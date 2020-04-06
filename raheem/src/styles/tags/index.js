import styled from 'styled-components';

export const TagContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0;

    .toggled {
        background: #FAEB00;
    }
`;

export const Tag = styled.button`
    margin: 0.5rem;
    padding: 1rem;
    background: #ffffff;
    border-radius: 0.5rem;
    border: 1px solid #121212;
    color: #111111;
    font-size: 1.4rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    transition: all 300ms;

    &:hover {
        transition: background 300ms;
        background: #FAEB00;
        cursor: pointer;
    }

    &:focus {
        outline: none;
        border: 1px solid #121212;
    }
`;