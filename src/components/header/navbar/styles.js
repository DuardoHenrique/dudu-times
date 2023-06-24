import { styled } from "styled-components";

export const Ul = styled.ul`
  display: flex;
`

export const Li = styled.li`
  font-size: 2rem;

  &:not(:first-child) {
    margin-left: 25px;

    @media(max-width: 530px) {
    margin-left: 15px;
  }
  }

  &:hover {
    border-bottom: 2px solid black;
  }

  @media(max-width: 530px) {
    font-size: 1.5rem;
  }
`