import styled from "styled-components"

export const HeaderContainer = styled.header`
    height: 15vh;
    width: 85vw;
    margin: 0 12vw;
    display: flex;
    align-items: center;
    
    @media (max-width:760px){
        margin-left: 8vw;
    }

    @media (max-width:526px){
        margin-left: 4vw;
    }

    @media (max-width:320px){
        height: 10vh;
    }
`
export const NycText = styled.span`
    color: whitesmoke;
    font-size: xx-large;
    font-family: 'Inter', sans-serif;

    @media (max-width:526px){
        font-size: x-large;
    }

    @media (max-width:320px){
        font-size: large;
    }
`
export const DotText = styled.span`
    color: yellow;
    font-size: xx-large;
    text-shadow: 1px 1px 2px black, 0 0 25px yellow, 0 0 5px yellow;

    @media (max-width:526px){
        font-size: x-large;
    }

    @media (max-width:320px){
        font-size: large;
    }
`
export const TicketsText = styled.span`
    color: yellow;
    font-size: xx-large;
    font-family: 'Satisfy', cursive;
    text-shadow: 1px 1px 2px black, 0 0 25px yellow, 0 0 5px yellow;

    @media (max-width:526px){
        font-size: x-large;
    }

    @media (max-width:320px){
        font-size: large;
    }
`