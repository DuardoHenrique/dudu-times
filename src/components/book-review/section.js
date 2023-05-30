import { styled } from "styled-components";

export const SectionBooks = styled.section`
    display: flex;
    align-items:center;
    justify-content: center;
    
    max-width: 100%;
    min-height: 90vh;
    background-color: ${({background}) => background};
`