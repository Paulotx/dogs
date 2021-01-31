import styled from 'styled-components';

import view from '../../assets/visualizacao-black.svg';

export const Container = styled.div`
    margin: auto;
    height: 57.8rem;
    border-radius: 0.32rem;
    background: #fff;
    display: grid;
    grid-template-columns: 57.8rem 32rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.8);
    animation: scaleUp 0.3s forwards;

    @keyframes scaleUp {
        to {
            opacity: initial;
            transform: initial;
        }
    }

    @media (max-width: 1024px) {
        height: auto;
        max-width: calc(100vh - 6.4rem);
        overflow-y: auto;
        grid-template-columns: minmax(32rem, 64rem);
    }

    .details {
        padding: 3.2rem 3.2rem 0 3.2rem;

        p {
            opacity: 0.5;
            margin-bottom: 1.6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            a:hover {
                text-decoration: underline;
            }

            span::before {
                content: '';
                display: inline-block;
                width: 16px;
                height: 10px;
                margin-right: 0.8rem;
                background: url(${view});
            }
        }

        ul {
            display: flex;
            font-size: 1.8rem;
            font-weight: bold;
            margin-top: 1.6rem;
            margin-bottom: 3.2rem;

            li {
                margin-right: 3.2rem;
            }

            li::before {
                content: '';
                display: inline-block;
                height: 20px;
                margin-right: 0.8rem;
                position: relative;
                top: 4px;
                width: 2px;
                background: #333;
                margin-top: 5px;
            }
        }
    }

    .img {
        grid-row: 1/4;

        @media (max-width: 1024px) {
            grid-row: 1;
        }
    }

    .comments {
        ul {
            padding: 0 3.2rem;
            overflow-y: auto;
            word-break: break-word;

            li {
                margin-bottom: 0.8rem;
                line-height: 1.2;
            }
        }

        .photoComments {
            form {
                display: grid;
                grid-template-columns: 1fr auto;
                align-items: stretch;
                margin: 1.6rem;

                textarea {
                    display: block;
                    width: 100%;
                    font-size: 1.6rem;
                    font-family: var(--type-first);
                    resize: none;
                    border: 1px solid #eee;
                    padding: 0.8rem;
                    border-radius: 0.32rem;
                    background: #eee;
                    transition: 0.2s;
                }

                textarea:focus,
                textarea:hover {
                    outline: none;
                    border-color: #fb1;
                    background: #fff;
                    box-shadow: 0 0 0 3px #fea;
                }

                button {
                    border: none;
                    cursor: pointer;
                    color: #333;
                    background: transparent;
                    font-size: 1.6rem;
                    padding: 0 1.6rem;
                    overflow: hidden;
                    outline: none;
                }

                button:hover svg {
                    fill: #fea;
                    stroke: #fb1;
                }

                button:hover svg g {
                    animation: latir 0.6s infinite;
                }

                @keyframes latir {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }
        }
    }
`;
