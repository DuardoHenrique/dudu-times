import { styled } from "styled-components";

export const SectionBooks = styled.section`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: ${({$flexColumn}) => $flexColumn ? 'column' : 'row'};
    
    max-width: 100%;
    min-height: 90vh;
    padding-inline: 20px;
    background-color: rgb(248,248,248);
`