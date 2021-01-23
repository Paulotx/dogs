import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 60.66%;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding-top: 6.4rem;
        margin: #333;
        --type-first: Helvetica, Arial, sans-serif;
        --type-second: 'Spectral', Georgia;
        font-family: var(--type-first);
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, p {
        margin: 0
    }

    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button, input {
        display: block;
        font-size: 1.6rem;
        font-family: var(--type-first);
        color: #333;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

`;
