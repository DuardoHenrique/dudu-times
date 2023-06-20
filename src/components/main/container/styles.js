import { styled } from "styled-components";

export const ContainerMain = styled.section`
  display: grid;
  grid: 'left center right ' / 1fr minmax(200px, 1.5fr) 1fr;
  grid-gap: 20px;

  min-height: 90vh;
  width: 100%;
  padding-inline: 40px;
  border-bottom: 2px solid black;
  margin-bottom: 20px;

  @media(max-width: 1024px) {
    grid: 'center center center'
    'left . right' / 1fr 0 1fr;
  }

  @media(max-width: 700px) {
    grid: 'center center center'
    'left . right' / 1fr 0 1fr;
  }

  @media(max-width: 500px) {
    grid: 'center center center' 
    'left left left'
    'right right right' ;
  }
`