import styled from "styled-components";

export const CartContainer = styled.aside`
    background-color: #030303c4;
    color: whitesmoke;
    width: 23vw;
    height: fit-content;
    margin-right: 12vw;
    margin-top: 5rem;
    border-radius: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const H1 = styled.h1`
    padding: 1.5em;
    font-family: 'Satisfy', cursive;
    align-self: flex-start;
    text-shadow: 1px 1px 2px black, 0 0 25px yellow, 0 0 5px yellow;
`
export const TicketContainer = styled.div`
    margin-bottom: 1rem;
    padding: 1rem;
    width: 80%;
    display: flex;
    align-items: center;
    font-family: 'Inter', sans-serif;
    border: 1px dashed whitesmoke;
    gap: 1rem;
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
`