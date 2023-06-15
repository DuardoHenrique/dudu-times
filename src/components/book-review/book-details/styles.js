import { styled } from "styled-components"

export const DivLink = styled.div`
  display: flex;
  color: #6c757b; 
  padding: 8px;
  border-radius: 20px;
  font-size: 1.8rem;
  text-decoration: underline;

  &:hover {
    color: #E38622;
  }
`
export const DivDetails = styled.div`
  max-width: 420px;
  padding: 20px;

  @media(max-width: 540px) {
    max-width: 330px;
  }
`
