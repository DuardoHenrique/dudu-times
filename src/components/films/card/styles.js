import { styled } from "styled-components";

export const DivCardFilms = styled.div`
  text-align: center;
  min-width: 50%;
  margin-bottom: 50px;

  img {
    width: 400px;
  }
`

export const DivImgFilms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px black;
  width: 400px;
  height: 265px;
` 

export const DivSourceFilms = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
`

export const DivPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 15px;
  max-width: 200px;
  max-height: 265px;
  text-align: start;
  
  hr {
    width: 100%;
    color: white;
    height: 1px;
    background-color: black;
    margin: 10px 0;
  }

  p {
    font-size: 1.3rem;
 
    overflow: hidden;

    text-overflow: ellipsis;
  }
`