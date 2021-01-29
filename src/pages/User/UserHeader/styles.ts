import styled from 'styled-components';

export const Container = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;
    position: relative;

    nav {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.6rem;

        a,
        button {
            background: #eee;
            border-radius: 0.32rem;
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid transparent;
            transition: 0.1s;
            cursor: pointer;
        }

        a:hover,
        a:focus,
        button:hover,
        button.focus {
            background: #fff;
            box-shadow: 0 0 0 3px #eee;
            border-color: #333;
            outline: none;
        }

        a.active {
            background: #fff;
            box-shadow: 0 0 0 3px #fea;
            border-color: #fb1;
        }

        .active svg > * {
            fill: #fb1;
        }
    }
`;
