import styled from "styled-components";

export const CartContainer = styled.aside`
    background-color: #030303c4;
    color: whitesmoke;
    width: 23vw;
    height: fit-content;
    margin-right: 12vw;
    margin-top: 3rem;
    border-radius: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:1205px){
        margin-top: 5.5rem;
    }

    @media (max-width:760px){
        width: 30vw;
        margin-left: 4px;
        margin-right: 8vw;
    }

    @media (max-width:612px){
        margin-top: 7.9rem;
    }
`
export const H1 = styled.h1`
    padding: 1.25rem;
    font-family: 'Satisfy', cursive;
    align-self: flex-start;
    text-shadow: 1px 1px 2px black, 0 0 25px yellow, 0 0 5px yellow;
`
export const TicketContainer = styled.div`
    margin-bottom: 1rem;
    padding: 1rem;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-family: 'Inter', sans-serif;
    border: 1px dashed whitesmoke;
    gap: 0.25rem;

    @media (max-width:840px){
        width: 139px;
        font-size: smaller;
    }
    @media (max-width:760px){
        gap: 0.15rem;
    }
`
export const TicketName = styled.p`
    width: 100%;

    @media (max-width:840px){
        font-size: smaller;
    }
`

export const TicketUnitPrice = styled.p`

    @media (max-width:840px){
        font-size: smaller;
    }
`
export const TicketButton = styled.p`

    @media (max-width:840px){
        font-size: smaller;
    }
`
export const HorizontalLine = styled.p`
    display: flex;
    justify-content: center;
    width: 80%;
    border-top: 1px solid whitesmoke;
    align-items: center;
`
export const Total = styled.p`
    padding: 2rem;
    font-family: 'Inter', sans-serif;

    @media (max-width:840px){
        font-size: smaller;
    }

    @media (max-width:760px){
        gap: 1rem;
    }
`