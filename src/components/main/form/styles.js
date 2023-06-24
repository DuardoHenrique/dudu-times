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

export const ButtonSearch = styled.button`
  padding: 5px 7px;
  border-radius: 8px;
  background-color: #aabdca;
  transition: all .5s;
  pointer-events: ${({disabled}) => disabled ? 'none' : 'all'};

  &:hover {
    background-color: #6AA1C6;
  }
`

export const InputContainer = styled.div`
  padding: 8px;
  border-radius: 5px;
  border: 3px solid rgb(102, 102, 102);
  margin-right: 10px;
`