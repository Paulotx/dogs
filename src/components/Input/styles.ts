import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 1.6rem;

    input {
        border: 1px solid #eee;
        display: block;
        width: 100%;
        font-size: 1.6rem;
        padding: 1.2rem;
        border-radius: 0.6rem;
        background: #eee;
        transition: 0.2s;

        &:focus,
        &:hover {
            outline: none;
            border-color: #fb1;
            background: #fff;
            box-shadow: 0 0 0 3px #fea;
        }
    }

    label {
        display: block;
        font-size: 1.6rem;
        line-height: 1;
        padding-bottom: 0.8rem;
    }

    p {
        color: #f31;
        font-size: 1.4rem;
        margin-top: 0.4rem;
    }
`;
