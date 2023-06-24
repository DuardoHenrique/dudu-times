import { styled } from "styled-components";

export const DivCardFilms = styled.div`
  text-align: center;
  width: 600px;
  margin-bottom: 50px;

  img {
    width: 400px;
  }

  @media(max-width: 630px) {
    width: 80%;

    img {
      width: 300px;
    }
  }
`

export const DivData = styled.div`
  display: flex;

  @media(max-width: 630px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

    @media(max-width: 630px) {
      width: 100%;
      margin-top: 10px;
    }
`

export const DivPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 15px;
  width: 100%;
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

  @media(max-width: 630px) {
    margin-top: 10px;
  }
`