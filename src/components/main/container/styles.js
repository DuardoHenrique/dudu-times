import { styled } from "styled-components";

export const ContainerMain = styled.section`
  display: grid;
  grid: 'left center right ' / 1fr minmax(200px, 1.5fr) 1fr;
  grid-gap: 20px;

  min-height: 90vh;
  width: 100%;
  padding-inline: 50px;
  border-bottom: 2px solid black;
  margin-bottom: 20px;
`