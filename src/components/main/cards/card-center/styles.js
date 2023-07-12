import { styled } from "styled-components";

export const ConatinerCardCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  @media(max-width: 700px) {
    width: 90%;
  }
`