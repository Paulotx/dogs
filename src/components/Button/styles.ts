import styled from 'styled-components';

export const Container = styled.button`
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
`;
