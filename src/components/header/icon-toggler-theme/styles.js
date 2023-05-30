import { styled } from "styled-components";  

export const ButtonTogglerTheme = styled.button`
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: ${({blink}) => `${blink} .8s infinite linear alternate-reverse`};
`
    /* animation: ${Blink} .8s infinite linear alternate-reverse;    */

export const I = styled.i`
    font-size: 1.7rem;
    position: absolute;
    color: ${({color}) => color};
    top: 2px;
    bottom: 0;
    left: 0;
    right: 0;
`

