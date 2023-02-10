import styled from "styled-components"

export const TicketsContainer = styled.section`
    background-color: #0000002d;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:611px){
        padding: 0.5rem 0;
        gap: 0.5rem;
    }
`
export const CardContainer = styled.div`
    width: 48%;
    height: 30vh;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:1025px){
        width: 95%;
        height: 20vh;
    }
        
    @media (max-width:840px){
        width: 90%;
        height: 20vh;
    }
`
export const TicketImage = styled.img`
    width: 100%;
    height: 100%;
`
export const DescriptionContainer = styled.div`
    background-color: #030303a6;
    width: 100%;
    min-height: 35%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:840px){
        font-size: smaller;
    }
    @media (max-width:526px){
        font-size: xx-small;
    }
`
export const TicketName = styled.p`
    color: whitesmoke;
    width: 100%;
    padding-top: 4px;
    padding-left: 12px;

    :hover{
        color: yellow;
    }
`
export const TicketNeighborhood = styled.p`
    color: whitesmoke;
    width: 1000%;
    padding-left: 12px;
    font-family: 'Satisfy', cursive;
`
export const TicketPrice = styled.p`
    color: whitesmoke;
    width: 60%;
    padding-left: 12px;
    margin-bottom: 4px;

    @media (max-width:526px){
        min-width: 50%;
    }
`
export const AddToCartButton = styled.button`
    width: 34%;
    align-self: flex-start;
    margin-right: 12px;
    margin-bottom: 4px;
    font-family: 'Inter', sans-serif;
    :hover{
        background-color: #b6b6b6;
    }

    @media (max-width:526px){
        max-width: 45%;
        align-self: flex-end;
        font-size: xx-small;
    }
`