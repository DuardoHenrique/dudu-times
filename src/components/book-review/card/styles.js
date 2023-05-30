import { styled } from "styled-components";

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 1.5rem;
    height: 10%;
`
export const ImgBook = styled.img`
    width: 200px;
    height: 70%;
    border-radius: 10px;
    opacity: .8;

    &:hover {
        opacity: 1;
    }
`

export const P = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
`

export const Span = styled.span`
    font-weight: 300;
`

export const Card = styled.div`
    background-color: ${({background}) => background};
    text-align: center;
    padding-top: 30px;
    height: 450px;
    border-radius: 10px;
`