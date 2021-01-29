import styled from 'styled-components';

import bg from '../../../assets/login.jpg';

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 3.2rem;

    &::before {
        display: block;
        content: '';
        background: url(${bg}) no-repeat center center;
        background-size: cover;

        @media (max-width: 48rem) {
            display: none;
        }
    }

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
    }
`;

export const LoginContainer = styled.div`
    max-width: 48rem;
    padding: 1.6rem;

    @media (max-width: 48rem) {
        max-width: 100%;
    }
`;

export const LoginContent = styled.div`
    form {
        margin-bottom: 3.2rem;
    }

    & > a {
        display: inline-block;
        color: #666;
        padding: 0.8rem 0;
        line-height: 1;
    }

    & > a::after {
        content: '';
        height: 2px;
        width: 100%;
        background: currentColor;
        display: block;
    }

    & > div {
        margin-top: 6.4rem;

        h2 {
            font-family: var(--type-second);
            line-height: 1;
            font-size: 3.2rem;
        }

        h2::after {
            content: '';
            display: block;
            background: #ddd;
            height: 0.8rem;
            width: 4.8rem;
            border-radius: 0.32rem;
        }

        p {
            margin: 3.2rem 0;
        }

        a {
            font-size: 1.6rem;
            border: none;
            border-radius: 0.6rem;
            background: #fb1;
            color: #764701;
            min-width: 12rem;
            padding: 1.2rem 2rem;
            transition: 0.2s;

            &:hover,
            &:focus {
                outline: none;
                box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
            }

            &:disabled {
                opacity: 0.5;
                cursor: wait;
            }
        }
    }
`;
