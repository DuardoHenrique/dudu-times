import { styled } from "styled-components";

export const SectionBooks = styled.section`
    display: flex;
    align-items:center;
    flex-direction: ${({$flexColumn}) => $flexColumn ? 'column' : 'row'};
    
    max-width: 100%;
    min-height: 90vh;
    padding-inline: 20px;
    background: ${({background}) => `url(${background})`};
    background-attachment: fixed;
    background-size: cover;
`