import styled from 'styled-components';

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.2rem;
    margin-bottom: 3.2rem;
    padding: 0 1.6rem;

    #img {
        margin-bottom: 1.6rem;
    }

    p {
        color: #f31;
        margin-top: 1.6rem;
    }
`;

export const Preview = styled.div`
    div {
        border-radius: 1.6rem;
        background-size: cover;
        background-position: center center;
    }

    div::after {
        content: '';
        display: block;
        height: 0;
        padding-bottom: 100%;
    }
`;
