import { styled } from "styled-components";

export const H1 = styled.h1`
  font-family: 'Josefin Sans', sans-serif;  
  font-size: 2.3rem;

  @media(max-width: 530px) {
    font-size: 1.9rem;
}
`

export const SectionHeader = styled.section`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  padding: 20px 30px;
  width: 100%;
  height: 10vh;

  @media(max-width: 530px) {
    padding: 20px 10px;
}
`