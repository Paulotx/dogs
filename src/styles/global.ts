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
        --type-second: 'Spectral', georgia;
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
        color: #333;
    }

    button {
        cursor: pointer;
    }

    .animeLeft {
        opacity: 0;
        transform: translateX(-20px);
        animation: animeLeft 0.3s forwards;
    }

    @keyframes animeLeft {
        to {
            opacity: 1;
            transform: initial;
        }
    }

    .title {
        font-family: var(--type-second);
        line-height: 1;
        font-size: 4.8rem;
        margin: 1.6rem 0;
        position: relative;
        z-index: 1;
    }

    .title::after {
        content: '';
        display: block;
        width: 2.4rem;
        height: 2.4rem;
        background: #fb1;
        position: absolute;
        bottom: 5px;
        left: -5px;
        border-radius: 0.32rem;
        z-index: -1;
    }

`;
