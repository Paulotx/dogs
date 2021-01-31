import styled from 'styled-components';

export const Container = styled.div`
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
