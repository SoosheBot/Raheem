import styled from 'styled-components';

export const Title = styled.h2`
    line-height: 0.4rem;
    letter-spacing: -0.283636px;
    color: #111111;
    font-family: 'nuzeit-grotesk', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 2.6rem;
    padding: 0 1.2rem 1.8rem 0;

    &:first-child {
        background: #FFF600;
    }
`;

export const StoryListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    a {
        text-decoration: none;
        color: #000000;
    }

    .title-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 4rem;
    }

    .see-more {
        margin-top: 2.6rem;
        text-align: right;
        font-family: 'neuzeit-grotesk', sans-serif;
        font-size: 1.4rem;
        line-height: 2.1rem;
        letter-spacing: -0.283636px;

        a {
            text-decoration: none;
            color: #0000EE;
        }
    }

    .list {
        width: 100%;
        margin-top: 5rem;

        p.no-reports {
            color: red;
            font-family: 'neuzeit-grotesk', sans-serif;
            font-size: 1.6rem;
            line-height: 1.8rem;
        }
    }
`;

export const TopContainer = styled.div`
    margin-top: 3.2rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-family: 'neuzeit-grotesk', sans-serif;
    
    p {
        font-size: 1.8rem;
        line-height: 2.4rem;
        letter-spacing: -0.196364px;
        font-weight: bold;
        padding-left: 2rem;

        @media (min-width: 500px) {
            font-size: 2.2rem;
            line-height: 3rem;
            letter-spacing: -0.24px;
        }
    }
`;

export const SliderContainer = styled.div`
    margin-top: 3.6rem;
    width: 100%;
    background: #C4C4C4;
`;

export const TagStatContainer = styled.div`
    // margin-top: 4.1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-family: 'neuzeit-grotesk', sans-serif;

    @media (min-width: 500px) {
        flex-direction: row-reverse;
        justify-content: space-evenly;
    }

    .officer-stats {

        @media (min-width: 500px) {
            width: 45%;
        }
    }

    .officer-rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 3rem;

        @media (min-width: 500px) {
            width: 50%;
        }

        p.rating {
            font-size: 3rem;
            line-height: 4rem;
            font-weight: bold;
            letter-spacing: -0.196364px;
            text-align: center;
            border-bottom: none;
            margin-top: 1rem;
        }

        h4 {
            @media (max-width: 733px) {
                text-align: center;
            }
        }
    }

    h4 {
        font-size: 3rem;
        line-height: 4rem;
        font-weight: 900;
        margin-bottom: 1rem;
    }

    p {
        width: 100%;
        font-size: 2rem;
        line-height: 3rem;
        border-bottom: 1px solid #C4C4C4;
    }

    span.bold {
        font-weight: 900;
        font-size: 2.5rem;
    }
`;

export const StoryListSearch = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;

    @media (min-width: 600px) {
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .query {
        width: 100%;
        display: flex;
   
        @media (min-width: 600px) {
            width: 33.5rem;
        }

        form {
            display: flex;
        }

        button {
            border: none;

            &:hover {
                cursor: pointer;
            }

            &:focus {
                outline: none;
                border: 1px solid #FFF600; 
            }
        }

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

        @media (min-width: 600px) {
            width: 33.5rem;
            margin-top: 0;
        }
        
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