import styled from "styled-components"

export const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
`

export const Input = styled.input`
    background-color: #f5f5f513;
    color: white;
    border: none;
    min-width: 22%;
    padding: 0.5rem;
    border-radius: 2%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:611px){
        font-size: xx-small;
        padding: 0.25rem;
    }

    @media (max-width:427px){
        width: 34%;
        font-size: 7px;
    }

    @media (max-width:320px){
        width: 34%;
        font-size: 6px;
    }
`

export const Select = styled.select`
    background-color: #f5f5f513;
    color: white;
    border: none;
    min-width: 22%;
    padding: 0.5rem;
    border-radius: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:611px){
        width: 34%;
        font-size: xx-small;
        padding: 0.25rem;
    }

    @media (max-width:427px){
        width: 34%;
        font-size: 7px;
    }

    @media (max-width:320px){
        width: 34%;
        font-size: 5px;
    }
`