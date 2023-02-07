import styled from "styled-components"

export const TicketsContainer = styled.section`
    background-color: #0000002d;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
        font-family: 'Inter', sans-serif;
`
export const CardContainer = styled.div`
    width: 46%;
    height: 30vh;
    position: relative;
`
export const TicketImage = styled.img`
    width: 100%;
    height: 100%;
`
export const DescriptionContainer = styled.div`
    background-color: #030303a6;
    width: 100%;
    height: 35%;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    bottom: 0;
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
`
export const AddToCartButton = styled.button`
    width: 35%;
    align-self: flex-start;
    margin-right: 12px;
    margin-bottom: 4px;
    font-family: 'Inter', sans-serif;
`