import styled from "styled-components";

export const DisplayContainer = styled.main`
    min-height: 75vh;
    padding-bottom: 1rem;
    width: 52vw;
    margin-left: 12vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width:760px){
        margin-left: 8vw;
    }

    @media (max-width:611px){
        gap: 0.5rem;
    }

    @media (max-width:526px){
        margin-left: 4vw;
    }
`