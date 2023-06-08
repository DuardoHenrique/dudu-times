import { styled } from "styled-components"

export const H2 = styled.h2`
       font-size: 2.2rem;
       color: ${({$colorWhite}) => $colorWhite ? 'white' : '#1b1212'};
       margin-bottom: 10px;

       @media(max-width: 540px) {
      font-size: 1.9rem;
    }       
`

export const H3 = styled.h3`
  font-size: 1.9rem;
  color: #4F4A4F;
`

export const I = styled.i`
  font-size: 1.3rem;
  margin-left: 5px;
  `
export const P = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-left: ${({$noMargin }) => $noMargin ? '0' : '20px'};
  color: #6c757b;
  
  @media(max-width: 540px) {
    font-size: 1.6rem;
  }
`

export const A = styled.a`
  font-size: 1.5rem;
  margin-left: 20px;
  color: #6c757b;

  &:hover {
    text-decoration: underline;
    color: #E38622;
  }
`

export const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 10%;
  width: 300px;
  `

export const RankBook = styled.span`
  position: absolute;
  font-size: 1.7rem;
  color: #6c757b;
  top: 5px;
  left: 10px;
`

export const ImgBook = styled.img`
  max-width: 200px;
  height: 300px;
  border-radius: 10px;
`

export const Span = styled.span`
  font-weight: 500;
  color: #6c757b;
`

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 300px;
`

export const DivImg = styled.div`
  display: grid;
  place-items: center;
  box-shadow: 0 0 3px black;
  padding-inline: 10px;
  min-width: 200px;
  height: 300px;
  border-radius: 10px;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #dbe8f1;
  padding: 10px 20px;
  width: auto;
  min-height: 490px;
  border-radius: 10px;

  &:hover {
      transform: ${({scale}) => scale ? 'scale(1.03)' : 'none'};
  }

  @media(max-width: 840px) {
    flex-direction: column;
  }

  @media(max-width: 540px) {
    width: 90%;
  }    
`