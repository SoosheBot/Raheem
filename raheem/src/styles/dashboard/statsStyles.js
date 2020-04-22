import styled from 'styled-components';


export const StatsContainer = styled.div`
    width: 90%;
    background-color: #fff;
        @media (max-width: 500px){
            width: 100%;
        }
        div.tags {
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            padding-top: 2rem;
        }
        div.date-tags {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 70%;
        }
        p.date-tags {
            padding-right: 1rem;

        }
        div.page-top {
            border-top: 1px solid #C4C4C4;
            padding-top: 0.7rem;
        }
        
        h3 {
            font-family: 'Neuzeit Grotesk', sans-serif;
            font-style: normal;
            font-weight: 900;
            font-size: 2.6rem;
            line-height: 0.5rem;
            letter-spacing: 0.1936364px;
            background-color: #FAEB00;
            padding-bottom: 1.25rem;
            padding-right: 2rem; 
            margin: 20px 0;
            width: 50%;
        },

        div.heading {

        },
        
`

export const StatsContentContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

        @media (max-width: 500px){
            width: 100%;
            padding: 0 20px
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

export const StatsVisualContainer = styled.div`
    
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

        label{
            font-family: 'Neuzeit Grotesk', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 1.4rem;
            line-height: 1.8rem;
            letter-spacing: 0.166667px;
        }
`