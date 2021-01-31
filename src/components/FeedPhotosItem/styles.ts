import styled from 'styled-components';

import view from '../../assets/visualizacao.svg';

export const Container = styled.li`
    display: grid;
    border-radius: 0.32rem;
    overflow: hidden;
    cursor: pointer;

    img {
        grid-area: 1/1;
    }

    span {
        grid-area: 1/1;

        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: none;

        &::before {
            width: 16px;
            height: 16px;
            content: '';
            display: inline-block;
            margin-right: 0.32rem;
            background: url(${view}) no-repeat;
        }
    }

    &:hover span {
        display: flex;
    }

    &:nth-child(2) {
        grid-column: 2 / 4;
        grid-row: span 2;

        @media (max-width: 640px) {
            grid-column: initial;
            grid-row: initial;
        }
    }
`;
