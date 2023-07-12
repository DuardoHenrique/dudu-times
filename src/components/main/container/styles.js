import { styled } from "styled-components";

export const ContainerMain = styled.section`
  display: grid;
  grid: 'left right ' / .5fr 0.5fr;
  grid-gap: 20px;
  place-content: center;

  min-height: 90vh;
  width: 100%;
  padding-inline: 40px;  
  border-bottom: 2px solid black;
  margin-bottom: 5px;

  @media(max-width: 700px) {
    grid: 'right'
          'left' ;
  }

`