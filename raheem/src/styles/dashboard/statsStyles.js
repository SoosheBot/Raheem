import styled from 'styled-components';

export const StatsContainer = styled.div`
    width: 90%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    height: 130vh;

    @media (max-width: 500px){
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    
    h2 {
        font-family: 'Neuzeit Grotesk', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 3.0rem;
        line-height: 0.5rem;
        letter-spacing: 0.1936364px;
        background-color: #FFF600;
        padding-bottom: 1.25rem;
        padding-right: 2rem;
        margin: 2rem auto 20px 0;
    }

    h2.context {
        margin-bottom: 0rem;
    }

    h3 {
        font-family: 'Neuzeit Grotesk', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 2.4rem;
        letter-spacing: 0.1936364px;
        padding-bottom: 1.25rem;
        padding-right: 2rem;
    }

    h3.context {
        padding: 0rem;
        margin: 0rem;
    }

    div.page-top {
        margin-top: 2rem;
        border-top: 1px solid #C4C4C4;
        padding-top: 2rem;
        padding-left: 2rem;
        width: 100%;
        border-bottom: none;
        padding-bottom: 0;

        @media (max-width: 500px){
            padding-top: 1rem;
            margin-top: 1rem;
        }
    }

    div.displayView {
        display: none;
    }

    .desktop-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 1.5rem;
        border-bottom: 1px solid #C4C4C4;

        @media (max-width: 800px){
            display: flex;
            flex-direction: column;
        }
    }

    .totalreports{
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 1rem;
        border-bottom: 1px solid #C4C4C4;
    }
`

export const StatsContentContainer = styled.div`
    padding: 3rem 3rem 6rem 3rem;
    min-width: 50%;

    @media (max-width:500px){
        padding: 2rem 2rem 5rem 2rem;
        width: 100%;
    }

    p {
        font-family: 'Neuzeit Grotesk', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1.8rem;
        line-height: 2.4rem;
        letter-spacing: 0.1936364px;
    }

    // div.reports {
    //     width: 30%;
    //     background-color: #fff;
    //     padding: none;
    //     margin: none;
    // }
`
export const StatsListContainer = styled.div`
    min-width: 45%;
    display: flex;
    flex-direction: column;
    padding-bottom: 3.2rem;
    margin-bottom: 1.5rem;
    
    @media (max-width: 500px){
        padding: 0 2rem 3.2rem 2rem;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 800px){
        min-width: 80%;
    }

    .totals {
        border-bottom: none;
        min-width: 60%;

        @media (max-width: 500px){
            width: 100%;
        }

        h2 {
            width: 51%;
            min-width: 214px;
        }
        
        p.values{
            font-height: 2.6rem;
            font-weight: 900;
        }
    }

    h2.average {
        min-width: 246px;
        margin-bottom: 0.25rem;
    },

    p.context {
        margin: 0rem;
        padding: 0rem;
        font-size: 1.3rem;
    }

    p.valuestotal {
        width: 50%;
        font-weight: 900;
    }
` 

export const StatsListGrid = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px #000000 solid;

    p {
        width: 50%;
        border-right: 1px #C4C4C4 solid;
        padding: 2rem 0 0;

        @media (max-width: 500px){
            padding: 1rem 0 0;
        }
    }

    p.values { 
        width: 50%;
        font-family: 'Neuzeit Grotesk', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1.8rem;
        line-height: 2.4rem;
        letter-spacing: 0.1936364px;
        text-align: right;
        border: none;
    }
`

export const StatsDivider = styled.div`
    border-bottom: 1px solid #C4C4C4;
    margin: 3rem 0 2rem;
`

export const StatsVisualContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    padding-bottom: 3.2rem;
    
    @media (max-width: 800px){
        width: auto;
    }

    @media (max-width: 500px){
        padding: 0 2rem 3.2rem 2rem
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #C4C4C4;
        width: auto;
    }

    h2.average {
        min-width: 246px;
    }
` 

export const PieContainer = styled.div`
    display: flex;
    flex-wrap: none;
    margin: 20px;
`

export const BarContainer = styled.div`
    display: flex;
    flex-wrap: none;

`

export const SwitchContainer = styled.div`
    width: 18rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    @media (max-width: 500px){
        margin-left: 2rem;
    }

        label{
            font-family: 'Neuzeit Grotesk', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 1.4rem;
            line-height: 1.8rem;
            letter-spacing: 0.166667px;
        }
`