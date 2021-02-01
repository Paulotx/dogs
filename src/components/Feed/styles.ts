import styled from 'styled-components';

import view from '../../assets/visualizacao.svg';

export const Container = styled.div`
    padding: 0 1.6rem;
`;

export const FeedPhotos = styled.div`
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.6rem;
        margin-bottom: 1.6rem;
        align-items: center;

        @media (max-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

export const FeedPhotosItem = styled.li`
    display: grid;
    border-radius: 0.32rem;
    overflow: hidden;
    cursor: pointer;

    div {
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

export const ModalPhoto = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    display: flex;
    z-index: 1000;
    padding: 3.2rem calc(6.4rem + 15px) 3.2rem 6.4rem;

    @media (max-width: 640px) {
        padding: 3.2rem calc(3.2rem + 15px) 3.2rem 3.2rem;
    }
`;
