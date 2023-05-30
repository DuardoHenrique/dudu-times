import { styled } from "styled-components";

export const Ul = styled.ul`
    display: flex;
`

export const Li = styled.li`
    font-size: 2rem;
    &:not(:last-child) {
        margin-right: 20px;
    }
`