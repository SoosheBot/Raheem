import styled from 'styled-components';

export const FilterContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 99;
    background: #ffffff;
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
`;