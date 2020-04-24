import styled from 'styled-components';


export const StatsContainer = styled.div`
    width: 90%;
    background-color: #fff;
    
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

        @media (max-width: 500px){
            width: 100%;
        }

        div.page-top {
            border-top: 1px solid #C4C4C4;
            padding-top: 1rem;
        }

        div.displayView {
            display: none;
        }
`

export const StatsContentContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

        @media (max-width: 500px){
            width: 100%;
        }

        p {
            font-family: 'Neuzeit Grotesk', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 1.8rem;
            line-height: 2.4rem;
            letter-spacing: 0.1936364px;
        },
`
export const StatsListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 3.2rem;
    border-bottom: 1px solid #C4C4C4;
    margin-bottom: 1.5rem;

    @media (max-width: 500px){
        padding: 0 2rem 3.2rem 2rem
    }

    p.context {
        margin: 0rem;
        padding: 0rem;
        font-size: 1.2rem;
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
        padding: 1rem 0 0;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 3.2rem;
    border-bottom: 1px solid #C4C4C4;
    
    @media (max-width: 500px){
        padding: 0 2rem 3.2rem 2rem
    }
` 

export const PieContainer = styled.div`
    display: flex;
    flex-wrap: none;
    border: blue dashed 2px;
    margin: 20px;
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