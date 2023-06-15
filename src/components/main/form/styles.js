import { styled } from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px 0 10px;
`

export const Input = styled.input`
  border: none;
  background-color: white;
  opacity: ${({$displayNone}) => $displayNone ? '0' : '1'};

  &:focus {
    outline: 0;
  }
`

export const InputContainer = styled.div`
  padding: 8px;
  border-radius: 5px;
  border: 3px solid rgb(102, 102, 102);
  margin-right: 10px;
`