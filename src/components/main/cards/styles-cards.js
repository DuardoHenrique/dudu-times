import { styled } from "styled-components";

export const A = styled.a`
  width: 95%;
  display: flex;
  justify-content: center;

  &:hover h2 {
    color: #4A4E50;
    text-decoration: underline;
  }
`

export const P = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #6c757b;
`

export const I = styled.i`
  color: #4F4A4F;
  margin-right: 2px;
`

export const Span = styled.span`
  color: #6c757b;
`

export const DivSource = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 10px;
`

export const DivImgTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  margin-bottom: 10px;
  min-height: 130px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
`