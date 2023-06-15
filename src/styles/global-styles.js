import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100vh;
        max-width: 100vw;
        font-size: 62.5%;
        font-family: 'Ubuntu', sans-serif;
    }

    a {
        text-decoration: none;
        color: black
    }

    ul {
        list-style-type: none;
    }

    button {
        border: none;
    }

    img {
      width: 150px;
    }
`