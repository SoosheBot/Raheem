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
            width: 45%;

            @media (min-width: 1440px) {
                width: 30.8rem;
                height: 21.2rem;
            }

            img {
                object-fit: cover;
                height: auto;
                width: 100%;
            }
        }

        .db-officer-info {
            width: 55%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .placeholder {
                font-family: 'neuzeit-grotesk', sans-serif;
                width: 100%;
                height: 2.6rem;
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
                border-bottom: 1px solid #555555;

                &:last-child {
                    border: none;
                    margin-top: none;
                }

                .officer-info-sm {
                    font-size: 1.8rem;
                    line-height: 2.4rem;
                    letter-spacing: -0.196363px;
                    padding-left: 1rem;
                }

                h3 {
                    font-size: 1.8rem;
                    line-height: 2.4rem;
                    font-weight: 900;
                    font-family: 'neuzeit-grotesk', sans-serif;
                    font-size: 1.6rem;
                }
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

export const DashboardMainTitle = styled.div`
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

export const StoryContainer = styled.div`
    width: 100%;
    padding: 0 20px;
    margin: 5rem 0;

    .story-header {
        width: 100%;
        margin-bottom: 0.5rem;
        font-family: 'neuzeit-grotesk', sans-serif;
        display: flex;

        h3 {
            width: 50%;
            font-style: normal;
            font-weight: normal;
            font-size: 1.6rem;
            line-height: 2.2rem;
            color: #000;

            &:nth-child(2) {
                text-align: right;
            }
        }
    }

    .story-demographics {
        padding: 0.4rem 0;
        width: 100%;
        border-top: 1px solid #C4C4C4;
        border-bottom: 1px solid #C4C4C4;
        display: grid;
        grid-template-columns: 50% 50%;
        
        div {
            font-family: 'neuzeit-grotesk', sans-serif;
            display: flex;
            align-items: center;

            h4 {
                font-style: normal;
                font-weight: normal;
                font-size: 1.4rem;
                line-height: 1.8rem;
                letter-spacing: -0.166667px;
                color: #111111;
            }

            p {
                font-family: 'neuzeit-grotesk', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 1.4rem;
                line-height: 1.8rem;
                letter-spacing: -0.166667px;
                color: #555555;
                margin-left: 0.6rem;
            }
        }
    }
`;

export const StoryTagContainer = styled.div`
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: flex-start;
`;

export const StoryTag = styled.div`
    background: #111111;
    border-radius: 100px;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 1.4rem;
    font-family: 'neuzeit-grotesk', sans-serif;
    font-style: normal;
    font-weight: normal;
    padding: 0.5rem 1rem;
    margin: 0 1rem;

    &:first-child {
        margin: 0;
    }
`;

export const StoryContent = styled.p`
    margin-top: 1rem;
    font-size: 1.6rem;
    font-family: 'neuzeit-grotesk', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1.8rem;
`;

export const LongStoryContent = styled.div`
    margin-top: 1rem;
    font-size: 1.6rem;
    font-family: 'neuzeit-grotesk', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1.8rem;

    span {
        display: block;
        margin-top: 1.1rem;
        width: 100%;
        text-align: right;
        color: #0000EE;
        font-size: 1.4rem;
        line-height: 2.1rem;
        letter-spacing: -0.283636px;

        &:hover {
            cursor: pointer;
        }
    }
`;

export const SmallButtonPrimary = styled.button`
    font-family: Noto Serif;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: -0.238095px;
    width: 15.6rem;
    height: 5.2rem;
    background: #111111;
    border-radius: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border: none;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
        border: 1px solid #FFF600;
    }
`;

export const SmallButtonSecondary = styled.button`
    font-family: Noto Serif;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: -0.238095px;
    width: 15.6rem;
    height: 5.2rem;
    background: #ffffff;
    border-radius: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #111111;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
        border: 1px solid #FFF600;
    }
`;