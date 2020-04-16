import styled from 'styled-components';

export const TagContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 1rem 0;
    

    @media(max-width: 500px){
        margin: 1rem 0 1rem;
    }
    .toggled {
        background: #242424;
        color: #ffffff;
    }
`;

export const Tag = styled.button`
    margin: 0.5rem 1.5rem 0.5rem 0;
    padding: 0.9rem 3.1rem;
    background: #ffffff;
    border-radius: 100px;
    border: 1px solid #111111;
    color: #111111;
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-family: 'Roboto', sans-serif;
    transition: all 300ms;

    @media (max-width: 1000px){
        margin: 0.5rem .7rem 0.5rem 0;
    } 

    @media (max-width: 500px) {
        margin: 0.5rem 0.5rem 0.5rem 0;
        padding: 0.5rem 1rem;
        font-size: 1.6rem;
        line-height: 2.2rem;

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