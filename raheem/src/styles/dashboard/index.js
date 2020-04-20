import styled from 'styled-components';

export const DashboardContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const DashboardOfficer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;

    @media (min-width: 1440px) {
        width: 35.6rem;
    }

    .db-officer-info {
        width: 100%;
        padding: 0 20px;
        display: flex;
        justify-content: space-evenly;

        @media (min-width: 1440px) {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }

        .db-officer-img {
            width: 50%;
            height: 16.2rem;
            background: #C4C4C4;

            @media (min-width: 1440px) {
                width: 30.8rem;
                height: 21.2rem;
            }
        }

        .db-officer-info {
            width: 50%;
            display: flex;
            flex-direction: column;

            .placeholder {
                width: 100%;
                background: #C4C4C4;
                height: 2.6rem;
            }
        }
    }
`;

export const DashboardView = styled.div`
    width: 100%;
    margin-top: 5rem;

    .title-container {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
`;

export const DashboardTitle = styled.h3`
    font-family: 'neuzeit-grotesk', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 2.6rem;
    line-height: 3.2rem;
    letter-spacing: -0.31px;
    color: #000;
    width: 30%;
    text-align: center;
`;

export const DashboardSearch = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    input[type=text] {
        font-family: 'neuzeit-grotesk', sans-serif;
        padding-left: 0.5rem;
        font-size: 1.6rem;
        margin-top: 2rem;
        background: #C4C4C4;
        height: 3.6rem;
        width: 100%;
        border: none;

        &:focus {
            outline: none;
            border: 1px solid #FFF600;
        }
    }
`;

export const DashboardMainTitle = styled.h2`
    padding: 0 20px;
    margin-bottom: 2rem;
    width: 100%;

    h2 {
        line-height: 0.4rem;
        letter-spacing: -0.283636px;
        color: #111111;
        font-family: 'nuzeit-grotesk', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 2.6rem;
        background: #FFF600;
        padding: 0 1.2rem 1.8rem 0;
        width: 50%;
    }
`;

export const DashboardTagSearch = styled.div`
    width: 100%;
    margin-top: 2rem;
    padding: 0 20px;

    input[type=text] {
        width: 10.6rem;
        height: 2.6rem;
        border: none;
        background: #C4C4C4;
        font-size: 1.6rem;
        padding-left: 0.5rem;
        color: #000;

        &:focus {
            outline: none;
            border: 1px solid #FFF600;
        }
    }
`;